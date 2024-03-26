---
 Titel: "Injizieren & Benachrichtigen" 
 Schnecke: "Injizieren und Benachrichtigen" 
 ausgeblendet: false 
---
# Injizieren & Benachrichtigen

## Beschreibung<div class="divider"></div>Normalerweise ist ein Chat eine unmittelbare Interaktion zwischen dem Benutzer und einem Bot. Es kann jedoch vorkommen, dass der Bot einen externen, lang andauernden Prozess mit ungewisser Ausführungsdauer verarbeiten und das Ergebnis für die ausgeführte Chatsitzung verwenden muss. Zum Beispiel lädt der Bot-Benutzer ein Dokument in den Bot hoch, das der Bot dann auf eine externe Plattform hochladen muss, die dann von der externen Plattform analysiert wird und das Ergebnis dann vom Bot in einer Antwort an den Benutzer verwendet werden soll. 

Sobald Sie diese langwierigen Prozesse haben, können Sie dies nicht mehr innerhalb von Cognigy.AI alleine bewältigen. Der externe, lang andauernde Prozess muss Cognigy.AI auslösen, nachdem er beendet wurde, damit der Chat ordnungsgemäß fortgesetzt werden kann.

Für diesen Anwendungsfall stellt Cognigy.AI die Notify- und Inject-API zur Verfügung.

## Injizieren<div class="divider"></div>Unsere inject-API kann verwendet werden, um ein beliebiges Paar von **Text** und **Daten** in unser System zu senden. Der Input wird dann in den Flow weitergeleitet. Der korrekte Ablauf wird durch den Endpunkt bestimmt, der selbst mit der angegebenen **URLToken** identifiziert wird. Inject sollte verwendet werden, wenn Sie komplexe Informationen an den Bot-Benutzer senden möchten. Sie können z.B. einen Flow erstellen, der basierend auf einer bestimmten Eingabe eine schöne **Liste** oder **Galerieelement** generiert. Sie senden eine einfache Nachricht in Ihren Flow, z. B. "makeGallery", und der Flow sendet die zusammengesetzte Galerie über den richtigen Endpunkt an den Bot-Benutzer. Notify kann dafür nicht verwendet werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/1cfe64c-inject.png" width="100%" />
  <figcaption>Schema, das den Datenfluss während eines inject-Aufrufs anzeigt.</figcaption>
</figure>

## Benachrichtigen<div class="divider"></div>Notify kann im Gegensatz zu inject nur verwendet werden, um eine einfache **Text**- und/oder **Daten**-Nachricht direkt an den Benutzer zu senden. Die Nachricht wird nicht an einen Flow weitergeleitet, und daher haben Sie keine weitere Kontrolle darüber, was der Benutzer tatsächlich erhält.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/45c4df1-notify.png" width="100%" />
  <figcaption>Schema, das den Datenfluss während eines Notify-Aufrufs anzeigt.</figcaption>
</figure>

## Auslösen des externen Prozesses mit langer Ausführungszeit<div class="divider"></div>Unsere /inject- und /notify-APIs benötigen eine bestimmte Nutzlast, die Sie senden müssen, um ihre Funktionalität nutzen zu können. Die notwendigen Daten, die Sie benötigen, werden innerhalb des [Eingabeobjekts]({{config.site_url}}ai/tools/interaction-panel/input/) verfügbar gemacht und können daher leicht mit [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) und der JSON-Syntax aufgerufen werden. Werfen Sie einen Blick auf unsere [API-Referenz](https://api-trial.cognigy.ai/openapi#post-/v2.0/endpoint/inject/), um weitere Informationen zu /inject und /notify zu erhalten.

Sie können [HTTP Request-Node]({{config.site_url}}ai/flow-nodes/services/http-request/) verwenden, um den externen, lang andauernden Prozess auszulösen, bei dem Sie die erforderlichen Informationen für notify und inject neben der externen spezifischen Nutzlast senden können.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/bc2f034-httprequest.jpg" width="100%" />
  <figcaption>Verwenden eines HTTP-Request-Knotens zum Auslösen eines lang andauernden Prozesses in einem externen System</figcaption>
