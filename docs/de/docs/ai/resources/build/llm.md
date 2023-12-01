---
Titel: "LLM"
Schnecke: "llm"
Beschreibung: "Large Language Models (LLMs) in Cognigy sind fortschrittliche generative KI-Modelle, die menschenähnlichen Text auf der Grundlage von Eingaben und Kontext generieren. Sie sind auf riesige Textdaten geschult, verstehen Benutzereingaben, geben kontextuell passende Antworten, verwalten Dialoge und bieten mehrsprachige Unterstützung für ein verbessertes Konversationserlebnis."
ausgeblendet: false
---
# Großes Sprachmodell (LLM)

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.65-blue.svg)] (.. /.. /.. /release-notes/4.65.md)

[Große Sprachmodelle (LLMs)] (https://en.wikipedia.org/wiki/Large_language_model) sind eine bestimmte Art von generativen KI-Modellen, die für die Generierung von menschenähnlichem Text auf der Grundlage der bereitgestellten Eingaben und des bereitgestellten Kontexts entwickelt wurden. Diese Modelle werden mit großen Mengen an Textdaten trainiert, sodass sie Muster, Syntax und semantische Beziehungen zwischen Wörtern und Phrasen erlernen können. 

Mit LLMs können virtuelle Agenten von Cognigy Benutzereingaben auf natürliche Weise verstehen und darauf reagieren. Diese Modelle machen Gespräche ansprechender, indem sie relevante und kontextuell angemessene Antworten generieren. LLMs helfen auch bei der Verwaltung von Dialogen und der Bereitstellung mehrsprachigen Supports, um das allgemeine Gesprächserlebnis für die Benutzer zu verbessern.

## Unterstützte Modelle

In der folgenden Tabelle sind die LLMs aufgeführt, die von Cognigy unterstützt werden.

| Modelle/<br>Cognigy-Funktionen | Generierung von Absichtssätzen | KI-gestützte Ausgaben | Generierung von Lexikonen | Flow-Generierung | GPT-Konversationsknoten | LLM-Eingabeaufforderungsknoten & Suchextrakt-Ausgabeknoten | Node-Ausgabe generieren | Wissenssuche | Stimmungsanalyse |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------|---------------------|--------------------|-----------------|-----------------------|----------------------------------------------|----------------------|------------------|--------------------|
| **Microsoft Azure OpenAI** |                            |                     |                    |                 |                       |                                              |                      |                  |                    |
| gpt-3.5-turbo (ChatGPT) | +                          | +                   | +                  | +               | +                     | +                                            | +                    | -                | +                  |
| GPT-3.5-turbo-instruct | -                          | -                   | -                  | -               | -                     | +                                            | -                    | -                | -                  |
| GPT-4 | -                          | -                   | -                  | -               | -                     | +                                            | -                    | -                | -                  |
| text-davinci-003 ([Veraltet](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/legacy-models#gpt-35)) | +                          | +                   | +                  | +               | +                     | +                                            | +                    | -                | -                  |
| text-embedding-ada-002 | -                          | -                   | -                  | -               | -                     | -                                            | -                    | +                | -                  |
| **OpenAI** |                            |                     |                    |                 |                       |                                              |                      |                  |                    |
| gpt-3.5-turbo (ChatGPT) | +                          | +                   | +                  | +               | +                     | +                                            | +                    | -                | +                  |
| GPT-3.5-turbo-instruct | -                          | -                   | -                  | -               | -                     | +                                            | -                    | -                | -                  |
| GPT-4 | -                          | -                   | -                  | -               | -                     | +                                            | -                    | -                | -                  |
| text-davinci-003 ([veraltet](https://platform.openai.com/docs/deprecations/2023-07-06-gpt-and-embeddings)) | +                          | +                   | +                  | +               | +                     | +                                            | +                    | -                | -                  |
| text-embedding-ada-002 | -                          | -                   | -                  | -               | -                     | -                                            | -                    | +                | -                  |
| **Anthropisch** |                            |                     |                    |                 |                       |                                              |                      |                  |                    |
| claude-v1-100k | -                          | -                   | -                  | -               | -                     | +                                            | -                    | -                | -                  |
| claude-instant-v1 | -                          | -                   | -                  | -               | -                     | +                                            | -                    | -                | -                  |
| **Google** |                            |                     |                    |                 |                       |                                              |                      |                  |                    |
| text-bison-001 (Barde) | -                          | -                   | -                  | -               | -                     | +                                            | -                    | -                | -                  |
| **Aleph Alpha** |                            |                     |                    |                 |                       |                                              |                      |                  |                    |
| Leucht-Erweiterte-Steuerung | -                          | -                   | -                  | -               | -                     | +                                            | -                    | -                | -                  | 

## Hinzufügen eines Modells

Gehen Sie folgendermaßen vor, um Cognigy.AI ein Modell hinzuzufügen:

{! _includes/ai/generative-ai/credentials.md !}

## Anwenden eines Modells

{! _includes/ai/generative-ai/apply-model.md !}

## Klonen eines Modells

Gehen Sie folgendermaßen vor, um eine Kopie des vorhandenen Modells zu erstellen:

1. Wechseln Sie zu **Build > LLM**.
2. Bewegen Sie den Mauszeiger über das vorhandene Modell und klicken Sie auf! [vertikale-Auslassungspunkte] (https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg).
3. Wählen Sie **Klonen** aus der Liste aus.

Das Modell enthält die gleichen Einstellungen wie das ursprüngliche. 

## Ein Modell als Standard festlegen

Durch das Festlegen eines Standardmodells wird ein reibungsloser Übergang sichergestellt, wenn ein bestimmtes Modell entfernt wird. Es garantiert, dass immer ein Modell verfügbar ist, um kompatible Anwendungsfälle zu behandeln, auch wenn das zugewiesene Modell entfernt wird.

Gehen Sie folgendermaßen vor, um ein Modell als Standard festzulegen:

1. Wechseln Sie zu **Build > LLM**.
2. Bewegen Sie den Mauszeiger über das vorhandene Modell und klicken Sie auf! [vertikale-Auslassungspunkte] (https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg).
3. Wählen Sie **Als Standard festlegen** aus der Liste aus.

Die Einstellung wird auf das ausgewählte Modell angewendet.

## Exportieren eines Modells als Paket

Um ein Modell in anderen Agents wiederzuverwenden, können Sie das Modell packen.

Gehen Sie folgendermaßen vor, um ein Modell zu packen:

1. Wechseln Sie zu **Build > LLM**.
2. Bewegen Sie den Mauszeiger über das vorhandene Modell und klicken Sie auf! [vertikale-Auslassungspunkte] (https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg).
3. Wählen Sie **Paket erstellen** aus. 
4. Sobald das Paket erstellt wurde, wird eine neue [Aufgabe](.. /agents/tasks.md) mit dem Titel **Paket erstellen** ausgeführt werden. Um die Aufgabe anzuzeigen, klicken Sie auf ! [Aufgaben-Menü] (.. /.. /assets/icons/task-menu.svg) in der oberen rechten Ecke.

Wenn die Aufgabe abgeschlossen ist, wird das Paket heruntergeladen.

## Löschen eines Modells

Beachten Sie, dass ein [Standardmodell](#set-a-model-as-default) nicht gelöscht werden kann. Vor dem Löschen müssen Sie das Standard-Tag entfernen.

Um ein Modell zu löschen, gehen Sie folgendermaßen vor:

1. Wechseln Sie zu **Build > LLM**.
2. Bewegen Sie den Mauszeiger über das vorhandene Modell und klicken Sie auf! [vertikale-Auslassungspunkte] (https://docs.cognigy.com/assets/icons/vertical-ellipsis.svg).
3. Wählen Sie **Löschen**. 
4. Bestätigen Sie den Löschvorgang. Funktionen, die auf diesem Modell basieren, funktionieren nicht mehr, wenn kein Standardmodell für die Unterstützung dieser Funktionen konfiguriert ist.

Das Modell wird aus der Liste gelöscht.

## Mehr Informationen

- [Generative KI](.. /.. /generative-ai.md)
- [Wissens-KI](.. /.. /wissens-ai/übersicht.md)