---
Titel: "CALL_CREATED"
Schnecke: "CALL_CREATED"
ausgeblendet: false
---

# CALL_CREATED

Der Benutzer hat einen Anruf erstellt.

Um eine Nutzlast mit dem Ereignis "CALL_CREATED" zu testen, können Sie einen leeren Flow verwenden.

Eingabe: Starten Sie einen Anruf über das Interaction Panel, indem Sie auf ! [Telefon] (.. /.. /.. /assets/icons/phone.svg) **> Anruf starten**.

Nutzlast:

'''json
{
    "Nutzlast": {
        "sip": {
            "Kopfzeilen": {
                "via": "SIP/2.0/UDP-3.72.xxx.xxx; rport=xxxx;branch=z9hG4bKZrpS3gBX84UXD; received=10.1.xxx.xxx",
                "max-forwards": "70",
                "from": "\"user-hNXdMqitUc7V2n3PXCxxxx\" <sip:user-hNXdMqitUc7V2n3PXCxxxx@3.72.xxx.xxx:xxxx>; tag=yHKc002meZ0Sg",
                "bis": "<sip:123456789@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai>",
                "call-id": "5f301279-5e18-123c-xxxx-xxxxxxxxxxxx",
                "cseq": "66662680 EINLADEN",
                "contact": "<sip:3.72.xxx.xxx:xxxx>",
                "user-agent": "JsSIP 3.9.1",
                "allow": "EINLADEN, BESTÄTIGEN, ABBRECHEN, TSCHÜSS, AKTUALISIEREN, NACHRICHT, OPTIONEN, VERWEISEN, INFO, BENACHRICHTIGEN",
                "supported": "Timer, Eis, ersetzt, ausgehend",
                "content-type": "Anwendung/SDP",
                "content-length": "994",
                "X-Account-Sid": "f4cd23c1-d5c4-4fcc-xxxx-xxxxxxxxxxxx",
                "X-CID": "6q8lhgc2sa1n80dlxxxx",
                "X-Forwarded-For": "88.77.xx:xxxx",
                "X-Application-Sid": "108d3a4c-cdfa-4632-xxxx-xxxxxxxxxxxx",
                "X-Authenticated-User": "user-hNXdMqitUc7V2n3PXCxxxx@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai"
            },
            "raw": "LADE sip:123456789@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai SIP/2.0 ein\r\nÜber: SIP/2.0/UDP 3.72.xxx.xxx; rport=xxxx;branch=z9hG4bKZrpS3gBX84UXD; received=10.1.xxx.xxx\r\nMax-Forwards: 70\r\nVon: \"user-hNXdMqitUc7V2n3PXCxxxx\" <sip:user-hNXdMqitUc7V2n3PXCxxxx@3.72.xxx.xxx:xxxx>; tag=yHKc002meZ0Sg\r\nAn: \r\<sip:123456789@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai>nCall-ID: 5f301279-5e18-123c-xxxx-xxxxxxxxxxxx\r\nCSeq: 66662680 EINLADEN\r\nKontakt: \r\<sip:3.72.xxx.xxx:xxxx>nUser-Agent: JsSIP 3.9.1\r\nZulassen: EINLADEN, BESTÄTIGEN, ABBRECHEN, BYE, UPDATE, NACHRICHT, OPTIONEN, REFERIEREN, INFO, BENACHRICHTIGEN\r\nUnterstützt: Timer, Eis, Ersetzen, Ausgehend\r\nInhaltstyp: application/sdp\r\nInhaltslänge: 994\r\nX-Konto-Sid:  f4cd23c1-d5c4-4fcc-xxxx-xxxxxxxxxxxx\r\nX-CID: 6q8lhgc2sa1n80dlxxxx\r\nX-weitergeleitet für: 88.77.xx:xxxx\r\nX-Application-Sid: 108d3a4c-cdfa-4632-xxxx-xxxxxxxxxxxx\r\nX-authentifizierter-Benutzer: user-hNXdMqitUc7V2n3PXCxxxx@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai\r\n\r\nv=0\r\no=- 864095444741402xxxx 2 IN IP4 10.1.xxx.xxx\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 6b665972-b871-467b-xxxx-xxxxxxxxxxxx\r\nm=audio 40604 RTP/AVP 111 9 0 8 13 110 126\r\ nc=IN IP4 10.1.xxx.xxx\r\na=extmap:1 urn:ietf:params:rtp-hdrext: ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=ssrc:1633318641 cname:vhcrZYtXvzFBRICx\r\na=ssrc:1633318641 msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\ na=mid:0\r\na=rtpmap:111 opus/48000/2\r\na=FMTP:111 minptime=10; useinbandfec=1\r\na=rtcp-fb:111 transport-cc\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=sendrecv\r\na=rtcp:40605\r\na=rtcp-mux\r\n",
            "body": "v=0\r\no=- 864095444741402xxxx 2 IN IP4 10.1.xxx.xxx\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 6b665972-b871-467b-xxxx-xxxxxxxxxxxx\r\nm=audio 40604 RTP/AVP 111 9 0 8 13 110 126\r\nc=IN IP4 10.1.xxx.xxx\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:  ietf:params:rtp-hdrext:sdes:mid\r\na=msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=ssrc:1633318641 cname:vhcrZYtXvzFBRICx\r\na=ssrc:1633318641 msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=mid:0\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10; useinbandfec=1\r\na=rtcp-fb:111 transport-cc\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=sendrecv\r\na=rtcp:40605\r\na=rtcp-mux\r\n",
            "method": "EINLADEN",
            "version": "2.0",
            "uri": "sip:123456789@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai",
            "Nutzlast": [
                {
                    "type": "Anwendung/SDP",
                    "content": "v=0\r\no=- 864095444741402xxxx 2 IN IP4 10.1.xxx.xxx\r\ns=-\r\nt=0 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 6b665972-b871-467b-xxxx-xxxxxxxxxxxx\r\nm=audio 40604 RTP/AVP 111 9 0 8 13 110 126\r\nc=IN IP4 10.1.xxx.xxx\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:  ietf:params:rtp-hdrext:sdes:mid\r\na=msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=ssrc:1633318641 cname:vhcrZYtXvzFBRICx\r\na=ssrc:1633318641 msid:6b665972-b871-467b-xxxx-xxxxxxxxxxxx 8eed9b05-e9eb-4186-xxxx-xxxxxxxxxxxx\r\na=mid:0\r\na=rtpmap:111 opus/48000/2\r\na=fmtp:111 minptime=10; useinbandfec=1\r\na=rtcp-fb:111 transport-cc\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=sendrecv\r\na=rtcp:40605\r\na=rtcp-mux\r\n"
                }
            ]
        },
        "direction": "eingehend",
        "trace_id": "9c1f453ac53cb7a337367cdceadfac31",
        "caller_name": "\"user-hNXdMqitUc7V2n3PXCxxxx\"",
        "call_sid": "3c637500-944b-410a-xxxx-xxxxxxxxxxxx",
        "account_sid": "f4cd23c1-d5c4-4fcc-xxxx-xxxxxxxxxxxx",
        "application_sid": "108d3a4c-cdfa-4632-xxxx-xxxxxxxxxxxx",
        "from": "user-hNXdMqitUc7V2n3PXCxxxx",
        "to": "123456789",
        "call_id": "5f301279-5e18-123c-xxxx-xxxxxxxxxxxx",
        "sip_status": 100,
        "sip_reason": "Versuchen",
        "call_status": "versuchen",
        "originating_sip_ip": "88.77.xx:xxxx",
        "local_sip_address": "10.1.193.xxx:xxxx",
        "service_provider_sid": "a7434703-cedb-48f4-xxxx-xxxxxxxxxxxx",
        "Vorgaben": {
            "synthesizer": {
                "vendor": "Microsoft",
                "language": "en-US",
                "voice": "de-US-JennyNeural"
            },
            "Erkennung": {
                "vendor": "Microsoft",
                "language": "en-US"
            }
        }
    },
    "event": "CALL_CREATED"
}
</sip:3.72.xxx.xxx:xxxx></sip:123456789@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai></sip:user-hNXdMqitUc7V2n3PXCxxxx@3.72.xxx.xxx:xxxx></sip:3.72.xxx.xxx:xxxx></sip:123456789@realm-bk7wngxs9jzgn5pwslxxxx.cognigy.ai></sip:user-hNXdMqitUc7V2n3PXCxxxx@3.72.xxx.xxx:xxxx>'''