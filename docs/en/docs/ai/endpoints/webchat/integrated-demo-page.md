---
title: "Demo Webchat" 
slug: "demo-webchat" 
hidden: false 
---

# Demo Webchat

_Cognigy Demo Webchat_ provides the opportunity to test webchat integrations with various providers, including handover-providers, and also allows you to preview the appearance of your webchat before deploying it in a live environment. This is a valuable tool for testing and customization, ensuring that your webchat functions according to your expectations and looks the way you want it to before launching it.

When you create a Webchat Endpoint, a Demo Webchat will be available via integrated Demo Page. 

To access it, open your Webchat Endpoint and click **Open Demo Webchat** in the upper-right corner.

The Webchat Demo Page will show a Website containing a Webchat you have configured in the Webchat settings within the Endpoint in Cognigy.AI.

!!! note "Manually defining the user ID"
    By default, when you load the Webchat, you are assigned a random user ID that is stored in local memory so that the next time you use the Webchat you will have the same user. 
    If you want to set a user ID manually, you can do this by adding `?user=` to the Webchat URL.

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
| Custom Webchat Bundle URL     | URL    |                                                                                                                                 |


### "Enable Speech-to-Text" & "Enable Text-to-Speech"

These settings will enable the individual features within the Webchat. 

When enabled, the Plugins will be loaded automatically on the Demo Page. 
In case you want to use the Plugins on your own Website, you will have to load them manually.

## Webchat Plugins

For Cognigy-hosted Webchats (the ones directly accessible from the Endpoint configuration) you can automatically load Webchat Plugins.
You can find the **Webchat Plugins** option in the **Webchat Layout** configuration settings within the Webchat Endpoint Editor. 
A collection of example plugins for the Cognigy Webchat you will find on the [GitHub](https://github.com/Cognigy/WebchatPlugins)

When the hosted Webchat page is being loaded, it will load the additional Plugin before starting the Webchat.

!!! warning "Inserting wrong Plugin URLs"
    When you add a Plugin URL that loads an incorrect or corrupted Plugin file, the Webchat may not start up correctly.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/webchat_plugins.png" width="80%" />
</figure>

## More information

- [Cognigy Webchat](https://docs.cognigy.com/ai/endpoints/webchat/webchat/)