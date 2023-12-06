---
Titel: "Voice Copilot"
Schnecke: "Voice-Copilot"
ausgeblendet: false
---

# Sprach-Copilot

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/voice-copilot.png" width="100%" />
</figure>

Dieser Endpunkt ist für Sprachanwendungsfälle vorgesehen, um die Transkription des Audiodatenstroms zu empfangen und den Copilot-Flow auszuführen. Der Endpunkt teilt Audiostreams in Benutzer- und Agenteneingaben auf. Wenn die Transkription an diesen Endpunkt gesendet wird, erhält Cognigy zwei Variablen: "Benutzer-ID" und "Sitzungs-ID", die dabei helfen, den zu aktualisierenden AI Copilot-Arbeitsbereich zu identifizieren.

Dieser Endpunkt Voice Copilot funktioniert mit jedem [Übergabeanbieter](.. /.. /ai/handover-providers/overview.md), unterstützt von Cognigy.

## Voraussetzungen

- Sie müssen über ein Konto in [Genesys Cloud](https://apps.mypurecloud.de/) verfügen.
- Aktivieren Sie diesen Endpunkt auf der Cognigy-Seite:
    - Wenn Sie über eine gemeinsam genutzte oder dedizierte SaaS-Installation verfügen, wenden Sie sich an den technischen Support von Cognigy.
    - Wenn Sie eine On-Premise-Installation haben, geben Sie das folgende Feature-Flag an: 'FEATURE_ENABLE_AGENT_ASSIST_VOICE: true'.

## Generische Endpunkteinstellungen<div class="divider"></div>Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte](overview.md)
- [Transformator-Funktionen](Transformatoren/Transformatoren.md)

## Konfigurieren des Voice Copilot-Endpunkts

1. Klicken Sie im Menü auf der linken Seite Ihres Agents auf **Deploy > Endpoints**.
2. Klicken Sie auf der Seite **Endpunkte** auf **+ Neuer Endpunkt**.
3. Gehen Sie im Abschnitt **Neuer Endpunkt** wie folgt vor: <br>3.1 Wählen Sie den Endpunkttyp **Voice Copilot** aus. <br>3.2 Fügen Sie einen eindeutigen Namen hinzu.<br>3.3 Wählen Sie einen relevanten Flow aus der Liste aus.<br>4. Kopieren Sie im Abschnitt **Konfigurationsinformationen** die Endpunkt-URL und speichern Sie sie für die spätere Verwendung in Genesys.
5. Aktivieren Sie die Einstellung **Endpunkt aktivieren**. 
6. Klicken Sie auf **Speichern**.

## Cognigy.AI vorne

Wenn Cognigy.AI im Vordergrund stehen, müssen Sie den Übertragungsknoten konfigurieren:

1. Klicken Sie im Menü auf der linken Seite Ihres Agents auf **Build > Flows**. 
2. Wählen Sie einen Sprachfluss aus der Liste aus.
3. Wechseln Sie zum Voice Gateway Transfer Node.
4. Wählen Sie im Übertragungsknoten den Übertragungstyp **Wählen** aus.<br>4.1 Aktivieren Sie die Einstellung **Copilot aktivieren**.<br>4.2 Definieren Sie den **Copilot-Header-Schlüssel**. Der Schlüssel ist anbieterabhängig. Für Genesys lautet der Schlüssel beispielsweise "User-to-User". Auf den generierten Wert kann zugegriffen werden, nachdem der **Transfer**-Knoten aktiviert wurde, der sich im Eingabeobjekt als '{{ "{{input. UUIValue}}" }}'. Beachten Sie, dass Sie diesen Wert nicht manuell behandeln müssen. Er wird automatisch generiert und dem Header hinzugefügt.<br>4.3 Navigieren Sie im Abschnitt **Transkribieren** zum Feld **Transkriptions-Webhook**. Geben Sie die URL des Voice Copilot-Endpunkts mit "Benutzer-ID" und "Sitzungs-ID" ein. Durch diese Einrichtung wird sichergestellt, dass der Voice Copilot-Endpunkt nicht nur die Transkription, sondern auch die entsprechende Sitzungs- und Benutzer-ID empfängt, wodurch sichergestellt wird, dass das Transkript korrekt mit dem Arbeitsbereich abgeglichen wird. Beispiel: 'https://endpoint-dev.cognigy.ai/?userId={{"{{input.userId}}"}}<your-endpoint-id>&sessionId={{"{{input.sessionId}}"}}'.
5. Klicken Sie auf **Knoten speichern**.

## SIPREC Contact Center Integration im Vorfeld

Wenn sich das Contact Center im Vordergrund befindet, müssen Sie den Transfer Node nicht konfigurieren.

SIPREC ist ein offenes SIP-basiertes Protokoll für die Anrufaufzeichnung in Contact Centern. Session Border Controller (SBC) werden verwendet, um SIPREC in das Contact Center zu integrieren. 

Wenn ein Anruf an einen menschlichen Agenten weitergeleitet wird, wird das Audio des SIPREC-Anrufs von Voice Gateway transkribiert und zur Verarbeitung an den Voice Copilot-Endpunkt gesendet. Das System ersetzt die traditionelle Cognigy-Sitzungs-ID und Benutzer-ID durch eine bestimmte ID aus dem Contact Center. Beispielsweise können die ursprüngliche Cognigy-Sitzungs-ID und Benutzer-ID durch die Agenten-ID bzw. die Konversations-ID ersetzt werden.

## Mehr Informationen

- [KI-Copilot](.. /.. /ai-copilot/overview.md)
- [Sprach-Gateway](.. /.. /voicegateway/overview.md)</your-endpoint-id>