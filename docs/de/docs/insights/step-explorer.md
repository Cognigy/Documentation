---
Titel: "Step Explorer" 
Schnecke: "Step-Entdecker" 
ausgeblendet: false 
---
# Schritt-Explorer

_Step Explorer_ hilft Ihnen zu sehen, wie Kunden durch eine Konversation navigieren. Es zeigt wichtige Pfade in der Konversation, z. B. wie Kunden auf die Antworten und Fragen des virtuellen Agenten reagieren, sowie die Identifizierung von Punkten, an denen Kunden sich zurückziehen, und das alles innerhalb eines bestimmten Zeitrahmens.  Diese Informationen ermöglichen es Ihnen, Ihren virtuellen Agenten zu bewerten und zu verbessern, um ihn besser zu verstehen, möglicherweise Bestellungen und Buchungen zu erhöhen oder Supportanfragen zu reduzieren. Mit dem Schritt-Explorer können Sie Konversationsschritte und deren Verbindung zueinander untersuchen.

<figure><img class="image-center" src="{{config.site_url}}insights/images/step-explorer.png" width="100%" /><figcaption>Benutzeroberfläche des Schritt-Explorers</figcaption>
  
  
</figure>

Wählen Sie im Menü auf der linken Seite von Insights die Option **Schritt-Explorer** aus.

Wenn der Schritt-Explorer ausgewählt ist, wird der Name des Agenten in der oberen linken Ecke angezeigt. Insights verarbeitet die Daten des aktuellen Agenten, und der Schritt Explorer-Bericht zeigt die datenbezogenen Analysediagramme an. Wenn in Cognigy.AI mehrere Agenten verfügbar sind, können Sie diese hier in einem Dropdown-Menü auswählen, um jeden von ihnen zu analysieren.

Wenn Sie von Ihrem Agenten in Cognigy.AI zu Cognigy Insights wechseln,
Alle Filter sind so konfiguriert, dass Sie Daten anzeigen können, die sich auf den aktiven Agenten beziehen.
Auf diese Weise können Sie die Leistung dieses Agenten über einen bestimmten Zeitraum überwachen.
Um zwischen Cognigy.AI und der Cognigy Insights-Anwendung zu wechseln, klicken Sie im Benutzermenü auf die Option **Insights**.

## Filter-Optionen

Jede Änderung der Filtereinstellungen muss mit **Übernehmen** bestätigt werden, um aktiv zu sein.

**Lokale Filteroptionen**

Die Optionen für den lokalen Filter am oberen Rand sind spezifisch für den Schritt-Explorer.

**Startschritt**

