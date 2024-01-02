---
 Titel: "Transformers" 
 Schnecke: "Transformatoren" 
 ausgeblendet: false 
---
# Transformatoren<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon-svg"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" width="60" height="60"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://github.com/Cognigy/Transformers" target="_blank">Cognigy/Transformers</a>
      </div>
      <div class="callout-subtext">Verweis auf das Cognigy-Repository auf GitHub      </div>
   </div>
</blockquote>

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">📘</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019704899-Transformers-Overview" target="_blank">Transformers Übersicht</a>
      </div>
      <div class="callout-subtext">Cognigy HelpCenter-Artikel      </div>
   </div>
</blockquote>## Beschreibung<div class="divider"></div>Endpunkttransformatoren ermöglichen die Änderung des Endpunktverhaltens. 

Sie können sie für Folgendes verwenden:

- Ändern Sie die Anforderungsnutzlast von einem Endpunkt, bevor sie an den Flow gesendet wird.
- Ändern Sie die Ausgaben eines Flows, bevor sie an den Benutzer gesendet werden 
- Erstellen Sie zusätzliche Integrationen mit einem benutzerdefinierten Endpunkt
- Transformieren Sie die Ausgabe eines Kanals, um auf einem anderen Kanal zu funktionieren, z. B. konvertieren Sie die Webchat-Ausgabe in eine WhatsApp-kompatible Ausgabe
- Behandeln von Webhook-Ereignissen aus benutzerdefinierten Diensten
- Übersetzen Sie die Nachrichten eines Benutzers in die Sprache des Flows

Die Transformer haben volle TypeScript-Unterstützung, was bedeutet, dass die Variablen und NPM-Module typisiert sind und es möglich ist, benutzerdefinierte Schnittstellen in den Transformer zu schreiben. TypeScript-Kenntnisse sind jedoch nicht erforderlich und es kann auch einfaches JavaScript verwendet werden.<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019893159-Cognigy-Sessions-Endpoint-Transformers" target="_blank">Technisches Video "Endpunkt Transformatoren"</a>
      </div>
      <div class="callout-subtext">Sehen Sie sich diese Folge von Cognigy Sessions an, um einen technischen Einblick zu erhalten      </div>
   </div>
</blockquote>## Transformator-Funktionen<div class="divider"></div>Die folgende Liste gibt einen Überblick über alle verfügbaren Transformer-Funktionen. Jede Transformer-Funktion hat ein eigenes Kapitel, das viel mehr ins Detail geht.

