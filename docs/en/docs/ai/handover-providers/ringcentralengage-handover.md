---
title: "RingCentral Engage" 
slug: "ring-central-engage-handover" 
hidden: false 
---
# RingCentral Engage Integration

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/ring-central-engage.svg" width="100%" />
</figure>

## Description

<div class="divider"></div>

Cognigy has integrated **RingCentral Engage** as an additional handover provider that can be used by our customers to connect their users with real Agents (in third-party sources). You can read more about Agent Handover [here]({{config.site_url}}ai/tools/agent-handover/). 

## Setup
<div class="divider"></div>
To start using RingCentral Engage as a handover provider with Cognigy.AI, go to Deploy and open your Endpoints.

Open the Endpoint where you would like to enable Handover to RingCentral Engage. Scroll down to **Handover Settings** and select RingCentral Engage.

To complete your setup,
see
the [Help Center: RingCentral Engage Handover Integration](https://support.cognigy.com/hc/en-us/articles/360016275260-RingCentral-Engage-Handover-Integration) article.

## Send User Profile to RingCentral Engage

[![Version badge](https://img.shields.io/badge/Added in-v4.29.0-blue.svg)]({{config.site_url}})

During a Handover event, the User Profile is sent to RingCentral Engage to provide helpful information to human agents.

!!! warning "Profile fields of Cognigy Profile and RingCentral Profile do not match exactly"
    Cognigy User Profile will be sent to RingCentral Engage and matched up with the object keys existing on RingCentral Engage. The information that was not matched will be added to the "context_data" object. 

    - [RingCentral Engage accepted User Profile Object structure](https://developers.ringcentral.com/engage/digital/guide/sdks/source-sdk/objects#users) sent during the handover.
    - [Cognigy Profile schema]({{config.site_url}}ai/resources/manage/contact-profiles/?h=profile#manage-contact-profiles). Cognigy Profile Schema can be edited and additional fields with specific object keys added.

## Get Queue Updates

[![Version badge](https://img.shields.io/badge/Added in-v4.58.0-blue.svg)]({{config.site_url}})

The **Get Queue Update** setting enables the injection of queue updates into the conversation flow as events. This capability allows you to react to queue updates within your conversation flow.

In addition to enabling the **Get Queue Update** option,
you need to configure the Lookup Node so that the handover type is selected as **Queue**. For more details, refer to the [Handover Status](../flow-nodes/logic/lookup.md#handover-status) section.

The queue updates from RingCentral Engage are visible in the `input.data.handover` object. 
The object contains the following properties:

- `estimatedWaitTime` — the approximate wait time for the user, measured in milliseconds.
- `position` — the conversation's position in the queue.