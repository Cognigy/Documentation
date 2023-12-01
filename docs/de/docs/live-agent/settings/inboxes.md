---
Titel: "Posteingänge" 
Slug: "Posteingänge" 
ausgeblendet: false 
---

# Posteingänge

_Posteingänge_ sind Arbeitsbereiche, in denen menschliche Agenten Echtzeit-Chat-Interaktionen mit Kunden abwickeln und damit verbundene Aufgaben verwalten. Jede Posteingangs-ID steht für die Verbindung von Cognigy.AI zu Live Agent. 

Sie können eine unbegrenzte Anzahl von Posteingängen in Ihrem Live Agent-Konto haben, und Sie können Konversationen anzeigen, die für einen Posteingang spezifisch sind, indem Sie darauf klicken. 

In der Einstellung Posteingang können Sie das Erscheinungsbild des Posteingangs anpassen, Agenten hinzufügen und entfernen.
Konfigurieren Sie die Sichtbarkeit von Nachrichten für sie, richten Sie das Konversationsrouting ein und fügen Sie Assistentenbots hinzu.

## Erstellen eines Posteingangs

Um einen Posteingang in Live Agent zu erstellen, gehen Sie wie folgt vor:

1. Öffnen Sie die Live Agent-Oberfläche. 
2. Gehen Sie zu **Einstellungen > Posteingänge**.
3. Klicken Sie in der oberen rechten Ecke auf **+ Posteingang hinzufügen**. Live Agent zeigt Ihnen einen Bildschirm, auf dem Sie Ihren Posteingang einrichten können. 
4. Füllen Sie auf der Seite **Posteingangseinrichtung** die folgenden Felder aus:
    - **Kanalname** — Erstellen Sie einen eindeutigen Posteingangsnamen. Zum Beispiel 'Cognigy Handover'.
    - **Webhook-URL** — Geben Sie den Cognigy.AI Endpoint Config URL-Domänennamen ein, erweitert um "/handover/liveagent". Beispiel: "https://endpoint-trial.cognigy.ai/handover/liveagent". Sie finden die URL für die Endpunktkonfiguration im Abschnitt **Konfigurationsinformationen** Ihres Endpunkts.
5. Wählen Sie in der Liste **Agenten für den Posteingang auswählen** Agenten aus, indem Sie entweder darauf klicken oder den Mauszeiger darüber bewegen und dann ++Eingabetaste++ drücken. Sie können mehrere Agenten aus der Liste auswählen. Agenten können gleichzeitig zu verschiedenen Posteingängen gehören.
6. Klicken Sie auf die Schaltfläche **Cognigy.AI Posteingang erstellen**. Nachdem Sie den Posteingang erfolgreich eingerichtet haben, werden Sie im nächsten Schritt aufgefordert, Ihre Agenten dem neuen Posteingang zuzuweisen.
7. Wählen Sie in der Auswahlliste die gewünschten Agenten aus und klicken Sie auf **Agenten hinzufügen**.

Ein neuer Live-Agent-Posteingang wurde erstellt. Sie können die Einstellungen für den Posteingang konfigurieren, indem Sie auf **Weitere Einstellungen** klicken.

Die Änderungen werden übernommen.

## Konfigurieren des Erscheinungsbilds eines Posteingangs

Gehen Sie folgendermaßen vor, um das Erscheinungsbild des Posteingangs zu konfigurieren:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie zu **Einstellungen > Posteingänge**. 
3. Klicken Sie auf der Seite **Posteingänge** rechts neben dem Posteingang, den Sie ändern möchten, auf **Einstellungen**. 
4. Im Fenster **Posteingangseinstellungen** können Sie die folgenden Felder nach Bedarf aktualisieren:
    - **Kanal-Avatar** — Laden Sie ein Bild oder Symbol hoch, das den Posteingang darstellt. Es dient der visuellen Identifikation. 
    - **Posteingangsname** — Bearbeiten Sie hier den Namen des Posteingangs, was für organisatorische Zwecke hilfreich sein kann.
5. Klicken Sie auf **Aktualisieren**.

Die Felder und Einstellungen für Posteingänge werden aktualisiert.

## Kopieren einer Posteingangs-ID

Jede Posteingangs-ID stellt die Verbindung von Cognigy.AI zu Live Agent dar und wird in API- und UI-URL-Pfadnamen verwendet.

So verbinden Sie einen Posteingang mit Cognigy.AI
Kopieren Sie die ID des Posteingangs
und geben Sie es im Abschnitt **Live Agent-Einstellungen** in der [Übergabe an den Agenten](.. /.. /ai/tools/agent-handover.md) Knoten auf der Cognigy.AI Seite.

Gehen Sie folgendermaßen vor, um eine Posteingangs-ID zu kopieren:

