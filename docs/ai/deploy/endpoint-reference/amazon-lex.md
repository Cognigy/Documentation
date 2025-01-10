---
title: "Amazon Lex" 
slug: "amazon-lex" 
hidden: false 
---

# Amazon Lex

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/amazon-lex.jpg" width="50%" />
</figure>

The **Amazon Lex Endpoint** allows you to connect your Amazon Lex bots with Cognigy.AI.

This is achieved by using a Lambda function with your Lex bots.

These Amazon Lex bots can be integrated into contact Flows within [Amazon Connect](https://aws.amazon.com/pm/connect). This way customers can call your [Virtual Contact Center](https://aws.amazon.com/connect/remote-agent) and speak with a Cognigy.AI bot.

## Generic Endpoint Settings

Find more about the generic Endpoint settings available for this Endpoint here:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)  

## Specific Endpoint Settings

### Reparse Alexa Slots

Enable this toggle to allow the Slots found by Amazon Lex and transcript to be passed to Cognigy.AI and processed by the Cognigy NLU.

!!! warning
    The option to reparse slots is only available
    if the **Amazon Lex (Built-in)** NLU is selected.

## Setup 

It's essential to properly prepare your AWS environment to connect the Amazon Lex Endpoint. For this, you will need to create a Lex bot and a Lambda function. 

The procedure differs if you want to reuse your existing Amazon Lex bots for NLU recognition, or if you want to use the Cognigy.AI NLU capabilities.  

To reuse the Amazon Lex NLU, refer to these articles: 

- [HelpCenter: Amazon Lex Intro](https://support.cognigy.com/hc/en-us/articles/6229744711964)
- [HelpCenter: Amazon Lex: Setup Amazon Lex for Amazon Lex NLU](https://support.cognigy.com/hc/en-us/articles/6229640404636)
- [HelpCenter: Amazon Lex: Setup AWS Lambda for Amazon Lex NLU](https://support.cognigy.com/hc/en-us/articles/6229644597020)

If you want to use the Cognigy.AI NLU, refer to these articles: 

- [HelpCenter: Amazon Lex Intro](https://support.cognigy.com/hc/en-us/articles/6229744711964)
- [HelpCenter: Amazon Lex: Setup Amazon Lex for Cognigy.AI NLU](https://support.cognigy.com/hc/en-us/articles/6229658502812)
- [HelpCenter: Amazon Lex: Setup AWS Lambda for Cognigy.AI NLU](https://support.cognigy.com/hc/en-us/articles/6229661373084)

If you want to integrate your Amazon Lex bot into Amazon Connect, refer to these articles: 

- [HelpCenter: Amazon Connect: Intro](https://support.cognigy.com/hc/en-us/articles/6229662732444)
- [HelpCenter: Amazon Connect: Setup Amazon Connect](https://support.cognigy.com/hc/en-us/articles/6229664156060)
- [HelpCenter: Amazon Connect: Control Amazon Connect from Cognigy.AI](https://support.cognigy.com/hc/en-us/articles/6229683335196)
- [HelpCenter: Amazon Connect: Enable SSML replies from Cognigy.AI](https://support.cognigy.com/hc/en-us/articles/6229684421916) 