---
 Titel: "AudioCodes" 
 Slug: "Audiocodes" 
 ausgeblendet: false 
---
# AudioCodes

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/audiocodes-endpoint-logo.png" width="100%" />
</figure>

Innerhalb unserer **Cognigy.AI**-Plattform können Sie Ihren **Agenten** über den AudioCodes-Endpunkt mit Ihrem Contact Center oder anderen Telefonnummern verbinden, sodass Kunden mit Ihrem **Agenten** sprechen können, anstatt nur mit ihm zu schreiben.<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360017522940-Cognigy-Sessions-Building-a-Phone-Bot-with-Voice-Gateway" target="_blank">Technisches Video "Erstellen eines Telefon-Bots mit Voice Gateway"</a>
      </div>
      <div class="callout-subtext">Sehen Sie sich diese Folge von Cognigy Sessions an, um einen technischen Einblick zu erhalten      </div>
   </div>
</blockquote>## AudioCodes-Einstellungen
### Asynchroner Modus
Wenn der asynchrone Modus für den AudioCodes-Endpunkt aktiviert ist, werden die Ausgaben direkt gesendet, während sie in einem Flow verarbeitet werden. Dies kann von Vorteil sein, wenn der Flow z.B. eine HTTP-Anfrage senden muss. Wenn der asynchrone Modus deaktiviert ist, werden die Ausgaben gesendet, wenn der gesamte Flow die Verarbeitung für die angegebene Eingabe abgeschlossen hat.

Die Funktion [Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/) funktioniert nur, wenn der asynchrone Modus aktiviert ist.

## AudioCodes-spezifische Knoten

Cognigy.AI verfügt über eine große Anzahl von eingebauten Nodes, um das Verhalten von AudioCodes zu steuern. Weitere Informationen finden Sie unter [AudioCodes Nodes]({{config.site_url}}ai/flow-nodes/audiocodes/audiocodes/).

## Zahlen-Metadaten

AudioCodes identifiziert Informationen über den Aufrufer und fügt sie dem Cognigy [Input]({{config.site_url}}ai/tools/interaction-panel/input/)-Objekt als 'input.data.numberMetaData' hinzu.

| Parameter | Typ |Beschreibung|Beispiel|
| ----------- | ------------------------------------ |||
| Anzahl | Zeichenfolge |Die Telefonnummer des Anrufers, einschließlich Landesvorwahl|+4921154591991|
| Grundstücke | Zeichenfolge |Der 2-stellige Ländercode|DE|
| countryCallingCode | Zeichenfolge |Die Vorwahl des Landes|49|
| nationalNummer | Zeichenfolge |Die nationale Nummer ohne Landesvorwahl und ohne führende Null.|21154591991|
| gültig | Boolescher Wert |Ob die Nummer gültig ist|true|
| gültig | Zeichenfolge |Der Typ der Nummer. Siehe unten.|FIXED_LINE|
| URI | Zeichenfolge |Der URI für die Nummer|tel:+4921154591991|

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

!!! Hinweis "NumberMetaData in Tokens"
    Alle oben genannten sind auch als [Tokens]({{config.site_url}}ai/resources/manage/tokens/) in Cognigy Text-Feldern verfügbar.

## Generische Endpunkteinstellungen<div class="divider"></div>Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte]({{config.site_url}}ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU-Konnektoren]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Sitzungsverwaltung]({{config.site_url}}ai/endpoints/session-management/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings) 

!!! Hinweis "Contact Center & Telefonnummernverknüpfung"
    Um einen **AudioCodes** **Endpunkt** mit einer Telefonnummer zu verknüpfen, wenden Sie sich an Ihren **Cognigy**-Vertreter, um eine VG-Instanz bereitzustellen und zu konfigurieren.

!!! Warnung "AudioCodes VoiceAI Connect"
    Cognigy AudioCodes Endpoint ist zu 100 % kompatibel mit [AudioCodes VoiceAI Connect](https://voiceaiconnect.audiocodes.com), wo Sie sich kostenlos anmelden und innerhalb weniger Minuten eine Telefonnummer erhalten können.

!!! Warnung "Rebranding des Voice Gateways mit AudioCodes"
    Mit der nativen Voice-Gateway-Integration in Cognigy AI wird die AudioCodes-Implementierung von Voice Gateway in AudioCodes umbenannt. Dies gilt für die Flow-Knoten und den Endpunkt.