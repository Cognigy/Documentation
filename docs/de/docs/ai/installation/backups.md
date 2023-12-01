---
Titel: "Backups"
Slug: "Sicherungen"
ausgeblendet: false
---

## Cognigy.AI Secrets-Backups
Befolgen Sie Cognigy.AI Installationsanleitung, um [eine Sicherungskopie von Geheimnissen zu erstellen](https://github.com/Cognigy/cognigy-ai-helm-chart#cognigyai-secrets-backup)

## Cognigy.AI Datensicherungen

Regelmäßige Backups Cognigy.AI Installation sind für den Produktionsbetrieb von entscheidender Bedeutung. Der Sicherungsprozess kann je nach Cloud-Anbieter und Installationsspezifikation variieren. Es wird empfohlen, regelmäßige Sicherungen der folgenden zustandsbehafteten Daten durchzuführen:

- Persistente Redis-Daten ('redis-persistent' PV)
- MongoDB-Daten ('datadir-mongodb-0' - 'datadir-mongodb-2' PVs)
- "Durchflussmodule" und "Funktionen" gemeinsam genutzte PVs

Der genaue Backup- und Disaster-Recovery-Plan hängt vom Cloud-Anbieter Ihrer Wahl und der Bereitstellungsmethode des Kubernetes-Clusters ab. Daher halten wir uns an keine Richtlinien, empfehlen aber, die Best Practices Ihres Cloud-Anbieters für Backup und Disaster Recovery zu befolgen. Es gibt auch Open-Source-Tools wie [Velero](https://velero.io/), mit denen Sie Backups und Disaster Recovery für Kubernetes-Cluster herstellerneutral automatisieren können. 