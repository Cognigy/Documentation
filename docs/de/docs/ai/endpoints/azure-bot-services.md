---
 title: "Azure Bot Services" 
 Slug: "azure-bot-services" 
 ausgeblendet: false 
---
# Azure Bot Services

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.55-blue.svg)] (.. /.. /release-notes/4.55.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/501691c-AzureBotServices.PNG" width="100%" />
</figure>

Innerhalb unserer **Cognigy.AI**-Plattform können Sie Ihren Cognigy-Agent mit **Azure Bot Services** verbinden, indem Sie unsere Azure Bot Services-Endpunktintegration verwenden.

## Generische Endpunkteinstellungen<div class="divider"></div>Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte](overview.md) 
- [Datenschutz & Analyse](data-protection-and-analytics.md)
- [Transformator-Funktionen](Transformatoren/Transformatoren.md) 
- [NLU-Anschlüsse](.. /resources/build/nlu-connectors.md)
- [Sitzungsverwaltung](session-management.md)
- [Übergabe-Einstellungen](handover-settings.md)
- [Einstellungen für Echtzeitübersetzung](real-time-translation-settings.md) 

!!! Tipp "Unterstützt Inject & Notify"
    Sie können die Funktion [Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/) mit diesem Endpunkttyp verwenden.

## Kanalspezifische Einstellungen<div class="divider"></div>Im Dropdownmenü **Azure Bot Services-Einstellungen** müssen Cognigy.AI die Anmeldeinformationen angeben, um eine Verbindung mit einer Azure Bot Services-Bereitstellung herzustellen.

### Zugriffsbereich

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.55-blue.svg)] (.. /.. /release-notes/4.55.md)

Diese Einstellung bestimmt, wer auf diese Anwendung zugreifen kann, und wählt **Multi Tenant** und **Single Tenant** aus.

#### Auf Azure AD-Konten beschränken

Wenn Sie **Multi Tenant** auswählen, haben Sie einen zusätzlichen Umschalter. Die Einstellung **Auf Azure AD-Konten beschränken** verhindert den öffentlichen Zugriff auf Ihren Endpunkt und lässt nur den Zugriff auf Teams-Konten zu, die von einer Organisation in Azure Active Directory verwaltet werden.

### Microsoft-App-ID

Bei diesem Wert handelt es sich um die Microsoft-App-ID, die auf der Einstellungsseite Ihres Bots im Azure Bot Services-Dashboard abgerufen wird.

### Microsoft-App-Passwort

Bei diesem Wert handelt es sich um das **Microsoft-App-Kennwort** Ihres Bots, das auch als **geheimer Clientschlüssel** bezeichnet wird. Dies erhalten Sie, indem Sie auf der Seite App-Registrierungen für Ihren Bot im Azure Bot Services-Dashboard einen neuen geheimen Clientschlüssel erstellen.

### Name der SSO-Verbindung

Dieser Wert ist der **SSO-Verbindungsname**, wenn dieser Endpunkt mit einer SSO-Integration verwendet wird.

!!! Hinweis "Hilfe-Center"
    Ausführlichere Informationen zum Einrichten eines Azure Bot Services-Endpunkts finden Sie in unseren Hilfecenterartikeln [**hier**](https://support.cognigy.com/hc/en-us/articles/360016183720).

### Microsoft Teams

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.9.0-blue.svg)] ({{config.site_url}})

Ab Version 4.9 ändert sich die Anzeige für angeklickte Postback-Schaltflächen in einem Microsoft Teams-Chat. 

Wenn Sie in einer Konfiguration für [Schnellantwort]({{config.site_url}}ai/flow-nodes/message/say/#text-with-quick-replies), [gallery]({{config.site_url}}ai/flow-nodes/message/say/#gallery), [list]({{config.site_url}}ai/flow-nodes/message/say/#list) oder [button]({{config.site_url}}ai/flow-nodes/message/say/#text-with-buttons) klicken, wird der Titel der Schaltfläche jetzt auf der Benutzerseite des Chats angezeigt. Für andere Azure Bot Service-Kanäle ist diese Änderung nicht relevant.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/Azure_Bot_Service_with_Microsoft_Teams_chat_1.svg" width="100%" />
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/c891b0a-Eatery_make_order_2.svg" width="100%" />
</figure>

## Kanalpriorität bei Verwendung von Azure Bot Services

Sie können den Azure Bot Services-Endpunkt verwenden, um mehrere Kanäle zu bedienen, z. B. Line, Messenger, Microsoft Teams und andere. 

Um zu definieren, wohin die Ausgabe geliefert wird, wählen Sie diese Kanäle in den Knoten "Sagen", "Frage" oder "Optionale Frage" aus. 

Die Reihenfolge, in der diese Kanäle im Node verwendet werden, wird jedoch durch ihre feste Priorität bestimmt.

Prioritätsregeln sind für die folgenden unterstützten Azure Bot Services-Kanäle vorhanden:

-Linie
-Kurier
- Microsoft Teams
-Schlaff
-SMS
- Azure Bot Services
-KÜNSTLICHE INTELLIGENZ

### Beispiele

Betrachten Sie die folgenden Beispiele, wenn Sie den Azure Bot Services-Endpunkt aus der Perspektive der Kanalpriorität verwenden.

**Beispiel 1**

Der Say-Knoten ist mit KI, Azure Bot Services und Microsoft Teams-Kanälen konfiguriert.

Ergebnis: Der Benutzer erhält die Textausgabe aus dem Microsoft Teams-Kanal.

**Beispiel 2**

Der Frageknoten ist mit KI- und Azure Bot Services-Kanälen konfiguriert.

Ergebnis: Der Benutzer erhält die Textausgabe aus dem Azure Bot Services-Kanal.

**Beispiel 3**

Der optionale Frageknoten ist nur mit dem AI-Kanal konfiguriert.

Ergebnis: Der Benutzer erhält die Textausgabe aus dem KI-Kanal.

## Mehr Informationen

- [Hilfe-Center: Microsoft Bot Framework-Bereitstellung](https://support.cognigy.com/hc/en-us/articles/360016183720-Microsoft-Bot-Framework-Deploy-an-Endpoint)
- [Hilfecenter: Adaptive Karten für Microsoft Bot Framework](https://support.cognigy.com/hc/en-us/articles/360016184000-Microsoft-Bot-Framework-Using-Adaptive-Cards)