---
 title: "Slots in den Kontext kopieren" 
 slug: "copy-slots-to-context" 
 ausgeblendet: false 
---
# Slots in den Kontext kopieren

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/nlu/copy-slots-to-context.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Der Knoten Slots in Kontext kopieren wird verwendet, um einen gefundenen Slot an einer bestimmten Stelle im Kontext zu speichern.

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                     |
|-----------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Schlüssel | CognigyScript | Die Stelle im Kontext, an der der gefundene Slot gespeichert werden soll.                                                                                                                                                                                 |
| Markieren | CognigyScript | Das Tag des Slots, der im Kontext gespeichert werden soll, wenn er gefunden wird (z.B. ein Lebensmittel).                                                                                                                                                                 |
| Modus | Wählen Sie | Kann entweder ''einfach'' oder ''array'' sein. Wenn ''simple'', dann wird nur der zuletzt gefundene Slot gespeichert, und wenn der Modus ''array'' ist, dann werden alle gefundenen Slots mit dem richtigen Tag als Array gespeichert.                                           |
| UseNeg | Umschalten | Wenn 'true', dann werden nur positive Slots zum Kontext hinzugefügt. Das bedeutet, dass im Satz "Ich mag keine Pizza" "Pizza" nicht im Kontext gespeichert wird, da es negiert wird. Wenn der Schalter "false" ist, wird "Pizza" gespeichert. |

!!! Hinweis "Umgang mit mehreren Slots mit Arrays"
    Nehmen wir an, Sie erstellen einen Copy Slots To Context Node mit einem ''Schlüssel'' von ''foods'', einem ''tag'' von 'food'' von ''mode'' von 'array'' und ''UseNeg'' als ''false'. Anschließend hängen Sie ein Lexikon mit den Schlüsselwörtern "Salat" und "Pizza" mit dem Tag "Essen" an. Wenn ein Benutzer dann sagt: "Ich möchte eine Pizza und einen Salat bestellen", dann werden die Keyphrases "Pizza" und "Salat" in einem Array im Context unter dem Schlüssel "Lebensmittel" gespeichert.