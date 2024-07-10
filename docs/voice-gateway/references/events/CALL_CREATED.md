---
title: "CALL_CREATED"
slug: "CALL_CREATED"
hidden: false
---

# CALL_CREATED

The user created a call.

To test a payload with the `CALL_CREATED` event, you can use an empty Flow.

Input: Start a call via the Interaction Panel by clicking ![phone](../../../_assets/icons/phone.svg) **> Start Call**.

Payload:

```json
{
    "payload": {
        "sip": {
            "headers": {
                "via": "SIP/2.0/UDP 3.72.xxx.xxx;rport=xxxx;branch=z9hG4bKZrpS3gBX84UXD;received=10.1.xxx.xxx",
                "max-forwards": "70",
                "from": "\"user-hNXdMqitUc7V2n3PXCxxxx\" <sip:user-hNXdMqitUc7V2n3PXCxxxx@3.72.xxx.xxx:xxxx>;tag=yHKc002meZ0Sg",
                "to": "<sip:123456789@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai>",
                "call-id": "5f301279-5e18-123c-xxxx-xxxxxxxxxxxx",
                "cseq": "66662680 INVITE",
                "contact": "<sip:3.72.xxx.xxx:xxxx>",
                "user-agent": "JsSIP 3.9.1",
                "allow": "INVITE, ACK, CANCEL, BYE, UPDATE, MESSAGE, OPTIONS, REFER, INFO, NOTIFY",
                "supported": "timer, ice, replaces, outbound",
                "content-type": "application/sdp",
                "content-length": "994",
                "X-Account-Sid": "f4cd23c1-d5c4-4fcc-xxxx-xxxxxxxxxxxx",
                "X-CID": "6q8lhgc2sa1n80dlxxxx",
                "X-Forwarded-For": "88.77.xx:xxxx",
                "X-Application-Sid": "108d3a4c-cdfa-4632-xxxx-xxxxxxxxxxxx",
                "X-Authenticated-User": "user-hNXdMqitUc7V2n3PXCxxxx@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai"
            },
            "raw": "INVITE sip:123456789@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai SIP/2.0\r\nVia: SIP/2.0/UDP 3.72.xxx.xxx;rport=xxxx;branch=z9hG4bKZrpS3gBX84UXD;received=10.1.xxx.xxx\r\nMax-Forwards: 70\r\nFrom: \"user-hNXdMqitUc7V2n3PXCxxxx\" <sip:user-hNXdMqitUc7V2n3PXCxxxx@3.72.xxx.xxx:xxxx>;tag=yHKc002meZ0Sg\r\nTo: <sip:123456789@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai>\r\nCall-ID: 5f301279-5e18-123c-xxxx-xxxxxxxxxxxx\r\nCSeq: 66662680 INVITE\r\nContact: <sip:3.72.xxx.xxx:xxxx>\r\nUser-Agent: JsSIP 3.9.1\r\nAllow: INVITE, ACK, CANCEL, BYE, UPDATE, MESSAGE, OPTIONS, REFER, INFO, NOTIFY\r\nSupported: timer, ice, replaces, outbound\r\nContent-Type: application/sdp\r\nContent-Length: 994\r\nX-Account-Sid: f4cd23c1-d5c4-4fcc-xxxx-xxxxxxxxxxxx\r\nX-CID: 6q8lhgc2sa1n80dlxxxx\r\nX-Forwarded-For: 88.77.xx:xxxx\r\nX-Application-Sid: 108d3a4c-cdfa-4632-xxxx-xxxxxxxxxxxx\r\nX-Authenticated-User: user-hNXdMqitUc7V2n3PXCxxxx@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai\r\n\r\nv=0\r\no=- 864095444741402xxxx 2 IN IP4 10.1.xxx.xxx\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 6b665972-b871-467b-xxxx-xxxxxxxxxxxx\r\nm=audio 40604 RTP/AVP 111 9 0 8 13 110 126\r\nc=IN IP4 10.1.xxx.xxx\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=ssrc:1633318641 cname:vhcrZYtXvzFBRICx\r\na=ssrc:1633318641 msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=mid:0\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtcp-fb:111 transport-cc\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=sendrecv\r\na=rtcp:40605\r\na=rtcp-mux\r\n",
            "body": "v=0\r\no=- 864095444741402xxxx 2 IN IP4 10.1.xxx.xxx\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 6b665972-b871-467b-xxxx-xxxxxxxxxxxx\r\nm=audio 40604 RTP/AVP 111 9 0 8 13 110 126\r\nc=IN IP4 10.1.xxx.xxx\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=ssrc:1633318641 cname:vhcrZYtXvzFBRICx\r\na=ssrc:1633318641 msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=mid:0\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtcp-fb:111 transport-cc\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=sendrecv\r\na=rtcp:40605\r\na=rtcp-mux\r\n",
            "method": "INVITE",
            "version": "2.0",
            "uri": "sip:123456789@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai",
            "payload": [
                {
                    "type": "application/sdp",
                    "content": "v=0\r\no=- 864095444741402xxxx 2 IN IP4 10.1.xxx.xxx\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 6b665972-b871-467b-xxxx-xxxxxxxxxxxx\r\nm=audio 40604 RTP/AVP 111 9 0 8 13 110 126\r\nc=IN IP4 10.1.xxx.xxx\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=ssrc:1633318641 cname:vhcrZYtXvzFBRICx\r\na=ssrc:1633318641 msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=mid:0\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtcp-fb:111 transport-cc\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=sendrecv\r\na=rtcp:40605\r\na=rtcp-mux\r\n"
                }
            ]
        },
        "direction": "inbound",
        "trace_id": "9c1f453ac53cb7a337367cdceadfac31",
        "caller_name": "\"user-hNXdMqitUc7V2n3PXCxxxx\"",
        "call_sid": "3c637500-944b-410a-xxxx-xxxxxxxxxxxx",
        "account_sid": "f4cd23c1-d5c4-4fcc-xxxx-xxxxxxxxxxxx",
        "application_sid": "108d3a4c-cdfa-4632-xxxx-xxxxxxxxxxxx",
        "from": "user-hNXdMqitUc7V2n3PXCxxxx",
        "to": "123456789",
        "call_id": "5f301279-5e18-123c-xxxx-xxxxxxxxxxxx",
        "sip_status": 100,
        "sip_reason": "Trying",
        "call_status": "trying",
        "originating_sip_ip": "88.77.xx:xxxx",
        "local_sip_address": "10.1.193.xxx:xxxx",
        "service_provider_sid": "a7434703-cedb-48f4-xxxx-xxxxxxxxxxxx",
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
    "event": "CALL_CREATED"
}
```