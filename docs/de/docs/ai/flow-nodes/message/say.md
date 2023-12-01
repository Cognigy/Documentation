---
Titel: "Say" 
slug: "say" 
ausgeblendet: false 
---

# Say

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/say.png" width="80%" />
</figure>

## Beschreibung
<div class="divider"></div>
Ein Say-Knoten wird verwendet, um eine Nachricht an den Benutzer zu senden.

Je nach aktuellem Kanal stehen weitere Rich-Media-Formate zur Verfügung. Fügen Sie eine neue Kanalausgabe hinzu, indem Sie auf das Symbol **+** klicken und den Kanal auswählen, der dem Kanalendpunkt entspricht, der bereitgestellt werden soll.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/ea04ba5-channels.jpg" width="80%" />
  <figcaption>Das Knotenmenü "Sagen" mit aktivierten Kanalausgangstypen.</figcaption>
</figure>

Wenn es eine kanalspezifische Konfiguration für den aktuellen Kanal gibt, wird diese Konfiguration *anstatt* der Konfiguration im Standardabschnitt verwendet.

## KI (Standardkanal) 
<div class="divider"></div>
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/894062b-1AI.jpg" width="100%" />
</figure>

!!! Tipp "Automatische Konvertierung in kanalspezifische Ausgabe"
    Falls Rich Media auf der Standard-KI-Registerkarte konfiguriert ist, versucht die Plattform, die Ausgabe automatisch in das Äquivalent des Kanals zu konvertieren. Überprüfen Sie den spezifischen Ausgabetyp oben, um die Kanalunterstützung zu überprüfen.

!!! Warnung "Fallback-Text"
    Falls die automatische Konvertierung in kanalspezifische Ausgabe nicht stattfinden kann, wird der Fallback-Text ausgelöst.

## Ausgabe-Typen
<div class="divider"></div>

Der AI-Kanal ermöglicht die Konfiguration verschiedener **Ausgabetypen**. Nicht alle [Endpunkte](.. /.. /endpoints/overview.md) können Ihre Inhalte korrekt in den gewünschten Ausgabetyp konvertieren. Vor der Konfiguration [Kompatibilität prüfen](.. /.. /endpoints/content-conversion.md) des Ausgabetyps mit dem Endpunkt.

### Text
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/6746960-node-say.jpg" width="100%" />
</figure>

Der Ausgabetyp **Text** rendert Text und Emojis (sofern vom Kanal unterstützt). Das Textfeld unterstützt auch [CognigyScript]({{config.site_url}}/ai/tools/cognigy-script/) und [Tokens]({{config.site_url}}/ai/resources/manage/tokens/), die durch Klicken auf die Schaltfläche **AI** am Ende jedes Feldes hinzugefügt werden können.

!!! Tipp "Kanal-Unterstützung"
    Der **Text**-Ausgabetyp wird derzeit auf allen Kanälen in eine kompatible Ausgabe konvertiert. Beachten Sie, dass **Emojis** möglicherweise nicht auf allen Kanälen richtig gerendert werden.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9f49b00-OutputTypeText.jpg" width="100%" />
</figure>

Mehrere Textnachrichten können hinzugefügt werden, um die Konversation zu variieren. Wenn mehrere Textnachrichten konfiguriert sind, wird die Versandreihenfolge durch die Einstellungen *linear* und *Schleife* gesteuert, die im Dropdown-Menü ***Optionen*** verfügbar sind.

!!! Warnung "Verwenden mehrerer Textausgaben"
    Durch die Konfiguration mehrerer Nachrichten in einem Textknoten wird nur eine Nachricht pro Aktivierung des Knotens zugestellt. Ein zusätzlicher Say-Knoten muss konfiguriert werden, um zwei Textnachrichten gleichzeitig zu senden.

#### Text-Optionen
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/37689d0-SayOptions.jpg" width="100%" />
</figure>

Beim Senden einer einfachen Textausgabe bieten Cognigy.AI Dialogknoten Optionen zum Konfigurieren des Ausgabeverhaltens und zum Anhängen von Daten an die Nachricht. Die Konfigurationsmöglichkeiten und ihre Funktionen sind im Folgenden aufgeführt:

