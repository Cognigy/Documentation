---
Titel: "Rollen"
Schnecke: "Rollen" 
ausgeblendet: false 
---

# Rollen

In Live Agents können menschliche Agenten drei unterschiedliche Benutzerrollen haben:

- [Agent](#agents)
- [Vorgesetzter](#supervisor)
- [Administrator](#administrator)

Diese Rollen definieren die Berechtigungen und Verantwortlichkeiten von Personen, die das Live Agents-System verwenden.

## Benutzerrollen 

### Agent

Agenten in dieser Rolle können auf Posteingänge und Konversationen zugreifen, Konversationen anderen Agenten oder sich selbst zuweisen und Konversationen lösen. Sie können nur auf die Posteingänge zugreifen, zu denen sie gehören, an Unterhaltungen in diesen Posteingängen teilnehmen, ihre Benutzerprofileinstellungen bearbeiten und vorgefertigte Antworten auf persönlicher Ebene hinzufügen. Die Zuweisung von Unterhaltungen ist auf Mitglieder des Posteingangs beschränkt.

### Vorgesetzter

Vorgesetzte haben eindeutigen Zugriff auf das Supervisor-Dashboard, um Konversationsmetriken zu beobachten, und können auch alle Posteingänge sehen und mit ihnen interagieren.

### Verwalter

Administratoren haben Zugriff auf alle Cognigy Live Agent-Funktionen, die für Ihr Konto aktiviert sind, einschließlich der Einstellungen, sowie auf alle Berechtigungen eines normalen Agenten, mit Ausnahme des Supervisor-Dashboards. Dieses Dashboard ist exklusiv für die Supervisor-Rolle.

## Berechtigungen

In den folgenden Tabellen sind die Berechtigungen für einzelne Rollen von Agenten, Supervisoren und Administratoren aufgeführt.

### Agenten

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|---------------------------------|-------|------------|---------------|
| Erstellen eines Agenten [^1] |  -    | -          | +             |
| Bearbeiten eines Agenten [^1] |  -    | -          | +             |
| Löschen eines Agenten[^1] |  -    | -          | +             |
| Zuweisen eines Agenten |  +    | +          | +             |

[^1]: Diese Berechtigung wird auf der Cognigy.AI Seite erteilt.

### Mannschaften

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|-------------------------------------|-------|------------|---------------|
| Erstellen Sie ein Team | -     | -          | +             |
| Zuweisen eines Teams innerhalb einer Konversation | +     | +          | +             |
| Bearbeiten eines Teams | -     | -          | +             |
| Löschen eines Teams | -     | -          | +             |
| Automatische Zuweisung für ein Team zulassen | -     | -          | +             |

### Posteingänge

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|--------------------------------------------|-------|------------|----------------|
| Erstellen eines Posteingangs |  -    | -          | +              |
| Bearbeiten eines Posteingangs |  -    | -          | +              |
| Löschen eines Posteingangs |  -    | -          | +              |
| Assist-Bot erstellen |  -    | -          | +              |
| Assist-Bot bearbeiten |  -    | -          | +              |
| Assist-Bot löschen |  -    | -          | +              |
| Hinzufügen von Agenten zum Posteingang |  -    | -          | +              |
| Entfernen von Agenten aus dem Posteingang |  -    | -          | +              |
| Konfigurieren von Einstellungen für die Konversationszuweisung |  -    | -          | +              |

### Unterhaltungen

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|--------------------------------------|-------|------------|---------------|
| Konversationen lösen | +     | +          | +             |
| Konversationsverlauf löschen | -     | +          | +             |
| Stummschaltung der Konversation | +     | +          | +             |
| Transkript senden | +     | +          | +             |
| Benutzerkontaktprofil bearbeiten | -     | +          | +             |
| Zuweisen eines Agenten | +     | +          | +             |
| Zuweisen eines Teams | +     | +          | +             |
| Wählen Sie Priorität | +     | +          | +             |
| Unterhaltungen filtern | +     | +          | +             |
| Unterhaltungen sortieren | +     | +          | +             |
| Suchen nach Nachrichten in Unterhaltungen | +     | +          | +             |

### Anhänge

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|------------------------------------------------|-------|------------|---------------|
| Anhänge innerhalb einer Konversation senden | +     | +          | +             |
| Anhänge innerhalb einer Konversation anfordern [^2] | +     | +          | +             |
| Anhänge anzeigen | -     | -          | +             |
| Anhänge sortieren | -     | -          | +             |
| Anhänge filtern | -     | -          | +             |
| Anhänge löschen | -     | -          | +             |
| Anhänge herunterladen | -     | -          | +             |

[^2]: Standardmäßig können menschliche Agenten keine Dateien von Benutzern anfordern. Um diese Funktion zu aktivieren, müssen Sie das Plugin [Datei-Upload](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload) im [Webchat-Endpunkt](.. /ai/endpoints/webchat/deploy-webchat-endpoint.md#persistent-menu).

### Audit-Protokolle

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|------------------------------------------------|-------|------------|---------------|
| Audit-Protokolle lesen | -     | -          | +             |

### Automatisierungsregeln

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|------------------------------------------------|-------|------------|---------------|
| Hinzufügen von Automatisierungsregeln | -     | -          | +             |
| Automatisierungsregeln bearbeiten | -     | -          | +             |
| Regeln für die Klonautomatisierung | -     | -          | +             |
| Automatisierungsregeln löschen | -     | -          | +             |
| Automatisierungsregeln aktivieren | -     | -          | +             |
| Automatisierungsregeln deaktivieren | -     | -          | +             |

### Etiketten

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|------------------------------------------------|-------|------------|---------------|
| Erstellen eines Etiketts | -     | +          | +             |
| Bearbeiten einer Beschriftung | -     | +          | +             |
| Löschen eines Labels | -     | +          | +             |
| Hinzufügen eines Labels zu einer Konversation | +     | +          | +             |

### Fertigkeiten

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|------------------------------------------------|-------|------------|---------------|
| Fertigkeiten hinzufügen | -     | +          | +             |
| Fertigkeiten bearbeiten | -     | +          | +             |
| Fertigkeiten löschen | -     | +          | +             |
| Hinzufügen von Fertigkeiten zu einem Agenten | -     | -          | +             |

### Vorgefertigte Antworten

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|---------------------------------------------|-------|------------|---------------|
| Erstellen einer vorgefertigten Antwort [^3] | +     | +          | +             |
| Verwenden einer vorgefertigten Antwort in einer Konversation | +     | +          | +             |
| Eine vorgefertigte Antwort bearbeiten [^3] | +     | +          | +             |
| Löschen einer vorgefertigten Antwort [^3] | +     | +          | +             |
| Vorgefertigte Antworten importieren [^3] | +     | +          | +             |

[^3]: Benutzer mit der Rolle "Agent" können vorgefertigte Antworten für ihre eigene Verwendung erstellen, gespeicherte Ressourcen bearbeiten und löschen, die sie erstellt haben.

### Berichte

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|--------------------------|-------|------------|---------------|
| Übersichtsbericht anzeigen | -     | +          | -             |
| Anzeigen des Posteingangsberichts | -     | +          | +             |
| Anzeigen des Agentenberichts | -     | +          | +             |
| Anzeigen des Etikettenberichts | -     | +          | +             |
| Teambericht anzeigen | -     | +          | +             |
| Berichte herunterladen | -     | +          | +             |

### Assistenten

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|--------------------------------|-------|------------|---------------|
| **LA AI Copilott** |       |            |               |
| AI Copilot Workspace aktivieren | +     | +          | +             |
| **Bot unterstützen** |       |            |               |
| Assist-Bot-Einstellungen bearbeiten | +     | +          | +             |
| Sitzung zurücksetzen | +     | +          | +             |

### Konto- und Profileinstellungen

| Aktionen | Bearbeiter | Betreuer | Sachbearbeiter |
|---------------------------------------|-------|------------|----------------|
| Kontoeinstellungen konfigurieren |   -   |     -      | +              |
| Konfigurieren von Profileinstellungen |   +   |     +      | +              |

## Rollen zuweisen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.44-blue.svg)] (.. /release-notes/4.44.md)

Sie können dem menschlichen Agenten Rollen zuweisen.

Um einen Agenten mit bestimmten Zugriffsrechten zu erstellen, führen Sie die folgenden Schritte aus:

1. Erstellen Sie einen Agenten über die [Cognigy.AI Access Control](.. /ai/tools/user-menu/access-control.md).
2. Weisen Sie dem Agenten eine der folgenden Rollen zu:
    - 'liveAgentAgent'
    - 'liveAgentSupervisor'
    - 'liveAgentAdmin' <br>Wenn Sie eine Administratorrolle in Cognigy.AI haben, müssen Sie die Administratorrolle für Ihren Benutzer nicht hinzufügen, da die Cognigy.AI Rolle bereits das Recht zum Verwalten von Live Agent enthält.
3. _(Optional)_ Fügen Sie alle zusätzlichen Rollen hinzu, die der Agent haben soll. Wenn Sie z. B. bereits über eine Rolle "liveAgentAgent" verfügen, können Sie eine Rolle "liveAgentSupervisor" hinzufügen, um den Zugriff auf den Übersichtsbericht zu ermöglichen.
4. Zeigen Sie den erstellten Benutzer in Live Agent an. Gehen Sie zu **Einstellungen > Agenten** im Live Agent-Menü.

Um die auf den Agenten angewendeten Rollen anzuzeigen, muss sich der jeweilige Agent einmal anmelden, damit die Rollen angewendet werden.

## Mehr Informationen

- [Konversations-Workflow](./Konversation/Konversations-Workflow.md)
- [Kontoeinstellungen](./settings/account-settings.md)