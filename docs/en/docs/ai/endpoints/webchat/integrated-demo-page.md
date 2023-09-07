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
When you want to test your Webchat as an end user you need to define the `user id` manually.
To rewrite the user id in the **Demo Webchat URL**, use `?user=<old-user-id>&sessionId=<new-user-id>`.

## Demo Webchat Settings

These configuration options within the Webchat Endpoint will only have an effect on the integrated Demo Webchat page.

| Parameter                     | Type   | Description                                                                                                                     |
|-------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------|
| Enable Demo Webchat           | Toggle | Enables or disables the integrated Demo Webchat for this Endpoint                                                               |
| Enable Speech-to-Text         | Toggle | Toggle whether the Webchat should feature a microphone button                                                                   |
| Enable Text-to-Speech         | Toggle | Toggle whether the Webchat should read all bot messages aloud                                                                   |
| Background Image              | URL    | The image that will be displayed behind the Webchat                                                                             |
| Center Webchat                | Select | Toggle whether the Webchat should be centered or in the bottom right corner                                                     |
| Use Custom Webchat Bundle URL | Toggle | This is an advanced feature. Some Endpoint configurations might not work as they might not be supported in your Webchat Bundle. |
| Custom Webchat Bundle URL     |  URL    |  You can use this field if you modified a Webchat source code and want to use your customized Webchat. `https://url.to/webchat.<package-name>.js`,    where `url.to` is a storage for your plugin e.g. Amazon S3 and `package-name` is a name of your package, e.g. `success`.                                                                                                                      |


### "Enable Speech-to-Text" & "Enable Text-to-Speech"

These settings will enable the individual features within the Webchat. 
To use these plugins on your production environment, you need to install them manually as follows:
1. Open GitHub website `https://github.com/Cognigy/WebchatWidget/tree/master/src/plugins`.
2. Downoad the preferred plugin source code.
3. Modify plugin code as you need.
4. Build your modified plugin.
5. Upload your plugin with a meaningful package name to a cloud storage, for example, to Amazon S3.


## Webchat Plugins

For Cognigy-hosted Webchats (the ones directly accessible from the Endpoint configuration) you can automatically load Webchat Plugins.

You can find the **Webchat Plugins** option in the **Webchat Layout** configuration settings within the Webchat Endpoint Editor. 
The Webchat Plugin URL should be `https://url.to/plugin.js`, where `url.to` a storage for your plugin, for example, Amazon S3, and `plugin`a name of your plugin.
A collection of example plugins for the Cognigy Webchat you will find on the [GitHub](https://github.com/Cognigy/WebchatWidget/tree/master/src/plugins). For Demo Webchat, you can test plugins only from this list.  

When the hosted Webchat page is being loaded, it will load the additional Plugin before starting the Webchat.

!!! warning "Inserting wrong Plugin URLs"
    When you add a Plugin URL that loads an incorrect or corrupted Plugin file, the Webchat may not start up correctly.

## More information

- [Cognigy Webchat](https://docs.cognigy.com/ai/endpoints/webchat/webchat/)