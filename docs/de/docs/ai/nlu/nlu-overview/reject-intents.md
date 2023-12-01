---
 Titel: "Absichten ablehnen" 
 Slug: "Reject-Intents" 
 ausgeblendet: false 
---
# Absichten ablehnen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/2bebb67-rejectIntent.PNG" width="100%" />
</figure>

Mit Ablehnungsabsichten können Sie absichtlich verhindern, dass die NLU Benutzereingaben erkennt, die sich außerhalb des Bereichs des virtuellen Agenten befinden.

## Konzept<div class="divider"></div>Ablehnungsabsichten werden auf die gleiche Weise wie [Machine Learning Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) über die Registerkarte **NLU** im Flow-Editor erstellt. Wählen Sie **Create 'Reject Intent'** aus dem erweiterten Menü aus, das neben dem Creation Intent Butting verfügbar ist. Fügen Sie dann einfach Beispielsätze hinzu, die zu den Benutzereingaben passen, die von der NLU ignoriert werden sollen.

Für Ablehnungsabsichten ist Folgendes erforderlich:

| Bezeichnung: | Art der Immobilie |
|--------------------|------------------------------------------------|
| Name der Absicht | Eindeutiger Name der Absicht |
| Beispiel-Sätze | Eine Reihe von Sätzen, die die Benutzereingabe vorhersagen |

## Was ist ein guter Anwendungsfall für Reject Intents?<div class="divider"></div>Stellen wir uns vor, wir haben Nutzer, die anstelle eines schmutzigen Parkplatzes nach Grünflächen suchen, um frische Luft zu schnappen.

"Wo finde ich einen Park in der Nähe?"

Angenommen, Ihre App befasst sich nur mit Treibern, und Sie möchten solche Anfragen einfach ignorieren. In diesem Fall möchten Sie die anstößigen Sätze der Ablehnungsabsicht hinzufügen.

Es hat sich bewährt, die Ablehnungsabsicht zum Erfassen von Äußerungen, die Ihr Bot ignorieren sollte, mit der gleichen Wichtigkeit zu behandeln wie jede andere Absicht, die für das Funktionieren Ihres Bots unerlässlich ist.

Alternativ können Sie den Entwurf Ihres Bots überdenken. Wenn Sie in Ihren Protokollen häufig auf eine Klasse von Äußerungen außerhalb des Geltungsbereichs stoßen, möchten Sie wahrscheinlich eine zusätzliche Absicht hinzufügen. Sie können die geäußerte Benutzerabsicht auch dann ansprechen, wenn sie nur den Umfang Ihres Bots verdeutlicht.

Wenn Sie eine erweiterte Erkennung außerhalb des Gültigkeitsbereichs benötigen, können Sie auch eine Regel oder eine ML-Absicht verwenden, um Sätze außerhalb des Gültigkeitsbereichs zu erfassen. Dies ist möglich, wenn Sie die Absicht in Ihrem Flow ignorieren.

Sie müssen Ihre Architektur beachten, wenn Sie Regel- und ML-Absichten verwenden, um Sätze außerhalb des Geltungsbereichs abzufangen, aber wenn Sie angefügte Flows verwenden: Ein angehängter Flow wird nur ausgeführt, wenn eine seiner Absichten ausgelöst wird - um das Auslösen von Fehlalarmen in anderen Flows zu vermeiden, müssen Sie den Flow, der die Absichten außerhalb des Geltungsbereichs erfasst,  an den Anfang der angehängten Flow-Reihenfolge setzen und möglicherweise die Einstellung "Globale Absichten zuerst zuordnen" aktivieren.