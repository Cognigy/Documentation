---
 Titel: "Abrechnung" 
 Slug: "Abrechnung" 
 ausgeblendet: false 
---

# Abrechnung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.52-blue.svg)] (.. /release-notes/4.52.md)

Cognigy hat nur eine abrechenbare Einheit - eine *Konversation*. Eine abgerechnete Konversation ist eine Interaktion zwischen einem Benutzer und einem virtuellen oder menschlichen Agenten und stellt eine Verbrauchseinheit dar.

Die abgerechnete Konversation beginnt, wenn ein Benutzer seine erste *Eingabe* sendet, bei der es sich entweder um einen Chat oder eine Sprachnachricht handeln kann.

Die Konversation wird aus einem der folgenden Gründe beendet:

- Der Benutzer hat einen Chat verlassen. 
- Der menschliche Agent hat eine Konversation gelöst. 
- Die Konversation hat mehr als 50 Benutzereingaben. Mit der 51. Eingabe beginnt eine neue Konversation. 
- Die Konversation ist auf einen Zeitraum von 24 Stunden beschränkt. Jede Benutzereingabe, die nach dieser Zeit gesendet wird, beginnt eine neue Konversation. 
- Der Benutzer hat eine Browserseite neu geladen.

## Häufige Szenarien

Die folgenden Szenarien enthalten Beispiele für die Abrechnung von Unterhaltungen.

Der 24-Stunden-Zeitraum wird entsprechend der Zeitzoneneinstellung Ihres Servers bestimmt. Wenden Sie sich an Ihren Administrator, wenn Sie diese Zeitzoneneinstellung ändern möchten.

### Szenario 1

Ein Benutzer hat innerhalb von 24 Stunden weniger als 50 Eingaben während der Konversation gesendet.

Beispiel: 50 Benutzereingaben.

Abrechnung: Es wird als eine Konversation abgerechnet

### Szenario 2

Ein Benutzer hat innerhalb von 24 Stunden mehr als 50 Eingaben während der Konversation gesendet.

Beispiel: 101 Benutzereingaben.

Abrechnung: Es wird als 3 Gespräche abgerechnet.

### Szenario 3

Ein Benutzer hat während der Konversation innerhalb von 30 Stunden weniger als 50 Nachrichten gesendet.

Beispiel: 49 Benutzereingaben.

Abrechnung: Es werden 2 Gespräche abgerechnet.

### Szenario 4

Ein Benutzer hat während der Konversation innerhalb von 30 Stunden mehr als 50 Nachrichten gesendet.

Beispiel 1: 78 Benutzereingaben > 49 innerhalb von 24 Stunden und 29 innerhalb der nächsten 6 Stunden.

Abrechnung 1: Es werden 2 Gespräche abgerechnet.

Beispiel 2: 78 Benutzereingaben > 5 innerhalb von 24 Stunden, 73 innerhalb der nächsten 6 Stunden.

Abrechnung 2: Es werden 3 Gespräche abgerechnet.

## xApps

Bei den xApps handelt es sich um ein separat lizenziertes Cognigy-Feature, das als Add-on zur Cognigy.AI Lizenz erworben werden muss.

Darüber hinaus wird die allgemeine abrechenbare Einheit für Cognigy.AI, die Konversation, beeinflusst, wenn xApps verwendet werden. Dies liegt daran, dass eine xApp-Sitzung Teil einer Cognigy-Sitzung ist.

Die vom Flow empfangenen xApp-Übermittlungsdaten-Payload-Nachrichten werden als abrechnungsrelevante Nachrichten der bestehenden Konversation gezählt.

Cognigy behält sich das Recht vor, die Abrechnung von xApps in Zukunft zu ändern.

### Szenario 1

Während einer xApp-Sitzung werden nur die vom Benutzer gesendeten xApp-Übermittlungsdaten-Payload-Nachrichten in Rechnung gestellt. 

Beispiel: Ein Benutzer meldet sich an, indem er seine Anmeldedaten eingibt und auf die Schaltfläche Autorisieren (Senden) klickt. Anschließend wählt der Benutzer einen Platz aus und klickt auf die Schaltfläche Bestätigen (Senden). Abschließend gibt der Nutzer auf der Zahlungsseite seine Kartendaten ein und klickt auf die Schaltfläche Bestellen (Absenden). Dieses Szenario umfasst 3 Benutzereingaben.

Abrechnung: Es wird als 1 Gespräch berechnet. 

### Szenario 2

Abgesehen von den xApp-Knoten kann ein Flow Knoten enthalten, die die Hauptsitzung starten und abschließen. In diesem Fall werden die xApp-Nutzlastnachrichten zum Senden von Daten und andere Benutzereingaben aus der Hauptsitzung als Teil derselben Sitzung und Konversation gezählt.

Beispiel: Ein Benutzer initiiert einen Chat mit einem Bot und sendet 2 Nachrichten. Diese Aktion löst eine xApp-Sitzung aus. Während der xApp-Sitzung meldet sich der Benutzer an, indem er seine Anmeldeinformationen eingibt und auf die Schaltfläche Autorisieren (Senden) klickt. Anschließend wählt der Benutzer einen Platz aus und klickt auf die Schaltfläche Bestätigen (Senden). Abschließend gibt der Nutzer auf der Zahlungsseite seine Kartendaten ein und klickt auf die Schaltfläche Bestellen (Absenden). Nachdem die xApp-Sitzung abgeschlossen ist, bietet der Bot eine weitere Option an, und der Benutzer sendet 2 weitere Nachrichten. Dieses Szenario umfasst 7 Benutzereingaben.

Abrechnung: Es wird als 1 Gespräch berechnet.

## Zusätzliche Abrechnung 

Wenn Sie den folgenden Endpunkt [Transformers](.. /ai/endpoints/transformers/transformers.md):

- Eingangs-Übertrager
- Transformator einspritzen
- Transformator benachrichtigen
  
und Sie einen 'falschen' Wert von ihnen zurückgeben (z.B. 'null', 'undefined' oder 'false'), wird die Nachrichtenverarbeitung im Cognigy-System beendet und es wird kein Flow ausgeführt. In diesem Fall berechnet Cognigy 1 Konversation pro 50 Transformer-Ausführungen.

Beispiel: Sie haben einen Endpunkt erstellt, der nur den Eingabetransformator verwendet, um einen benutzerdefinierten Übergabeanbieter zu implementieren, und Sie geben immer einen "falschen" Wert von "null" zurück. 50 Eingangstransformatoren werden für Benutzereingaben ausgeführt - > 1 Konversation wird berechnet.