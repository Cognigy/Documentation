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
The `user id` of your Agent you can find in the **Manage > Contact Profiles** menu.

To test your Webchat as an end user, define the `user id` manually by specifying `?user=<user-id>` in the Demo Webchat URL,
for example, `https://webchat-trial.cognigy.ai/v2/7e466a9d76611d8decbd15f366f607345efc36805c4e7cff25789ec91ee66457?user=72a1f2fa-54e7-4acb-b690-90ca69e5e4ef`.

To rewrite the `user id` in the **Demo Webchat URL**, use `?user=<old-user-id>&sessionId=<new-user-id>`.

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

## Demo Webchat Plugins

In Demo Webchat, you can test only a [limited number of plugins](https://github.com/Cognigy/WebchatWidget/tree/master/src/plugins).

To use these plugins in your production environment, you need to install them manually as follows:

1. Open the [Coginigy GitHub](https://github.com/Cognigy/WebchatWidget/tree/master/src/plugins) repository.
2. Download the preferred plugin source code.
3. Modify plugin code as you need.
4. Build your modified plugin.
5. Upload your plugin with a meaningful package name to a cloud storage, for example, to Amazon S3.
6. In the Webchat Endpoint, navigate to the **Webchat Layout** section and paste the URL into the **Webchat Plugin URL** field.

{! _includes/ai/webchat/plugin-url.md !}

If you want to test other plugins or your custom plugins, run Webchat in your local environment.


## More information

- [Webchat Endpoint](deploy-webchat-endpoint.md)
- [Cognigy Webchat](https://docs.cognigy.com/ai/endpoints/webchat/webchat/)