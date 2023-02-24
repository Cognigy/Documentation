---
 title: "Applications" 
 slug: "vg-webapp-applications" 
 hidden: true 
---

#  Applications

*Applications* represent [Endpoints](../../ai/endpoints/overview.md) in Cognigy.AI. Creating an application in the Voice Gateway allows the Endpoint to be routed to Voice Gateway. All the default values are being set in the application, such as default speech vendor, language, and voice for the Text-To-Speech output and Speech-To-Text recognition.

To create an application, select **Applications** in the left-side menu, then click **Add application** or **+**.

You can create more than one application, dependent on the number of Endpoints created in Cognigy.AI.

After creating an application, you can edit or delete it.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-applications-overview.png"  width="100%" />

## Settings 

| Settings | Description |
| -------  | ----------- |
| Application Name | A unique application name. |
| Account | Select an account from the list. |
| Calling Webhook | A Cognigy.AI Endpoint URL for the Web Application that will handle calls.|
| Call Status Webhook | A Cognigy.AI Endpoint URL for the Web Application that will receive the call status. |
| Speech synthesis vendor  | A Default Vendor, Language, and Voice Settings for Text-To-Speech output.|
| Speech Recognizer Vendor | Default Vendor and Language Settings for Speech-To-Text recognition.|
