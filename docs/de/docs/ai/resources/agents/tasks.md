---
Titel: "Aufgaben" 
slug: "Aufgaben"
Beschreibung: "Cognigy-Aufgaben sind spezifische Aktivitäten, wie z. B. das Trainieren von Intents, das Importieren von Snapshots oder das Erstellen eines neuen Agenten. Eine Aufgabe ist ein asynchroner Prozess, der im Hintergrund ausgeführt werden kann und mit dem Benachrichtigungssystem verknüpft ist."
ausgeblendet: false 
---

# Aufgaben

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.65-blue.svg)] (.. /.. /.. /release-notes/4.65.md)

_Tasks_ sind spezifische Aktivitäten, wie z. B. das Trainieren von Intents, das Importieren von Snapshots oder das Erstellen eines neuen Agenten. Eine Aufgabe ist ein asynchroner Prozess, der im Hintergrund ausgeführt werden kann und dem Benachrichtigungssystem zugeordnet ist.

## Aufgabenbereich

Der Aufgabenbereich bietet einen Überblick über aktuelle und frühere Aufgaben.
dient als allgemeines Änderungsprotokoll für relevante Aktivitäten.
Es ist zugänglich, indem Sie auf das **Task**-Symbol klicken! [Aufgaben-Menü] (.. /.. /.. /assets/icons/task-menu.svg) oben rechts auf der Cognigy.AI Benutzeroberfläche.<div class="right-image">
  <img class="image-center" src="{{config.site_url}}ai/resources/images/toolbar_taskmenu.png">
</div>Im Aufgabenbereich werden sowohl laufende als auch abgeschlossene Aufgaben angezeigt.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/task-panel.png"/>
</figure>

Um zur Quelle der gestarteten Aufgabe zu navigieren, klicken Sie auf die Aufgabe in der Liste.

Beachten Sie, dass nur die letzten 100 Aufgaben im Aufgabenbereich angezeigt werden.
So zeigen Sie Aufgaben an, die über die letzten 100 hinausgehen:
Verwenden Sie die API-Anforderung [Get Tasks](https://api-trial.cognigy.ai/openapi#get-/v2.0/tasks).
Wenn Sie die API-Anfrage stellen, geben Sie die Parameter "limit" und "skip" an.
Wenn Sie z. B. möchten, dass die vorherigen 100 Aufgaben nicht in der Benutzeroberfläche angezeigt werden,
Setzen Sie 'limit' auf '100' und 'skip' auf '100'.
Das bedeutet:
Sie beantragen, die ersten 100 Aufgaben zu überspringen
und zeigen Sie die nächsten 100 an, um die vorhergehenden Aufgaben anzuzeigen, die auf der Benutzeroberfläche nicht sichtbar sind.

## Benachrichtigungen

Nachdem eine Aufgabe abgeschlossen ist, erhalten Sie in der oberen rechten Ecke der Cognigy.AI Benutzeroberfläche eine der folgenden Benachrichtigungen:

- **Erfolgsmeldung**. Diese Benachrichtigung wird angezeigt, wenn eine Aufgabe erfolgreich abgeschlossen wurde.
- **Fehler-Benachrichtigung**. Diese Benachrichtigung wird angezeigt, wenn bei einer Aufgabe ein Fehler auftritt und ein Fehler auftritt. Die Benachrichtigung enthält eine Beschreibung des Problems.