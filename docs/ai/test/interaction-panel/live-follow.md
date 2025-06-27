---
title: "Live Follow"
slug: "live-follow"
description: "The Interaction Panel's live follow mode allows you to monitor conversations between AI Agents and users in real time to debug Flows connected to an Endpoint."
hidden: false
tags:
    - live follow
    - real-time monitoring
    - user tracking
    - debugging
    - flow testing
    - conversation monitoring
    - real-time debugging
---

# Live Follow

With _Live Follow_ mode, you can monitor conversations between AI Agents and users in real time to debug [Flows](../../build/flows/overview.md) connected to an [Endpoint](../../deploy/endpoints/overview.md).

## Prerequisites

- Configure an [Endpoint](../../deploy/endpoints/overview.md) for the Flow.

## Restrictions

- Live Follow mode doesn't display human agent messages.

## How to Use Live Follow Mode

To use and test Live Follow mode, you first need the user ID of the user you want to follow. To find the user ID, you have the following options:

- On the **Logs** page in **Test > Logs**, search for `userId` in logs with a `info Received message from user` log message.
- If you don't find `userId`, navigate to the chat you created via the Endpoint, for example, Webchat, Teams, or Slack. Send a message in this chat, then go back to the **Logs** page and search for `userId`.
- To get user ID for Demo Webchat, refer to the [Demo Webchat](../../../webchat/demo.md#manually-defining-the-user-id) documentation.

Once you have the user ID, follow these steps:

1. In the Interaction Panel, open live follow mode by clicking ![live-follow](../../../_assets/icons/live-follow-interaction-panel.svg).
2. Paste the user ID into the **User ID** field and click ![start-live-follow](../../../_assets/icons/start-live-follow.svg).

You can now view and track the user's real-time conversation from the Interaction Panel. To stop live following, click ![stop-live-follow](../../../_assets/icons/stop-live-follow.svg).

## More Information

- [Logs](../logs.md)