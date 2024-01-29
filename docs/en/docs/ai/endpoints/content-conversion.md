---
title: "Content Conversion" 
slug: "content-conversion"
hidden: false 
---

# Content Conversion

Cognigy provides a wide range of Endpoints for its conversational AI platform.
Not all of these Endpoints can correctly convert your content to the desired output type.

The table below shows the [output types](../flow-nodes/message/say.md#output-types)
that Cognigy can provide for various Endpoints and other components,
such as the Interaction Panel, xApp: Show Adaptive Card Node, and Live Agent. 

If the Endpoint does not support the selected output type, the system returns a fallback text as a default output.
The following table shows whether Cognigy.AI will convert the respective output type (+), use the fallback text (-),
or indicate that it is not applicable (N/A) to a particular component.

| Component, Endpoint / Output Type | Text | Text with Quick Replies | Gallery | Text with Buttons | List | Audio | Image | Video | Adaptive Card (including supported versions) |
|-----------------------------------|------|-------------------------|---------|-------------------|------|-------|-------|-------|----------------------------------------------|
| **Components**                    |      |                         |         |                   |      |       |       |       |                                              |
| Demo Webchat                      | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.5                                          |
| Interaction Panel                 | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.2                                          |
| Live Agent                        | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.5                                          |
| Live Agent (LA) AI Copilot        | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.5                                          |
| Webchat Adaptive Card plugin      | N/A  | N/A                     | N/A     | N/A               | N/A  | N/A   | N/A   | N/A   | 1.2                                          |
| xApp: Show Adaptive Card Node     | N/A  | N/A                     | N/A     | N/A               | N/A  | N/A   | N/A   | N/A   | 1.6                                          |
| **Endpoints**                     |      |                         |         |                   |      |       |       |       |                                              |
| Webchat                           | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.5                                          |
| VoiceGateway                      | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| WhatsApp                          | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| 8x8                               | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.3[^*]                                      |
| Alexa                             | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Avaya CPaaS                       | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Facebook (Meta) Messenger         | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Azure Bot Services                | +    | +                       | +       | +                 | +    | +     | +     | +     | 1.5[^*]                                      |
| Line                              | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Microsoft Teams                   | +    | -                       | +       | +                 | +    | +     | +     | +     | 1.3[^*]                                      |
| RingCentral Engage                | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Slack                             | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Sunshine Conversations            | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| Twilio                            | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Twilio SMS                        | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Userlike                          | +    | +                       | +       | +                 | +    | +     | +     | +     | -                                            |
| AudioCodes                        | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Genesys                           | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |
| Bandwidth                         | +    | -                       | -       | -                 | -    | -     | -     | -     | -                                            |

[^*]: For third-party Endpoints supporting Adaptive Cards, the current version may differ from what is indicated in the table. We recommend verifying the latest Adaptive Card version with your provider or contacting their support service for information on supported versions.