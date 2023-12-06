---
 Titel: "NLU Transformers" 
 Schnecke: "NLU-Transformatoren" 
 ausgeblendet: false 
---
# NLU-Transformatoren

## Beschreibung<div class="divider"></div>NLU-Transformatoren werden verwendet, um die Pipeline in NLU-Konnektoren anzupassen. Dadurch ist es möglich, die eingehende Nachricht vom Endpunkt zu ändern, bevor sie an die NLU-Engine gesendet wird, und die Antwort der NLU-Engine zu ändern, bevor sie an die Flow-Ausführung gesendet wird.

[NLU-Transformatoren] ({{config.site_url}}ai/nlu/external-nlu/nlu-transformers/#nlu-transformers_1) sind für Cognigy NLU sowie für Alexa-, DialogFlow-, Microsoft LUIS- und Watson Assistant-Konnektoren verfügbar.

Bei Verwendung von Cognigy NLU ist kein Connector erforderlich. Um Transformers für Cognigy NLU zu verwenden, ist es jedoch erforderlich, explizit einen Cognigy NLU-Konnektor zu erstellen und diesen Konnektor im Endpunkt auszuwählen.

Es ist auch möglich, einen benutzerdefinierten NLU-Konnektor zu schreiben, ohne einen der NLU-Anbieter zu verwenden, die in den verschiedenen Konnektoren verfügbar sind, indem Sie einen Code-NLU-Konnektor erstellen und eine benutzerdefinierte NLU-Pipeline im [Code Transformer]({{config.site_url}}ai/nlu/external-nlu/nlu-transformers/#nlu-code-transformer) schreiben.

## NLU-Transformatoren<div class="divider"></div>Um einen **NLU-Transformer** für einen Cognigy NLU-, Alexa-, DialogFlow-, LUIS- oder Watson Assistant-Konnektor zu erstellen, öffnen Sie die Registerkarte **Transformer-Funktionen** im NLU-Konnektor. Hier sind die verschiedenen [Transformer-Einstellungen]({{config.site_url}}ai/nlu/external-nlu/nlu-transformers/#transformer-settings), die konfiguriert werden können, sowie der Transformer-Code-Editor.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/377f21a-NLU_Transformer.png" width="100%" />
</figure>

### preNlu
Die Transformer-Funktion ''preNlu'' hat die Parameter ''text'', ''data'' und ''language'', wie sie vom Endpunkt empfangen werden. Es muss ''Text'' und ''Daten'' zurückgeben, die in der Funktion geändert werden können, bevor es an die NLU-Engine gesendet wird.

Diese preNlu-Transformer-Funktion kann für typische NLP-Schritte wie Stoppwortentfernung, Interpunktionsentfernung, Rauschentfernung, Textnormalisierung, Rechtschreibprüfung, ...

### postNlu
Die Transformer-Funktion ''postNlu'' hat die Parameter ''text'', ''data'', ''nluResult'' und ''connectorOutput'', wie sie von der NLU-Engine empfangen werden.

Der ''connectorOutput'' ist die Rohausgabe der NLU-Engine wie DialogFlow, LUIS oder Watson. Es enthält mehr Daten als ''nluResult'', wo die Rohdaten der NLU-Engine bereits gefiltert und für die Verwendung in der Flow-Ausführung zugeordnet wurden.

Die Funktion muss ''data'' und ''nluResult'' zurückgeben, die in der Funktion geändert werden können, bevor der Flow verarbeitet wird.

## NLU-Code-Transformator<div class="divider"></div>Der NLU-Code-Transformator ermöglicht es, eine benutzerdefinierte NLU-Pipeline zu schreiben. Um einen NLU-Transformer zu erstellen, öffnen Sie die Registerkarte **Transformerfunktionen** im Code-Connector. Hier sind die verschiedenen [Transformer-Einstellungen]({{config.site_url}}ai/nlu/external-nlu/nlu-transformers/#transformer-settings), die konfiguriert werden können, sowie der Transformer-Code-Editor.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/5021c51-NLU_Code_Transformer.png" width="100%" />
</figure>

Die Transformer-Funktion ''preNlu'' hat die Parameter ''text'', ''data'' und ''language'', wie sie vom Endpunkt empfangen werden. Die Funktion muss ''data'' und ''nluResult'' zurückgeben, die an die Flow-Ausführung gesendet werden.

## Verfügbare Module<div class="divider"></div>### HTTP-Anfragen senden
Es ist möglich, HTTP-Anfragen an externe Dienste, wie z. B. NLU-Engines von Drittanbietern, aus einem Transformer heraus zu senden. Zu diesem Zweck können alle Transformer-Funktionen auf das Modul 'httpRequest' zugreifen. Das Modul wird als Funktion aufgerufen, die ein einzelnes Konfigurationsobjekt als Argumente verwendet. Dieses Objekt hat das gleiche Format wie das options-Objekt für das NPM-Modul [Request](https://www.npmjs.com/package/request#requestoptions-callback). Beispiel:

'''ts
handleInput: async () => {
  const result = await httpRequest({
    uri: "irgendein-uri",
    Methode: "POST",
    body: {},
    JSON: Stimmt
  });
  
Konsole.log(Ergebnis);
  Ergebnis zurückgeben;
}
''' 

!!! Warnung "Einschränkungen für das httpRequest-Modul"
    Standardmäßig ist es nur möglich, eine HTTP-Anfrage pro Transformer-Ausführung zu senden, und es ist standardmäßig nicht möglich, HTTP-Anfragen an andere Endpunkte zu senden.

### Cognigy NLU
Es ist möglich, Cognigy NLU aus einem Transformer heraus auszuführen. Alle Funktionen des NLU Transformers können auf die Funktion 'getCognigyNlu' zugreifen. Diese Funktion verwendet Zeichenfolgen als Argumente.
Beispiel:

'''ts
const cognigyNluResult = await getCognigyNlu(text + "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
''' 

### Sitzungsspeicher
Der Sitzungsspeicher ist ein Speicherobjekt, das für alle Transformer-Funktionen verfügbar ist und während der gesamten Sitzung verfügbar ist. Dies kann verwendet werden, um Variablen zu speichern, die später verwendet werden müssen, in anderen Transformer-Funktionen oder um den Konversationsstatus zu speichern. Es gibt eine Funktion namens "getSessionStorage", die für die Transformer-Funktionen verfügbar gemacht wird. Es wird ein Promise zurückgegeben, das mit dem 'sessionStorage'-Objekt aufgelöst wird, das wie ein normales Objekt manipuliert werden kann. Beispiel:

!!! Warnung "Mutation von Objekten in SessionStorage"
    Wenn Sie Objekte innerhalb von SessionStorage ändern möchten, empfiehlt es sich, sie nicht direkt, sondern lokal zu ändern und später zuzuweisen.

'''ts
const sessionStorage = await getSessionStorage();

sessionStorage.test = "testen";

Stummschalten komplexer Objekte
Anstatt die Objekte direkt in sessionStorage zu ändern
Ändern Sie sie lokal und weisen Sie sie dann dem sessionStorage zu
let tempArr = sessionStorage.arr || [];
tempArr.push(1);
tempArr.push(2);
sessionStorage.arr = tempArr;
''' 

### NPM-Modul
Die folgenden NPM-Module sind im Transformer verfügbar:

- UUID
-krypto
- _ (Lodash)
-Moment

### Protokollierung
Es ist möglich, die exponierten Module 'console.log', 'console.info' und 'console.error' in den Transformern zu verwenden. Dadurch wird das Protokoll auf der Seite [Projektprotokolle]({{config.site_url}}ai/resources/test/logs/) als Debug-Protokoll, Info-Protokoll bzw. Fehlerprotokoll angezeigt.

## Transformator-Einstellungen<div class="divider"></div>### Aktivieren
Um eine bestimmte Transformer-Funktion verwenden zu können, muss sie im Abschnitt Transformer-Einstellungen aktiviert werden. Es gibt einen Schalter, um jede einzelne Transformer-Funktion zu aktivieren. Transformer-Funktionen können vorübergehend deaktiviert werden, ohne dass der Code gelöscht werden muss.

### Fehlerbehandlung in Transformern
Die Standardfehlerbehandlung für Transformers besteht darin, den Fehler auf der Protokollseite zu protokollieren und dann mit der normalen Ausführung fortzufahren. Das heißt, wenn in der Transformer-Funktion ein Fehler auftritt, wird die Nachricht trotzdem so verarbeitet, als ob die Transformer-Funktion nicht vorhanden wäre. Es gibt eine Einstellung **Abort On Error**, die aktiviert werden kann, um die Ausführung vollständig zu stoppen, nachdem der Transformer einen Fehler ausgelöst hat. 

### Transformer-Stack debuggen
Wenn die Einstellung **Transformerstapel debuggen** aktiviert ist, werden die verschiedenen Ein- und Ausgänge der Transformer als Eingabeobjekt im Interaktionsfenster verfügbar gemacht. Beachten Sie, dass dies nur funktioniert, wenn Sie in das Interaktionsfenster schreiben, es ist nicht Teil des Eingabeobjekts, wenn andere Endpunkte verwendet werden.
Beispiel:

'''json
{
   "transformerStack":{
      "preNluInput":{
         "text":"Hallo!!"
      },
      "preNluOutput":{
         "text":"Hallo",
         "Daten":{

}
      },
      "postNluInput":{
         "text":"Hallo",
         "Daten":{

},
         "nluResult":{
            "Absicht":"",
            "intentScore":0,
            "slots":{

},
            "type":"Gruß"
         },
         "connectorOutput":null
      },
      "postNluOutput":{
         "Daten":{

},
         "nluResult":{
            "intent":"myIntent",
            "intentScore":1,
            "slots":{

},
            "type":"Gruß"
         }
      }
   }
}
''' 