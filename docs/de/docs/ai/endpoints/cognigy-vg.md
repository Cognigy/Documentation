---
Titel: "Cognigy Voice Gateway" 
Schnecke: "Cognigy-VG" 
ausgeblendet: false 
---

# Cognigy Voice Gateway

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.65-blue.svg)] (.. /.. /release-notes/4.65.md)

## Übersicht

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/dea6737-bdb5548-EP_Voice_Gateway.png" width="100%" />
</figure>

Innerhalb unserer **Cognigy.AI** Plattform können Sie Ihren **Agent** über unser **VoiceGateway** mit Ihrem Contact Center oder anderen Telefonnummern verbinden, so dass Kunden mit Ihrem **Agent** sprechen können, anstatt ihm nur zu schreiben.

## Voice-Gateway-spezifische Knoten

Cognigy.AI verfügt über integrierte Nodes zur Steuerung des Voice Gateways. Weitere Informationen finden Sie unter [Voice Gateway-Knoten](.. /flow-nodes/vg/voice-gateway.md) für weitere Informationen.

## Metadaten aufrufen

Voice Gateway identifiziert Informationen über den Anrufer und fügt sie dem Cognigy [Input Object](.. /tools/interaction-panel/input.md) als 'input.data.numberMetaData'.

| Parameter | Typ | Beschreibung | Beispiel |
|--------------------|---------|--------------------------------------------------------------------------|--------------------|
| Kopfzeilen | JSON | Die SIP-Header des Aufrufs auf INVITE, einschließlich benutzerdefinierter Header | Siehe Beispiel unten |
| Anzahl | Zeichenfolge | Die Telefonnummer des Anrufers, einschließlich der Landesvorwahl | +4921154591991 |
| Grundstücke | Zeichenfolge | Der 2-stellige Ländercode | DE |
| countryCallingCode | Zeichenfolge | Die Vorwahl des Landes | Nr. 49 |
| nationalNummer | Zeichenfolge | Die nationale Nummer ohne Ländervorwahl und ohne führende Null. | 21154591991 |
| gültig | Boolescher Wert | Ob die Nummer gültig ist | Wahr |
| gültig | Zeichenfolge | Der Typ der Nummer. Siehe unten.                                           | FIXED_LINE |
| URI | Zeichenfolge | Der URI für die Zahl | Tel.:+4921154591991 |

'numberMetaData.type' kann einer der folgenden Werte sein:

- PREMIUM_RATE
- TOLL_FREE
- SHARED_COST
- VOIP
- PERSONAL_NUMBER
-PIEPSER
- UAN
- VOICEMAIL
- FIXED_LINE_OR_MOBILE
- FIXED_LINE
-MOBIL

'''json
{
  "from": "<caller-phone-number>",
  "bis": "<sip-destination>",
  "call-id": "<id-value>",
  "allow": "BENACHRICHTIGEN, OPTIONEN, TSCHÜSS, EINLADEN, BESTÄTIGEN, ABBRECHEN, VERWEISEN",
  "X-Custom-Headers": "<custom-headers-value>",
  "X-Originating-Carrier": "<carrier-name>",
  "X-Voip-Carrier-Sid": "<id-value>",
  "X-Twilio-AccountSid": "<id-value>",
  "X-Twilio-CallSid": "<id-value>",
  "other-properties": "..."
}
'''

!!! Hinweis "NumberMetaData in Tokens"
    Alle oben genannten sind auch als [Tokens]({{config.site_url}}ai/resources/manage/tokens/) in Cognigy Text-Feldern verfügbar.

## Ereignisse aufrufen

Ermöglicht die Aktivierung von Anrufereignissen für einen Flow.
Wählen Sie ein Anrufereignis aus dem Menü [Voice Gateway-Ereignisse](.. /.. /voicegateway/references/events/overview.md) Liste.
Dieses Ereignis, das die Aktion auslöst.

Wenn Sie das gleiche Anrufereignis sowohl im Endpunkt als auch in der [Suche](.. /flow-nodes/logic/lookup.md) verwenden, überschreiben die Endpunkteinstellungen die Knoteneinstellungen.

### Einstellungen für Anrufereignisse

