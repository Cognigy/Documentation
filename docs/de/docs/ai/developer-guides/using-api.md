---
 title: "Verwenden der API" 
 slug: "using-api" 
 ausgeblendet: false 
---
# Verwendung der API

## Was ist die Cognigy API?<div class="divider"></div>Für die Kommunikation mit der Cognigy.AI Installation verwendet das Frontend eine HTTP-basierte API.
Diese API kann auch von Entwicklern verwendet werden, um benutzerdefinierte Integrationen mit Cognigy.AI zu erstellen. Wir bieten auch eine Bibliothek in Form eines NPM-Pakets namens "rest-api-client" an, das dazu beiträgt, die Belastung durch die Nutzung unserer APIs zu verringern. Diese Bibliothek ist auf NPM verfügbar und in modernem JavaScript einschließlich Typescript-Definitionen geschrieben.

## Was sind die API-Funktionen?<div class="divider"></div>Jede Art von Information, die sichtbar ist, und jede Art von Aktion, die im Frontend ausgeführt werden kann, wird über diese API abgefragt oder ausgelöst, die auch für Entwickler zu 100% verfügbar ist. 

## Was benötige ich, um auf die API zugreifen zu können?<div class="divider"></div>Um die API verwenden zu können, benötigen Sie zwei Dinge:

## Die API-Basis-URL

Dies ist die URL, unter der die API verfügbar ist.

| Umwelt | API-Basis-URL |
|--------------------------|---------------------------------------------------------------------------------------------------------|
| Testversion (trial.cognigy.ai) | "https://api-trial.cognigy.ai" |
| App (app.cognigy.ai) | "https://api-app.cognigy.ai" |
| On-Premise-Installationen | Dies ist die URL, die in Ihrer Datei "production.env" als "BACKEND_BASE_URL_WITH_PROTOCOL" definiert wurde | 

## API-Schlüssel verwalten

Ein API-Schlüssel wird verwendet, um sich bei der Cognigy.AI-API als Benutzer im System zu authentifizieren, ohne die Anmeldeinformationen des Benutzers offenzulegen.

Um einen API-Schlüssel zu generieren, lesen Sie [API-Schlüssel erstellen](.. /tools/user-menu/my-profile.md#create-api-keys).

Um einen API-Schlüssel zu löschen, lesen Sie [API-Schlüssel widerrufen](.. /tools/user-menu/my-profile.md#revoke-api-keys).<div style="margin-bottom: 120px"/>## Wie verwende ich die API?<div class="divider"></div>Die Cognigy-API enthält eine OpenAPI-Dokumentation, in der die verschiedenen API-Operationen im Detail beschrieben werden. Für die Testumgebung von Cognigy finden Sie es beispielsweise unter https://api-trial.cognigy.ai/openapi.

Um einen Aufruf der API durchzuführen, führen Sie eine HTTP-Anforderung aus, und fügen Sie entweder
- einen Abfrageparameter 'api_key' mit Ihrem API-Schlüssel als Wert
- einen Header 'X-API-Key'mit Ihrem API-Schlüssel als Wert

Nehmen wir an, ich habe eine Cognigy.AI-Installation, die unter "https://api-dummy.cognigy.ai" läuft, und ich habe mir einen API-Schlüssel mit der Aufschrift "myDummyApiKey123" erstellt. 

Ich kann jetzt einen neuen Browser-Tab öffnen und auf "https://api-dummy.cognigy.ai/projects?api_key=myDummyApiKey123" gehen, um eine Liste aller Projekte zu erhalten, die mir zugewiesen sind, einschließlich Meta-Informationen zu den Ressourcen innerhalb dieses Projekts.
Dieser Aufruf wird z.B. vom Frontend verwendet, wenn Sie die Seite **Projekte** laden.

## Super API-Schlüssel<div class="divider"></div>Die meisten APIs in Cognigy.AI sind agentengebunden, was bedeutet, dass ein Entwickler, der unsere API verwendet, nur Informationen von Agenten anfordern kann, auf die er tatsächlich Zugriff hat. Es gibt bestimmte Anwendungsfälle, in denen z.B. alle Flows innerhalb einer bestimmten Organisation aufgelistet werden sollen. Für solche Anwendungsfälle haben wir mit unserem Release 4.1.4 eine Funktion namens "Super API-Key" eingeführt.

!!! Warnung "Verfügbarkeit von Funktionen"
    Diese Funktion ist nur für On-Premise-Kunden mit separaten Cognigy.AI Installationen verfügbar.

Diese Funktion ist standardmäßig in allen Cognigy.AI Installationen deaktiviert. Unsere On-Premise-Kunden können diese Funktion aktivieren, indem sie die folgende Umgebungsvariable auf "true" setzen:

''''JavaScript
FEATURE_USE_SUPERAPIKEY_API
''''

''''
https://api-trial.cognigy.ai/openapi#post-/management/v2.0/organisations/{organisationId}/apikeys
''''

Dieser API-Schlüssel ist nicht an einen bestimmten Benutzer gebunden und befindet sich im Bereich einer Organisation. Es kann verwendet werden, um alle Assets und Objekte innerhalb des Systems zu manipulieren.

!!! Hinweis "Super API-Key und TTL"
    Dieser API-Schlüssel hat aus Sicherheitsgründen eine Standard-TTL (Time to Life) von 15 Minuten. Sobald der Schlüssel erstellt wurde, ist er nur noch 15 Minuten gültig.