---
Titel: "Architektur"
slug: "xApp-Architektur"
Ausgeblendet: Wahr
---

# xApp-Architektur

Das folgende Diagramm veranschaulicht den Vorgang, wenn die xApp-Shell-Seite ihre Ressourcen (HTML/CSS/JS) lädt, indem sie statische Dateien über HTTP/HTTPs 1.1-Anforderungen an "service-static-files" anfordert und eine WebSocket-Verbindung (über Socket.io) zu "serviceapp-session-manager" herstellt, um Informationen über xApp-Sitzungen abzurufen. Zu diesen Informationen gehört ein asynchrones Ereignis zum Initialisieren einer xApp-Sitzung, das eine eindeutige URL erstellt und angibt, welche xApp in einer bestimmten xApp-Sitzung angezeigt wird. Der Elastic Load Balancer hilft bei der Verteilung des eingehenden Datenverkehrs, während Traefik den Datenverkehr basierend auf bestimmten Anforderungen dynamisch an Backend-Server weiterleitet. Der "serviceapp-session-manager" aktualisiert den xApp-Sitzungsstatus in der App-Sitzungsdatenbank, und der WebSocket überträgt Daten an die Shell-Seite, die xApps lädt und Daten für das SDK bereitstellt.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/images/xApp/architecture.png" width="100%" />
</figure>

## xApp-Sequenzdiagramm

Das Diagramm veranschaulicht die Abfolge der Interaktionen zwischen einem Benutzer, Cognigy Flow, xApp Backend und xApp Page im Kontext einer xApp-Architekturintegration.

'''Meerjungfrau
sequenceDiagram
title Cognigy xApp - typischer Ablauf von Interaktionen

actor u als User
Teilnehmer f as Cognigy Flow
participant xb als xApp Backend
participant xf als xApp-Seite

u->>f: 1. Gespräch beginnen
F aktivieren
%% f->>f: xApp-Init-Sitzung
f->> xb: 2. xApp Init-Sitzung
XB aktivieren
xb->>f: 3. xApp-Sitzungstoken
f->>f: 4. Erstellen der xApp-URL mithilfe des Tokens
f->>u: 5. "Geben Sie Ihre Daten in xApp über diese URL ein"
f->>xb: 6. xApp HTML anzeigen
XB->>XB: 7.HTML merken
u->>xf: 8. xApp-Seite öffnen
XF aktivieren
xf->>xf: 9. Ladebildschirm für das Rendern
xf->>xb: 10. Seite abrufen
xb->>xf: 11. HTML-Code der Seite
xf->>xf: 12. HTML-Seite rendern
xf->>u: 13. HTML-Seite
U->>XF: 14. Ausfüllen und Übermitteln von Daten
xf->>xf: 15. SDK.submit(Daten)
xf->>xb: 16. Daten
xf->>xf: 17. Rendern Hier gibt es nichts zu tun
XF deaktivieren
XB->>F: 18. input.data._cognigy._app.payload
XB deaktivieren
F->>F: 19. Verarbeiten von input.data
F->>U: 20. "Sie haben Ihre Daten von xApp erhalten"
F deaktivieren
'''

1. Der Benutzer beginnt eine Konversation mit einem Cognigy Flow.
2. Der Cognigy Flow initialisiert eine Sitzung mit dem xApp-Backend.
3. Das xApp-Backend antwortet mit einem Sitzungstoken.
4. Der Cognigy Flow erstellt eine URL unter Verwendung des Sitzungstokens
5. Der Cognigy Flow sendet eine Nachricht: "Geben Sie Ihre Daten über diese URL in xApp ein" an den Benutzer.
6. Der Cognigy Flow sendet eine Anfrage an das xApp-Backend, um die HTML-Seite anzuzeigen.
7. Das xApp-Backend merkt sich die HTML-Seite.
8. Der Benutzer öffnet die xApp-Seite.
9. Auf der xApp-Seite wird ein Ladebildschirm gerendert.
10. Die xApp-Seite fordert die HTML-Seite vom xApp-Backend an.
11. Das xApp-Backend antwortet mit der HTML-Seite.
12. Die xApp-Seite rendert die HTML-Seite.
13. Die HTML-Seite wird dem Benutzer angezeigt.
14. Der Benutzer füllt die Daten aus und übermittelt sie.
15. Die xApp-Seite sendet die Daten an das SDK.
16. Das SDK sendet die Daten an das xApp-Backend.
17. Die Seite "Hier ist nichts zu tun" wird gerendert.
18. Das xApp-Backend verarbeitet 'input.data._cognigy._app.payload' und sendet es als Eingabe an Cognigy Flow.
19. Der Cognigy Flow verarbeitet "input.data". 
20. Der Cognigy Flow sendet eine Nachricht "Received your data from xApp" an den Benutzer und bestätigt, dass die Daten empfangen wurden.

## Mehr Informationen

- [Übersicht](overview.md)
- [Erstellen einer xApp](build/overview.md)
- [xApp-Knoten](.. /flow-nodes/xApp/overview.md)