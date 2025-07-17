---
title: "Session Management" 
slug: "session-management" 
description: "The Session Management section includes settings for the session expiration time."
hidden: false
tags:
  - session management
  - session expiration time
---

# Session Management

The _Session Management_ section includes settings for the session expiration time. Managing the session expiration time affects the content that AI Agents can access during a conversation.

## Restrictions

The **Session Management** section is available only in the following Endpoints:

- [Facebook (Meta) Messenger](../endpoint-reference/facebook-messenger.md)
- [Line](../endpoint-reference/line-messenger.md)
- [Slack](../endpoint-reference/slack.md)
- [Twilio SMS](../endpoint-reference/twilio.md)
- [Azure Bot Services](../endpoint-reference/azure-bot-services.md)
- [WhatsApp](../endpoint-reference/whatsapp.md)

## Settings

| Setting            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Session Expiration | Set the session expiration time. Once a session has expired, a new one starts after the next user input. The default session expiration time is 30 minutes.<br><br>You can configure the session to never expire by setting the session expiration time to 0. This approach prevents the session data from being split between multiple sessions and keeps it in the same conversation transcript. |
