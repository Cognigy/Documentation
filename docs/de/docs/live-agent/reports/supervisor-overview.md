---
Titel: "Bericht des Vorgesetzten" 
Slug: "Bericht des Vorgesetzten" 
ausgeblendet: false 
---

# Supervisor-Übersichtsbericht

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.46-blue.svg)] (.. /.. /release-notes/4.46.md)

!!! Anmerkung
    Dieser Bericht ist nur mit der Option [Supervisor-Rolle](.. /roles.md#supervisor).

Dieser Bericht bietet einen Überblick über alle Konversationen, die sich auf einen bestimmten Posteingang beziehen.
einschließlich der Anzahl der Gespräche, die innerhalb der letzten 24 Stunden eingegangen sind.
Alle angezeigten Daten sind für diesen 24-Stunden-Zeitraum relevant.
Darüber hinaus finden Sie eine Übersicht über den Agentenstatus und die Metriken zur Konversationsverarbeitung.
Am Ende des Berichts befindet sich eine Liste von Gesprächen, die auf die laufende Arbeit der Agenten hinweist.

Die Zusammenfassung der wichtigsten Metriken ist in den folgenden Diagrammen dargestellt:

- [Indikatoren](#indicators)
- [Liniendiagramm](#line-Diagramm)
- [Tabellen](#tables)

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/images/LA_Supervisor_overview_1.png" width="80%" alt="Live Agent Supervisor overview" />
  <figcaption>Übersichtsbericht</figcaption>
</figure>

## Indikatoren

### Unterhaltungen öffnen

Gibt die Anzahl der Konversationen an, die den folgenden Status haben: Offen, In Warteschlange und Nicht zugewiesen.

### Heute

Gibt die Anzahl der Konversationen an, die am aktuellen Tag bearbeitet wurden.

### Status des Agenten

Gibt die Anzahl der Agenten an, die derzeit online, beschäftigt, abwesend oder offline sind.

### Umgang mit Konversationen

Die Konversationsverarbeitung gibt die folgenden Echtzeitmetriken an:

| Metriken | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  ----------------------------------------------------|
| Erste Reaktionszeit (Durchschnitt) | Die durchschnittliche Zeit, die ein Agent benötigt, um einem Kunden in einer Konversation zu antworten.                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Lösungszeit (Durchschnitt) | Die durchschnittliche Zeit, die benötigt wird, um Gespräche mit einem Kunden zu lösen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Wartezeit (Durchschnitt) | Die durchschnittliche Zeit, die eine eingehende Konversation auf die Zuweisung an einen Agenten wartet.<br>Dieser Wert ist in zwei Szenarien messbar:<br>- Wenn [Konversationen automatisch zuweisen](.. /conversation/conversation-routing/automatic-mode.md#automatic-assignment) ist für den Posteingang deaktiviert.<br>- Wenn die Option [Konversationslimit pro Agent](.. /settings/account-settings.md#conversation-limit-per-agent) aktiviert ist, und alle Agenten in einem Posteingang mit aktivierter automatischer Zuweisung sind voll ausgelastet und können keine weiteren Konversationen annehmen. |

## Liniendiagramme

### Konversations-Metriken

Zeigt Konversationsdetails in einem 24-Stunden-Zeitraster an, visualisiert durch farbige Linien:

| Liniendiagramm | Beschreibung |
|-----------------------------|-----------------------------------------------------------------|
| Eingehende Unterhaltungen | Anzahl der Konversationen, die in den letzten 24 Stunden erstellt wurden. |
| Gesprächsdauer (min) | Minuten, die es dauerte, um ein Gespräch von Anfang bis Ende zu lösen.   |
| Unterhaltungen in der Warteschlange | Anzahl der Konversationen, die keinem Agenten zugewiesen sind.      |

## Tabellen

### Unterhaltungen von Agenten

Stellt Informationen über den Status und die Leistung von Agents bereit:

| Titel | Beschreibung |
|-------------------------|--------------------------------------------------------------------|
| STATUS | Gibt den Status des Agenten an: Abwesend, Beschäftigt, Online, Offline.    |
| GEÖFFNET | Anzahl der aktiven ausstehenden Konversationen.                            |
| IN DER WARTESCHLANGE | Gibt die Anzahl der zugewiesenen Konversationen an, die warten.            |
| DURCHSCHNITTLICHE ERSTE REAKTIONSZEIT | Gibt den Durchschnittswert an, wann ein Agent zuerst geantwortet hat.         |
| DURCHSCHNITTLICHE AUFLÖSUNGSZEIT | Gibt den Durchschnittswert an, wenn ein Agent eine Konversation gelöst hat. |
| GELÖST | Gibt an, wie viele Konversationen von Agenten gelöst wurden.          |

Sie können den Status eines Agenten ändern, wenn er online ist, indem Sie auf ein Agentensymbol in der Spalte **Agent** der Tabelle klicken. Sie können wählen, ob der Status "Beschäftigt" oder "Abwesend" festgelegt werden soll. Wenn der Agent jedoch offline ist, werden alle Änderungen, die Sie an seinem Status vornehmen möchten, nicht angewendet.

Darüber hinaus können Sie die Daten in der Tabelle nach dem Status des Agenten filtern.

<figure>
<img src="{{config.site_url}}live-agent/images/LA_Supervisor_overview_2.png" width="100%" alt="Live Agent Supervisor overview 2" />
  <figcaption>Diagramm "Unterhaltungen nach Agenten"</figcaption>
</figure>

## Einen Bericht anzeigen

Um einen Bericht anzuzeigen, gehen Sie wie folgt vor:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie zu **Berichte > Übersicht**. 
3. Wählen Sie oben im Bericht in der Liste **Posteingang** einen Posteingang aus, den Sie überprüfen möchten.

Der Bericht wird mit den entsprechenden Daten aktualisiert, die sich auf den ausgewählten Posteingang beziehen.

## Mehr Informationen

- [Berichte](overview.md)
- [Admin-Berichte](admin/overview.md)