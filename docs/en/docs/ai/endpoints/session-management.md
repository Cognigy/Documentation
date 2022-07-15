---
 title: "Session Management" 
 slug: "session-management" 
 hidden: false 
---
# Session Management

The **Session Management** section exists on some Endpoints. Here you can set the session expiration. Once a session has expired, the conversation will restart with the next user input.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/3199d51-ep_facebook_session_management.png" width="100%" />
</figure>

The following Endpoints support session expiration:

  - Facebook Messenger
  - Line
  - Slack
  - TwilioSMS
  - Azure Bot Services
  - WhatsApp

???+ info "Default Session Expiration"
    The default session expiration is set to 30 minutes.


???+ warning "Disable Session Expiration"
    You can disable session expiration by setting it to 0. This will prevent a user from having multiple sessions in the **Contact Profile**, which reduces the **Analytics** effectiveness.