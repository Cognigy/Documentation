---
title: "Notifications"
slug: "Notifications"
description: "Notifications are messages or alerts that are generated to inform human agents about new events, activities, or interactions within a conversation chat system in Live Agent. These notifications serve as a way to keep agents updated and responsive to customer inquiries in a timely manner."
hidden: false
---

# Notifications

_Notifications_ are messages or alerts that are generated to inform human agents about new events, activities, or interactions within a conversation chat system in Live Agent. These notifications serve as a way to keep agents updated and responsive to customer inquiries in a timely manner.

## Restrictions

- Modern browsers block automatic audio playback for security reasons. As a result, audio notifications in Live Agent only trigger after a human agent interacts with the interface, for example, by clicking a tab, pressing a key, or moving the mouse.
- If a human agent has multiple inboxes and is not in the inbox specified in the [Handover to Agent](../ai/build/node-reference/service/handover-to-agent.md) Node, audio notifications for that inbox may be delayed. Alternatively, the human agent can check [unread notifications](#view-unread-notifications).

## Notification types

In Live Agent, you can configure email and push notifications, and also add audio alerts for certain types of actions that trigger notifications.

The table below lists the actions in Live Agent for which notifications can be configured.

| Action / Notification Type                           | Email | Push | Audio |
|------------------------------------------------------|-------|------|-------|
| A new conversation is created                        | +     | +    | +     |
| A conversation is assigned to a user                 | +     | +    | +     |
| A user is mentioned in a conversation                | +     | +    | -     |
| A new message is created in an assigned conversation | +     | +    | -     |

### Push Notification Requirements

For push notifications, the following requirements exist:

- Push notifications must be enabled in Live Agent and in your browser. Otherwise, they are not available.
- Push notifications are not supported by the Microsoft Edge browser.
- Push notifications work as expected in Google Chrome and Mozilla Firefox. For the other browsers, Cognigy cannot provide a guarantee.

### Customization of Email Notifications

If you have an on-premises Live Agent installation, you can customize your [email template](installation/helm-values/email-templates.md).

## Configure Notifications

Notifications can be configured at two levels: 

- [user profile level](#configure-notifications-at-the-user-profile-level)
- [account level](#configure-notifications-at-the-account-level)

### Configure Notifications at the User Profile Level

In Live Agent, a user with any role can configure audio, email, and push notifications within their profile.

!!! note
    The email and push notification settings in the [Account Settings](#configure-notifications-at-the-account-level) will take precedence over the Profile Settings.
    If the administrator has not yet changed the push and email notification settings, a user still has the opportunity to change them in the Profile Settings.

To configure notifications at the user profile level, follow these steps:

1. In the bottom-left corner of the Live Agent screen, click the **Profile Settings** icon.
2. From the list, select **Profile Settings**.
3. On the **Profile Settings** setting, activate the following settings:
    -  **Audio Notifications** — enable audio notifications. Select one of the following options:
        - **None** — the audio notifications are turned off.
        - **Assigned Conversations** — the audio notifications work only when the conversation is assigned to a user. 
        - **All Conversations** — the audio notifications work for all created conversations.
    - **Email Notifications** — enable desired event options for your email notifications.
    - **Push Notifications** — enable desired event options for your push notifications.

The settings will be applied automatically.

Users with the `Administrator` role can configure the notification sound in the [Account Settings](settings/account-settings.md).

### Configure Notifications at the Account Level

Users with the `Administrator` role can configure email and push notifications at the Account level.

This configuration applies to all user profiles within your account (organization) and overrides the [Profile Settings](#configure-notifications-at-the-user-profile-level).

To configure email and push notifications at the Account level, follow these steps:

1. On the left side of the Live Agent screen, select **Settings**.
2. In the settings column, select **Account Settings**.
3. On the **Account Settings** page, activate the following notifications:
    - **Email Notifications** — activate **Enable overriding email notification preferences** and enable desired event options for your email notifications.
    - **Push Notifications** — activate **Enable overriding push notification preferences** and enable desired event options for your push notifications.
4. In the upper-right corner, click **Update Settings** to apply the settings.

## View Unread Notifications

To view your unread notifications in Live Agent, do the following:

1. In the bottom-left corner of the Live Agent screen, click ![bell](../_assets/icons/bell.svg).
2. To see all the notifications in a window, click **View all Notifications**.
3. Click a notification item to see the corresponding conversation.

## More Information

- [Profile Settings](./profile-settings.md)
- [Account Settings](./settings/account-settings.md)
