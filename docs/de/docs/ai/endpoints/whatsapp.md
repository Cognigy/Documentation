---
 Titel: "WhatsApp" 
 Schnecke: "WhatsApp" 
 ausgeblendet: false 
---
# WhatsApp

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/whatsApp-endpoint.png" width="100%" />
</figure>

Innerhalb unserer Cognigy.AI-Plattform kannst du Cognigy-Ressourcen über das Facebook Developer Dashboard mit dem **WhatsApp** Cloud API-Zugriff verbinden, indem du unsere WhatsApp Endpoint-Integration verwendest. 

## Generische Endpunkteinstellungen

Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte]({{config.site_url}}ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [Sitzungsverwaltung]({{config.site_url}}ai/endpoints/session-management/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings)  
- [Übergabe-Einstellungen]({{config.site_url}}ai/endpoints/handover-settings/)

!!! Tipp "Unterstützt Inject & Notify"
    Sie können die **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)**-Funktionalität mit diesem Endpunkttyp verwenden.

## Kanalspezifische Einstellungen<div class="divider"></div>## WhatsApp einrichten

Im Dropdown-Menü WhatsApp Setup erhalten Cognigy.AI die Anmeldeinformationen für den Zugriff auf die WhatsApp App, die auf dem Meta/Facebook Developer Dashboard erstellt wurde.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/whatsapp-settings.png" width="100%" />
</figure>

### App-ID

Dieser Wert ist eine eindeutige App-ID, die vom Meta/Facebook Developer Dashboard verwendet wird, um die WhatsApp App zu identifizieren, die mit der Cloud API kommuniziert. Dies ist ein Pflichtfeld.

### Zugriffs-Token

Zugriffstoken, das von der WhatsApp App auf dem Meta/Facebook Developer Dashboard bereitgestellt wird und die Kommunikation zwischen Cognigy.AI und der WhatsApp Cloud API ermöglicht. Dies ist ein Pflichtfeld.

### Telefonnummern-ID

Die Telefonnummern-ID ist eine ID für eine Telefonnummer, die in der WhatsApp App registriert ist oder vom Facebook Developer Dashboard während der Einrichtung für Tests bereitgestellt wird. Diese wird als ID in den Anfragen an die WhatsApp Cloud API verwendet. Dies ist ein Pflichtfeld.

### Token verifizieren

Das Verifizierungstoken wird verwendet, wenn die Endpunkt-URL im Meta-/Facebook-Entwickler-Dashboard überprüft wird. Sie müssen übereinstimmen, um die erste Verbindung herzustellen.

### App-Geheimnis

Der geheime App-Schlüssel ist ein optionales Feld. Dieses Feld wird verwendet, um eine zusätzliche Sicherheitsebene hinzuzufügen, auf der jede Anforderung nicht nur mit dem Zugriffstoken, sondern auch mit dem App-Geheimnis abgeglichen wird.

## WhatsApp-Einstellungen

### Nachrichten-Verzögerung

Die Zeitspanne, die zwischen dem Senden von Bot-Antworten gewartet werden soll. Gemessen in Millisekunden.

!!! Hinweis "Hilfe-Center"
    Weitere Informationen zum Konfigurieren des **Zugriffstokens**, der **Telefonnummer**, der **App-ID** und des **App-Geheimnisses** finden Sie in unserem Hilfe-Center-Artikel [**hier**](https://support.cognigy.com/hc/en-us/articles/5326220817948).

## Mehr Informationen

* [HelpCenter: WhatsApp-Endpunkt: Nativer Endpunkt bereitstellen](https://support.cognigy.com/hc/en-us/articles/5326220817948)
* [HelpCenter: WhatsApp-Endpunkt: Permanentes Zugriffstoken erhalten](https://support.cognigy.com/hc/en-us/articles/5326310754332)
* [HelpCenter: WhatsApp-Endpunkt: Nachrichtentypen und Payload-Beispiele](https://support.cognigy.com/hc/en-us/articles/5326454286108)