---
Titel: "CALL_RECONNECTED"
Schnecke: "CALL_RECONNECTED"
ausgeblendet: false
---

# CALL_RECONNECTED

Der Anruf wurde aufgrund von Netzwerkproblemen wieder verbunden.

Nutzlast:

'''json
{
  "event": "CALL_RECONNECTED",
  "Nutzlast": {
    "sip": {
      "Kopfzeilen": {
        "via": "SIP/2.0/UDP 3.68.xx.xx; rport=5060; branch=z9hG4bKc9yUBva49xxxx; received=10.1.xxx.xx",
        "max-forwards": "70",
        "von": "<sip:+49xxxxxxxxxxx@3.68.22.xx:xxxx>; tag=U1c1ND6B6UNvB",
        "bis": "<sip:+49xxxxxxxxxxx@3.68.xx.xx>",
        "call-id": "ad7d47eb-cc11-123c-xxxx-xxxxxxxxxxxx",
        "cseq": "72708556 EINLADEN",
        "contact": "<sip:3.68.22.xx:xxxx>",
        "expires": "180",
        "date": "Tue, 12 Sep 2023 13:18:17 GMT",
        "timestamp": "1694524697",
        "user-agent": "Cisco-SIPGateway/IOS-17.6.5",
        "allow": "EINLADEN, OPTIONEN, TSCHÜSS, ABBRECHEN, BESTÄTIGEN, PRACK, AKTUALISIEREN, VERWEISEN, ABONNIEREN, BENACHRICHTIGEN, INFO, REGISTRIEREN",
        "supported": "100rel, timer, resource-priority, replaces, sdp-anat",
        "allow-events": "Telefon-Ereignis",
        "min-se": "900",
        "content-type": "Anwendung/SDP",
        "content-disposition": "Sitzung; handling=required",
        "content-length": "273",
        "X-Account-Sid": "4a8be367-ca76-4b40-xxxx-xxxxxxxxxxxx",
        "X-CID": "ABB20121-50A511EE-A163801E-xxxxxxxx@10.10.6.12",
        "X-Forwarded-For": "217.6.161.142",
        "X-Originating-Carrier": "Cisco-Telefonanlage",
        "X-Voip-Carrier-Sid": "05fb0a17-7868-xxxx-xxxxxxxxxxxx",
        "X-Application-Sid": "6ea22d1e-b983-4cd6-xxxx-xxxxxxxxxxxx",
        "cisco-guid": "2880529657-1352995310-xxxxxxxxx-xxxxxxxxxxxx",
        "session-id": "1c40ea29144ba4de7fa91ba01d55e03d; remote=00000000000000000000000000000000000000000000"
      },
      "raw": "EINLADEN sip:+49xxxxxxxxxxx@feature-server-headless SIP/2.0\r\nÜber: SIP/2.0/UDP 3.68.xx.xx; rport=5060; branch=z9hG4bKc9yUBva49xxxx; received=10.1.xxx.xx\r\nMax-Forwards: 70\r\nVon: <sip:+49xxxxxxxxxxx@3.68.22.xx:xxxx>; tag=U1c1ND6B6UNvB\r\nAn: \r\<sip:+49xxxxxxxxxxx@3.68.xx.xx>nAnruf-ID: ad7d47eb-cc11-123c-1d8f-06e0ed4205c1\r\nCSeq: 72708556 EINLADEN\r\nKontakt: \r\<sip:3.68.22.xx:xxxx>nLäuft ab: 180\r\nDatum: Tue, 12 Sep 2023 13:18:17 GMT\r\nZeitstempel: 1694524697\r\nUser-Agent: Cisco-SIPGateway/IOS-17.6.5\r\nZulassen: EINLADEN, OPTIONEN, TSCHÜSS, ABBRECHEN, BESTÄTIGEN, PRACK, AKTUALISIEREN, VERWEISEN, ABONNIEREN, BENACHRICHTIGEN, INFO, REGISTRIEREN\r\nUnterstützt:  100rel, Timer, Ressourcenpriorität, ersetzt, sdp-anat\r\nAllow-Events: Telefon-Ereignis\r\nMin-SE: 900\r\nContent-Type: application/sdp\r\nContent-Disposition: Sitzung; handling=required\r\nContent-Length: 273\r\nX-Account-Sid: 4a8be367-ca76-4b40-918e-96efd6a37396\r\nX-CID: ABB20121-50A511EE-A163801E-xxxxxxxx@10.10.6.12\r\nX-Weiterleitung-für: 217.6.161.142\r\nX-Originating-Carrier: Cisco PBX\r\nX-Voip-Carrier-Sid: 05fb0a17-7868-49e2-9d9f-3fcc92ed125e\r\nX-Application-Sid: 6ea22d1e-b983-4cd6-8b8e-ee4d1b8ea721\r\nCisco-GUID: 2880529657-1352995310-2707259422-3569899952\r\nSitzungs-ID: 1c40ea29144ba4de7fa91ba01d55e03d;  remote=00000000000000000000000000000000000000000000\r\n\r\nv=0\r\no=CiscoSystemsSIP-GW-UserAgent 9059 6390 IN IP4 10.1.144.121\r\ns=SIP-Anruf\r\nc=IN IP4 10.1.144.121\r\nt=0 0\r\nm=audio 59710 RTP/AVP 8 101\r\nc=IN IP4 10.1.144.121\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-15\r\na=sendrecv\r\na=rtcp:59711\r\na=ptime:20\r\n",
      "body": "v=0\r\no=CiscoSystemsSIP-GW-UserAgent 9059 6390 IN IP4 10.1.144.121\r\ns=SIP Call\r\nc=IN IP4 10.1.144.121\r\nt=0 0\r\nm=audio 59710 RTP/AVP 8 101\r\nc=IN IP4 10.1.144.121\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-15\r\na=sendrecv\r\na=rtcp:59711\r\na=ptime:20\r\n",
      "method": "EINLADEN",
      "version": "2.0",
      "uri": "sip:+49xxxxxxxxxxx@feature-server-headless",
      "Nutzlast": [
        {
          "type": "Anwendung/SDP",
          "content": "v=0\r\no=CiscoSystemsSIP-GW-UserAgent 9059 6390 IN IP4 10.1.144.121\r\ns=SIP Call\r\nc=IN IP4 10.1.144.121\r\nt=0 0\r\nm=audio 59710 RTP/AVP 8 101\r\nc=IN IP4 10.1.144.121\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:101 telephone-event/8000\r\na=fmtp:101 0-15\r\na=sendrecv\r\na=rtcp:59711\r\na=ptime:20\r\n"
        }
      ]
    },
    "direction": "eingehend",
    "trace_id": "45cc121af9b233d9c5e672f3f7232196",
    "caller_name": "",
    "call_sid": "f35585d2-9991-468b-xxxx-xxxxxxxxxxxx",
    "account_sid": "4a8be367-ca76-4b40-xxxx-xxxxxxxxxxxx",
    "application_sid": "6ea22d1e-b983-4cd6-xxxx-xxxxxxxxxxxx",
    "from": "+49xxxxxxxxxxx",
    "to": "+49xxxxxxxxxxx",
    "call_id": "AD7D47EB-CC11-123C-XXXX-XXXXXXXXXXXX",
    "sip_status": 100,
    "sip_reason": "Versuchen",
    "call_status": "versuchen",
    "originating_sip_ip": "217.6.xxx.xxx",
    "originating_sip_trunk_name": "Cisco-Telefonanlage",
    "local_sip_address": "10.1.131.xxx:xxxx",
    "service_provider_sid": "181b71ba-53b0-49db-xxxx-xxxxxxxxxxxx",
    "Vorgaben": {
      "synthesizer": {
        "vendor": "Microsoft",
        "language": "de-DE",
        "voice": "de-DE-KillianNeural"
      },
      "recognizer": { "vendor": "microsoft", "language": "de-DE" }
    }
  }
}
</sip:3.68.22.xx:xxxx></sip:+49xxxxxxxxxxx@3.68.xx.xx></sip:+49xxxxxxxxxxx@3.68.22.xx:xxxx></sip:3.68.22.xx:xxxx></sip:+49xxxxxxxxxxx@3.68.xx.xx></sip:+49xxxxxxxxxxx@3.68.22.xx:xxxx>'''