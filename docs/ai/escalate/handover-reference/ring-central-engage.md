---
title: "RingCentral Engage" 
slug: "ring-central-engage-handover"
description: "The RingCentral Engage handover connector bridges Cognigy.AI and RingCentral Engage, enabling end users to connect with human agents working within the RingCentral Engage contact center."
hidden: false
tags:
  - contact centers
  - handover providers
  - ringcentral engage
---

# RingCentral Engage Integration

[![Version badge](https://img.shields.io/badge/Added in-v4.97.0-blue.svg)](../../../release-notes/4.97.md)

<figure>
    <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/ring-central-engage.svg" width="100%" />
</figure>

## Description

The RingCentral Engage handover connector bridges Cognigy.AI and [RingCentral Engage](https://engage.ringcentral.com/),
enabling end users to connect with human agents working in a contact center that uses RingCentral Engage.

## Prerequisites

- Access to [RingCentral Engage](https://login.ringcentral.com/)
- Created Endpoint [compatible with RingCentral Engage](../../deploy/endpoints/handover-settings.md#endpoints-compatible-with-handover-providers).
- Configuration steps must be performed by a user with the "Admin" role in RingCentral Engage.
- A community must already exist within the RingCentral Engage platform.

## Configuration on the Handover Provider Side

??? info "1. Create API Token"
    1. Go to the **ADMIN** section in the top bar of the RingCentral Engage platform. 
    2. Select **API access tokens** from the left sidebar. 
    3. Click **+** in the top-right corner to create a new API Access Token. 
    4. Select an agent to handle user chats. 
    5. Copy the token text displayed next to the **API Access Token** name. Save it for later use.

??? info "2. Create the Categories"
    1. In the **ADMIN** section, go to **Categories** in the left sidebar. 
    2. Click the **+** button to create a new category, for example, `Cognigy`, leave other fields as default, and save changes. 
    3. Create two subcategories, `Bot` and `Agent`, with `Cognigy` as the parent category. 
    4. Double-click `Bot` or `Agent` to open their configuration pages. Extract the `CATEGORY_ID` from the URL, for example, `xxxxx.engagement.dimelo.com/admin/categories/CATEGORY_ID/edit`).
     These are needed for the "Bot Category Id" and "Agent Category Id" fields in Cognigy.AI Handover Settings.

??? info "3. Create the Source"
    1. Navigate to **Sources** in the **ADMIN** section sidebar. 
    2. Create a new source of type `Engage Digital Source SDK`.
    3. Set the **Base URI** field to `<endpoint-url>/handover/rce`. For example, `https://endpoint-dev.cognigy.ai/handover/rce`).
    4. In **Message Settings**, set the default category to the **Bot** category created earlier.
    5. Copy the **API access token** field value from the source into the **Realtime Access Token** field in Cognigy.AI Handover Settings.
    6. Copy the **Realtime Endpoint URL** from the **Implementation Details** section into the corresponding field in Cognigy.AI Handover Settings.

??? info "4. Configure Agent Permissions"
    1. In the **Agents** overview, click the key icon for each agent who will use the source.
    2. Grant `read` and `reply` permissions for the source.

??? info "5. Create the Webhook"
    1. Go to **Webhooks** in the **ADMIN** section sidebar. 
    2. Click the **+** button to create a new webhook. 
    3. In the **SETTINGS** section:
        1. Select the previously created API Access Token.
        2. Set **Active** to **on**.
        3. Set **URL** to `<endpoint-url>/handover/rce`, for example, `https://endpoint-demo.cognigy.ai/handover/rce`.
        4. Enter a randomly generated value in the **Secret** field. Copy this value for the **Webhook Secret** field in Cognigy.AI.
    4. In the **FILTERS** section:
        1. Set **Sources filtering strategy** to **No sources except**.
        2. Select the previously created source.
    5. In the **SUBSCRIPTIONS** section, add the **intervention.closed** event.
    6. Update the **Verification Token** to match your Cognigy.AI environment's token. By default, the value is `cognigy123`. Save changes.

??? info "6. Get the Base API URL"
    Build the Base API URL by appending `api` to your RingCentral Engage environment name, for example `cognigy.engagement.dimelo.com` becomes `cognigy.api.engagement.dimelo.com`.
    Save it for later use as the **Base API URL** in Cognigy.AI.

??? info "7. Create Bot and Agent Identities"
    1. Go to the **Identities** page in RingCentral Engage. 
    2. Locate the Bot identity, check **Controlled identity**, and save. This ensures Bot messages appear on the right side.
    3. Locate the Agent identity, make it controlled, and assign it to agents via the **Agents** view by selecting the community and Agent user and saving it.

??? info "8. Set Up Folders for Chatting"
    1. Go to **Desks > Folders** in RingCentral Engage.
    2. Create a folder filtering chats with the **Agent** category for easy agent access.

## Configuration on the Cognigy.AI Side

??? info "1. Create a Handover Connector (Beta)"
    !!! note
        This feature is in Beta. We encourage you to try it out and provide us with feedback.

    1. Go to **Build > Handover Providers**.
    2. Click **+ New handover Provider** and select the RingCentral Engage as the handover provider.
    3. _(Optional)_ Toggle the **Forward Only Handover Conversations** setting to choose whether to forward all conversations to the provider or only those that trigger a handover. If this setting is enabled, Cognigy.AI will forward only conversations where the handover event is triggered.
    4. _(Optional)_ Toggle the **Get Queue Updates** setting to receive queue updates as events in the conversation.
    5. Configure the handover settings:

      | Setting                   | Description                                                                |
      |---------------------------|----------------------------------------------------------------------------|
      | **API Access Token**      | Paste the token from the RingCentral Engage API Access Token.              |
      | **Bot Category ID**       | Enter the `CATEGORY_ID` for the `Bot` category.                            |
      | **Agent Category ID**     | Enter the `CATEGORY_ID` for the `Agent` category.                          |
      | **Realtime Access Token** | Paste the token from the RingCentral Engage Source.                        |
      | **Realtime Endpoint URL** | Paste the URL from the RingCentral Engage Source.                          |
      | **Webhook Secret**        | Paste the secret from the RingCentral Engage Webhook.                      |
      | **Base API URL**          | Enter the Base API URL that you built previously.                          |

??? info "2. Add a Handover to Agent Node"
    1. Create a Flow in Cognigy.AI with a Handover to Agent Node.
    2. Link the Endpoint to this Flow.
    3. When triggered, this Node escalates the conversation to RingCentral Engage, assigning it the `Agent` category and sending the Cognigy User Profile to RingCentral Engage.
    See [Send User Profile](#optional-additional-configuration).

After configuring the Handover Settings, test the setup: send a message to the Endpoint and make sure that a conversation appears in RingCentral Engage.

## Additional Configuration

??? info "Apple Business Chat"
    Ensure human agents with API token ownership have `reply` permissions on all non-custom SDK sources.

??? info "Send User Profile to RingCentral Engage"
    During a Handover event, the Contact Profile is sent to RingCentral Engage to provide helpful information to human agents.

    !!! warning "Profile fields of Cognigy Profile and RingCentral Profile don't match exactly"
        The Cognigy.AI Contact Profile will be sent to RingCentral Engage and matched up with the object keys existing on RingCentral Engage. The information that wasn't matched will be added to the `context_data` object. 

        - [RingCentral Engage accepted User Profile Object structure](https://developers.ringcentral.com/engage/digital/guide/sdks/source-sdk/objects#users) sent during the handover.
        - [Cognigy Profile schema]({{config.site_url}}ai/resources/manage/contact-profiles/?h=profile#manage-contact-profiles). Cognigy Profile Schema can be edited and additional fields with specific object keys added.

??? info "Get Queue Updates"
    The **Get Queue Update** setting enables the injection of queue updates into the conversation flow as events. This capability allows you to react to queue updates within your conversation.

    In addition to enabling the **Get Queue Update** option, you need to configure the Lookup Node so that the handover type is selected as **Queue**. For more details, refer to the [Handover Status](../../build/node-reference/logic/lookup.md#handover-status) section.

    The queue updates from RingCentral Engage are visible in the `input.data.handover` object. 
    The object contains the following properties:

    - `estimatedWaitTime` — the approximate wait time for the user, measured in milliseconds.
    - `position` — the conversation's position in the queue.

## More Information

- [All Handover Providers](overview.md)
- [Handovers](../handovers.md)