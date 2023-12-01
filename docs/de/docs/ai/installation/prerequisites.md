---
Titel: "Voraussetzungen"
Slug: "Voraussetzungen"
ausgeblendet: false
---
# Voraussetzungen

### Kubernetes-Cluster
Cognigy.AI Installation erfordert einen voll funktionsfähigen Kubernetes-Cluster. Wir empfehlen Ihnen, einen verwalteten Kubernetes-Cluster zu verwenden, der von gängigen Public-Cloud-Betreibern (Amazon EKS, Microsoft AKS, Google GKE) bereitgestellt wird. Cognigy.AI ist vollständig kompatibel mit den folgenden verwalteten Kubernetes-Diensten:

- AWS EKS
- Azure AKS

Das Ausführen von Cognigy.AI auf lokalen Kubernetes-Clustern erfordert zusätzlichen Konfigurationsaufwand von Ihrer Seite. Daher empfehlen wir, stattdessen Public Clouds zu nutzen. Beachten Sie, dass Cognigy keine Unterstützung für die Konfiguration und Bereitstellung von Kubernetes-Clustern bietet.

!!! Warnung "Kubernetes-Versionen"
    Kubernetes-Versionen, die mit Cognigy.AI kompatibel sind, sind in [Cognigy.AI Helm Chart](https://github.com/Cognigy/cognigy-ai-helm-chart) angegeben.

### Hardware-Anforderungen
Für eine Cognigy.AI Installation mit Englisch als NLU-Standardsprache empfehlen wir einen Kubernetes-Cluster mit der folgenden Spezifikation für AWS EKS (oder Äquivalente bei anderen Cloud-Anbietern):

- Mindestens 6 x "c5.2xlarge" (AWS) oder 6 x "Standard_F8s_v2" (Azure) Workerknoten oder gleichwertige VMs mit 8 CPU/16 GB RAM und "x86_64"-CPU-Architektur bei anderen Cloudanbietern.
- 100 GB Root-SSD-Speicher pro Worker-Knoten.
- Kubernetes-Workerknoten sind für die Einrichtung von Hochverfügbarkeit auf 3 Availability Zones (AZ) verteilt.
- 250 GB SSD-Blockspeicher für Anwendungsdatenbanken (250 GB x 3 für MongoDB-Setup mit 3 Replikaten).
- 10 GB Dateisystemspeicher (EFS oder andere NFS-kompatible Entsprechungen) für Anwendungsressourcen.

!!! Warnung "Allzweckmaschinen"
    Die Wahl von Allzweckmaschinen anstelle von rechenoptimierten Maschinen wirkt sich negativ auf die Leistung unserer Software aus. Wir empfehlen Ihnen, rechenoptimierte Maschinen mit hohen CPU-Taktraten und reservierten CPU-Budgets zu wählen. Dies ist besonders wichtig, wenn Sie mehrere Dienste zum Verstehen natürlicher Sprache installieren möchten.

### Kubectl-Binärdatei 
Um Cognigy.AI in einem Kubernetes-Cluster bereitzustellen, muss die Binärdatei [kubectl](https://kubernetes.io/docs/reference/kubectl/) auf einem Linux-Computer installiert sein, der für Cognigy.AI Installation auf den Kubernetes-Cluster zugreifen kann. Weitere Informationen finden Sie in der offiziellen Kubernetes-Dokumentation. Beachten Sie, dass die kubectl-Version mit der Version Ihres Kubernetes-Clusters übereinstimmen muss.

### Helm-Paket-Manager
Cognigy-Produkte werden mit dem [Helm](https://helm.sh/)-Paketmanager für Kubernetes verpackt. Machen Sie sich mit den grundlegenden Helm-Vorgängen vertraut, bevor Sie mit der Installation fortfahren.

!!! Warnung "Kustomize deprecation"
    [Kustomize] (https://kustomize.io/) Skripte für Cognigy.AI Installation sind **veraltet**. Wir empfehlen dringend, Helm Charts für alle Neuinstallationen zu verwenden. Sie können die beschriebene Installationsdokumentation für kustomize weiterhin [hier](https://docs.cognigy.com/downloads/cognigy-4-x.zip) herunterladen. Wir werden die Aktualisierung unserer **kustomize-Dateien Ende dieses Jahres (31. Dezember 2022)** einstellen.

!!! Warnung "Helm-Versionen"
    Informationen zu Helm-Versionen, die mit Cognigy.AI kompatibel sind, finden Sie unter [Cognigy.AI Helm-Karte](https://github.com/Cognigy/cognigy-ai-helm-chart).

### Cognigy-Lizenz
Cognigy.AI Produkt erfordert einen Lizenzschlüssel, den Sie nach Unterzeichnung eines Lizenzvertrags erhalten. Der Schlüssel ist für die Installation des Produkts erforderlich.

### Anmeldeinformationen für die Container-Image-Registrierung:
Cognigy.AI ist vollständig containerisiert und seine Binärdateien werden in Form von Docker-Images ausgeliefert, die in der Container-Registry von Cognigy gespeichert sind. Sie erhalten Anmeldeinformationen, die zum Authentifizieren und Abrufen dieser Images erforderlich sind.

### Domains / DNS-Namen
Cognigy.AI werden mehrere Webdienste verfügbar gemacht, für die Sie DNS-Einträge in einer öffentlichen Domäne zuweisen müssen, die von Ihrer Organisation betrieben wird. Stellen Sie sicher, dass Sie Zugriff auf den DNS-Anbieter Ihrer Domain (z. B. Go-Daddy, United-Domains usw.) haben, um DNS-Einträge zu konfigurieren. Wenn Cognigy.AI nur über Ihr privates Netzwerk zugänglich sein muss, stellen Sie sicher, dass Sie DNS-Einträge in Ihrer privaten Domäne erstellen können.

### TLS-Zertifikat(e)
Um einen Webserver zu authentifizieren und den Webverkehr zwischen Clients und dem Webserver zu verschlüsseln, benötigen Sie ein SSL-Zertifikat für die Domäne, in der DNS-Einträge für Cognigy.AI erstellt werden. Wir empfehlen dringend ein Platzhalterzertifikat, da es den Installationsprozess vereinfacht. Wenn Sie aus irgendeinem Grund kein Platzhalterzertifikat verwenden können, stellen Sie sicher, dass Ihre eigenständigen Zertifikate alle DNS-Einträge für Cognigy.AI abdecken. Der Reverse-Proxy, mit dem wir Cognigy.AI ausgeliefert werden, kann nicht standardmäßig mehrere Zertifikate unterstützen, und Cognigy bietet keine Unterstützung für solche Konfigurationen.

### Whitelisting von Domains
Wenn Sie planen, eine Kubernetes-Umgebung in einem privaten Rechenzentrum einzurichten, oder wenn in Ihrem Public-Cloud-Setup einige Netzwerkeinschränkungen gelten, stellen Sie sicher, dass Kubernetes-Knoten die Container-Registry von Cognigy cognigy.azurecr.io:443 erreichen können. Andernfalls kann Cognigy.AI Setup die erforderlichen Docker-Images und -Assets während des Installationsvorgangs nicht herunterladen.

### Netzwerk-Firewalls / Websocket-Unterstützung
Wenn Sie beabsichtigen, eine Kubernetes-Umgebung in einem privaten Rechenzentrum einzurichten, oder wenn in Ihrem Public Cloud-Setup einige Netzwerkeinschränkungen gelten, stellen Sie sicher, dass alle gültigen HTTP-Methoden (GET, POST, DELETE usw.) nicht durch Firewallregeln zwischen Kubernetes-Knoten und dem Internet in beide Richtungen blockiert werden. Cognigy.AI stützt sich stark auf das WebSocket-Protokoll und stellt daher sicher, dass alle Netzwerkgeräte (Web-Proxys, DPI-Engines, Firewalls) zwischen Kubernetes-Knoten und dem Internet WebSocket-Verbindungen unterstützen und so konfiguriert sind, dass sie solche Verbindungen ordnungsgemäß verarbeiten.

!!! Warnung "Unterstützung der Netzwerkkonfiguration"
    Bitte beachten Sie, dass wir keine Unterstützung bei der Einrichtung der oben genannten netzwerkbezogenen Voraussetzungen leisten können. Wenden Sie sich an einen Netzwerk-/Systemadministrator oder ein verwandtes Team Ihrer Organisation, um weitere Unterstützung zu erhalten.

!!! Warnung "Eingeschränkte Windows-Unterstützung"
    Während eine Installation auf Windows-Servern möglich ist, unterstützen wir weder Windows als Betriebssystem noch testen wir Cognigy.AI auf Windows-Servern. Wir können keinen Support für Cognigy.AI anbieten, wenn Sie Windows als Betriebssystem auswählen.

!!! Warnung "Checkliste vor der Installation"
    Stellen Sie sicher, dass alle oben genannten Voraussetzungen erfüllt sind, bevor Sie den Installationsprozess verschieben. Verwenden Sie [Checkliste vor der Installation](pre-installation-checklist.md) für eine Gegenprüfung. Beachten Sie, dass jeder Installationsprozess, der von unseren Ingenieuren unterstützt wird, auch bedeutet, dass diese Voraussetzungen von Ihrer Seite erfüllt sind, bevor die Installation beginnt.