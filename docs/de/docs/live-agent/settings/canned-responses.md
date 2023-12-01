---
Titel: "Vorgefertigte Antworten"
Slug: "Vorgefertigte Antworten"
description: "Vorgefertigte Antworten sind vorkonfigurierte Antwortvorlagen, die menschlichen Agenten helfen, während eines Gesprächs schnell zu reagieren. Diese Vorlagen unterstützen die HTML-Formatierung und ermöglichen so benutzerdefinierte und effiziente Antworten."
ausgeblendet: false
---

# Vorgefertigte Antworten

_Canned responses_ handelt es sich um vorgespeicherte Antwortvorlagen, mit denen menschliche Agenten schnell auf eine Konversation reagieren können.

Vorgefertigte Antwortvorlagen bieten Unterstützung für die HTML-Formatierung.

## Erstellen einer vorgefertigten Antwort

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.55-blue.svg)] (.. /.. /release-notes/4.55.md)

Gehen Sie folgendermaßen vor, um eine neue vorgefertigte Antwort zu erstellen:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie zu **Einstellungen > vorgefertigte Antworten**.
3. Klicken Sie in der oberen rechten Ecke auf **Vorgefertigte Antwort hinzufügen**.
4. Füllen Sie im Fenster **Vorgefertigte Antwort hinzufügen** die folgenden Felder aus:
    - **Kurzcode** — Fügen Sie ein Wort hinzu, das mit der Antwort verknüpft ist.
    - **Inhalt** — Fügen Sie eine Nachricht hinzu, die an den Benutzer gesendet wird. In dieser Meldung können Sie Benutzerkontaktprofildaten oder menschliche Agentenprofildaten durch bestimmte Variablen ersetzen, z. B<code>&lcub;&lcub;agent.name&rcub;&rcub;</code>. , , <code>&lcub;&lcub;contact.first_name&rcub;&rcub;</code><code>&lcub;&lcub;contact.email&rcub;&rcub;</code>und mehr. Um eine Variable einzuschließen, beginnen Sie mit der Eingabe <code>&lcub;&lcub;</code> in das Feld. Danach erscheint eine Liste der verfügbaren Variablen, in der Sie die gewünschte Variable auswählen können.
    - **Stufe** — Wählen Sie eine der folgenden Optionen aus der Liste aus:
        - **Global** – alle menschlichen Agenten können eine vorgefertigte Antwort verwenden.
        - **Persönlich** – nur Sie können eine vorgefertigte Antwort verwenden.
        - **Team** — nur menschliche Agens aus dem ausgewählten [Team](teams.md) können eine vorgefertigte Antwort verwenden. Sie können nur ein Team auswählen.
5. Klicken Sie auf **Senden**.

Die vorgefertigte Antwort wird in der Liste auf der Seite "Vorgefertigte Beantwortungen" angezeigt.

Alternativ können Sie eine vorgefertigte Antwort oder eine Liste vorgefertigter Antworten hinzufügen, indem Sie eine CSV-Datei importieren.

## Vorgefertigte Antworten importieren

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.52-blue.svg)] (.. /.. /release-notes/4.52.md)

Gehen Sie folgendermaßen vor, um vorgefertigte Antworten zu importieren:

1. Bereiten Sie eine CSV-Datei mit den Überschriften "short_code" und "content" vor. Zum Beispiel:
   '''txt
    | short_code | Inhalt |
    |------------|-------------------------------------|
    | Lieferung | Wann möchten Sie eine Bestellung aufgeben? |
   '''
2. Öffnen Sie die Live Agent-Oberfläche. 
3. Gehen Sie zu **Einstellungen > vorgefertigte Antworten**. 
4. Klicken Sie in der oberen rechten Ecke auf **Vorgefertigte Antwort importieren**.
5. Klicken Sie im Fenster **Vorgefertigte Antwort importieren** auf **Datei auswählen**.
6. Laden Sie die CSV-Datei hoch, die Sie zuvor erstellt haben.
7. Klicken Sie auf **Importieren**.

Die vorgefertigten Antworten werden in der Liste auf der Seite "Vorgefertigte Beantwortungen" angezeigt. 

## Verwenden Sie eine vorgefertigte Antwort

Um vorgefertigte Antworten in den Unterhaltungen zu verwenden, gehen Sie zu [Vorgefertigte Antwort senden](.. /conversation/conversation-workflow.md#send-a-canned-response).