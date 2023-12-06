---
Titel: "AI Copilot for Voice"
Slug: "Voice-Agent-Assist"
ausgeblendet: false
---

# KI-Copilot für Sprache

Diese Funktion bietet einen KI-Copilot-Arbeitsbereich für die Integration in Contact-Center-Sprachbereitstellungen.

Um AI Copilot for Voice einzurichten, benötigen Sie einen Main Flow, der den Anruf an einen menschlichen Agenten weiterleiten kann, sowie einen AI Copilot Workspace Flow. Der Workspace Flow wird über den Voice Copilot-Endpunkt ausgeführt, der die Transkription des Audiostreams empfängt.

Bevor Sie den Anruf an einen menschlichen Agenten weiterleiten, fügen Sie einen Übertragungsknoten hinzu, um den Anruf über SIP-Header an das Contact Center weiterzuleiten.

Die VoIP-Konfiguration besteht aus den folgenden Teilen:

- [Übertragungsknoten](transfer-node.md)
- [Voice Copilot-Endpunkt](.. /.. /ai/endpoints/voice-copilot.md)

{! _includes/agent-assist/genesys-note.md !}

## Mehr Informationen

- [AI Copilot Workspace](.. /overview.md)
- [Erste Schritte mit AI Copilot](.. /getting-started.md)
- [Konfiguration des KI-Copiloten](.. /configuration.md)
- [KI-Copilot-Knoten](.. /.. /ai/flow-nodes/ai-copilot/overview.md)
- [KI-Copilot-Einbettung](.. /embedding.md)
- [KI-Copilot für Chat](.. /chat.md)
- [Integration mit Contact Centern](.. /contact-center-integration.md)