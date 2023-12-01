---
 Titel: "Analytics-Daten" 
 Slug: "Analytics-Daten" 
 ausgeblendet: false 
---
# Analytics-Daten
## Beschreibung<div class="divider"></div>Innerhalb eines [Code Node]({{config.site_url}}ai/flow-nodes/code/code/) können Sie bestimmte Teile der Analysedaten ändern, um mehr Kontrolle darüber zu erhalten, was genau in die Analyse geschrieben wird.

Sie können auf die Analysedaten in einem Codeknoten zugreifen, indem Sie den Schlüssel "analyticsdata" verwenden. Zum Beispiel:

'''Javascript
analyticsdata.intent = "testen";
''' 

## Analytics-Felder<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.45-blue.svg)] (.. /.. /.. /release-notes/4.45.md)

Die folgenden Felder können in einem Codeknoten überschrieben werden:

| Feld | Beschreibung | Kunst            |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| Absicht | Die Absicht, die in Analytics geschrieben wird. Sie können dieses Feld z. B. ändern, um den Intent zu speichern, der in einem ausgeführten Flow in Analytics | Zeichenfolge |
| intentFlow | Die ID des Flows, in dem die Absicht gefunden wurde (Haupt-Flow oder angefügter Flow) | Zeichenfolge |
| intentScore | Die Bewertung der gefundenen Absicht | Anzahl |
| inputText | Der eingegebene Text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Zeichenfolge |
| inputData | Das Eingabedatenobjekt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | {"Schlüssel":"Wert"} |
| Bundesland | Der [State]({{config.site_url}}ai/tools/interaction-panel/state/), in dem sich der Flow derzeit befindet | Zeichenfolge |
| Spielautomaten | Die Slots, die in der Benutzereingabe gefunden wurden | Objekt |
| completedGoals | Eine Liste der Ziele, die der Benutzer erreicht hat | Liste der Strings |
| verstanden | Ob die Eingabe verstanden wurde. Eine Eingabe wird als verstanden gezählt, wenn ein Intent oder ein Slot gefunden wird, die Eingabe über den Code Node oder den Overwrite Analytics Node als verstanden markiert wird oder der Satztyp pAnswer, nAnswer oder Greeting ist (wenn die Confirmation Word-Logik aktiviert ist). In allen anderen Fällen wird es als nicht verstanden markiert, es sei denn, es gibt eine aktive Übergabe (ohne Aktivierung eines Agenten-Assist-Flows) oder eine Nachricht wurde als "Nicht zählen" oder "Null" markiert. | Boolescher Wert |
| benutzerdefiniert1 | Ein benutzerdefiniertes Feld, das während der Flow-Ausführung auf einen beliebigen Zeichenfolgenwert festgelegt werden kann. Der Standardwert ist null | Zeichenfolge |
| benutzerdefiniert2 | Ein benutzerdefiniertes Feld, das während der Flow-Ausführung auf einen beliebigen Zeichenfolgenwert festgelegt werden kann. Der Standardwert ist null | Zeichenfolge |
| benutzerdefiniert3 | Ein benutzerdefiniertes Feld, das während der Flow-Ausführung auf einen beliebigen Zeichenfolgenwert festgelegt werden kann. Der Standardwert ist null | Zeichenfolge |
| benutzerdefiniert4 | Ein benutzerdefiniertes Feld, das während der Flow-Ausführung auf einen beliebigen Zeichenfolgenwert festgelegt werden kann. Der Standardwert ist null | Zeichenfolge |
| benutzerdefiniert5 | Ein benutzerdefiniertes Feld, das während der Flow-Ausführung auf einen beliebigen Zeichenfolgenwert festgelegt werden kann. Der Standardwert ist null | Zeichenfolge |
| benutzerdefiniert6 | Ein benutzerdefiniertes Feld, das während der Flow-Ausführung auf einen beliebigen Zeichenfolgenwert festgelegt werden kann. Der Standardwert ist null | Zeichenfolge |
| benutzerdefiniert7 | Ein benutzerdefiniertes Feld, das während der Flow-Ausführung auf einen beliebigen Zeichenfolgenwert festgelegt werden kann. Der Standardwert ist null | Zeichenfolge |
| benutzerdefiniert8 | Ein benutzerdefiniertes Feld, das während der Flow-Ausführung auf einen beliebigen Zeichenfolgenwert festgelegt werden kann. Der Standardwert ist null | Zeichenfolge |
| benutzerdefiniert9 | Ein benutzerdefiniertes Feld, das während der Flow-Ausführung auf einen beliebigen Zeichenfolgenwert festgelegt werden kann. Der Standardwert ist null | Zeichenfolge |
| benutzerdefiniert10 | Ein benutzerdefiniertes Feld, das während der Flow-Ausführung auf einen beliebigen Zeichenfolgenwert festgelegt werden kann. Der Standardwert ist null | Zeichenfolge |

## Arbeiten mit den benutzerdefinierten Feldern<div class="divider"></div>Die benutzerdefinierten Felder werden verwendet, um benutzerdefinierte Daten in Analysen zu speichern. Dabei kann es sich um einen beliebigen Zeichenfolgenwert mit einer maximalen Länge von 512 Zeichen handeln. Wenn Sie komplexere Daten speichern möchten, können Sie ein Zeichenfolgenfeldobjekt als Wert speichern:

'''Javascript
const customData = {
  Schlüssel: "Wert"
};

analyticsdata.custom1 = "userFocusGroup: focusGroup1";
analyticsdata.custom2 = JSON.stringify(customData);
''' 

!!! Warnung "Maximale Länge der benutzerdefinierten Felder"
    Sie können maximal 512 Zeichen als Wert für jedes der benutzerdefinierten Felder speichern

## Lebensdauer von Analysedaten<div class="divider"></div>Das analyticsdata-Objekt wird für jede Flow-Ausführung generiert. Dies bedeutet, dass alle Daten, die Sie im analyticsdata-Objekt speichern (z. B. ein benutzerdefiniertes Feld), nur für diese Flow-Ausführung in Analytics gespeichert werden. Bei der nächsten Flow-Ausführung wird ein neues analyticsdata-Objekt mit einer neuen Absicht usw. angezeigt.