</figure>

| Feld in Inject & Notify | Cognigy-Schrift |
|---------------------------|------------------|
| Text | ci.text |
| Daten | ci.data |
| sessionId | ci.sessionId |
| userId | ci.userId |
| URLToken | ci.URLToken |

## Transformatoren benachrichtigen und einspeisen<div class="divider"></div>Wenn Sie keine Kontrolle über die Nutzlast haben, die der externe Dienst an die Inject- oder Notify-API sendet, können Sie sie mit [Notify Transformer]({{config.site_url}}ai/endpoints/transformers/notify-transformer/) oder [Inject Transformer]({{config.site_url}}ai/endpoints/transformers/inject-transformer/) steuern. Auf diese Weise können Sie die Anfrage transformieren und die erforderlichen Felder wie oben beschrieben aus dem Anforderungstext extrahieren, bevor die eigentliche Notify/Inject-API aufgerufen wird.

Die API-URL für die APIs "Notify" und "Inject" unterscheidet sich, wenn der Transformer ausgeführt werden soll. Bei diesen APIs sollte die Anfrage nicht an den API-Dienst, sondern an den Endpunktdienst gesendet werden, was bedeutet, dass Sie die Basis-Endpunkt-URL für Ihr System verwenden müssen (z. B. https://endpoint-demo.cognigy.ai). Die API-URLs lauten wie folgt:

Benachrichtigen: {endpoint-url}/notify/{URLToken}

inject: {endpoint-url}/inject/{URLToken}

Dabei ist URLToken die URLToken des Endpunkts, der ausgeführt werden soll. Die Transformer-Funktionen sollten auch in diesem Endpunkt implementiert werden.

!!! Warnung "API-Unterschiede"
    Die URL für die Notify and Inject API ist unterschiedlich, wenn ein Transformer verwendet werden soll. Die API-URL lautet dann:

Benachrichtigen: {endpoint-url}/notify/{URLToken}

inject: {endpoint-url}/inject/{URLToken}

## Kanal-Unterstützung<div class="divider"></div>Unsere Inject- und Notify-APIs unterstützen nicht alle Kanäle, mit denen wir kompatibel sind. Der Hauptgrund dafür ist, dass wir zu keinem Zeitpunkt Nachrichten an einige unserer Endpunkte senden können. Im Falle von Alexa können wir z.B. keine Nachricht an ein Alexa-betriebenes Gerät senden, da ein Kommunikationskanal nur von ihrer Seite aus initialisiert werden kann.

In der folgenden Liste sind alle Endpunkte aufgeführt, mit denen beide APIs kompatibel sind:

- [Facebook Messenger]({{config.site_url}}ai/endpoints/facebook-messenger/)
- [LINE Messenger]({{config.site_url}}ai/endpoints/line-messenger/)
- [Azure Bot Services]({{config.site_url}}ai/endpoints/azure-bot-services/)
- [RingCentral Engage]({{config.site_url}}ai/endpoints/ringcentral-engage/)
- [Slack]({{config.site_url}}ai/endpoints/slack/)
- [Socket]({{config.site_url}}ai/endpoints/socketio/)
- [Sunshine-Konversationen]({{config.site_url}}ai/endpoints/sunshine-conversations/)
- [Sprach-Gateway]({{config.site_url}}ai/endpoints/cognigy-vg/)
	- Inject/Notify wird nur für Voice Gateway unterstützt, wenn der asynchrone Modus aktiviert ist
- [WhatsApp]({{config.site_url}}ai/endpoints/whatsapp/)
- [Webchat]({{config.site_url}}ai/endpoints/webchat/webchat/)
- [Webhook]({{config.site_url}}ai/endpoints/webhook/)