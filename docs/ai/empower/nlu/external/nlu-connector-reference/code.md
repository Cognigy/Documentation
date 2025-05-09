---
title: "Code"
slug: "code"
description: "The Code Connector allows you to use a custom connector by adding your JavaScript code to the Transformer section."
hidden: false
tags:
  - Code
  - external NLU
  - Code NLU connector
  - Custom NLU connector
---

# Code

The Code connector allows
you to integrate an NLU engine that isn't natively supported by Cognigy.AI
or when you need a highly customized integration with a supported NLU engine
that goes beyond the default connector's capabilities.

To use this connector, follow these steps:

1. Go to **Build > NLU Connectors** and create a Code connector.
2. Add your JavaScript code to the **Transformer** section and activate the **Enable Code Transformer** toggle.

??? "Code Example with Description"

    ```js
    createNluCodeConnector({
    
      /**
       * This function connects to an external NLU service, for example, Dialogflow, LUIS.
       * and returns the processed result.
       * @param text The message text from the user.
       * @param data Any additional data passed with the message.
       * @param language The language of the input message.
       * @returns nluResult Processed result from the external NLU service.
       */
      getNluResult: async ({ text, data, language }) => {
        
        // Example: Make an HTTP request to an external NLU API, for example, Dialogflow, LUIS.
        const response = await fetch('https://api.externalnlu.com/analyze', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
          },
          body: JSON.stringify({
            query: text,
            language: language,
          }),
        });
    
        // Parse the response from the NLU API
        const nluResponse = await response.json();
    
        // Construct the NLU result based on the response from the NLU service
        let nluResult = {
          intent: nluResponse.intent || null,        // Extracted intent from the NLU response
          type: nluResponse.type || null,            // The type of the Intent (optional)
          slots: nluResponse.entities || {},         // Extracted entities as Slots (parameters)
          intentScore: nluResponse.intentConfidence || 0, // Confidence score of the Intent
          nlu: {
            intentId: nluResponse.intentId || null,  // Unique ID for the detected Intent
            intentFlow: nluResponse.intentFlow || null // Flow associated with the Intent (if available)
          }
        };
    
        // Return the transformed data and NLU result
        return {
          data,
          nluResult
        };
      }
    });
    ```

    |                                 | **Description**                                                                                                                                                                                                                                                                                                                                         |
    |---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | **Function and its parameters** |                                                                                                                                                                                                                                                                                                                                                         |
    | `createNluCodeTransformer`      | This function create a transformaer that asynchronously sends the message (`text`) to an external NLU service for analysis. The function processes the response from the service, populates the `nluResult` object with values such as `intent`, `type`, `slots`, and `intentScore`, and returns the data object unchanged, unless explicitly modified. |
    | `text`                          | The message received from the endpoint, such as user input, that needs to be analyzed by the NLU service.                                                                                                                                                                                                                                               |
    | `data`                          | The data object associated with the message, containing additional metadata or context about the request. This object can be modified or passed through unchanged.                                                                                                                                                                                      |
    | `language`                      | The language code of the locale, representing the language in which the message is processed. For example, `en` for English, `de` for German.                                                                                                                                                                                                           |
    | **NLU Result Initialization**   | Initial values set for the NLU result object to ensure structure before any processing occurs.                                                                                                                                                                                                                                                          |
    | `intent`                        | Initially `null`, it will be populated with the Intent detected from the message, for example, `book_flight` or `greet_user`, after processing.                                                                                                                                                                                                         |
    | `type`                          | Initially `null`, it refers to the type of Intent, for example, `action`, `informational`. Will be set based on the NLU service's response.                                                                                                                                                                                                             |
    | `slots`                         | Initially `{}`, this object holds the extracted parameters (Slots) that are associated with the detected intent, for example, destination, date, and class.                                                                                                                                                                                             |
    | `intentScore`                   | Initially `0`, it represents the confidence score (ranging from 0 to 1) indicating how confident the NLU service is in the detected Intent.                                                                                                                                                                                                             |
    | `nlu`                           | An object containing metadata about the Intent: <br> - `intentId` - initially `null`, the unique identifier for the detected Intent. <br> - `intentFlow` - initially `null`, the Flow associated with the Intent.                                                                                                                                       |
    | **Return Object**               | The function returns the `data` and `nluResult`.                                                                                                                                                                                                                                                                                                        |
    | `data`                          | The unchanged data object passed in, which may contain context or additional information.                                                                                                                                                                                                                                                               |
    | `nluResult`                     | The object returned after processing, containing the final `intent`, `slots`, `intentScore`, and any other details extracted from the message using the NLU logic.                                                                                                                                                                                      |

## More Information

- [All NLU Connectors](all-nlu-connectors.md)