!!! Anmerkung
    Wie bei allen anderen Endpunkteinstellungen können Sie die Einstellungen für Anrufereignisse im Endpunkt im Interaktionsbereich nicht testen.

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | 
|--------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Aktion | Selektor | Wählen Sie die Aktion aus, die ausgeführt werden soll, wenn das Anrufereignis erkannt wird: <br> - **In aktuellen Flow injizieren**: Fügt die definierte Text- und Datennutzlast in den aktuellen Flow ein. <br> - **Flow ausführen** — Löst einen ausgewählten Flow aus, wenn das Anrufereignis erkannt wird. <br> - **Keine** — Es wird keine Aktion ausgeführt, wenn das Anrufereignis erkannt wird. <br> - **Transfer** — einen Anruf weiterleiten im Fall [TRANSFER_DIAL_ERROR](.. /.. /voicegateway/references/events/TRANSFER_DIAL_ERROR.md) oder [TRANSFER_REFER_ERROR](.. /voicegateway/references/events/TRANSFER_REFER_ERROR.md)-Aufrufereignisse auftreten. Diese Aktion für Anrufereignisse ist ähnlich wie [Anruffailover](#call-Failover) konfiguriert. |
| Text-Payload | Zeichenfolge | Geben Sie den Text ein, der an Ihren Flow gesendet wird. Diese Option ist nur für die Aktion **In aktuellen Fluss injizieren** verfügbar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Daten-Payload | JSON | Geben Sie die Daten, die an Ihren Flow gesendet werden, im JSON-Format an. Diese Option ist nur für die Aktion **In aktuellen Fluss injizieren** verfügbar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | 
| Flow ausführen | Selektor | Führen Sie den ausgewählten Flow aus. Die Flow-Ausführung wird danach beendet. Nur für die Aktion **Flow ausführen** verfügbar.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

## Anruf-Failover

Der Abschnitt Call Failover dient zur Behandlung von Laufzeitfehlern, die während der Ausführung eines Flows auf der Cognigy.AI Seite auftreten.

!!! info "Verfügbarkeit von Funktionen"
    - Wenn Sie eine SaaS Cognigy-Installation verwenden, wenden Sie sich an das Support-Team, um diese Funktion zu aktivieren.
    - Wenn Sie eine On-Premise-Installation von Cognigy verwenden, aktivieren Sie diese Funktion, indem Sie 'FEATURE_ENABLE_ENDPOINT_CALL_FAILOVER' in 'values.yaml' hinzufügen.

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Art der Übertragung |
|-----------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Failover aktiviert | Umschalten | Wenn diese Option aktiviert ist, wird die folgende Konfiguration verwendet, um im Falle eines Laufzeitfehlers eine Übertragung durchzuführen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | -             |
| Art der Übertragung | Dropdown-Liste | Es gibt zwei Übertragungsarten: <br> - **Refer** — Weiterleiten eines bestehenden Anrufs. <br> - **Wählen** — Erstellen eines neuen ausgehenden Anrufs. Wenn Sie diesen Typ verwenden möchten und noch über die alte Node-Version verfügen, fügen Sie im Flow-Editor einen neuen Voice Gateway Transfer Node hinzu und übertragen Sie die erforderlichen Einstellungen manuell vom alten Node.                                                                                                                                                                                                                                                                                                                                                                   | -             | 
| Begründung | CognigyScript | Der Grund für die Übergabe. Sie wird in den Voice Gateway-Protokollen angezeigt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Alle | 
| Ziel | CognigyScript | E.164-Syntax oder ein SIP-URI werden unterstützt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Alle | 
| Anrufer-ID | Anzahl | Die Anrufer-ID. Einige Mobilfunkanbieter, wie z. B. Twilio, verlangen eine registrierte Nummer für ausgehende Anrufe.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Zifferblatt |
| Wählmusik | Internetadresse | Benutzerdefiniertes Audio oder Rückruf, das dem Anrufer vorgespielt wird, während der ausgehende Anruf klingelt.  Es werden nur die Formate ".wav" oder ".mp3" unterstützt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Zifferblatt | 
| Zeitüberschreitung | Anzahl | Die Zeitspanne (in Sekunden), die der virtuelle Agent klingelt, bevor ein [no-answer](.. /.. /voicegateway/references/events/NO_ANSWER.md) Zeitüberschreitung. Der Standardwert ist 60 Sekunden.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Zifferblatt |
| Failover-Transkription aktiviert | Umschalten | Wenn diese Option aktiviert ist, werden Transkriptionen im Falle einer fehlgeschlagenen Anrufweiterleitung versucht.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Zifferblatt |
| STT-Anbieter | Selektor | Wählen Sie den gewünschten STT-Lieferanten aus. Verwenden Sie für benutzerdefinierte Zeichen alle Kleinbuchstaben wie Microsoft, Google, AWS, Nuance oder Deepgram.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Zifferblatt |
| STT-Sprache | Selektor | Wählen Sie die gewünschte STT-Sprache aus. Verwenden Sie für benutzerdefinierte Sprachen das folgende Format: de-DE, fr-FR, en-US.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Zifferblatt |
| STT-Interpunktion deaktivieren | Umschalten | Dieser Parameter ist nur aktiv, wenn Google oder Deepgram in der Einstellung STT-Anbieter ausgewählt ist.<br><br> Verhindert, dass die STT-Antwort des virtuellen Agenten Satzzeichen enthält.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Zifferblatt |
| Deepgram-Stufe | Dropdown-Liste | Dieser Parameter ist nur aktiv, wenn Deepgram in der Einstellung STT Vendor ausgewählt ist. <br><br> Wählen Sie eine Ebene für Ihre API-Anforderung aus, und stellen Sie sicher, dass das Modell für die ausgewählte STT-Sprache verfügbar ist. Ausführliche Informationen zu Deepgram-Stufen finden Sie in der [Deepgram-Dokumentation](https://developers.deepgram.com/docs/tier).                                                                                                                                                                                                                                                                                                                                                      | Zifferblatt |
| Deepgram-Modell | Dropdown-Liste | Dieser Parameter ist nur aktiv, wenn Deepgram in der Einstellung STT Vendor ausgewählt ist. <br><br> Wählen Sie ein Modell für die Verarbeitung von gesendetem Audio aus. Jedes Modell ist einer Ebene zugeordnet. Stellen Sie sicher, dass der ausgewählte Tarif für die ausgewählte STT-Sprache verfügbar ist.  Ausführliche Informationen zu Deepgram-Modellen finden Sie in der [Deepgram-Dokumentation](https://developers.deepgram.com/docs/model).                                                                                                                                                                                                                                                                                              | Zifferblatt |
| Endpunkte | Umschalten | Dieser Parameter ist nur aktiv, wenn Deepgram in der Einstellung STT Vendor ausgewählt ist. <br><br> Die Endpointing-Funktion von Deepgram überwacht Streaming-Audio für lange Pausen, die das Ende der Rede signalisieren. Wenn ein Endpunkt erkannt wird, werden die Vorhersagen abgeschlossen und das Transkript zurückgegeben, wobei der Parameter "speech_final" auf "true" festgelegt ist.  Ausführliche Informationen zu Deepgram Endpointing finden Sie in der [Deepgram-Dokumentation](https://developers.deepgram.com/docs/endpointing).<br><br>Die Dauer für die Erkennung des Sprachendes ist mit einem Standardwert (10 Millisekunden) vorkonfiguriert. Wenn Sie diesen Wert ändern möchten, verwenden Sie die Einstellung Endpunktzeit. | Zifferblatt |
| Endpunkt-Zeit | Anzahl | Dieser Parameter ist nur aktiv, wenn Deepgram in der Einstellung "STT-Anbieter" ausgewählt und der Schalter "Endpunkte" aktiviert ist. <br><br> Passen Sie die Dauer (in Millisekunden) für die Erkennung des Endes der Sprache an. Der Standardwert ist 10 Millisekunden Stille. Transkripte werden gesendet, nachdem Stille erkannt wurde, und das System wartet, bis der Sprecher fortfährt oder die erforderliche Stillezeit erreicht ist. Sobald eine der beiden Bedingungen erfüllt ist, wird ein Transkript zurückgesendet, wobei "speech_final" auf "true" gesetzt ist.                                                                                                                                                                                                   | Zifferblatt |
| Intelligente Formatierung | Umschalten | Dieser Parameter ist nur aktiv, wenn Deepgram in der Einstellung STT Vendor ausgewählt ist. <br><br> Die Smart-Format-Funktion von Deepgram wendet zusätzliche Formatierungen auf Transkripte an, um sie für die menschliche Lesbarkeit zu optimieren. Die Funktionen von Smart Format variieren je nach Modell. Wenn die intelligente Formatierung aktiviert ist, wendet Deepgram immer die beste verfügbare Formatierung für das von Ihnen gewählte Modell, die Ebene und die Sprachkombination an. Detaillierte Beispiele finden Sie in der [Deepgram-Dokumentation](https://developers.deepgram.com/docs/smart-format). <br><br> Beachten Sie, dass bei aktivierter intelligenter Formatierung die Interpunktion aktiviert wird, auch wenn Sie die Einstellung STT-Interpunktion deaktivieren aktiviert haben.  | Zifferblatt |
| Google-Modell | Dropdown-Liste | Dieser Parameter ist nur aktiv, wenn Google in der Einstellung STT-Anbieter ausgewählt ist.<br><br>Verwendet eines der Google Cloud Speech-to-Text-Transkriptionsmodelle, wobei das "latest_short"-Modell die Standardwahl ist. Eine detaillierte Liste der Google-Modelle finden Sie im Abschnitt [Transkriptionsmodelle](https://cloud.google.com/speech-to-text/docs/transcription-model#transcription_models) in der Google-Dokumentation. Beachten Sie, dass es sich bei dem Standardwert um einen Google-Modelltyp handelt, der verwendet werden kann, wenn andere Modelle nicht für Ihr spezifisches Szenario geeignet sind.                                                                                                                                 | Zifferblatt |
| Transkriptions-Webhook | Internetadresse | Der Webhook wird mit einem HTTP POST ausgelöst, wenn eine Zwischen- oder Abschlusstranskription empfangen wird. Verwendet die Standarderkennung.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Zifferblatt |
| STT-Etikett | CognigyScript | Der alternative Name des Anbieters ist der, den Sie [im Voice Gateway Self-Service Portal angeben](.. /.. /voicegateway/webapp/applications.md#add-additional-tts-and-stt-vendor). Wenn Sie mehrere Sprachdienste desselben Anbieters erstellt haben, verwenden Sie die Bezeichnung, um anzugeben, welcher Dienst verwendet werden soll.                                                                                                                                                                                                                                                                                                                                                                                      | Zifferblatt |
| Auswahl des Audio-Streams | Selektor | Wählen Sie die Quelle des Audiostreams aus: <br> - **Anrufer/Angerufen** - sowohl die eingehenden als auch die ausgehenden Audiostreams des Anrufers und des angerufenen Teilnehmers. <br> - **Anrufer** - der ein- und ausgehende Audiostream des Anrufers. <br>- **Angerufen** - der ein- und ausgehende Audiostream des angerufenen Teilnehmers. <br> <br> Stellen Sie sicher, dass der ausgewählte Audiostream mit der für die Transkription angegebenen Sprache übereinstimmt. Wenn kein Audiostream bereitgestellt wird, verwendet das System den am Anfang eingestellten Stream, der auch mit der für die Transkription angegebenen Sprache übereinstimmen sollte.                                                                                                                         | Zifferblatt |
| Benutzerdefinierte SIP-Header für die Übertragung | Umschalten | Daten, die als SIP-Header in der generierten SIP-Nachricht gesendet werden müssen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Alle |

## Generische Endpunkteinstellungen

Informieren Sie sich auf den folgenden Seiten über die allgemeinen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte](overview.md)
- [Datenschutz & Analyse](data-protection-and-analytics.md)
- [Transformator-Funktionen](Transformatoren/Transformatoren.md)
- [NLU-Anschlüsse](.. /resources/build/nlu-connectors.md)
- [Sitzungsverwaltung](session-management.md)
- [Einstellungen für Echtzeitübersetzung](real-time-translation-settings.md)

!!! Hinweis "Contact Center & Telefonnummernverknüpfung"
    Um Ihr Contact Center oder Ihre Telefonnummer an Ihren Voice Gateway-Endpunkt weiterzuleiten, kontaktieren Sie uns per E-Mail an support@cognigy.com.

!!! Warnung "Rebranding des Voice Gateways mit AudioCodes"
    Mit der nativen Voice-Gateway-Integration in Cognigy AI wird die AudioCodes-Implementierung von Voice Gateway in AudioCodes umbenannt. Dies gilt für die Flow-Knoten und den Endpunkt.</id-value></id-value></id-value></carrier-name></custom-headers-value></id-value></sip-destination></caller-phone-number>