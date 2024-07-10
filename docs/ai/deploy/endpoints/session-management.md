---
 title: "Session Management" 
 slug: "session-management" 
 hidden: false 
---

# Session Management

The **Session Management** section exists on some Endpoints. Here you can set the session expiration. Once a session has expired, the conversation will restart with the next user input.

The following Endpoints support session expiration:

- Facebook (Meta) Messenger
- Line
- Slack
- TwilioSMS
- Azure Bot Services
- WhatsApp

!!! note "Default Session Expiration"
    The default session expiration is set to 30 minutes.

!!! warning "Disable Session Expiration"
    You can disable session expiration by setting it to 0. This will prevent a user from having multiple sessions in the **Contact Profile**, which reduces the **Analytics** effectiveness.