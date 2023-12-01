---
 title: "HTTP-Anfrage" 
 slug: "HTTP-Anfrage" 
 ausgeblendet: false 
---
# HTTP-Anfrage

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/services/http-request.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Durch die Verwendung des **HTTP Request Node** können Sie eine HTTP-Anforderung an eine bestimmte Ressource aus einem [Flow]({{config.site_url}}ai/resources/build/flows/) ausführen.

Wann immer der HTTP-Anforderungsknoten innerhalb einer [Flow]({{config.site_url}}ai/resources/build/flows/)-Ausführung ausgelöst wird, führt er die definierte Anforderung an die angegebene URL aus.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/b29e843-http-screenshot.jpg" width="100%" />
  <figcaption>Eingabeaufforderung zur Konfiguration des HTTP-Anforderungsknotens</figcaption>
</figure>

## Anfrage-Methoden<div class="divider"></div>Der HTTP-Knoten kann die typischen CRUD-Methoden ausführen, die wie folgt lauten:

-ERHALTEN
-BEREITSTELLEN
-FLICKEN
-STELLEN
-LÖSCHEN

## Allgemeine Konfiguration<div class="divider"></div>Jede Anforderungsmethode verfügt über bestimmte Felder, die sie mit den anderen Methoden teilt. Dies sind die Felder:

- Internetadresse
-Kopfball
- Art der Autorisierung
- Kontext-Speicher
-Asynchron
-Caching
    - Ablauf des Caches
### URL
---
Die URL zur Zielressource: 'https://api-endpoint.com/resource'.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/b29e843-http-screenshot.jpg" width="100%" />
  <figcaption>URL-Feld</figcaption>
</figure>

!!! Warnung "URL-Kodierung"
    Cognigy.AI erwartet eine nicht codierte URL zur Zielressource. Dekodieren Sie alle codierten URLs, um sicherzustellen, dass die HTTP-Anforderung erfolgreich ausgeführt werden kann. 