| Parameter | Typ | Beschreibung |
|-----------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Linear | Umschalten | Iteriert linear und nicht zufällig durch die Textoptionen.                                                                                                 |
| Schleife | Umschalten | Wenn 'linear' gesetzt ist, beginnt die Reihenfolge bei der ersten Textantwort nach Erreichen des Endes neu. Andernfalls wird die letzte Textoption wiederholt verwendet, sobald sie erreicht ist. |
| Daten | JSON | Die Daten, die Sie an den Client senden möchten |

!!! Hinweis "Linear und Loop"
    Es gibt drei verschiedene Kombinationen der Umschalter "Linear" und "Schleife", die jeweils einen anderen Verhaltensstil für die Reihenfolge bereitstellen, in der Nachrichten bei der zukünftigen Aktivierung desselben Knotens zugestellt werden. Die drei Kombinationen sind:

* Zufällig (z. B. 4, 2, 5, 4, 4, 2, 5, 1, ...)
    * Linear + ohne Schleife (z. B. 1, 2, 3, 4, 5, 5, 5, 5...)
    * Linear + Schleife (z. B. 1, 2, 3, 4, 5, 1, 2, 3, 4, 5...)
### Text mit Schnellantworten
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/5f55583-say-node-qr.jpg" width="100%" />
</figure>

Text mit Schnellantworten kann verwendet werden, um dem Benutzer eine Reihe von konfigurierbaren Schnellantworten anzuzeigen. Schnellantworten sind vordefinierte Antworten, die als Eingabechips gerendert werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/01d80fd-Say_Node_quick_replies_2.jpg" width="50%" />
</figure>

Die Klickaktion kann als **Telefonnummer** oder **Postback senden** konfiguriert werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3dbf220-select_button_type.jpg" width="50%" />
</figure>

#### Postback-Wert
Wenn ein **Postback-Wert** konfiguriert ist und auf **Schnellantwort** geklickt wird, wird der Postback-Wert an den Anfang des Flows gesendet. Dadurch wird eine Benutzereingabe simuliert - es ist so, als ob der Benutzer etwas manuell eingegeben hätte. Dies ist das typischste Verhalten für Schnellantworten.

#### Telefonnummer
Wenn diese Option konfiguriert ist, wird durch Klicken auf die Schnellantwort versucht, die Telefonanwendung auf dem Gerät zu öffnen.

#### Trigger-Absicht
Mit der Funktion "Trigger Intent" können Sie einen Intent manuell auslösen, indem Sie cIntent: gefolgt vom gewünschten Intent-Namen in Ihre Texteingabe schreiben, die reguläre Intent-Zuordnung wird ignoriert.
Weitere Informationen finden Sie unter [Trigger Intent]({{config.site_url}}ai/nlu/nlu-overview/trigger-intent/)

!!! Warnung "Channel-Unterstützung"
    Der Ausgabetyp **Text mit Schnellantworten** wird derzeit in eine kompatible Ausgabe auf allen folgenden Kanälen konvertiert: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack** und **RingCentral Engage**.
### Galerie

Galerien sind leistungsstarke visuelle Widgets, die sich ideal zum Anzeigen einer Liste von Optionen mit Bildern eignen. Sie werden in der Regel verwendet, um eine Reihe von Produkten oder anderen Artikeln anzuzeigen, die durchsucht werden können.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/243f107-Say_order_taxi_2.PNG" width="100%" />
</figure>

Eine Galerie kann mit einer Reihe von Karten konfiguriert werden. Eine Karte enthält ein Bild, einen Titel und einen Untertitel und kann mit (optionalen) Schaltflächen konfiguriert werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/cd2a3a1-SAY_gallery_cards_1.PNG" width="75%" />
</figure>

!!! Warnung "Channel-Unterstützung"
    Der Ausgabetyp **Gallery** wird derzeit in eine kompatible Ausgabe auf allen folgenden Kanälen konvertiert: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack** und **RingCentral Engage**.
### Text mit Schaltflächen
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c7c32f9-say-buttons.jpg" width="100%" />
</figure>

**Text mit Schaltflächen** ist ein ähnlicher **Ausgabetyp** wie **Text mit Schnellantworten**. Der Unterschied ergibt sich aus der Art und Weise, wie das Widget gerendert wird, die einer vertikalen Liste von Schaltflächenoptionen ähnelt. Es kann auf ähnliche Weise konfiguriert werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/6554383-textbuttons.PNG" width="75%" />
</figure>

!!! Warnung "Channel-Unterstützung"
    Der Ausgabetyp **Text mit Schaltflächen** wird derzeit in eine kompatible Ausgabe auf allen folgenden Kanälen konvertiert: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack** und **RingCentral Engage**.
