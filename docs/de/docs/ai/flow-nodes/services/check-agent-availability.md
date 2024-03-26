---
Titel: "Agentenverfügbarkeit prüfen"
Slug: "Agenten-Verfügbarkeit prüfen"
description: "Der Knoten "Agentenverfügbarkeit prüfen" überprüft die Verfügbarkeit von Agenten mit bestimmten Fähigkeiten. Mit diesem Node können Sie Ihren Flow verwalten, z. B. Benachrichtigungen an den Benutzer senden, dass der Agent gerade nicht verfügbar ist, oder eine alternative Antwort vorschlagen."
ausgeblendet: false
---

# Agentenverfügbarkeit prüfen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/services/check-agent-availability.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Dieser Knoten prüft die Verfügbarkeit von Agenten mit bestimmten Fähigkeiten. 
Mit diesem Node können Sie Ihren Flow verwalten,
Senden Sie z. B. Benachrichtigungen an den Benutzer, dass der Agent im Moment nicht verfügbar ist,
oder schlagen Sie eine alternative Antwort vor.

Der Knoten Agentenverfügbarkeit prüfen unterstützt die folgenden Übergabeanbieter:

- [Cognigy Live-Agent](#live-Agent)
- [Genesys Cloud](#genesys-Cloud)
- [Chatwoot](#chatwoot)

## Einstellungen

### Live-Agent 

| Parameter | Typ | Beschreibung |
|---------------------|---------------|-------------------------------------------------------------------------------|
| Fertigkeiten | CognigyScript | Eine Liste von Fertigkeiten, die zum Filtern der verfügbaren menschlichen Agenten verwendet werden sollten.    |
| Posteingangs-ID des Live-Agenten | CognigyScript | Die ID Ihres Posteingangs in Live Agent.                                           |
| Sprachen | CognigyScript | Eine Liste der Sprachen, die zum Filtern der verfügbaren menschlichen Agenten verwendet werden sollen. |

### Genesys Cloud

| Parameter | Typ | Beschreibung |
|-----------------|------|-------------------------------------------------------------------------------------|
| Fertigkeiten | Liste | Eine Liste von Fertigkeiten, die zum Filtern der verfügbaren menschlichen Agenten verwendet werden sollten.          |
| Profil Kompetenzen | Liste | Eine Liste von Profilfertigkeiten, die zum Filtern der verfügbaren menschlichen Agenten verwendet werden sollen.  |
| Sprachkenntnisse | Liste | Eine Liste von Sprachkenntnissen, die zum Filtern der verfügbaren menschlichen Agenten verwendet werden sollten. |

### Chatwoot

| Parameter | Typ | Beschreibung |
|-------------------|---------------|----------------------------------|
| Chatwoot Posteingangs-ID | CognigyScript | Die ID unseres Posteingangs in Chatwoot. |

### Speicheroptionen

| Parameter | Typ | Beschreibung |
|-------------------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Wo soll das Ergebnis gespeichert werden? | Wählen Sie | Der Speicher für die Suchergebnisse. Wählen Sie einen Speicher aus:<br> - **Input** — der Inhalt wird im Input-Objekt gespeichert.<br> - **Kontext** — der Inhalt wird im Kontext gespeichert. |
| Eingabetaste zum Speichern des Ergebnisses | CognigyScript | Der Speicherort im Eingabeobjekt, an dem das Ergebnis gespeichert wird. Beispiel: 'input.knowledgeSearch'.                                                                                |
| Eingabekontext zum Speichern des Ergebnisses | CognigyScript | Der Speicherort im Kontextobjekt, an dem das Ergebnis gespeichert wird. Beispiel: "context.knowledgeSearch".                                                                            |

### Fehlerbehandlung

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|-------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Fehlerprotokollierung | Wählen Sie | Sie können eine der Optionen für die Fehlerprotokollierung auswählen:<br>- **Fehler nicht protokollieren** – die Einstellung lässt nicht zu, dass Fehler protokolliert werden. Es eignet sich für Umgebungen, in denen die Fehlerverfolgung nicht erwünscht ist, z. B. Produktionssysteme, um saubere Protokolle zu erhalten.<br>- **Fehlercodes und Antworten protokollieren** – Die Einstellung zeichnet wichtige Informationen auf, einschließlich Fehlercodes wie HTTP-Statuscodes und die vom Server empfangenen Antworten. Es ist nützlich für die grundlegende Fehlerbehebung und das Verständnis von Fehlerkontexten.<br>- **Vollständige Fehler protokollieren und Nutzlasten anfordern**: Die Einstellung bietet eine umfassende Fehlerprotokollierung. Es erfasst nicht nur Fehlercodes und Antworten, sondern protokolliert auch die vollständigen Fehlermeldungen oder -details und die gesamte an den Server gesendete Anforderungsnutzlast. Seien Sie vorsichtig mit dieser Option, da sie vertrauliche Daten offenlegen kann. Dies ist am vorteilhaftesten für tiefgreifendes Debuggen und Diagnosen. |
| Flow-Ausführung bei Fehler abbrechen | Umschalten | Hält die Flow-Ausführung bei HTTP-Statuscodes an, die größer als 299 sind.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Beispiel

Gehen Sie folgendermaßen vor, um einen einfachen Flow mit dem Knoten "Agentenverfügbarkeit prüfen" zu erstellen:

1. Fügen Sie im Flow-Editor einen Knoten **Agentenverfügbarkeit prüfen** hinzu.
2. Geben Sie im Knoteneditor **Agentenverfügbarkeit prüfen** die erforderlichen Werte ein. Für den Live Agent-Übergabeanbieter müssen Sie z. B. **Live Agent-Posteingangs-ID**, **Skills** und **Sprachen** angeben, die Ihnen beim Sortieren der verfügbaren Agenten helfen.
3. Klicken Sie auf **Speichern** Knoten.
4. Fügen Sie unterhalb des Knotens Agentenverfügbarkeit prüfen einen IF-Knoten hinzu.
5. Öffnen Sie den IF-Node-Editor.
6. Klicken Sie im Feld **Bedingung** auf ! [Marke] (.. /.. /.. /assets/icons/token.svg) und wählen Sie das Token **Verfügbare Agenten** aus.
7. Geben Sie die Bedingung **> 0** an.
8. Klicken Sie auf **Knoten speichern**.
9. Fügen Sie unter Ihrem untergeordneten **Dann**-Knoten einen **Übergabe-zu-Agent**-Knoten hinzu. Geben Sie die erforderlichen Werte für Ihren Übergabeanbieter ein. Für den Live Agent-Übergabeanbieter müssen Sie z. B. **Live Agent-Posteingangs-ID**, **Fähigkeiten** und **Sprachen** angeben, mit denen Sie die Konversation an verfügbare Agenten weiterleiten können.
10. Klicken Sie auf **Knoten speichern**.
11. Fügen Sie unter dem untergeordneten **Else**-Knoten einen **Say**-Knoten hinzu. 
12. Geben Sie im **Say**-Knoten-Editor im Feld **Text** den folgenden Text an: "Alle unsere Agenten unterstützen derzeit andere Kunden. Bitte versuchen Sie es später noch einmal." 
13. Klicken Sie auf **Knoten speichern**.

Um Ihren Flow zu testen, verwenden Sie [Demo Webchat](.. /.. /endpoints/webchat/integrated-demo-page.md).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/services/check-agent-availability-flow.png" width="100%" />
</figure>

## Mehr Informationen

- [Agent an Übergabeknoten](.. /.. /übergabe-anbieter/live-agent-handover.md)
- [IF-Knoten](.. /logic/if.md)
- [Knoten sagen](.. /message/say.md)