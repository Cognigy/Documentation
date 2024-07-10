---
title: "CALL_RECONNECTED"
slug: "CALL_RECONNECTED"
hidden: false
---

# CALL_RECONNECTED

The call was reconnected due to network problems.

Payload:

```json
{
  "event": "CALL_RECONNECTED",
  "payload": {
    "sip": {
      "headers": {
        "via": "SIP/2.0/UDP 3.68.xx.xx;rport=5060;branch=z9hG4bKc9yUBva49xxxx;received=10.1.xxx.xx",
        "max-forwards": "70",
        "from": "<sip:+49xxxxxxxxxxx@3.68.22.xx:xxxx>;tag=U1c1ND6B6UNvB",
        "to": "<sip:+49xxxxxxxxxxx@3.68.xx.xx>",
        "call-id": "ad7d47eb-cc11-123c-xxxx-xxxxxxxxxxxx",
        "cseq": "72708556 INVITE",
        "contact": "<sip:3.68.22.xx:xxxx>",
        "expires": "180",
        "date": "Tue, 12 Sep 2023 13:18:17 GMT",
        "timestamp": "1694524697",
        "user-agent": "Cisco-SIPGateway/IOS-17.6.5",
        "allow": "INVITE, OPTIONS, BYE, CANCEL, ACK, PRACK, UPDATE, REFER, SUBSCRIBE, NOTIFY, INFO, REGISTER",
        "supported": "100rel, timer, resource-priority, replaces, sdp-anat",
        "allow-events": "telephone-event",
        "min-se": "900",
        "content-type": "application/sdp",
        "content-disposition": "session;handling=required",
        "content-length": "273",
        "X-Account-Sid": "4a8be367-ca76-4b40-xxxx-xxxxxxxxxxxx",
        "X-CID": "ABB20121-50A511EE-A163801E-xxxxxxxx@10.10.6.12",
        "X-Forwarded-For": "217.6.161.142",
        "X-Originating-Carrier": "Cisco PBX",
        "X-Voip-Carrier-Sid": "05fb0a17-7868-xxxx-xxxxxxxxxxxx",
        "X-Application-Sid": "6ea22d1e-b983-4cd6-xxxx-xxxxxxxxxxxx",
        "cisco-guid": "2880529657-1352995310-xxxxxxxxx-xxxxxxxxxxxx",
        "session-id": "1c40ea29144ba4de7fa91ba01d55e03d;remote=00000000000000000000000000000000"
      },
      "raw": "INVITE sip:+49xxxxxxxxxxx@feature-server-headless SIP/2.0\r\nVia: SIP/2.0/UDP 3.68.xx.xx;rport=5060;branch=z9hG4bKc9yUBva49xxxx;received=10.1.xxx.xx\r\nMax-Forwards: 70\r\nFrom: <sip:+49xxxxxxxxxxx@3.68.22.xx:xxxx>;tag=U1c1ND6B6UNvB\r\nTo: <sip:+49xxxxxxxxxxx@3.68.xx.xx>\r\nCall-ID: ad7d47eb-cc11-123c-1d8f-06e0ed4205c1\r\nCSeq: 72708556 INVITE\r\nContact: <sip:3.68.22.xx:xxxx>\r\nExpires: 180\r\nDate: Tue, 12 Sep 2023 13:18:17 GMT\r\nTimestamp: 1694524697\r\nUser-Agent: Cisco-SIPGateway/IOS-17.6.5\r\nAllow: INVITE, OPTIONS, BYE, CANCEL, ACK, PRACK, UPDATE, REFER, SUBSCRIBE, NOTIFY, INFO, REGISTER\r\nSupported: 100rel, timer, resource-priority, replaces, sdp-anat\r\nAllow-Events: telephone-event\r\nMin-SE: 900\r\nContent-Type: application/sdp\r\nContent-Disposition: session;handling=required\r\nContent-Length: 273\r\nX-Account-Sid: 4a8be367-ca76-4b40-918e-96efd6a37396\r\nX-CID: ABB20121-50A511EE-A163801E-xxxxxxxx@10.10.6.12\r\nX-Forwarded-For: 217.6.161.142\r\nX-Originating-Carrier: Cisco PBX\r\nX-Voip-Carrier-Sid: 05fb0a17-7868-49e2-9d9f-3fcc92ed125e\r\nX-Application-Sid: 6ea22d1e-b983-4cd6-8b8e-ee4d1b8ea721\r\nCisco-Guid: 2880529657-1352995310-2707259422-3569899952\r\nSession-Id: 1c40ea29144ba4de7fa91ba01d55e03d;remote=00000000000000000000000000000000\r\n\r\nv=0\r\no=CiscoSystemsSIP-GW-UserAgent 9059 6390 IN IP4 10.1.144.121\r\ns=SIP Call\r\nc=IN IP4 10.1.144.121\r\nt=0 0\r\nm=audio 59710 RTP/AVP 8 101\r\nc=IN IP4 10.1.144.121\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-15\r\na=sendrecv\r\na=rtcp:59711\r\na=ptime:20\r\n",
      "body": "v=0\r\no=CiscoSystemsSIP-GW-UserAgent 9059 6390 IN IP4 10.1.144.121\r\ns=SIP Call\r\nc=IN IP4 10.1.144.121\r\nt=0 0\r\nm=audio 59710 RTP/AVP 8 101\r\nc=IN IP4 10.1.144.121\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-15\r\na=sendrecv\r\na=rtcp:59711\r\na=ptime:20\r\n",
      "method": "INVITE",
      "version": "2.0",
      "uri": "sip:+49xxxxxxxxxxx@feature-server-headless",
      "payload": [
        {
          "type": "application/sdp",
          "content": "v=0\r\no=CiscoSystemsSIP-GW-UserAgent 9059 6390 IN IP4 10.1.144.121\r\ns=SIP Call\r\nc=IN IP4 10.1.144.121\r\nt=0 0\r\nm=audio 59710 RTP/AVP 8 101\r\nc=IN IP4 10.1.144.121\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-15\r\na=sendrecv\r\na=rtcp:59711\r\na=ptime:20\r\n"
        }
      ]
    },
    "direction": "inbound",
    "trace_id": "45cc121af9b233d9c5e672f3f7232196",
    "caller_name": "",
    "call_sid": "f35585d2-9991-468b-xxxx-xxxxxxxxxxxx",
    "account_sid": "4a8be367-ca76-4b40-xxxx-xxxxxxxxxxxx",
    "application_sid": "6ea22d1e-b983-4cd6-xxxx-xxxxxxxxxxxx",
    "from": "+49xxxxxxxxxxx",
    "to": "+49xxxxxxxxxxx",
    "call_id": "ad7d47eb-cc11-123c-xxxx-xxxxxxxxxxxx",
    "sip_status": 100,
    "sip_reason": "Trying",
    "call_status": "trying",
    "originating_sip_ip": "217.6.xxx.xxx",
    "originating_sip_trunk_name": "Cisco PBX",
    "local_sip_address": "10.1.131.xxx:xxxx",
    "service_provider_sid": "181b71ba-53b0-49db-xxxx-xxxxxxxxxxxx",
    "defaults": {
      "synthesizer": {
        "vendor": "microsoft",
        "language": "de-DE",
        "voice": "de-DE-KillianNeural"
      },
      "recognizer": { "vendor": "microsoft", "language": "de-DE" }
    }
  }
}
```