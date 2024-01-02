---
 title: "xApp: Adaptive Karte anzeigen" 
 slug: "Set-AdaptiveCard-xApp-State" 
 ausgeblendet: false 
---

# xApp: Adaptive Karte anzeigen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/xApp/set-AdaptiveCard-xApp-state.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Eine xApp-Seite kann erstellt werden, indem eine adaptive Karte im JSON-Format bereitgestellt wird.

Um Daten zurück an den Flow zu senden, müssen Sie eine Aktion vom Typ "Senden" in die adaptive Karte einfügen.

Um übermittelte Daten anzuzeigen, verwenden Sie den Bereich "Interaktion". Sie können auf die übermittelten Daten im Objekt "data" zugreifen, indem Sie auf **INFO > Eingabe** klicken, oder im Chat, indem Sie einen Say-Knoten hinzufügen und oder <code>Submit payload: &lcub;&lcub;JSON.stringify(ci.data)&rcub;&rcub;</code>angeben.<code>Submit payload: &lcub;&lcub;JSON.stringify(input.data)&rcub;&rcub;</code>

{! _includes/ai/xApp/custom-node.md !}

### AdaptiveCard-Definition

Der [Designer adaptiver Karten](https://adaptivecards.io/designer) kann Ihnen dabei helfen, eine adaptive Karte zu definieren. Kopieren Sie die JSON-Kartennutzlast und fügen Sie sie in das Formular ein.

### Stil-Außerkraftsetzungen

Um die Farben des Hintergrunds und des Interaktionselements zu überschreiben, verwenden Sie CSS-Farbcodes.

### Warteverhalten

Um auf eine Benutzereingabe zu warten, z. B. wenn der Benutzer auf der Bestellseite auf "Senden" klickt, aktivieren Sie die Option **Warteverhalten**.
Sie können das Eingabeergebnis im Context speichern und die Daten in den anderen Nodes verwenden.

## Mehr Informationen

- [xApps](.. /.. /xApp/overview.md)
- [xApp-Knoten](overview.md)
- [xApp: Init-Sitzung](init-xApp-session.md)
- [xApp: Sitzungs-PIN abrufen](get-xApp-session-PIN.md)
- [xApp: HTML anzeigen](set-html-xApp-state.md)