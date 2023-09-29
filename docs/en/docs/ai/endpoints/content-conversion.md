---
title: "Content Conversion" 
slug: "content-conversion"
hidden: false 
---

# Content Conversion

Cognigy provides a wide range of endpoints for its conversational AI platform. Not all of these endpoints can correctly convert your content to the desired output type.

The table below shows the [output types](../flow-nodes/message/say.md#output-types) that Cognigy can provide for different endpoints.

If the endpoint does not support the selected output type, the system returns a fallback text as a default output. The following table shows whether Cognigy.AI will convert the respective output type (+) or use the fallback text (-).

| Endpoint / Output Type | Text | Text with Quick Replies | Gallery | Text with Buttons | List | Audio | Image | Video | Adaptive Card (including supported versions) |
|------------------------|------|-------------------------|---------|-------------------|------|-------|-------|-------|----------------------------------------------|
| Interaction Panel      | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.2                                          |
| Webchat                | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.5                                          |
| Webchat plugin         | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.3                                          |
| VoiceGateway           | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| WhatsApp               | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| 8x8                    | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.3                                          |
| Alexa                  | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Avaya CPaaS            | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Facebook Messenger     | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Azure Bot Services     | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.0                                          |
| Google Actions         | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Line                   | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Microsoft Teams        | +    | -                       | +       | +                 | +    | +     | +     | +     | 1.0                                          |
| RingCentral Engage     | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Slack                  | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Sunshine Conversations | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Twilio                 | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Twilio Autopilot       | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Twilio SMS             | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Userlike               | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| AudioCodes             | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Genesys                | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Bandwidth              | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
