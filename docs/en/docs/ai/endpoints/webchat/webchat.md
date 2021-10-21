# Cognigy Webchat

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/532e54a-EP_webchat.png" width="100%" />
</figure>

The Cognigy Webchat is a powerful Tool for customers that want to implement a conversational AI into their own Websites or want to showcase a Bot for quick Demonstrations.

The Webchat can be used free of additional charges when used with Cognigy and is available for [Download on GitHub](https://github.com/Cognigy/WebchatWidget/releases/latest).

## Features

<div class="divider"></div>

In addition to sending and receiving regular text messages, the Webchat can also present content and provide interactive inputs in various ways to improve the user experience. Read more about that in our [Webchat Features]({{config.site_url}}ai/endpoints/webchat/webchat-features/) documentation. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/76766ec-Screenshot_from_2019-12-02_14-32-33.png" width="100%" />
  <figcaption>The Cognigy Webchat rendering a Gallery Template</figcaption>
</figure>

## Plugins
<div class="divider"></div>
The featureset of the Cognigy Webchat can be extended by loading additional Plugins, e.g. to give end users special input methods or display messages in an expressive way.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/138b697-google-maps-Webchat.png" width="100%" />
  <figcaption>Example of a Webchat Plugin showing a Google Maps Chart.</figcaption>
</figure>

You can find a [collection of Webchat Plugins](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins) as well as [documentation on how to write your own Webchat Plugin](https://github.com/Cognigy/WebchatPlugins)  in our Webchat Plugins GitHub repository.

To learn how to embed Webchat Plugins on your Website, take a look at the ["Using Webchat Plugins" section in our embedding guide](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md#using-webchat-plugins).

For instructions on how to work with Webchat Plugins from within Cognigy, please refer to our Guide on [Triggering Webchat Plugins]({{config.site_url}}ai/endpoints/webchat/triggering-webchat-plugins/).

## Embedding

<div class="divider"></div>

**Embedding using GitHub instructions** 

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="60" height="60"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://github.com/Cognigy/WebchatWidget/blob/master/docs/README.md" target="_blank" >Cognigy/WebchatWidget</a>
      </div>
      <div class="callout-subtext">
            Reference to Cognigy repository on GitHub
      </div>
   </div>
</blockquote>

When you have set up a Webchat Endpoint in Cognigy, you can follow the [embedding instructions on GitHub](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md) to see how you can implement the Webchat within your Website.

It also features an expressive [technical documentation](https://github.com/Cognigy/WebchatWidget/tree/master/docs) with examples for integrators, which can help you build a seamless and powerful integration into your Website.

**Embedding HTML Code available in Endpoint Editor**

[![Version badge](https://img.shields.io/badge/Added in-v4.9.0-blue.svg)]({{config.site_url}})

As of release v4.9 Cognigy.AI adds a form section to the Webchat Endpoint configuration to provide embedding-ready code to users.
Clicking the link "**Open Embedding Documentation**" below the embed field takes you to the [GitHub Webchat Widget embedding documentation](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md) for detailed specifications and examples.

When hovering over the code field you will get a button displayed to copy the code to the clipboard. 

That makes your Webchat configuration for your own purposes much easier now.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/22b21b7-HTML_embed_code_field_in_Webchat_endpoint_configuration_2.svg" width="100%" />
  <figcaption>HTML code embed field</figcaption>
</figure>

???+ info "Note"
    **The embedding code just loads the webchat with the correct endpoint configured, using the latest release.** 

## More information

- [Deploy a Webchat Endpoint]({{config.site_url}}ai/endpoints/webchat/deploy-webchat-endpoint/)
- [Webchat Features ]({{config.site_url}}ai/endpoints/webchat/webchat-features/)
-  [Triggering Webchat Plugins ]({{config.site_url}}ai/endpoints/webchat/triggering-webchat-plugins/)
- [Integrated Demo Page ]({{config.site_url}}ai/endpoints/webchat/integrated-demo-page/)