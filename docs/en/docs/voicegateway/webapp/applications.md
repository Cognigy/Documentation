---
title: "Applications" 
slug: "vg-webapp-applications"
hidden: false
---

# Applications

[![Version badge](https://img.shields.io/badge/Updated in-v4.60-blue.svg)](../../release-notes/4.60.md)

*Applications* are connectors
that allow the [Endpoint](../getting-started.md#create-a-voice-gateway-endpoint) to be routed to Voice Gateway.
These applications set default values, including the default speech vendor, 
language, and voice, for the Text-To-Speech output and Speech-To-Text recognition.

To create an application, select **Applications** in the left-side menu, then click **Add application** or **+**.

You can create more than one application, dependent on the number of Endpoints created in Cognigy.AI.

After creating an application, you can edit or delete it.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-applications-overview.png"  width="100%" />

## Settings 

| Settings                                      | Description                                                                                                                                                                                                 | Scope                            |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Application Name                              | A unique application name.                                                                                                                                                                                  | Account, Service Provider, Admin |
| Account                                       | Select an account from the list.                                                                                                                                                                            | Account, Service Provider, Admin | 
| Calling Webhook                               | A Cognigy.AI Endpoint URL for the Web Application that will handle calls.                                                                                                                                   | Account, Service Provider, Admin |
| Call Status Webhook                           | A Cognigy.AI Endpoint URL for the Web Application that will receive the call status.                                                                                                                        | Account, Service Provider, Admin | 
| Speech synthesis vendor                       | Select a default vendor and set up Language Settings, Voice for Text-To-Speech output. If you have another vendor with the same credentials, specify the alternative name of the vendor in the Label field. | Account, Service Provider, Admin | 
| Speech recognizer vendor                      | Select a default vendor and set up Language Settings for Speech-To-Text recognition. If you have another vendor with the same credentials, specify the alternative name of the vendor in the Label field.   | Account, Service Provider, Admin |
| Use a fallback speech vendor if primary fails | Add an [additional Speech-To-Text or Text-To-Speech](#add-additional-tts-and-stt-vendor) vendor.                                                                                                            | Account, Service Provider, Admin |


## Add Additional TTS and STT Vendor

To add extra vendor, follow these steps:

1. Open the Cognigy Voice Gateway Self-Service Portal.
2. In the left-side menu, select **Applications**. 
3. Create a new application or use an existing one.
4. On the application page, activate the **Use a fallback speech vendor if primary fails** setting.
5. Choose the vendor type you want to add (STT or TTS) or add both at once:
    - TTS:
        - **Speech synthesis vendor** — select a TTS vendor from the list.
        - **Lable** — specify the alternative name of the vendor in the Label field if you have default vendor with the same credentials. 
        - **Language** — select a primary language.
        - **Voice** — select a primary voice for the virtuial agent.
    - STT:
        - **Speech recognizer vendor** — select an STT vednor from the list.
        - **Lable** — specify the alternative name of the vendor in the Label field if you have default vendor with the same credentials.
        - **Language** — select a primary language. 
6. _(Optional)_ Click **Swap primary and fallback**. The primary and fallback credentials will change places.
7. Click **Save**.

The changes will be applied.

### Call recording configuration

Call recordings can be enabled at an account or application level for debugging purposes.

This is a separate recording functionality, and cannot be controlled by Cognigy.AI within a Flow.

You must provide a Bucket Vendor and additional details and credentials in order to enable this feature and store your recorded calls.

After a call is recorded, an admin can listen to and review recordings at [Recent calls](recent-calls.md#call-recordings).

#### Application level recording

When enabled at the application level, only calls from a specific application will be recorded.

To enable recording calls at an application level, follow these steps:

1. Open the Voice Gateway interface.
2. Go to **Accounts** and click the account to update.
3. In the upper-right corner, click **Add Canned Response**.
4. Scroll down to the  **Call recording configuration** section, click the checkbox for **Enable call recording**.
5. In the **Audio Format** field, choose between `.wav` and `.mp3` formats.
6. Select a bucket vendor:

    === "Amazon S3"
        - **Bucket Name** — provide the name of your bucket.
        - **Region** — choose the region for your storage from the list.
        - **Access key ID** — provide the access key ID for your bucket.
        - **Secret access key** — provide the secret access key ID for your bucket.
        - **S3 Tags** — provide any S3 tags with name and value as needed.

    === "Google Cloud Storage"
        - **Bucket Name** — provide the name of your bucket.
        - **Service key** — provide a JSON key for a Service Account with APIs enabled for Cloud Storage and Storage Transfer API.
        - **Google Cloud Storage Tags** — provide any Google Cloud Storage tags with name and value as needed.

    === "Azure Cloud Storage"
        - **Container Name** — provide the name of your container.
        - **Connection String** — provide a [connection string](https://learn.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string).
        - **Azure Cloud Storage Tags** — provide any Azure Cloud Storage tags with name and value as needed.

7. Click **Test** to verify your connection. 
8. Go to **Applications** and select the Account from the dropdown box on the right side of the screen. 
9. Click the application to edit. 
10. Scroll down to the **Call recording configuration** section, click  the checkbox for **Record all calls**
11. Click **Save**.

All calls from this application will be recorded and appear in the [Recent calls](recent-calls.md#call-recordings) page.