---
 title: "Getting Started" 
 slug: "vg-getting-started" 
 hidden: false 
---

# Getting Started with Voice Gateway

<figure>
<img class="image-center" src="../../../_assets/voice-gateway/VG-logo.png" width="80%" />
   <figcaption>Voice Gateway Logo</figcaption>
</figure>

## How to Set Up Voice Gateway?

To set up Voice Gateway, do the following steps:

1. [Create a Voice Gateway flow](#create-a-voice-gateway-flow)
2. [Create a Voice Gateway Endpoint](#create-a-voice-gateway-endpoint)
3. [Route your Contact Center or Phone Number to Voice Gateway](#route-your-contact-center-or-phone-number-to-voice-gateway)
4. [Set up Voice Gateway for your Organization](#set-up-voice-gateway-for-your-organization)

## Create a Voice Gateway flow

Start your **Voice Gateway** project by creating a voice-enabled flow. With a voice conversation, the virtual agent must respond with a text-based message for every user input. Voice conversations happen on a turn-by-turn basis, meaning that all dialogue outputs that are triggered by the flow will be bundled into one message and delivered across the phone line.

Every Cognigy.AI node that offers text-based messages can be used in a voice flow. If you have rich media in your flow, the fallback text field will be used as voice output.

If there is a Voice Gateway channel-specific configuration, this configuration will be used instead of the one in the default section. In the Voice Gateway channel, you can find pre-defined SSML tags and [activity parameters](../ai/build/node-reference/voice/voice-gateway/parameter-details.md).

For voice-specific actions, you can use the [Voice Gateway Flow Nodes](../ai/build/node-reference/voice/voice-gateway/overview.md).

!!! note
    With the native Cognigy Voice Gateway integration to Cognigy.AI, the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes.

<figure>
   <img class="image-center"  src="../../../_assets/voice-gateway/VG-nodes-overview.png"  width="80%" />
</figure>

## Create a Voice Gateway Endpoint

To do voice-based experiences with your virtual agent, create your [Voice Gateway Endpoint](../ai/deploy/endpoint-reference/voice-gateway.md) in Cognigy.AI. To do that:

1. In the left-side menu of your Agent, click **Deploy > Endpoints**. 
2. On the **Endpoints** page, click **+ New Endpoint**. 
3. In the **New Endpoint** section, do the following:<br>
   3.1 Select the **voice-gateway** Endpoint type.<br>
   3.2 Add a unique name.<br>
   3.3 Select a relevant Flow from the list.<br>
4. Click **Save**.

<figure>
   <img class="image-center" src="../../../_assets/voice-gateway/VG-endpoint-new.png" width="100%" />
</figure>

## Route your Contact Center or Phone Number to Voice Gateway

To route your Contact Center or Phone Number to your Voice Gateway Endpoint, your SIP Trunk needs to be set up. Get in touch with [Cognigy technical support](../help/get-help.md) to configure your SIP Trunk and route your number to the right Endpoint.

## Set up Voice Gateway for your Organization

[![Version badge](https://img.shields.io/badge/Added in-v4.62-blue.svg)](../release-notes/4.62.md)

This setting allows users with the [Account](./webapp/users.md#account) role to log in to the Voice Gateway Self-Service Portal using their Cognigy.AI user credentials. To enable this option, you need to follow these steps:

To set up the Voice Gateway for your organization, follow these steps:

1. Open the Cognigy.AI interface.
2. In the upper-right corner, click the **User Menu**.
3. Select the **Organisation Details** from the menu.
4. Click **Set up Voice Gateway**.
5. Go to **User Menu > Access Control** and assign the `voice-gatewayUser` role to the users who need access to the Voice Gateway Portal with the Account role. Note that Admins and Service Providers cannot log in using Cognigy.AI user credentials.

## What's Next?

- [Create an account](webapp/accounts.md)
- [Create an application](webapp/applications.md)
- [Add a new carrier](webapp/carriers.md)
- [Add a phone number](webapp/phone-numbers.md)
- [Add speech provider credentials](webapp/speech-services.md)