Konversation [Schritte](.. /ai/tools/analytics/analytics-concepts.md#steps) sind nur
und wird hier angezeigt, wenn Sie zum ersten Mal die Knoteneinstellungen in Ihrem Flow mit [Anmerkungen](#annotations) im Abschnitt **Analytics-Schritte** konfiguriert haben, z. B. mit "Willkommens-Neuanrufer". 
Dann können Sie hier den Startschritt für die Schritt-Explorer-Verarbeitung ab diesem Zeitpunkt auswählen.

Darüber hinaus können Sie auf einen Schritt klicken und **Als Startschritt auswählen** aus dem Kontextmenü auswählen.

**Richtung**

Sie können zwischen **Vorwärts** und **Rückwärts** Richtung wählen. 
Wenn Sie die Vorwärtsrichtung anwenden, beginnt der Schrittbericht mit dem ersten Schritt (vom Anfang bis zum Ende der Konversation).
Wenn Sie die Rückwärtsrichtung anwenden, beginnt der Schrittbericht mit dem letzten Schritt (vom Ende der Konversation zum Anfang).

**Globale Filteroptionen**

Die Optionen für den globalen Filter am unteren Rand gelten für alle Anwendungen, die in Cognigy Insights ausgeführt werden.
Weitere Informationen finden Sie unter [Globaler Filter](global-filter.md).

## Anmerkungen

Bevor Sie mit dem Schritt-Explorer arbeiten können, müssen Sie bestimmte Komponenten in Cognigy.AI mit Anmerkungen versehen. Anmerkungen können in den Knoteneinstellungen Ihres konfigurierten Flows definiert werden.

Öffnen Sie zunächst den Knoten-Editor, navigieren Sie zur Registerkarte **Einstellungen** und geben Sie im Abschnitt Analyseschritt eine aussagekräftige Anmerkung ein. Diese Anmerkung sollte einen informativen Verweis auf den konfigurierten Knoten enthalten.

Wenn Sie beispielsweise einen **Say**-Knoten kommentieren, der ein Kundengespräch mit einer Willkommensnachricht beginnt, können Sie entweder "Begrüßungen" oder "Willkommener neuer Anrufer" eingeben.

Verwenden Sie für Bestellabsichten das Feld Analytics-Schritt. Sie können z. B. "Order Intent ausgelöst" als Anmerkung eingeben.

<figure><img class="image-center" src="{{config.site_url}}insights/images/c2f0e52-Say_Node_Analytics_step_setting_300.svg" width="60%" /><figcaption>Sagen Sie Knoten-Editor mit Anmerkung im Abschnitt Analytics-Schritt</figcaption>
  
  
</figure>

Wenn Sie in den Abschnitten **Analytics-Schritt** weitere Flow-Knoten mit Anmerkungen benennen, bietet die Datenanzeige des Schritt-Explorers eine feinere Granularität.

!!! Warnung
    Der Step Explorer benötigt definierte Annotations für die Auswertung und Anzeige von Analytics-Daten.

Der Step Explorer bietet folgende Vorteile:

- Verständnis der Bestellabsicht (wie viele Kunden etwas bestellt haben).
- Verständnis der Kundenreaktionen bei bestimmten Schritten (wie viele, wie oft).
- Sie können unterschiedliche Zeiträume für die Auswertung definieren.
- Sie können den Schrittbericht sowohl in **Vorwärts**- als auch **Rückwärts**-Richtung anzeigen.
- Sie können den Schrittbericht ab einem Startschritt abrufen.
- Sie können auf einen Schritt klicken, um Details anzuzeigen.
- Sie können verfügbare Snapshots aus verschiedenen Versionen des virtuellen Agenten auswählen, um sie zu Verbesserungszwecken zu vergleichen.

## Analysieren

<figure><img class="image-center" src="{{config.site_url}}insights/images/7bf4ed7-Step_Explorer_n1.png" width="100%" /><figcaption>Step Explorer: Analytische Schritte werden in <b>Vorwärtsrichtung</b> angezeigt</figcaption>
  
  
</figure>

Wenn der **lokale Filter** auf die Vorwärtsrichtung festgelegt ist, zeigt der Schritt-Explorer die Ergebnisse der Konversationsanalyse mit dem Beginn der Konversation auf der linken Seite und dem Ende der Konversation auf der rechten Seite an.

Anhand der Anmerkungen, die zuvor in Cognigy.AI für Ihre Flow-Knoten definiert wurden, kann der Schritt-Explorer die Konversationsschritte analysieren, und jede Anmerkung wird einem bestimmten Schritt zugewiesen. Die entsprechenden Konversationsdaten in Bezug auf die definierten Schritte führen zu einer prozentualen Verteilung, die der Step Explorer auf dem Bildschirm visualisiert.

**Beispiel für eine Analyse**

100% der Nutzer durchliefen den Startschritt zu Beginn einer Konversation.

99 % der Benutzer, die eine Konversation begonnen haben, wurden als neuer Anrufer begrüßt.

66% der neuen Anrufer haben einen Termin vereinbart – 11% der neuen Anrufer haben einen Übergabewunsch initiiert.

51% der Nutzer, die einen Termin vereinbart haben, haben die Buchung abgeschlossen. 

48 % der Nutzer, die einen Termin vereinbart haben, benötigen Erklärungen.

89 % der Nutzer, die eine Erklärung benötigten, schlossen die Buchung ab.

!!! Anmerkung
    Die rot markierten Bereiche eines Schritts stellen die Anzahl der Benutzer dar, die an diesem Punkt abgebrochen haben. 
    Sie können in einer Konversation frühzeitig "abbrechen", um Ihren Agenten zu verbessern und mit dem [Nachrichten-Explorer](message-explorer.md) von Cognigy zu überprüfen, was der virtuelle Agent gesagt hat, bevor der Benutzer abgestiegen ist.

- Sie können weitere Details anzeigen, wenn Sie mit der Maus über einen Schritt fahren.   

<figure><img class="image-center" src="{{config.site_url}}insights/images/ddd1d85-Step_Explorer_handover_request_n2_400.svg" width="100%" /><figcaption>Details zum Schritt Übergabeanforderung</figcaption>
  
  
</figure>

- Sie können jeden Schritt als **Startschritt** in den Einstellungen für den lokalen Filter auswählen. Der Step Explorer visualisiert dann die Analyse, die bei diesem Schritt beginnt.

- Sie können die **Vorwärts**-Richtung der Konversation in eine **Rückwärts**-Richtung ändern. Der Step Explorer zeigt dann die Analyse beginnend auf der linken Seite mit dem Ende einer Konversation an.

<figure><img class="image-center" src="{{config.site_url}}insights/images/7d637e4-Step_Explorer_direction_backward_n3.png" width="100%" /><figcaption>Step Explorer: Analytische Schritte werden rückwärts angezeigt</figcaption>
  
  
</figure>

- Sie können auf einen Schritt klicken, z. B. **Termin vereinbaren**, und der Schritt-Explorer ändert die angezeigte Analyse durch eine separate Anzeige des ausgewählten Schritts und der zugehörigen Analysedaten im Detail.  

Felder mit einem Pfeilsymbol sind Platzhalter für ausgeblendete Schritte.
Diese ausgeblendeten Schritte werden nur angezeigt, wenn Sie auf das Pfeilfeld klicken.
Achten Sie mithilfe von Pfeilfeldern darauf, dass die angezeigten Schritte übersichtlich angeordnet sind.

<figure><img class="image-center" src="{{config.site_url}}insights/images/d54affb-Step_Explorer_make_appointment_n4.png" width="100%" /><figcaption>Beispiel: Separate Anzeige des ausgewählten Schrittes Termin vereinbaren</figcaption>
  
  
</figure>

**Beispielhafte Schrittanalyse von Terminvereinbarung**:

**Schrittbezeichnung**: 66 % der "neuen Anrufer" aus dem vorherigen Schritt haben einen Termin vereinbart.
**Zusatzinformation per Hover-Feld**: 66 % der Nutzer, die eine Konversation begonnen haben, haben einen Termin vereinbart (die vom Step Explorer gefundene Zahl: 5.477).

48 % der Benutzer, die einen Termin vereinbarten, brauchten Erklärungen, was der Agent gerade getan hat.
89 % von ihnen, die Erklärungen benötigten, schlossen die Buchung ab, und alle brachen danach ab (100 %).

48 % der Nutzer, die einen Termin vereinbart haben, haben die Buchung abgeschlossen.

100 % der Benutzer, die eine Buchung abgeschlossen haben, haben die Buchung abgebrochen.

!!! Anmerkung
    Der Bemessungswert eines Konversationsschritts steht in direktem Zusammenhang mit dem Wert des vorherigen Schritts.

<figure><img class="image-center" src="{{config.site_url}}insights/images/9c01d54-Step_Explorer_make_appointment_n5.svg" width="100%" /><figcaption>Beispielschritt: Erstellen von Terminanalysedaten</figcaption>
  
  
</figure>

**Beispiel für den Schritt "Abgeschlossene Buchung" und Auswertung der zusätzlich angezeigten Analytics-Daten**:

89 % der Nutzer, die Erklärungen benötigten, schlossen die Buchung ab, und alle brachen danach ab (100 %; Ende der Konversation).

**Zusätzliche Informationen (per Hover-Funktion)**: 

89% der Nutzer haben die Buchung aus dem vorherigen Schritt abgeschlossen.
28 % der Nutzer, die eine Konversation begonnen haben, haben die Buchung abgeschlossen.
Der Step Explorer fand insgesamt 2.368 abgeschlossene Buchungen.

<figure><img class="image-center" src="{{config.site_url}}insights/images/8e3fdd6-Step_Explorer_completed_booking_n7.svg" width="100%" /><figcaption>Beispielschritt: Abgeschlossene Buchungsanalysedaten</figcaption>
  
  
</figure>

### Offener Durchfluss 

Um Ihren Flow zu überprüfen oder die Konfiguration zu verbessern, bietet der Schritt-Explorer die Kontextmenüoption **Flow öffnen**, wenn Sie mit der rechten Maustaste auf einen bestimmten Schritt klicken.
Wenn Sie beispielsweise auf **Termin vereinbaren** klicken, gelangen Sie zum Flow in Cognigy.AI.

Die rot hervorgehobenen Abschnitte innerhalb eines Schritts zeigen die Punkte an, an denen Benutzer abgebrochen haben. Sie haben die Möglichkeit, absichtlich einen "Abbruch" in einem Gespräch zu initiieren. Auf diese Weise können Sie die Leistung Ihres Agenten verbessern und analysieren, was der virtuelle Agent gesagt hat, bevor der Benutzer sich zurückgezogen hat, indem Sie den [Nachrichten-Explorer](message-explorer.md) von Cognigy verwenden.

<figure><img class="image-center" src="{{config.site_url}}insights/images/a040540-Step_Explorer_open_flow_n8.svg" width="100%" /><figcaption>Wenn Sie mit der rechten Maustaste auf einen bestimmten Explorer-Schritt klicken, wird die</figcaption>
  
  
</figure> Option "Open Flow" angezeigt<figure><figcaption>. Die Option</figcaption><img class="image-center" src="{{config.site_url}}insights/images/1135531-Open_Flow_in_Cognigy_2.svg" width="100%" /> "Open Flow" führte zum Flow in Cognigy.AI
  
</figure>

### Knoten öffnen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.16-blue.svg)] ({{config.site_url}})

Wenn Sie das Kontextmenü für einen Schritt aufrufen, der in einem Node definiert ist, wird das Menü **Open Node** angezeigt
Option. Ein Klick darauf öffnet den Flow-Editor mit Bearbeitungsmodus für den jeweiligen Node.

<figure><img class="image-center" src="{{config.site_url}}insights/images/open-node.png" width="100%" /><figcaption>Kontextmenü eines Schritts, der in einem Node definiert ist</figcaption>
  
  
</figure>

### Zum Transkript-Explorer

Wenn Sie frühe Abbrüche während Konversationen auswerten möchten, um Ihren virtuellen Agenten zu verbessern, klicken Sie auf den Schritt **Abbrechen**, um auf das Menü **Zum Transkript-Explorer** zuzugreifen. 

In diesem Menü können Sie Konversationen überprüfen, indem Sie nach Schlüsselwörtern suchen, die die Schritte darstellen, wenn der Kunde abbricht.

<figure><img class="image-center" src="{{config.site_url}}insights/images/a7e0fdb-Step_Explorer_early_drop_off_situation_4.svg" width="100%" /><figcaption>Wechseln Sie zum Transkript-Explorer, um die Konversationsschritte auszuwerten</figcaption>
  
  
</figure>

## Untersuchen von Konversationen nach Ausgeführte Schritte

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.16-blue.svg)] ({{config.site_url}})

