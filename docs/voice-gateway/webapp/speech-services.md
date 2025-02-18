---
title: "Speech Services" 
slug: "vg-webapp-speech-services" 
description: "Speech Services allow adding multiple Speech Vendors to the Voice Gateway portal"
hidden: false
---

# Speech Services

[![Version badge](https://img.shields.io/badge/Updated in-v4.77-blue.svg)](../../release-notes/4.77.md)

**Speech services** integrate Speech-to-Text (STT) or Text-to-Speech (TTS) vendors in the Voice Gateway Self-Service Portal. To ensure the AI Agent gets a voice, a speech service must be selected within the [Application](./applications.md). By connecting with a speech vendor of your choice, you can select between multiple voices, genders, accents, and languages. You can add multiple speech vendors to the Voice Gateway Self-Service Portal, or install multiple configurations of one speech vendor, to quickly switch between different setups.

Voice Gateway supports the following speech vendor configurations:

- [Cloud-based](#cloud-based-speech-services)
- [On-premises](#on-premises-speech-services)

For the list of supported vendors and their Speech-To-Text and Text-To-Speech capabilities, see the [TTS and STT Vendors](../references/tts-and-stt-vendors.md) reference.

If you need to create multiple speech services from the same vendor, use the **Label** field to create a unique speech service.

After creating a speech service, you can edit or delete it.

Users with an Account scope can only edit speech services they have created, as well as speech services created by other users with the same scope. They can still use and view speech services shared by Service providers or Admins.

<figure>
  <img class="image-center"  src="../../../_assets/voice-gateway/VG-webapp-speech-services.png"  width="60%" />
  <figcaption>Speech Services</figcaption>
</figure>

## Cloud-Based Speech Services

To configure the connection for a cloud-based speech service:

{! _includes/voice-gateway/speech-services-howto.md !}

=== "Amazon Polly"
    1. Enter the Access Key in the **Access key ID** field. For more information on AWS Access Keys, read the [Amazon AWS](https://repost.aws/knowledge-center/create-access-key) documentation.
    2. Enter the Secret Access Key in the **Secret access key** field.
    3. Select a region from the **Region** list.
=== "Deepgram"
    1. Enter an API key in the **API key** field. For more information on API keys in Deepgram, read the [Deepgram](https://developers.deepgram.com/docs/create-additional-api-keys) documentation.
=== "Elevenlabs"
    1. Enter an API key in the **API key** field. For more information on Elevenlabs API keys, read the [Elevenlabs](https://help.elevenlabs.io/hc/en-us/articles/14599447207697-How-to-authorize-yourself-using-your-xi-api-key) documentation.
    2. Select your language model from the **Model** list. 
    3. _(Optional)_ Edit the JSON code for additional options by selecting the **Extra Options**.
=== "Google Speech Services"
    1. Upload your Service Key to the **Service key** field. For more information on creating Service Keys in Google Cloud, read the [Google Cloud](https://cloud.google.com/iam/docs/keys-create-delete) documentation.
=== "Microsoft Azure Speech Services"
    1. Select **Use hosted Azure service**. 
    2. Select a region from the **Region** list.
    3. Enter an API key in the **API key** field. For more information on linking API keys, read the [Microsoft Speech Services Billing](https://learn.microsoft.com/en-us/azure/ai-services/speech-service/speech-container-howto#billing-arguments) documentation.
    4. _(Optional)_ Select a custom voice model for TTS by providing a custom voice endpoint ID in the **Custom voice deployment ID** field.
    5. _(Optional)_ Select a custom speech model for STT by providing a custom speech endpoint ID in the **Custom speech endpoint ID** field.
=== "Nuance"
    1. Enter the client ID in the **Client ID** field. You can obtain the client ID as well as the secret key from your Nuance program manager. For more information, read the [Nuance](https://docs.nuance.com/digital-engagement/APIs/UMAPI/token-auth.html) documentation.
    2. Enter the secret key in the **Secret** field.
=== "Soniox"
    1. Enter an API key in the **API key** field. For more information on Soniox API keys, read the [Soniox Quick Start Guide](https://soniox.com/docs/speech-recognition/quickstart/index.html#authenticate).

Save your changes by clicking **Save**.
Once you created a speech service, add this service to the [Application](./applications.md).

## On-Premises Speech Services

{! _includes/voice-gateway/speech-services-howto.md !}

=== "Deepgram"
    1. Select **Use on-prem Deepgram container**.
    2. Enter the container URI for TTS in the **Container URI** field.
    3. Select **Use TLS**, if required.

=== "Nuance"
    1. Select **Use on-prem TTS** and enter the IP port in the **TTS URI** field.
    2. Select **Use on-prem STT** to enter the IP port in the **STT URI** field.
  
=== "Microsoft Azure Speech Services"
    1. Select **Use Azure Docker container (on-prem)**.
    2. Enter the container URL for TTS in the **Container URL for TTS** field.
    3. Enter the container URL for STT in the **Container URL for STT** field.
    4. Enter an API key in the **Subscription key** field, if required. Whether the subscription key is required will depend on your custom on-premises setup. For more information on Microsoft Azure Subscriptions, read the [Subscriptions in Azure API Management](https://learn.microsoft.com/en-us/azure/api-management/api-management-subscriptions) documentation.

Save your changes by clicking **Save**.
Once you created a speech service, add this service to the [Application](./applications.md).

## Add a Custom Speech Vendor

If the desired vendor is not included in the list of preinstalled vendors,
or if you want to modify the configuration of an existing one, you can add a custom vendor.

Before adding a vendor to the Voice Gateway, you need to create it.
To do this, use the [custom-speech-example](https://github.com/Cognigy/custom-speech-example/tree/main) template on GitHub.
Using the same template, you can customize vendors that are provided in it as examples, such as Google, AssemblyAI, and Vosk, or create a new one.
After you have created the custom provider, deploy it on a server,
for example, in the AWS Cloud, then copy the address of the custom provider for use in the Voice Gateway.

To add a custom speech vendor, follow these steps:

1. In the left-side menu of the Voice Gateway Self-Service Portal, select **Speech**.
2. On the **Speech services** page, click **Add speech service**.
3. On the **Add a speech service** page, select **Custom** from the **Vendor** list.
4. In the **Name** field, specify a unique name for your provider. You need to reuse this name in the Node configuration.
5. From the **Account** list, select a specific account or leave the **All accounts** value if you want that custom speech provider will be available for all available accounts.
6. In the **Label** field, create a label only if you need to create multiple speech services from the same vendor. Then, use the label in your [application](applications.md#add-additional-tts-and-stt-vendor) to specify which service to use.
7. Activate the **Use for text-to-speech** setting to use this provider as a TTS vendor. Enter the TTS HTTP URL of the server where your custom vendor is deployed. 
8. Activate the **Use for speech-to-text** setting to use this provider as an STT vendor. Enter the STT websocket URL of the server where your custom vendor is deployed.
9. In the **Authentication Token** field, enter the key that you get from your TTS or STT vendor to set up a connection. 
10. Click **Save**.

To start using your speech provider,
you need to specify the provider name in the **Custom** parameter of the relevant Nodes,
such as [Set Session Config](../../ai/build/node-reference/voice/voice-gateway/set-session-config.md),
[Say](../../ai/build/node-reference/basic/say.md), [Question](../../ai/build/node-reference/basic/question.md) or [Optional Question](../../ai/build/node-reference/basic/optional-question.md),
or [Session Speech Parameters Config](../../ai/build/node-reference/voice/generic/session-speech-parameters-config.md).

## More Information

- [TTS and STT Vendors](../references/tts-and-stt-vendors.md)