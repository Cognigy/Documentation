---
title: "Demo Webchat"
slug: "demo-webchat"
description: "Cognigy Demo Webchat provides the opportunity to test webchat integrations with various providers, including handover providers, and also allows you to preview the appearance of your webchat before deploying it in a production environment."
hidden: false
---

# Demo Webchat

_Cognigy Demo Webchat_ offers the opportunity to test Webchat integrations with various providers, including handover providers, and also allows you to preview the appearance of your webchat before deploying it in a production environment. This tool is valuable for testing and customization, ensuring that your Webchat functions according to your expectations and looks the way you want it to before launching.

## Using Demo Webchat

To start using Demo Webchat, follow these steps:

1. In the left-side menu of the Project, go to **Build > Endpoints**.
2. On the **Endpoints** page, select existing Webchat Endpoint or create a new one by clicking **+ New Endpoint**.
3. In the upper-right corner of the Endpoint editor, click **Open Demo Webchat**.

The Webchat Demo Page will display a website that contains a Webchat widget you have configured in the Endpoint Settings in Cognigy.AI.

### Manually Defining the User ID

By default, when you load the Webchat widget, you are assigned a random `user id` that is stored in local memory, ensuring that you have the same `user id` the next time you use the Webchat.

To test your Webchat as an end user, define the `user id` by adding `?user=<user-id>` to the Demo Webchat URL.
For example, in the
`https://webchat-trial.cognigy.ai/v2/7e466a9d76611d8decbd15f366f607345efc36805c4e7cff25789ec91ee66457?user=test` URL,
the `user id` is set to `test`.

To create a new session for the existing user, use `?user=<old-user-id>&sessionId=<new-user-id>`.

To locate the `user id` of past conversations, `Navigate to 'Manage > Contact Profiles`.

## Demo Webchat Settings

These configuration options within the Webchat Endpoint will only have an effect on the integrated Demo Webchat page.

| Parameter                     | Type   | Description                                                                                                                                                                                                                                                                                                                             |
|-------------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Enable Demo Webchat           | Toggle | Enables or disables the integrated Demo Webchat for this Endpoint.                                                                                                                                                                                                                                                                      |
| Enable Speech-to-Text         | Toggle | Toggle whether the Webchat should feature a microphone button. <br> In the Webchat v3 Endpoint, this parameter is located in the [Webchat Behavior](v3/configuration.md#webchat-behavior) settings and applies to both Demo and Production Webchats. <br><br> Note that this parameter is not supported by the Mozilla Firefox browser. |
| Enable Text-to-Speech         | Toggle | Toggle whether the Webchat should read all bot messages aloud. <br> In the Webchat v3 Endpoint, this parameter is located in the [Webchat Behavior](v3/configuration.md#webchat-behavior) settings and applies to both Demo and Production Webchats.                                                                                    |
| Background Image              | URL    | The image that will be displayed behind the Webchat widget.                                                                                                                                                                                                                                                                             |
| Center Webchat                | Select | Determines where on the page to position the Webchat widget: center or bottom right.                                                                                                                                                                                                                                                    |
| Use Custom Webchat Bundle URL | Toggle | This is an advanced feature. Some Endpoint configurations might not work as they might not be supported in your Webchat Bundle.                                                                                                                                                                                                         |
| Custom Webchat Bundle URL     | URL    | This field is only available when the **Use Custom Webchat Bundle URL** option is enabled. You can specify a custom Webchat bundle URL to direct to a self-compiled and modified Webchat version. The URL should lead to an accessible cloud storage location containing your compiled `webchat.js` or `webchat.legacy.js` file.        |

## More Information

- [Webchat v3: Configuration](v3/configuration.md)
- [Webchat v2: Configuration](v2/configuration.md)