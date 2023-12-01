---
 Titel: "Intervall" 
 slug: "Intervall" 
 ausgeblendet: false 
---
# Intervall

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/interval.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Ein Intervallknoten wird nur dann verwendet, um einen Teil des Flows auszuführen, wenn er nicht innerhalb einer bestimmten Zeitspanne ausgeführt wurde.

Nur wenn ein Intervallknoten nicht innerhalb der definierten Zeitspanne ausgeführt wurde, werden seine untergeordneten Knoten ausgeführt, andernfalls wird er übersprungen.

Zu Beginn einer Sitzung sind alle Intervallknoten aktiv.

| Parameter | Typ | Beschreibung |
|-----------|---------------|------------------------|
| Intervall | CognigyScript | Zeit (in Millisekunden) |