### Liste
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/1c5a0c7-list1.PNG" width="100%" />
</figure>

Die **Listen**-Ausgabe ermöglicht die Anzeige einer benutzerdefinierten Liste von Elementen mit vielen Konfigurationsoptionen wie dem Header-Bild, Schaltflächen, Bildern und mehr. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/782c02f-list2.PNG" width="100%" />
</figure>

Das erste Listenelement kann optional in ein Headerelement konvertiert werden, das den Listentitel, den Untertitel und die Schaltfläche enthält. Jedem zusätzlichen Listenelement können ein Titel, ein Untertitel, ein Bild und eine Schaltfläche hinzugefügt werden. Der Liste kann auch eine Schaltfläche am unteren Rand hinzugefügt werden.

!!! Warnung "Channel-Unterstützung"
    Der Ausgabetyp **Liste** wird derzeit in eine kompatible Ausgabe auf allen folgenden Kanälen konvertiert: **Webchat**, **Azure Bot Services**, **RingCentral Engage**, **UserLike** und **Line**.
### Audio
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/7c58ec2-node-audio.jpg" width="100%" />
</figure>

Der **Audioausgabetyp** kann die Audioausgabe rendern, falls dies vom Kanal unterstützt wird. Es kann konfiguriert werden, indem es mit einer URL zu einer Audiodatei versehen wird.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/86d62bf-audio.jpg" width="100%" />
</figure>

!!! Warnung "Channel-Unterstützung"
    Der **Audioausgabetyp** wird derzeit in eine kompatible Ausgabe auf allen folgenden Kanälen konvertiert: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack**.
### Bild
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/506f002-Say_image.svg" width="100%" />
</figure>

Bildausgabetypen zeigen ein Bild auf ähnliche Weise wie die Galerie an. Die Bildausgabe gibt jedoch nur ein bestimmtes Bild aus.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c8fd6f9-Output_Type_image.svg" width="100%" />
</figure>

!!! Warnung "Channel-Unterstützung"
    Der Ausgabetyp "Bild" wird derzeit in eine kompatible Ausgabe auf allen folgenden Kanälen konvertiert: "Webchat", "Messenger", "Line**", "Azure Bot Service", "Sunshine Conversations", "Slack".
### Zum Video
<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/f8b5cdf-Say_video.svg" width="100%" />
</figure>

Mit dem Videoausgabetyp können Sie eine Videoausgabe konfigurieren. Es akzeptiert eine URL als Eingabeparameter und beginnt automatisch mit der Wiedergabe des Videos, wenn dies vom Kanal unterstützt wird.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/f71165b-Output_Type_video.svg" width="100%" />
</figure>

!!! Warnung "Channel-Unterstützung"
    Der Ausgabetyp **Video** wird derzeit in eine kompatible Ausgabe auf allen folgenden Kanälen konvertiert: **Webchat**, **Messenger**, **Line**, **Azure Bot Service**, **Sunshine Conversations**, **Slack**.
    
**BITTE BEACHTEN**: Der **Messenger**-Kanal erfordert, dass Videos vom Typ MP4 sind (z. B. funktionieren Youtube-Links möglicherweise nicht).

!!! Hinweis "CognigyScript"
    Jedes Textfeld im say-Knoten unterstützt die Verwendung von **CognigyScript**. 
    
Eine detaillierte Anleitung finden Sie im Kapitel [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/).

### Adaptive Karte

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.56-blue.svg)] (.. /.. /.. /release-notes/4.56.md)

Mit dem adaptiven Kartentyp können Sie eine adaptive Kartenausgabe konfigurieren. Adaptive Karten bieten Anpassungsoptionen, Unterstützung für Rich Media (Bilder, Video und Audio), Benutzerfreundlichkeit mit einem einfachen JSON-Schema und die Möglichkeit, dynamische Inhalte für Benutzer zu erstellen, die ihren spezifischen Anforderungen und ihrem Branding entsprechen. 

