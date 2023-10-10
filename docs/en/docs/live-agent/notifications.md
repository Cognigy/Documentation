---
 title: "Notifications"
 slug: "Notifications"
 hidden: false
---
# Notifications

**Notifications** are special notes of conversations that were auto-assigned to an Agent.
When defined in the account settings, notifications can be send as audio chimes, as email messages to an Agents' email address or as push notifications to an Agents' mobile device, desktop or notebook. If the Agent is not active in chat, notifications appear on the devices assigned to his profile or account.

A **Push Notification** is a message that pops up on a mobile device or desktop without the recipient needing to open an app or website. Live Agent initiates notifications to inform assigned Agents about new events. 

Human Agents automatically get notifications when there is a  respond to a message or if they are mentioned in a conversation.
Notifications can be customized within Live Agent, e.g. for using email templates as reminder for customer messages they haven't read or reacted to.

All Notifications intent to support the human Agent to let him know when there is a new customer action in an assigned conversation, to shorten the response time of the Agent and to improve user experience and customer services at all.

## Display Notifications

To display your unread notifications in Live Agent, do the following:

1. Go to Live Agent.
2. On the bottom left side of the screen, click the notifications thumbnail. A window will show the unread notifications.
2. Click **View all Notifications** to see all the notifications in a window.
3. Click on a notification item to see the corresponding conversation and routing details. 

## Notification types

In Live Agent you can use two different notifications:

1. **Email Notifications** 

    The email notification settings in the **Account Settings** will take precedence when enabling following event options:

    - Send email notifications when a new conversation is created.
    - Send email notifications when a conversation is assigned to me.
    - Send email notifications when you are mentioned in a conversation.
    - Send email notifications when a new message is created in an assigned conversation.

    Live Agent allows customization of email notifications.
    To customize the email notifications, go to [Email Templates](./../installation/helm-values/email-templates/?h=notifications).

2. **Push Notifications**
  
    The push notification settings in the **Account Settings** will take precedence over the individual agent profile settings. You can enable following event options:

    - Send push notifications when a new conversation is created
    - Send push notifications when a conversation is assigned to me
    - Send push notifications when you are mentioned in a conversation
    - Send push notifications when a new message is created in an assigned conversation

!!! note
    - Push notifications must be enabled in Live Agent and in your browser. Otherwise, they are not available.
    - Push notifications are not supported by the Microsoft Edge browser.
    - Push notifications work as expected in Google Chrome and Mozilla Firefox. For the other browsers, Cognigy cannot provide a guarantee.

## Configure Notifications

!!! note
    The email and push notification settings in the **Account Settings** will take precedence over the individual Agent profile settings.
    If the administrator has not yet changed the push and email notification settings, a human Agent still has the opportunity to change them in the **Profile Settings**.

### Configure Notifications as an Agent

As an Agent, you can configure **Audio**, **Email** and **Push** notifications in the Live Agent **Profile Settings** as follows:

1. Go to Live Agent.
2. On the left bottom side of the screen, select your **Profile Settings**.
3. Click **Profile Settings**.
4. Go to **Audio Notifications** and enable audio notifications in your dashboard for **None**, **Assigned Conversations** or **All Conversations** by clicking the corresponding checkbox.
5. Go to **Email Notifications** and enable the event option you want for your email notifications preferences, ticking the corresponding checkbox.
6.  Go to **Push Notifications** and enable the event option you want for your push notifications preferences, ticking the corresponding checkbox.

### Configure Notifications as an Administrator:

As an administrator, you can configure **Email** and **Push** Notifications in the Live Agent **Account Settings** for the following events:

- A new conversation is created.
- A conversation is assigned to you.
- You are mentioned in a conversation.
- A new message is created in an assigned conversation.

This configuration applies to all human Agents of your organization account and overrides the Agent profile settings.

To configure **Email** and **Push** notifications as an administrator within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. In the settings column, select **Account Settings**.
4. Go to **Email Notifications** and activate the **Enable overriding email notification preferences** checkbox. 
5. Enable the event option you want for your email notifications preferences, ticking the corresponding checkbox. 
6. Go to **Push Notifications** and activate the **Enable overriding push notification preferences** checkbox.
7. Enable the event option you want for your push notifications preferences, ticking the corresponding checkbox.
8. Click **Update Settings** in the top right side of the screen, to confirm the settings.

## More Information

- [Profile Settings](./profile-settings.md)
- [Account Settings](./settings/account-settings.md)
