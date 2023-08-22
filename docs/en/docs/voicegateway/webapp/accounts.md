---
title: "Accounts" 
slug: "vg-webapp-accounts" 
hidden: false 
---

# Accounts

[![Version badge](https://img.shields.io/badge/Updated in-v4.58-blue.svg)](../../release-notes/4.58.md)

*Accounts* are containers for resources such as [applications](applications.md), [carriers](carriers.md), and [speech services](speech-services.md) that are used to create and manage voice applications.

In Voice Gateway, an account may represent a specific customer organization and can have multiple users associated with it. 

The account owner controls what the other users can see and do within the platform, ensuring that sensitive data and functions are kept secure. The account owner can be a user with Service Provider and Admin scopes. They can create more than one account and manage them. To create an account, in the left-side menu, select Accounts, then click **Add account** or **+**.

A user with the Account scope can view and edit only the account to which they belong.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-accounts.png"  width="100%" />

## Settings

| Settings                         | Description                                                                                                                  | Scope                            |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| Account SID                      | The value generates automatically when the admin creates an account                                                          | Account, Service Provider, Admin |
| Account name                     | A unique account name.                                                                                                       | Account, Service Provider, Admin |
| Unit                             | You can choose sessions or minutes and specify a maximum number of them.                                                     | Admin                            |
| Licensed sessions                | A number of purchased sessions.                                                                                              | Admin                            |
| SIP Realm                        | A domain name that SIP devices will register with.                                                                           | Account, Service Provider, Admin |
| Webhook Secret                   | A layer of security "signing" the webhook calls.                                                                             | Account, Service Provider, Admin |
| Application for SIP device calls | Select the application which is used to handle incoming calls from SIP users who have registered to the Account's SIP Realm. | Account, Service Provider, Admin |
| Application for SIPREC calls     | Select the application for [SIPREC](https://datatracker.ietf.org/doc/html/rfc7866) calls.                                    | Account, Service Provider, Admin |
| Registration Webhook             | A URL for your Web Application that handles registrations.                                                                   | Account, Service Provider, Admin |
| Queue Event Webhook              | A URL to notify when a member joins or leaves a queue.                                                                       | Account, Service Provider, Admin |
| TTS prompt caching               | View the count of cached prompts, and click to clear the TTS cache.                                                          | Account, Service Provider, Admin |
| Call recording configuration     | Enable and configure call recordings at an account level.                                                                    | Account, Service Provider, Admin |
| Account API keys                 | You can generate API key by clicking **Add key**.                                                                            | Account, Service Provider, Admin |

### TTS prompt caching

The **Clear TTS Cache** button resets the cached audio for TTS. This forces the bot to load new audio for TTS, to help to resolve TTS related issues.

### Call recording configuration

Call recordings can be enabled at an account or application level for debugging purposes.

This is a separate recording functionality, and cannot be controlled by Cognigy.AI within a Flow.

You must provide a Bucket Vendor and additional details and credentials in order to enable this feature and store your recorded calls.

After a call is recorded, an admin can listen to and review recordings at [Recent calls](recent-calls.md#call-recordings).

!!! note 
    Currently Amazon S3 is the only supported storage vendor for call recordings.

#### Account level recording

When enabled at the account level, calls from all applications within an account will be recorded.

To enable recording calls at an account level, follow these steps:

1. Open the Voice Gateway interface.
2. Go to **Accounts** and click the account to update.
3. In the upper-right corner, click **Add Canned Response**.
4. Scroll down to the  **Call recording configuration** section, click  the checkbox for **Enable call recording** and fill in the following fields:
    - **Audio Format** — Choose between `.wav` and `.mp3` formats.
    - **Bucket Vendor** — Select your vendor from the list.
    - **Bucket Name** — Provide the name of your bucket.
    - **Region** — Choose the region for your storage from the list.
    - **Access key ID** — Provide the access key ID for your bucket.
    - **Secret access key** — Provide the secret access key ID for your bucket.
    - **S3 Tags** - Provide any S3 tags with name and value as needed.
5. Click **Test** to verify your connection.
6. Click the **Record all calls for this account** checkbox.
7. Click **Save**.

All calls from all applications on this account will be recorded and appear in the [Recent calls](recent-calls.md#call-recordings) page.

#### Application level recording

When enabled at the application level, only calls from a specific application will be recorded.

To enable recording calls at an application level, follow these steps:

1. Open the Voice Gateway interface.
2. Go to **Accounts** and click the account to update.
3. In the upper-right corner, click **Add Canned Response**.
4. Scroll down to the  **Call recording configuration** section, click  the checkbox for **Enable call recording** and fill in the following fields:
    - **Audio Format** — Choose between `.wav` and `.mp3` formats.
    - **Bucket Vendor** — Select your vendor from the list.
    - **Bucket Name** — Provide the name of your bucket.
    - **Region** — Choose the region for your storage from the list.
    - **Access key ID** — Provide the access key ID for your bucket.
    - **Secret access key** — Provide the secret access key ID for your bucket.
    - **S3 Tags** - Provide any S3 tags with name and value as needed.
5. Click **Test** to verify your connection.
6. Go to **Applications** and select the Account from the dropdown box on the right side of the screen.
7. Click the application to edit.
8. Scroll down to the  **Call recording configuration** section, click  the checkbox for **Record all calls** 
9. Click **Save**.

All calls from this application will be recorded and appear in the [Recent calls](recent-calls.md#call-recordings) page.