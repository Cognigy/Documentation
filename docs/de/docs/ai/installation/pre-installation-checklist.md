---
title: "Checkliste vor der Installation"
Slug: "Checkliste vor der Installation"
ausgeblendet: false
---

# Checkliste vor der Installation

Bevor Sie mit Ihrer On-Premise-Installation fortfahren, mit oder ohne Installationsunterstützung von Cognigy-Seite, stellen Sie sicher, dass die Kriterien aus der folgenden Checkliste erfüllt sind:

1. Lesen Sie sich die Installationsanweisungen in den 'README.md'-Dateien in beiden Helm-Charts ([MongoDB](https://github.com/Cognigy/cognigy-mongodb-helm-chart) und [Cognigy.AI](https://github.com/Cognigy/cognigy-ai-helm-chart)) im Voraus durch und treffen Sie die notwendigen Vorbereitungen.

2. Die Voraussetzungen für die Installation von MongoDB Helm Chart sind erfüllt (weitere Informationen finden Sie in der Datei "README.md" in [MongoDB Helm Chart](https://github.com/Cognigy/cognigy-mongodb-helm-chart).

3. Die Voraussetzungen für Cognigy.AI Installation von Helm Chart sind erfüllt (weitere Informationen finden Sie in der Datei "README.md" in [Cognigy.AI Helm Chart](https://github.com/Cognigy/cognigy-ai-helm-chart).

4. Die Konfigurationsabschnitte für beide Helm-Charts sind abgeschlossen und die 'values.yaml'-Dateien für beide Charts werden vorbereitet und mit den erforderlichen Daten vorausgefüllt (siehe README.md Dateien in MongoDB und Cognigy.AI Helm-Charts für Details).

5. Das Team hat über "kubectl" Zugriff auf den Kubernetes-Cluster.

6. Die Dienstprogramme 'kubectl' und 'helm' werden mit **erforderlichen Versionen** installiert.

7. Der Kubernetes-Cluster verfügt über genügend Ressourcen: mindestens 6 x Worker-Nodes (8 CPUs, 16 GB RAM, "x86_64"-Architektur, 100 GB Root-SSD-Speicher).

8. Kubernetes-Workerknoten sind auf 3 Availability Zones (AZ) verteilt, um eine Hochverfügbarkeit nach Möglichkeit zu ermöglichen.

9. Cognigy.AI Lizenzschlüssel ist verfügbar.

10. Die Anmeldeinformationen für die Cognigy Container Image Registry sind bekannt.

11. Domains / DNS-Namen für Cognigy.AI URLs sind erstellt und verfügbar.

12. Wildcard-TLS-Zertifikate sind bereit.

13. Das IP-Whitelisting für die Container-Registry von Cognigy ist abgeschlossen: "cognigy.azurecr.io:443".

14. Der Netzwerkzugriff ist für HTTP/HTTPS-Anfragen zulässig.

15. Das Websocket-Protokoll wird unterstützt und kann durch Firewall(s) geleitet werden.

16. Die Speicheranforderungen werden von der zugrunde liegenden Cloud-Infrastruktur erfüllt:
    - Die benutzerdefinierte "StorageClass" wird für MongoDB bereitgestellt.
    - Blockspeicher (Festplatten) können dynamisch für MongoDB und Redis bereitgestellt werden.
    - (Nur AWS): EFS-Freigaben für "Flow-Module" und "Funktionen" werden im Voraus bereitgestellt.
    - (Nur AWS): EFS-Freigaben für "flow-modules" und "functions" sind über den EKS-Cluster erreichbar.
    - (Nur Azure): Azure-Dateifreigaben können dynamisch bereitgestellt werden.