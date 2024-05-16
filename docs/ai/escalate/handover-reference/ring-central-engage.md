---
title: "RingCentral Engage" 
slug: "ring-central-engage-handover" 
hidden: false 
---

# RingCentral Engage Integration

<figure>
    <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/ring-central-engage.svg" width="100%" />
</figure>

## Description

Cognigy has integrated **RingCentral Engage** as an additional handover provider
that can be used by Cognigy customers to connect their users with human agents.
You can read more about Agent Handover [here](../../build/node-reference/service/handover-to-agent.md). 

## Setup

To start using RingCentral Engage as a handover provider with Cognigy.AI, go to Deploy and open your Endpoints.

Open the Endpoint where you would like to enable Handover to RingCentral Engage. Scroll down to **Handover Settings** and select RingCentral Engage.

To complete your setup,
see
the [Help Center: RingCentral Engage Handover Integration](https://support.cognigy.com/hc/en-us/articles/360016275260-RingCentral-Engage-Handover-Integration) article.

## Send User Profile to RingCentral Engage

During a Handover event, the User Profile is sent to RingCentral Engage to provide helpful information to human agents.

!!! warning "Profile fields of Cognigy Profile and RingCentral Profile do not match exactly"
    Cognigy User Profile will be sent to RingCentral Engage and matched up with the object keys existing on RingCentral Engage. The information that was not matched will be added to the "context_data" object. 

    - [RingCentral Engage accepted User Profile Object structure](https://developers.ringcentral.com/engage/digital/guide/sdks/source-sdk/objects#users) sent during the handover.
    - [Cognigy Profile schema]({{config.site_url}}ai/resources/manage/contact-profiles/?h=profile#manage-contact-profiles). Cognigy Profile Schema can be edited and additional fields with specific object keys added.

## Get Queue Updates

[![Version badge](https://img.shields.io/badge/Added in-v4.58.0-blue.svg)](../../../release-notes/4.58.md)

The **Get Queue Update** setting enables the injection of queue updates into the conversation flow as events. This capability allows you to react to queue updates within your conversation flow.

In addition to enabling the **Get Queue Update** option,
you need to configure the Lookup Node so that the handover type is selected as **Queue**. For more details, refer to the [Handover Status](../../build/node-reference/logic/lookup.md#handover-status) section.

The queue updates from RingCentral Engage are visible in the `input.data.handover` object. 
The object contains the following properties:

- `estimatedWaitTime` — the approximate wait time for the user, measured in milliseconds.
- `position` — the conversation's position in the queue.