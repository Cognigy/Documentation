---
 title: "Log-Meldung" 
 slug: "Log-Nachricht" 
 ausgeblendet: false 
---
# Log-Meldung

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/log-message.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Der Protokollmeldungsknoten schreibt eine Nachricht in die [Agentenprotokolle]({{config.site_url}}ai/resources/test/logs/);

| Parameter | Typ | Beschreibung |
|-----------|---------------|------------------------------------------------------------------|
| Nachricht | CognigyScript | Die zu protokollierende Meldung |
| Protokoll-Ebene | Wählen Sie | Die zu verwendende Protokollebene. Einer von:<br/>-Debuggen<br/>-Info<br/>- Fehler |

!!! Hinweis "Protokollieren einer Nachricht in einem Code-Knoten"
    Neben diesem Flow-Node kann man die gleiche Funktionalität in einem [Code Node]({{config.site_url}}ai/flow-nodes/code/code/) ausführen, indem man das [Actions / API-Objekt]({{config.site_url}}ai/flow-nodes/code/actions/) verwendet.