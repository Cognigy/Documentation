---
Titel: "Automatische Übersetzung" 
Slug: "Automatische Lokalisierung" 
ausgeblendet: false 
---

# Automatische Übersetzung

Cognigy hat _automatic translation_ Funktionen integriert
, um den Prozess des Anpassens von Flows und Intents für verschiedene Gebietsschemata zu optimieren.
Diese Funktion ist hilfreich für Benutzer, die mehrsprachigen Support benötigen, ohne dass manuelle Übersetzungen erforderlich sind.

Cognigy.AI ist mit den folgenden Anbietern von maschineller Übersetzung kompatibel:

-Microsoft Translator
    - Microsoft Azure Cognitive Services-Übersetzer[^*]
- Google Cloud-Übersetzung
- DeepL Übersetzung Pro

[^*]: Um **Azure Cognitive Services Translator** verwenden zu können, müssen Sie Microsoft Translator unter Einstellungen > Übersetzungseinstellungen auswählen

Diese Anbieter bieten mehrere wertvolle Vorteile:

- **Freiheit der Sprachwahl**. Sie haben die Flexibilität, Ihre bevorzugte Übersetzungssprache zu wählen.
- **Überwachte oder automatische Übersetzung**. Die Übersetzung kann je nach Bedarf manuell unter Ihrer Aufsicht durchgeführt oder automatisch ausgeführt werden.
- **Sprachfähige Übersetzung**. Unsere Übersetzungsfunktionen sind so ausgestattet, dass sie mit allen Modi umgehen können, so dass sie sprachfähig und an verschiedene Kommunikationsmethoden anpassbar sind.

## Hinzufügen eines Anbieters für maschinelle Übersetzung

{! _includes/ai/settings/add-machine-translation-provider.md !}

## Hinzufügen eines Gebietsschemas

{! _includes/ai/localization/add-locales.md !}

## Maschinelle Übersetzung für die Lokalisierung von Abläufen

In einem Flow können Sie Sprachen ändern, Flow-Knoten und Intents lokalisieren.

{! _includes/ai/localization/switch-a-locale.md !}

### Maschinelle Übersetzung für die Lokalisierung von Knoten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.61-blue.svg)] (.. /.. /release-notes/4.61.md)

Lokalisierte Knoten sind farbig, während nicht lokalisierte Knoten ausgegraut sind. Innerhalb des Flows können Sie mehrere Lokalisierungen mit Fallback-Layern für Gebietsschemata ohne Inhalt einrichten.

Sie können die Einstellungen für die maschinelle Übersetzung für alle Arten von Textausgabeknoten konfigurieren, einschließlich Sagen, Fragen und andere Knotentypen.

Gehen Sie folgendermaßen vor, um einen Knoten mithilfe der maschinellen Übersetzung zu lokalisieren:

1. Öffnen Sie nun Ihren Flow, in dem Sie Nodes lokalisieren möchten. 
2. Wählen Sie das Gebietsschema mit den nicht übersetzten Knoten aus. 
3. Klicken Sie auf einen Knoten und wählen Sie **Lokalisierung hinzufügen** aus. 
4. Wählen Sie **Übersetzte Lokalisierung hinzufügen** aus. 
5. Definieren Sie das Quellgebietsschema für Ihre Übersetzung, indem Sie eine Sprache aus der Liste **Zu übersetzendes Gebietsschema aus** auswählen. 
6. Definieren Sie die Zielsprache für die Übersetzung, indem Sie eine Sprache aus der Liste **Zu übersetzende Sprache** auswählen. 
7. Klicken Sie auf **Bestätigen**. 

Der Node wird automatisch übersetzt.
Stellen Sie sicher, dass Sie im Knoten-Editor die übersetzten Felder überprüfen.
Achten Sie auf [Tokens](.. /resources/manage/tokens.md) und [Cognigy.Script](.. /tools/cognigy-script.md), die unübersetzt bleiben sollte.

### Maschinelle Übersetzung für die Lokalisierung von Absichten

Gehen Sie folgendermaßen vor, um einen Intent mithilfe der maschinellen Übersetzung zu lokalisieren:

1. Wählen Sie in der oberen rechten Ecke des Flow-Editors **NLU** aus.
2. Wählen Sie auf der Registerkarte **Absichten** eine Absicht aus, die Sie übersetzen möchten.
3. Klicken Sie auf der Seite **Absicht** auf **Lokalisierung hinzufügen > Übersetzte Lokalisierung hinzufügen**.
4. Wählen Sie in der Liste **Zu übersetzendes Gebietsschema aus** ein Gebietsschema aus, um das Ausgangsgebietsschema für Ihre Übersetzung anzugeben. 
5. Wählen Sie in der Liste **Zu übersetzende Sprache** die Sprache des zu übersetzenden Inhalts aus.
6. Wählen Sie in der Liste **Zu übersetzende Sprache** die Sprache aus, in die der Inhalt übersetzt werden soll. 
7. Klicken Sie auf **Bestätigen**.

Intent-Beispielsätze werden automatisch übersetzt.

### Maschinelle Übersetzung für Multi-Intent-Lokalisierung

Gehen Sie folgendermaßen vor, um alle Absichten in Ihrem Flow mithilfe der maschinellen Übersetzung zu lokalisieren:

1. Wählen Sie in der oberen rechten Ecke des Flow-Editors **NLU** aus.
2. Klicken Sie auf der Registerkarte **Absichten** auf der rechten Seite der Schaltfläche **+ Absicht erstellen** auf ! [vertikale-Auslassungspunkte] (https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg) **> Lokalisierungen zu allen Absichten hinzufügen**.
3. Wählen Sie im Fenster **Lokalisierungen zu allen Absichten hinzufügen** die Option **Automatische Übersetzung aus einem anderen Gebietsschema** aus.
4. Wählen Sie in der Liste **Zu übersetzendes Gebietsschema aus** ein Gebietsschema aus, um das Ausgangsgebietsschema für Ihre Übersetzung anzugeben.
5. Wählen Sie in der Liste **Zu übersetzende Sprache** die Sprache des zu übersetzenden Inhalts aus.
6. Wählen Sie in der Liste **Zu übersetzende Sprache** die Sprache aus, in die der Inhalt übersetzt werden soll.
7. _(Optional)_ Aktivieren Sie die Einstellung **Bereits lokalisierte Intents überschreiben**, um Änderungen auf alle vorhandenen Intents innerhalb des aktuellen Flow-Gebietsschemas anzuwenden.
8. Klicken Sie auf **Bestätigen**.

Dieser Prozess stellt sicher, dass alle Absichten automatisch übersetzt werden.

## Mehr Informationen

- [Lokalisierung](.. /resources/manage/localization.md)
- [Gebietsschemaknoten wechseln](.. /flow-nodes/logic/switch-locale.md)