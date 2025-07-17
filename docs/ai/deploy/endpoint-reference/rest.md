---
title: "REST"
slug: "rest"
description: "The REST Endpoint enables you to connect your AI Agent to a REST client."
hidden: false
tags:
  - rest
  - api
  - rest endpoint
---

# REST

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/REST.png" width="100%" />
</figure>

The REST Endpoint enables you to connect your AI Agent to a REST client. The REST client can be any application, tool, or service capable of making HTTP requests to RESTful APIs.
This includes custom-built applications, third-party tools like Postman or Insomnia, or backend services that interact with external APIs.

## Prerequisites

- Set up a REST client, for example, Postman, Insomnia, a custom application, or any tool capable of sending HTTP requests.

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/overview.md) 
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)

## How to Set Up

### Setup on the Cognigy.AI Side

??? info "1. Create a REST Endpoint"
    1. In the left-side menu of your Project, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **REST** Endpoint type.
        2. Specify a unique name.
        3. Select a Flow from the list. Save changes.
    4. Go to the **Configuration Information** section and copy the URL from the **Endpoint URL** field. Save changes.

### Setup on the Third-Party Provider Side

??? info "1. Send a Request"
    Send a `POST` request to the Endpoint URL.

    === "cURL"
        Replace `https://<your-endpoint-url>` with the Endpoint URL from your Endpoint's settings.
    
        ```bash
        curl -X POST https://<your-endpoint-url> \
          -H "Content-Type: application/json" \
          -d '{
            "userId": "user123",
            "sessionId": "session123",
            "text": "Hello, I need help with my order",
            "data": {
              "exampleKey": "exampleValue"
            }
          }'
        ```
    
    === "Postman"
        1. Open the Postman collection, select **Add a request**, then set the request type to `POST`.
        2. Enter the Endpoint URL as the request URL. 
        3. Go to the **Headers** tab and add `Content-Type: application/json`. 
        4. Go to the **Body** tab, select **raw**, then select **JSON** as the format.
        5. Paste the request body:
    
        ```json
        {
          "userId": "user123",
          "sessionId": "session123",
          "text": "Hello, I need help with my order",
          "data": {
            "exampleKey": "exampleValue"
          }
        }
        ```
    
    === "Next.js"
         Replace `https://<your-endpoint-url>` with the Endpoint URL from your Endpoint's settings.
    
        ```js
        const axios = require('axios');
        
        async function sendRequest() {
          try {
            const response = await axios.post('https://<your-endpoint-url>', {
              userId: "user123",
              sessionId: "session123",
              text: "Hello, I need help with my order",
              data: {
                exampleKey: "exampleValue"
              }
            }, {
              headers: {
                "Content-Type": "application/json"
              }
            });
        
            console.log(response.data);
          } catch (error) {
            console.error('Error:', error.message);
          }
        }
        
        sendRequest();
        ```
    
    === "Python"
        Replace `https://<your-endpoint-url>` with the Endpoint URL from your Endpoint's settings.
    
        ```python
        import requests
        
        url = "https://<your-endpoint-url>"
        payload = {
            "userId": "user123",
            "sessionId": "session123",
            "text": "Hello, I need help with my order",
            "data": {
                "exampleKey": "exampleValue"
            }
        }
        headers = {
            "Content-Type": "application/json"
        }
        
        response = requests.post(url, json=payload, headers=headers)
        print(response.json())
        ```

    | Parameter | Type   | Description                                                                                                                                                                                                 | Required                        |
    |-----------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------|
    | userId    | String | The ID of the end user.                                                                                                                                                                                     | Yes                             |
    | sessionId | String | The ID used to track the current session and maintain its state. Generate a new unique ID for each new session. For testing, you can use any string and change it whenever you want to start a new session. | Yes                             |
    | text      | String | The text that the assigned Flow should process.                                                                                                                                                             | No,  if `data` is specified[^*] |
    | data      | Object | The data that the assigned Flow should process.                                                                                                                                                             | No,  if `text` is specified[^*] |

    [^*]: You must provide at least one of `text` or `data`. You can send either, or both. If both are missing or invalid, the REST Endpoint throws an error.

??? info "2. Get a Response"
    The response contains the output text, output data, and the outputStack, which is an array of all Flow outputs. The REST Endpoint can concatenate AI Agent outputs into a single `text` or `data` output, for example, when Say Nodes are placed sequentially in the Flow. You can use the outputStack for debugging purposes.
    
    ```json
    {
      "text": "Hello, this is the Cognigy.AI Agent. How can I help you?",
      "data": {},
      "outputStack": [
        {
          "text": "Hello, this is the Cognigy.AI Agent.",
          "data": {},
          "traceId": "endpoint-httpIncomingMessage-068f1748-dadb-4792-bd2e-971335e9c88c",
          "disableSensitiveLogging": false,
          "source": "bot"
        },
        {
          "text": "How can I help you?",
          "data": {},
          "traceId": "endpoint-httpIncomingMessage-068f1748-dadb-4792-bd2e-971335e9c88c",
          "disableSensitiveLogging": false,
          "source": "bot"
        }
      ],
      "userId": "user123",
      "sessionId": "session123"
    }
    ```

    | Parameter                           | Type    | Description                                                                                                                                                                                                 |
    |-------------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | userId                              | String  | The ID of the end user.                                                                                                                                                                                     |
    | sessionId                           | String  | The ID used to track the current session and to maintain its state. Generate a new unique ID for each new session. For testing, you can use any string and change it whenever you want to start a new session. |
    | text                                | String  | The text the assigned Flow should process.                                                                                                                                                                     |
    | data                                | Object  | The data the assigned Flow should process.                                                                                                                                                                     |
    | outputStack                         | Array   | An array of outputs generated by the Flow, each with detailed metadata.                                                                                                                                     |
    | outputStack.text                    | String  | The text of the output.                                                                                                                                                                                     |
    | outputStack.data                    | Object  | The data of the output.                                                                                                                                                                                     |
    | outputStack.traceId                 | String  | The ID used for tracing and debugging purposes.                                                                                                                                                             |
    | outputStack.disableSensitiveLogging | Boolean | The flag indicating if logging is disabled. If the value is `true`, this interaction won't be logged for privacy or compliance reasons.                                                                     |
    | outputStack.source                  | String  | The message source. Always `"bot"` for AI Agent replies.                                                                                                                                                    |