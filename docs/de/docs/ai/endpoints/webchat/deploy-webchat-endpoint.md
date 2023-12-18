---
 title: "Bereitstellen eines Webchat-Endpunkts" 
 slug: "webchat-endpunkt bereitstellen" 
 ausgeblendet: false 
---
# Bereitstellen eines Webchat-Endpunkts

## Erstellen eines Webchat-Endpunkts

Erstellen Sie zunächst einen Endpunkt, der den Webchat-Kanal verwendet. Wenn Sie den Endpunkt erstellt und den Flow zugewiesen haben, den der Endpunkt verwenden soll, dann können Sie bereits oben rechts auf **Webchat öffnen** klicken. Dadurch wird der konfigurierte Webchat in einer [Integrated Demo Page]({{config.site_url}}ai/endpoints/webchat/integrated-demo-page/) geöffnet, und Sie können bereits mit Ihrem Flow sprechen. Lesen Sie weiter, um herauszufinden, wie Sie das Erscheinungsbild des Webchats konfigurieren können, um ihn in Ihren Unternehmensfarben zu gestalten, ein Hintergrundbild hinzuzufügen und vieles mehr. 

## Generische Endpunkteinstellungen

Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte]({{config.site_url}}ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU-Konnektoren]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Sitzungsverwaltung]({{config.site_url}}ai/endpoints/session-management/)
- [Übergabe-Einstellungen]({{config.site_url}}ai/endpoints/handover-settings/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings) 

!!! Tipp "Unterstützt Inject & Notify"
    Sie können die Funktion [Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/) mit diesem Endpunkttyp verwenden.

## Kanalspezifische Einstellungen

Sie können fast alles an Webchat konfigurieren, um es nur für Ihre Bedürfnisse zu personalisieren. Dazu gehört das Ändern der Farben, das Hinzufügen von Funktionen wie Datei-Uploads und vieles mehr, damit Sie die von Ihnen erstellte Conversational AI auf sehr schöne Weise präsentieren können. Sobald Sie eine Einstellung geändert haben, wird beim Laden oder Neuladen einer Website mit einem Webchat, der auf diesen Endpunkt verweist, angezeigt, dass die Änderungen bereits wirksam geworden sind.

### Webchat-Layout

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-webchat-layout.png" width="100%" />
  <figcaption>Webchat-Layout</figcaption>
</figure>

| Parameter |	Beschreibung |
| -- | -- |
| Webchat-Titel | Der Text, der im Webchat-Header angezeigt werden soll. |
| Farbschema | Die Hauptfarben für den Webchat, z. B. #008080. |
| Bot-Avatar-Logo-URL | Eine URL, die auf das Logo verweist, das der Avatar des virtuellen Agenten sein soll. |
| Header-Logo-URL | Eine URL, die auf das Logo verweist, das im Webchat-Header angezeigt werden soll. |
| Aktivieren von Eingabeindikatoren | Aktiviert einen Eingabeindikator, während der Bot antwortet. |
| Platzhaltertext eingeben | Der Text, der als Platzhalter im Eingabefeld angezeigt werden soll. |

#### Erweiterte Layout-Einstellungen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-webchat-layout-advanced.png" width="100%" />
  <figcaption>Erweiterte Layout-Einstellungen</figcaption>
</figure>

