# HTTP Request

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c282bff-service-htto.jpg" width="100%" />
  <figcaption>Figure 1: HTTP Request Node</figcaption>
</figure>

## Description
<div class="divider"></div>
By using the **HTTP Request Node** you are able to perform a HTTP request to a specific resource from within a [Flow]({{config.site_url}}ai/resources/build/flows/).

Whenever the HTTP Request Node gets triggered within a [Flow]({{config.site_url}}ai/resources/build/flows/) execution it will perform the defined request to the specified URL.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/b29e843-http-screenshot.jpg" width="100%" />
  <figcaption>Figure 2: HTTP Request Node Configuration Prompt</figcaption>
</figure>

## Request Methods
<div class="divider"></div>
The HTTP Node can execute the typical CRUD methods, which are:

- GET
- POST
- PATCH
- PUT
- DELETE

## General Configuration
<div class="divider"></div>
Each request method has certain fields which it shares with the other methods. These are the fields:

- URL
- Headers
- Authorization Type
- Context Store
- Async
- Caching
    - Cache Expiry
### URL
---
The URL to the targeted resource.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/b29e843-http-screenshot.jpg" width="100%" />
  <figcaption>Figure 4: URL field</figcaption>
</figure>

???+ warning "URL-Encoding"
    Cognigy.AI expects an un-encoded URL to the targeted resource. Please decode any encoded URL to ensure that the HTTP Request can be executed successfully. 

    For more information see [URL encoding (on en:WP)](https://en.wikipedia.org/wiki/URL%20encoding).

### Headers
---
Here you can add the headers to your HTTP request. All headers are listed in one JSON object, which should have the following format.

```
{
  "header-name": "header value",
  "another-header-name": "another header value"
}
```

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/97c2a2f-http-request-node-headers.png" width="75%" />
  <figcaption>Figure 5: Headers field</figcaption>
</figure>

You can also enable capturing the response headers along with the request body in the specified storage location.

### Authentication
---
The supported types are:

- No Auth
- Basic Auth
- OAuth2
- API Key - "Authorization: ApiKey"
- API Key - "X-API-Key"

Authentication makes use of [Connections]({{config.site_url}}ai/resources/build/connections/), which means that the actual authentication information can be encrypted. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/32a68b3-authentication.jpg" width="100%" />
  <figcaption>Figure 6: Authorization Selection</figcaption>
</figure>

When a new authentication connection is created by clicking the "+" button next to the Parameters field, the "New Connection" window will appear to request the details specific to the authentication type.

As an example: The OAuth2 Connection is displayed below, allowing customized parameters to be configured.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/312b81a-Oauth2_Connection.PNG" width="100%" />
  <figcaption>Figure 7: Example Connection: OAuth2</figcaption>
</figure>

In case you select an authorization type other than *No Auth*, additional fields will be provided which relate to the respective authorization type.

### Storage Options
---
Here you define the context key where you want to store the response from the executed HTTP request. This field is required and needs to have a valid value.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0db9cb2-db-resultstorage.jpg" width="100%" />
  <figcaption>Figure 8: Context Store field</figcaption>
</figure>

After the HTTP request has been successfully executed you can access the response payload by executing the following [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/):

```
{ { context.<yourContextStore> } }
```

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/310d590-http-caching.jpg" width="100%" />
  <figcaption>Figure 9: Execution and Caching</figcaption>
</figure>

### Execution & Caching
#### Execute Requests asynchronously
When enabled, the HTTP Request Node will execute the request asynchronously, meaning that it will not wait for a response before continuing flow execution

#### Cache Results
When enabled the HTTP Node will cache the responses.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/7cd129c-ssl.JPG" width="100%" />
  <figcaption>Figure 10: Security</figcaption>
</figure>

### Security
#### Allow Insecure SSL
By default Cognigy.AI will reject connecting against insecure SSL endpoints, such as URLs with no or self-signed certificates. Activating this option will allow the Node to connect against these URLs as well.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/c971806-errors.JPG" width="100%" />
  <figcaption>Figure 11: Error Handling</figcaption>
</figure>

### Error Handling
#### Error Logging
If HTTP Requests return a status code > 299, the response is considered an error. This setting allows the user to either:

- not log the error
- log the error with the response from the server and the URL
- log the error, the reponse, the URL and the request payload (**WARNING**: This could expose sensitive data in the logs)

#### Abort Flow Execution on Error
If active, the Flow will stop here if the response returned with a status code > 299

## GET Requests
<div class="divider"></div>
The GET method configuration prompt has all the fields described above.

The results of the GET request are stored in the context of the flow. You can retrieve the requested data of your GET request by accessing the context with the key you defined in the HTTP Node settings.

## POST, PUT and PATCH Requests
<div class="divider"></div>

???+ info "Content-Type Headers"
    The standard Content-Type header is *application/x-www-form-urlencoded*. If you want to send another Content-Type, you have to set the header value specifically or use JSON as described below.

### Payload
Here you can define the payload of your POST, PUT or PATCH request. You can choose between JSON (standard) and Text.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/b364540-http-post-payload.jpg" width="100%" />
  <figcaption>Figure 12: JSON as a POST, PUT or PATCH Request Payload</figcaption>
</figure>

Payloads can be text, JSON, XML, Formdata (see below) or any other textual data.

???+ success "application/x-www-form-urlencoded"
    You can send URL Encoded data by setting no specific header and then sending a URLEncoded non-JSON payload such as *"To=%2B49555262626&Url=https%3A%2F%2Fhandler.twilio.com%2Ftwiml%2FEHf9b7af093c31b5baa1414be891"*

With Cognigy.AI 4.10.0 **Form-Data** as "Payload Type" has been added to the HTTP Node descriptor.

How to use it:

• Insert an HTTP Request Node in your Flow.

• The methods POST, PUT, PATCH section "payload" provide an additional payload-type in the dropdown: "Form-Data".

• When you select Form-Data, you are able to save key-value pairs as JSON payload.
<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/HTTP request Node.png" width="80%" />
  <figcaption>HTTP Request Node editor</figcaption>
</figure>
???+ info "Note"
    The key-value pairs must be of type text. Data is not supported.

When using the Interaction Panel you can inspect the response in the "Interaction Panel" INFO tab.

## DELETE Requests
<div class="divider"></div>
The DELETE request configuration prompt exposes the **General Configuration** fields (see above).