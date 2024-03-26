---
title: "Funktionen" 
slug: "Funktionen" 
Beschreibung: "Cognigy-Funktionen sind Codeblöcke, die innerhalb Ihrer Cognigy.AI-Installation ausgeführt werden können und Sie bei lang andauernden asynchronen Prozessen unterstützen, wie z. B. der Interaktion mit Systemen von Drittanbietern über die HTTP-API."
ausgeblendet: false 
---
# Funktionen 

Cognigy-Funktionen sind Codeblöcke, die innerhalb Ihrer Cognigy.AI-Installation ausgeführt werden können und Sie bei lang andauernden asynchronen Prozessen unterstützen, wie z. B. der Interaktion mit Drittsystemen über die HTTP-API.

Funktionen sind unabhängig von Flows, können aber von einem Flow aus ausgelöst werden und können auch die [Inject & Notify](.. /.. /endpoints/inject-and-notify.md), um ihre Ergebnisse zurück in einen Flow zu senden.

Beim Ausführen einer Funktion können Sie zusätzliche Parameter übergeben, die dann im Funktionscode zur Verfügung stehen.

Sie können mit der Verwendung von Functions beginnen, indem Sie im Menü auf der linken Seite zu **Build > Functions** navigieren.<br>## Einschränkungen

Die maximale Laufzeit für eine Instanz einer Cognigy-Funktion ist auf 15 Minuten begrenzt. Wenn Sie über eine On-Premise-Umgebung verfügen, können Sie diesen Grenzwert ändern.

## Konfiguration und Überwachung

Mit dem **Funktions-Editor** können Sie ein Code-Snippet in JavaScript oder TypeScript definieren.

Sie können über die Argumente der Funktion auf die Objekte "parameters" und "api" zugreifen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Function_editor.png" width="100%" />
</figure>

## Interaktion mit Drittsystemen

Sie können HTTP-Requests verwenden, um mit Drittsystemen zu interagieren.

''''JavaScript
const response = await api.httpRequest({
    Methode: "get",
    url: "https://example.com/api/v2",
    Kopfzeilen: {
        "Akzeptieren": "Anwendung/JSON"
    }
});
''''

## Interagieren mit Flows

Sie können Funktionen verwenden, um mit Flows zu interagieren, indem Sie die Schaltfläche [Inject & Notify](.. /.. /endpoints/inject-and-notify.md)-APIs.

In den folgenden Beispielen wird davon ausgegangen, dass Sie "userId" und "sessionId" über die Parameter der Funktion übergeben.

''''JavaScript
const { userId, sessionId } = Parameter;

api.inject({
    userId,
    sessionId,
    text: "Dieser Text wurde durch eine Funktion eingefügt"
});
''''

**Ausführen eines "Notify"-Anrufs**

''''JavaScript
const { userId, sessionId } = Parameter;

api.notify({
    userId,
    sessionId,
    text: "Dieser Text wurde durch eine Funktion eingefügt"
});
''''

### Überwachung

Wenn Sie auf die Registerkarte **Instanzen** wechseln, können Sie einen Ausführungsverlauf für die aktuell bearbeitete Funktion anzeigen. Jede Ausführung listet den aktuellen Ausführungsstatus, die Triggerquelle, die Startzeit und die Endzeit auf.

Wenn Sie mit der Maus über ein Element fahren, können Sie auch die Parameter sehen, die für diese einzelne Ausführung bereitgestellt wurden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Function_instances.png" width="100%" />
</figure>

## Auslösen einer Funktion

Cognigy-Funktionen können auf drei verschiedene Arten ausgelöst werden:

- [Verwenden der Benutzeroberfläche](#using-the-ui)
- [Verwenden der REST-API](#using-the-rest-api)
- [Verwenden eines Knotens](#using-a-Knoten)

### Verwenden der Benutzeroberfläche

Klicken Sie auf der Seite **Funktions-Editor** auf die Schaltfläche **Ausführen** in der oberen linken Ecke der Seite.
Mit dieser Aktion wird die Funktion ohne Parameter ausgeführt. 

Um eine Funktion mit Parametern auszuführen, klicken Sie auf die Schaltfläche **Pfeil** neben der Schaltfläche **Ausführen**.
Diese Aktion öffnet einen Dialog, in dem Sie zusätzliche Parameter als JSON-Objekt definieren können.

### Verwenden der REST-API

Sie können eine Funktion mithilfe der REST-API auslösen.
Weitere Informationen finden Sie in der [OpenAPI](https://api-trial.cognigy.ai/openapi#post-/v2.0/functions/-functionId-/trigger)-Dokumentation.

### Verwenden eines Knotens

Um eine Funktion aus einem Flow auszulösen, verwenden Sie die [Funktion auslösen](.. /.. /flow-nodes/logic/trigger-function.md) Knoten.

## Mehr Informationen

- [Injizieren & Benachrichtigen]({{config.site_url}}ai/endpoints/inject-and-notify/)
- [OpenAPI-Dokumentation](https://api-trial.cognigy.ai/openapi#post-/v2.0/functions/-functionId-/trigger)
- [Trigger-Funktion]({{config.site_url}}ai/flow-nodes/logic/trigger-function/)<!--

Cognigy Functions are a big leap forward when it comes to running asynchronous code in the background. 
Functions allow you to schedule long-running code (e.g. 10 minutes!) in the background. 
Functions can be triggered and started via our [RESTful API](https://api-trial.cognigy.ai/openapi) or from within your Flows. Your code in Functions will be executed in a save containment and can inject results back into your users conversational sessions. 

**Cognigy Functions** improves the AI solution and enables you to create asynchronous solutions in addition to the Cognigy Flows feature, which creates synchronous solutions. 

As soon as you e.g. have to start a polling job on a third-party system (e.g. an RPA tool), you need an application that can poll the external system and then use Cognigy **inject/notify API** to resolve with some data.

Cognigy Functions provides a tool for you that can be used to implement operations like this and e.g. kick-off a polling job.

Cognigy Functions are a way for you to implement long-running custom-code which can be started from within a Flow but is not limited to the execution time of such. It can interact with third-party platforms and APIs. Cognigy Functions can be started using some **Trigger**, will then be executed and can "report" their status back into a Flow using inject/notify.

Good examples for a Cognigy function are:

•	you want to start polling a third-party system for updates, e.g. while you integrate your bots with something like an RPC tool.
•	you want to execute complex code in an asynchronous way without your Flows being slow.
•	you have code that runs for quite some time, e.g. 10 minutes - without actually being responsible to run/host the code.

-->