| Parameter | Beschreibung |
| -- | -- |
| Automatische Vergrößerung der Eingabe aktivieren | Ist diese Option aktiviert, wächst die Texteingabe für Webchat-Benutzer automatisch, wenn der Benutzer lange Texte eintippt. Es ermöglicht auch Zeilenumbrüche für Benutzertexteingaben. |
| Maximale Anzahl von Eingabezeilen | Definiert die Anzahl der Textzeilen, auf die die Texteingabe anwachsen kann. Nachdem die maximale Zeilengröße überschritten wurde, erscheint ein vertikaler Bildlaufbalken in der Texteingabe. |
| Dynamisches Bild-Seitenverhältnis | Bilder aus der Vorlage "Galerie", "Anhang" oder "Top-Listeneintrag" haben kein erzwungenes Seitenverhältnis und werden ohne Zuschneiden in voller Breite angezeigt. |
| Automatische Vervollständigung von Eingaben deaktivieren | Verwenden Sie diese Einstellung, um die Funktion zur automatischen Vervollständigung für alle zu deaktivieren. |
| Generisches HTML-Styling aktivieren | Wenn diese Option aktiviert ist, wird ein zusätzlicher generischer Stil auf HTML-Inhalte in normalen Textnachrichten angewendet. |
| JavaScript im HTML-Nachrichteninhalt zulassen | Standardmäßig werden potenziell schädliche HTML-Inhalte wie die Attribute "onclick" oder "onload" vor dem Rendern entfernt. Wenn diese Einstellung aktiviert ist, werden sie nicht entfernt. |
| JavaScript in Schaltflächen-/Aktions-URLs zulassen | Standardmäßig werden 'JavaScript-URLs', die mit javascript: beginnen, entfernt. Wenn diese Einstellung aktiviert ist, werden sie nicht entfernt und der JavaScript-Code wird ausgeführt, wenn der Benutzer auf die Schaltfläche/das Element klickt. |

!!! Hinweis "Bereinigung von Texteingaben"
    Die Texteingabebereinigung ist aus Sicherheitsgründen standardmäßig aktiviert, bevor Text aus dem Webchat an die NLU gesendet wird. Dadurch werden Zeichen geändert, die von HTML reserviert sind, wie z.B. '**",',&,<,>**' in einen Entitätsnamen. Beispiel: **&** wird **amp;** an die Eingabe angehängt.
    Dies kann zu Problemen in Ihrem Agenten führen, wenn eine Bedingung oder Absicht nur durch den reservierten Charakter in seiner ursprünglichen Form ausgelöst wird. Wenn Sie dieses Problem umgehen müssen, aktivieren Sie die Option **JavaScript im HTML-Nachrichteninhalt zulassen**.

#### Persistentes Menü

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-webchat-layout-persistent.png" width="100%" />
  <figcaption>Konfiguration des persistenten Menüs</figcaption>
</figure>

Das persistente Menü ist eine großartige Möglichkeit, Ihren Benutzern alle Funktionen Ihres Bots zu zeigen. Sie können damit zu verschiedenen Gesprächsphasen wechseln, den Benutzer führen und vieles mehr. Der Benutzer kann das Menü jederzeit während der Konversation über ein kleines Symbol in der linken Ecke öffnen:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/91c86d0-Screenshot_from_2019-04-16_11-06-25.png" width="100%" />
  <figcaption>Persistentes Menü</figcaption>
</figure>

Um ein **persistentes Menü** wie dieses zu erstellen, öffnen Sie das *Persistent Menu Panel*. Das erste, was Sie tun müssen, ist, das persistente Menü zu aktivieren. Sobald Sie dies tun, erscheint das Menüsymbol in der unteren linken Ecke des Webchats. Sie können dem Menü im Feld **Titel** im Bereich "Persistentes Menü" einen beliebigen Titel geben. Um die Persistent Menu Items selbst hinzuzufügen, klicken Sie rechts auf **ADD**. Wenn Sie darauf klicken, wird ein neuer persistenter Menüpunkt hinzugefügt, der aus einem **Titel** und einer **Payload** besteht. Der Text im Titelfeld steuert, was der Benutzer im persistenten Menü sehen kann, während der Text im Payload-Feld tatsächlich an Ihren Flow gesendet wird. Auf diese Weise können Sie dem Benutzer ein einfaches Wort anzeigen, aber tatsächlich eine komplexere Abfrage an Ihren Flow senden, um die Anforderung zu verarbeiten. Die folgende Abbildung zeigt die Konfiguration hinter dem oben abgebildeten Webchat.

#### Webchat-Plugins

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-webchat-layout-plugins.png" width="100%" />
  <figcaption>Webchat-Plugins</figcaption>
</figure>

Um das Plugin auszulösen, um z.B. einen Upload-Button für das Datei-Upload-Plugin anzuzeigen, ist eine Plugin-spezifische Daten-Payload erforderlich.

