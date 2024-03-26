---
title: "MongoDB: Single zu Multi Replica"
slug: "single-replica-mongoDB-to-multi-replica-mongoDB-migration"
ausgeblendet: false
ignore_macros: wahr
---

# MongoDB: Einzel- zu Multi-Replikat  

Der Migrationsprozess von einem einzelnen Replikat zu einem Multi-Replikat-Setup mit MongoDB Helm Chart umfasst mehrere Schritte. Diese Schritte werden im folgenden Abschnitt beschrieben. In diesem Leitfaden wird davon ausgegangen, dass die alte MongoDB-Installation im "default"-Namespace bereitgestellt wird, und wir installieren das neue MongoDB-ReplicaSet im "mongodb"-Namespace. Es wird dringend empfohlen, die Migration innerhalb des vorhandenen Clusters durchzuführen, da dies den Datenmigrationsprozess vereinfacht. 

## Einrichten des MongoDB-Helm-Diagramms mit mehreren Replikaten

1. Richten Sie ein MongoDB-Helm-Release mit 3 Replikaten ein, indem Sie der [offiziellen Anleitung](https://github.com/Cognigy/cognigy-mongodb-helm-chart) hier folgen.
2. Sie müssen das Root-Passwort in der neuen Konfiguration auf den gleichen Wert wie in der alten einrichten. Sie können das Root-Passwort für die vorhandene Installation herausfinden, indem Sie den folgenden Befehl auf dem aktuellen Kubernetes-Cluster ausführen:
'''
kubectl get secret -n default cognigy-mongo-server -ojsonpath='{.data.mongo-initdb-root-password}' | base64 --decodieren
'''
Verwenden Sie dieses Passwort als 'auth.rootPassword' und 'metrics.password' in der Datei 'values_prod.yaml' für das neue Setup.

## Ändern von Geheimnissen für MongoDB-Verbindungszeichenfolgen

Für den Zugriff auf MongoDB verwenden Cognigy.AI Dienste Kubernetes-Geheimnisse, die eine Datenbankverbindungszeichenfolge enthalten. Die Secrets müssen für das neue MongoDB-Setup angepasst werden. Um diesen Prozess zu automatisieren, befindet sich ein Skript im Repository [this](https://github.com/Cognigy/cognigy-mongodb-helm-chart). Stellen Sie sicher, dass alle alten Geheimnisse im Ordner "secrets" gespeichert sind, bevor Sie das Skript ausführen:**
'''bash
git clone https://github.com/Cognigy/cognigy-mongodb-helm-chart.git
CD-Skripte
chmod +x secrets-migration.sh
./secrets-migration.sh
'''
Das Skript fragt nach der aktuellen MongoDB-Verbindungszeichenfolge, d. h.:
'''
mongo-server:27017
'''
und für eine Ersetzung, die die neue Verbindungszeichenfolge enthält, d. h.:
'''
mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017
'''
Führen Sie das Skript aus: 
'''bash
./secrets-migration.sh
Geben Sie den aktuellen MongoDB-Host ein: mongo-server:27017
Geben Sie neue(n) MongoDB-Host(s) ein: mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-1.mongodb-headless.mongodb.svc.cluster.local:27017,mongodb-2.mongodb-headless.mongodb.svc.cluster.local:27017
'''
Das Skript speichert alle relevanten alten Geheimnisse in einem Ordner namens 'original_secrets' und die angepassten in einem Ordner namens 'new_secrets'.

## MongoDB-Datenmigration

1. Dieser Schritt erfordert eine Ausfallzeit Ihrer Cognigy.AI Installation. Bevor Sie mit der MongoDB-Datenmigration beginnen, müssen Sie die Cognigy.AI Installationsbereitstellungen herunterskalieren:
    '''bash
    for i in $(kubectl get deployment --namespace default --template '{{range .items}}{{.metadata.name}}{{"\n"}}{{end}}'|grep service-)
    Fass
    kubectl --namespace Standardskalierung --replicas=0 Bereitstellung $i
    fertig
    '''

2. Ermitteln Sie den primären Knoten des neuen mongoDB-Clusters, indem Sie 'rs.status()' ausführen:
    '''bash
    kubectl exec -it -n mongodb mongodb-0 bash
    mongo -u root -p $MONGODB_ROOT_PASSWORD --authenticationDatenbankadministrator
    rs.status()
    '''

3. Wenn Sie das Multi-Replica-MongoDB-Setup einrichten:
   
* auf einem anderen Kubernetes-Cluster – fahren Sie mit Schritt 5 fort. 
    * auf demselben Kubernetes-Cluster, in dem MongoDB mit einem Replikat ausgeführt wird – stellen Sie eine Verbindung mit dem primären MongoDB-Pod her. Wenn z. B. "mongodb-0" der primäre Knoten ist:
    '''bash
    kubectl exec -it mongodb-0 -n mongodb -- bash
    '''

4. Führen Sie nach dem Anfügen an den primären Pod des MongoDB-Setups mit mehreren Replikaten den folgenden Befehl aus, um ein Dump einer vorhandenen Datenbank zu erstellen und es in der MongoDB mit mehreren Replikaten wiederherzustellen:
    '''bash
    mongodump --archive --authenticationDatabase admin -u admin -p --host "mongo-server.default.svc:27017" <password> | mongorestore --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017" --authenticationDatabase admin -u root -p -- <password> archive --drop
    '''

5. Wenn Sie das MongoDB-Setup mit mehreren Replikaten auf einem anderen Kubernetes-Cluster einrichten, müssen Sie die vorhandene Datenbank in Ihr lokales Client-Dateisystem kopieren und anschließend in das Multi-Replikat-Setup importieren. Die Dauer dieses Vorgangs hängt stark von der Größe Ihrer Datenbank und der Geschwindigkeit Ihrer Internetverbindung ab. Um den Prozess zu beschleunigen, können Sie die Befehle von einem Server ausführen, der im selben Rechenzentrum ausgeführt wird, in dem Ihre Kubernetes-Cluster ausgeführt werden. Falls Sie diesem Szenario folgen, empfehlen wir dringend, den Speicherabbildprozess im Voraus zu testen, um die Ausfalldauer zu bewerten:

1. Um einen Dump in das lokale Dateisystem zu erstellen, melden Sie sich beim alten MongoDB-Pod mit einem Replikat an:
    '''bash
    kubectl exec -it deployment/mongo-server -- bash
    mkdir -p ./tmp/backup
    mongodump --authenticationDatabase admin -u admin -p --host " <password> mongo-server.default.svc:27017" --out ./tmp/backup
    Ausgang
    kubectl cp -n default <mongodb-pod-id>:/tmp/backup <path-to-the-local-directory>
    '''
    2. Importieren Sie die Daten in einen MongoDB-Cluster mit mehreren Replikaten:
    '''bash
    kubectl cp -n mongodb <path-to-the-local-directory> mongodb-0:/tmp/
    kubectl exec -it mongodb-0 -n mongodb -- bash
    mongorestore --host "mongodb-0.mongodb-headless.mongodb.svc.cluster.local:27017" --authenticationDatabase admin -u root -p ./ <password> tmp/<backup-folder>
    '''
   Hier wurde 'mongodb-0' als primärer Knoten betrachtet. Ändern Sie es, wenn Sie einen anderen primären Knoten haben, z. B. 'mongodb-1' oder 'mongodb-2'.

6. Ersetzen Sie die vorhandenen Geheimnisse durch neue Geheimnisse:
    '''bash
    kubectl replace -f new_secrets
    '''
   Im Falle eines Rollbacks können die alten Geheimnisse wiederhergestellt werden, indem Folgendes ausgeführt wird:
    '''bash
    kubectl delete -f new_secrets
    kubectl apply -f original_secrets
    '''
7. Skalieren Sie alle Bereitstellungen wieder hoch, um zu überprüfen, ob alles wie erwartet funktioniert.
8. Verschieben Sie die Geheimnisse aus dem Ordner "new_secrets" in den Ordner "Geheimnisse" und löschen Sie den Ordner "original_secrets".</backup-folder></password></path-to-the-local-directory></path-to-the-local-directory></mongodb-pod-id></password></password></password>