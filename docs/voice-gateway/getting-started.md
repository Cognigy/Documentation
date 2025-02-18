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

Start your **Voice Gateway** project by creating a voice-enabled flow. With a voice conversation, the AI Agent must respond with a text-based message for every user input. Voice conversations happen on a turn-by-turn basis, meaning that all dialogue outputs that are triggered by the flow will be bundled into one message and delivered across the phone line.

Every Cognigy.AI node that offers text-based messages can be used in a voice flow. If you have rich media in your flow, the fallback text field will be used as voice output.

If there is a Voice Gateway channel-specific configuration, this configuration will be used instead of the one in the default section. In the Voice Gateway channel, you can find pre-defined SSML tags and [activity parameters](../ai/build/node-reference/voice/voice-gateway/parameter-details.md).

For voice-specific actions, you can use the [Voice Gateway Flow Nodes](../ai/build/node-reference/voice/voice-gateway/overview.md).

!!! note
    With the native Cognigy Voice Gateway integration to Cognigy.AI, the AudioCodes implementation will be rebranded from Voice Gateway to AudioCodes.

<figure>
   <img class="image-center"  src="../../../_assets/voice-gateway/VG-nodes-overview.png"  width="80%" />
</figure>

## Create a Voice Gateway Endpoint

To do voice-based experiences with your AI Agent, create your [Voice Gateway Endpoint](../ai/deploy/endpoint-reference/voice-gateway.md) in Cognigy.AI. To do that:

1. In the left-side menu of the Cognigy.AI interface, select a Project where you want to create a voice Flow.
2. In the left-side menu of the Project, go to **Deploy > Endpoints**. 
3. On the **Endpoints** page, click **+ New Endpoint**. 
4. In the **New Endpoint** section, do the following:<br>
    1. Select the **voice-gateway** Endpoint type.<br>
    2. Add a unique name.<br>
    3. Select a relevant Flow from the list.<br>
5. Click **Save**.

<figure>
   <img class="image-center" src="../../../_assets/voice-gateway/VG-endpoint-new.png" width="100%" />
</figure>

## Route your Contact Center or Phone Number to Voice Gateway

To route your Contact Center or Phone Number to your Voice Gateway Endpoint, your SIP Trunk needs to be set up. Get in touch with [Cognigy technical support](../help/get-help.md) to configure your SIP Trunk and route your number to the right Endpoint.

## Set up Voice Gateway for your Organization

[![Version badge](https://img.shields.io/badge/Added in-v4.62-blue.svg)](../release-notes/4.62.md)

This setting allows users with the [Account](./webapp/users.md#account) role to log in to the Voice Gateway Self-Service Portal using their Cognigy.AI user credentials. To enable this option, you need to follow these steps:

To set up the Voice Gateway for your organization, follow these steps:

1. In the left-side menu of the Voice Gateway Self-Service Portal, select **Accounts**.
2. On the **Accounts** page, select an account from the list. 
3. In the **Account SID** field, copy the SID and save it for later use. 
4. In the Cognigy.AI interface, In the upper-right corner of the **Main** page, select **User Menu ![user-menu](../_assets/icons/user-menu.svg) > Admin Center**. 
5. In the Admin Center interface, select **Dashboard** from the left-side menu. 
6. Click **Set up Voice Gateway**. The **Voice Gateway Setup** window opens. 
7. In the **Voice Gateway Account ID** field, enter the SID you copied and saved earlier. Note that your SID can only be associated with one organization in the Cognigy.AI. 
8. In the left-side menu, select **Access Control** and assign the `voice-gatewayUser` role to the users who need access to the Voice Gateway Self-Service Portal with the Account role. When the `voice-gatewayUser` role is assigned to a user, they can log in to the Voice Gateway Self-Service Portal using the **Sign in with a Cognigy.AI account** option. This option is available to users with the Account role linked to a Cognigy.AI organization or to `voicegatewayUser` role users without a Voice Gateway Self-Service Portal account — accounts are automatically created upon first login.

## What's Next?

- [Create an account](webapp/accounts.md)
- [Create an application](webapp/applications.md)
- [Add a new carrier](webapp/carriers.md)
- [Add a phone number](webapp/phone-numbers.md)
- [Add speech provider credentials](webapp/speech-services.md)