Um Webchat-Plugins zu konfigurieren, navigieren Sie zu den Konfigurationseinstellungen **Webchat-Layout** im **Webchat-Endpunkt**-Editor. 
Die **Webchat-Plug-in-URL** sollte das Format "https://url.to/plugin.js" haben, wobei "url.to" den Speicherort für Ihr Plug-in darstellt, z. B. Amazon S3, und "Plugin" der Name des spezifischen Plugins ist, das Sie verwenden.

Eine Sammlung von Beispiel-Plugins, die mit Cognigy Webchat kompatibel sind, finden Sie unter
Sie können sich auf das [GitHub](https://github.com/Cognigy/WebchatPlugins/tree/master)-Repository beziehen.
Sie können die URL eines oder mehrerer von ihnen aus dem Abschnitt **Assets** des Plugins auf der Seite [Releases](https://github.com/Cognigy/WebchatPlugins/releases) kopieren.
Fügen Sie die URL direkt in das Feld **Webchat-Plugin-URL** ein.

Die URL für das Webchat-Plugin für die Google Firebase-Authentifizierung lautet beispielsweise 
'https://github.com/Cognigy/WebchatPlugins/releases/download/google-firebase-authentication100/google-firebase-authentication.webchat-plugin.js'.

Um benutzerdefinierte Plug-ins in Ihrer Produktionsumgebung zu verwenden oder vorhandene zu ändern, müssen Sie sie wie folgt manuell installieren:

1. Öffnen Sie das Repository [Coginigy GitHub](https://github.com/Cognigy/WebchatPlugins/tree/master).
2. Klonen Sie den Quellcode.
3. Ändern Sie den Plugin-Code nach Bedarf.
4. Erstellen Sie Ihr Plugin, indem Sie den Befehl "npm ci & npm run build" ausführen.
5. Laden Sie Ihr Plugin in den Cloud-Speicher hoch, z. B. in Amazon S3.
6. Navigieren Sie im Webchat-Endpunkt zum Abschnitt **Webchat-Layout** und fügen Sie die URL in das Feld **Webchat-Plugin-URL** ein.

!!! Warnung "Mögliche Plugin-URL-Fehler"
    Das hochgeladene Plugin sollte für die Zielgruppe verfügbar sein. Überprüfen Sie die Verfügbarkeitseinstellungen auf der Seite Ihres Cloud-Speichers.

### Webchat-Verhalten

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-webchat-behavior.png" width="100%" />
  <figcaption>Webchat-Verhalten</figcaption>
</figure>

| Parameter (main) |	Parameter (sub) | Beschreibung |
| -- | -- | -- |
| Startverhalten | Start-Verhalten <br>- Beginnen Sie mit einem Textfeld<br>- Beginnen Sie mit einem Button<br>- Automatisches Senden einer Nachricht an den Bot |	Startverhalten beim Öffnen des Webchats. |
|| Nutzlast | Der Text, der an Ihren Flow gesendet wird. |
|| Text anzeigen | Text, der beim Start des Bots als simulierte Benutzereingabeblase angezeigt werden soll. |
|| Button-Titel | Der Text, der auf der Schaltfläche Start angezeigt werden soll. |
| Zusätzliches Verhalten | Nachrichten-Verzögerung | Die Zeitspanne, die zwischen dem Senden von Bot-Antworten gewartet werden soll. Gemessen in Millisekunden. |
|| Fokuseingabe nach Postback | Das Nachrichteneingabefeld erhält den Fokus, nachdem auf eine Postback-Schaltfläche oder eine Schnellantwortschaltfläche geklickt wurde. |
|| Verbindungsstatusanzeige aktivieren | Gibt an, ob eine Warnung angezeigt werden soll, wenn die Verbindung während eines Gesprächs unterbrochen wird. Die Warnung verschwindet, wenn die Verbindung wiederhergestellt wird. |

### Einstellungen für Teaser-Nachrichten

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-teaser-message.png" width="100%" />
  <figcaption>Einstellungen für Teaser-Nachrichten</figcaption>
</figure>

| Parameter | Beschreibung |
| -- | -- |
| Text der Teaser-Nachricht | Der Text der Nachricht, der neben dem Webchat-Symbol angezeigt werden soll, um den Benutzer zur Interaktion zu bewegen. |
| Interaktionsnachrichten im Chat anzeigen | Interaktionsnachrichten im Chat anzeigen. |

### Einstellungen für ungelesene Nachrichten

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-unread-message.png" width="100%" />
  <figcaption>Einstellungen für ungelesene Nachrichten</figcaption>
</figure>

| Parameter | Beschreibung |
| -- | -- |
| Indikator für den Titel ungelesener Nachrichten aktivieren | Geben Sie alle 1000 ms die Anzahl der ungelesenen Nachrichten im Seitentitel an. |
| Badge für ungelesene Nachrichten aktivieren | Der Webchat zeigt ein Badge mit der Anzahl der ungelesenen Nachrichten an der Umschalttaste. |
| Vorschau für ungelesene Nachrichten aktivieren | Der Webchat zeigt eine Sprechblase mit der zuletzt abgerufenen Bot-Nachricht an. |
| Tonbestätigung für ungelesene Nachrichten aktivieren | Spielen Sie einen Benachrichtigungston für jede eingehende ungelesene Nachricht ab. |

### Einstellungen für die Konversationsbewertung

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-conversation-rating.png" width="100%" />
  <figcaption>Einstellungen für die Konversationsbewertung</figcaption>
</figure>

| Parameter | Beschreibung |
| -- | -- |
| Aktivieren der Bewertungsfunktion | Wählen Sie aus, wann ein Webchat-Benutzer eine Bewertung abgeben kann. |
| Bewertung Titeltext | Der Titel, der in der Eingabeaufforderung des Bewertungsdialogfelds angezeigt wird. |
| Kommentartext | Der Text wird über dem Kommentarfeld in der Eingabeaufforderung des Bewertungsdialogs angezeigt. |
| Bewertungstext für den Nachrichtenverlauf | Der Text wird nach der Abgabe einer Bewertung in der Nachrichtenhistorie angezeigt. Auf einen Text folgt das Symbol, das die Bewertung darstellt. |
| Nachrichtenverlauf Kommentartext | Der Text wird nach der Abgabe einer Bewertung im Nachrichtenverlauf angezeigt, wenn ein Kommentar gesendet wurde. Auf einen Text folgt der eigentliche Kommentar. |

### Demo-Webchat-Einstellungen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-demo.png" width="100%" />
  <figcaption>Demo-Webchat-Einstellungen</figcaption>
</figure>

| Parameter | Beschreibung |
| -- | -- |
| Demo-Webchat aktivieren | Aktiviert oder deaktiviert den integrierten Demo-Webchat für diesen Endpunkt. |
| Aktivieren von Speech-to-Text | Schalten Sie um, ob der Webchat eine Mikrofontaste enthalten soll. |
| Aktivieren von Text-to-Speech | Schalten Sie um, ob der Webchat alle Bot-Nachrichten laut vorlesen soll. |
| Hintergrundbild | Das Bild, das hinter dem Webchat angezeigt wird. |
| Zentrums-Webchat | Schalten Sie auf 'Ja', wenn der Webchat zentriert sein soll, und schalten Sie auf 'Nein', um sich in der unteren rechten Ecke zu befinden.|

### Webchat-Einstellungen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/20833-custom.png" width="100%" />
  <figcaption>Benutzerdefinierte Webchat-Einstellungen</figcaption>
</figure>

Dieses Feld kann verwendet werden, um zusätzliche Einstellungen zu konfigurieren, die in der GUI nicht verfügbar sind. Diese Einstellungen überschreiben die GUI-Einstellungen. Die Eingabe von falsch formatiertem JSON kann zum Absturz des Webchats führen, verwenden Sie ihn daher mit Vorsicht und auf eigenes Risiko.

## Dateiablage

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.45-blue.svg)] (.. /.. /.. /release-notes/4.45.md)

{! _includes/ai/file-storage.md !}

## Mehr Informationen

- [Cognigy Webchat]({{config.site_url}}ai/endpoints/webchat/webchat/)
- [Webchat-Funktionen ]({{config.site_url}}ai/endpoints/webchat/webchat-features/)
- [Auslösen von Webchat-Plugins ]({{config.site_url}}ai/endpoints/webchat/triggering-webchat-plugins/)
- [Integrierte Demo-Seite]({{config.site_url}}ai/endpoints/webchat/integrated-demo-page/)</,>