|Trafo-Funktion|	Beschreibung|
|--|--|
|[handleInput] ({{config.site_url}}ai/endpoints/transformers/input-transformer/)|Diese Transformer-Funktion wird ausgeführt, wenn ein Benutzer eine Nachricht an einen Endpunkt sendet, bevor der Flow ausgeführt wird. Der Rückgabewert der Funktion wird an den Flow gesendet.|
|[handleOutput] ({{config.site_url}}ai/endpoints/transformers/output-transformer/)|	Diese Transformer-Funktion wird für jeden Ausgang des Flows ausgeführt. Bei Webhook- und Socket-basierten Endpunkten wird der Rückgabewert an den Benutzer gesendet. Lesen Sie mehr [hier](#different-base-transformer-types).|
|[handleExecutionFinished] ({{config.site_url}}ai/endpoints/transformers/execution-finished-transformer/) |Diese Transformer-Funktion wird ausgeführt, wenn die Flow-Ausführung abgeschlossen ist. Bei REST-basierten Endpunkten wird der Rückgabewert an den Benutzer gesendet. Lesen Sie mehr [hier](#different-base-transformer-types).|
|[handleNotify] ({{config.site_url}}ai/endpoints/transformers/notify-transformer/) |Diese Transformer-Funktion wird ausgeführt, wenn die Endpoint Notify-API verwendet wird. Der Rückgabewert der Funktion wird als Benachrichtigung direkt an den Benutzer gesendet.|
|[handleInject] ({{config.site_url}}ai/endpoints/transformers/inject-transformer/) |Diese Transformer-Funktion wird ausgeführt, wenn die Endpoint Inject-API verwendet wird. Der Rückgabewert der Funktion wird an den Flow gesendet.|

## Einen Transformator erstellen

Um einen Transformer für einen Endpunkt zu erstellen, öffnen Sie die Registerkarte ''Transformer-Funktionen'' im Endpunkt. Hier sind die verschiedenen [Transformer-Einstellungen](#transformer-Einstellungen), die konfiguriert werden können, sowie der Transformer-Code-Editor.

!!! Warnung "Transformatorfunktionen aktivieren"
    Jede Transformer-Funktion ist standardmäßig deaktiviert und muss separat im Abschnitt [Transformer-Einstellungen](#transformer-Einstellungen) aktiviert werden.

Der Transformer-Code-Editor verfügt über einen Standardwert für neue Endpunkte, in dem kurz erläutert wird, wie die einzelnen Transformer-Funktionen verwendet werden sollten. Sobald ein bestimmter Transformer aktiviert wurde, wird der Code in der entsprechenden Transformer-Funktion ausgeführt.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/ec4fa74-Transformer_example.png" width="100%" />
   <figcaption>Persistentes Menü</figcaption>
</figure>

## Transformator-Einstellungen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/883b792-transformer.png" width="100%" />
</figure>

Um eine bestimmte Transformer-Funktion verwenden zu können, muss sie im Abschnitt Transformer-Einstellungen aktiviert werden. Es gibt einen Schalter, um jede einzelne Transformer-Funktion zu aktivieren. Transformer-Funktionen können dabei auch temporär deaktiviert werden, ohne den Code löschen zu müssen.

## Fehlerbehandlung in Transformatoren
Die Standardfehlerbehandlung für Transformers besteht darin, den Fehler auf der Protokollseite zu protokollieren und dann mit der normalen Ausführung fortzufahren. Das heißt, wenn in der Transformer-Funktion ein Fehler auftritt, wird die Nachricht trotzdem so verarbeitet, als ob die Transformer-Funktion nicht vorhanden wäre.

Wenn der Transformer ein wichtiger Bestandteil der Pipeline ist, z. B. beim Erstellen einer benutzerdefinierten Endpunktintegration, ist es möglicherweise nicht sinnvoll, den zugrunde liegenden Endpunkt im Fehlerfall auszuführen. Es gibt eine Einstellung namens 'Abort On Error', die eingeschaltet werden kann, um die Ausführung vollständig zu stoppen, nachdem der Transformer einen Fehler ausgelöst hat. 

!!! Warnung "Zeilennummer in Fehlerprotokollen"
      Wenn während der Ausführung ein Fehler in einem Transformer ausgelöst wird, wird die Zeilennummer, in der der Fehler aufgetreten ist, im Protokoll aufgeführt. Die Zeilennummer kann etwas falsch sein, da sie Zeilen, die von Schnittstellen und Kommentaren belegt sind, nicht berücksichtigt.

Beachten Sie auch, dass keine Zeilennummer angezeigt wird, wenn der Fehler durch einen Fehler bei der Überprüfung des Rückgabewerts verursacht wird.

## Transformer-Ausführung stoppen<div class="divider"></div>Jede Transformer-Funktion erwartet einen bestimmten Rückgabewert, den sie dann je nach spezifischer Transformer-Funktion auf unterschiedliche Weise verwendet. In einigen Fällen kann es wünschenswert sein, die Ausführung vollständig zu stoppen, z. B. wenn die Ausgabe des Flows bereits an eine andere Plattform weitergeleitet wurde. Um dies zu erreichen, kann die Transformer-Funktion einen falschen Wert zurückgeben, z.B. null oder void.

## Verfügbare Module<div class="divider"></div>### NPM-Modul
Die folgenden NPM-Module sind im Transformer verfügbar:

| NPM-Modul |
|-------------|
| UUID |
| Krypto |
| _ (Lodash) |
| Augenblick |
| XMLJS |

### Textbereinigungsklasse

Transformatoren, wie z. B. Codeknoten, können die Funktion 'getTextCleaner' verwenden, um eine Instanz von [Text Cleaner](.. /.. /tools/text-cleaner.md), die Funktionen zum Bereinigen von Text verfügbar macht.

## Protokollierung
Es ist möglich, die exponierten Module 'console.log', 'console.info' und 'console.error' in den Transformern zu verwenden. Dadurch wird das Protokoll auf der Seite [Projektprotokolle]({{config.site_url}}ai/resources/test/logs/) als Debug-Protokoll, Info-Protokoll bzw. Fehlerprotokoll angezeigt.

## HTTP-Anfragen senden
Es ist möglich, HTTP-Anfragen aus einem Transformer heraus an externe Dienste zu senden. Zu diesem Zweck können alle Transformer-Funktionen auf das Modul 'httpRequest' zugreifen. Das Modul wird als Funktion aufgerufen, die ein einzelnes Konfigurationsobjekt als Argumente verwendet. Dieses Objekt hat das gleiche Format wie das options-Objekt für das NPM-Modul [Request](https://www.npmjs.com/package/request#requestoptions-callback). Beispiel:

**HTTP-Anforderung**
'''JavaScript
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

## Session-Speicher

Der Sitzungsspeicher ist ein Speicherobjekt, das für alle Transformer-Funktionen verfügbar ist und während der gesamten Sitzung verfügbar ist. Dies kann verwendet werden, um Variablen zu speichern, die später verwendet werden müssen, in anderen Transformer-Funktionen oder um den Konversationsstatus zu speichern. Es gibt eine Funktion namens "getSessionStorage", die für die Transformer-Funktionen verfügbar gemacht wird und die "userId" und "sessionId" als Argumente verwendet. Es wird ein Promise zurückgegeben, das mit dem 'sessionStorage'-Objekt aufgelöst wird, das wie ein normales Objekt manipuliert werden kann. Beispiel:

!!! Warnung "Mutation von Objekten innerhalb von SessionStorage"
      Komplexe Objekte (z.B. Arrays) sollen nicht direkt, sondern lokal mutiert (z.B. gepusht) und dem sessionStorage neu zugewiesen werden. Siehe unten.

**Sitzungsspeicher**
'''JavaScript
const handleOutput: async ({ userId, sessionId }) => {
	const sessionStorage = await getSessionStorage(userId, sessionId);

sessionStorage.test = "testen";
  
Stummschalten komplexer Objekte
  Anstatt die Objekte direkt in sessionStorage zu ändern
  Ändern Sie sie lokal und weisen Sie sie dann dem sessionStorage zu
  let tempArr = sessionStorage.arr || [];
  tempArr.push(1);
  tempArr.push(2);
  sessionStorage.arr = tempArr;
}
'''

## Verschiedene Sockel-Transformator-Typen<div class="divider"></div>Es gibt drei verschiedene Arten von Transformern, und jeder Endpunkt implementiert einen von ihnen. Jeder Transformer-Typ hat eine etwas andere Art und Weise, die spezifischen Transformatorfunktionen zu handhaben.

Die folgenden Abschnitte geben einen kurzen Überblick über die verschiedenen Transformer-Typen. Wie jede Transformer-Funktion für jeden Transformer-Typ unterschiedlich funktioniert, wird in den Unterkapiteln zu den einzelnen Transformer-Funktionen erklärt.

## REST-Transformator
Der REST-Transformator wird für alle Endpunkte implementiert, die REST-basiert sind, was bedeutet, dass sie eine Nachricht vom Benutzer empfangen und eine Antwort zurücksenden. Für diese Endpunkte ist es möglich, mehr Say-Knoten im Flow zu haben, aber alle Ausgaben werden zu einer Ausgabe verkettet, die dann an den Benutzer gesendet wird.

Die REST-basierten Endpunkte sind:

| REST-Endpunkte |
|------------------|
| Alexa |
| Dialogflow |
| Twilio |
| Twilio SMS |
| Microsoft Teams |
| Userlike |
| AudioCodes |
| RUHE |

## Webhook-Transformator
Der Webhook-Transformer ist für alle Endpunkte implementiert, die Webhook-basiert sind, was bedeutet, dass sie eine Nachricht vom Benutzer erhalten, dem Benutzer aber mehrmals über eine Webhook-URL antworten können.

Die Webhook-basierten Transformer sind: 

| Webhook-Endpunkte |
|-------------------------|
| Facebook Messenger |
| Slack |
| Microsoft Bot Framework |
| Sonnenschein-Gespräche |
| LINIE |
| RingCentral Engage |
| Gegensprechanlage |
| WhatsApp |
| Webhook |

## Steckdosen-Transformator
Der Socket-Transformator wird für alle Endpunkte implementiert, die Sockets für die Kommunikation verwenden. Diese Endpunkte sind:

| Socket-Endpunkte |
|------------------|
| Webchat |
| Steckdose |

## Erstellen eines benutzerdefinierten Endpunkts
Um eine Integration mit einem benutzerdefinierten Kanal zu erstellen, müssen Sie zunächst herausfinden, um welche Art von Endpunkt es sich bei diesem benutzerdefinierten Kanal handelt. Wenn bekannt ist, ob die benutzerdefinierte Integration eine REST-basierte API, eine Webhook-API oder Socket-basiert ist, kann der entsprechende Endpunkt in Cognigy.AI erstellt werden. 

Ein Beispiel für eine benutzerdefinierte Integration finden Sie im Beispiel-Repository (siehe unten).

## Beispiel-Repository<div class="divider"></div>Beispielimplementierungen für verschiedene Transformer finden Sie in unserem neuen GitHub-Repository:

https://github.com/Cognigy/TransformersSamples<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon-svg"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" width="60" height="60"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://github.com/Cognigy/TransformersSamples" target="_blank">Transformator-Beispiele</a>
      </div>
      <div class="callout-subtext">Verweis auf das Cognigy-Repository auf GitHub      </div>
   </div>
</blockquote>