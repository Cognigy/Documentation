---
 title: "Applications" 
 slug: "vg-webapp-applications" 
 hidden: true 
---

# Applications

*Applications* are connectors that allow the [Endpoint](../getting-started.md#create-a-voice-gateway-endpoint) to be routed to Voice Gateway. All the default values, such as default speech vendor, language, and voice for the Text-To-Speech output and Speech-To-Text recognition, are set in the application.

To create an application, select **Applications** in the left-side menu, then click **Add application** or **+**.

You can create more than one application, dependent on the number of Endpoints created in Cognigy.AI.

After creating an application, you can edit or delete it.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-applications-overview.png"  width="100%" />

## Settings 

| Settings                  | Description                                                                          | Scope                           |
| ------------------------- | ------------------------------------------------------------------------------------ | ------------------------------- |
| Application Name          | A unique application name.                                                           | Account, Service Provider, Admin|
| Account                   | Select an account from the list.                                                     | Account, Service Provider, Admin| 
| Calling Webhook           | A Cognigy.AI Endpoint URL for the Web Application that will handle calls.            | Account, Service Provider, Admin|
| Call Status Webhook       | A Cognigy.AI Endpoint URL for the Web Application that will receive the call status. | Account, Service Provider, Admin| 
| Speech synthesis vendor   | Select a default Vendor and set up Language Settings for Text-To-Speech output.      | Account, Service Provider, Admin| 
| Speech recognizer vendor  | Select a default Vendor and set up Language Settings for Speech-To-Text recognition. | Account, Service Provider, Admin|

