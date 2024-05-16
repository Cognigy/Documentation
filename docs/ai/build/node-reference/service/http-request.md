---
title: "HTTP Request" 
slug: "http-request" 
hidden: false 
---

# HTTP Request

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/http-request.png" width="80%" />
</figure>

## Description

By using the HTTP Request Node, you can perform an HTTP request to a specific resource from within a Flow.

Whenever the HTTP Request Node is triggered during a Flow execution, it will perform the defined request to the specified URL.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/b29e843-http-screenshot.jpg" width="100%" />
  <figcaption>HTTP Request Node Configuration Prompt</figcaption>
</figure>

## Limitations

The default timeout for the HTTP Request Node is 15 seconds in a shared SaaS environment. It can be changed for on-premises installations via the `HTTP_NODE_TIMEOUT_IN_SECONDS` environment variable. For dedicated SaaS installations, contact Cognigy technical support.

## Request Methods

The HTTP Node can execute the typical CRUD methods, which are:

- `GET`
- `POST`
- `PATCH`
- `PUT`
- `DELETE`

## General Configuration

Each request method shares certain fields with the others:

- URL
- Headers
- Authorization Type
- Context Store
- Async
- Caching
    - Cache Expiry

### URL

The URL to the targeted resource: `https://api-endpoint.com/resource`.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/b29e843-http-screenshot.jpg" width="100%" />
  <figcaption>URL field</figcaption>
</figure>

!!! warning "URL-Encoding"
    Cognigy.AI expects an un-encoded URL to the targeted resource. Decode any encoded URL to ensure that the HTTP Request can be executed successfully. 

    For more information see [URL encoding (on en:WP)](https://en.wikipedia.org/wiki/URL%20encoding).

### Headers

Here you can add the headers to your HTTP request. All headers are listed in one JSON object, which should have the following format.

```
{
  "header-name": "header value",
  "another-header-name": "another header value"
}
```

To make it easier to add headers, we created a list of key-value fields that can be filled with strings. As soon as you enter a new value, a new pair will appear.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/http-request-node-headers1.png" width="75%" />
  <figcaption>Key-Value pairs</figcaption>
</figure>

Alternatively, you can click the **Use JSON Editor** button to switch between this list and the JSON editor. The resulting JSON will always be the same.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/http-request-node-headers2.png" width="75%" />
  <figcaption>JSON Editor</figcaption>
</figure>

You can also enable capturing the response headers along with the request body in the specified storage location.

### Authentication

The supported types are:

- No Auth
- Basic Auth
- OAuth2
- API Key - "Authorization: ApiKey"
- API Key - "X-API-Key"

Authentication makes use of [Connections](../../connections.md), which means that the actual authentication information can be encrypted. 

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/32a68b3-authentication.jpg" width="100%" />
  <figcaption>Authorization Selection</figcaption>
</figure>

When a new authentication connection is created by clicking the "+" button next to the Parameters field, the "New Connection" window will appear to request the details specific to the authentication type.

As an example: The OAuth2 Connection is displayed below, allowing customized parameters to be configured.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/312b81a-Oauth2_Connection.PNG" width="100%" />
  <figcaption>Example Connection: OAuth2</figcaption>
</figure>

In case you select an authorization type other than *No Auth*, additional fields will be provided which relate to the respective authorization type.

### Storage Options
---
Here you define the context key where you want to store the response from the executed HTTP request. This field is required and needs to have a valid value.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/0db9cb2-db-resultstorage.jpg" width="100%" />
  <figcaption>Context Store field</figcaption>
</figure>

After the HTTP request has been successfully executed you can access the response payload by executing the following [CognigyScript](../../cognigy-script.md):

```
{{ " {{ context.<yourContextStore> }}" }}
```

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/310d590-http-caching.jpg" width="100%" />
  <figcaption>Execution and Caching</figcaption>
</figure>

### Execution & Caching
#### Execute Requests asynchronously

When you enable the **Execute Requests asynchronously** option, the HTTP Request Node will execute the request without waiting for a response. 
This means that the execution of the Flow will continue without any delay.

##### Timeout

The timeout for canceling the request (in milliseconds).
The default value is `8000`.
This setting overrides the [global parameter value](#limitations) for your Node.

##### Retry attempts

The number of retry attempts in case of an error.

#### Cache Results

When enabled, the HTTP Node will cache the responses.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/7cd129c-ssl.JPG" width="100%" />
  <figcaption>Security</figcaption>
</figure>

### Security
#### Allow Insecure SSL
By default, Cognigy.AI will reject connecting against insecure SSL endpoints, such as URLs with no or self-signed certificates. Activating this option will allow the Node to connect against these URLs as well.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/c971806-errors.JPG" width="100%" />
  <figcaption>Error Handling</figcaption>
</figure>

### Error Handling
#### Error Logging
If HTTP Requests return a status code > 299, the response is considered an error. This setting allows the user to either:

- not log the error
- log the error with the response from the server and the URL
- log the error, the response, the URL and the request payload (**WARNING**: This could expose sensitive data in the logs)

#### Abort Flow Execution on Error
If active, the Flow will stop here if the response returned with a status code > 299

## GET Requests

The GET method configuration prompt has all the fields described above.

The results of the GET request are stored in the context of the flow. You can retrieve the requested data of your GET request by accessing the context with the key you defined in the HTTP Node settings.

## POST, PUT and PATCH Requests

!!! note "Content-Type Headers"
    The standard Content-Type header is *application/x-www-form-urlencoded*. If you want to send another Content-Type, you have to set the header value specifically or use JSON as described below.

### Payload
Here you can define the payload of your POST, PUT or PATCH request. You can choose between JSON (standard) and Text.

When using a JSON payload to access Cognigy objects such as Input, Context, or Profile, refer to [CognigyScript](../../cognigy-script.md#json-arguments) for an example payload.

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/b364540-http-post-payload.jpg" width="100%" />
  <figcaption>JSON as a POST, PUT or PATCH Request Payload</figcaption>
</figure>

Payloads can be text, JSON, XML, Formdata (see below) or any other textual data.

!!! tip "application/x-www-form-urlencoded"
    You can send URL Encoded data by setting no specific header and then sending a URLEncoded non-JSON payload such as *"To=%2B49555262626&Url=https%3A%2F%2Fhandler.twilio.com%2Ftwiml%2FEHf9b7af093c31b5baa1414be891"*

With Cognigy.AI 4.10.0 **Form-Data** as "Payload Type" has been added to the HTTP Node descriptor.

How to use it:

• Insert an HTTP Request Node in your Flow.

• The methods POST, PUT, PATCH section "payload" provide an additional payload-type in the dropdown: "Form-Data".

• When you select Form-Data, you are able to save key-value pairs as JSON payload.

<figure>
  <img class="image-center" src="../../../_assets/build/node-reference/basic/HTTP-request-Node.png" width="80%" />
  <figcaption>HTTP Request Node editor</figcaption>
</figure>

!!! note "Note"
    The key-value pairs must be of type text. Data is not supported.

When using the Interaction Panel, you can inspect the response in the **INFO** tab.

## DELETE Requests

The DELETE request configuration prompt exposes the **General Configuration** fields (see above).