Um eine adaptive Karte zu erstellen, verwenden Sie den [Designer adaptiver Karten](https://adaptivecards.io/designer). Passen Sie den vorhandenen JSON-Code an, kopieren Sie ihn und fügen Sie ihn in den Code-Editor ein. Wenn JSON korrekt ist, wird die adaptive Karte im Code-Editor gerendert.

!!! Warnung
    Cognigy unterstützt die begrenzte Anzahl von Versionen für die adaptive Karte, so dass die Verwendung der neuesten Versionen zu Problemen führen kann. Wir empfehlen die Verwendung von [unterstützte Versionen](.. /.. /endpoints/content-conversion.md) für eine bessere Kompatibilität.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/say/adaptive-card-output-type.png" width="80%" />
</figure>

??? info "JSON-Beispiel für eine adaptive Karte"

'''json    
      {
        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
        "type": "AdaptiveCard",
        "version": "1.0",
        "Körper": [
          {
            "type": "TextBlock",
            "size": "Mittel",
            "weight": "Mutiger",
            "text": "Adaptives Kartenschema veröffentlichen"
          },
          {
            "type": "Spaltensatz",
            "Spalten": [
              {
                "type": "Spalte",
                "Gegenstände": [
                  {
                    "type": "Bild",
                    "style": "Person",
                    "url": "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
                    "size": "Klein"
                  }
                ],
                "width": "auto"
              },
              {
                "type": "Spalte",
                "Gegenstände": [
                  {
                    "type": "TextBlock",
                    "weight": "Mutiger",
                    "text": "Matt Hidinger",
                    "wrap": wahr
                  },
                  {
                    "type": "TextBlock",
                    "spacing": "Keine",
                    "text": "Erstellt Di, Feb 14, 2017",
                    "isSubtle": wahr,
                    "wrap": wahr
                  }
                ],
                "width": "dehnen"
              }
            ]
          },
          {
            "type": "TextBlock",
            "text": "Adaptives Kartenschema einfach veröffentlichen.",
            "wrap": wahr
          },
          {
            "type": "Action.OpenUrl",
            "title": "Ansicht",
            "url": "https://adaptivecards.io"
          }
        ]
      }
      '''
#### Erstellen einer adaptiven Karte mit generativer KI

Sie können auch generative KI verwenden, um eine neue adaptive Karte zu erstellen oder eine vorhandene Karte zu verbessern. Stellen Sie vor der Verwendung sicher, dass Sie mit einem der [Anbieter generativer KI] (.. /.. /generative-ai.md#prerequisites).

Um diese Funktion zu aktivieren, gehen Sie folgendermaßen vor: 

1. Wählen Sie den Ausgabetyp **Adaptive Karte** aus.
2. Klicken Sie auf der rechten Seite der Liste **Ausgabetyp** auf ! [das Gen-KI-Symbol] (.. /.. /.. /assets/icons/beta.svg).
3. Weisen Sie im Abschnitt **Knotenausgabe generieren** das generative KI-Modell an, wie die aktuelle adaptive Karte verbessert werden kann. Beispiel: "Erstellen Sie ein Formular mit einem Feld für den Kundennamen und einem Eingabefeld für das Datum".
4. Klicken Sie auf **Generieren**. Die adaptive Karte wird generiert.
5. Verbessern Sie iterativ die resultierende adaptive Karte, indem Sie im Abschnitt **Knotenausgabe generieren** weitere Anweisungen geben. Beispiel: "Fügen Sie ein Flugnummernfeld hinzu".
6. Klicken Sie auf **Generieren**. Die vorhandene adaptive Karte wird aktualisiert.

Um zwischen Ihren Eingaben zu navigieren, verwenden Sie ! [Pfeil zurück] (.. /.. /.. /assets/icons/back-arrow.svg) ! [beta] (.. /.. /.. /assets/icons/next-arrow.svg).

Um die aktuelle adaptive Karte durch eine neue zu ersetzen, klicken Sie auf ! [Papierkorb] (.. /.. /.. /assets/icons/recycle-bin.svg).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/say/adaptive-card-type-generative-ai.png" width="80%" />
</figure>

??? info "JSON-Beispiel für eine adaptive KI-Karte"

'''json
    {
      "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
      "type": "AdaptiveCard",
      "version": "1.0",
      "Körper": [
        {
          "type": "TextBlock",
          "text": "Kundenformular"
        },
        {
          "type": "Input.Text",
          "id": "Kundenname",
          "placeholder": "Kundennamen eingeben"
        },
        {
          "type": "Eingabe.Datum",
          "id": "dateInput",
          "placeholder": "Datum eingeben"
        },
        {
          "type": "Input.Text",
          "id": "Flugnummer",
          "placeholder": "Flugnummer eingeben"
        }
      ]
    }
    '''

## Alexa
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/1ebe307-alexa.jpg" width="100%" />
</figure>

Definiert, was ein Amazon Echo-fähiges System als Antwort sagt. 

### SSML-Editor

Zusätzlich zur normalen Textausgabe unterstützt Alexa SSML, mit dem der Administrator die Art und Weise definieren kann, wie die Ausgabe ausgesprochen wird.

!!! Warnung "Mehrere Sprachausgaben"
    Wenn mehr als ein Say-Knoten in einer Flow-Ausführung mit dem Alexa-Kanal getroffen wird, werden die SSML-Ausgaben (oder Textausgaben) der einzelnen Say-Knoten verkettet und als eine große SSML-Anweisung gesendet.

!!! Hinweis "CognigyScript in SSML"
    Sie können auch CognigyScript-Ausdrücke in SSML-Parametern verwenden.
### Home Karten

!!! Warnung "Mehrere Karten"
    Wenn während einer Flow-Ausführung mehr als eine Karte ausgegeben wird, wird nur die letzte Karte gesendet.

Definiert eine optionale zusätzliche Karte, die dem Benutzer über eine verbundene Alexa-App zur Verfügung steht. Sie können verwendet werden, um zusätzliche Informationen bereitzustellen, die ohne Bildschirm nicht wahrnehmbar sind.

Die folgenden Kartenvorlagen sind verfügbar:

-Text
- Text & Bild
- Konto verknüpfen
### Anzeigevorlagen für Echo Show

Wenn während einer Flow-Ausführung mehr als eine Anzeigekonfiguration ausgegeben wird, wird nur die letzte gesendet.

Definiert Inhalte, die auf Amazon Echo Show-Geräten angezeigt werden.

Die folgenden Anzeigevorlagen stehen zur Verfügung:

* Text in voller Breite
* Text & Bild rechts
* Text & Bild links
* Bild- und Text-Overlay
* Vertikale Liste
* Horizontale Liste

### Benutzerdefinierte JSON-Direktiven

Anstatt den WYSIWYG-Ansatz zu verwenden, können Sie eine Direktive auch manuell mit einem CognigyScript-fähigen JSON-Feld definieren.

Weitere Informationen finden Sie in der [Amazon Alexa-Dokumentation](https://developer.amazon.com/de/docs/custom-skills/request-and-response-json-reference.html).

## Bote
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/16b8fc7-messenger.jpg" width="100%" />
    <div style="text-align: center;"><a href="https://developers.facebook.com/docs/messenger-platform/reference/send-api" target="_blank">Link: Messenger-Sende-API</a></div>
</figure>

Definiert Vorlagen, die im Facebook Messenger Channel auf besondere Weise angezeigt werden können.

Die folgenden Facebook Messenger-Vorlagen sind verfügbar:

- Text & Schnellantworten
-Tasten
-Galerie
-Anhang
-Liste

!!! Tipp: "Geben Sie beliebiges Facebook-JSON aus"
    Anstatt die von Cognigy bereitgestellten UI-Funktionen zu verwenden, können Sie auch beliebigen JSON-Code ausgeben, indem Sie **Benutzerdefiniertes JSON** als Typ auswählen. Auf diese Weise können Sie den JSON-Code, den Sie mit Cognigy kompiliert haben, anzeigen und ändern oder hinzufügen.

!!! Tipp "Verwenden von Code-Nodes zur Ausgabe von Facebook-Markup"
    Sie können die Ausgabeaktion in Codeknoten verwenden, um JSON direkt an Facebook zu senden. Legen Sie dazu den folgenden Code als data-Eigenschaft fest:

'''JSON
    {
      "_cognigy": {
        "_facebook": {      
          "Nachricht": {
            Diese enthält Ihre Nachricht an Facebook
          }
        }
      }
    }
    ''' 

Weitere Informationen finden Sie unter [Code Nodes]({{config.site_url}}ai/flow-nodes/code/code/)

!!! danger "Verwerfung der Standortschaltfläche"
    Der Schnellantwort-Button "Standort", um den Standort eines Benutzers zu senden, wurde vom Facebook Messenger als veraltet markiert und ist nicht mehr verfügbar. Entferne es, wenn du es in einem älteren Flow hast, da Facebook Messenger die vollständige Nachricht ablehnt, wenn noch eine Schnellantwort für den Standort definiert ist.

## Webchat
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/26ca2e8-webchat.jpg" width="100%" />
</figure>

Der Webchat-Kanal bietet die Konfigurationsmöglichkeiten unserer Facebook-Integration.

Da das Ausgabeformat identisch ist, können Sie den Webchat-Kanal so konfigurieren, dass er Ihre Ausgabe aus dem Facebook-Tab verwendet, oder ihn manuell für Webchat-spezifische Anpassungen überschreiben.

Der Webchat rendert HTML-Markup für Ausgaben aus dem Text des DEFAULT-Tabs sowie das Textfeld aus der Webchat-Tab-Vorlage "Text + Quick Replies".
## LINIE
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/8313bb3-line.jpg" width="100%" />
  <div style="text-align: center;"><a href="https://developers.line.me/en/docs/messaging-api/" target="_blank">Link: LINE Message API</a></div>
</figure>

Die Registerkarte **LINE** bietet zwei Methoden zum Erstellen und Bearbeiten einer Nachricht, die nur für den **LINE**-Kanal gilt:

- **Text** zum Senden von SMS-Antworten
- **Benutzerdefiniertes JSON** zum Definieren komplexerer Nachrichten und Vorlagen

| Typ | Beschreibung |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text | Eine einfache Textnachricht.                                                                                                                                           |
| Benutzerdefiniertes JSON | Kann ein gültiges LINE-Nachrichtenobjekt enthalten. Weitere Informationen und Vorlagen finden Sie in der [Leitungsdokumentation](https://developers.line.me/en/reference/messaging-api/). |

## Twilio
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/6404b3e-twilio.jpg" width="100%" />
  <div style="text-align: center;"><a href="https://www.twilio.com/docs/voice/twiml" target="_blank">Link: Twilio-Dokumentation</a></div>
</figure>

| Typ | Beschreibung |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text | Eine einfache Textnachricht.                                                                                                                                                                                         |
| TwiML | Kann gültiges TwiML enthalten. Weitere Informationen und Vorlagen finden Sie in der [Twilio-Dokumentation](https://www.twilio.com/docs/voice/twiml?code-sample=code-say-hello-to-an-inbound-caller&code-language=output-twiml). |

!!! Warnung "Validieren Sie Ihre TwiML"
    Stellen Sie sicher, dass die TwiML, die Sie in den Editor eingeben, gültig ist. Wenn die an Twilio gesendete TwiML ungültig ist, schlägt der Anruf sofort fehl oder kann nicht initiiert werden.

Sie müssen auch sicherstellen, dass der Inhalt Ihrer TwiML mit XML-Escapezeichen versehen ist.
### Amazon Polly Voice
---
Im Endpunkt-Editor Ihres **Twilio-Endpunkts** können Sie die **Amazon Polly**-Stimme auswählen. *Polly* verfügt über einige Funktionen, die in der Twilio-Dokumentation aufgeführt sind, siehe:

[:link: Twilio Amazon Polly] (https://www.twilio.com/docs/voice/twiml/say/text-speech#amazon-polly)

## Twilio SMS
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/9819b1c-twiliosms.jpg" width="100%" />
  <div style="text-align: center;"><a href="https://www.twilio.com/docs/sms/twiml/message" target="_blank">Link: Twilio SMS-Dokumentation</a></div>
</figure>

| Typ | Beschreibung |
|-------|-------------------------------------------------------------------------------------------------------------------------------------------|
| Text | Eine einfache Textnachricht.                                                                                                                    |
| TwiML | Kann gültiges TwiML enthalten. Weitere Informationen und Vorlagen finden Sie in der [Twilio-Dokumentation](https://www.twilio.com/docs/sms/twiml/message). |

!!! Warnung "Validieren Sie Ihre TwiML"
    Stellen Sie sicher, dass die TwiML, die Sie in den Editor eingeben, gültig ist. Wenn die an Twilio gesendete TwiML ungültig ist, schlägt der Anruf sofort fehl oder kann nicht initiiert werden.

Sie müssen auch sicherstellen, dass der Inhalt Ihrer TwiML mit XML-Escapezeichen versehen ist.
## Microsoft Teams
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/892e801-teams.jpg" width="100%" />
</figure>

!!! Hinweis "Teams-Karten"
    Strukturierte Inhalte in Microsoft Teams werden als sogenannte Cards versendet. Informationen zum Senden von Nachrichten finden Sie auf der Seite [Bereitstellung eines Microsoft Teams-Endpunkts]({{config.site_url}}ai/endpoints/azure-bot-services#section-3-sending-messages-to-a-teams-bot/).
<!-- müssen den obigen Link ändern -->

<div style="text-align: center; padding: 0px;"><a href="https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-add-rich-cards?view=azure-bot-service-3.0" target="_blank">Link: Microsoft Teams-Dokumentation</a></div>

| Typ | Beschreibung                                                                                                                                                                                                                                                                    |
|------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Text | Eine einfache Textnachricht.                                                                                                                                                                                                                                                         |
| JSON | Kann gültigen JSON-Code im Bot Framework-/Microsoft Teams-Format enthalten. Weitere Informationen und Vorlagen finden Sie in der [Microsoft-Dokumentation](https://docs.microsoft.com/en-us/azure/bot-service/rest-api/bot-framework-rest-connector-add-rich-cards?view=azure-bot-service-3.0). |

!!! Warnung "Mehrere Durchflussausgänge"
    Wenn mehr als ein Say-Knoten in einer Flow-Ausführung mit dem Microsoft Teams-Kanal getroffen wird, werden die Standardtext- oder Microsoft Teams-Textausgaben der einzelnen Say-Knoten verkettet und als eine Nachricht gesendet. Wenn jedoch einer oder mehrere der Say-Knoten Microsoft Teams-JSON enthalten, wird der letzte Knoten gesendet, der diesen JSON-Code enthält.

## Sprach-Gateway

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.48-blue.svg)] (.. /.. /.. /release-notes/4.48.md)

So aktivieren Sie einen Voice Gateway-Kanal:

1. Gehen Sie zur Seite **Knoten bearbeiten** und klicken Sie auf **+**.
2. Wählen Sie in der Liste **Voice Gateway** aus.
3. Fügen Sie im Feld **Text** SSML-Markup hinzu, um die Ausgabesprache des virtuellen Agenten anzupassen.

Ab Cognigy 4.48 können Sie die Voice Gateway-Einstellungen mithilfe von Aktivitätsparametern konfigurieren. Aktivieren Sie dazu den Schalter Aktivitätsparameter festlegen. Eine Beschreibung der Parameterkonfigurationen finden Sie unter [Voice Gateway Parameter Details](.. /vg/parameter-details.md).
Diese Konfigurationen sind auch in den folgenden Knoten verfügbar:

- [Frage](question.md)
- [Optionale Frage](optional-question.md)
- [Sitzungskonfiguration festlegen](.. /vg/set-session-config.md)
- [Wiedergabe](.. /vg/play.md)
- [Konfiguration der Sitzungssprachparameter](.. /generic-voice-nodes/session-speech-parameters-config.md)

## 8x8

Die Registerkarte **8x8** bietet drei Methoden zum Erstellen und Bearbeiten von Nachrichten innerhalb des 8x8-Kanals.

| Typ | Beschreibung |
|---------------|-------------------------------------------------------------------------------------------------------------------------------|
| Text | Eine einfache Textnachricht.                                                                                                        |
| Benutzerdefiniertes JSON | Kann ein gültiges 8x8-Nachrichtenobjekt enthalten.                                                                                       |
| Adaptive Karte | Kann eine adaptive Karte enthalten. Unterstützte Versionen finden Sie unter [Inhaltskonvertierung](.. /.. /endpoints/content-conversion.md). |

??? info "Benutzerdefiniertes JSON-Beispiel"
    
'''json
    {
        "authorType": "Kunde",
        "text": "Hallo!",
        "Anhänge": [
            {
                "id": "Zeichenfolge"
            }    
        ],
        "Karten": [
            {
                "contentType": "application/vnd.microsoft.card.adaptive",
                "Inhalt": {}
            }
        ]
    }
    '''

## Genesys

Die Registerkarte **Genesys** bietet zwei Methoden zum Erstellen und Bearbeiten von Nachrichten, die für den **Genesys**-Kanal spezifisch sind.

| Typ | Beschreibung |
|-------------|------------------------------------------------------------------------------------------------|
| Text | Eine einfache Textnachricht.                                                                         |
| Benutzerdefiniertes JSON | Kann ein gültiges Genesys Cloud-Nachrichtenobjekt enthalten. Definiert komplexere Nachrichten und Vorlagen. |

??? info "Benutzerdefiniertes JSON-Beispiel"

'''json
    {
      "replymessages": [],
      "Parameter": {
        "command": "Übergabe"
      }
    }
    '''
    
Diese Meldung deutet darauf hin, dass der virtuelle Agent, der auf der Cognigy-Seite arbeitet, seine Aufgabe erledigt hat. Es bedeutet auch, dass die Kontrolle an die Logik innerhalb des [Genesys architect flow](https://help.mypurecloud.com/articles/use-architect-to-create-a-bot-for-an-inbound-flow/) übergeben wird.

## Bandbreite

Die Registerkarte **Bandbreite** bietet zwei Methoden zum Erstellen und Bearbeiten von Nachrichten, die für den Kanal **Bandbreite** spezifisch sind.

| Typ | Beschreibung |
|-------------|---------------------------------------------------------------------------------------------|
| Text | Eine einfache Textnachricht.                                                                      |
| Benutzerdefiniertes JSON | Kann ein gültiges Bandbreitennachrichtenobjekt enthalten.  Definiert komplexere Nachrichten und Vorlagen. |

??? info "Benutzerdefiniertes JSON-Beispiel"

'''json
    {
      "Tätigkeiten": [
        {
          "id": "123456789",
          "timestamp": "1999-12-31T23:59:59.999Z",
          "type": "Nachricht",
          "text": "Hallo. Das ist meine Botschaft."
        }
      ]
    }
    '''

## Optionen zum Öffnen von URLs im bestehenden Browser-Tab im Webchat-Widget
<div class="divider"></div>

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.5.0-blue.svg)] ({{config.site_url}})

Ab Version 4.5 können Sie entscheiden, ob Sie eine URL im selben Webchat-Widget-Fenster oder in einem neuen öffnen möchten, wenn Sie die Option "Knotentext mit Schaltflächen", "Galerie" oder "Liste" verwenden.

**Beispiel für einen Knoten, der Text mit Schaltflächen verwendet**

1. Erstellen Sie einen Flow mit Say Node. 
2. Starten Sie den Say-Node-Editor, wählen Sie die Option **Text mit Schaltflächen** und klicken Sie auf **Neue Schaltfläche hinzufügen**. 
3. Wählen Sie dann **URL** als **Schaltflächentyp** und geben Sie die gewünschte Internetadresse ein. 
4. Schließen Sie die Konfiguration ab, indem Sie **URL in neuem Tab öffnen** oder **URL im selben Tab öffnen** auswählen. 
5. Stellen Sie einen Endpunkt mit der Webchat-Option bereit und starten Sie eine Bot-Konversation.
    Die konfigurierten Say Node Buttons werden im Webchat-Widget angezeigt.
6. Klicken Sie auf den Button.
7. Je nach Konfiguration wird die URL in einem separaten Tab oder im selben Tab geöffnet.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3492532-Show_URL_in_same_tab.PNG" width="75%" />
</figure>

Sagen Sie Knotenkonfiguration mit der Einstellung "URL-Ziel" "URL im selben Tab öffnen".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/83e1500-Webchat_conversation_same_tab.PNG" width="75%" />
</figure>

Webchat mit dem Button "URL im gleichen Tab anzeigen".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/320961c-Cognigy_Website_same_tab.png" width="75%" />
</figure>

Die URL wurde im selben Tab geöffnet.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/3014d6c-Show_URL_in_new_tab.PNG" width="75%" />
</figure>

Sagen Sie Node-Konfiguration mit der Einstellung "URL-Ziel" "URL in neuem Tab öffnen".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/83e1500-Webchat_conversation_same_tab.PNG" width="75%" />
</figure>

Webchat mit Button "URL in neuem Tab anzeigen".

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/af2f15e-URL_opened_in_new_tab.png" width="75%" />
</figure>

Die URL wurde in einem neuen Tab geöffnet.

## KI-gestützte Ausgabe

Um die KI-gestützte Umformulierung der Bot-Ausgabe zu verwenden, lesen Sie die [Generative AI](.. /.. /generative-ai.md#rephrase-bot-outputs) Artikel.

## Übergabe-Einstellungen

Wenn Sie eine Übergabe verwenden, z. B. an einen Live-Agenten, können Sie auswählen, wer die Nachricht vom virtuellen Agenten erhält:

- Benutzer und Agent – standardmäßig erhalten sowohl der Endbenutzer als auch der menschliche Agent die Nachricht.
- Nur Benutzer — der Endbenutzer erhält die Nachricht.
- Nur Agent – der zuständige menschliche Agent erhält die Nachricht.