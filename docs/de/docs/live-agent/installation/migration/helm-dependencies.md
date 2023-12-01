---
 title: "Migrationsleitfaden für Helm-Abhängigkeiten in Live Agent 4.44" 
 Slug: "migration-guide-helm-dependencies-4.44" 
 ausgeblendet: false 
---

# Migrationsleitfaden für Helm-Abhängigkeiten in Live Agent 4.44

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.44-blue.svg)] (.. /.. /.. /release-notes/4.44.md)

Dies ist ein Migrationsleitfaden für das Upgrade der Live Agent 4.44-Version. Mit dieser Version werden die Abhängigkeitsversionen von PostgreSQL und Redis aktualisiert. Diese wichtige Änderung erfordert eine manuelle Datenmigration, wenn Sie sie nicht extern verwenden.

Im Fall von Redis funktioniert es sofort nach dem Auspacken, aber für PostgreSQL müssen Sie die Daten von der alten Datenbank in die neue migrieren.

## Vorbereitungen vor der Migration

### Werte.yaml ändern

Werte unter '. Values.postgresql' sind ebenfalls betroffen. Nehmen Sie die erforderlichen Änderungen an Ihrer benutzerdefinierten Datei "values.yaml" vor.

| Alter Wert | Neuer Wert |
|-----------------------------------------------|------------------------------------------------------|
| 'Werte.postgresql.postgresqlDatenbank' | 'Werte.postgresql.auth.database' |
| 'Werte.postgresql.postgresqlBenutzername' | 'Werte.postgresql.auth.username' |
| 'Werte.postgresql.postgresqlPasswort' | 'Werte.postgresql.auth.postgresPassword' |
| 'Werte.postgresql.postgresqlHost' | 'Werte.postgresql.host' |
| 'Werte.postgresql.postgresqlPort' | 'Werte.postgresql.port' |
| 'Werte.postgresql.existingSecret' | 'Werte.postgresql.auth.existingSecret' |
| 'Werte.postgresql.existingPasswordSecretKey' | 'Werte.postgresql.auth.secretKeys.adminPasswordKey' |

Das cognigy-live-agent-Deployment heißt jetzt 'cognigy-live-agent-app'. Die Änderung gilt auch für den Dienst und den Eingang in Ihrer benutzerdefinierten Datei "values.yaml".

#### Alte Werte

'''Yaml
Eintritt:
  Aktiviert: true
  Anmerkungen:
    kubernetes.io/ingress.class: traefik
  Wirte:
    - Gastgeber: '<host>'
      Pfade:
        -Pfad:/
          pathType: Präfix
          Backend:
            Dienst:
              # Derselbe Wert wie service.name oben
              Name: Cognigy-Live-Agent
              Hafen:
                Nummer: 3000

Dienst:
  Name: Cognigy-Live-Agent
  interner Anschluss: 3000
  targetPort: 3000
  Typ: ClusterIP
  Anmerkungen: {}
'''

#### Neue Werte

'''Yaml
Eintritt:
  Aktiviert: true
  Anmerkungen:
    kubernetes.io/ingress.class: traefik
  Wirte:
    - Gastgeber: '<host>'
      Pfade:
        -Pfad:/
          pathType: Präfix
          Backend:
            Dienst:
              # Derselbe Wert wie service.name oben
              Name: cognigy-live-agent-app
              Hafen:
                Nummer: 3000

Dienst:
  Name: cognigy-live-agent-app
  interner Anschluss: 3000
  targetPort: 3000
  Typ: ClusterIP
  Anmerkungen: {}
'''

### backup-pod.yaml erstellen

Für den Zugriff auf die PostgreSQL-Datenbank ist ein Backup-Pod erforderlich. Dieser Pod erstellt ein Backup und stellt es in der neuen Datenbank wieder her. Die Größe des Backup-Pods muss mindestens dreimal so groß sein, dass der Dump gespeichert werden kann.

#### Berechnen Sie die Größe der Datenbank

Um die Größe der Datenbank zu ermitteln, können Sie den folgenden Befehl ausführen:

'''sch
kubectl exec -n live-agent -it <postgresql-pod-name> -- psql -U - <postgresql-username> d live_agent_production -c "SELECT pg_database_size('live_agent_production')/1024/1024/1024 AS size_in_gb;"
'''

Die Ausgabe sieht in etwa so aus:

'''sch
 size_in_gb
------------
  1.0000000
(1 Reihe)
'''

Die Größe des Backup-Pods sollte mindestens 3 GB betragen.

