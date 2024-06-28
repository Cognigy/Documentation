---
title: "Speech Services" 
slug: "vg-webapp-speech-services" 
description: "Speech Services allow adding multiple Speech Vendors to the Voice Gateway portal"
hidden: false
---

# Speech Services

[![Version badge](https://img.shields.io/badge/Updated in-v4.56-blue.svg)](../../release-notes/4.56.md)

*Speech Services* give your virtual agent a voice. By connecting with a speech vendor of your choice, you can select between multiple voices, genders, accents, and languages. You can add multiple speech vendors to the Voice Gateway, or install multiple instances of one speech vendor, to freely switch between different voices.

Voice Gateway supports the following speech vendor configurations:

| Speech vendor | Cloud-based | On-premises | 
|---------------|-------------|-------------|
| Amazon Polly  | +           | -           |      
| Deepgram      | +           | +           |
| ElevenLabs    | +           | -           |
| Google        | +           | -           |
| Microsoft     | +           | +           |
| Nuance        | +           | +           |
| Soniox        | +           | -           |
| Custom        | +           | +           |

For the list of supported vendors and their Speech-To-Text and Text-To-Speech capabilities, see the [TTS and STT Vendors](../references/tts-and-stt-vendors.md) reference.

To create a speech service, in the left-side menu, select Applications, then click **Add speech service** or **+**. Select available speech providers from the list. Get credentials from your provider and add them to the speech service provider settings.

You can create more than one speech service using speech vendors.

If you need to create multiple speech services from the same vendor, use the **Label** field to create a unique speech service.

After creating a speech service, you can edit or delete it.

!!! warning
    Users with an Account scope can only edit speech services they have created, as well as speech services created by other users with the same scope. They can still use and view speech services shared by Service providers or Admins.

<figure>
  <img class="image-center"  src="../../../_assets/voice-gateway/VG-webapp-speech-services.png"  width="60%" />
  <figcaption>Speech Services</figcaption>
</figure>

## Cloud-Based Speech Services

To configure the connection for a cloud-based speech service:

1. Open the Voice Gateway interface.
2. In the left-side menu, select **Speech**.
3. Click **Add Speech Service** and select your preferred vendor.
4. Select the account you want to use it with. 
5. _(Optional)_ If you need to create multiple speech services from the same vendor, use the **Label** field to create a unique speech service.
5. Select **Speech-To-Text**, **Text-To-Speech** or both, depending on your use case.
6. Follow according to your selected vendor:

=== "Amazon Polly"
    1. Select your **Credential Type**.
    2. Insert the **Access Key ID**.
    3. Insert **Secret Access Key**.
    4. Select a **Region**.
=== "Deepgram"
    1. Enter an API key in the **API Key** field.
=== "Elevenlabs"
    1. Enter an API key in the **API Key** field.
    2. Select your language **Model**.
    3._(Optional)_ Edit the Json code for additional options in the **Extra Options**.
=== "Google Speech Services"
    1. Insert your **Service Key**.
=== "Microsoft Azure"
    1. Select **Use hosted Azure Service**.
    2. Select **Region**.
    3. Enter an API key in the **API Key** field.
    4. _(Optional)_ Use a custom voice for TTS by providing a **Custom Voice Deployment ID**.
    5. _(Optional)_ Use a custom speech model for STT by providing a **Custom Speech Endpoint ID**.
=== "Nuance"
    1. Insert **Client ID**.
    2. Insert **Secret**.
=== "Soniox"
    1. Insert your **API Key**.

## On-Premises Speech Services

To configure the connection, go to **Speech**, select your preferred vendor and scroll down to find the appropriate setting.

=== "Deepgram"
    1. Select **Use on-prem Deepgram container**.
    2. Provide a **Container URI** for TTS.
    3. Select **Use TLS**, if required.

=== "Nuance"
    1. Select **Use on-prem TTS** to provide the URI for your TTS.
    2. Select **Use on-prem STT** to provide the URI for your STT.
  
=== "Microsoft Azure"
    1. Select **Use Azure Docker container (on-prem)**.
    2. Provide a **Container URL for TTS**.
    3. Provide a **Container URL for STT**.
    4. Provide a **Subscription key**, if required.

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
such as [Set Session Config](../../ai/build/node-reference/voice/voice-gateway/set-session-config.md),
[Say](../../ai/build/node-reference/basic/say.md#voice-gateway), [Question](../../ai/build/node-reference/basic/question.md) or [Optional Question](../../ai/build/node-reference/basic/optional-question.md),
or [Session Speech Parameters Config](../../ai/build/node-reference/voice/generic/session-speech-parameters-config.md).

## More Information

- [TTS and STT Vendors](../references/tts-and-stt-vendors.md)