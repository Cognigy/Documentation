---
title: "Applications" 
slug: "vg-webapp-applications"
hidden: false
---

# Applications

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


