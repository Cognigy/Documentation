---
 title: "Integrated Demo Page" 
 slug: "integrated-demo-page" 
 hidden: false 
---
# Integrated Demo Page

## Description

<div class="divider"></div>

For every Webchat Endpoint you create, there will be an integrated Demo Page for this Webchat available. To get there, open your Webchat Endpoint and click the "OPEN WEBCHAT" button to the top right.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/93cd938-webchat.PNG" width="100%" />
</figure>

The Webchat Demo Page will show a Website containing a Webchat pointing to the Webchat Endpoint you came from. The Webchat will look and behave as configured in the Webchat settings within the Endpoint.


!!! note "Manually defining the user ID"
    When you load the Webchat, we will per default create a random user ID and store this in local storage, so that you have the same user next time you use the Webchat. However, sometimes it can be beneficial to manually specify a user ID. You can do this by adding ?user=<some id> to the Webchat URL.

## Demo Page Settings

<div class="divider"></div>

Some configuration options within the Webchat Endpoint are exclusive to the integrated Demo Page and will not have the same effect on Webchats that are embedded into your Website.

### Center Webchat 
The positioning of the Webchat will only be affected for Demo Pages.

### Background Image
The Background Image of the Website will only be changed when on a Demo Page.

### "Enable Speech-to-Text" & "Enable Text-to-Speech"
These settings will enable the individual features within the Webchat. On the Demo Page, this will also cause the Plugins to be loaded automatically. In case you want to use them on your own Website, you will have to load them manually.

## Webchat Plugins

<div class="divider"></div>

For Cognigy-hosted Webchats (the ones directly accessible from the Endpoint configuration), there is an option to automatically load Webchat Plugins via a List defined in Cognigy UI.
You can find the "Webchat Plugins" section at the bottom of your Webchat configuration. By clicking `+`, you can add a new Plugin URL.
When the hosted Webchat page is being loaded, it will load the additional Plugin before starting the Webchat.

!!! warning "Inserting wrong Plugin urls"
    When you add a Plugin URL that loads an incorrect or corrupted Plugin file, the Webchat may not start up correctly.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/edeb8a6-plugins.PNG" width="100%" />
</figure>
