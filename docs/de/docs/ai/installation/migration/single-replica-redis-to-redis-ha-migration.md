---
title: "Redis: Migration von Single Replica zu Redis HA"
Slug: "Single-replica-redis-to-redis-ha-migration"
ausgeblendet: false
---
# Redis: Migration eines einzelnen Replikats zu Redis im Hochverfügbarkeitsmodus (HA)

Ab Cognigy.AI Version v4.65 ist das Redis-Setup mit einem einzelnen Replikat veraltet und wird durch Redis im Hochverfügbarkeitsmodus ersetzt.

## Vorbereiten der Redis- und persistenten Redis-HA-Konfiguration 

Vor dem Upgrade auf Cognigy.AI v4.65 müssen Sie die folgenden Schritte ausführen und die 'values.yaml' Ihres Cognigy.AI Helm-Releases entsprechend anpassen.

### Selbstverwaltete Redis-Installationen

Wenn Sie keine Redis und persistente Redis-Dienste verwenden, die mit AI Helm Chart bereitgestellt werden, und stattdessen selbstverwaltete externe Redis-Dienste bevorzugen, stellen Sie sicher, dass Sie die folgenden Variablen in Ihrer Datei "values.yaml" haben:
'''Yaml
statefulRedis:
  Aktiviert: false

statefulRedisPersistent:
  Aktiviert: false
'''
1. Um selbstverwaltete Redis-Installationen weiterhin zu verwenden, deaktivieren Sie neue Redis- und persistente Redis-HA-Bereitstellungen mit der folgenden Einstellung in "values.yaml":
   '''Yaml
   redisHa:
     Aktiviert: false
     
redisPersistentHa:
     Aktiviert: false
   '''
2. Entfernen Sie die Abschnitte "statefulRedis" und "statefulRedisPersistent" aus "values.yaml" und überspringen Sie die verbleibenden Schritte in diesem Migrationsleitfaden.
### Konfiguration der Cloud-Infrastruktur 

