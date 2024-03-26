---
title: "Content Conversion" 
Slug: "Inhalts-Konvertierung"
ausgeblendet: false 
---

# Konvertierung von Inhalten

Cognigy bietet eine breite Palette von Endpunkten für seine Conversational AI-Plattform. Nicht alle diese Endpunkte können Ihre Inhalte ordnungsgemäß in den gewünschten Ausgabetyp konvertieren.

Die folgende Tabelle zeigt die [Ausgabetypen](.. /flow-nodes/message/say.md#output-types), die Cognigy für verschiedene Endpunkte bereitstellen kann.

Wenn der Endpunkt den ausgewählten Ausgabetyp nicht unterstützt, gibt das System einen Fallback-Text als Standardausgabe zurück. Die folgende Tabelle zeigt, ob Cognigy.AI den jeweiligen Ausgabetyp (+) konvertieren oder den Fallbacktext (-) verwenden.

| Endpunkt / Ausgabetyp | Text | Text mit Schnellantworten | Bildergalerie | Text mit Schaltflächen | Liste | Audio | Bild | Zum Video | Adaptive Karte (einschließlich unterstützter Versionen) |
|------------------------|------|-------------------------|---------|-------------------|------|-------|-------|-------|----------------------------------------------|
| Interaktions-Panel | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.2 |
| Webchat | +    | +                       | +       | +                 | +    | +     | +     | +     | 1,5 |
| Webchat-Plugin | +    | +                       | +       | +                 | +    | +     | +     | +     | 1,3 |
| VoiceGateway | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| WhatsApp | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| 8x8 | +    | +                       | +       | +                 | +    | +     | +     | +     | 1,3 |
| Alexa | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Avaya CPaaS | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Facebook Messenger | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Azure Bot Services | +    | +                       | +       | +                 | +    | +     | +     | +     | 1,0 |
| Linie | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Microsoft Teams | +    | -                       | +       | +                 | +    | +     | +     | +     | 1,0 |
| RingCentral Engage | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Slack | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Sonnenschein-Gespräche | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Twilio | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Twilio SMS | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Userlike | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| AudioCodes | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Genesys | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Bandbreite | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |