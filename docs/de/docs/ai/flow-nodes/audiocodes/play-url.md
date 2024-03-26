---
 title: "URL abspielen" 
 slug: "Play-URL" 
 ausgeblendet: false 
---
# URL abspielen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/audiocodes/play-url.png" width="80%" />
  <figcaption>AudioCodes URL abspielen</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Mit dem Knoten "URL wiedergeben" können Sie eine WAV-Datei von einem URL-Speicherort abrufen und für den Benutzer wiedergeben.

| Parameter | Typ | Beschreibung |
|-------------------------|---------------|-----------------------------------------------------------------------------------------------------|
| Medien-URL | CognigyScript | Die URL zur WAV-Datei. Muss für Ihre AudioCodes-Instanz zugänglich sein.                            |
| Medienformat | Wählen Sie | Optionen:<br/>- WAV/LPCM15<br/>- raw/lpcm16 |
| Audio zwischenspeichern | Umschalten | Gibt an, ob die Audiodatei zwischengespeichert werden soll oder nicht. Durch das Caching werden zukünftige Wiedergaben beschleunigt. Standardwert: false. |
| Aktivitätsparameter festlegen | Umschalten | Option zum Hinzufügen von Parametern, die nur für diese Aktivität gültig sind |

!!! Hinweis "Dieser Knoten unterstützt Aktivitätsparameter"
    Um mehr über Aktivitätsparameter zu erfahren, besuchen Sie unser Hilfe-Center unter: [https://support.cognigy.com/hc/en-us/articles/360017413959](https://support.cognigy.com/hc/en-us/articles/360017413959)