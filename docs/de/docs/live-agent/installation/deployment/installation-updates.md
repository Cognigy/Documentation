---
 title: "Installations-Updates" 
 Slug: "Installationen-Updates" 
 ausgeblendet: false 
---
# Installationen-Updates

Um die Live Agent-Installation zu aktualisieren, gibt es zwei Möglichkeiten, sobald eine neue Version verfügbar ist:

>**Hinweis:** Weitere Informationen zum Durchführen von Upgrades und Rollbacks finden Sie in den [offiziellen Helm-Dokumenten](https://helm.sh/docs/intro/using_helm/#helm-upgrade-and-helm-rollback-upgrading-a-release-and-recovering-on-failure)

## Ziehen und Aufrüsten gleichzeitig

Der folgende Befehl kann verwendet werden, um das Live Agent Helm-Diagramm gleichzeitig abzurufen und zu aktualisieren:

'''sch
 helm upgrade cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version X.X.X --namespace live-agent -f custom-values.yaml
'''

Beachten Sie, dass die Datei "custom-values.yaml" nur die Werte enthalten kann, die überschrieben werden müssen, z. B. Eingangskonfigurationen, Replikate und Ressourcen. Auf diese Weise wird die neue Version das bestehende Setup nicht beschädigen. Sie können sich auf die Dokumentation beziehen und die [Versionshinweise](.. /.. /release-notes/release-notes.md) im Zusammenhang mit Helm, falls dies der Fall ist.

## Ziehen und Ändern der Datei 'values.yaml'

Führen Sie den folgenden Befehl aus:

'''sch
Steuerzug oci://cognigy.azurecr.io/helm/live-agent --Version X.X.X
'''

Dadurch wird das Helm-Diagramm komprimiert heruntergeladen.

'live-agent-X.X.X.tgz'

Jetzt kann es dekomprimiert werden, die Datei "values.yaml" innerhalb des Ordners muss an Ihre Bedürfnisse angepasst werden, und dann kann das Diagramm mit dem folgenden Befehl aktualisiert werden:

'''sch
 helm upgrade cognigy-live-agent ./live-agent-X.X.X --namespace live-agent
'''

## Fehlerbehebung

Beide Upgradebefehle sollten automatisch einen Datenbankmigrationsauftrag ausführen und jede neue Änderung übernehmen.

Falls dies fehlschlägt, können Sie den folgenden Befehl manuell in einem der Haupt-Live Agent-Pods ausführen:

'''sch
bin/rails db:migrieren
'''