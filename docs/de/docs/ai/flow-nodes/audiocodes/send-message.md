---
 Titel: "Nachricht senden" 
 slug: "Nachricht senden" 
 ausgeblendet: false 
---
# Nachricht senden

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/audiocodes/send-message.png" width="80%" />
  <figcaption>AudioCodes Nachricht senden</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Der Knoten "Nachricht senden" sendet einen Text (optional mit SSML) an AudioCodes, der diesen Text dann in Sprache (TTS) umwandelt und an den Aufrufer ausgibt.

| Parameter | Typ | Beschreibung |
|-------------------------|-------------------------|------------------------------------------------------------------------------------------------------------|
| Text | CognigyScript mit SSML | Der Text, der an AudioCodes zurückgesendet werden soll. Kann SSML enthalten (entweder manuell oder über den mitgelieferten Editor eingegeben) |
| Aktivitätsparameter festlegen | Umschalten | Option zum Hinzufügen von Parametern, die nur für diese Aktivität gültig sind.                                       |

!!! Hinweis "Dieser Knoten unterstützt Aktivitätsparameter"
    Um mehr über Aktivitätsparameter zu erfahren, besuchen Sie unser Hilfe-Center unter: [https://support.cognigy.com/hc/en-us/articles/360017413959](https://support.cognigy.com/hc/en-us/articles/360017413959)