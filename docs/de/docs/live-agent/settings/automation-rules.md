---
Titel: "Automatisierungsregeln"
slug: "Automatisierungsregeln"
ausgeblendet: false
---

# Automatisierung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.61-blue.svg)] (.. /.. /release-notes/4.61.md)

_Automation Rules_ sind ein leistungsstarkes Werkzeug, um die Effizienz zu steigern und Prozesse zu rationalisieren, indem verschiedene Aufgaben innerhalb Ihres Workflows automatisiert werden. Mit diesen Regeln können Sie Konversationen ganz einfach bestimmten Agenten oder Teams zuweisen, Labels hinzufügen, Prioritäten anpassen und vieles mehr, ohne manuell eingreifen zu müssen. Durch die Nutzung von Automatisierungsregeln sparen Sie Zeit und Ressourcen, sodass sich Ihr Team auf seine Kernkompetenzen konzentrieren und den Zeitaufwand für Routineaufgaben minimieren kann.

## Komponenten von Automatisierungsregeln

Jede Automatisierungsregel enthält die folgenden Komponenten:

- [Veranstaltungen](#events)
- [Bedingungen](#conditions)
- [Aktionen](#actions)

### Veranstaltungen

Automatisierungsereignisse dienen als Auslöser dafür, wann Ihre Automatisierung ausgeführt werden soll.

| Veranstaltungen | Beschreibung |
|----------------------|----------------------------------------------------------------------------------------------------------------------|
| Konversation erstellt | Wird ausgelöst, wenn eine neue Konversation in Ihrem System erstellt wird. Dazu gehören Konversationen, die von allen Kanälen erstellt wurden. |
| Konversation aktualisiert | Wird ausgelöst, wenn eine Konversation aktualisiert wird.                                                                             |
| Nachricht erstellt | Wird ausgelöst, wenn eine neue Nachricht in einer Konversation erstellt wird.                                                      |
| Konversation eröffnet | Wird ausgelöst, wenn eine Konversation in Ihrem System erneut geöffnet wird.                                                             |

### Bedingungen

Bedingungen sind die Kriterien, die vor dem Ausführen der Aktion überprüft werden. Die Bedingungen werden in der Reihenfolge ausgewertet, in der sie definiert sind.

| Konditionsarten | Beschreibung | Anwendbare Veranstaltungen |
|-----------------|-----------------------------------------|----------------------------------------------------------------------------------|
| Abtretungsempfänger | Basierend auf dem Konversationsbeauftragten.         | Konversation aktualisiert, Konversation geöffnet |
| Status | Basierend auf dem Konversationsstatus.           | Konversation erstellt, Konversation aktualisiert |
| Posteingang | Basierend auf dem Posteingang der Konversation. | Konversation erstellt, Konversation aktualisiert, Konversation geöffnet, Nachricht erstellt |
| Priorität | Basierend auf der Priorität des Gesprächs.   | Konversation erstellt, Konversation aktualisiert, Konversation geöffnet |
| Mannschaft | Basierend auf dem zugewiesenen Team.             | Konversation aktualisiert, Konversation geöffnet |
| Nachrichtentyp | Basierend auf der Art der Nachricht.           | Nachricht erstellt |
| Inhalt der Nachricht | Basierend auf dem Inhalt der Nachricht.    | Nachricht erstellt |

### Aktionen

Aktionen sind Aufgaben oder Prozesse, die ausgeführt werden, wenn die Bedingungen erfüllt sind.

| Aktionen | Beschreibung |
|-----------------------|--------------------------------------------------|
| Zuweisen eines Agenten | Weist der Konversation einen bestimmten Agenten zu.    |
| Zuweisen eines Teams | Weist die Konversation einem bestimmten Team zu.     |
| Etikett hinzufügen | Fügt der Konversation eine Bezeichnung hinzu.                |
| E-Mail an Team senden | Sendet eine E-Mail-Benachrichtigung an das Team.         |
| E-Mail-Transkript senden | Sendet eine E-Mail mit dem Gesprächsprotokoll. |
| Stummschaltung der Konversation | Schaltet Benachrichtigungen für die Unterhaltung stumm.        |
| Snooze-Konversation | Unterdrückt vorübergehend die Unterhaltung.         |
| Konversation lösen | Markiert die Konversation als abgeschlossen.              |
| Anhang senden | Sendet eine Anlage an die Unterhaltung.         |
| Nachricht senden | Sendet eine Nachricht an die Unterhaltung.             |
| Änderungspriorität | Passt die Priorität der Konversation an.             |

## Erstellen einer Automatisierungsregel

Gehen Sie folgendermaßen vor, um eine Automatisierungsregel zu erstellen:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie zu **Einstellungen > Automatisierung**.
3. Klicken Sie in der oberen rechten Ecke auf **+ Automatisierungsregel hinzufügen**.
4. Geben Sie im Feld **Regelname** einen eindeutigen Namen für die Regel ein.
5. Geben Sie im Feld **Beschreibung** eine relevante Beschreibung für die Regel ein.
6. Wählen Sie in der Liste **Ereignis** das gewünschte Ereignis aus.
7. Richten Sie im Abschnitt **Bedingungen** eine Bedingung ein:
    - **Linker Operand** — Wählen Sie einen [Bedingungstyp](#automation-Bedingungstypen) aus.
    - **Operator** — ein Vergleichsoperator, der prüft, ob der Wert des linken Operanden dem Wert des rechten Operanden "gleich" oder "ungleich" ist.
    - **Rechter Operand** — Wählen Sie Werte aus, die den Bedingungstypen entsprechen. Wenn Sie z.B. 'Status' als Konditionsart wählen, können Sie mehrere Status hinzufügen, z.B. 'Offen', 'Ausstehend', 'Gelöst'.
8. _(Optional)_ Fügen Sie eine zusätzliche Bedingung hinzu, indem Sie auf **+ Bedingung hinzufügen** klicken. Wiederholen Sie die gleichen Schritte wie bei der ersten Bedingung, und wählen Sie einen der folgenden Operatoren aus:
    - **UND** — alle Bedingungen müssen erfüllt sein, damit die Gesamtbedingung wahr ist. "Bedingung A UND Bedingung B" bedeutet beispielsweise, dass sowohl "Bedingung A" als auch "Bedingung B" erfüllt sein müssen, um die Aktion auszulösen.
    - **ODER** — mindestens eine der Bedingungen muss erfüllt sein, damit die Gesamtbedingung wahr ist. Zum Beispiel bedeutet "Bedingung A ODER Bedingung B", dass die Aktion ausgelöst wird, wenn entweder "Bedingung A" oder "Bedingung B" wahr ist.
9. Wählen Sie im Abschnitt **Aktionen** eine Aktion aus. Beachten Sie, dass Sie zusätzliche Informationen angeben müssen, je nachdem, welche Art von Aktion Sie ausgewählt haben. Wenn Sie z. B. **E-Mail an ein Team senden** auswählen, müssen Sie ein Team auswählen und eine E-Mail-Vorlage schreiben.
10. _(Optional)_ Fügen Sie eine weitere Aktion hinzu.
11. Klicken Sie auf **Erstellen**.

Die Automatisierungsregel wird in der Liste der Automatisierungsregeln angezeigt und automatisch aktiviert.

Um die Regel zu deaktivieren, verschieben Sie den Kippschalter in die linke Position.

### Beispiel

Sie können mehrere Bedingungen mit dem Operator "UND" oder "ODER" verwenden, wie im folgenden Beispiel gezeigt.

Wenn AI Copilot aktiv ist und eine neue Konversation mit dem Status "Offen" erstellt wird, wird die Konversation einem Team zugewiesen.

- Name: Vertrieb
- Beschreibung: Diese Automatisierung weist dem Vertriebsteam neue **offene** Statusgespräche zu.
- Wählen Sie das Ereignis als Konversation erstellt aus.
- Fügen Sie zwei Bedingungen hinzu und kombinieren Sie sie mit dem Operator "UND":
    - Bedingung 1: Überprüfen Sie, ob der **Konversationsstatus** **Offen** ist.
    - Bedingung 2: Vergewissern Sie sich, dass der **Posteingang** auf **AI Copilot bot-default** festgelegt ist, der aus dem Dropdown-Menü ausgewählt wurde.
- Aktion hinzufügen: Weisen Sie die Konversation dem Vertriebsteam zu, indem Sie sie aus dem Dropdown-Menü auswählen. Stellen Sie sicher, dass das Vertriebsteam erstellt wurde, bevor Sie diese Aktion ausführen.

<figure>
    <img class="image-center" src="{{config.site_url}}live-agent/images/add-automation-rule.png" width="80%" />
</figure>

## Bearbeiten einer Automatisierungsregel

Um eine Automatisierungsregel zu bearbeiten, klicken Sie auf das Symbol **Bearbeiten** neben der gewünschten Automatisierungsregel in der Liste.

## Klonen einer Automatisierungsregel

Um eine Kopie einer vorhandenen Automatisierungsregel zu erstellen, klicken Sie auf das Klonsymbol in der Automatisierungsliste, die Sie kopieren möchten.
Es wird eine Replik der Automatisierungsumgebung mit den gleichen Bedingungen und Aktionen erstellt.

## Löschen einer Automatisierungsregel

Um eine Automatisierungsregel zu löschen, klicken Sie neben der gewünschten Automatisierung in der Liste auf **Löschen**. Beachten Sie, dass diese Aktion dauerhaft ist und nicht rückgängig gemacht werden kann.

## Mehr Informationen

- [Einstellungen](overview.md)
- [Arbeitsablauf der Besprechung](.. /conversation/conversation-workflow.md)
- [Konversations-Routing](.. /conversation/conversation-routing/overview.md)