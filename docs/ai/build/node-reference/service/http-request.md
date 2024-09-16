---
title: "HTTP Request" 
slug: "http-request"
description: "The HTTP Request Node lets you make an HTTP request to a specific resource within a Flow."
hidden: false 
---

# HTTP Request

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/services/http-request.png" width="80%" />
</figure>

## Description

The HTTP Request Node lets you make an HTTP request to a specific resource within a Flow.

When triggered, the HTTP Request Node performs the request to the specified URL during Flow execution.

## Limitations

The default timeout for the HTTP Request Node is 15 seconds in a shared SaaS environment. It can be changed for on-premises installations via the `HTTP_NODE_TIMEOUT_IN_SECONDS` environment variable. For dedicated SaaS installations, contact Cognigy technical support.

## HTTP Request Methods

### GET

The method retrieves data from the server.

The results of the GET request are stored in the context of the Flow. You can retrieve the requested data of your GET request by accessing the context with the key you defined in the HTTP Node settings.

### POST, PATCH, and PUT

The methods are used for the following purposes:

- `POST` – submits data to the server to create a new resource.
- `PATCH` – updates partial data of an existing resource.
- `PUT` – replaces an existing resource with new data.

The standard Content-Type header is `application/x-www-form-urlencoded`.
To use a different Content-Type, set the header value explicitly or use JSON.

For URL-encoded data, you don't need a specific header.
URL encoding replaces unsafe characters in URLs with a percent sign (`%`) followed by two hexadecimal digits representing the ASCII code of the character.
This approach ensures the data is transmitted correctly over the web.

For example, you can send the data `+49555262626` and `https://handler.twilio.com/twiml/EHf9b7af093c31b5baa1414be891` as a URL-encoded payload:

```txt
To=%2B49555262626&Url=https%3A%2F%2Fhandler.twilio.com%2Ftwiml%2FEHf9b7af093c31b5baa1414be891
```

where:

Each key-value pair is separated by `&`, and each key is separated from its value by `=`:

- `To=%2B49555262626`:
    - `To` is the key.
    - `%2B49555262626` is the URL-encoded value.
        - `%2B` represents the `+` sign.
        - `49555262626` is the actual phone number.
- `Url=https%3A%2F%2Fhandler.twilio.com%2Ftwiml%2FEHf9b7af093c31b5baa1414be891`:
    - `Url` is the key.
    - `https%3A%2F%2Fhandler.twilio.com%2Ftwiml%2FEHf9b7af093c31b5baa1414be891` is the URL-encoded value.
        - `%3A` represents `:`.
        - `%2F` represents `/`.
        - The rest of the value is the URL of a Twilio handler endpoint.

#### Payload

Define the payload of your `POST`, `PATCH`, or `PUT` request.

Select one of the following payload formats:

