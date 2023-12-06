---
Titel: "Anwendungsfälle"
Slug: "Anwendungsfälle"
ausgeblendet: false
---

# xApp-Anwendungsfälle

Die xApps können auf zwei verschiedene Arten verwendet werden:

- [Als Multichannel-Lösung](#multichannel)
- [Als Standalone-Lösung](#standalone)

## Mehrkanal

Sie können eine xApp zusätzlich zu den Hauptkommunikationskanälen wie Sprache, Webchat-Widget, Teams, WhatsApp und anderen verwenden. Die vollständige Liste finden Sie unter [Unterstützte Kanäle](supported-browsers-and-channels.md#supported-channels).

Um zu erfahren, wie es funktioniert, folgen Sie [Erstellen einer xApp mit mehreren Kanälen](build/xApp-with-multi-channels.md).

### Virtuelle Agenten einschalten

Erweitern Sie die Funktionen virtueller Agenten, indem Sie Anwendungsfälle unterstützen, die über die Grenzen des aktuellen Kommunikationskanals hinausgehen. Dies ermöglicht es virtuellen Agenten, komplexere Aufgaben zu erledigen und den Benutzern eine bessere Unterstützung zu bieten.

### Menschliche Agenten stärken

Aktivieren Sie AI Copilot, um menschlichen Agenten xApps vorzuschlagen. Diese xApps können für Benutzer freigegeben werden, um Aufgaben wie das Ausfüllen von Formularen zu vereinfachen oder Aktionen auszuführen, die der Agent nicht allein ausführen kann, z. B. die Authentifizierung per Fingerabdruck oder das Einziehen von Zahlungen.

## Eigenständig

Sie können eine xApp als eigenständige Anwendung verwenden. Die xApp kann für bestimmte Aufgaben oder Prozesse erstellt werden, für die keine Konversation erforderlich ist. Diese xApps können über eine URL aufgerufen werden, so dass Benutzer direkt mit ihnen interagieren können, ohne dass ein weiterer Kommunikationskanal erforderlich ist.

Um zu erfahren, wie es funktioniert, folgen Sie [Erstellen einer eigenständigen xApp](build/standalone-xApp.md).

## Beispiele

xApps sind unendlich flexibel. Die folgenden Beispiele veranschaulichen einige spezifische Anwendungsfälle, in denen eine xApp bequeme und effiziente Lösungen bereitstellen kann, um die Benutzererfahrung zu verbessern und Prozessabläufe zu verbessern. 

### Authentifizierung über Anmeldeinformationen

Mit xApps können Sie Benutzern die Authentifizierung mit verschiedenen Methoden wie E-Mail-Adressen, Benutzernummern oder anderen Identifikationsdetails ermöglichen.

Benutzer können ihre Identität sicher verifizieren und Zugang zu bestimmten Diensten oder Informationen erhalten.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/xApp/use-cases/microsoft-login.png" width="50%">
    <figcaption>Authentifizierung über Anmeldeinformationen</figcaption>
</figure>

### Wählen Sie einen Sitzplatz

Mit xApps können Sie Benutzern eine Schnittstelle anbieten, über die sie ihren bevorzugten Sitzplatz für ihren Flug auswählen können.

Benutzer können die verfügbaren Sitzplätze anzeigen und den Sitzplatz ihrer Wahl auswählen, um ihr Reiseerlebnis zu verbessern.

Ein Beispiel für die Implementierung finden Sie im Repository [Cognigy GitHub](https://github.com/Cognigy/xApps/tree/main/xapps/flight-seat-picker).

<figure>
    <img class="image-center" src="{{config.site_url}}/ai/images/xApp/use-cases/select-seat.png" width="50%">
    <figcaption>Wählen Sie einen Sitzplatz</figcaption>
</figure> aus

### Standort teilen 

Mit xApps können Sie Benutzern erlauben, die Standortinformationen ihres Geräts freizugeben.

Dieser Anwendungsfall kann in verschiedenen Szenarien nützlich sein, z. B. bei der Bereitstellung standortbezogener Dienste, der Nachverfolgung von Lieferungen oder der Suche nach Ressourcen in der Nähe.

<figure>
    <img class="image-center" src="{{config.site_url}}/ai/images/xApp/use-cases/share-location.png" width="50%">
    <figcaption>Gerätestandort freigeben</figcaption>
</figure>

### Machen Sie ein Foto mit einer mobilen Kamera

Mit xApps können Sie Benutzern eine Schnittstelle zur Verfügung stellen, mit der sie Bilder von Messgeräten mit ihrer mobilen Kamera aufnehmen können.

Dieser Anwendungsfall kann für Versorgungsunternehmen oder Dienstanbieter nützlich sein, um Messdaten aus der Ferne zu überwachen und zu analysieren.

<figure>
    <img class="image-center" src="{{config.site_url}}/ai/images/xApp/use-cases/energy-meter.png" width="50%">
    <figcaption>Nehmen Sie ein Bild mit einer mobilen Kamera auf</figcaption>
</figure>

### Hinzufügen einer Bordkarte zu einer Brieftasche

Mit xApps können Sie Benutzern erlauben, ihre Bordkarte zu einer digitalen Geldbörse hinzuzufügen.

Dieser Anwendungsfall ermöglicht es Benutzern, einfach auf ihre Boarding-Informationen zuzugreifen, vereinfacht den Check-in-Prozess und macht gedruckte Bordkarten überflüssig.

<figure>
    <img class="image-center" src="{{config.site_url}}/ai/images/xApp/use-cases/boarding-pass.png" width="50%">
    <figcaption>Hinzufügen einer Bordkarte</figcaption>
</figure>

### Erstellen einer Signatur

Mit xApps können Sie eine Funktion für digitale Signaturen bereitstellen.

Benutzer können Dokumente oder Formulare elektronisch signieren, wodurch physische Unterschriften überflüssig werden und Papierkramprozesse rationalisiert werden.

Ein Beispiel für die Implementierung finden Sie im Repository [Cognigy GitHub](https://github.com/Cognigy/xApps/tree/main/xapps/signature).

<figure>
    <img class="image-center" src="{{config.site_url}}/ai/images/xApp/use-cases/signature-pad.png" width="50%">
    <figcaption>Erstellen einer Signatur</figcaption>
</figure>

## Mehr Informationen

- [Übersicht](overview.md)
- [Erstellen einer xApp](build/overview.md)
- [Architektur](architecture.md)
- [xApp-Knoten](.. /flow-nodes/xApp/overview.md)
- [xApp-Token](tokens.md)
- [xApp-Flow-API](api.md)