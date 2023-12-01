---
title: "xApp-Token" 
slug: "xApp-Token" 
ausgeblendet: false
---

# xApp-Token

URLs sowie der PIN-Code für den Zugriff auf eine xApp-Sitzung werden über Cognigy-Token verfügbar gemacht.

## xApp-PIN-Seiten-URL	

Das URL-Token der xApp-Ping-Seite stellt eine URL für den Zugriff auf die PIN-Seite bereit.
Sie können diese URL abrufen, wenn die [xApp: Init-Sitzung](.. /flow-nodes/xApp/init-xApp-session.md#by-entering-a-pin-code) Node ausgeführt wird.
Diese URL ist auch über 'input.apps.baseUrl' im Eingabeobjekt erreichbar.

## xApp-Sitzungs-PIN

Das PIN-Token für die xApp-Sitzung stellt den PIN-Code für den Zugriff auf die xApp-Sitzung bereit.
Diese PIN ist auch über 'input.apps.session.pin' im Eingabeobjekt erreichbar.

Der PIN-Code ist nur 5 Minuten lang gültig, nachdem er von [xApp: Get Session PIN](.. /flow-nodes/xApp/get-xApp-session-PIN.md) Knoten.

## xApp-Sitzungs-URL

Das URL-Token der xApp-Sitzung stellt die URL für den Zugriff auf die xApp-Sitzung ohne PIN bereit.
Sie können dieses Token erhalten
Wenn die [xApp: Init Session](.. /flow-nodes/xApp/init-xApp-session.md#without-entering-a-pin-code) Node wird ausgeführt.
Diese URL ist auch über 'input.apps.url' im Eingabeobjekt erreichbar.

## Mehr Informationen

- [xApp: Sitzungs-PIN abrufen](.. /flow-nodes/xApp/get-xApp-session-PIN.md) 
- [xApps](overview.md)
- [xApp-Knoten](.. /flow-nodes/xApp/overview.md)