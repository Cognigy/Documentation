---
Titel: "PDF"
Schnecke: "pdf"
description: "Das PDF-Quellenwissen verwendet zwei Chunk-Strategien: Standard und Alternative."
ausgeblendet: false
---

# PDF

Wenn Sie eine PDF-Datei als Wissensquelle verwenden, werden nach dem Hochladen der Datei die folgenden Strategien zur Aufteilung von Blöcken angewendet:

- [Standard](#default-chunk-Strategie)
- [Alternativ](#alternative-Chunk-Strategie)

## Standard-Chunk-Strategie

Diese Strategie extrahiert Inhalte aus PDFs auf verbesserte Weise, z. B. in Bezug auf Tabellen, die in der PDF-Datei gefunden wurden.
Es teilt den extrahierten Inhalt basierend auf einer festen Tokenlänge in Blöcke auf, die auf der Grundlage unserer Forschung die besten Ergebnisse liefert.

Es wird empfohlen, diese Strategie in Kombination mit dem Wert **Top K** auf '5' in der [Ausgabe des Suchextrakts](.. /.. /ai/flow-nodes/other-nodes/search-extract-output.md) Knoten.

## Alternative Chunk-Strategie

Diese Strategie kann als alternative Extraktions- und Chunking-Methode verwendet werden. Dieser Ansatz funktioniert effektiv, wenn Ihre ursprüngliche PDF-Datei mit doppelten Zeilenumbrüchen in logische Absätze unterteilt ist. Innerhalb dieser Strategie versucht das System, die Struktur, z. B. Abschnitte, zu erkennen, und teilt dann jeden von ihnen in einen oder mehrere Blöcke auf.

Diese Strategie wird angewendet, wenn "cognigy.preset_uiolc_ls.pdf" an den Dateinamen einer hochgeladenen Datei angehängt wird. Zum Beispiel 'cognigy.preset_uiolc_ls.pdf', wobei 'cognigy' der ursprüngliche Dateiname ist,
'.preset_uiolc_ls' ist die Voreinstellung für die Anwendung der alternativen Chunk-Strategie, und '.pdf' ist die Dateierweiterung.

Beachten Sie, dass das System bei der Textverarbeitung komplexe Elemente aus PDFs weglassen kann.
wie z.B. visuell komplexe Kopfzeilen oder Listen,
und diesen Text nicht in einen Block aufnehmen.
Daher sollte Ihr Text einfach sein und möglichst keine komplexen Elemente enthalten.

## Beispiel

Nehmen wir an, wir haben den folgenden Text im PDF-Format aus dem Cognigy-Blog:

??? + "PDF-Beispiel"

'''Markdown
    # Call Tracing: Neue Dimensionen in der VUX-Optimierung erschließen
    
Im aufstrebenden Bereich der Sprachtechnologie ist die Optimierung der Voice User Experience (VUX) ein anspruchsvolles Unterfangen mit einzigartigen Herausforderungen. 
    VUX-Designer sind mit komplizierten Variablen konfrontiert, von Timing-Nuancen und Intonationsgenauigkeit bis hin zur Unvorhersehbarkeit menschlicher Sprache und Umwelteinflüssen.
    Diese Faktoren stellen oft Hürden dar, die einen ansonsten flüssigen Dialog in einen unzusammenhängenden Austausch verwandeln können. 
    Für Unternehmen, die ihre sprachgesteuerten Dienste skalieren und perfektionieren wollen, sind dies nicht nur technische Aspekte, sondern entscheidende Dreh- und Angelpunkte auf der Customer Experience Journey.
    Angesichts dieser komplexen Landschaft freuen wir uns bei Cognigy, das ultimative Tool für Entwickler und VUX-Designer in ihrem Streben nach Voice Excellence vorstellen zu können: Call Tracing.
    
## Das Unsichtbare visualisieren: Wie Call Tracing das Spiel verändert 
    
Traditionell erfordert das Verstehen und Überwachen von Sprachinteraktionen eine sorgfältige Analyse von Transkriptionen, Benutzerfeedback und grundlegender Audiowiedergabe. 
    Jetzt bietet die Call-Tracing-Funktion von Cognigy eine umsetzbare Visualisierung aller Aktivitäten, die während des Anrufs stattfinden, wie z. B. Spracherkennung und Verbindungen, zusammen mit den Wellenformen der Anrufaufzeichnung. 
    Dieses leistungsstarke Tool bietet VUX-Designern einen unvergleichlichen Einblick in die Dynamik von Sprachinteraktionen.
    Die Visualisierung von Ereignissen und Schallwellen bietet eine analytische Perspektive, die über den Ton hinausgeht und Fachleuten die Möglichkeit gibt, Spracherlebnisse auf granularer Ebene zu analysieren und zu verstehen. 
    Es rückt wichtige Elemente in den Vordergrund, die bei Transkriptionen oder der einfachen Audiowiedergabe möglicherweise nicht sofort ersichtlich sind.
    '''

Sie können diese Datei [call-tracing-sample.pdf](https://docs.cognigy.com/ai/images/knowledge-ai/call-tracing-sample.pdf) auch im Format ".pdf" herunterladen.

### Standard-Groß-/Kleinschreibung

Bei der Default-Chunk-Strategie teilt das System diesen Text in 3 gleiche Chunks auf.

??? + "Standard-Chunk-Splitting"
      1.
        '''Markdown
        Anrufverfolgung: Neu freischalten
        Abmessungen in VUX
        Optimierung
        Im aufstrebenden Bereich der Sprachtechnologie ist die Optimierung der Voice User Experience (VUX) ein
        Ein anspruchsvolles Unterfangen voller einzigartiger Herausforderungen. VUX-Designer konfrontieren komplizierte
        Variablen von Timing-Nuancen und Intonationsgenauigkeit bis hin zur Unvorhersehbarkeit menschlicher
        Sprache und Umwelteinflüsse.
        Diese Faktoren stellen oft Hürden dar, die einen ansonsten flüssigen Dialog in einen
        unzusammenhängender Austausch. Für Unternehmen, die ihre sprachgesteuerten Systeme skalieren und perfektionieren möchten
        Dabei handelt es sich nicht nur um technische Details, sondern um entscheidende Dreh- und Angelpunkte für das Kundenerlebnis
        Reise.
        In Anbetracht dieser komplexen Landschaft
        '''
      2.
        '''Markdown
         Cognigy, wir freuen uns, Ihnen die ultimative
        Tool für Entwickler und VUX-Designer auf ihrem Streben nach Voice Excellence: Call Tracing.
        Das Unsichtbare visualisieren: Wie Call Tracing die
        Langes Gerede
        Traditionell erfordert das Verstehen und Überwachen der Sprachinteraktion akribische Arbeit
        Analyse von Transkriptionen, Benutzerfeedback und grundlegender Audiowiedergabe. Nun, Cognigy's
        Die Call-Tracing-Funktion bietet eine umsetzbare Visualisierung aller Aktivitäten, die während der
        den Anruf, wie z. B. Spracherkennung und Verbindungen, zusammen mit der Anrufaufzeichnung
        Wellenformen. Dieses leistungsstarke Tool bietet VUX-Designern einen unvergleichlichen Überblick über die
        Dynamik von Sprachinteraktionen
        '''
      3.
        '''Markdown
        .
        Die Visualisierung von Ereignissen und Schallwellen bietet eine analytische Perspektive, die über die
        Das Audio, das Fachleuten die Möglichkeit gibt, Spracherfahrungen zu analysieren und zu verstehen
        auf granularer Ebene. Es rückt kritische Elemente in den Vordergrund, die es vielleicht nicht sind
        Sofort erkennbar in Transkriptionen oder einfacher Audiowiedergabe.
        '''

### Alternativfall

Bei der alternativen Chunk-Strategie teilt das System diesen Text in 5 logische Chunks auf.

Beachten Sie, dass im ersten Block ein Titel vom System weggelassen wurde, da der Titel als komplexes Element formatiert war, während derselbe Titel in der [Standardstrategie](#default-chunk-strategy) enthalten war.

??? + "Alternatives Chunk-Splitting"
      1.
        '''Markdown
        Im aufstrebenden Bereich der Sprachtechnologie ist die Optimierung der Voice User Experience (VUX)
        ist ein anspruchsvolles Unterfangen voller einzigartiger Herausforderungen. 
        VUX-Designer sehen sich mit komplizierten Variablen konfrontiert, die von Timing-Nuancen bis hin zur Intonationsgenauigkeit reichen 
        bis hin zur Unberechenbarkeit menschlicher Sprache und Umwelteinflüssen.
        '''
      2.
        '''Markdown
        Diese Faktoren stellen oft Hürden dar, die einen ansonsten flüssigen Dialog verändern können
        in einen unzusammenhängenden Austausch. 
        Für Unternehmen, die ihre sprachgesteuerten Dienste skalieren und perfektionieren möchten, 
        Dabei handelt es sich nicht nur um technische Details, sondern um entscheidende Dreh- und Angelpunkte auf der Customer Experience Journey.
        '''
      3.
        '''Markdown
        In Anbetracht dieser komplexen Landschaft 
        Wir freuen uns, Ihnen das ultimative Tool für Entwickler vorstellen zu können
        und VUX-Designer in ihrem Streben nach Voice Excellence: Call Tracing.
        '''
      4.
        '''Markdown
        Traditionell erfordert das Verständnis und die Überwachung der Sprachinteraktion eine sorgfältige Analyse der 
        Transkriptionen, Benutzerfeedback und grundlegende Audiowiedergabe. 
        Jetzt bietet die Call-Tracing-Funktion von Cognigy eine umsetzbare Visualisierung aller Aktivitäten, die während des Anrufs stattfinden.
        wie Spracherkennung und Verbindungen, zusammen mit den Wellenformen der Anrufaufzeichnung. 
        Dieses leistungsstarke Tool bietet VUX-Designern einen unvergleichlichen Einblick in die Dynamik von Sprachinteraktionen.
        '''
      5.
        '''Markdown
        Die Visualisierung von Ereignissen und Schallwellen bietet eine analytische Perspektive, die über den Ton hinausgeht. 
        Wir geben Fachleuten die Möglichkeit, Spracherlebnisse auf granularer Ebene zu analysieren und zu verstehen. 
        Es rückt kritische Elemente in den Vordergrund, die es vielleicht nicht sind 
        Sofort erkennbar in Transkriptionen oder einfacher Audiowiedergabe.
        '''

## Mehr Informationen

- [Wissens-KI](overview.md)
- [Cognigy-Textformat](ctxt.md)