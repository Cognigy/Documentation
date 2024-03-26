---
Titel: "Voraussetzungen"
Slug: "Voraussetzungen"
ausgeblendet: false
---

# Voraussetzungen

Bevor Sie AI Copilot installieren und ausführen können, müssen Sie Cognigy.AI installiert und einen dedizierten "Agent-Assist"-Namespace in Ihrem Kubernetes-Cluster erstellt haben. Helm, ein Paketmanager für Kubernetes, ist ebenfalls erforderlich, um die Bereitstellung der erforderlichen Ressourcen zu optimieren.

- [Kubernetes](https://kubernetes.io/) 1.16+
- [Helm](https://helm.sh/) 3.1.0+

## Replikation und Ressourcenzuweisung

Die Standardanzahl von Replikaten ist auf 3 festgelegt, um hohe Verfügbarkeitsstandards aufrechtzuerhalten. Die AI Copilot-Pods sind zustandslos, sodass Sie sie je nach Bedarf hoch- oder herunterskalieren können. Der Agent-Assist-Backend-Pod trägt die Hauptlast der Arbeitslast und sollte der primäre Kandidat für die Skalierung sein, um eine Zunahme gleichzeitiger Benutzer zu bewältigen.

### MongoDB

Detaillierte Informationen zur Einrichtung und Konfiguration von MongoDB finden Sie im [Cognigy.AI Installationshandbuch]({{config.site_url}}ai/installation/prerequisites/#kubernetes-cluster).

### Redis

Redis wird zum Speichern von WebSocket-Abonnements und zwischengespeicherten AI Copilot-Sitzungsparametern verwendet, sodass die Speicheranforderungen minimal sind. Sie können mit einer Zuweisung von 1 GB beginnen und nach Bedarf hochskalieren.