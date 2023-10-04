---
title: "TRANSFER_REFER_ERROR"
slug: "TRANSFER_REFER_ERROR"
hidden: false
---

# TRANSFER_REFER_ERROR

[![Version badge](https://img.shields.io/badge/Added in-v4.61-blue.svg)](../../../release-notes/4.61.md)

This event indicates that a call transfer attempt using the `Refer` method resulted in an error or failure.

The `Refer` method involves passing the responsibility for handling the call to another destination while maintaining the media path. 

However, in this case, the transfer failed due to the destination being unavailable or rejecting the transfer request.

Payload:

```json
{
  "payload": {
    "sip": {
      "headers": {
        "via": "SIP/2.0/UDP 3.72.xxx.xxx;rport=5060;branch=z9hG4bK9aXr878SNxxxx;received=10.1.xxx.xx",
        "max-forwards": "70",
        "from": "<sip:+44xxxxxxxxxx@3.72.xxx.xxx:5060>;tag=avDgD2vvmj32N",
        "to": "<sip:+44xxxxxxxxxx@3.72.xxx.xxx;transport=tls>",
        "call-id": "350f6678-d07e-123c-xxxx-xxxxxxxxxxxx",
        "cseq": "72951765 INVITE",
        "contact": "<sip:3.72.xxx.xxx:5060>",
        "user-agent": "Twilio Gateway",
        "allow": "NOTIFY, OPTIONS, BYE, INVITE, ACK, CANCEL, REFER",
        "privacy": "none",
        "content-type": "application/sdp",
        "content-length": "287",
        "X-Account-Sid": "41f4d1f1-13b2-4c00-xxxx-xxxxxxxxxxxx",
        "X-CID": "7ecc17f5b571b87c8a7fab3caxxxxxxx@0.0.0.0",
        "X-Forwarded-For": "54.171.xxx.xxx",
        "X-Originating-Carrier": "Twilio",
        "X-Voip-Carrier-Sid": "2b9847d1-e233-4f34-xxxx-xxxxxxxxxxxx",
        "X-Application-Sid": "f5451299-0d16-478a-xxxx-xxxxxxxxxxxx",
        "Diversion": "<sip:+44xxxxxxxxxx@twilio.com>;reason=unconditional",
        "X-Twilio-AccountSid": "ACfcf5c5de99cbde37e587b72ed8dbxxxx",
        "X-Twilio-CallSid": "CAb2af004beff16b9f3e0b434e5ccaxxxx",
        "p-asserted-identity": "<sip:+44xxxxxxxxxx@88.215.xx.xxx;user=phone>"
      },
      "raw": "INVITE sip:+44xxxxxxxxxx@feature-server-headless SIP/2.0\r\nVia: SIP/2.0/UDP 3.72.xxx.xxx;rport=5060;branch=z9hG4bK9aXr878SNxxxx;received=10.1.xxx.xx\r\nMax-Forwards: 70\r\nFrom: <sip:+44xxxxxxxxxx@3.72.xxx.xxx:5060>;tag=avDgD2vvmj32N\r\nTo: <sip:+44xxxxxxxxxx@3.72.xxx.xxx;transport=tls>\r\nCall-ID: 350f6678-d07e-123c-xxxx-xxxxxxxxxxxx\r\nCSeq: 72951765 INVITE\r\nContact: <sip:3.72.xxx.xxx:5060>\r\nUser-Agent: Twilio Gateway\r\nAllow: NOTIFY, OPTIONS, BYE, INVITE, ACK, CANCEL, REFER\r\nPrivacy: none\r\nContent-Type: application/sdp\r\nContent-Length: 287\r\nX-Account-Sid: 41f4d1f1-13b2-4c00-xxxx-xxxxxxxxxxxx\r\nX-CID: 7ecc17f5b571b87c8a7fab3caxxxxxxx@0.0.0.0\r\nX-Forwarded-For: 54.171.xxx.xxx\r\nX-Originating-Carrier: Twilio\r\nX-Voip-Carrier-Sid: 2b9847d1-e233-4f34-xxxx-xxxxxxxxxxxx\r\nX-Application-Sid: f5451299-0d16-478a-xxxx-xxxxxxxxxxxx\r\nDiversion: <sip:+44xxxxxxxxxx@twilio.com>;reason=unconditional\r\nX-Twilio-AccountSid: ACfcf5c5de99cbde37e587b72ed8db458f\r\nX-Twilio-CallSid: CAb2af004beff16b9f3e0b434e5cca1376\r\nP-Asserted-Identity: <sip:+44xxxxxxxxxx@88.215.xx.xxx;user=phone>\r\n\r\nv=0\r\no=root 1653966628 1653966628 IN IP4 10.1.xxx.xx\r\ns=Twilio Media Gateway\r\nc=IN IP4 10.1.xxx.xx\r\nt=0 0\r\nm=audio 43578 RTP/AVP 0 8 101\r\na=maxptime:20\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-16\r\na=sendrecv\r\na=rtcp:43579\r\na=ptime:20\r\n",
      "body": "v=0\r\no=root 1653966628 1653966628 IN IP4 10.1.xxx.xx\r\ns=Twilio Media Gateway\r\nc=IN IP4 10.1.xxx.xx\r\nt=0 0\r\nm=audio 43578 RTP/AVP 0 8 101\r\na=maxptime:20\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-16\r\na=sendrecv\r\na=rtcp:43579\r\na=ptime:20\r\n",
      "method": "INVITE",
      "version": "2.0",
      "uri": "sip:+44xxxxxxxxxx@feature-server-headless",
      "payload": [
        {
          "type": "application/sdp",
          "content": "v=0\r\no=root 1653966628 1653966628 IN IP4 10.1.xxx.xx\r\ns=Twilio Media Gateway\r\nc=IN IP4 10.1.xxx.xx\r\nt=0 0\r\nm=audio 43578 RTP/AVP 0 8 101\r\na=maxptime:20\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-16\r\na=sendrecv\r\na=rtcp:43579\r\na=ptime:20\r\n"
        }
      ]
    },
    "direction": "inbound",
    "trace_id": "1d59b6dc4443802bce572d2e048e1f1d",
    "caller_name": "",
    "call_sid": "09ad4f83-140c-4e2a-xxxx-xxxxxxxxxxxx9",
    "account_sid": "41f4d1f1-13b2-4c00-xxxx-xxxxxxxxxxxx",
    "application_sid": "f5451299-0d16-478a-xxxx-xxxxxxxxxxxx",
    "from": "+44xxxxxxxxxx",
    "to": "+44xxxxxxxxxx",
    "call_id": "350f6678-d07e-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 100,
    "sip_reason": "Trying",
    "call_status": "trying",
    "originating_sip_ip": "54.171.xxx.xxx",
    "originating_sip_trunk_name": "Twilio",
    "local_sip_address": "10.1.193.115:5060",
    "service_provider_sid": "12966469-cb0a-45bb-9413-1c9d15b917ce",
    "defaults": {
      "synthesizer": {
        "vendor": "google",
        "language": "en-US",
        "voice": "en-US-Standard-C"
      },
      "recognizer": { "vendor": "google", "language": "en-US" }
    }
  },
  "event": "TRANSFER_REFER_ERROR",
  "numberMetaData": {
    "number": "+44xxxxxxxxxx",
    "country": "GB",
    "countryCallingCode": "44",
    "nationalNumber": "2392160194",
    "valid": true,
    "type": "FIXED_LINE",
    "uri": "tel:+44xxxxxxxxxx"
  }
}
```