---
 title: "xApp: Sitzungs-PIN abrufen" 
 slug: "Get-xApp-Session-PIN" 
 ausgeblendet: false 
---

# xApp: Sitzungs-PIN abrufen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/xApp/get-xApp-session-PIN.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Dieser Knoten erhält eine neue xApp-Sitzungs-PIN, auf die mit dem Befehl [xApp: Sitzungs-PIN abrufen] (.. /.. /xApp/tokens.md#xapp-session-pin) oder über 'input.apps.session.pin'.

Der PIN-Code ist nur 5 Minuten gültig.

Mit dieser PIN können sich Benutzer über eine xApp-PIN-Webseite anmelden.

### xApp-PIN-Seiten-URL

Geben Sie die URL der xApp-PIN-Seite für Benutzer frei, auf der sie die PIN eingeben können. Die URL kann im Flow mit einer [xApp-PIN-Seiten-URL](.. /.. /xApp/tokens.md#xapp-pin-page-url) Cognigy-Token.

## Mehr Informationen

- [xApp-Token](.. /.. /xApp/tokens.md)
- [xApp-Knoten](overview.md)
- [xApp: Init-Sitzung](init-xApp-session.md)
- [xApp: HTML anzeigen](set-html-xApp-state.md)
- [xApp: Adaptive Karte anzeigen](set-AdaptiveCard-xApp-state.md)