1. Redis und Redis persistent im HA-Modus werden mit 3 Replikaten bereitgestellt, um die Dienstverfügbarkeit zu erhöhen. Stellen Sie sicher, dass Ihr Kubernetes-Cluster über genügend freie Kapazität für zusätzliche Redis- und persistente Redis-Pods in HA-Setups verfügt. Insgesamt erfordern beide Konfigurationen eine zusätzliche Bereitstellung von 3 CPU-Kernen und 3 GB RAM im Cluster.
2. Überprüfen Sie 'reclaimPolicy' für die vorhandene 'redis-persistent' StorageClass mit dem folgenden Befehl:
'''bash
kubectl get storageclass redis-persistent -o yaml
'''
Wenn 'reclaimPolicy: Delete' ist, können Sie den Abschnitt [Persistent Volume Clean-up](#persistent-volume-clean-up) in diesem Handbuch überspringen. Wenn 'reclaimPolicy: Retain' ist, müssen Sie das persistente Volume und den zugrunde liegenden Datenträger manuell bereinigen, wie im Abschnitt [Bereinigung persistenter Volumes](#persistent-volume-clean-up) beschrieben.
3. Die Standardeinstellungen von Redis HA implizieren, dass Sie Ihren Cluster mit 3 Availability Zones (AZ) ausführen (Cognigy.AI empfohlene Einrichtung) und
Die Helm-Version erzeugt HA-Replikate in 3 AZs. Wenn Ihr Cluster ohne Availability Zones bereitgestellt wird, überschreiben Sie die zonale Option "podAntiAffinity" in "values.yaml":
'''Yaml
redisHa:
  Nachbildung:
    Affinität:
      podAntiAffinity:
        requiredDuringSchedulingIgnoredDuringExecution: []

redisPersistentHa:
  Nachbildung:
    Affinität:
      podAntiAffinity:
        requiredDuringSchedulingIgnoredDuringExecution: []
'''
4. Wenn Ihr Cloud-Anbieter weder AWS noch Azure ist, erstellen Sie die Speicherklasse "redis-persistent-ha" manuell. Alle festlegen
die Parameter für die neue 'redis-persistent-ha' StorageClass, die der bestehenden 'redis-persistent' StorageClass entsprechen: 
    * Holen Sie sich die vorhandene 'redis-persistent' StorageClass und speichern Sie sie in der Datei 'redis-persistent-ha.yaml':
    '''Muschel
    kubectl get storageclass redis-persistent -o yaml > redis-persistent-ha.yaml
    '''
    * Öffnen Sie die Datei 'redis-persistent-ha.yaml' in einem Texteditor. Ändern Sie das Feld 'name:' in 'redis-persistent-ha'. Entfernen Sie die Felder "uid:", "resourceVersion:" und "creationTimestamp:".
    * Speichern Sie die Datei und erstellen Sie die neue Speicherklasse "redis-persistent-ha", indem Sie sie auf den Cluster anwenden: "kubectl apply -f redis-persistent-ha.yaml".
    * Überprüfen Sie, ob die neue StorageClass im Cluster erstellt wurde: 'kubectl get storageclass redis-persistent-ha -o yaml'.
5. Wenn Ihr Cloud-Anbieter entweder AWS oder Azure ist, wird die Speicherklasse "redis-persistent-ha" automatisch erstellt. **Stellen Sie vor dem Upgrade der Helm-Version** sicher, dass: 
     * Auf AWS: Der "gp3"-Speicher und der "ebs.csi.aws.com"-Provisioner sind in Ihrem Cluster aktiviert.
     * In Azure: Der Speicherkontotyp "Premium_LRS" und der Bereitstellungsdienst "disk.csi.azure.com" sind in Ihrem Cluster aktiviert.
     * Alternativ können Sie die "redisPersistentHa"-Einstellungen im Abschnitt "storageClass:" überschreiben, um die Parameter der vorhandenen "redis-persistent"-Speicherklasse abzugleichen, siehe "values.yaml" für [AWS](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/c0474cfe67bbf28fa1aea728118a2ae5b0676498/values.yaml#L3909) und [Azure](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/c0474cfe67bbf28fa1aea728118a2ae5b0676498/values.yaml#L3954) Referenz.

### Migrieren von benutzerdefinierten Redis und persistenten Redis-Konfigurationen 

- Wenn Sie keine benutzerdefinierte Konfiguration in den Abschnitten "statefulRedis" und "statefulRedisPersistent" in Ihrer Cognigy.AI Helm-Version "values.yaml" haben, überspringen Sie diesen Abschnitt. 
- Wenn Sie eine benutzerdefinierte Konfiguration in den Abschnitten "statefulRedis" und/oder "statefulRedisPersistent" haben, müssen Sie diese unter "redisHa" kopieren
und 'redisPersistentHa' wie folgt:

* Wenn 'statefulRedis.auth.password' im Klartext definiert ist, kopieren Sie den Wert unter 'redisHa.auth.password'.
    * Wenn 'statefulRedisPersistent.auth.password' im Klartext definiert ist, kopieren Sie den Wert unter 'redisPersistentHa.auth.password'.
    * Wenn ein benutzerdefiniertes 'statefulRedis.auth.existingSecret' definiert ist, kopieren Sie seinen Wert unter 'redisHa.auth.existingSecret'. Stellen Sie sicher, dass der entsprechende benutzerdefinierte geheime Schlüssel im Cluster vorhanden ist.
    * Wenn ein benutzerdefiniertes 'statefulRedisPersistent.auth.existingSecret' definiert ist, kopieren Sie seinen Wert unter 'redisPersistentHa.auth.existingSecret'. Stellen Sie sicher, dass der entsprechende benutzerdefinierte geheime Schlüssel im Cluster vorhanden ist.
    * Wenn benutzerdefinierte 'resources' für 'statefulRedis' in Ihrer 'values.yaml' definiert sind, kopieren Sie den Abschnitt 'resources' (einschließlich 'requests' und 'limits') nach 'redisHa.replica.resources'. Legen Sie die Einstellung "maxmemory" unter dem Parameter "redisHa.replica.configuration" auf 85 % von "resources.limits.memory" fest.  Weitere Informationen finden Sie unter [values.yaml](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/c0474cfe67bbf28fa1aea728118a2ae5b0676498/values.yaml#L4494). 
    * Wenn benutzerdefinierte "Ressourcen" für "statefulRedisPersistent" in Ihrer "values.yaml" definiert sind, kopieren Sie den Abschnitt "resources" (einschließlich "requests" und "limits") in "redisPersistentHa.replica.resources". Weitere Informationen finden Sie unter [values.yaml](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/c0474cfe67bbf28fa1aea728118a2ae5b0676498/values.yaml#L4575).

## Upgrade Cognigy.AI Helm Release auf v4.65

1. Vergewissern Sie sich, dass alle Parameter in Ihrer Datei "values.yaml" wie oben beschrieben angepasst sind.
2. Führen Sie das Upgrade des Cognigy.AI Helm Release auf v4.65 wie gewohnt durch. Während des Upgrades:

* Neue StatefulSets "redis-ha-node" und "redis-persistent-ha-node" werden zusammen mit den entsprechenden Pods im Cluster erstellt.
    * Alte "redis"- und "redis-persistent"-Bereitstellungen und entsprechende Pods werden aus dem Cluster entfernt.
    * Cognigy.AI Dienste stellen die Verbindung zu Redis- und persistenten Redis-HA-Setups wieder her.
    * Vergewissern Sie sich, dass alle Pods wie erwartet ausgeführt werden, indem Sie Folgendes ausführen: 'kubectl get pods -n=cognigy-ai'.

## Bereinigung persistenter Volumes

Nachdem Sie Cognigy.AI auf v4.65 aktualisiert und überprüft haben, ob die Version ordnungsgemäß funktioniert, können Sie die verbleibenden persistenten 
Volume (PV) für das alte "redis-persistente" Deployment:

1. Wenn 'reclaimPolicy: Delete' für die alte 'redis-persistent' 'StorageClass' festgelegt wurde, überspringen Sie diesen Abschnitt. Die zugrunde liegenden PV und PVC werden automatisch gelöscht.
2. Wenn "reclaimPolicy: Retain" für die alte "redis-persistent"-"StorageClass" festgelegt wurde, entfernen Sie manuell die PV, die mit der alten "redis-persistent"-Bereitstellung verknüpft ist, und die zugrunde liegende Festplatte in Ihrer Cloud-Infrastruktur:

* Holen Sie sich PVs in Ihrem Cluster: 'kubectl get pv'.
    * Notieren Sie sich den Namen des PV im Zustand "Freigegeben" und CLAIM: "cognigy-ai/redis-persistent" (unten als "PV_NAME bezeichnet").
    * Löschen Sie das 'pv' mit 'kubectl delete pv PV_NAME'.
    * Löschen Sie die Speicherfestplatte, die "PV_NAME" in Ihrer Cloud-Umgebung entspricht.