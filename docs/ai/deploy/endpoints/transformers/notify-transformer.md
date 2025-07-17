---
 title: "Notify Transformer" 
 slug: "notify-transformer" 
 hidden: false 
 tags:
   - notify transformer
   - webhook payload
   - notify api
   - data transformation
   - external service integration
---

# Notify Transformer

The _Notify Transformer_ converts the webhook payload from an external service before you call a [Notify API request](../inject-and-notify.md), which sends the data directly to the user. With the notify transformer, you don't need a service that translates the webhook payload of the external service into the correct format for the Notify API request. You can handle this conversion in the inject transformer by parsing the payload to return only the necessary values.

You can configure the notify transformer in the `handleNotify` function in the [Endpoint settings or via CLI](overview.md#working-with-transformers).

## Restrictions

- The notify transformer is supported only for webhook- and socket-based Endpoints.
{! _includes/ai/deploy/endpoint/transformers/return-value-rule-set.md !}

## Transformer Function Arguments

The following table outlines the function arguments:

| Argument | Description                                                                  |
|----------|------------------------------------------------------------------------------|
| endpoint | The configuration object for the [Endpoint](#endpoint-configuration-object). |
| request  | The Express request object with a JSON-parsed body.                          |
| response | The Express response object.                                                 |

{! _includes/ai/deploy/endpoint/transformers/endpoint-object.md !}

## Return Values

The notify transformer returns a valid user ID, session ID, text, and data. These return values need to match the format of the payload of the Endpoint you are using. The payload format is specific to the Endpoint type you use, for example, Alexa or Facebook (Meta) Messenger. Read the documentation of the [specific Endpoint](../../endpoint-reference/overview.md) to know how to format the payload.

If the notify transformer returns a falsy value, the output is discarded and not sent to the Notify API request.