Im Kontextmenü eines Schrittes gibt es zwei Möglichkeiten, die Konversationen zu überprüfen.
Wenn Sie eine davon aktivieren, wird der Transkript-Explorer geöffnet, der die folgenden Konversationen anzeigt:

- **Offene Unterhaltungen, die diesen Weg eingeschlagen haben**. Mit dieser Option werden Konversationen angezeigt, die genau dem Pfad des ausgewählten Schritts gefolgt sind. In der folgenden Abbildung haben wir ein Kontextmenü für den Schritt **Buchung abgeschlossen** geöffnet. Unterhaltungen, die diesem Pfad gefolgt sind, werden nur diejenigen angezeigt, die den folgenden Schrittpfad enthielten: **Neuen Anrufer begrüßen > einen Termin vereinbaren > > abgeschlossene Buchung erklären**. 
- **Öffnen Sie Unterhaltungen, die diesen Schritt enthalten**. Diese Option zeigt alle Konversationen an, die den ausgewählten Schritt enthalten. Der genaue Weg ist in diesem Fall nicht wichtig.

<figure><img class="image-center" src="{{config.site_url}}insights/images/conversation-path-step-explorer.png" width="100%" /><figcaption>Wechseln Sie zum Transkript-Explorer, um die Konversationsschritte auszuwerten</figcaption>
  
  
</figure>

## Mehr Informationen

- [Transkript-Explorer](transcript-explorer.md)
- [Nachrichten-Explorer](message-explorer.md)