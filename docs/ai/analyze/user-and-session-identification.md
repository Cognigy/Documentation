---
title: "User and Session Identification"
slug: "user-and-session-identification"
hidden: false
---

# User and Session Identification

Cognigy.AI utilizes unique user IDs and session IDs to keep track of users' interactions with AI Agents.

## Restrictions

- You must use session IDs only within one organization in your Cognigy.AI instance.
- Except for [Voice Copilot Endpoint](../../ai/deploy/endpoint-reference/voice-copilot.md), reusing the combination of user and session IDs across Endpoints leads to Endpoint collisions and unexpected behavior.
- You must keep user and session IDs unchanged during interactions with AI Agents. Changing user and session IDs with [transformers](../deploy/endpoints/transformers/transformers.md), [xApps](../../xApps/overview.md), [extensions](../build/extensions.md), or [Code Nodes](../build/node-reference/basic/code/overview.md) can cause unexpected issues and termination of interactions with AI Agents.

## User ID

A _user ID_ is a unique identifier assigned to each user that helps manage user data safely, personalize user experiences, and keep track of user history and preferences. The AI Agent utilizes this information to improve its responses and customize the conversation according to the user's needs.

## Session ID

A _session ID_ is a unique identifier given to each session initiated by a user. A session represents a period of interaction between the user and the AI Agent. The AI Agent uses session IDs to manage user sessions, track user activity, ensure security, and provide personalized experiences within the conversation.

## Obtain User and Session IDs

To obtain the user ID and session ID, you can access them in the Input object `input.userId` and `input.sessionId`, or you can use the **User ID** and **Session ID** Tokens to retrieve this data from the [Input](../test/interaction-panel/input.md) Object. Also, you can find these IDs on the [Logs](../test/logs.md) page.
