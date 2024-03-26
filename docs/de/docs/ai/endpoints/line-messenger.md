---
 Titel: "LINE Messenger" 
 Schnecke: "Line-Messenger" 
 ausgeblendet: false 
---
# LINE Messenger

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/16e06a7-Line.PNG" width="100%" />
</figure>

Innerhalb unserer **Cognigy.AI**-Plattform können Sie Ihre Cognigy-Ressourcen mit Ihrem **LINE**-Kanal verbinden, indem Sie unsere Line Endpoint-Integration verwenden. 

## Generische Endpunkteinstellungen<div class="divider"></div>Informieren Sie sich auf den folgenden Seiten über die allgemeinen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte]({{config.site_url}}ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU-Konnektoren]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Sitzungsverwaltung]({{config.site_url}}ai/endpoints/session-management/)
- [Übergabe-Einstellungen]({{config.site_url}}ai/endpoints/handover-settings/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings) 

!!! Tipp "Unterstützt Inject & Notify"
    Sie können die **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)**-Funktionalität mit diesem Endpunkttyp verwenden.

## Kanalspezifische Einstellungen<div class="divider"></div>Im Dropdown-Menü **Line Setup** müssen Cognigy.AI die Anmeldeinformationen erhalten, um eine Verbindung mit einem **Line Channel** herzustellen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/d0d13cd-lineSetup.PNG" width="100%" />
</figure>

### Kanal-Zugriffstoken

Bei diesem Wert handelt es sich um das Kanalzugriffstoken, das vom Line Developer-Konto für jeden bereitgestellten Kanal abgerufen wird. Dieses Token sollte dem unten angegebenen Geheimnis zugeordnet werden.

### Geheimer Kanal

Bei diesem Wert handelt es sich um den geheimen Leitungsschlüssel, der einem Kanalzugriffstoken zugeordnet ist. Dieser Wert wird vom Line Developer-Konto für jeden bereitgestellten Kanal abgerufen.

!!! Hinweis "Hilfe-Center"
    Ausführlichere Informationen zum Einrichten eines **Line Messenger**-Endpunkts finden Sie in unseren Hilfe-Center-Artikeln [**hier**](https://support.cognigy.com/hc/en-us/articles/360016222819).

!!! Warnung "Konfiguration von Leitungsmeldungen"
    Line Messenger Messaging API-Anforderungen haben viele Anforderungen, die dazu führen können, dass einige Ihrer konfigurierten Nachrichten nicht gesendet werden. Überprüfen Sie Ihre Knotenkonfigurationen im Hinblick auf die Anforderungen der Line Messaging API [**hier**](https://support.cognigy.com/hc/en-us/articles/5721825020444), um sicherzustellen, dass alle konfigurierten Nachrichten zugestellt werden.

## Mehr Informationen 

- [Line Messenger: Bereitstellung](https://support.cognigy.com/hc/en-us/articles/360016222819)
- [Line Messenger: Nachrichtentypen und Nutzlastbeispiele](https://support.cognigy.com/hc/en-us/articles/5721825020444)