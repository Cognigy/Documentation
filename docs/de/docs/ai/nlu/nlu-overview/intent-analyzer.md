---
 title: "Intent Analyzer" 
 Slug: "Absichts-Analysator" 
 ausgeblendet: false 
---
# Absichts-Analysator

Das Verfassen eines qualitativ hochwertigen Satzes von Beispielsätzen ist der Schlüssel zum Aufbau intelligenter virtueller Agenten. Cognigy.AI enthält eine In-Tool-Evaluierungsfunktion, die Entwicklern sofortiges Feedback zur Qualität jedes Beispielsatzes und jeder Absicht gibt, da sie in die aktuelle Version ihres einzigartigen NLU-Trainingsmodells passt.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/62083cc-nluScoring.jpg" width="100%" />
</figure>

Obwohl es nicht notwendig ist, ein perfektes NLU-Modell zu haben, bei dem alle Sätze einen Green-Level-Score erreichen, hilft diese Funktion Designern bei der Identifizierung von Bereichen, die verbessert werden können.

## Übersicht<div class="divider"></div>Der Intent Analyzer gibt Rückmeldung darüber, ob die Intents, die innerhalb von Agentenabläufen trainiert wurden, effektiv sind.

Das Feedback erfolgt auf drei Ebenen:

- Allgemeines Intent-Modell
- Individuelle Absicht 
- Individueller Beispielsatz

Dies spart aus Testsicht Zeit, da ein einfacher Blick auf das Intent-Trainingsmenü ausreicht, um die Qualität des Modells zu bewerten, anstatt manuell mit dem virtuellen Agenten zu sprechen, um die Qualität des Verständnisses zu beurteilen. Wir empfehlen, das Feedback von oben nach unten zu verdauen. Ist Ihr Gesamtmodell grün? Ein kurzer Scan der Absichten kann Sie auf Probleme aufmerksam machen. Eine Überprüfung einzelner Sätze gibt Ihnen konkrete Einblicke, um Beispielsätze zu bearbeiten, hinzuzufügen oder zu verschieben und Ihre NLU zu verbessern.

!!! warning "Trainieren Sie die NLU für Feedback"
    Stellen Sie sicher, dass die NLU jedes Mal trainiert wird, wenn Änderungen an Beispielsätzen vorgenommen wurden, um die neueste Bewertungsanalyse bereitzustellen.

### Gesamtes Absichtsmodell

Die Gesamtbewertung des Intent-Modells liefert eine Gesamtbewertung für die Qualität des NLU-Modells.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/1ee253e-overallModel.PNG" width="100%" />
</figure>

Eine grüne Genauigkeitsbewertung zeigt an, dass das Modell für das Testen durch Benutzer bereit und konsistent ist.

Jede gelbe oder rote Ampel am Gesamtmodell sollte Anlass zur Sorge geben und weist auf wichtige Probleme mit dem Intent-Design hin. Niedrigere Bewertungen des Absichtsmodells können verbessert werden, indem Absichten mit niedriger Bewertung gefunden und Beispielsätze angepasst werden, die ebenfalls schlecht abschneiden. Dies wird durch das Ampel-Farb-Feedback-System erleichtert, das es Designern ermöglicht, die Seite nach roten oder gelben Elementen zu durchsuchen, bei denen Verbesserungen erforderlich sind.

### Individuelle Absicht

Jeder Absicht, die für die NLU trainiert wird, wird eine Bewertung zugewiesen, die den Designern virtueller Agenten Feedback zur Qualität der Absichtserkennung im Vergleich zu allen anderen Absichten gibt. Das Feedback-Fenster enthält zwei Informationen:

- Die NLU-Gesamtpunktzahl für die Absicht
- Die Namen aller Absichten, die überlappende Beispielsätze haben

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/8325558-IntentScore.PNG" width="100%" />
</figure>

Um die Punktzahl zu verbessern und Überschneidungen zu reduzieren, müssen Anpassungen an den Beispielsätzen vorgenommen werden, die im Intent enthalten sind.

!!! Warnung "Trends in einzelnen Absichten spiegeln möglicherweise nicht die Gesamtqualität des Modells wider."
    Wenn ein Modell gut funktioniert, bedeutet das nicht, dass es nicht noch auf der Absichtsebene weiter verbessert werden kann. Rote oder gelbe Absichten weisen auf Verbesserungsmöglichkeiten hin. Solche Möglichkeiten sind nicht unbedingt ein Spiegelbild eines schlechten Gesamtmodells, das in der Gesamtbewertung des Modells separat und genau bewertet wird - das Ganze ist mehr als die Summe seiner Teile!

### Individueller Beispielsatz

In Machine Learning-Absichten wird jedem Beispielsatz eine Bewertung zugewiesen, die Designern Aufschluss darüber gibt, wie nützlich dieser bestimmte Satz in Bezug auf den größeren Umfang des Absichtsmodells ist. 

Wenn Sie mit der Maus über die Ampelfarbe fahren, wird das Feedback-Fenster angezeigt. Das Feedback-Fenster für jeden Beispielsatz enthält zwei Informationen:

- Die Punktzahl des Modells für den Satz
- Die Namen aller Absichten, die überlappende Beispielsätze haben

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/1d85485-poorScore.PNG" width="100%" />
</figure>

In Verbindung mit der Ampelfarbe ermöglichen diese beiden Informationen den Entwicklern, potenzielle Probleme mit dem Trainingsmodell schnell zu identifizieren und zu beseitigen, um ein genaueres NLU-Verständnis zu erreichen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/5d864f8-goodScore.PNG" width="100%" />
</figure>

!!! Warnung "Trends in einzelnen Sätzen spiegeln möglicherweise nicht die Gesamtqualität der Absicht wider"
    Wenn eine Absicht gut funktioniert, bedeutet das nicht, dass sie nicht noch auf der Satzebene weiter verbessert werden kann. Rote oder gelbe Beispielsätze weisen auf Verbesserungsmöglichkeiten hin. Solche Möglichkeiten sind nicht unbedingt ein Spiegelbild einer schlechten Absichtsqualität, die im Intent-Score separat und genau bewertet wird - das Ganze ist mehr als die Summe seiner Teile!

## Punktesystem<div class="divider"></div>Der **Intent Analyzer** verwendet ein Ampel-Farbsystem, um Benutzern ein dreistufiges Scoring-Feedback zu geben. Die Farbcodierung wird in der folgenden Tabelle erläutert:

| Farbe | Score-Bereich |
|--------|-------------------|
| Grün | Ergebnis > 0,8 |
| Gelb | 0,8 > Ergebnis ≥ 0,6 |
| Fäulnis | 0,6 > Punktzahl |