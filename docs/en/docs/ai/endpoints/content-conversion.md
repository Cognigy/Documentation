---
 title: "Content Conversion" 
 slug: "content-conversion" 
 hidden: false 
---

# Content Conversion

Cognigy provides a wide range of endpoints for its conversational AI platform. Not all of these endpoints can correctly convert your content to the desired output type.

The table below shows the [output types](../flow-nodes/message/say.md#output-types) that Cognigy can provide for different endpoints.

If the endpoint does not support the selected output type, the system returns a fallback text as a default output.


| Endpoint / Output Type | Text | Text with Quick Replies | Gallery | Text with Buttons | List | Audio | Image | Video  | Adaptive Card | Endpoint / Output Type | 
| ---------------------  | ---- | ----------------------- | ------- | ----------------- | ---- | ----- | ----- | ------ | ------------- | ---------------------  |
| Webchat                |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | Webchat                |
| VoiceGateway           |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | VoiceGateway           | 
| WhatsApp               |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | WhatsApp               |
| 8x8                    |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | 8x8                    |  
| Alexa                  |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | Alexa                  |  
| Avaya CPaaS            |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | Avaya CPaaS            |  
| Facebook Messenger     |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | Facebook Messenger     |  
| Azure Bot Services     |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | Azure Bot Services     |
| Google Actions         |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | Google Actions         | 
| Line                   |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | Line                   | 
| Microsoft Teams        |  +   |          -              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | Microsoft Teams        | 
| RingCentral Engage     |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | RingCentral Engage     | 
| Slack                  |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | Slack                  |  
| Sunshine Conversations |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | Sunshine Conversations | 
| Twilio                 |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | Twilio                 | 
| Twilio Autopilot       |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | Twilio Autopilot       | 
| Twilio SMS             |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | Twilio SMS             |
| Userlike               |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      -        | Userlike               | 
| AudioCodes             |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | AudioCodes             | 

