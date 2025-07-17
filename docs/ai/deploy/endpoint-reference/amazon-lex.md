---
title: "Amazon Lex" 
slug: "amazon-lex"
description: "The Amazon Lex Endpoint enables you to connect your AI Agent with Amazon Lex and AWS Lambda."
hidden: false
tags:
  - amazon lex
  - amazon lambda
  - amazon lex endpoint
  - aws lex
  - aws lambda
---

# Amazon Lex

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/amazon-lex.jpg" width="50%" />
</figure>

The Amazon Lex Endpoint enables you to connect your AI Agent with [Amazon Lex](https://aws.amazon.com/lex/).

## Prerequisites

- Access to [Amazon Lex](https://aws.amazon.com/lex/).
- Access to [AWS Lambda](https://aws.amazon.com/lambda/).

## Generic Endpoint Settings

Learn about the generic Endpoint settings on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/overview.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)

## Specific Endpoint Settings

??? info "Amazon Lex Settings"
    | Parameter           | Description                                                                                                                                                                                                                               |
    |---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Reparse Alexa Slots | Allows Slots detected by Amazon Lex to be passed to Cognigy.AI and be processed by the Cognigy.AI NLU model. To make this parameter available, select **Amazon Lex (Built-in)** from the **NLU Connector** list in the Endpoint settings. |

## How to Set Up

## Setup on the Cognigy.AI Side

??? info "Create an Amazon Lex Endpoint"
    1. In the left-side menu of your Agent, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Lex** Endpoint type.
        2. Specify a unique name.
        3. Select a relevant Flow from the list. Save changes.
    4. Go to the **Configuration Information** section and copy the Endpoint URL for later use in Amazon Lex.
    5. _(Optional)_ In the **Amazon Lex Settings** section, activate the **Reparse Alexa Slots** option only if you want the Cognigy.AI NLU model to process Amazon Lex slots.

## Setup on the Amazon Side

Select the use case:

??? info "Use Amazon Lex with Amazon NLU"
    Use your existing Amazon Lex bots along with their native NLU capabilities to process user input within Cognigy.AI.

    1. Open the [Lambda console](https://console.aws.amazon.com/lambda).
    2. Select **Create function**. Configure the following settings:
        - **Function name** – enter a name for the function.
        - **Runtime** – select **Node.js 22.x**.
    3. Select **Create function**. The console creates a Lambda function with a single source file named `index.mjs`. Edit this file in the built-in code editor. Copy the following code and paste it into your `index.mjs` file:

        ```js
        const COGNIGY_ENDPOINT_HOSTNAME = "endpoint-trial.cognigy.ai";
        const COGNIGY_ENDPOINT_PATH = "/your-urltoken"; 
        
        // Change these attributes to the session attributes that contain your userId and sessionId 
        const USERID_ATTRIBUTE = "CustomerNumber";
        const SESSIONID_ATTRIBUTE = "ContactId"; 
        
        // Pagination doesn't work at this API so we need to specify the maximum number of slots that are used for a single intent as page size 
        const PAGESIZE = 20; 
        
        const AWS = require("aws-sdk");
        const lexmodelsv2 = new AWS.LexModelsV2({
            apiVersion: "2020-08-07"
        });
        
        exports.handler = async (event, context, callback) => {
            const slotMap = await retrieveSlots(event);
            const postObject = {
                userId: event["sessionState"]["sessionAttributes"][USERID_ATTRIBUTE] || AWS.util.uuid.v4(),
                sessionId: event["sessionState"]["sessionAttributes"][SESSIONID_ATTRIBUTE] || AWS.util.uuid.v4(),
                text: event["transcriptions"][0]["transcription"],
                data: {
                    request: event,
                    slotMap
                },
            };
            const resultMap = await sendMessageToCognigy(postObject);
            const defaultSessionAtrributes = {
                action: "NONE",
                action_data: "",
            };
            if (resultMap["data"] && resultMap["data"]["connect_action"]) {
                defaultSessionAtrributes["action"] = resultMap["data"]["connect_action"];
            }
            if (resultMap["data"] && resultMap["data"]["connect_action_data"]) {
                defaultSessionAtrributes["action_data"] = JSON.stringify(resultMap["data"]["connect_action_data"]);
            }
            const response = {
                sessionState: {
                    sessionAttributes: {
                        action: defaultSessionAtrributes.action,
                        action_data: JSON.stringify(defaultSessionAtrributes.action_data),
                    },
                    dialogAction: {
                        type: "Close",
                        fulfillmentState: "Fulfilled",
                        message: resultMap["text"],
                    },
                    intent: {
                        confirmationState: "Confirmed",
                        name: event["sessionState"]["intent"]["name"],
                        slots: {},
                        state: "Fulfilled",
                    },
                },
                messages: [{
                    contentType: "PlainText",
                    content: resultMap["text"],
                }, ],
            };
            callback(null, response);
        };
        const https = require("https");
        async function sendMessageToCognigy(postObject) {
            return new Promise((resolve, reject) => {
                const postData = JSON.stringify(postObject);
                const options = {
                    hostname: COGNIGY_ENDPOINT_HOSTNAME,
                    path: COGNIGY_ENDPOINT_PATH,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                const request = https.request(options, handleResponse);
                request.on("error", error => {
                    reject(error);
                });
                request.write(postData);
                request.end();
        
                function handleResponse(response) {
                    let data = "";
                    response.on("data", d => {
                        data += d.toString();
                    });
                    response.on("end", () => {
                        resolve(JSON.parse(data));
                    });
                }
            });
        }
        async function retrieveSlots(event) {
            const params = {
                botId: event.bot.id,
                botVersion: event.bot.version,
                localeId: event.bot.localeId,
                filters: [{
                    name: "IntentName",
                    operator: "EQ",
                    values: [event.sessionState.intent.name],
                }, ],
            };
            const intents = await lexmodelsv2.listIntents(params).promise();
            const slotParams = {
                botId: event.bot.id,
                botVersion: event.bot.version,
                localeId: event.bot.localeId,
                intentId: intents.intentSummaries[0].intentId,
                maxResults: PAGESIZE,
            };
            const slotList = await lexmodelsv2.listSlots(slotParams).promise();
            const slots = slotList.slotSummaries.reduce((obj, item) => Object.assign(obj, {
                [item.slotName]: item.slotTypeId
            }), {}, );
            return slots;
        }
        ```
 
        In the script, replace the `COGNIGY_ENDPOINT_HOSTNAME` and `COGNIGY_ENDPOINT_PATH` variables with your Endpoint hostname and the URL token of your Endpoint.
        
        For example, if your Cognigy.AI trial Endpoint URL is `https://endpoint-trial.cognigy.ai/175525264283054b52edb3b9ece270755e46e651ac00015fad9f1175bb47c110`, specify the following values:
        
        ```js
        const COGNIGY_ENDPOINT_HOSTNAME = "endpoint-trial.cognigy.ai";
        const COGNIGY_ENDPOINT_PATH = "/175525264283054b52edb3b9ece270755e46e651ac00015fad9f1175bb47c110";
        ```
        
        In the **Deploy** section, select **Deploy** to update your function's code. Then, to run your code, select **Create test event** in the **Test events** section.
        Modify the service that was created for the Lambda function. Add the following permissions: `lex:ListIntents` and `lex:ListSlots`. Alternatively, you can also use a predefined, role such as `AmazonLexReadOnly. Save the Lambda function.

    4. Open the [Amazon Lex console](https://console.aws.amazon.com/lex/).
    5. Select **Create bot**. For the **Creation** method, select **Start with an example**. In the **Example bots** section, select **OrderFlowers** from the list.
    6. In the **Bot configuration** section, give the bot a name and an optional description. The name must be unique in your account.
    7. Open your first intent. Go to the **Fulfillment** section and enable **Fulfillment Lambda code hook** in the **Advanced options**.
    8. Click **Update Options** and **Save intent**. Open each intent in the current language, including the **FallbackIntent**, and repeat these steps. Build the language, then repeat these steps for additional languages if required.
    9. Go to **Bot versions** and create a new version. Then, go to **Aliases** and create a new alias and link it to the latest bot's version. Reopen the alias and click the name of each language that is supported.
    10. Select the previously created Lambda function with it's latest version and save changes.

??? info "Use Amazon Lex with Cognigy.AI NLU"
    Use the Amazon Lex Endpoint to transcribe user input, while Cognigy.AI's NLU model handles intent recognition and slot parsing.

    1. Open the [Lambda console](https://console.aws.amazon.com/lambda).
    2. Select **Create function**. Configure the following settings:
        - **Function name** – enter a name for the function. 
        - **Runtime** – select Node.js 22.x.
    3. Select **Create function**. The console creates a Lambda function with a single source file named `index.mjs`. Edit this file in the built-in code editor. Copy the following code and paste it into your `index.mjs` file:

        ```js
        
        const COGNIGY_ENDPOINT_HOSTNAME = "endpoint-trial.cognigy.ai";
        const COGNIGY_ENDPOINT_PATH = "/your-url-token";
        
        // Change these attributes to the session attributes that contain your userId and sessionId
        const USERID_ATTRIBUTE = "CustomerNumber";
        const SESSIONID_ATTRIBUTE = "ContactId";
        
        const AWS = require("aws-sdk");
        
        exports.handler = async (event, context, callback) => {
            try {
                const postObject = {
                    userId: event["sessionState"]["sessionAttributes"][USERID_ATTRIBUTE] || AWS.util.uuid.v4(),
                    sessionId: event["sessionState"]["sessionAttributes"][SESSIONID_ATTRIBUTE] ||
                        AWS.util.uuid.v4(),
                    text: event["transcriptions"][0]["transcription"],
                    data: {},
                };
        
                const defaultSessionAtrributes = {
                    action: "NONE",
                    action_data: "",
                };
        
                const resultMap = await sendMessageToCognigy(postObject);
        
                if (resultMap["data"] && resultMap["data"]["connect_action"]) {
                    defaultSessionAtrributes["action"] = resultMap["data"]["connect_action"];
                }
        
                if (resultMap["data"] && resultMap["data"]["connect_action_data"]) {
                    defaultSessionAtrributes["action_data"] = JSON.stringify(resultMap["data"]["connect_action_data"]);
                }
        
                const response = {
                    sessionState: {
                        sessionAttributes: {
                            action: defaultSessionAtrributes.action,
                            action_data: defaultSessionAtrributes.action_data,
                        },
                        dialogAction: {
                            type: "Close",
                            fulfillmentState: "Fulfilled",
                            message: resultMap["text"],
                        },
                        intent: {
                            confirmationState: "Confirmed",
                            name: event["sessionState"]["intent"]["name"],
                            slots: {},
                            state: "Fulfilled",
                        },
                    },
                    messages: [{
                        contentType: "PlainText",
                        content: resultMap["text"],
                    }, ],
                };
        
                callback(null, response);
            } catch (e) {
                return e;
            }
        };
        
        const https = require("https");
        
        async function sendMessageToCognigy(postObject) {
            return new Promise((resolve, reject) => {
                const postData = JSON.stringify(postObject);
                const options = {
                    hostname: COGNIGY_ENDPOINT_HOSTNAME,
                    path: COGNIGY_ENDPOINT_PATH,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
        
                const request = https.request(options, handleResponse);
        
                request.on("error", error => {
                    reject(error);
                });
        
                request.write(postData);
                request.end();
        
                function handleResponse(response) {
                    let data = "";
        
                    response.on("data", d => {
                        data += d.toString();
                    });
        
                    response.on("end", () => {
                        resolve(JSON.parse(data));
                    });
                }
            });
        }
        ```

        In the script, replace the `COGNIGY_ENDPOINT_HOSTNAME` and `COGNIGY_ENDPOINT_PATH` variables with your Endpoint hostname and the URL token of your Endpoint.
        
        For example, if your Cognigy.AI trial Endpoint URL is `https://endpoint-trial.cognigy.ai/175525264283054b52edb3b9ece270755e46e651ac00015fad9f1175bb47c110`, specify the following values:
        
        ```js
        const COGNIGY_ENDPOINT_HOSTNAME = "endpoint-trial.cognigy.ai";
        const COGNIGY_ENDPOINT_PATH = "/175525264283054b52edb3b9ece270755e46e651ac00015fad9f1175bb47c110";
        ```
         
        In the **Deploy** section, select **Deploy** to update your function's code. Then, to run your code, select **Create test event** in the **Test events** section.
        
    4. Open the [Amazon Lex console](https://console.aws.amazon.com/lex/).
    5. Select **Create bot**. For the **Creation** method, select **Start with an example**. In the **Example bots** section, select **OrderFlowers** from the list.
    6. In the **Bot configuration** section give, the bot a name and an optional description. The name must be unique in your account.
    7. Create a single intent with one sample utterance that will never get called, for example, `THIS_WILL_NEVER_BE_CALLED`. Save the intent and open **FallbackIntent**.
    8. Go to the **Fulfillment** section and enable **Fulfillment Lambda code hook** in **Advanced options**.
    9. Click **Update Options** and **Save intent**. Build the language.
    10. Go to **Bot versions** and create a new version. Then, go to **Aliases** and create a new alias and link it to the latest bot's version. Reopen the alias and click the name of the primary language.
    11. Select the previously created Lambda function with it's latest version and save changes.

## More Information

- [Cognigy Help Center: Amazon Connect: Intro](https://support.cognigy.com/hc/en-us/articles/6229662732444)
- [Cognigy Help Center: Amazon Connect: Setup Amazon Connect](https://support.cognigy.com/hc/en-us/articles/6229664156060)
- [Cognigy Help Center: Amazon Connect: Control Amazon Connect from Cognigy.AI](https://support.cognigy.com/hc/en-us/articles/6229683335196)
