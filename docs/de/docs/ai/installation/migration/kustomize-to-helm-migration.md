---
Titel: "Kustomize to Helm"
Slug: "Kustomize-to-Helm-Migration"
ausgeblendet: false
ignore_macros: wahr
---

# Kustomize zum Helm 

## Voraussetzungen

- Kubernetes v1.21 - 1.23.
- Lokal auf dem Linux- oder macOS-Client-Host installiertes Dienstprogramm Kubectl. Das folgende Handbuch unterstützt keine Windows-Clienthosts.
- [Helm](https://helm.sh/) v3.8+ auf dem Client-Host installiert.
- [Yq](https://github.com/mikefarah/yq/) auf dem Client-Host installiert.
- Der Kubernetes-Cluster erfüllt allgemeine Cognigy.AI [Voraussetzungen](https://docs.cognigy.com/ai/installation/prerequisites/#whitelisting-of-domains), einschließlich Hardwareressourcen.
- Die Sicherung von Cognigy-Geheimnissen für die Kustomize-Installation (MongoDB- und Redis-Verbindungszeichenfolgen) liegt in Form von Kubernetes-Manifesten vor.
- [Multi-replica MongoDB Helm Chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) wird verwendet. Cognigy.AI Helm-Diagramm ist nicht mit der MongoDB-Installation (Mongo-Server) mit einem Replikat kompatibel. Wenn Sie noch nicht von einem zu einem Multi-Replikat migriert sind, befolgen Sie die Anweisungen [Migrationsanleitung](single-replica-mongoDB-to-multi-replica-mongoDB-migration.md). 
- Cognigy.AI Kustomize-Installation muss während der Migration die gleiche Version wie Cognigy.AI Helm Chart haben.
- Cognigy.AI Kustomize-Installation muss >= v4.38 sein.
- Snapshots/Backups aller PVCs/PVs (MongoDB, Redis-Persistent, Flow-Module, Flow-Funktionen) werden vor Beginn der Migration erstellt.

## Checkliste für die Migration 

Hier werden 2 Migrationsszenarien betrachtet:
   
- **Migration innerhalb des vorhandenen Clusters.** Cognigy.AI Helm-Chart im 'cognigy-ai'-Namespace und MongoDB-Helm-Chart im 'mongodb'-Namespace werden zusammen mit der vorhandenen Kustomize-Installation installiert. Dieses Szenario wird dringend empfohlen, da dieser Prozess die Migration des vorhandenen Speichers erheblich vereinfacht.
- **Migration zu einem neuen Cluster.** Cognigy.AI- und MongoDB-Helm-Charts werden in einem neuen Cluster installiert. Dieses Szenario ist komplexer als das erste. Sie müssen entweder sicherstellen, dass der zugrunde liegende Speicher für vorhandene PVCs erneut an den neuen Cluster angefügt werden kann, oder die Daten aus Snapshots im neuen Cluster wiederherstellen.

Führen Sie vor Beginn der Migration die folgenden Schritte aus: 

- Stellen Sie sicher, dass Backups (Snapshots) für alle PVCs in Ihrem Cloud-Anbieter erstellt werden, einschließlich MongoDB, redis-persistent, flow-modules und functions.
- Stellen Sie sicher, dass ein Backup der Cognigy-Geheimnisse für die Kustomize-Installation vorhanden ist.
- Bereiten Sie die Wertedatei 'values_prod.yaml' für Cognigy.AI Helm-Chart vor, wie [hier](https://github.com/Cognigy/cognigy-ai-helm-chart) beschrieben. Stellen Sie sicher, dass alle Anpassungen (Patches) der aktuellen Kustomize-Installation, die von Ihrer Seite aus vorgenommen wurden, ordnungsgemäß in die Datei "values_prod.yaml" migriert werden: ENV-Variablen, Ressourcenanforderung/-limits, Anzahl der Replikate usw.
- Bereiten Sie das Skript aus dem Abschnitt [MongoDB-Datenbanken umbenennen](#rename-mongodb-databases) vor und geben Sie die erforderlichen Kennwortwerte im Voraus ein.

## Vorbereitung auf die Migration

In diesem Abschnitt wird das Verfahren zum Vorbereiten der Migration von Cognigy.AI von Kustomize zu Helm beschrieben. Diese Schritte können im Voraus durchgeführt werden, ohne dass Ihre Cognigy.AI Installation heruntergefahren wird.

### Geheimnisse

Während der Migration wird Cognigy.AI Produkt von "default" in einen anderen Namespace verschoben. In diesem Dokument betrachten wir 'cognigy-ai' als Ziel-Namespace, Sie können es durch einen Namespace Ihrer Wahl ersetzen, aber wir empfehlen dringend, den 'cognigy-ai'-Namespace zu verwenden. Daher ist es erforderlich, die vorhandenen Geheimnisse in den neuen Namespace zu migrieren und das Helm-Release über die migrierten Geheimnisse zu informieren. Führen Sie dazu die folgenden Schritte aus:

1. Die Migrationsskripte befinden sich in [diesem](https://github.com/Cognigy/cognigy-ai-helm-chart) Repository. Klonen Sie das Repository und checken Sie es in Ihre aktuelle Cognigy.AI Version aus:
'''bash
git clone https://github.com/Cognigy/cognigy-ai-helm-chart.git
git checkout tags/<release>
cd-skripte/kustomize-to-helm-migration-scripts
'''
2. Legen Sie eine Sicherungskopie der vorhandenen Geheimnisse im Ordner "secrets" ab.
3. Kopieren Sie den Ordner "secrets" in den Ordner "kustomize-to-helm-migration-scripts" 
4. Stellen Sie sicher, dass alle vorhandenen Geheimnisse im Ordner "secrets" gespeichert sind, bevor Sie das Skript ausführen.
5. Führen Sie das Skript aus, es generiert neue Geheimnisse für die Helm-Installation im Ordner 'migration-secrets':
'''bash
pip3 install -r Anforderungen:.txt
python3 secret-migration.py -ns cognigy-ai
'''
1. Wenden Sie die Geheimnisse in einen neuen "cognigy-ai"-Namespace an:
'''bash
kubectl create ns cognigy-ai
kubectl apply -f migration-secrets
'''
### Persistente Volumes

In diesem Unterabschnitt wird die Migration von persistenten Volumes für AWS (EBS und EFS mit efs-provisoner) und AZURE (Azure-Datenträger und Azure-Dateien) beschrieben. Wenn Ihr Cognigy.AI bei einem anderen Cloud-Anbieter bereitgestellt wird, müssen Sie die Migrationsschritte entsprechend anpassen.

In diesem Unterabschnitt wird das Szenario "Migration innerhalb des vorhandenen Clusters" behandelt. Für das Szenario **Migration zu einem neuen Cluster** müssen Sie die Daten aus Snapshots von persistenten Volumes wiederherstellen, die im alten Cluster erstellt wurden. Für den zweiten Fall stellen wir keine Befehle zur Verfügung, da dieser Prozess stark von der Einrichtung Ihres Cloud-Anbieters abhängt. Weitere Informationen finden Sie in den Sicherungs- und Wiederherstellungsprozessen Ihrer Infrastrukturdaten und in der Dokumentation Ihres Cloud-Anbieters.

1. Erstellen Sie Snapshots von bestehenden Cognigy.AI PVCs: 'flow-modules', 'functions', 'redis-persistent'
2. Um den Verlust von PVs während der Migration zu vermeiden, setzen Sie "Reclaim Policy" auf "Retain" für zugrunde liegende PVs von 3 oben genannten PVCs und notieren Sie sich die entsprechenden PV-Namen:
'''bash
# Holen Sie sich die PV-Namen für PVs, die an Flow-Module', 'functions', 'redis-persistent' PVCs der Kustomize-Installation angeschlossen sind:
kubectl get pv 
# Patchen Sie die Rückforderungsrichtlinie für PV, setzen Sie <pv-name> sie auf den NAMEN aus dem vorherigen Befehl, wiederholen Sie dies für alle 3 PVCs:
kubectl patch pv -p '{"spec": {" <pv-name> persistentVolumeReclaimPolicy":"Behalten"}}'
# Überprüfen Sie, ob sich die Rückforderungsrichtlinie in Beibehalten geändert hat: 
kubectl get pv
'''
1. Holen Sie sich die PV-IDs und notieren Sie sie:
'''bash
kubectl get pv | grep -E 'redis-persistent|flow-modules|functions'
for i in $(kubectl get pv | grep -E 'redis-persistent|flow-modules|functions' | awk '{print $1}')
Fass
Echo $i
fertig
'''
1. *(Nur AWS)* Rufen Sie die IDs der zugrunde liegenden Volumes (EFS-Dateifreigaben) für alle 2 oben genannten PVs ab und notieren Sie sie. Sie müssen diese IDs in den folgenden Schritten verwenden: 
'''bash
## Rufen Sie Details zu den PVs ab, die <pv-name> auf den NAMEN der an PV angeschlossenen Durchflussmodule, Funktionen und redispersistenten PVCs gesetzt sind:
kubectl describe pv <pv-name> 
## Beispiel für 'Flow Module' und 'Functions' PVs auf AWS: 
Quelle:
Typ: NFS (ein NFS-Mount, der die Lebensdauer eines Pods überdauert)
Server: fs-000000000001a.efs.eu-central-1.amazonaws.com
'''

1. *(nur AWS)*: Legen Sie die IDs der Volumes "flow-modules" und "functions" fest, die Sie im vorherigen Schritt in Ihrer "values_prod.yaml" für Cognigy.AI Helm-Diagramm erhalten haben:
'''Yaml
# Beispiel für AWS:
efs:
  flowModule:
    Kennung: "FS-00000000000001A"
  Funktionen:
    Kennung: "FS-00000000000001B"
'''
1. *(nur AWS)*: Fügen Sie für das Szenario **Migration innerhalb des vorhandenen Clusters** Anmerkungen und Bezeichnungen zu vorhandenen Speicherklassen "flow-modules" und "functions" und zugehörigen Rollenbindungen hinzu:
'''bash
## 'flow-modules' und 'functions' annotieren StorageClasses
kubectl annotate storageclass flow-modules meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label storageclass flow-modules app.kubernetes.io/managed-by=Helm
kubectl annotate storageclass-Funktionen meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label storageclass-Funktionen app.kubernetes.io/managed-by=Helm

## Nur AWS: Kommentieren verwandter ClusterRoleBindings
kubectl annotate clusterrolebindings efs-provisioner-flow-modules meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrolebindings efs-provisioner-flow-modules app.kubernetes.io/managed-by=Helm
kubectl annotate clusterrolebindings efs-provisioner-functions meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrolebindings efs-provisioner-functions app.kubernetes.io/managed-by=Helm
'''
7. Speichern Sie Backups von PVC-Manifesten für Kustomize- und Helm-Installationen:
'''bash
kubectl get pvc -n=default redis-persistent -o yaml > redis-persistent-pvc-kustomize.yaml
kubectl get pvc -n=default flow-modules -o yaml > flow-modules-pvc-kustomize.yaml
kubectl get pvc -n=Standardfunktionen -o yaml > functions-pvc-kustomize.yaml
'''
8. Erstellen Sie eine weitere Kopie der PVC-Manifeste, die im nächsten Schritt geändert werden:

'''bash
kubectl get pvc -n=default redis-persistent -o yaml > redis-persistent-pvc.yaml
kubectl get pvc -n=default flow-modules -o yaml > flow-modules-pvc.yaml
kubectl get pvc -n=Standardfunktionen -o yaml > functions-pvc.yaml
'''
9. Entfernen Sie unnötige Felder aus PVC:
'''bash
für i in redis-persistent-pvc flow-modules-pvc functions-pvc
Fass
    yq -i 'del(.metadata.annotations, .metadata.finalizers, .metadata.labels, .metadata.creationTimestamp, .metadata.resourceVersion, .metadata.uid, .status)' $i.yaml
fertig
'''
10. Bearbeiten Sie die in Schritt 8 gespeicherten PVC-Manifeste für alle 3 PVCs folgendermaßen:

1. Ändern Sie 'metadata.namespace' in 'cognigy-ai'. 
  2. Fügen Sie "meta.helm.sh/release-name: cognigy-ai" und "meta.helm.sh/release-namespace: cognigy-ai" unter "metadata.annotations" hinzu. 
  3. Fügen Sie "app.kubernetes.io/managed-by: Helm" unter "metadata.labels" hinzu.
  4. Ändern Sie 'spec.volumeName' in den Namen der jeweiligen PVs aus Schritt 2.

### Traefik

Wenn Sie standardmäßig den Reverse-Proxy 'Traefik' verwenden, der mit Cognigy.AI Installation ausgeliefert wird, müssen Sie die folgenden Befehle ausführen. Sie müssen diese Befehle nicht ausführen, wenn Sie einen Reverse-Proxy eines Drittanbieters verwenden:
'''bash
kubectl annotate clusterrole traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrole traefik app.kubernetes.io/managed-by=Helm
kubectl annotate clusterrolebindings traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label clusterrolebindings traefik app.kubernetes.io/managed-by=Helm
kubectl annotate ingressclass traefik meta.helm.sh/release-name=cognigy-ai meta.helm.sh/release-namespace=cognigy-ai
kubectl label ingressclass traefik app.kubernetes.io/managed-by=Helm
'''

## Migration 

In diesem Abschnitt wird die eigentliche Migration von Cognigy.AI von Kustomize zu Helm beschrieben. Die Migration erfordert eine Ausfallzeit Ihrer Cognigy.AI-Installation. Planen Sie entsprechend ein Wartungsfenster von mindestens 2 Stunden ein. 

### MongoDB-Datenbanken umbenennen
1. Verkleinern Sie die aktuelle Installation:
'''bash
for i in $(kubectl get deployment --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
Fass
    kubectl --namespace Standardskalierung --replicas=0 Bereitstellung $i
fertig
'''
1. Benennen Sie die Datenbanken um und legen Sie neue Benutzer an. In Cognigy.AI Helm Chart haben wir die Datenbank "service-analytics-collector-provider" in "service-analytics-collector" und "service-analytics-conversation-collector-provider" in "service-analytics-conversation" umbenannt. Um die Datenbanken umzubenennen, führen Sie das folgende Skript aus, geben Sie die Kennwortwerte im Voraus ein (siehe die Kommentare im Skript). Überprüfen Sie den Root-Benutzernamen für die MongoDB Helm-Installation ('root' oder 'admin') und verwenden Sie diesen <root_username> bei der Migration der Datenbanken.

!!! Warnung "Kompatibilität mit MongoDB-Migrationsskripten"
    Das folgende Skript ist nur mit dem [cognigy-mongodb-helm-chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart) kompatibel. Wenn Sie einen anderen MongoDB-Dienst verwenden (z. B. MongoDB Atlas), müssen Sie kompatible Befehle für Ihren Datenbankdienst finden, um die Datenbanken umzubenennen.

'''bash
   kubectl exec -it -n mongodb mongodb-0 bash

# Benennen Sie den Service-Analytics-Collector-Provider um, setzen Sie das Admin-Root-Passwort in <password>
   mongodump -u -p --authenticationDatabase admin --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local: <root_username> <password> 27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017" --archive --db=service-analytics-collector-provider | mongorestore -u admin -p -- <password> authenticationDatabase admin --archive --nsFrom='service-analytics-collector-provider.*' --nsTo='service-analytics-collector.*'

# Benennen Sie den Service-Analytics-Conversation-Collector-Provider um, setzen Sie das Admin-Root-Passwort in <password>
   mongodump -u -p --authenticationDatabase admin --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local: <root_username> <password> 27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017" --archive --db=service-analytics-conversation-collector-provider | mongorestore -u admin -p -- <password> authenticationDatabase admin --archive --nsFrom='service-analytics-conversation-collector-provider.*' --nsTo=' Service-Analytics-Konversation.*'

# Erstellen eines service-analytics-collector-Benutzers in der service-analytics-collector-Datenbank
   # Holen Sie sich das vorhandene Passwort aus dem Geheimnis 'cognigy-service-analytics-collector-provider' und fügen Sie es in <password-service-analytics-collector>:
   mongo -u - <root_username> p $MONGODB_ROOT_PASSWORD --authenticationDatenbankadministrator
   Verwenden von service-analytics-collector
   db.createUser({
   	Benutzer: "service-analytics-collector",
   	pwd: "<password-service-analytics-collector>",
   	Rollen: [
   		{ role: "readWrite", db: "service-analytics-collector" }
   	]
   });

# Erstellen Sie einen service-analytics-conversation-Benutzer in der service-analytics-conversation-Datenbank
   # Holen Sie sich das vorhandene Passwort aus dem Geheimnis 'cognigy-service-analytics-conversation-collector-provider' und geben Sie es in <password-service-analytics-conversation>ein:
   Verwenden von Service-Analytics-Conversation
   db.createUser({
   	Benutzer: "service-analytics-conversation",
   	pwd: "<password-service-analytics-conversation>",
   	Rollen: [
   		{ role: "readWrite", db: "service-analytics-conversation" }
   	]
   });

Ausgang
   Ausgang
   '''

### Migrieren von persistenten Volumes für Cognigy.AI

1. Befestigen Sie PVCs von 'Flow-Modulen', 'Funktionen' und 'Redis-Persistent' von Cognigy.AI Helm-Version an den vorhandenen PVs der Kustomize-Installation:
'''bash
## Dynamisch bereitgestellte PVCs für Flow-Module, Funktionen und redis-persistent während der Kustomization-Bereitstellung löschen
kubectl delete pvc -n=Standard-Durchflussmodule 
kubectl delete pvc -n=Standardfunktionen 
kubectl delete pvc -n=default redis-persistent  
## Überprüfen, ob dynamische PVCs entfernt wurden und ob PVs aus der Kustomize-Installation noch vorhanden sind
kubectl get pvc
kubectl get pvc -n=cognigy-ai
kubectl get pv
# PVs für 'flow-modules', 'functions' und 'redis-persistent' bearbeiten und den Abschnitt 'spec.claimRef:' komplett entfernen
kubectl patch pv -p '{"spec": {" <pv-name> claimRef": null}}' 
# Überprüfen Sie, ob sich der PV-Status von "Freigegeben" in "Verfügbar" geändert hat
kubectl get pv
'''

2. Stellen Sie die PVC-Manifeste bereit, die im Abschnitt [Persistente Volumes vorbereiten](#prepare-persistente-volumes) geändert wurden.

'''bash
# modifizierte PVCs auf den Cluster anwenden
kubectl apply -f redis-persistent-pvc.yaml
kubectl apply -f flow-modules-pvc.yaml
kubectl apply -f functions-pvc.yaml
# Überprüfen Sie, ob sich der Status von PVs und PVCs in Bound geändert hat:
kubectl get pv
kubectl get pvc -n=cognigy-ai
'''
### Migrieren Sie Cognigy.AI von Kustomize zu Helm

Führen Sie die folgenden Schritte für Cognigy.AI Migration aus:

1. Stellen Sie die Bereitstellungen von Cognigy.AI Helm-Version wieder her:

'''bash
Helm Registry Login cognigy.azurecr.io \
--Benutzername <your-username> \
--Passwort <your-password>

helm upgrade --install --namespace cognigy-ai cognigy-ai oci://cognigy.azurecr.io/helm/cognigy.ai --version HELM_CHART_VERSION --values values_prod.yaml
'''
2. Stellen Sie sicher, dass sich alle Bereitstellungen in einem Bereitschaftszustand befinden: 
'''bash
kubectl get deployments -n=cognigy-ai
'''
3. *(Traefik nur als Reverse-Proxy)* Falls sich 'EXTERNAL-IP' für den 'traefik'-Dienst vom Typ 'LoadBalancer' ändert, aktualisieren Sie die DNS-Einträge so, dass sie auf die neue 'EXTERNAL-IP' des 'traefik'-Dienstes verweisen. Wenn Sie Traefik Ingress mit AWS Classic Load Balancer verwenden, ändern Sie den CNAME der DNS-Einträge in die neue "EXTERNAL-IP". Überprüfen Sie den neuen externen IP/CNAME-Eintrag mit:
'''bash
kubectl get service -n=cognigy-ai traefik
'''

## Zurücksetzen

Falls Cognigy.AI Helm-Version nicht ordnungsgemäß funktioniert und ein Rollback erforderlich ist, führen Sie die folgenden Schritte aus:

1. Herunterskalieren der Cognigy.AI Helm Release-Bereitstellungen
'''bash
 
for i in $(kubectl get deployment --namespace cognigy-ai --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
Fass
    kubectl --namespace cognigy-ai scale --replicas=0 Bereitstellung $i
fertig
'''
2. PVCs für Helm-Release löschen:
'''
kubectl delete pvc -n=cognigy-ai flow-modules 
kubectl delete pvc -n=cognigy-ai Funktionen 
kubectl delete pvc -n=cognigy-ai redis-persistent  
'''
3. Stellen Sie PVCs für die Kustomize-Installation wieder her:
'''
kubectl apply -f redis-persistent-pvc-kustomize.yaml
kubectl apply -f flow-modules-pvc-kustomize.yaml
kubectl apply -f functions-pvc-kustomize.yaml
'''
4. Bringen Sie die Kustomize-Installation zurück:
'''
cd kubernetes/core/<environment>/product
kubectl apply -k ./
'''
5. Nachdem Cognigy.AI Kustomize-Installation ausgeführt wurde, können Sie die Helm-Version bereinigen, indem Sie den Namensraum "cognigy-ai" (den Namensraum der Helm-Version) vollständig entfernen:
'''
kubectl Namespace löschen cognigy-ai
'''

## Aufräumen

Nachdem Cognigy.AI Helm-Version ordnungsgemäß ausgeführt wurde, können Sie die Kustomize-Installation bereinigen und dazu die folgenden Schritte ausführen: 

1. Löschen Sie alte Datenbanken in MongoDB (setzen Sie 'MONGODB_ROOT_USER' auf 'root' oder 'admin' in Übereinstimmung mit 'values_prod.yaml' im MongoDB Helm Chart):
'''bash
kubectl exec -it -n mongodb mongodb-0 -- bash
mongo -u $MONGODB_ROOT_USER -p $MONGODB_ROOT_PASSWORD --authenticationDatenbankadministrator

# Service-Analytics-Collector-Provider löschen
Verwenden von service-analytics-collector-provider
db.dropDatabase()

# Löschen von service-analytics-conversation-collector-provider
Verwenden von Service-Analytics-Conversation-Collector-Provider
db.dropDatabase()
'''

2. Löschen Sie die Kustomize-Bereitstellungen, die im "default"-Namespace ausgeführt werden:
'''bash
for i in $(kubectl get deployment --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')             
Fass
    kubectl --namespace default löscht Bereitstellungs$i
fertig
'''

3. Löschen Sie die Dienste im 'default'-Namensraum:
'''bash
for i in $(kubectl get service --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}' | grep service-)
Fass
    kubectl --namespace Standard-Löschdienst $i
fertig
# RabbitMQ, Redis, Redis-Persistent und Traefik löschen
kubectl --namespace default delete svc rabbitmq redis redis-persistent traefik
'''
**Seien Sie vorsichtig beim Löschen des Dienstes, löschen Sie nicht den "Kubernetes"-Dienst.**

4. Löschen Sie die Ingresses im 'default'-Namensraum:
'''bash
for i in $(kubectl get ingress --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}')
Fass
    kubectl delete ingress $i --namespace default
fertig
'''

5. Löschen Sie PVCs aus dem 'default'-Namensraum (falls noch vorhanden): 
'''bash
kubectl delete pvc -n=Standard-Durchflussmodule
kubectl delete pvc -n=Standardfunktionen
kubectl delete pvc -n=default redis-persistent
'''

6. *(Optional)* Löschen Sie PVC für das MongoDB-Setup mit einem Replikat im Falle einer MongoDB-Migration von einem einzelnen Replikat zu einem MongoDB mit mehreren Replikaten:
'''bash
kubectl delete pvc mongodb -n default
'''

</environment></your-password></your-username></pv-name></password-service-analytics-conversation></password-service-analytics-conversation></password-service-analytics-collector></root_username></password-service-analytics-collector></password></password></root_username></password></password></password></root_username></password></root_username></pv-name></pv-name></pv-name></pv-name></release>