- **JSON** — consists of key-value pairs. When using a JSON payload to access Cognigy.AI objects such as Input, Context, or Profile, refer to [CognigyScript](../../cognigy-script.md#json-arguments) for an example payload.
- **Text** — consists of unstructured text or basic key-value pairs. For example, `username=JohnDoe&password=12345`.
- **Form-Data** — consists of key-value pairs. It is used for submitting form data, including file uploads. Each key-value pair is sent as a separate part of the request. The key-value pairs must have the text type. Data is not supported.

Inspect the response on the **INFO** tab in the Interaction Panel.

### DELETE

The method deletes a resource from the server.

The `DELETE` request configuration prompt exposes the [General Configuration](#general-configuration) fields.

## General Configuration

Each request method shares certain fields with the others:

- **URL** — the web address where the request is sent.
- **Headers** — information sent along with the request, such as content type or authentication tokens.
- **Authorization Type** — the method used to verify access, such as Basic Auth or OAuth2.
- **Context Store** — a place to save and use data across different parts of the request.
- **Async** — option to run the request in the background without blocking other operations.
- **Caching** — settings to store request responses for faster future access.
    - **Cache Expiry** — how long a stored response is considered valid before being refreshed.

### URL

The URL to the targeted resource is `https://api-endpoint.com/resource`.

Note that Cognigy.AI expects a URL to the targeted resource in its unencoded form. Decode any encoded URL to make sure the HTTP request can be executed successfully. For more information, see [URL encoding (on en:WP)](https://en.wikipedia.org/wiki/URL%20encoding).

### Headers

Add the headers to your HTTP request. All headers are listed in one JSON object, which should have the following format:

```json
{
  "header-name": "header value",
  "another-header-name": "another header value"
}
```

For example:

```json
{
  "Content-Type": "application/json",
  "Accept": "application/json",
}
```

where:

`Content-Type` — specifies the media type of the resource being sent to the server.
`Accept` — indicates the media types that the client is willing to receive from the server.

Alternatively, you can click **Use JSON Editor** to switch between the list view and the JSON editor. The resulting JSON will be the same in either case.

You can also enable capturing the response headers along with the request body in the specified storage location.

### Authentication

The supported authentication types are:

- **No Auth** — no authentication is required to access the resource.
- **Basic Auth** — authentication using a username and password encoded in base64.
- **OAuth2** — a framework for authorization using tokens to securely manage access.
- **API Key (Authorization: ApiKey)** — authentication using a key sent in the `Authorization` header as API Key.
- **API Key (X-API-Key)** — authentication using a key sent in the `X-API-Key` header.

Authentication makes use of [Connections](../../connections.md), which means that the actual authentication information can be encrypted. 

When a new authentication connection is created by clicking **+** next to the **Parameters** field,
the **New Connection** window appears to request the details specific to the authentication type.

If you select an authorization type other than **No Auth**, additional fields related to the selected authorization type will be provided.

### Storage Options

Define the context key where you want to store the response from the executed HTTP request. 
This field is required and needs to have a valid value.

After the HTTP request is successfully executed, you can access the response payload by executing the following [CognigyScript](../../cognigy-script.md):

```txt
{{ " {{ context.<yourContextStore> }}" }}
```

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

When the setting is enabled, the HTTP Node will cache the responses.

### Security

#### Allow Insecure SSL

By default, Cognigy.AI will reject connecting against insecure SSL endpoints, such as URLs with no or self-signed certificates. Activating this option will allow the Node to connect against these URLs as well.

### Error Handling & Logging

#### Error Logging

If HTTP requests return a status code greater than `299`, the response is considered an error. 
You can select one of the following options:

- **Not log the error** — errors will not be recorded in the logs.
- **Log the error with the server response and the URL** — errors will be logged along with the server's response and the URL of the request.
- **Log the error, the response, the URL, and the request payload** — errors, the server's response, the URL, and the request payload will be logged. Selecting this option could expose sensitive data in the logs, so use it with caution.

#### Abort Flow Execution on Error

When the setting is enabled, the Flow will stop if the response has a status code greater than `299`.

#### Debug Mode Logging

[![Version badge](https://img.shields.io/badge/Updated in-v4.84-blue.svg)](../../../../release-notes/4.84.md)

Select what information
to log to [Debug Mode](../../../test/interaction-panel/overview.md#debug-mode) when using the Interaction Panel:

- **Do not log Request & Response** — do not log any request or response data to the Interaction Panel. This option is activated by default.
- **Request** — log only the request data sent to the server.
- **Response** — log only the response data received from the server.
- **Request & Response** — log both the request data sent to the server and the response data received from the server.

## Troubleshooting

### Handling Certificate Errors

When using the HTTP Request Node with a domain that does not have a public certificate, errors can occur due to a missing Intermediate Certificate. An example of such an error is `UNABLE_TO_VERIFY_LEAF_SIGNATURE`. If there is no trusted Certificate Authority or a complete certificate chain, the request will fail. Note that you cannot add a custom Certificate Authority or certificate chain to the Cognigy.AI platform. Your options are:

- Fix the certificate chain by obtaining a certificate from a trusted Certificate Authority or adding the missing Intermediate Certificate to your domain's API services.
- Deactivate certificate verification by enabling the [Allow Insecure SSL](#allow-insecure-ssl) setting in the Node. However, this option is not recommended.