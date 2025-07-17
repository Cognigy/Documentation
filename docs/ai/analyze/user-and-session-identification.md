---
title: "User and Session Identification"
slug: "user-and-session-identification"
description: "Cognigy.AI uses unique user IDs and session IDs to keep track of users' interactions with AI Agents."
tags:
  - user id
  - session id
  - user identification
  - session identification
hidden: false
---

# User and Session Identification

Cognigy.AI uses unique user IDs and session IDs to keep track of users' interactions with AI Agents.

## Restrictions

- You must use session IDs only within one organization in your Cognigy.AI installation.
- Except for the [Voice Copilot Endpoint](../../ai/deploy/endpoint-reference/voice-copilot.md), reusing the combination of user and session IDs across Endpoints causes Endpoint collisions and unexpected behavior.
- You must keep user and session IDs unchanged during interactions with AI Agents. Changing user and session IDs with [transformers](../deploy/endpoints/transformers/overview.md), [xApps](../../xApps/overview.md), [extensions](../build/extensions.md), or [Code Nodes](../build/node-reference/basic/code/overview.md) can cause unexpected issues and terminate interactions with AI Agents.

## User ID

_User ID_ is a unique identifier assigned to each user that helps manage user data safely, personalize user experiences, and keep track of user history and preferences. The AI Agent uses this information to improve its responses and customize the conversation according to the user's needs.

## Session ID

_Session ID_ is a unique identifier given to each session initiated by a user. A session represents a period of interaction between the user and the AI Agent. The AI Agent uses session IDs to manage user sessions, track user activity, ensure security, and provide personalized experiences within the conversation.

## Get User and Session IDs

To get the user ID and session ID, you can:

- Retrieve them from the [Input object](../build/ai-agent-memory/input.md) by using the `input.userId` and `input.sessionId` [CognigyScript](../build/cognigyscript.md) expressions, or the **User ID** and **Session ID** Tokens.
- Copy them from the [Logs](../test/logs.md) page.

## More Information

- [Input](../build/ai-agent-memory/input.md)
- [Logs](../test/logs.md)
- [xApps](../../xApps/overview.md)
