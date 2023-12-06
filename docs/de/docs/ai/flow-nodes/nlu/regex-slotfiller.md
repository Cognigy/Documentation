---
 Titel: "Regex Slot Filler" 
 Slug: "Regex-Slot-Filler" 
 ausgeblendet: false 
---
# Regex-Slot-Füller

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/nlu/regex-slot-filler.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Verwenden Sie diesen Knoten, um Slots mit regulären Ausdrücken zu füllen. Weitere Informationen zu Slots und Tags finden Sie unter [**Lexicons & Slots**]({{config.site_url}}ai/resources/build/lexicons/).

| Parameter | Typ | Beschreibung |
|-----------|-----------------------------------------------------|----------------------------------------------------|
| Regex | Regulärer Ausdruck | Der reguläre Ausdruck, der auf die Eingabeäußerung angewendet wird. |
| Flaggen | Flag-Zeichen für reguläre Ausdrücke in einer einzelnen Zeichenfolge | Flags für reguläre Ausdrücke, die Sie festlegen möchten |
| Markieren | CognigyScript | Der Tag/Slot, den Sie füllen möchten |

!!! Warnung "Regex"
    Stellen Sie sicher, dass Ihr regulärer Ausdruck mit '/' beginnt und mit '/g' endet.
    
Beispiel: '/^1\d{7}$/g'