Weitere Informationen finden Sie unter [URL-Kodierung (auf en:WP)](https://en.wikipedia.org/wiki/URL%20encoding).

### Kopfzeilen
---
Hier können Sie die Header zu Ihrem HTTP-Request hinzufügen. Alle Header werden in einem JSON-Objekt aufgelistet, das das folgende Format haben sollte.

'''
{
  "header-name": "Header-Wert",
  "another-header-name": "ein anderer Header-Wert"
}
'''

Um das Hinzufügen von Kopfzeilen zu erleichtern, haben wir eine Liste von Schlüssel-Wert-Feldern erstellt, die mit Zeichenfolgen gefüllt werden können. Sobald Sie einen neuen Wert eingeben, erscheint ein neues Paar.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/http-request-node-headers1.png" width="75%" />
  <figcaption>Schlüssel-Wert-Paare</figcaption>
</figure>

Alternativ können Sie auf die Schaltfläche "JSON-Editor verwenden" klicken, um zwischen dieser Liste und dem JSON-Editor zu wechseln. Der resultierende JSON-Code ist immer derselbe.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/http-request-node-headers2.png" width="75%" />
  <figcaption>JSON-Editor</figcaption>
</figure>

Sie können auch die Erfassung der Antwortheader zusammen mit dem Anforderungstext am angegebenen Speicherort aktivieren.

### Authentifizierung
---
Folgende Typen werden unterstützt:

- Keine Authentifizierung
- Grundlegende Authentifizierung
- OAuth2-Schnittstelle
- API-Schlüssel - "Autorisierung: ApiKey"
- API-Schlüssel - "X-API-Schlüssel"

Die Authentifizierung verwendet [Connections]({{config.site_url}}ai/resources/build/connections/), was bedeutet, dass die eigentlichen Authentifizierungsinformationen verschlüsselt werden können. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/32a68b3-authentication.jpg" width="100%" />
  <figcaption>Auswahl der Berechtigungen</figcaption>
</figure>

Wenn eine neue Authentifizierungsverbindung erstellt wird, indem Sie auf die Schaltfläche "+" neben dem Feld Parameter klicken, wird das Fenster "Neue Verbindung" angezeigt, in dem Sie die für den Authentifizierungstyp spezifischen Details anfordern können.

Als Beispiel: Unten wird die OAuth2-Verbindung angezeigt, mit der benutzerdefinierte Parameter konfiguriert werden können.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/312b81a-Oauth2_Connection.PNG" width="100%" />
  <figcaption>Beispiel für eine Verbindung: OAuth2</figcaption>
</figure>

Wenn Sie einen anderen Autorisierungstyp als *No Auth* auswählen, werden zusätzliche Felder zur Verfügung gestellt, die sich auf den jeweiligen Autorisierungstyp beziehen.

### Speicheroptionen
---
Hier legen Sie den Kontextschlüssel fest, in dem Sie die Antwort aus dem ausgeführten HTTP-Request speichern möchten. Dieses Feld ist erforderlich und muss einen gültigen Wert aufweisen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0db9cb2-db-resultstorage.jpg" width="100%" />
  <figcaption>Feld "Kontextspeicher"</figcaption>
</figure>

Nachdem die HTTP-Anforderung erfolgreich ausgeführt wurde, können Sie auf die Antwortnutzlast zugreifen, indem Sie Folgendes ausführen [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/):

'''
{{ " {{ Kontext.<yourContextStore> }}" }}
'''

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/310d590-http-caching.jpg" width="100%" />
  <figcaption>Ausführung und Caching</figcaption>
</figure>

### Ausführung & Caching
#### Anforderungen asynchron ausführen
Wenn diese Option aktiviert ist, führt der HTTP-Anforderungsknoten die Anforderung asynchron aus, d. h., er wartet nicht auf eine Antwort, bevor er mit der Ausführung des Flows fortfährt

#### Cache-Ergebnisse
Wenn diese Option aktiviert ist, speichert der HTTP-Knoten die Antworten zwischen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/7cd129c-ssl.JPG" width="100%" />
  <figcaption>Sicherheit</figcaption>
</figure>

### Sicherheit
#### Unsicheres SSL zulassen
Standardmäßig lehnt Cognigy.AI die Verbindung mit unsicheren SSL-Endpunkten ab, z. B. URLs ohne oder mit selbstsignierten Zertifikaten. Wenn Sie diese Option aktivieren, kann der Node auch eine Verbindung zu diesen URLs herstellen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c971806-errors.JPG" width="100%" />
  <figcaption>Fehlerbehandlung</figcaption>
</figure>

### Fehlerbehandlung
#### Fehlerprotokollierung
Wenn HTTP-Anforderungen den Statuscode > 299 zurückgeben, wird die Antwort als Fehler betrachtet. Mit dieser Einstellung kann der Benutzer entweder:

- den Fehler nicht protokollieren
- Protokollieren Sie den Fehler mit der Antwort vom Server und der URL
- Protokollieren Sie den Fehler, die Antwort, die URL und die Anforderungsnutzlast (**WARNUNG**: Dies könnte sensible Daten in den Protokollen offenlegen)

#### Flow-Ausführung bei Fehler abbrechen
Wenn aktiv, wird der Flow hier beendet, wenn die Antwort mit dem Statuscode > 299 zurückgegeben wird

## GET-Anfragen<div class="divider"></div>Die Konfigurationsaufforderung für die GET-Methode enthält alle oben beschriebenen Felder.

Die Ergebnisse der GET-Anforderung werden im Kontext des Flows gespeichert. Sie können die angeforderten Daten Ihrer GET-Anforderung abrufen, indem Sie mit dem Schlüssel, den Sie in den HTTP-Node-Einstellungen definiert haben, auf den Kontext zugreifen.

## POST-, PUT- und PATCH-Anfragen<div class="divider"></div>!!! Hinweis "Content-Type-Header"
    Der standardmäßige Content-Type-Header lautet *application/x-www-form-urlencoded*. Wenn Sie einen anderen Content-Type senden möchten, müssen Sie den Header-Wert spezifisch festlegen oder JSON wie unten beschrieben verwenden.

### Nutzlast
Hier können Sie die Payload Ihres POST-, PUT- oder PATCH-Requests definieren. Sie können zwischen JSON (Standard) und Text wählen.

Wenn Sie eine JSON-Payload für den Zugriff auf Cognigy-Objekte wie Input, Context oder Profile verwenden, lesen Sie [CognigyScript](.. /.. /tools/cognigy-script.md#for-json-arguments) für eine Beispielnutzlast.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/b364540-http-post-payload.jpg" width="100%" />
  <figcaption>JSON als POST-, PUT- oder PATCH-Request-Payload</figcaption>
</figure>

Bei den Payloads kann es sich um Text, JSON, XML, Formdata (siehe unten) oder andere Textdaten handeln.

!!! Tipp "application/x-www-form-urlencoded"
    Sie können URL-codierte Daten senden, indem Sie keinen bestimmten Header festlegen und dann eine URLEncodierte Nicht-JSON-Payload senden, z. B. *"To=%2B49555262626&Url=https%3A%2F%2Fhandler.twilio.com%2Ftwiml%2FEHf9b7af093c31b5baa1414be891"*

Mit Cognigy.AI 4.10.0 wurde **Form-Data** als "Payload Type" zum HTTP Node Deskriptor hinzugefügt.

Wie benutzt man es:

• Fügen Sie einen HTTP-Anforderungsknoten in Ihren Flow ein.

• Die Methoden POST, PUT, PATCH Abschnitt "payload" stellen einen zusätzlichen Payload-Typ im Dropdown zur Verfügung: "Form-Data".

• Wenn Sie Formulardaten auswählen, können Sie Schlüssel-Wert-Paare als JSON-Nutzlast speichern.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/HTTP request Node.png" width="80%" />
  <figcaption>Editor für HTTP-Anforderungsknoten</figcaption>
</figure>
!!! Notiz "Notiz"
    Die Schlüssel-Wert-Paare müssen vom Typ Text sein. Daten werden nicht unterstützt.

Wenn Sie das Interaktions-Panel verwenden, können Sie die Antwort auf der Registerkarte "Interaction Panel" (INFO) überprüfen.

## DELETE-Anfragen<div class="divider"></div>Die Eingabeaufforderung zur Konfiguration der DELETE-Anforderung zeigt die Felder **Allgemeine Konfiguration** an (siehe oben).</yourContextStore>