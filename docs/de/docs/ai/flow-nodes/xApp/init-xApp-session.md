---
 title: "xApp: Init-Sitzung" 
 slug: "Init-xApp-Session" 
 ausgeblendet: false 
---

# xApp: Init-Sitzung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.50-blue.svg)] (.. /.. /.. /release-notes/4.51.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/xApp/init-xApp-session.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Dieser Knoten initialisiert eine neue xApp-Sitzung. 

Nach der Ausführung dieses Nodes kann auf zwei verschiedene Arten auf die xApp zugegriffen werden:

- [Ohne Eingabe eines PIN-Codes](#without-Eingabe-eines-PIN-Codes)
- [Durch Eingabe eines PIN-Codes](#by-Eingabe-eines-PIN-Codes)

### Ohne Eingabe eines PIN-Codes 

Wenn für den Zugriff auf eine xApp-Sitzung nur eine URL erforderlich ist, kann eine Sitzungs-URL freigegeben werden. Diese URL ist über die [xApp-Sitzungs-URL](.. /.. /xApp/tokens.md#xapp-session-url) token.

Das Token **xApp-Sitzungs-URL** stellt eine URL bereit, auf die auch über "input.apps.url" im Eingabeobjekt zugegriffen werden kann.

Mit dem bereitgestellten Link kann ein Benutzer auf die xApp-Seite zugreifen, ohne eine PIN zu benötigen.

### Durch Eingabe eines PIN-Codes 

Um Benutzern den Zugriff auf die xApp-Sitzung über eine PIN zu ermöglichen, geben Sie sowohl eine PIN als auch eine PIN-Seiten-URL für die Benutzer frei. 

Diese Funktion ist über die [xApp-PIN-Seiten-URL](.. /.. /xApp/tokens.md#xapp-pin-page-url) und dem Knoten [xApp: Sitzungs-PIN abrufen](get-xApp-session-PIN.md).

Der Knoten **Sitzungs-PIN abrufen** generiert eine PIN, auf die über das [xApp-Sitzungs-PIN-Token](.. /.. /xApp/tokens.md#xapp-session-pin) oder 'input.apps.session.pin' im Eingabeobjekt.

Das Token **xApp-PIN-Seiten-URL** stellt eine URL bereit, auf die auch über "input.apps.baseUrl" im Eingabeobjekt zugegriffen werden kann.

Mit dem bereitgestellten Link kann ein Benutzer auf die PIN-Seite zugreifen und seine angegebene PIN eingeben, um Zugriff auf die xApp zu erhalten.

## Einstellungen

### Anpassung des Stils

Passen Sie die folgenden Parameter für den Standardbildschirm an:

- Hintergrundfarbe — eine Farbe, die im Hintergrund aller Shell-Seitenbildschirme angezeigt wird. Sie können CSS-Hintergrundfarbwerte wie 'hex', 'hsl+a' und 'rgb+a' verwenden.
- Textfarbe – eine Farbe, die für Textinhalte auf allen Shell-Seitenbildschirmen verwendet wird. Sie können CSS-Farbwerte wie 'hex', 'hsl+a' und 'rgb+a' verwenden. Achten Sie darauf, dass die Textfarbe einen hohen Kontrast zur Hintergrundfarbe aufweist.
- Logo: Sie können wählen, ob das Standardlogo, nicht irgendein Logo oder ein benutzerdefiniertes Logo angezeigt werden soll. Wenn Sie die Option "Benutzerdefiniertes Logo" auswählen, geben Sie die URL für das benutzerdefinierte Logo an.
- Benutzerdefinierte Favicon-URL – eine Bild-URL für das benutzerdefinierte Favicon.
- Seitentitel – ein Text, der als Registerkarten- oder Fenstertitel angezeigt wird. Der Titel wird auf allen Shell-Seitenbildschirmen angezeigt.

### xApp-Bildschirme

Geben Sie Meldungen an, die dem Benutzer angezeigt werden, wenn die xApp-Seite geladen wird, aus irgendeinem Grund fehlschlägt, ein Fehler auftritt oder angehalten wird.

### Zwischenbildschirm

Passen Sie den Text an, der auf dem Zwischenbildschirm angezeigt wird. Alternativ können Sie den standardmäßigen Zwischenbildschirm durch eine xApp-Seite ersetzen, indem Sie die xApp-Vorlage, eine Mini-Website mit HTML/CSS/JS, und Parameter, die Sie an diese xApp-Vorlage übergeben, die xApp-Vorlagendaten, bereitstellen.

### Verbindungsbildschirm

Passen Sie den Text an, der auf dem Verbindungsbildschirm angezeigt wird. Alternativ können Sie den standardmäßigen Verbindungsbildschirm durch eine xApp-Seite ersetzen, indem Sie die xApp-Vorlage, eine Mini-Website mit HTML/CSS/JS, und Parameter, die Sie an diese xApp-Vorlage übergeben, die xApp-Vorlagendaten, bereitstellen.

## Mehr Informationen

- [xApp-Token](.. /.. /xApp/tokens.md)
- [xApp-Knoten](overview.md)
- [xApp: Sitzungs-PIN abrufen](get-xApp-session-PIN.md)
- [xApp: HTML anzeigen](set-html-xApp-state.md)
- [xApp: Adaptive Karte anzeigen](set-AdaptiveCard-xApp-state.md)
- [xApps](.. /.. /xApp/overview.md)