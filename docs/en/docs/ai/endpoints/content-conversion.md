---
 title: "Content conversion" 
 slug: "content-conversion" 
 hidden: false 
---

# Content Conversion

Cognigy provides a wide range of endpoints for its conversational AI platform. Not all of these endpoints can correctly convert your content to the desired output type.

The table below shows the [output types](../flow-nodes/message/say.md#output-types) that Cognigy can provide for different endpoints.

If the endpoint does not support the selected output type, the system returns a fallback text as a default output.


| Endpoint/Output Type  | Text | Text with Quick Replies | Gallery | Text with Buttons | List | Audio | Image | Video  | Adaptive Card |
| --------------------- | ---- | ----------------------- | ------- | ----------------- | ---- | ----- | ----- | ------ | ------------- |
| Webchat               |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        |  
| VoiceGateway          |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | 
| WhatsApp              |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        |
| 8x8                   |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        |   
| Alexa                 |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        |   
| Avaya CPaaS           |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        |   
| Facebook Messenger    |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | 
| Azure Bot Services    |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        |
| Google Actions        |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        | 
| Line                  |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        |  
| Microsoft Teams       |  +   |          -              |    +    |     +             |  +   |   +   |   +   |    +   |      +        |  
| RingCentral Engage    |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        |  
| Slack                 |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        |  
| Sunshine Conversations|  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      +        |  
| Twilio                |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | 
| Twilio Autopilot      |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | 
| Twilio SMS            |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | 
| Userlike              |  +   |          +              |    +    |     +             |  +   |   +   |   +   |    +   |      -        |
| AudioCodes            |  -   |          -              |    -    |     -             |  -   |   -   |   -   |    -   |      -        | 

