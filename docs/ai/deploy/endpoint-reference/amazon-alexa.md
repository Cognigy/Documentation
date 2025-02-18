---
title: "Amazon Alexa" 
slug: "amazon-alexa" 
hidden: false 
---
# Amazon Alexa

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/alexa.png" width="100%" />
</figure>

The **Alexa** Endpoint allows you to connect your Amazon Alexa Skill to an AI Agent. Amazon Alexa Skills allow user interaction via voice, with potential visual support.

!!! warning
    The Alexa Endpoint uses the Alexa NLU Connector. See the [NLU Connectors Page](../../empower/nlu/external/nlu-connectors.md) for more details.
    When using Amazon Alexa with Cognigy, all NLU is done by Amazon. It is not possible to use the Cognigy NLU.

    Amazon only passes the Intent name to the flow, not the actual user input! Therefore, any nodes that use conditions based on user input (e.g. if-nodes and rule intents are capable of doing so) will not work as intended.

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)  

## Specific Endpoint Settings
The **Alexa Settings** dropdown menu is where Cognigy.AI is provided with the credentials to connect with an **Amazon Alexa Skill**.

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/alexa-menu.png" width="100%" />
</figure>
### Reparse Alexa Slots

Enable this toggle to allow the slots found by Alexa to be passed to Cognigy.AI and processed by the Cognigy NLU.

## Deployment

### Skill

Here you can log in directly to your Amazon account that has access to your Alexa skills. You can also log in to Amazon from the [My Profile](../../administer/user-menu/my-profile.md) page. Once logged in, you will be able to select the **Alexa Skill** that you wish to connect with your Cognigy.AI endpoint.

### Deploy

Once a skill has been selected, click the **DEPLOY** button to configure your skill to use this endpoint when invoked. The process can also be carried out manually, visit our [help center](https://support.cognigy.com/hc/en-us/articles/360016192979) for more info.

!!! note "Help Center"
    More detailed information on how to set up an **Alexa** Endpoint refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016192979).

## More Information

- [HelpCenter: Amazon Alexa Intro ](https://support.cognigy.com/hc/en-us/articles/360016192979)
- [HelpCenter: Amazon Alexa Deployment ](https://support.cognigy.com/hc/en-us/articles/360016193099-Amazon-Alexa-Deploy-an-Endpoint)
- [HelpCenter: Amazon Alexa Account Linking ](https://support.cognigy.com/hc/en-us/articles/360016153600-Amazon-Alexa-Account-Linking)