#### backup-pod.yaml

'''Yaml
# Erstellen Sie eine neue Datei backup-pod.yaml
apiVersion: storage.k8s.io/v1
allowVolumeExpansion: true
Kunst: StorageClass
Metadaten:
  Name: postgres-backup
Anbieter: ebs.csi.aws.com
volumeBindingMode: WaitForFirstConsumer
Parameter:
  Typ: GP3
  Verschlüsselt: 'true'
  fsTyp: ext4
reclaimPolicy: Beibehalten

---
apiVersion: apps/v1
Art: Zustandsbehaftetes Set
Metadaten:
  Etiketten:
    App: Postgres-Backup
  Name: postgres-backup
  Namensraum: live-agent
Spekulation:
  serviceName: postgres-backup
  Repliken: 1
  Selektor:
    matchLabels:
      App: Postgres-Backup
  Schablone:
    Metadaten:
      Name: postgres-backup
      Etiketten:
        App: Postgres-Backup
    Spekulation:
      Container:
        - Bild: Postgres:11-Alpine
          Name: postgres-backup
          Env:
            - Bezeichnung: POSTGRES_PASSWORD
              value: postgres # Dies ist das Passwort für den Postgres-Admin-Benutzer (kann aus dem Geheimnis 'cognigy-live-agent-postgresql' abgerufen werden)
            - Name: PGPASSWORD
              value: postgres # Dies ist das Passwort für den Postgres-Admin-Benutzer (kann aus dem Geheimnis 'cognigy-live-agent-postgresql' abgerufen werden)
            - Bezeichnung: POSTGRES_USER
              value: postgres # Dies ist der Benutzername, der in der Datei values.yaml angegeben ist
            # - Name: PGDATA
            # Wert: /var/lib/postgresql/data/pgdata
          Häfen:
            - containerHafen: 5432
          Ressourcen: {}
          volumeMounts:
            - mountPath: /mnt/postgres-backup
              Name: postgres-backup-claim
      restartPolicy: Immer
  volumeClaimTemplates:
    -Metadaten:
        Name: postgres-backup-claim
      Spekulation:
        accessModes: ['ReadWriteOnce']
        storageClassName: 'postgres-backup'
        Betriebsmittel:
          Aufforderungen:
            Speicher: 100Gi # Dies ist die Größe des Backup-Pods

---
apiVersion: v1
Art: Dienstleistung
Metadaten:
  Etiketten:
    App: Postgres-Backup
  Name: postgres-backup
  Namensraum: live-agent
Spekulation:
  Häfen:
    - Name: 'postgres-backup'
      Hafen: 5432
      targetPort: 5432
  Selektor:
    App: Postgres-Backup
  clusterIP: Keine
'''

Führen Sie den folgenden Befehl aus, um den Backup-Pod bereitzustellen:

'''sch
kubectl apply -n live-agent -f backup-pod.yaml
'''

## Schritte zur Migration

### Schritt 1. Legen Sie die Anzahl der Replikate auf 0 fest.

Geben Sie für App- und Workerreplikatgruppen in der Anzahl der Replikate den Wert "0" an. Es stellt sicher, dass die Datenbank keine Aktivität aufweist und die Daten sicher gesichert werden.

'''sch
kubectl scale --replicas=0 -n Live-Agent-Bereitstellung/cognigy-live-agent
kubectl scale --replicas=0 -n live-agent-bereitstellung/cognigy-live-agent-worker
kubectl scale --replicas=0 -n Live-Agent-Bereitstellung/cognigy-live-agent-odata
'''

!!! Anmerkung
    In der vorherigen Version hieß das Deployment "cognigy-live-agent-app" immer noch "cognigy-live-agent".

### Schritt 2. Fügen Sie eine Shell an den PostgreSQL-Backup-Pod an und erstellen Sie eine Sicherung der Live Agent-Datenbank

Melden Sie sich beim postgres-backup-Pod an und erstellen Sie einen Dump der "live_agent_production"-Datenbank.

'''sch
kubectl exec -n live-agent -it postgres-backup-0 -- bash

# Innerhalb des PostgreSQL-Backup-Pods
cd /mnt/postgres-backup/

nohup time pg_dump --user $POSTGRES_USER --host cognigy-live-agent-postgresql -d live_agent_production > live_agent_production-postgres-dump.sql &

# (Alternative) Einen komprimierten Dump erstellen, aber das dauert länger
nohup pg_dump --user $POSTGRES_USER --host cognigy-live-agent-postgresql -fc -d live_agent_production > live_agent_production-postgres-dump.sql &
'''

