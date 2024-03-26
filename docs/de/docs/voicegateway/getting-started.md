---
 Titel: "Erste Schritte" 
 Slug: "VG-Getting Started" 
 ausgeblendet: false 
---

# Erste Schritte mit Voice Gateway

<figure>
<img class="image-center" src="{{config.site_url}}voicegateway/images/VG-logo.png" width="80%" />
   <figcaption>Voice-Gateway-Logo</figcaption>
</figure>

## Wie richte ich ein Voice Gateway ein?

Führen Sie die folgenden Schritte aus, um Voice Gateway einzurichten:

1. [Erstellen eines Voice-Gateway-Flows](#create-a-voice-gateway-flow)
2. [Erstellen eines Voice-Gateway-Endpunkts](#create-a-voice-gateway-endpoint)
3. [Leiten Sie Ihr Contact Center oder Ihre Telefonnummer an das Voice Gateway weiter](#route Sie Ihr Contact Center oder Ihre Telefonnummer an das Voice-Gateway weiter)
4. [Voice-Gateway für Ihre Organisation einrichten](#set-up-voice-gateway-for-your-organization)

## Erstellen eines Voice Gateway-Flows

Starten Sie Ihr **Voice Gateway**-Projekt, indem Sie einen sprachgesteuerten Flow erstellen. Bei einer Sprachkonversation muss der virtuelle Agent für jede Benutzereingabe mit einer textbasierten Nachricht antworten. Sprachgespräche finden auf Turn-by-Turn-Basis statt, was bedeutet, dass alle Dialogausgaben, die durch den Flow ausgelöst werden, in einer Nachricht gebündelt und über die Telefonleitung zugestellt werden.

Jeder Cognigy.AI Knoten, der textbasierte Nachrichten anbietet, kann in einem Sprachfluss verwendet werden. Wenn Sie Rich Media in Ihrem Flow haben, wird das Fallback-Textfeld als Sprachausgabe verwendet.

Wenn eine kanalspezifische Konfiguration für das Voice Gateway vorhanden ist, wird diese Konfiguration anstelle der Konfiguration im Standardabschnitt verwendet. Im Voice Gateway-Kanal finden Sie vordefinierte SSML-Tags und [Aktivitätsparameter]({{config.site_url}}ai/flow-nodes/vg/parameter-details/).

Für sprachspezifische Aktionen können Sie die [Voice Gateway Flow Nodes]({{config.site_url}}ai/flow-nodes/vg/voice-gateway/) verwenden.

!!! Anmerkung
    Mit der nativen Integration von Cognigy Voice Gateway in Cognigy.AI wird die AudioCodes-Implementierung von Voice Gateway in AudioCodes umbenannt.

<figure>
   <img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-nodes-overview.png"  width="80%" />
</figure>

## Erstellen eines Voice Gateway-Endpunkts

Um sprachbasierte Erfahrungen mit Ihrem virtuellen Agenten zu erstellen, erstellen Sie Ihren [Voice Gateway Endpoint]({{config.site_url}}ai/endpoints/cognigy-vg/) in Cognigy.AI. Gehen Sie dazu wie folgt vor:

1. Klicken Sie im Menü auf der linken Seite Ihres Agents auf **Deploy > Endpoints**. 
2. Klicken Sie auf der Seite **Endpunkte** auf **+ Neuer Endpunkt**. 
3. Gehen Sie im Abschnitt **Neuer Endpunkt** wie folgt vor:
   3.1 Wählen Sie den Endpunkttyp **VoiceGateway** aus.
   3.2 Fügen Sie einen eindeutigen Namen hinzu.
   3.3 Wählen Sie einen relevanten Flow aus der Liste aus.
4. Klicken Sie auf **Speichern**.

<figure>
   <img class="image-center" src="{{config.site_url}}voicegateway/images/VG-endpoint-new.png" width="100%" />
</figure>

## Leiten Sie Ihr Contact Center oder Ihre Telefonnummer an Voice Gateway weiter

Um Ihr Contact Center oder Ihre Telefonnummer an Ihren Voice Gateway-Endpunkt weiterzuleiten, muss Ihr SIP-Trunk eingerichtet werden. Wenden Sie sich an [Technischer Support von Cognigy](.. /help/get-help.md), um Ihren SIP-Trunk zu konfigurieren und Ihre Nummer an den richtigen Endpunkt weiterzuleiten.

## Voice Gateway für Ihr Unternehmen einrichten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.62-blue.svg)] (.. /release-notes/4.62.md)

Mit dieser Einstellung können sich Benutzer mit der Rolle [Konto](./webapp/users.md#account) mit ihren Cognigy.AI Benutzeranmeldeinformationen beim Voice Gateway Self-Service-Portal anmelden. Um diese Option zu aktivieren, müssen Sie die folgenden Schritte ausführen:

Gehen Sie folgendermaßen vor, um das VoIP-Gateway für Ihre Organisation einzurichten:

1. Öffnen Sie die Cognigy.AI-Schnittstelle.
2. Klicken Sie in der oberen rechten Ecke auf das **Benutzermenü**.
3. Wählen Sie die **Organisationsdetails** aus dem Menü aus.
4. Klicken Sie auf **Voice Gateway einrichten**.
5. Gehen Sie zu **Benutzermenü > Zugriffssteuerung** und weisen Sie den Benutzern, die Zugriff auf das Voice Gateway Portal benötigen, mit der Rolle "Konto" die Rolle "voiceGatewayUser" zu. Beachten Sie, dass sich Administratoren und Dienstanbieter nicht mit Cognigy.AI Benutzeranmeldeinformationen anmelden können.

## Wie geht es weiter?

- [Konto erstellen](webapp/accounts.md)
- [Anwendung erstellen](webapp/applications.md)
- [Neuen Mobilfunkanbieter hinzufügen](webapp/carriers.md)
- [Telefonnummer hinzufügen](webapp/phone-numbers.md)
- [Anmeldeinformationen für Sprachanbieter hinzufügen](webapp/speech-services.md)