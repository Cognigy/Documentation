# Amazon Alexa

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/cb3fa30-EP_alexa.png" width="100%" />
</figure>

The **Alexa** Endpoint allows you to connect your Amazon Alexa Skill to an **Agent**. Amazon Alexa Skills allow user interaction via voice, with potential visual support.

???+ warning "Attention!"
    The Alexa Endpoint uses the Alexa NLU Connector. See the [NLU Connectors Page]({{config.site_url}}/ai/resources/build/nlu-connectors/) for more details. When using Amazon Alexa with Cognigy, all NLU is done by Amazon. **It is NOT possible to use the Cognigy NLU**.

    Amazon only passes the Intent name to the flow, not the actual user input! Therefore, any nodes that use conditions based on user input (e.g. if-nodes and rule intents are capable of doing so) will not work as intended.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}/ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}/ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/)
- [Real Time Translation Settings]({{config.site_url}}ai/endpoints/real-time-translation-settings)  

## Channel Specific Settings
<div class="divider"></div>

The **Alexa Settings** dropdown menu is where Cognigy.AI is provided with the credentials to connect with an **Amazon Alexa Skill**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/7f18dd3-alexaMenu.PNG" width="100%" />
</figure>


### Reparse Alexa Slots

Enable this toggle to allow the slots found by Alexa to be passed to Cognigy.AI and processed by the Cognigy NLU.

## Deployment

### Skill

Here you can login directly to your Amazon account that has access to your Alexa skills. You can also login to Amazon from the [My Profile]({{config.site_url}}ai/tools/user-menu/my-profile/) page. Once logged in, you will be able to select the **Alexa Skill** that you wish to connect with your Cognigy.AI endpoint.

### Deploy

Once a skill has been selected, click the **DEPLOY** button to configure your skill to use this endpoint when invoked. The process can also be carried out manually, visit our [help center](https://support.cognigy.com/hc/en-us/articles/360016192979) for more info.

???+ info "Help Center"
    More detailed information on how to set up an **Alexa** Endpoint please refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016192979).

## More information

- [Helpcenter: Amazon Alexa Intro ](https://support.cognigy.com/hc/en-us/articles/360016192979)
- [Helpcenter: Amazon Alexa Deployment ](https://support.cognigy.com/hc/en-us/articles/360016193099-Amazon-Alexa-Deploy-an-Endpoint)
- [Helpcenter: Amazon Alexa Account Linking ](https://support.cognigy.com/hc/en-us/articles/360016153600-Amazon-Alexa-Account-Linking)