Das Präfix 'nohup' und das Suffix '&' werden im Befehl 'pg_dump' verwendet, um ihn im Hintergrund auszuführen. Sie können den Hintergrundbefehl der aktuellen Sitzung mit dem Befehl 'fg' importieren und den Status der Hintergrundjobs mit dem Befehl 'jobs' überprüfen.

'''sch
bash-5.1# Jobs
[1]+ Ausführen von nohup pg_dump --user $POSTGRES_USER --host cognigy-live-agent-postgresql -d live_agent_production > live_agent_production-postgres-dump.sql &

# Wenn es fertig ist, überprüfen Sie die Ausgabe der Backup-Datei
cat live_agent_production-postgres-dump.sql

Ausgang
'''

Sobald dies erledigt ist, sollte der Befehl 'jobs' keine Ausgabe ausgeben.

### Schritt 3. Löschen Sie die aktuelle Version und überprüfen Sie die Richtlinie für die PVC-Rückgewinnung

Wenn sich die PostgreSQL- und Redis-Versionen geändert haben, sind die PVCs nicht mehr mit den neuen Versionen kompatibel. Um die Kompatibilität wiederherzustellen, löschen Sie die aktuelle Version und die PVCs, und überprüfen Sie dann die Richtlinie für die PVC-Rückforderung von Live Agent.

'''sch
# Überprüfen Sie, ob PVs auf Beibehalten gesetzt sind:
kubectl get pv
# Patchen Sie die Rückforderungsrichtlinie für den EFS-Speicher-PV, <pv-name> die auf den Namen aus dem vorherigen Befehl festgelegt ist
# Wiederholen Sie den Vorgang für alle PV-Vorgänge im Zusammenhang mit LA, die nicht auf "Retain" eingestellt sind
kubectl patch pv -p '{"spec": {" <pv-name> persistentVolumeReclaimPolicy":"Behalten"}}'
# Vergewissern Sie sich, dass die Rückforderungsrichtlinie auf "Behalten" eingestellt ist:
kubectl get pv

# Aktuelle Version löschen
helm delete -n live-agent cognigy-live-agent

# Ändern Sie den EFS-Speicher-PV-Status von "Freigegeben" auf "Verfügbar"
kubectl patch pv -p '{"spec": {" <pv-name> claimRef": null}}'

# Überprüfen Sie die PVCs
kubectl get pvc -n live-agent

# Mit diesen Befehlen werden die Datenbank-Volumes gelöscht. Stellen Sie sicher, dass ein Backup erstellt wurde, bevor Sie fortfahren
kubectl delete pvc -n live-agent <data-postgres>
kubectl delete pvc -n live-agent <redis>
kubectl delete pvc -n live-agent <redis-replica>
'''

### Schritt 4. Löschen oder Ändern vorhandener Datenbankgeheimnisse

Die vorhandenen Geheimnisse müssen gelöscht oder mit den neuen Schlüsseln geändert werden. Das System generiert automatisch neue Geheimnisse in einem neuen Release, wenn vorhandene Geheimnisse nicht in der Wertedatei angegeben sind.

=== "Löschen Sie die Geheimnisse (empfohlen)"

Es wird empfohlen, die vorhandenen Geheimnisse zu löschen und die Kennwortfelder in der Wertedatei kommentiert zu lassen, um automatisch generierte Geheimnisse zu erhalten.

'''sch
    # Löschen Sie die Geheimnisse
    kubectl delete secret -n live-agent cognigy-live-agent-postgresql
    kubectl delete secret -n live-agent cognigy-live-agent-redis
    '''

=== "Ändere die vorhandenen Geheimnisse"

Als Alternative zum Löschen der Geheimnisse können Sie die vorhandenen ändern. Die einzige Änderung bei der Verwendung von internem PostgreSQL ist das neue PostgreSQL-Geheimnis. Es muss die folgenden Schlüssel enthalten:

'''sch
    # Das PostgreSQL-Admin-Passwort (. Werte.postgresql.auth.secretKeys.adminPasswordKey)
    postgres-passwort
    # Neues Feld - Das PostgreSQL-Benutzerpasswort
    Passwort
    '''

Die Werte 'postgresql.auth.existingSecret' und 'postgresql.auth.secretKeys.adminPasswordKey' sind standardmäßig auf 'postgres-password' und 'password' gesetzt und müssen für die Verwendung des erstellten Secrets auskommentiert werden.   

