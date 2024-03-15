---
title: "Embedding"
slug: "key-features"
description: ""
hidden: false
---

# Webchat 2: Embedding

### Embedding using GitHub instructions

When you have set up a Webchat Endpoint in Cognigy, you can follow the [embedding instructions on GitHub](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md) to see how you can implement the Webchat within your Website.

It also features an expressive [technical documentation](https://github.com/Cognigy/WebchatWidget/tree/master/docs) with examples for integrators, which can help you build a seamless and powerful integration into your Website.

!!! warning
   In the local embedding code, ensure that the settings `maintenance`, `businessHours`, and `connectivity` include the `awaitEndpointConfig` setting. Otherwise, they will not work properly.

### Embedding HTML Code available in the Endpoint Editor

Cognigy.AI adds a form section to the Webchat Endpoint configuration to provide embedding-ready code to users.
Clicking the link **Open Embedding Documentation** below the embed field takes you to the [GitHub Webchat Widget embedding documentation](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md) for detailed specifications and examples.

When hovering over the code field, you will get a button displayed to copy the code to the clipboard.

That makes your Webchat configuration for your own purposes much easier now.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/22b21b7-HTML_embed_code_field_in_Webchat_endpoint_configuration_2.svg" width="100%" />
  <figcaption>HTML code embed field</figcaption>
</figure>

!!! note "Note"
    The embedding code just loads the webchat with the correct endpoint configured, using the latest release.