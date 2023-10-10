---
 title: "Notifications"
 slug: "Notifications"
 hidden: false
---
# Notifications

Notifications are special notes of conversations that were auto-assigned to an agent. 

## Display Notifications

To display your unread notifications in Live Agent, do the following:

1. Go to Live Agent.
2. On the bottom left side of the screen, click the notifications thumbnail. A window will show the unread notifications.
2. Click **View all Notifications** to see all the notifications in a window.
3. Click on a notification item to see the corresponding conversation and routing details. 


## Notification types

In Live Agent you can use two different notifications:

1. **Email Notifications** 

    Enable overriding email notification preferences
    The email notification settings in the account settings will take precedence by activating following individual agent profile settings:

    - Send email notifications when a new conversation is created.
    - Send email notifications when a conversation is assigned to me.
    - Send email notifications when you are mentioned in a conversation.
    - Send email notifications when a new message is created in an assigned conversation.

    Live Agent allows customization of email notifications.
    To customize the email notifications, go to [Email Templates](./../installation/helm-values/email-templates/?h=notifications).

2. **Push Notifications**
  
    Enable overriding push notification preferences
    The push notification settings in the account settings will take precedence over the individual agent profile settings.

    - Send push notifications when a new conversation is created
    - Send push notifications when a conversation is assigned to me
    - Send push notifications when you are mentioned in a conversation
    - Send push notifications when a new message is created in an assigned conversation

!!! note
    - Push notifications must be enabled in Live Agent and in your browser. Otherwise, they are not available.
    - Push notifications are not supported by the Microsoft Edge browser.
    - Push notifications work as expected in Google Chrome and Mozilla Firefox. For the other browsers, Cognigy cannot provide a guarantee.

## Configure Notifications


### Configure Notifications as an Agent

As an Agent, you can configure **Audio**, **Email** and **Push** Notifications in the Live Agent **Profile Settings** as follows:

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

To configure **Email** and **Push** Notifications as an administrator within Live Agent, do the following:

1. Go to Live Agent.
2. On the left side of the screen, select **Settings**.
3. In the settings column, select **Account Settings**.
4. Go to **Email Notifications** and activate the **Enable overriding email notification preferences** checkbox. 
5. Enable the event option you want for your email notifications preferences, ticking the corresponding checkbox. 
6. Go to **Push Notifications** and activate the **Enable overriding push notification preferences** checkbox.
7. Enable the event option you want for your push notifications preferences, ticking the corresponding checkbox.
8. Click **Update Settings** in the top right side of the screen.

!!! note
    The email and push notification settings in the **Account Settings** will take precedence over the individual Agent profile settings.
    If the administrator has not yet changed the push and email notification settings, a human Agent still has the opportunity to change them in the **Profile Settings**.

