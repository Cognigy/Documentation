---
title: "CALL_CREATED"
slug: "CALL_CREATED"
hidden: false
---

# CALL_CREATED

The user created a call.

To test a payload with the `CALL_CREATED` event, you can use an empty Flow.

Input: Start a call via the Interaction Panel by clicking ![phone](../../../assets/icons/phone.svg) **> Start Call**.

Payload:

```json
{
    "payload": {
        "sip": {
            "headers": {
                "via": "SIP/2.0/UDP 3.72.114.185;rport=5060;branch=z9hG4bKZrpS3gBX84UXD;received=10.1.209.177",
                "max-forwards": "70",
                "from": "\"user-hNXdMqitUc7V2n3PXCtcXR\" <sip:user-hNXdMqitUc7V2n3PXCtcXR@3.72.114.185:5060>;tag=yHKc002meZ0Sg",
                "to": "<sip:123456789@realm-bk7wngxs9jzgn5pwslp8he.cognigy.ai>",
                "call-id": "5f301279-5e18-123c-a1a0-06f1c3f65bf4",
                "cseq": "66662680 INVITE",
                "contact": "<sip:3.72.114.185:5060>",
                "user-agent": "JsSIP 3.9.1",
                "allow": "INVITE, ACK, CANCEL, BYE, UPDATE, MESSAGE, OPTIONS, REFER, INFO, NOTIFY",
                "supported": "timer, ice, replaces, outbound",
                "content-type": "application/sdp",
                "content-length": "994",
                "X-Account-Sid": "f4cd23c1-d5c4-4fcc-8737-3859f41a3cbe",
                "X-CID": "6q8lhgc2sa1n80dlcevi",
                "X-Forwarded-For": "88.77.34.146",
                "X-Application-Sid": "108d3a4c-cdfa-4632-a47b-c9e41dcdc3a3",
                "X-Authenticated-User": "user-hNXdMqitUc7V2n3PXCtcXR@realm-bk7wngxs9jzgn5pwslp8he.cognigy.ai"
            },
            "raw": "INVITE sip:123456789@realm-bk7wngxs9jzgn5pwslp8he.cognigy.ai SIP/2.0\r\nVia: SIP/2.0/UDP 3.72.114.185;rport=5060;branch=z9hG4bKZrpS3gBX84UXD;received=10.1.209.177\r\nMax-Forwards: 70\r\nFrom: \"user-hNXdMqitUc7V2n3PXCtcXR\" <sip:user-hNXdMqitUc7V2n3PXCtcXR@3.72.114.185:5060>;tag=yHKc002meZ0Sg\r\nTo: <sip:123456789@realm-bk7wngxs9jzgn5pwslp8he.cognigy.ai>\r\nCall-ID: 5f301279-5e18-123c-a1a0-06f1c3f65bf4\r\nCSeq: 66662680 INVITE\r\nContact: <sip:3.72.114.185:5060>\r\nUser-Agent: JsSIP 3.9.1\r\nAllow: INVITE, ACK, CANCEL, BYE, UPDATE, MESSAGE, OPTIONS, REFER, INFO, NOTIFY\r\nSupported: timer, ice, replaces, outbound\r\nContent-Type: application/sdp\r\nContent-Length: 994\r\nX-Account-Sid: f4cd23c1-d5c4-4fcc-8737-3859f41a3cbe\r\nX-CID: 6q8lhgc2sa1n80dlcevi\r\nX-Forwarded-For: 88.77.34.146\r\nX-Application-Sid: 108d3a4c-cdfa-4632-a47b-c9e41dcdc3a3\r\nX-Authenticated-User: user-hNXdMqitUc7V2n3PXCtcXR@realm-bk7wngxs9jzgn5pwslp8he.cognigy.ai\r\n\r\nv=0\r\no=- 8640954447414029392 2 IN IP4 10.1.205.200\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 6b665972-b871-467b-a5e5-07409cefb84e\r\nm=audio 40604 RTP/AVP 111 9 0 8 13 110 126\r\nc=IN IP4 10.1.205.200\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=msid:6b665972-b871-467b-a5e5-07409cefb84e 8eed9b05-e9eb-4186-8e18-74e5ebfc5b7d\r\na=ssrc:1633318641 cname:vhcrZYtXvzFBRICx\r\na=ssrc:1633318641 msid:6b665972-b871-467b-a5e5-07409cefb84e 8eed9b05-e9eb-4186-8e18-74e5ebfc5b7d\r\na=mid:0\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtcp-fb:111 transport-cc\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=sendrecv\r\na=rtcp:40605\r\na=rtcp-mux\r\n",
            "body": "v=0\r\no=- 8640954447414029392 2 IN IP4 10.1.205.200\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 6b665972-b871-467b-a5e5-07409cefb84e\r\nm=audio 40604 RTP/AVP 111 9 0 8 13 110 126\r\nc=IN IP4 10.1.205.200\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=msid:6b665972-b871-467b-a5e5-07409cefb84e 8eed9b05-e9eb-4186-8e18-74e5ebfc5b7d\r\na=ssrc:1633318641 cname:vhcrZYtXvzFBRICx\r\na=ssrc:1633318641 msid:6b665972-b871-467b-a5e5-07409cefb84e 8eed9b05-e9eb-4186-8e18-74e5ebfc5b7d\r\na=mid:0\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtcp-fb:111 transport-cc\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=sendrecv\r\na=rtcp:40605\r\na=rtcp-mux\r\n",
            "method": "INVITE",
            "version": "2.0",
            "uri": "sip:123456789@realm-bk7wngxs9jzgn5pwslp8he.cognigy.ai",
            "payload": [
                {
                    "type": "application/sdp",
                    "content": "v=0\r\no=- 8640954447414029392 2 IN IP4 10.1.205.200\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 6b665972-b871-467b-a5e5-07409cefb84e\r\nm=audio 40604 RTP/AVP 111 9 0 8 13 110 126\r\nc=IN IP4 10.1.205.200\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=msid:6b665972-b871-467b-a5e5-07409cefb84e 8eed9b05-e9eb-4186-8e18-74e5ebfc5b7d\r\na=ssrc:1633318641 cname:vhcrZYtXvzFBRICx\r\na=ssrc:1633318641 msid:6b665972-b871-467b-a5e5-07409cefb84e 8eed9b05-e9eb-4186-8e18-74e5ebfc5b7d\r\na=mid:0\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtcp-fb:111 transport-cc\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=sendrecv\r\na=rtcp:40605\r\na=rtcp-mux\r\n"
                }
            ]
        },
        "direction": "inbound",
        "trace_id": "9c1f453ac53cb7a337367cdceadfac31",
        "caller_name": "\"user-hNXdMqitUc7V2n3PXCtcXR\"",
        "call_sid": "3c637500-944b-410a-bcc6-c0a6616afe2b",
        "account_sid": "f4cd23c1-d5c4-4fcc-8737-3859f41a3cbe",
        "application_sid": "108d3a4c-cdfa-4632-a47b-c9e41dcdc3a3",
        "from": "user-hNXdMqitUc7V2n3PXCtcXR",
        "to": "123456789",
        "call_id": "5f301279-5e18-123c-a1a0-06f1c3f65bf4",
        "sip_status": 100,
        "sip_reason": "Trying",
        "call_status": "trying",
        "originating_sip_ip": "88.77.34.146",
        "local_sip_address": "10.1.193.108:5060",
        "service_provider_sid": "a7434703-cedb-48f4-9d67-1f39995f345e",
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