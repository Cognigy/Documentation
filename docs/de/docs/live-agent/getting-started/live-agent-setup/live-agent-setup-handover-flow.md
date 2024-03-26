---
title: "Flow-Setup" 
Slug: "Live-Agent-Setup-Handover-Flow" 
ausgeblendet: false 
---

# Richten Sie einen Cognigy.AI Flow für die Übergabe ein

Sobald Sie Ihren Endpunkt für die Übergabe an einen Live-Agenten eingerichtet haben, besteht der nächste Schritt darin, Ihren Flow innerhalb Cognigy.AI für diesen Zweck zu konfigurieren.

## Einrichten eines Flows für die Übergabe

Sobald Sie [Richten Sie Ihren Endpunkt für die Übergabe an den Live-Agenten ein](live-agent-setup-handover-endpoint.md) haben, können Sie Ihren [Flow](.. /.. /.. /ai/resources/build/flows.md) für die Übergabe an Live Agent.

Gehen Sie folgendermaßen vor, um einen Live Agent Flow zu erstellen:

1. Öffnen Sie die Cognigy.AI-Schnittstelle.
2. Klicken Sie im Menü auf der linken Seite der Cognigy.AI auf **Build > Flows**.
3. Klicken Sie auf **+ Neuer Flow**.
4. Geben Sie einen eindeutigen Namen an und geben Sie eine relevante Beschreibung an. Beispiel: "Customer Support Flow".
5. Klicken Sie auf **Erstellen**.
6. Fügen Sie im Flow-Editor einen Say-Knoten hinzu.
7. Öffnen Sie den Node-Editor, indem Sie auf den Say-Knoten klicken.
8. Geben Sie im Feld **Text** den folgenden Text ein: "Hallo, wir übergeben Sie an die Menschen".
9. Klicken Sie auf **Knoten speichern**.
10. Fügen Sie unterhalb des Knotens "Sagen" einen Knoten "Übergabe an Agent" hinzu.
11. Öffnen Sie den Node-Editor, indem Sie auf den Knoten Übergabe an Agent klicken.
12. Geben Sie im Feld **Übergabe akzeptiert** den folgenden Text ein: 'Übergabe wird durchgeführt...'
13. Füllen Sie im Abschnitt **Live Agent-Einstellungen** die folgenden Felder aus:
    - **Posteingangs-ID des Live-Agenten** – Geben Sie die Posteingangs-ID ein, die Sie im [vorherigen Schritt] erhalten haben (live-agent-setup-handover-endpoint.md#account-id-and-api-key-in-live-agent).
    - **Skills** — Geben Sie eine Liste von Skills ein, die zum Filtern der verfügbaren Agenten verwendet werden sollen. Zum Beispiel "technischer Support, Abrechnung".
    - **Sprachen** — Geben Sie eine Liste der Sprachen ein, die zum Filtern der verfügbaren Agenten verwendet werden sollen. Zum Beispiel 'Englisch, Spanisch'.
    - **Priorität** — Wählen Sie eine Priorität für die Konversation aus der Liste aus. Beispiel: "Dringend".
14. Klicken Sie auf **Knoten speichern**.

## Testen Sie Ihre Verbindung

1. Wechseln Sie zu dem Endpunkt, den Sie erstellt haben.
2. Klicken Sie auf **Demo-Webchat öffnen**.
3. Beginnen Sie die Unterhaltung, indem Sie "Hallo" eingeben und auf die Schaltfläche "Senden" klicken.

    <figure>
        <img src="{{config.site_url}}live-agent/images/LA-webchat-hi.png" width="100%" alt="Webchat Screen">
        <figcaption>Webchat-Bildschirm</figcaption>
    </figure>

4. Klicken Sie in der oberen rechten Ecke auf **Benutzermenü > Live Agent**.
5. Wählen Sie im Menü auf der linken Seite der Live Agent-Benutzeroberfläche **Konversationen** aus.
   Auf der Registerkarte **Alle** sollte die Unterhaltung, die Sie begonnen haben, in der Unterhaltungsliste angezeigt werden.
6. Öffnen Sie die Unterhaltung.
7. Senden Sie im Abschnitt **Antworten** eine Nachricht als menschlicher Agent an den Benutzer.

    <figure>
       <img src="{{config.site_url}}live-agent/images/LA-conversation-example.png" width="100%" alt="Live Agent Conversation">
       <figcaption>Live-Agenten-Konversation</figcaption>
    </figure>

8. Diese Nachricht sollte auch im Cognigy.AI Webchat-Fenster angezeigt werden.

    <figure>
        <img class="image-center" src="{{config.site_url}}live-agent/images/LA-webchat.png" width="100%" alt="Cognigy.AI Webchat">
        <figcaption>Cognigy.AI Webchat</figcaption>
    </figure>

Sie haben Ihre erste Konversation in Live Agent erfolgreich abgeschlossen.

## Wie geht es weiter?

Als Nächstes können Sie [weitere Benutzer hinzufügen](live-agent-setup-agents.md) mit den Rollen "Agent" und "Administrator" und sie den Posteingängen in Live Agent zuweisen: