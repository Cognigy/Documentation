---
 Titel: "Sunshine Conversations" 
 Schnecke: "Sonnenschein-Gespräche" 
 ausgeblendet: false 
---
# Sonnenschein-Gespräche

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/2ae70b9-SunshineConversations.PNG" width="100%" />
</figure>

Innerhalb unserer **Cognigy.AI** Plattform können Sie Ihren Cognigy Agent mit Ihrer **Sunshine Conversations-Anwendung** verbinden, indem Sie unseren Sunshine Conversations-Endpunkt verwenden.

!!! Hinweis "Wo ist der Smooch-Endpunkt?"
    Dieser Endpunkt wurde zuvor als Smooch-Endpunkt bezeichnet. Smooch wurde 2019 von Zendesk übernommen und in Sunshine Conversations umbenannt.

## Generische Endpunkteinstellungen<div class="divider"></div>Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte]({{config.site_url}}ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU-Konnektoren]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Sitzungsverwaltung]({{config.site_url}}ai/endpoints/session-management/)
- [Übergabe-Einstellungen]({{config.site_url}}ai/endpoints/handover-settings/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings)

!!! Tipp "Unterstützt Inject & Notify"
    Sie können die **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)**-Funktionalität mit diesem Endpunkttyp verwenden.

# Kanalspezifische Einstellungen<div class="divider"></div>Die Werte der folgenden Felder werden für die Kommunikation mit Ihrer Sunshine Conversations-App verwendet. Alle Werte können von der Sunshine Conversations-Plattform abgerufen werden.

### API-Version

Cognigy.AI unterstützt die APIs V1.1 und V2, die von Sunshine Conversations angeboten werden. Die Auswahl in diesem Feld muss mit der API-Version übereinstimmen, die zum Erstellen der Webhook-Integration in der Sunshine Conversations-App verwendet wurde.

### Schlüssel-ID

Die API-Schlüssel-ID aus Ihrer Sunshine Conversations-App. Dieser Wert hat in der Regel das Format "app_XXXXXXXXXXXXXXXXXXXXXXXX" und muss die API-Schlüssel-ID sein, die dem im folgenden Feld eingegebenen Geheimnis zugeordnet ist.

### Geheimnis

Die Schlüssel-ID SECRET Ihrer Sunshine Conversations-App, bei der es sich um ein zufällig generiertes API-Schlüsselgeheimnis von Sunshine Conversations handelt. Der Wert dieses Feldes muss das SECRET sein, das mit der API-Schlüssel-ID verknüpft ist, die im vorherigen Feld eingegeben wurde.

### URI

Der URI, über den wir Nachrichten an Ihre Sunshine Conversations-App senden. Beispiel: "https://app.smooch.io" (stellen Sie sicher, dass das "/" am Ende des URI weggelassen wird)

!!! Hinweis "Hilfe-Center"
    Ausführlichere Informationen zum Einrichten eines **Sunshine Conversations**-Endpunkts finden Sie in unseren Hilfe-Center-Artikeln [**hier**](https://support.cognigy.com/hc/en-us/articles/360016307699).

## Mehr Informationen

- [HelpCenter: Bereitstellung von Sunshine Conversations](https://support.cognigy.com/hc/en-us/articles/360016307699-Sunshine-Conversations-Deploy-an-Endpoint)
- [HelpCenter: Sunshine Conversations Zendesk-Übergaben](https://support.cognigy.com/hc/en-us/articles/360016224599-Sunshine-Conversations-Zendesk-Handovers)