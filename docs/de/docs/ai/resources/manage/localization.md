---
Titel: "Lokalisierung" 
slug: "Lokalisierung" 
ausgeblendet: false 
---

# Lokalisierung

Cognigy.AI bietet eine robuste Lokalisierungsfunktion für eine einfache Anpassung und Wiederverwendung von Inhalten.

In der Lokalisierungsansicht können Sie mehrere Gebietsschemata konfigurieren.
Wenn für ein Gebietsschema kein Inhalt konfiguriert ist, greift das System automatisch auf ein anderes Gebietsschema zurück, in dem dies der Fall ist.

Sie können zwar später weitere Gebietsschemata für die Inhaltslokalisierung hinzufügen, beachten Sie jedoch, dass das primäre Gebietsschema nicht mehr geändert werden kann, sobald es ausgewählt ist.

Sie können Ihren Flow auf zwei Arten lokalisieren:

- [Standard-Lokalisierung](#standard-Lokalisierung)
- [Lokalisierung mit maschineller Übersetzung](.. /.. /tools/auto-localization.md) (Anmeldeinformationen des Anbieters sind erforderlich)

## Standard-Lokalisierung

Bei der Standardlokalisierung lokalisieren Sie Nodes und Intents manuell ohne maschinelle Übersetzung.

### Hinzufügen eines Gebietsschemas zu einem Agenten

{! _includes/ai/localization/add-locales.md !}

### Lokalisieren eines Flows

1. Wechseln Sie zum vorhandenen Flow, indem Sie **Build > Flows** auswählen.
2. Wählen Sie in der oberen linken Ecke des Flow-Editors ein Gebietsschema aus, das Sie kürzlich erstellt haben. 

Wenn Sie die Lokalisierung wechseln, ändert der Flow sein Aussehen.
Ausgegraute Knoten zeigen an, dass sie noch nicht lokalisiert wurden. 

{! _includes/ai/localization/switch-a-locale.md !}

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/compare-localization-in-flows.jpg" width="100%" />
</figure>

Jetzt müssen Sie jeden Knoten separat lokalisieren.

#### Hinzufügen eines Gebietsschemas zu einem Knoten

Gehen Sie folgendermaßen vor, um einen Knoten manuell zu lokalisieren:

1. Wählen Sie im Flow-Editor einen Knoten aus, den Sie lokalisieren möchten.
2. Wenn der Node noch nicht lokalisiert ist, klicken Sie im Node-Editor auf **Lokalisierung hinzufügen**. Wenn der Knoten zuvor lokalisiert wurde, löschen Sie eine vorherige Lokalisierung, indem Sie auf ! [vertikale-Auslassungspunkte] (.. /.. /.. /assets/icons/vertical-ellipsis.svg) **> Lokalisierung entfernen**.
3. Wählen Sie eine der folgenden Optionen aus:
    - **Leere Lokalisierung hinzufügen** – erstellt ein neues Gebietsschema für den ausgewählten Knoten ohne Inhalt. Dies ist nützlich, wenn Sie eine neue Übersetzung oder einen neuen Inhalt für einen bestimmten Node bereitstellen möchten.
    - **Kopieren von** — Kopiert den Inhalt aus einem vorhandenen Gebietsschema desselben Knotens oder einer anderen Quelle. Dies ist nützlich, wenn Sie Inhalte aus einem anderen Gebietsschema wiederverwenden oder duplizieren möchten.
4. Füllen Sie die entsprechenden Felder mit Text aus, der dem ausgewählten Gebietsschema entspricht.
5. Klicken Sie auf **Knoten speichern**.

#### Hinzufügen eines Gebietsschemas zu einem Intent

Gehen Sie folgendermaßen vor, um ein Intent zu lokalisieren:

1. Wählen Sie in der oberen rechten Ecke des Flow-Editors **NLU** aus.
2. Wählen Sie auf der Registerkarte **Absichten** eine Absicht aus, die Sie lokalisieren möchten.
3. Klicken Sie auf der Seite **Absicht** auf **Lokalisierung hinzufügen**. Wenn die Absicht zuvor lokalisiert wurde, löschen Sie ein vorheriges Gebietsschema, indem Sie auf ! [vertikale-Auslassungspunkte] (.. /.. /.. /assets/icons/vertical-ellipsis.svg) **> Lokalisierung entfernen**.
4. Wählen Sie eine der folgenden Optionen aus:
    - **Leere Lokalisierung hinzufügen** – Erstellen Sie ein neues Gebietsschema für die ausgewählte Absicht ohne Inhalt. Dies ist nützlich, wenn Sie eine neue Übersetzung oder einen neuen Inhalt für eine bestimmte Absicht bereitstellen möchten.
    - **Kopieren von** – Kopieren Sie den Inhalt aus einem vorhandenen Gebietsschema desselben Intent oder einer anderen Quelle. Dies ist nützlich, wenn Sie Inhalte aus einem anderen Gebietsschema wiederverwenden oder duplizieren möchten.
5. Klicken Sie auf **Modell erstellen**.
6. Klicken Sie auf **Speichern**.

#### Hinzufügen eines Gebietsschemas zu mehreren Absichten

Gehen Sie folgendermaßen vor, um alle Absichten in Ihrem Flow zu lokalisieren:

1. Wählen Sie in der oberen rechten Ecke des Flow-Editors **NLU** aus.
2. Klicken Sie auf der Registerkarte **Absichten** auf der rechten Seite der Schaltfläche **+ Absicht erstellen** auf ! [vertikale-Auslassungspunkte] (.. /.. /.. /assets/icons/vertical-ellipsis.svg) **> Lokalisierungen zu allen Absichten hinzufügen**.
3. Wählen Sie im Fenster **Lokalisierungen zu allen Absichten hinzufügen** eine der folgenden Optionen aus:
    - **Leer erstellen** – erstellt ein neues Gebietsschema für die ausgewählte Absicht ohne Inhalt. Dies ist nützlich, wenn Sie eine neue Übersetzung oder einen neuen Inhalt für Absichten bereitstellen möchten.
    - **Aus einem anderen Gebietsschema kopieren** – Kopieren Sie den Inhalt aus einem vorhandenen Gebietsschema desselben Intent oder einer anderen Quelle. Dies ist nützlich, wenn Sie Inhalte aus einem anderen Gebietsschema wiederverwenden oder duplizieren möchten.
4. _(Optional)_ Aktivieren Sie die Einstellung **Bereits lokalisierte Intents überschreiben**, um Änderungen auf alle vorhandenen Intents innerhalb des aktuellen Flow-Gebietsschemas anzuwenden.
5. Klicken Sie auf **Modell erstellen**. 
6. Klicken Sie auf **Speichern**.

## Mehr Informationen

- [Automatische Übersetzung](.. /.. /tools/auto-localization.md)
- [Gebietsschemaknoten wechseln](.. /.. /flow-nodes/logic/switch-locale.md)