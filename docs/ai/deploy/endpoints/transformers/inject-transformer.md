---
 title: "Inject Transformer" 
 slug: "inject-transformer" 
 hidden: false 
---
# Inject Transformer

The `Inject Transformer` makes it possible to hook into the [Inject API](transformers.md#different-base-transformer-types). A common use-case is that external systems need to hook into a conversation and e.g. send a notification to the user after a certain process has completed. With the `Inject Transformer`, it is no longer required to have a service that translates the webhook payload of the external service into the correct format needed for the `Inject API`. This can now all be handled in the `Inject Transformer`.

The `Inject Transformer` is triggered when the `Inject Transformer API` is called. The custom request body from the external service can thereby be parsed to return the necessary values for the Inject API, namely the  user ID and session ID as well as text and/or data, which will be sent to the user as a notification.

The `Inject Transformer` is configured by implementing the `handleInject` function in the Transformer in the Endpoint.

 <figure>
  <img class="image-center" src="../../../../../_assets/ai/deploy/endpoints/transformers/inject-transformer.png" width="100%" />
</figure>

!!! warning "REST Transformer Support"
    The Inject Transformer is not supported for REST-Based Endpoints.

## Transformer Function Arguments

The `handleInject`  function gets a configuration object as an argument. An overview of the keys in the object can be seen below:

| Argument	 | Description                                                            | Webhook Transformers | Socket Transformers |
|-----------|------------------------------------------------------------------------|----------------------|---------------------|
| endpoint  | 	The configuration object for the Endpoint. Contains the URLToken etc. | X                    | X                   |
| request   | 	The Express request object with a JSON parsed body.                   | X                    | X                   |
| response  | 	The Express response object.                                          | X                    | X                   |

## Return Values of the Transformer

The `Inject Transformer` has to return a valid user ID, session ID and text and/or data that should be sent to the Flow. These values should be extracted from the body of the request. It is important to note that the format of the request body will differ based on the specific channel being used, i.e. a request from Alexa looks very different to a request from Facebook (Meta) Messenger. It is therefore necessary to read the documentation from the specific channel to know how the request body is formatted. 

If the `Inject Transformer` returns a falsy value, then the message is never forwarded to the user.

!!! warning "Return Value Validation"
    The return value of the `Inject Transformer` will be validated against a set of rules and rejected if the rules are not met. The rules are:

    - The user ID is required in the return value. It has a max length of 256 characters.
    - The session ID is required. It also has a max length of 256 characters.
    - The text is not required. but has a max length of 10000 characters.
    - The data object is not required.

    If neither text or data is defined, then validation also fails.