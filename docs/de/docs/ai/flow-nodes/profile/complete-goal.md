---
Titel: "Ziel abschließen"
Slug: "Vollständiges Ziel"
ausgeblendet: false
---
# Ziel abschließen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/complete-goal.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Der Knoten "Ziel abschließen" legt ein bestimmtes Ziel als abgeschlossen fest, wenn der Kontakt den Knoten erreicht.

Um mit der Verwendung dieses Knotens zu beginnen, fügen Sie ihn unter dem Knoten hinzu, der die Aktion ausführt.

Das abgeschlossene Ziel wird im Profil und in Analytics des Kontakts gespeichert.

Ziele sind nützlich bei der Analyse von Meilensteinen in den Benutzerprofilen mit OData oder bei der Übergabe an Cognigy Live Agent. Sie können [Top-Ziele](.. /.. /.. /insights/dashboard-engagement.md#goals-reached) im Insights Engagement-Dashboard. Wenn Sie keine Benutzerprofile analysieren möchten und eine gezieltere Analyse mit dem [Insights Step Explorer](.. /.. /.. /insights/step-explorer.md), dann wären Analytics-Schritte besser geeignet.

Der Unterschied zwischen einem vollständigen Ziel und einem Analyseschritt liegt in ihrem Zweck und ihrer Verwendung innerhalb eines Systems. Ziele abschließen bestimmen, ob ein Benutzer ein bestimmtes Ziel oder eine bestimmte Aufgabe abgeschlossen hat. Im Gegensatz dazu sammeln Analytics-Schritte Daten über einzelne Ereignisse oder Aktionen zu Analysezwecken. Vollständige Zielvorhaben sind mit dem Profil eines Nutzers verknüpft, während sich Analytics-Schritte auf das Verfolgen und Speichern von Dateninformationen konzentrieren.

## Einstellungen

| Parameter | Typ | Beschreibung |
|-----------|---------------|-------------------------------------------------------------------------------|
| Ziel | CognigyScript | Der Name des Ziels, das abgeschlossen sein soll, wenn der Kontakt den Knoten erreicht. |

## Anwendungsfälle

### Auftragserteilung

Wenn ein Benutzer den Bestellvorgang erfolgreich abgeschlossen hat, können Sie den Knoten "Ziel abschließen" verwenden, um das Ziel "Auftragserteilung" als abgeschlossen zu markieren.

Dieses Ziel hilft Ihnen, die Anzahl der erfolgreichen Bestellungen durch Kunden zu verfolgen.

### Konto-Registrierung

Wenn ein Benutzer ein Konto erstellen muss, können Sie den Knoten "Ziel abschließen" verwenden, um anzugeben, dass das Ziel "Kontoregistrierung" erreicht wurde.

Dieses Ziel hilft Ihnen, die Anzahl der erfolgreichen Kontoregistrierungen über den Chatbot zu verfolgen.

### Terminbuchung

Wenn ein Benutzer einen Termin bucht, können Sie den Knoten "Ziel abschließen" verwenden, um den Abschluss des Terminbuchungsprozesses anzuzeigen.

Dieses Ziel hilft Ihnen, die Anzahl der erfolgreichen Termine zu verfolgen, die über den Chatbot geplant wurden.

### Informationsbeschaffung

Wenn ein Benutzer bestimmte Informationen vom Chatbot sucht, z. B. Produktdetails oder FAQ-Antworten, können Sie den Knoten "Ziel abschließen" verwenden, um das Ziel "Information Retrieval" als abgeschlossen zu markieren.

Dieses Ziel ermöglicht es Ihnen, erfolgreiche Interaktionen beim Abrufen von Informationen zu verfolgen.

## Beispiel

Das Beispiel zeigt, wie Sie die Effektivität des Chatbots in Ihrem Kunden-Callcenter messen können. Sie können den folgenden Ansatz verwenden:

1. Fügen Sie im Ablauf einen Frageknoten mit der Frage "Wird Ihnen ausreichend geholfen?" hinzu und stellen Sie die Schaltflächen (B1 und B2) als Optionen bereit.
2. Wenn der Benutzer B1 auswählt (Ja, mir wird ausreichend geholfen), verbinden Sie es mit einem vollständigen Zielknoten. Dieser Knoten markiert das Ziel "Erfolgreiche Chatbot-Konversation" als abgeschlossen, was darauf hinweist, dass der Chatbot den Kunden effektiv unterstützt hat.
3. Wenn der Kunde B2 (Nein, mit einem Agenten sprechen) auswählt, behandeln Sie dies separat, indem Sie eine Übergabe an den Agentenknoten auslösen. In diesem Fall müssen Sie den Knoten "Ziel abschließen" nicht verwenden.
4. Wenn der Kunde nicht antwortet oder direkt eine andere Frage eintippt, betrachten Sie dies als neutrales Gespräch. Sie müssen es nicht als abgeschlossenes oder erfolgloses Ziel verfolgen.