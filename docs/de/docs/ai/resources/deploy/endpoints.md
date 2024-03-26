---
title: "Endpunkte" 
slug: "Endpunkte" 
ausgeblendet: false 
---
# Endpunkte

_Endpunkte_ werden verwendet, um externe Kanäle wie Facebook Messenger, Slack, Alexa und viele andere mit bestimmten [Flows](.. /build/flows.md). Sie konvertieren kanalspezifische Ein- und Ausgaben, einschließlich Bilder, Galerien und Stimme, in das standardisierte Input-Objekt. Dieser Ansatz ermöglicht die Entwicklung eines Cognigy Flows nur einmal, woraufhin er durch die Konfiguration von Endpunkten auf verschiedenen Kanälen bereitgestellt werden kann.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/endpoints-screen.png" width="100%" />
</figure>

Weitere Informationen zu Endpunkttypen und Links zu unserem [Help Center](https://support.cognigy.com/hc/en-us?_ga=2.36371232.1055740288.1600087042-336273911.1592472592) finden Sie in der Dokumentation [Endpoints]({{config.site_url}}ai/endpoints/overview/).

## Standard-Endpunkte

Die Plattform enthält viele vorgefertigte Endpunkte, die in wenigen Schritten konfiguriert werden können. 

| Endpunkt | Beschreibung                                                                                                                                                                                                                |
|--------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Webchat] (.. /.. /endpoints/webchat/webchat.md) | Der Webchat ist ein webbasiertes Open-Source-Chat-Widget, das auf jeder Website eingebettet werden kann.                                                                                                                                   |
| [Alexa] (.. /.. /endpoints/amazon-alexa.md) | Alexa ist Amazons virtueller Assistent für Sprach-KI. Die Geräte gibt es in verschiedenen Ausführungen, wie Echo, Echo Dot und Echo Show.                                                                                        |
| [Dialogfluss] (.. /.. /endpoints/dialogflow.md) | DialogFlow ist das Natural Language Understanding-Framework von Google. Durch die Konfiguration eines DialogFlow-Endpunkts können Sie Ihren Flow mit allen Kanälen verbinden, die von DialogFlow unterstützt werden.                                           |
| [Facebook Messenger] (.. /.. /endpoints/facebook-messenger.md) | Messenger ist die Messaging-App und -Plattform von Facebook.                                                                                                                                                                        |                                                                      |
| [Sprach-Gateway] (.. /.. /endpoints/cognigy-vg.md) | Mit Voice Gateway können Sie eine Verbindung zu SIP-Schnittstellen herstellen, was bedeutet, dass Ihr virtueller Agent mit dem Telefonnetz verbunden werden kann.                                                                                               |
| [Gegensprechanlage] (.. /.. /endpoints/intercom.md) | Intercome ist eine Live-Chat-Suite.                                                                                                                                                                                            |
| [Zeile] (.. /.. /endpoints/line-messenger.md) | Line ist eine beliebte Messaging- und Sprachanruf-App.                                                                                                                                                                            |
| [Azure Bot Services] (.. /.. /endpoints/azure-bot-services.md) | Die [Azure Bot Services](.. /.. /endpoints/azure-bot-services.md) ermöglicht es Ihnen, Ihren virtuellen Agent mit allen Azure Bot Service-Kanälen zu verbinden.                                                                       |
| [Microsoft Teams] (.. /.. /endpoints/microsoft-teams.md) | Microsoft Teams ist eine beliebte Kommunikations- und Kollaborationsplattform.                                                                                                                                                     |
| [REST] (.. /.. /endpoints/rest.md) | Mit dem REST-Endpunkt können Sie sich direkt über eine REST-Schnittstelle mit einem Cognigy Flow verbinden.                                                                                                                                    |
| [RingCentral Engage] (.. /.. /endpoints/ringcentral-engage.md) | RingCentral Engage ist eine Plattform zur Kundenbindung, die integrierte Unterstützung für viele Kanäle und Live-Chat-Funktionen bietet.                                                                                          |
| [Lockerheit] (.. /.. /endpoints/slack.md) | Slack ist eine beliebte Kommunikations- und Kollaborationsplattform.                                                                                                                                                               |
| [Sonnenschein-Gespräche] (.. /.. /endpoints/sunshine-conversations.md) | Sunshine Conversations ist Teil von Zendesk und hilft bei der Verbindung mit anderen Kanälen.                                                                                                                                    |
| [Steckdose] (.. /.. /endpoints/socketio.md) | Mit dem Socket-Endpunkt können Sie über eine Socket-Schnittstelle eine Verbindung zu einem Flow herstellen.                                                                                                                                                 |
| [Twilio] (.. /.. /endpoints/twilio.md) | Twilio ist eine beliebte Cloud-Kommunikationsplattform. Mit dem Twilio-Endpunkt können Sie Flows mit Twilio Programmable Voice verbinden.                                                                                                |
| [Twilio-SMS] (.. /.. /endpoints/twilio.md#twilio-voice-twilio-sms--whatsapp-twilio-autopilot) | Twilio ist eine beliebte Cloud-Kommunikationsplattform. Mit dem Twilio-SMS-Endpunkt können Sie Flows mit programmierbaren Twilio-SMS verbinden.                                                                                              |
| [Userlike] (.. /.. /endpoints/userlike.md) | Userlike ist eine beliebte Live-Chat-Plattform.                                                                                                                                                                                  |
| [Webhook] (.. /.. /endpoints/webhook.md) | Mit dem Webhook-Endpunkt können Sie Cognigy Flows über den Webhook verfügbar machen.                                                                                                                                                            |
| [Stimme Copilot] (.. /.. /endpoints/voice-copilot.md) | Der Voice Copilot Endpoint wird für die Integration zwischen Callcentern und AI Copilot für Sprachanwendungsfälle verwendet.                                                                                                                |
| [8x8] (.. /.. /endpoints/8x8.md) | Der 8x8-Endpunkt ermöglicht die Verbindung des virtuellen Agenten mit der [8x8-Plattform](https://www.8x8.com/).                                                                                                                              |
| [Genesys] (.. /.. /endpoints/genesys.md) | Der Genesys Endpoint ermöglicht die Verbindung des virtuellen Agenten mit der [Genesys Cloud CX-Plattform](https://apps.mypurecloud.de/) über einen [Genesys Bot Connector](https://help.mypurecloud.com/articles/about-genesys-bot-connector/). |

Endpunkte, die als Kanalaggregatoren fungieren, ermöglichen es Ihnen, über einen einzigen Verbindungspunkt eine Verbindung zu mehreren Kanälen herzustellen. Beispiele: [Sunshine Conversations](https://smooch.io/channels/), [DialogFlow](https://cloud.google.com/dialogflow/es/docs/integrations), [Azure Bot Service](https://docs.microsoft.com/en-us/azure/bot-service/bot-service-channels-reference?view=azure-bot-service-4.0) und [RingCentral Engage](https://www.ringcentral.com/digital-customer-engagement.html#ring-cc-off).

### Konfiguration des Endpunkts

#### Schnappschuss

Endpunkte können auf einen bestimmten [Snapshot](snapshots.md) verwiesen werden.
Auf diese Weise können Sie problemlos verschiedene Versionen Ihres virtuellen Agenten bereitstellen.

Während ein Endpunkt aktiv ist, können Sie einen Snapshot ersetzen oder entfernen. Beachten Sie in diesem Fall, dass möglicherweise noch aktive Sitzungen auf dem Endpunkt mit dem alten Snapshot ausgeführt werden.

Denken Sie daran, wenn Sie eine Konfiguration haben, in der Sitzungen nie ablaufen, z. B. einen Webchat-Endpunkt mit [Persistent History](https://github.com/Cognigy/WebchatWidget/blob/master/docs/persistent-history.md). Ohne Änderungen laufen Sitzungen, die mit aktiviertem persistentem Verlauf gestartet wurden, nicht automatisch ab.

Wenn ein alter Snapshot durch einen neuen ersetzt oder gelöscht wird, werden die folgenden Regeln auf die aktive Sitzung angewendet:

- Wenn der alte Snapshot ersetzt und nicht gelöscht wurde, wird die aktive Sitzung mit dem alten Snapshot fortgesetzt. Der Grund dafür ist, dass das System nicht erkennen kann, ob der neue Snapshot die gleichen Flows und Nodes enthält, auf denen der Benutzer möglicherweise in seiner Sitzung aktiv ist.
- Wenn der alte Snapshot gelöscht wurde, wird die Sitzung zurückgesetzt und der neue Snapshot verwendet.

##### Snapshot-Verbindungen überschreiben

Wenn Agenten einen Snapshot verwenden, wird im Endpoint-Editor der Umschalter **Snapshot-Verbindungen außer Kraft setzen** angezeigt. Wenn Sie diese Option aktivieren, kann der Endpunkt die Verbindungen in einem Snapshot mit [Connections]({{config.site_url}}ai/resources/build/connections/) im Projekt überschreiben. Wenn eine Verbindung nur im Snapshot verfügbar ist, wird sie unabhängig von dieser Umschalteinstellung aus dem Snapshot verwendet. Bei Bedarf muss diese Verbindung manuell aktualisiert werden.

!!! info "Standardeinstellung"
    Standardmäßig verwendet jeder Endpunkt weiterhin die Verbindungen aus dem Snapshot, es sei denn, der Schalter ist aktiviert.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/override-snapshots-connection_f.png" width="100%" />
</figure>

Um die Verbindung im angegebenen Agenten außer Kraft zu setzen, stellen Sie sie zunächst entweder aus einem Snapshot wieder her oder importieren Sie Verbindungen von einem anderen Agenten mit einem [Paket](.. /.. /resources/manage/packages.md). Stellen Sie sicher, dass der im Endpunkt-Editor ausgewählte Snapshot vom selben Agenten erstellt wurde, um eine Übereinstimmung der Verbindungen zu gewährleisten.

Wenn in diesem Fall der Schalter **ON** ist, wird jede Änderung an den Verbindungen des wiederhergestellten Agenten über die Verbindungen im ausgewählten Snapshot berücksichtigt.

!!! Anmerkung
    Sie können Verbindungen anhand ihrer "referenceId" überprüfen oder Fehler beheben, die sowohl im Projekt als auch im Snapshot übereinstimmen muss, damit die Überschreibungsfunktion funktioniert. Verwenden Sie dazu [Cognigy.AI API](.. /.. /developer-guides/using-api.md) mit der Anforderung **Alle Verbindungen abrufen**.

#### Strömung

Endpunkte benötigen einen Eintrag [Flow](.. /build/flows.md), um die Konversation zu beginnen. Sie können Flows während einer Konversation wechseln. 
Um zu einem Flow zu wechseln, klicken Sie auf ! [Uhr] (.. /.. /.. /assets/icons/jump-to-flow.svg) neben dem Flow-Auswahlfeld auf der rechten Seite.

Um die Flow-ID des aktuell ausgewählten Flows anzuzeigen, klicken Sie unter dem Dropdown-Feld Flow auf **Manuelle Eingabe**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Endpoint_Webchat_jump_to_Flow_button.png" width="100%" />
</figure>

Wenn Sie auf den Link **Aus Dropdown auswählen** klicken, gelangen Sie zurück zur Dropdown-Auswahlliste der Flows.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Flow_select_from_Dropdown.png" width="100%" />
</figure>

#### Endpunkt-URL

Die Endpunkt-URL ist die Schnittstelle zum Endpunkt. Bei den meisten Kanälen müssen Sie es in die Einstellungen des Kanals kopieren, damit der Kanal für die Cognigy.AI Verbindung konfiguriert ist. 

#### Allgemeine Einstellungen > aktiviert

Mit diesem Schalter können Sie den Endpunkt schnell aktivieren oder deaktivieren.

#### Verstehen natürlicher Sprache

In diesem Dropdown-Feld können Sie eine andere **NLU-Engine** für den ausgewählten Endpunkt auswählen.
Die verfügbaren NLU-Engines finden Sie unter [NLU-Konnektoren](.. /.. /resources/build/nlu-connectors.md).

#### Datenschutz & Analytik

Im Abschnitt **Datenschutz & Analysen** können Sie die Erfassung von Analysen konfigurieren und auswählen, ob Daten erfasst werden sollen oder nicht.

##### Chatbase

Cognigy.AI können direkt mit der Analyseplattform Chatbase von Google verbunden werden. Wenn diese Option aktiviert ist, muss ein API-Schlüssel eingegeben werden. Alle relevanten Daten, die in den Endpoint gelangen, werden an Chatbase weitergeleitet.

##### Dashbot

Wenn diese Option aktiviert ist, sammelt **Dashbot** Analysedaten für den ausgewählten Endpunkt.

## Mehr Informationen

- [Übersicht über Endpunkte](.. /.. /endpoints/overview.md)