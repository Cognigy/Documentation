---
Titel: "Migrationshandbuch für Redis Sentinel in Live Agent 4.53"
Slug: "migration-guide-for-redis-sentinel-in-live-agent"
Beschreibung: "Dieser Migrationsleitfaden unterstützt Sie beim Aktualisieren des Redis-Diagramms, um Redis Sentinel für Hochverfügbarkeit in Live Agent Version 4.53 und höheren Versionen zu verwenden."
ausgeblendet: false
---

# Migrationsleitfaden für Redis Sentinel in Live Agent 4.53

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.53-blue.svg)] (.. /.. /.. /release-notes/4.53.md)

Dieser Migrationsleitfaden gilt für das Upgrade der Live Agent 4.53-Version. In dieser Version wird das Redis-Diagramm aktualisiert, um Redis Sentinel für Hochverfügbarkeit zu verwenden.

## Durchführen eines Standard-Upgrades

Der erste Schritt besteht darin, ein Standard-Upgrade des Live Agent-Diagramms auf die gewünschte neue Version durchzuführen, um sicherzustellen, dass der Migrationsauftrag ausgeführt wird, bevor Redis Sentinel aktiviert wird.

Wenn die Werte zuvor nicht angegeben wurden, stellen Sie sicher, dass der Sentinel-Modus in der Datei "values.yaml" deaktiviert ist.

'''Yaml
# ...

redis:
  Aktiviert: true
  Wache:
    Aktiviert: false
# ...
'''

Aktualisieren Sie das Diagramm auf die neueste Version.

'''bash
 helm upgrade cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version X.X.X --namespace live-agent -f custom-values.yaml
'''

## Werte.yaml ändern

Die neuen Werte für Version 4.53 enthalten bereits die neue Redis Sentinel-Konfiguration. Wenn Sie eine benutzerdefinierte Datei "values.yaml" verwenden, stellen Sie sicher, dass die neue Redis Sentinel-Konfiguration nicht überschrieben wird.

'''Yaml
# ...

redis:
  Aktiviert: true
  Wache:
    Aktiviert: true
# ...
'''

## Ändern der Hooks für Migrationsaufträge

Die Hooks für den Migrationsauftrag müssen vorübergehend in "post-install,post-upgrade" geändert werden, um den Migrationsauftrag nach dem Upgrade auszuführen. Andernfalls wird der Migrationsauftrag ausgeführt, bevor neue Redis-Pods erstellt werden, was zu einer fehlgeschlagenen Migration führt.

'''Yaml
# Migrationsauftrag (bei Bedarf auskommentieren)
Migration:
  Aktiviert: true
  Haken:
    wandern:
      # Die Einstellung hier überschreibt die Standardeinstellung, die "post-install,pre-upgrade" ist
      hookAnnotation: "nach der Installation, nach dem Upgrade"
'''

### Aktualisieren Sie das Diagramm

Aktualisieren Sie das Diagramm auf die neueste Version.

'''bash
 helm upgrade cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version X.X.X --namespace live-agent -f custom-values.yaml
'''

### Überprüfen der Funktionalität und des Pod-Status

Stellen Sie sicher, dass die Pods ausgeführt werden und die Anwendung ordnungsgemäß funktioniert, einschließlich des Bestehens der Systemdiagnose für den Start.

'''bash
kubectl get pods
'''

### Entfernen Sie die alten PVCs und PVs

Entfernen Sie vor dem Upgrade die vorherigen PVCs, die von den Redis-Pods verwendet wurden. Sie werden in der Regel wie folgt benannt:

- 'redis-data-cognigy-live-agent-redis-master-0'
- 'redis-data-cognigy-live-agent-redis-replicas-0'

Gehen Sie folgendermaßen vor, um die vorherigen PVCs und PVS zu entfernen:

1. Überprüfen Sie, ob der Status der PVCs jetzt "Freigegeben" ist:
   '''bash
   kubectl get pvc -n live-agent
   '''
2. PVCs löschen.
   '''bash
   kubectl delete pvc redis-data-cognigy-live-agent-redis-master-0 -n live-agent
   kubectl delete pvc redis-data-cognigy-live-agent-redis-replicas-0 -n live-agent
   '''
3. Vergewissern Sie sich, dass die PVs jetzt "Verfügbar" sind.
   '''bash
   kubectl get pv
   '''
4. PVs löschen.
   '''bash
   kubectl delete pv <pv_name> # Ersetzen <pv_name> Sie durch den Namen des PV, der den gelöschten PVCs zugeordnet ist
   '''

## Entfernen Sie die Hooks für den Migrationsauftrag nach dem Upgrade

Entfernen Sie die Hooks für den Migrationsauftrag aus der Datei "values.yaml", die im vorherigen Schritt hinzugefügt wurde, und stellen Sie nach dem Upgrade den Standardwert wieder her.

'''Yaml
# Migrationsauftrag (bei Bedarf auskommentieren)
# Migration:
# aktiviert: true
# Haken:
# migrieren:
# hookAnnotation: "nach der Installation, vor dem Upgrade"
'''

Wenn Sie Probleme haben, [technischen Support kontaktieren](https://support.cognigy.com/hc/en-us/requests/new?).
</pv_name></pv_name>