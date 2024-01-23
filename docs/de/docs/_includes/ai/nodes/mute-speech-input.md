## Beschreibung<div class="divider"></div>Dieser Knoten steuert, wann Spracheingaben in Ihrem Flow erfasst werden können.
Es verhindert Sprachunterbrechungen in bestimmten Fällen, wie z. B. [xApp Flows](https://docs.cognigy.com/ai/xApp/overview/), und ermöglicht so eine reibungslosere Konversation.
Durch Aktivieren oder Deaktivieren der Spracherfassung nach Bedarf,
Sie behalten eine bessere Kontrolle und sorgen für einen nahtlosen Workflow in Ihrer Anwendung.

## Einstellungen

!!! Warnung
    Deaktivieren Sie eine Spracheingabe während des gesamten Anrufs nicht, um zusätzliche Nachrichten vom Benutzer zu erhalten, insbesondere wenn der virtuelle Assistent mehrere Nachrichten mit Zeitabständen dazwischen senden muss.  

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  -----------------------------------------------------------------------|
| Spracheingabe stummschalten | Umschalten | Deaktiviert die Spracheingabeerkennung für den aktuellen Anruf. Standardmäßig ist die Einstellung deaktiviert, sodass die Knoten unterhalb des Spracheingabeknotens Spracheingabe stummschalten Spracheingaben akzeptieren können. <br><br> Wenn diese Einstellung aktiviert ist, akzeptieren die Knoten unterhalb des Spracheingabeknotens stummschalten keine Spracheingaben oder Ziffern als Antwort.  Sie wirkt sich auf alle Spracheingaben aus, die über die folgenden Knoten getätigt werden:<br> - Knoten mit festgelegten Aktivitätsparametern. <br> - Say-and-Play-Knoten mit aktiviertem Barge-In können nicht mehr unterbrochen werden.<br> - Frage- und optionale Frageknoten. |

## Beispiel

Im folgenden Beispiel können Sie mit dem Mute-Knoten steuern, wann Spracheingaben innerhalb des Flows akzeptiert oder deaktiviert werden:

1. Sagen Sie Node: "Hallo, Sie erhalten eine xApp".
2. xApp: Init-Sitzungsknoten.
3. Spracheingabe stummschalten (aktiviert).
4. Frageknoten: "Bitte bewerten Sie Ihre Erfahrung mit der xApp auf einer Skala von 1 bis 5".<br>Wenn der STT des Stummschaltungsknotens aktiviert ist, akzeptiert der Frageknoten keine Spracheingaben oder Ziffern als Antwort. Der Benutzer muss die Bewertung auf andere Weise bereitstellen, z. B. durch Auswählen einer Zahl mithilfe von Schaltflächen oder Eingeben der Antwort. Dieser Prozess stellt sicher, dass die Spracherfassung während der Bewertungsfrage vorübergehend ausgeschaltet wird, um unbeabsichtigte Interferenzen durch Hintergrundsprache zu vermeiden.
5. Knoten STT stummschalten (deaktiviert). <br> Nach der Bewertungsfrage wird der Mute Node STT deaktiviert, so dass die nachfolgenden Nodes Spracheingaben normal akzeptieren können.