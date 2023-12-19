---
title: "Speech Services" 
slug: "vg-webapp-speech-services" 
description: "Speech Services allow adding multiple Speech Vendors to the Voice Gateway portal"
hidden: false
---

# Speech Services

[![Version badge](https://img.shields.io/badge/Updated in-v4.56-blue.svg)](../../release-notes/4.56.md)

*Speech Services* allow adding multiple Speech Vendors to the Voice Gateway. The full list of supported vendors is available in the [TTS and STT Vendors](../references/tts-and-stt-vendors.md) reference.

To create a speech service, in the left-side menu, select Applications, then click **Add speech service** or **+**. Select available speech providers from the list. Get credentials from your provider and add them to the speech service provider settings.

You can create more than one speech service using speech vendors.

If you need to create multiple speech services from the same vendor, use the **Label** field to create a unique speech service.

After creating a speech service, you can edit or delete it.

!!! warning
    Users with an Account scope can only edit speech services they have created, as well as speech services created by other users with the same scope. They can still use and view speech services shared by Service providers or Admins.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-speech-services.png"  width="100%" />

## Add a Custom Speech Vendor

If the desired vendor is not included in the list of preinstalled vendors,
or if you want to modify the configuration of an existing one, you can add a custom vendor.

Before adding a vendor to the Voice Gateway, you need to create it.
To do this, use the [custom-speech-example](https://github.com/Cognigy/custom-speech-example/tree/main) template on GitHub.
Using the same template, you can customize vendors that are provided in it as examples, such as Google, AssemblyAI, and Vosk, or create a new one.
After you have created the custom provider, deploy it on a server,
for example, in the AWS Cloud, then copy the address of the custom provider for use in the Voice Gateway.

To add a custom speech vendor, follow these steps:

1. Open The Cognigy Voice Gateway Self-Service Portal.
2. In the left-side menu, select **Speech**.
3. On the **Speech services** page, click **Add speech service**.
4. On the **Add a speech service** page, select **Custom** from the **Vendor** list.
5. In the **Name** field, specify a unique name for your provider. You need to reuse this name in the Node configuration.
6. From the **Account** list, select a specific account or leave the **All accounts** value if you want that custom speech provider will be available for all available accounts.
7. In the **Label** field, create a label only if you need to create multiple speech services from the same vendor. Then, use the label in your [application](applications.md#add-additional-tts-and-stt-vendor) to specify which service to use. 
8. Activate the **Use for text-to-speech** setting to use this provider as a TTS vendor. Enter the TTS HTTP URL of the server where your custom vendor is deployed. 
9. Activate the **Use for speech-to-text** setting to use this provider as an STT vendor. Enter the STT websocket URL of the server where your custom vendor is deployed.
10. In the **Authentication Token** field, enter the key that you get from your TTS or STT vendor to set up a connection. 
11. Click **Save**.

To start using your speech provider,
you need to specify the provider name in the **Custom** parameter of the relevant Nodes,
such as [Set Session Config](../../ai/flow-nodes/vg/set-session-config.md),
[Say](../../ai/flow-nodes/message/say.md#voice-gateway), [Question](../../ai/flow-nodes/message/question.md) or [Optional Question](../../ai/flow-nodes/message/optional-question.md),
or [Session Speech Parameters Config](../../ai/flow-nodes/generic-voice-nodes/session-speech-parameters-config.md).

## More Information

- [TTS and STT Vendors](../references/tts-and-stt-vendors.md)