### Schritt 5. Installieren der Diagrammversion 4.44.0

Um die vorherige Sicherung wiederherzustellen, installieren Sie die neue Version, ohne dass der Migrationsauftrag ausgeführt wird oder die Bereitstellungen auf die Datenbank zugreifen, da diese leer ist. Legen Sie den Migrationsauftrag in der Datei custom-values.yaml auf false fest, und verringern Sie die Anzahl der Replikate sowohl für die App als auch für den Worker auf 0:

'''Yaml
# benutzerdefinierte-werte.yaml
App:
  Replika: 0

Arbeiter:
  Replika: 0

OData:
  Aktiviert: false

Migration:
  Aktiviert: false
'''

Installieren Sie die neue Version des Diagramms:

'''sch
helm install cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version 4.44.0 --namespace live-agent -f custom-values.yaml
'''

Dann werden nur noch die Pods EFS, PostgreSQL und Redis ausgeführt.

### Schritt 6. Wiederherstellen des Backups auf dem neuen PostgreSQL-Pod

Fügen Sie eine Shell an den PostgreSQL-Backup-Pod an und stellen Sie die "live_agent_production"-Datenbank auf dem neuen PostgreSQL-Pod wieder her.

'''sch
# Melden Sie sich beim postgres-backup-0-Pod an
kubectl exec -n live-agent -it postgres-backup-0 -- bash

# Holen Sie sich das Passwort des neuen PostgreSQL aus dem geheimen Schlüssel 'cognigy-live-agent-postgresql' 'postgres-password' und exportieren Sie es in die Umgebungsvariable 'PGPASSWORD'
export PGPASSWORD=<password>

# Verbinden Sie sich mit der neu bereitgestellten PostgreSQL-Datenbank mit dem Befehl 'psql'
psql --host cognigy-live-agent-postgresql -U postgres -d postgres -p 5432

# Details von DBs auflisten
\l+

DATENBANK live_agent_production LÖSCHEN;

Datenbank-live_agent_production erstellen;

Erteilen Sie Postgres alle Berechtigungen für Datenbank live_agent_production;

# Details von DBs auflisten
\l+

# beenden
\q

cd /mnt/postgres-backup/

# Stellen Sie die Daten aus dem alten Postgres wieder her. Dies nimmt einige Zeit in Anspruch
nohup time psql --host cognigy-live-agent-postgresql -U postgres -d live_agent_production < live_agent_production-postgres-dump.sql &

# (Optional) Once restored, check postgres disk usages
PGPASSWORD=postgres psql --host cognigy-live-agent-postgresql -U postgres -d postgres -p 5432
# List details of DBs
\l+
```

### Step 7. Change custom-values.yaml

Enable the migrations job and increase the replica count to the desired number for the app and worker in the custom-values.yaml file.

```yaml
# custom-values.yaml
app:
  replica: 2

worker:
  replica: 3

# In case the OData service was enabled, enable it again
odata:
  enabled: true

migration:
  enabled: true
```

Upgrade the chart.

```sh
helm upgrade cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version 4.44.0 --namespace live-agent -f custom-values.yaml
```

### Step 8. Attach a shell and remove the onboarding variable

Attach the shell to the app pod and remove the onboarding variable in Redis. It ensures that the onboarding screen is not shown after accessing Live Agent.

```sh
# Attach a shell to the app pod
kubectl exec -n live-agent -it cognigy-live-agent-app-xxxxxxxxxx -- /bin/sh

# Execute a Rails console
RAILS_ENV=production bundle exec rails c

# Remove the onboarding variable from Redis
::Redis::Alfred.delete(::Redis::Alfred::CHATWOOT_INSTALLATION_ONBOARDING)
```

### Step 9. Access Live Agent and verify the content

Check existing conversations and settings to ensure everything is working as expected. Once everything has been checked, you can delete the backup.

```sh
# Delete the backup pod deployment, service, Storage Class and pvc
kubectl delete statefulset -n live-agent postgres-backup
kubectl delete service -n live-agent postgres-backup
kubectl delete sc postgres-backup
kubectl delete pvc -n live-agent <postgres-backup-pvc>
'''

Denken Sie daran, zu überprüfen, ob die freigegebenen persistenten Volumes gelöscht wurden. Wenn Sie Probleme haben, [technischen Support kontaktieren](https://support.cognigy.com/hc/en-us/requests/new?).
</postgres-backup-pvc></password></redis-replica></redis></data-postgres></pv-name></pv-name></pv-name></postgresql-username></postgresql-pod-name></host></host>