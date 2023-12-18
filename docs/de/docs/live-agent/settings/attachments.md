---
Titel: "Anhänge"
slug: "Anhänge" 
description: "Live Agent-Anhänge sind Dateien oder Dokumente, die während einer Konversation zwischen einem menschlichen Agenten und einem Benutzer gesendet oder empfangen werden."
ausgeblendet: false 
---
# Anhänge

_Anhänge_ sind Dateien oder Dokumente, die während einer Konversation zwischen einem menschlichen Agenten und einem Benutzer gesendet oder empfangen werden.

Diese Anhänge können verschiedene Dateitypen enthalten. 'jpeg', 'jpg', 'png', 'docx', 'wav', 'ogg', 'pdf'.

Anhänge können zusätzliche Informationen oder Medien enthalten, z. B. eine Rechnung oder ein Foto, das sich auf das Problem bezieht, mit dem ein Kunde konfrontiert ist.

## Einen Anhang hochladen

Gehen Sie folgendermaßen vor, um eine Datei in einer Konversation in Live Agent hochzuladen:

1. Gehen Sie zu Live Agent.
2. Wählen Sie auf der linken Seite des Bildschirms **Unterhaltungen** aus.
3. Wählen Sie in der Spalte **Posteingänge** einen Posteingang aus.
4. Wählen Sie Ihre Konversation aus.
5. Klicken Sie am unteren Rand des Konversationschats im Abschnitt **Dem Benutzer antworten** auf **Dateien anhängen**.
6. Wählen Sie im geöffneten Fenster die Datei aus, die Sie hochladen möchten, und klicken Sie auf **Öffnen**.
7. Wenn die Datei hochgeladen ist, klicken Sie auf **Senden**.

Die Datei wird an den Benutzer gesendet und im Chat angezeigt. Der Benutzer kann diesen Anhang herunterladen.

## Anhang anfordern

Wenn Sie einen Webchat-Endpunkt mit Live Agent verwenden, können menschliche Agenten einen Anhang von einem Benutzer anfordern.

Andere Endpunktkanäle unterstützen die Anlagenanforderungsfunktionalität nicht. Benutzer können weiterhin eine Datei hochladen, indem sie ihre integrierten Funktionen zum Hochladen von App-Dateien verwenden.

Gehen Sie folgendermaßen vor, um einen Anhang in einer Konversation in Live Agent anzufordern:

1. Gehen Sie zu Live Agent.
2. Wählen Sie auf der linken Seite des Bildschirms **Unterhaltungen** aus.
3. Wählen Sie in der Spalte **Posteingänge** einen Posteingang aus.
4. Wählen Sie Ihre Konversation aus.
5. Klicken Sie am unteren Rand des Konversations-Chats im Abschnitt **Dem Benutzer antworten** auf **Datei anfordern**.
6. Klicken Sie im geöffneten Fenster auf **Senden**. Die Datei wird vom Benutzer angefordert und die Anfrage wird im Chat angezeigt.
7. Warten Sie, bis der Anhang vom Benutzer gesendet wurde. Die Datei wird im Chat angezeigt.

Wenn die Datei hochgeladen wurde, können Sie diese Datei direkt aus dem Chat anzeigen und herunterladen.

!!! Anmerkung
    Wenn Sie [Cognigy Webchat](https://docs.cognigy.com/ai/endpoints/webchat/webchat/) verwenden, müssen Sie auch das [Datei-Upload-Plugin](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload) zum Webchat-Endpunkt hinzufügen, um Dateien hochzuladen. 

## Laden Sie einen Anhang herunter

Um einen Anhang in Live Agent herunterzuladen, kann dies entweder in einer Konversation oder auf der Seite **Anhänge** erfolgen.

=== "Seite des Anhangs"

1. Gehen Sie zu Live Agent.
    2. Wählen Sie auf der linken Seite des Bildschirms **Einstellungen**.
    3. Gehen Sie zu **Anhänge**.
    4. Gehen Sie zu der Datei, die Sie herunterladen möchten.
    5. Klicken Sie in der Spalte **AKTIONEN** auf **Herunterladen**.  

=== "Konversationsseite"

1. Gehen Sie zu Live Agent.
    2. Wählen Sie auf der linken Seite des Bildschirms **Unterhaltungen** aus.
    3. Wählen Sie in der Spalte **Posteingänge** einen Posteingang aus.
    4. Wählen Sie Ihre Konversation aus.
    5. Suchen Sie den Anhang in der Konversation und klicken Sie auf **Herunterladen**.

Die Datei wird in einem neuen Tab Ihres Browsers geöffnet. Klicken Sie auf Ihre Datei, um sie auf Ihrem lokalen Gerät zu speichern.

## Einen Anhang löschen

Gehen Sie folgendermaßen vor, um einen Anhang in Live Agent zu löschen:

1. Gehen Sie zu Live Agent.
2. Wählen Sie auf der linken Seite des Bildschirms **Einstellungen**.
3. Gehen Sie zu **Anhänge**.
4. Gehen Sie zu der Datei, die Sie herunterladen möchten.
5. Klicken Sie in der Spalte **AKTIONEN** auf **Löschen**.  
6. Bestätigen Sie den Löschvorgang.

Die Datei wird von der Seite Anhänge gelöscht und ist in der Unterhaltung, in der sie hochgeladen wurde, nicht mehr verfügbar.

## Anhänge filtern

Gehen Sie folgendermaßen vor, um Anhänge in Live Agent zu filtern:

1. Gehen Sie zu Live Agent.
2. Wählen Sie auf der linken Seite des Bildschirms **Einstellungen**.
3. Gehen Sie zu **Anhänge**.
4. Klicken Sie auf der Seite **Anhänge** auf **Anhänge filtern**
5. Wählen Sie im Fenster **Anhänge filtern** die Optionen aus, nach denen Sie filtern möchten: 
    - **Cognigy-Sitzungs-ID**
    - **Cognigy-Benutzer-ID**
    -**Dateiname**
6. Geben Sie den Wert ein, nach dem Sie filtern möchten, und klicken Sie auf **Filter anwenden**.

Optional können Sie weitere Filter hinzufügen, indem Sie auf **+ Filter hinzufügen** klicken.

Auf der Seite **Anhänge** werden nur Ergebnisse angezeigt, die dem angewendeten Filter entsprechen.

Um den Filter zu löschen, klicken Sie auf **Filter löschen**.

## Öffne die Quelle des Anhangs

Die Quelle kann "Posteingang", "Konversation" oder "Cognigy-Sitzungs-ID" sein.

Gehen Sie folgendermaßen vor, um eine Konversation oder einen Posteingang zu untersuchen, in den ein Anhang hochgeladen wurde:

1. Gehen Sie zu Live Agent.
2. Wählen Sie auf der linken Seite des Bildschirms **Einstellungen**.
3. Gehen Sie zu **Anhänge**.
4. Wechseln Sie zu der Zeile der Datei, die Sie untersuchen möchten.
5. Klicken Sie in dieser Zeile auf einen der folgenden Links:
    - **Posteingang** – die Option navigiert Sie zum Posteingang der Unterhaltung, in die der Anhang hochgeladen wurde.
    - **CONVERSATIONS** — die Option navigiert Sie zu der Konversation, in die der Anhang hochgeladen wurde.
    - **COGNIGY-SITZUNGS-ID** – Die Option navigiert Sie zu der Unterhaltung, in die der Anhang hochgeladen wurde.

## Mehr Informationen

- [Konversations-Workflow](https://docs.cognigy.com/live-agent/conversation/conversation-workflow/)