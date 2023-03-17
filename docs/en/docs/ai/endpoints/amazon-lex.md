---
 title: "Amazon Lex" 
 slug: "amazon-lex" 
 hidden: false 
---

# Amazon Lex

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/28475-amazon-lex-icon.jpg" width="100%" />
</figure>


The **Amazon Lex Endpoint** allows you to connect your Amazon Lex bots with Cognigy.AI.

This is achieved by using a Lambda function with your Lex bots.

These Amazon Lex bots can be integrated into contact Flows within [Amazon Connect](https://aws.amazon.com/pm/connect). This way customers can call your [Virtual Contact Center](https://aws.amazon.com/connect/remote-agent) and speak with a Cognigy.AI bot.

## Generic Endpoint Settings

<div class="divider"></div>

Find more about the generic Endpoint settings available for this Endpoint here:

- [Endpoints Overview]({{config.site_url}}/ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}/ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/)
- [Real Time Translation Settings]({{config.site_url}}ai/endpoints/real-time-translation-settings/)  

## Channel Specific Settings
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/28475-lex-endpoint-settings.png" width="100%" />
</figure>

### Reparse Alexa Slots
Enable this toggle to allow the Slots found by Amazon Lex and transcript to be passed to Cognigy.AI and processed by the Cognigy NLU.

???+ warning "Attention!"
    The option to reparse slots is only available
    if the **Amazon Lex (Built-in)** NLU is selected.

## Setup 

It's essential to properly prepare your AWS environment to connect the Amazon Lex Endpoint. For this you will need to create a Lex bot and a Lambda function. 

 

The procedure differs if you want to reuse your existing Amazon Lex bots for NLU recognition, or if you want to use the Cognigy.AI NLU capabilities.  

 

To reuse the Amazon Lex NLU, please refer to these articles: 

- [HelpCenter: Amazon Lex Intro](https://support.cognigy.com/hc/en-us/articles/6229744711964) 

- [HelpCenter: Amazon Lex: Setup Amazon Lex (Amazon Lex NLU)](https://support.cognigy.com/hc/en-us/articles/6229640404636) 

- [HelpCenter: Amazon Lex: Setup AWS Lambda (Amazon Lex NLU)](https://support.cognigy.com/hc/en-us/articles/6229644597020) 

 

 If you want to use the Cognigy.AI NLU, please refer to these articles: 

- [HelpCenter: Amazon Lex Intro](https://support.cognigy.com/hc/en-us/articles/6229744711964) 

- [HelpCenter: Amazon Lex: Setup Amazon Lex (Cognigy.AI NLU)](https://support.cognigy.com/hc/en-us/articles/6229658502812) 

- [HelpCenter: Amazon Lex: Setup AWS Lambda (Cognigy.AI NLU)](https://support.cognigy.com/hc/en-us/articles/6229661373084) 

 

 If you want to integrate your Amazon Lex bot into Amazon Connect, please refer to these articles: 

- [HelpCenter: Amazon Connect: Intro](https://support.cognigy.com/hc/en-us/articles/6229662732444) 

- [HelpCenter: Amazon Connect: Setup Amazon Connect](https://support.cognigy.com/hc/en-us/articles/6229664156060) 

- [HelpCenter: Amazon Connect: Control Amazon Connect from Cognigy.AI](https://support.cognigy.com/hc/en-us/articles/6229683335196) 

- [HelpCenter: Amazon Connect: Enable SSML replies from Cognigy.AI](https://support.cognigy.com/hc/en-us/articles/6229684421916) 