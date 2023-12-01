---
Titel: "AI Copilot for Voice: Transfer Node"
Slug: "Voice-Agent-Assist-Transfer-Knoten"
ausgeblendet: false
---

# KI-Copilot für Sprache: Übertragungsknoten

{! _includes/agent-assist/genesys-note.md !}

Wenn Sie das Cognigy Voice Gateway verwenden, fügen Sie ein [Transfer](.. /.. /ai/flow-nodes/vg/transfer.md) Knoten, um den Anruf an einen menschlichen Agenten zu übergeben. 

Um den Anruf weiterzuleiten, wählen Sie die Option **Wählen** aus, um in der Sitzung zu bleiben und die Audiostreams zu transkribieren.

## Copilot aktivieren

Mit dem Schalter zum Aktivieren von Copilot wird eine UUIValue erstellt. Diese UUIValue erstellt die AI Copilot URL, die bei der Übertragung über SIP Header an das Contact Center gesendet wird.

Die UUIValue hat die folgende Struktur: '${AICopilotBaseUrl}/?userId=${userId}&sessionId=${sessionId}&URLToken=${URLToken}'

## Transkription

In diesem Übertragungsknoten müssen Sie die Transkription von Audiostreams aktivieren. Sie können zwischen drei Optionen wählen:

- **Anrufer** – der Audiostream des Kunden.
- **Called** — der Audiostream des menschlichen Agenten.
- **Anrufer/Angerufen** – der Audiostream des Kunden und des menschlichen Agenten.

## Transkriptions-Webhook

Der **Transkriptions-Webhook** sollte auf die Endpunkt-URL des [Voice Copilot](.. /.. /ai/endpoints/voice-copilot.md) Endpunkt
, die der AI Copilot Workspace Flow zum Senden von Transkriptionen verwendet.

## Benutzerdefinierte SIP-Header

Aktivieren Sie den Schalter **Copilot aktivieren**, um einen Header-Schlüssel zu generieren. Dieser Headerschlüssel wird verwendet, um die UUIValue zu übermitteln. Beachten Sie, dass der Header-Schlüssel mit den Anforderungen Ihres Contact Centers übereinstimmen sollte. Der Header-Schlüssel für Genesys Cloud CX lautet beispielsweise "User-to-User".

## Weitere Informationen für Voice-Anwendungsfälle

- [Sprach-Copilot](.. /.. /ai/endpoints/voice-copilot.md)
- [KI-Copilot für Sprache](voice-overview.md)

## Weitere allgemeine Informationen

- [AI Copilot Workspace](.. /overview.md)
- [Erste Schritte mit AI Copilot](.. /getting-started.md)
- [Konfiguration des KI-Copiloten](.. /configuration.md)
- [KI-Copilot-Knoten](.. /.. /ai/flow-nodes/ai-copilot/overview.md)
- [KI-Copilot-Einbettung](.. /embedding.md)
- [KI-Copilot für Chat](.. /chat.md)
- [Integration mit Contact Centern](.. /contact-center-integration.md)