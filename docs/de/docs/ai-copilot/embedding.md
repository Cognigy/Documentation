---
title: "Einbetten"
Slug: "Einbetten"
ausgeblendet: false
---

# Einbettung von KI-Copiloten

AI Copilot wird von allen Übergabeanbietern unterstützt.

{! _includes/agent-assist/genesys-note.md !}

Um den Arbeitsbereich in Genesys einzubetten, erstellen Sie ein Skript in Genesys und fügen Sie ihm einen iFrame hinzu.

Um den AI Copilot-Arbeitsbereich anzuzeigen, fügen Sie einen Wert in das entsprechende Feld ein:

- [Für Chat-Anwendungsfälle](chat.md) – Fügen Sie den Wert **AI Copilot Embedding URL** hinzu, den Sie im Endpunkt unter im Abschnitt **Copilot** finden.
- [For Voice Use Cases](voice/voice-overview.md) — fügen Sie den **UUIValue**-Wert hinzu, der während der Übertragung an den menschlichen Agenten generiert und über SIP-Header weitergeleitet wird.

## Mehr Informationen

- [KI-Copilot](overview.md)
- [Erste Schritte mit AI Copilot](getting-started.md)
- [Konfiguration des KI-Copiloten](configuration.md)
- [KI-Copilot-Knoten](.. /ai/flow-nodes/ai-copilot/overview.md)
- [Integration mit Contact Centern](contact-center-integration.md)