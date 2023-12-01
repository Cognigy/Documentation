---
 Titel: "Voraussetzungen" 
 Slug: "Voraussetzungen" 
 ausgeblendet: false 
---
# Voraussetzungen

## Kubernetes-Cluster und Helm

Für die Installation und den Betrieb von Live Agent wird ein Kubernetes-Cluster benötigt, auf dem die Workloads eingeplant werden können. Darüber hinaus ist Helm auch notwendig, um alle notwendigen Kubernetes-Ressourcen automatisch bereitzustellen. 

- [Kubernetes](https://kubernetes.io/) 1.16+
- [Helm](https://helm.sh/) 3.1.0+

>**Hinweis:** Es wird empfohlen, Live Agent in einem separaten Namensraum zu installieren, da er über eigene Ressourcen verfügt, die von Cognigy.AI getrennt sind.

## Pod-Ressourcen

### CPU

Die CPU-Anforderungen hängen von der Auslastung und der erwarteten Arbeitslast ab.
Ihre Arbeitsbelastung wird von Faktoren beeinflusst, z. B. wie aktiv Ihre Benutzer sind, wie viele Konversationen Sie erhalten, welche Konversationskanäle Sie verwenden und vieles mehr.

Im Folgenden finden Sie die empfohlenen minimalen CPU-Hardwarekonfigurationen für eine kleine Auswahl von Beispielgrößen für Live Agent-Konversationen.

- 4 Kerne ist die empfohlene Mindestanzahl von Kernen und unterstützt bis zu 10.000 Unterhaltungen pro Tag.
- 8 Kerne unterstützen bis zu 20.000 Konversationen pro Tag.

Für weitere Gespräche,
Wir haben empfohlen, die Anzahl der Pods und damit auch die Anzahl der verfügbaren CPU-Kerne zu erhöhen.

### Speicher

Die Speicheranforderungen hängen von der Nutzung und der erwarteten zusätzlichen Arbeitslast ab.
Ihre Arbeitsbelastung wird von Faktoren beeinflusst, wie z. B. der Aktivität Ihrer Benutzer,
wie viele Konversationen Sie erhalten, welche Konversationskanäle Sie verwenden und vieles mehr.

Im Folgenden finden Sie die empfohlenen Mindestkonfigurationen für die Speicherhardware für eine kleine Auswahl von Beispielen für Live Agent-Konversationsgrößen.

- 4 GB RAM ist die erforderliche Mindestspeichergröße und unterstützt bis zu 10.000 Gespräche pro Tag.
- 8 GB RAM unterstützen bis zu 20.000 Gespräche pro Tag.

Für mehr Konversationen empfiehlt es sich, die Anzahl der Pods und damit auch den Speicher zu erhöhen.

### Lagerung

Die Menge des erforderlichen Speicherplatzes hängt weitgehend von Ihrer Nutzung und anderen Faktoren ab, der Größe und Anzahl der Anhänge, die Sie z. B. durch Ihre Gespräche erhalten, usw.

Erwägen Sie die Verwendung einer Speicheroption, die von AWS, Azure, Google Cloud usw. bereitgestellt wird, um flexibel zu bleiben und wachsenden Speicheranforderungen gerecht zu werden.

### PostgreSQL

Der Server, auf dem PostgreSQL ausgeführt wird, sollte über mindestens 5-10 GB Speicherplatz verfügen, obwohl die genauen Anforderungen von der Nutzung Ihrer Live Agent-Instanz abhängen.

### Redis

Redis speichert die Warteschlange für Hintergrundaufgaben und verschiedene zwischengespeicherte Live Agent-Konfigurationen. Daher sind die Speicheranforderungen für Redis minimal. Sie können mit 1 GB beginnen und nach Bedarf hochskalieren.

### Sidekiq

Sidekiq verarbeitet Hintergrundaufträge über einen Multithread-Prozess. Dieser Prozess beginnt mit dem gesamten Rails-Stapel. Auf einem sehr aktiven Server kann der Sidekiq-Prozess 1GB+ Speicher verwenden.