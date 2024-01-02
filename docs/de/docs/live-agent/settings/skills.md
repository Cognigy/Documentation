---
Titel: "Skills"
Schnecke: "Fähigkeiten"
Beschreibung: "Live-Agent-Skills sind spezifische Fähigkeiten, die menschliche Agenten besitzen, wie z. B. Sprachkenntnisse und Fachwissen in bestimmten Bereichen."
ausgeblendet: false
---

# Fertigkeiten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.60-blue.svg)] (.. /.. /release-notes/4.60.md)

_Fähigkeiten_ sind spezifische Fähigkeiten, die menschliche Agenten besitzen, wie z. B. Sprachkenntnisse und Fachwissen in bestimmten Bereichen.

Nur Benutzer mit den Rollen "Administrator" und "Supervisor" können Skills konfigurieren und zuweisen.

## Erstellen eines Skills

Gehen Sie folgendermaßen vor, um einen Skill zu erstellen:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie zu **Einstellungen > Skills**.
3. Klicken Sie in der oberen rechten Ecke auf **Skill hinzufügen**.
4. Füllen Sie im Fenster **Skill hinzufügen** die folgenden Felder aus:
    - **Typ** — Wählen Sie einen der folgenden Typen aus:
        - **Sprache** – eine Fähigkeit, die sich auf Sprachkenntnisse bezieht.
        - **Skill** – eine Skill, die sich auf spezifisches Wissen bezieht.
    - **Name** – Geben Sie einen eindeutigen Namen an, der den Skill widerspiegelt. Zum Beispiel "Englisch", "Spanisch", "Deutsch" für den Typ "Sprache" oder bestimmte Fähigkeiten wie "IT", "Personalwesen", "Kundendienst" für den Typ "Fähigkeiten".
5. Klicken Sie auf **Senden**.

Der Skill wird in der Liste auf der Seite **Skills** angezeigt.
Anschließend können Sie den hinzugefügten Skill bearbeiten oder löschen.

## Zuweisen einer Fertigkeit 

Gehen Sie folgendermaßen vor, um einem menschlichen Agenten einen Skill zuzuweisen:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Gehen Sie zu **Einstellungen > Agenten**.
3. Klicken Sie in der Zeile mit dem Agenten auf **Skills**.
4. Klicken Sie im Fenster **Skills** auf **Skill hinzufügen**.
5. Wählen Sie einen Fertigkeitstyp und seinen Wert aus. Sie können mehrere Fertigkeiten hinzufügen.
6. Klicken Sie auf **Skills hinzufügen**.

Die Skills werden in der Spalte **Skills** der Zeile mit dem Agenten angezeigt.

Wenn Sie einen Skill aus dem Raw mit dem Agenten entfernen möchten, öffnen Sie das Fenster **Skills** und klicken Sie auf ! [Kreuz] (.. /images/icons/cross.svg) auf der rechten Seite des ausgewählten Skills.

## Fähigkeiten anwenden

Um mit der Verwendung von Skills in der Konversationsweiterleitung zu beginnen, müssen Sie Ihre erstellten Skills in der [Übergabe an den Agenten](.. /.. /ai/tools/agent-handover.md) Knoten.

Wenn Sie Konversationen nur Agenten zuweisen möchten, die für ihre Fähigkeiten relevant sind, können Sie zusätzlich zum Knoten Übergabe an Agenten die Option [Agentenverfügbarkeit prüfen] (.. /.. /ai/flow-nodes/services/check-agent-availability.md) Knoten.
Wenn in diesem Fall kein relevanter Agent gefunden wird, können Sie den Benutzer benachrichtigen. Dieser Node prüft nur Online-Agenten mit den entsprechenden Fähigkeiten und führt das Routing durch.