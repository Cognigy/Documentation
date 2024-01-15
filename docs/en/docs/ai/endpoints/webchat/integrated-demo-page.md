---
title: "Demo Webchat" 
slug: "demo-webchat" 
hidden: false 
---

# Demo Webchat

_Cognigy Demo Webchat_ provides the opportunity to test webchat integrations with various providers, including handover providers, and also allows you to preview the appearance of your webchat before deploying it in a production environment. Demo Webchat is a valuable tool for testing and customization, ensuring that your Webchat functions according to your expectations and looks the way you want it to before launching it.

## Using Demo Webchat

To start using Demo Webchat, follow these steps:

1. Open the Cognigy.AI interface.
2. Go to **Build > Endpoints**.
3. On the **Endpoints** page, select existing Webchat Endpoint or create a new one by clicking **+ New Endpoint**. 
4. In the upper-right corner of the Endpoint editor, click **Open Demo Webchat**.

The Webchat Demo Page will display a website that contains a Webchat you have configured in the Webchat settings within the Endpoint in Cognigy.AI.

### Manually Defining the User ID

By default, when you load the Webchat, you are assigned a random `user id` that is stored in local memory, ensuring that you have the same `user id` the next time you use the Webchat.

To test your Webchat as an end user, define the `user id` by adding `?user=<user-id>` to the Demo Webchat URL.
For example, in the
`https://webchat-trial.cognigy.ai/v2/7e466a9d76611d8decbd15f366f607345efc36805c4e7cff25789ec91ee66457?user=test` URL,
the `user id` is set to `test`.

To create a new session for the existing user, use `?user=<old-user-id>&sessionId=<new-user-id>`.

To locate the `user id` of past conversations, `Navigate to 'Manage > Contact Profiles`.

## Demo Webchat Settings

These configuration options within the Webchat Endpoint will only have an effect on the integrated Demo Webchat page.

| Parameter                     | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Demo Webchat           | Toggle | Enables or disables the integrated Demo Webchat for this Endpoint.                                                                                                                                                                                                                                                                                                                                                                         |
| Enable Speech-to-Text         | Toggle | Toggle whether the Webchat should feature a microphone button.                                                                                                                                                                                                                                                                                                                                                                             |
| Enable Text-to-Speech         | Toggle | Toggle whether the Webchat should read all bot messages aloud.                                                                                                                                                                                                                                                                                                                                                                             |
| Background Image              | URL    | The image that will be displayed behind the Webchat.                                                                                                                                                                                                                                                                                                                                                                                       |
| Center Webchat                | Select | Determines where on the page to position the Webchat: center or bottom right.                                                                                                                                                                                                                                                                                                                                                              |
| Use Custom Webchat Bundle URL | Toggle | This is an advanced feature. Some Endpoint configurations might not work as they might not be supported in your Webchat Bundle.                                                                                                                                                                                                                                                                                                            |
| Custom Webchat Bundle URL     | URL    | This field available only when the **Use Custom Webchat Bundle URL** is acrivated. You can specify a new URL of Webchat if you want to use customized Webchat by modifying the Webchat source code. The URL should have the following format: `https://url.to/webchat.<package-name>.js`, where `url.to` is a storage for your plugin, for example, Amazon S3, and `package-name` is a name of your package, for example `webchat.legacy`. |


## More Information

- [Webchat Endpoint](deploy-webchat-endpoint.md)
- [Cognigy Webchat](https://docs.cognigy.com/ai/endpoints/webchat/webchat/)