---
title: "TRANSFER_DIAL_SUCCESS"
slug: "TRANSFER_DIAL_SUCCESS"
hidden: false
---

# TRANSFER_DIAL_SUCCESS

This event indicates a successful call transfer that was achieved using the `Dial` method. 

The system initiated a new call to the transfer destination, and the destination accepted the call, resulting in a successful transfer.

Payload:

```json
{
  "payload": {
    "sip": {
      "headers": {
        "via": "SIP/2.0/UDP 3.72.xxx:xxx;rport=5060;branch=z9hG4bK5e0Z79XjXxxxx;received=10.1.xxx.xx",
        "max-forwards": "70",
        "from": "<sip:+441xxxxxxxxx@3.72.114.xxx:xxxx>;tag=5g9e04c5gveSK",
        "to": "<sip:+441xxxxxxxxx@3.72.xxx:xxx>",
        "call-id": "339e4482-d0c7-123c-xxxx-xxxxxxxxxxxx",
        "cseq": "72967441 INVITE",
        "contact": "<sip:3.72.114.xxx:xxxx>",
        "user-agent": "Twilio Gateway",
        "allow": "NOTIFY, OPTIONS, BYE, INVITE, ACK, CANCEL, REFER",
        "content-type": "application/sdp",
        "content-length": "287",
        "X-Account-Sid": "5125498a-29bf-4720-8bda-f9a9640ce6cd",
        "X-CID": "b10cabc33b3b544d6b9ca62fd48ac021@0.0.0.0",
        "X-Forwarded-For": "54.171.xxx.xxx",
        "X-Originating-Carrier": "Twilio Cognigy",
        "X-Voip-Carrier-Sid": "66a9c35f-44a4-4550-xxxx-xxxxxxxxxxxx",
        "X-Application-Sid": "e6e373cf-8c99-4670-xxxx-xxxxxxxxxxxx",
        "Diversion": "<sip:+441xxxxxxxxx@twilio.com>;reason=unconditional",
        "X-Twilio-AccountSid": "ACfcf5c5de99cbde37e587b72ed8dbxxxx",
        "X-Twilio-CallSid": "CAed462aff465bea07c35a579dcbbdxxxx",
        "p-asserted-identity": "<sip:+441xxxxxxxxx@88.215.60.xxx:xxxx;user=phone>"
      },
      "raw": "INVITE sip:+441xxxxxxxxx@feature-server-headless SIP/2.0\r\nVia: SIP/2.0/UDP 3.72.xxx:xxx;rport=5060;branch=z9hG4bK5e0Z79XjXxxxx;received=10.1.xxx.xx\r\nMax-Forwards: 70\r\nFrom: <sip:+441xxxxxxxxx@3.72.114.xxx:xxxx>;tag=5g9e04c5gveSK\r\nTo: <sip:+441xxxxxxxxx@3.72.xxx:xxx>\r\nCall-ID: 339e4482-d0c7-123c-xxxx-xxxxxxxxxxxx\r\nCSeq: 72967441 INVITE\r\nContact: <sip:3.72.114.xxx:xxxx>\r\nUser-Agent: Twilio Gateway\r\nAllow: NOTIFY, OPTIONS, BYE, INVITE, ACK, CANCEL, REFER\r\nContent-Type: application/sdp\r\nContent-Length: 287\r\nX-Account-Sid: 5125498a-29bf-4720-8bda-f9a9640ce6cd\r\nX-CID: b10cabc33b3b544d6b9ca62fd48ac021@0.0.0.0\r\nX-Forwarded-For: 54.171.xxx.xxx\r\nX-Originating-Carrier: Twilio Cognigy\r\nX-Voip-Carrier-Sid: 66a9c35f-44a4-4550-xxxx-xxxxxxxxxxxx\r\nX-Application-Sid: e6e373cf-8c99-4670-xxxx-xxxxxxxxxxxx\r\nDiversion: <sip:+441xxxxxxxxx@twilio.com>;reason=unconditional\r\nX-Twilio-AccountSid: ACfcf5c5de99cbde37e587b72ed8dbxxxx\r\nX-Twilio-CallSid: CAed462aff465bea07c35a579dcbbdxxxx\r\nP-Asserted-Identity: <sip:+441xxxxxxxxx@88.215.60.xxx:xxxx;user=phone>\r\n\r\nv=0\r\no=root 1008122xxx 1008122xxx IN IP4 10.1.xxx.xx\r\ns=Twilio Media Gateway\r\nc=IN IP4 10.1.xxx.xx\r\nt=0 0\r\nm=audio 45524 RTP/AVP 0 8 101\r\na=maxptime:20\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-16\r\na=sendrecv\r\na=rtcp:45525\r\na=ptime:20\r\n",
      "body": "v=0\r\no=root 1008122xxx 1008122xxx IN IP4 10.1.xxx.xx\r\ns=Twilio Media Gateway\r\nc=IN IP4 10.1.xxx.xx\r\nt=0 0\r\nm=audio 45524 RTP/AVP 0 8 101\r\na=maxptime:20\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-16\r\na=sendrecv\r\na=rtcp:45525\r\na=ptime:20\r\n",
      "method": "INVITE",
      "version": "2.0",
      "uri": "sip:+441xxxxxxxxx@feature-server-headless",
      "payload": [
        {
          "type": "application/sdp",
          "content": "v=0\r\no=root 1008122xxx 1008122xxx IN IP4 10.1.xxx.xx\r\ns=Twilio Media Gateway\r\nc=IN IP4 10.1.xxx.xx\r\nt=0 0\r\nm=audio 45524 RTP/AVP 0 8 101\r\na=maxptime:20\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-16\r\na=sendrecv\r\na=rtcp:45525\r\na=ptime:20\r\n"
        }
      ]
    },
    "direction": "inbound",
    "trace_id": "ec7a26ed64fca4c5091d770329ffxxxx",
    "caller_name": "",
    "call_sid": "a55fc0ce-5832-4f93-xxxx-xxxxxxxxxxxx",
    "account_sid": "5125498a-29bf-4720-xxxx-xxxxxxxxxxxx",
    "application_sid": "e6e373cf-8c99-4670-xxxx-xxxxxxxxxxxx",
    "from": "+441xxxxxxxxx",
    "to": "+441xxxxxxxxx",
    "call_id": "339e4482-d0c7-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 100,
    "sip_reason": "Trying",
    "call_status": "trying",
    "originating_sip_ip": "54.171.xxx.xxx",
    "originating_sip_trunk_name": "Twilio Cognigy",
    "local_sip_address": "10.1.195.xxx:xxxx",
    "service_provider_sid": "a6e51626-ef4e-48e3-xxxx-xxxxxxxxxxxx",
    "defaults": {
      "synthesizer": {
        "vendor": "microsoft",
        "language": "en-US",
        "voice": "en-US-JennyNeural"
      },
      "recognizer": {
        "vendor": "microsoft",
        "language": "en-US"
      }
    }
  },
  "event": "TRANSFER_DIAL_SUCCESS",
  "numberMetaData": {
    "number": "+441xxxxxxxxx",
    "country": "GB",
    "countryCallingCode": "44",
    "nationalNumber": "1173185xxx",
    "valid": true,
    "type": "FIXED_LINE",
    "uri": "tel:+441xxxxxxxxx"
  }
}
```