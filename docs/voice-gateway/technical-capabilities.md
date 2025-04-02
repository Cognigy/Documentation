---
title: "Voice Gateway Technical Capabilities"
slug: "technical-capabilities"
description: "This article is intended for individuals considering Voice Gateway for their telecommunication needs and outlines its technical capabilities."
hidden: false
---

# Voice Gateway Technical Capabilities

This article is intended for individuals considering Voice Gateway for their telecommunication needs. 
It provides a detailed overview of the platform's extensive technical capabilities, including support for various protocols such as SIP and RTP, as well as audio codecs. 
The description highlights several features, including call routing, custom SIP headers, and call recording integration,
which address diverse requirements.
Additionally, the article describes the use of STT and TTS providers and emphasizes the advanced tools for monitoring call quality.

## Supported Protocols

The following protocols are supported:

| Protocol                                                       | Supported Functionality                                                                                                                                                                                         |
|----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SIP                                                            | SIP signaling, as specified in [IETF RFC 3261](https://datatracker.ietf.org/doc/html/rfc3261).                                                                                                                  |
| TLS                                                            | The Transport Layer Security (TLS) is a cryptographic protocol that provides secure communication over a network. Voice Gateway supports TLS 1.2 and later versions. TLS 1.3 is preferred for optimal security. |
| SIP over TLS                                                   | Partially encrypted SIP, as specified in [IETF RFC 3261](https://datatracker.ietf.org/doc/html/rfc3261). Some servers may communicate unencrypted, depending on specific requirements.                          |
| SIPS                                                           | Fully encrypted SIP, as specified in [IETF RFC 3261](https://datatracker.ietf.org/doc/html/rfc3261). All servers in the communication chain use TLS for encrypted communication.                                |
| SIP over WebSockets                                            | SIP over secure WebSockets, as specified in [RFC 7118](https://datatracker.ietf.org/doc/html/rfc7118).                                                                                                          |
| RTP                                                            | The Real-time Transport Protocol as specified in [RFC 3550](https://datatracker.ietf.org/doc/html/rfc3550).                                                                                                     |
| SRTP                                                           | Encrypted media using the Secure Real-time Transport Protocol (SRTP), as specified in [RFC 3711](https://datatracker.ietf.org/doc/html/rfc3711).                                                                |
| RTCP                                                           | The RTP Control Protocol (RTCP) provides quality of service (QoS) statistics for RTP media streams.                                                                                                             |
| Session Description Protocol (SDP)                             | The Session Description Protocol (SDP), as specified in [RFC 4566](https://datatracker.ietf.org/doc/html/rfc4566).                                                                                              |
| Offer/Answer Model with the Session Description Protocol (SDP) | The offer or answer model for negotiating SIP sessions, as specified in [RFC 3264](https://datatracker.ietf.org/doc/html/rfc3264).                                                                              |
| DTMF                                                           | The use of RTP payloads to carry DMTF events, as specified in [RFC 2833](https://datatracker.ietf.org/doc/html/rfc2833).                                                                                        |
| SIP Digest Authentication                                      | SIP Digest Authentication challenges and authenticates SIP devices, as specified in [RFC 8760](https://datatracker.ietf.org/doc/html/rfc8760).                                                                  |
| SIPREC                                                         | Acting as a SIPREC client or server to accomplish call recording, as specified in [RFC 7866](https://datatracker.ietf.org/doc/html/rfc7866).                                                                    |
| WebRTC clients                                                 | Receiving calls from WebRTC clients, such as web browsers or native mobile apps.                                                                                                                                |
| DTMF - SIP INFO                                                | Receiving DTMF via SIP INFO, as specified in [RFC 2976](https://www.rfc-editor.org/rfc/rfc2976).                                                                                                                |
| SIP OPTIONS                                                    | OPTIONS pings to allow remote SIP gateways and Session Border Controllers (SBCs) to test the health of the Voice Gateway SBCs.                                                                                  |
| Session timers                                                 | SIP session timers, as specified in [RFC 4028](https://datatracker.ietf.org/doc/html/rfc4028).                                                                                                                  |
| SIP UPDATE                                                     | The SIP UPDATE method to refresh SIP session.                                                                                                                                                                   |
| STUN                                                           | Session Traversal Utilities for NAT (STUN), as specified in [RFC 5389](https://datatracker.ietf.org/doc/html/rfc5389).                                                                                          |
| Diversion Indication in SIP                                    | The Diversion header, as specified in [RFC 5806](https://datatracker.ietf.org/doc/html/rfc5806).                                                                                                                |

## Supported Codecs

The following audio codecs are supported:

- `G.711` (preferred):
    - `A-law`.
    - `U-law`.
- `OPUS`.
- `G.722`.

## Features

### Trunk management and Routing

- Transferring calls via [SIP REFER](https://datatracker.ietf.org/doc/html/rfc3515) or [SIP INVITE](https://datatracker.ietf.org/doc/html/rfc3261).
- Multiple SIP trunks per customer.
- Configuring SIP trunks with options like tech prefix, SIP Diversion header, Outbound authentication (including `REGISTER`).
- Routing calls based on a trunk group, Direct Inward Dialing (DID), or DID range.
- Least-cost routing selection of outbound trunk.

### Call Features 

- Custom SIP headers on inbound and outbound calls.
- Mid-call SIP INFO requests.
- P-Asserted-Identity header to identify caller.
- Receiving compact SIP headers.
- Receiving re-INVITE with no Session Description Protocol (SDP).
- [Answering machine detection](references/verbs/amd.md).
- Configurable music on hold.
- Configurable [Atmosphere Sounds](../ai/build/node-reference/voice/voice-gateway/parameter-details.md) playing in the background of the conversation.
- Configurable [Silence Overlay](../ai/build/node-reference/voice/voice-gateway/parameter-details.md) playing background sounds when there's a long pause in a call.

### Call Management

- [Creating outbound calls via REST API](../voice-gateway/creating-outbound-calls.md).
- Performing operations on calls in progress via REST API.

### STT and TTS providers

- Many cloud-based and on-premises [speech providers](../voice-gateway/references/tts-and-stt-vendors.md) are available, along with the option to integrate [custom speech API](webapp/speech-services.md#add-a-custom-speech-vendor) tailored to your needs.
- [Fallback speech configuration](../voice-gateway/webapp/applications.md#add-additional-tts-and-stt-vendor) if the primary vendor fails.

### Call Recording and Storage

- [Call recording](webapp/recent-calls.md#call-recordings) via integration with a third-party SIPREC server.
- Pausing or resuming transcription and recording to avoid the collection of Personally Identifiable Information (PII).
- Call recording with no third-party components, [recordings streamed to the preferred cloud storage](../voice-gateway/webapp/recent-calls.md#call-recordings).

### Call Quality Monitoring and Optimization

- Observability features include [tracing call events with open telemetry](webapp/recent-calls.md).
- Visual view of [speech latency](webapp/recent-calls.md#call-recordings) (TTS and STT) on each call.
- [Caching of TTS audio](webapp/accounts.md#tts-prompt-caching) when possible to reduce costs.

## Technical Support

For any further or more specific questions about the Voice Gateway technical capabilities, contact [Cognigy technical support](../help/get-help.md).