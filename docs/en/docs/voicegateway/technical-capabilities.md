# Voice Gateway Technical Capabilities

## Protocols supported

| Protocol                           | Description                                                                                                         |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| SIP                                | Support for SIP signaling as specified in [IETF RFC 3261](https://datatracker.ietf.org/doc/html/rfc3261)            |
| SIPS                               | Support for SIP over TLS signaling (also specified in RFC 3261)                                                      |
| SIP over websockets                | Support for SIP over secure websockets, as specified in [RFC 7118](https://datatracker.ietf.org/doc/html/rfc7118)   |
| RTP                                | Support for Real-time Transport protocol as specified in [RFC 3550](https://datatracker.ietf.org/doc/html/rfc3550)  |
| SRTP                               | Support for encrypted media using Secure Real-time Transport Protocol (SRTP), as specified in [RFC 3711](https://datatracker.ietf.org/doc/html/rfc3711) |
| RTCP                               | The RTP Control Protocol (RTCP) is supported to provide quality of service (QoS) statistics for RTP media streams   |
| Session Description Protocol (SDP) | As specified in [RFC 4566](https://datatracker.ietf.org/doc/html/rfc4566)                                            |
| Offer/Answer Model with the Session Description Protocol (SDP) | The offer/answer model for negotiating SIP sessions, as specified in [RFC 3264](https://datatracker.ietf.org/doc/html/rfc3264) |
| DTMF | The use of RTP payloads to carry DMTF events, as specified in [RFC 2833](https://datatracker.ietf.org/doc/html/rfc2833) |
| SIP Digest Authentication | SIP Digest Authentication to challenge and authenticate sip devices, as specified in [RFC 8760](https://datatracker.ietf.org/doc/html/rfc8760) |
| SIPREC                             | Support for acting as either a SIPREC client or server in order to accomplish call recording, as specified in [RFC 7866](https://datatracker.ietf.org/doc/html/rfc7866) |
| WebRTC clients                     | Support for receiving calls from Webrtc clients, e.g. web browsers or native mobile apps                            |
| DTMF - SIP INFO                    | Support for receiving DTMF via SIP INFO, as specified in [RFC 2976](https://www.rfc-editor.org/rfc/rfc2976)         |
| SIP OPTIONS                        | The VG supports OPTIONS pings to allow remote SIP gateways and Session Border Controllers (SBCs) to test the health of the VG SBCs |
| Session timers                     | Support for SIP session timers, as specified in [RFC 4028](https://datatracker.ietf.org/doc/html/rfc4028)           |
| SIP UPDATE                         | Support for SIP UPDATE method to refresh SIP Session                                                                |
| STUN                               | Support for Session Traversal Utilities for NAT (STUN), as specified in [RFC 5389](https://datatracker.ietf.org/doc/html/rfc5389) |
|  Diversion Indication in SIP | Support for Diversion header, as specified in [RFC 5806](https://datatracker.ietf.org/doc/html/rfc5806)             |


## Codecs supported
The following audio codecs are supported:

- G.711 - ulaw and alaw (preferred)
- OPUS
- G.722

## Features
- REST API to generate outbound calls or perform operations on calls in progress
- Support for many speech vendors (Google, Azure, AWS, Deepgram, Elevenlabs, Soniox, AssemblyAI, IBM, Nuance, Nvidia, Cobalt, Whisper) as well as custom speech API to add your own
- Support for on-premise container-based speech solutions from Azure, Deepgram, and Nuance in addition to hosted SaaS speech services
- Support for call recording via integration with third-party SIPREC server
- Support for call recording with no third-party components, recordings streamed to customers preferred cloud storage (S3, S3 compatible, Google cloud storage, or Azure cloud storage)
- Support for transferring calls via [SIP REFER](https://datatracker.ietf.org/doc/html/rfc3515) or SIP INVITE
- Support for multiple SIP trunks per customer
- Routing calls based on trunk group, DID, or DID range
- Support for least-cost routing selection of outbound trunk
- Support for custom SIP headers on inbound and outbound calls
- Support for mid-call SIP INFO requests
- Support for pause/resume transcription and recording (avoid collection of PII data)
- Support for P-Asserted-Identity header to identify caller
- Support for answering machine detection
- Support for configurable music on hold
- Support for receiving compact SIP headers
- Support for receiving re-INVITE with no SDP
- Observability features include open telemetry tracing of call events
- Caching of TTS audio when possible to reduce costs
- Visual view of speech latency (text to speech and speech to text) on individual call basis
- Support for fallback speech configuration in case primary provider fails
- Support for configuring SIP trunks with options like tech prefix, SIP Diversion header, Outbound authentication (including REGISTER)

Get in touch with us via an email to [support@cognigy.com](mailto:support@cognigy.com) for any further or more specific questions on the VG Technical Capabilities.