1. Gehen Sie zu Live Agent.
2. Wählen Sie auf der linken Seite des Bildschirms **Einstellungen**.
3. Wählen Sie in der Spalte "Einstellungen" die Option **Posteingänge** aus.
4. Wechseln Sie auf der Registerkarte **Konfiguration** zum Abschnitt **Posteingangs-ID**.
5. Klicken Sie auf **Kopieren**.

## Löschen eines Posteingangs

Das Löschen eines Posteingangs kann nicht rückgängig gemacht werden und führt zum Verlust der Synchronisierung mit Cognigy.AI.

Um einen Posteingang in Live Agent zu löschen, gehen Sie wie folgt vor:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie zu **Einstellungen > Posteingänge**. 
3. Klicken Sie auf der Seite **Posteingänge** rechts neben dem Team, das Sie löschen möchten, auf **Löschen**. 
4. Sie werden aufgefordert, den Namen des Posteingangs einzugeben, den Sie löschen möchten. 
5. Klicken Sie auf **Ja, löschen**.

Der ausgewählte Posteingang wird gelöscht.

## Steuerung der Konversationsweiterleitung innerhalb eines Posteingangs

Um die Konversationszuweisungen in Live Agent zu konfigurieren, gehen Sie wie folgt vor:

1. Gehen Sie zu Live Agent.
2. Gehen Sie zu **Einstellungen > Posteingänge**. 
3. Klicken Sie auf der Seite **Posteingänge** rechts neben dem Posteingang, den Sie ändern möchten, auf **Einstellungen** und öffnen Sie die Registerkarte **Mitarbeiter**. 
4. Aktualisieren Sie in den Abschnitten **Konversationszuweisung** die Einstellungen für die Konversationszuweisung:
    - [Automatische Zuweisung zulassen](.. /conversation/conversation-routing/automatic-mode.md#automatic-assignment)
    - [Neuzuweisung von Unterhaltungen zulassen](.. /conversation/conversation-routing/automatic-mode.md#automatische-neuzuweisung)

Die Änderungen werden erfolgreich übernommen.

## Agenten zu einem Posteingang hinzufügen

Um Agenten zu einem Posteingang hinzuzufügen, gehen Sie wie folgt vor:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie zu **Einstellungen > Posteingänge**.
3. Klicken Sie auf der Seite **Posteingänge** rechts neben dem Posteingang, den Sie ändern möchten, auf **Einstellungen**.
4. Wechseln Sie auf der Registerkarte **Mitarbeiter** zum Abschnitt **Agenten**.
5. Wählen Sie in der Agentenliste Agenten aus, indem Sie entweder darauf klicken oder den Mauszeiger darüber bewegen und dann ++Enter++ drücken. Sie können mehrere Agenten aus der Liste auswählen. Agenten können gleichzeitig zu verschiedenen Posteingängen gehören.
6. Klicken Sie auf **Aktualisieren**.

Die Änderungen werden übernommen.

## Konfigurieren des Agentenzugriffs auf alle Inbox-Konversationen

Standardmäßig können Ihre Agenten alle Nachrichten in einem Posteingang sehen. Um dieses Verhalten zu ändern, gehen Sie wie folgt vor:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie zu **Einstellungen > Posteingänge**.
3. Klicken Sie auf der Seite **Posteingänge** rechts neben dem Posteingang, den Sie ändern möchten, auf **Einstellungen** und öffnen Sie die Registerkarte **Mitarbeiter**.
4. Deaktivieren Sie im Abschnitt **Konversationszuweisung** die Einstellung **Agenten erlauben, alle Konversationen in diesem Posteingang zu sehen**.

Die Änderungen werden übernommen.

## Agenten aus einem Posteingang entfernen

Um das Erscheinungsbild des Posteingangs zu entfernen, gehen Sie wie folgt vor:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie zu **Einstellungen > Posteingänge**.
3. Klicken Sie auf der Seite **Posteingänge** rechts neben dem Posteingang, den Sie ändern möchten, auf **Einstellungen**.
4. Wechseln Sie auf der Registerkarte **Mitarbeiter** zum Abschnitt **Agenten**.
5. Entfernen Sie in der Agentenliste einen Agenten, indem Sie rechts neben dem Namen des Agenten auf **x** klicken.
6. Klicken Sie auf **Aktualisieren**.

## Füge einen Assist-Bot hinzu 

Innerhalb eines Posteingangs können Sie einen oder mehrere Assist-Bots hinzufügen, die Ihre menschlichen Agenten unterstützen.
Um einen solchen Bot zu erstellen, benötigen Sie einen separaten Flow und Endpunkt auf der Cognigy.AI Seite.
Weitere Informationen finden Sie unter [Assist Bot](.. /assistants/assist-bot.md). 

## Mehr Informationen

- [Agenten](agents.md)
- [Bot unterstützen](.. /assistants/assist-bot.md)
- [Konversations-Routing](.. /conversation/conversation-routing/overview.md)