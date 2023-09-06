---
 title: "Integrated Demo Page" 
 slug: "integrated-demo-page" 
 hidden: false 
---
# Integrated Demo Page

## Description

For each Webchat Endpoint you create, an integrated Demo Page for that Webchat will be available. To access it, open your Webchat Endpoint and click **Open Demo Webchat** in the upper-right corner.

The Webchat Demo Page will show a Website containing a Webchat you have configured in the Webchat settings within the Endpoint in Cognigy.AI.

!!! note "Manually defining the user ID"
    By default, when you load the Webchat, you are assigned a random user ID that is stored in local memory so that the next time you use the Webchat you will have the same user. 
    If you want to set a user ID manually, you can do this by adding `?user=` to the Webchat URL.

## Demo Page Settings

These configuration options within the Webchat Endpoint will only have an effect on the integrated Demo Webchat page.

### Center Webchat 

The positioning of the Webchat will only be affected for Demo Pages.

### Background Image

The background image of the Website will only be changed on a Demo Page.

### "Enable Speech-to-Text" & "Enable Text-to-Speech"

These settings will enable the individual features within the Webchat. When enabled, the Plugins will be loaded automatically on the Demo Page. 
In case you want to use the Plugins on your own Website, you will have to load them manually.

## Webchat Plugins

For Cognigy-hosted Webchats (the ones directly accessible from the Endpoint configuration) you can automatically load Webchat Plugins.
You can find the **Webchat Plugins** option in the **Webchat Layout** configuration settings within the Webchat Endpoint Editor. 
A collection of example plugins for the Cognigy Webchat you will find on the github website:

`https://github.com/Cognigy/WebchatPlugins`

When the hosted Webchat page is being loaded, it will load the additional Plugin before starting the Webchat.

!!! warning "Inserting wrong Plugin URLs"
    When you add a Plugin URL that loads an incorrect or corrupted Plugin file, the Webchat may not start up correctly.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/webchat_plugins.png" width="80%" />
</figure>

## More information

- [Cognigy Webchat](https://docs.cognigy.com/ai/endpoints/webchat/webchat/)