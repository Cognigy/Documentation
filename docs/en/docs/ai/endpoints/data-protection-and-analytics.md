---
title: "Data Protection and Analytics" 
slug: "data-protection-and-analytics" 
description: "The Data Protection & Analytics section in Cognigy Endpoints provides control over analytics and system logging. It allows you to customize the handling of contact data creation and storage, analytics data collection, and sensitive data masking to ensure comprehensive data protection."
hidden: false 
---

# Data Protection & Analytics

The **Data Protection & Analytics** section is all about analytics and system logging. Here you can toggle whether you want to create and store data about contacts and whether you want to collect analytics data for the Endpoint. If you choose to collect data, you can also configure whether you are masking sensitive data or not.

## Contact Profiles

This setting enables the collection of individual contact profiles to store persisted user data across sessions.

## Collect Analytics

Enable the collection of Analytics data for this endpoint.

## Store Extensive Data Payloads in Analytics

[![Version badge](https://img.shields.io/badge/Added in-v4.60-blue.svg)](../../release-notes/4.60.md)

This setting applies only to the [Voice Gateway](cognigy-vg.md) Endpoint.
When the setting is enabled,
all [Voice Gateway events](../../voicegateway/references/events/overview.md) as well as xApp events will be stored in the Analytics database and available via  OData or the Transcript Explorer in Insights.

## Mask IP Address

[![Version badge](https://img.shields.io/badge/Added in-v4.53-blue.svg)](../../release-notes/4.53.md)

Masks IP addresses in the analytics and input object when you use `{{ "{{ input.ip }}" }}` or `{{ "{{ ci.ip }}" }}` in the Say Node or  `ci.ip` or `input.ip` in the Code Node. If the user input contains an IP address and the text, Cognigy will only mask the IP address while leaving the rest unmasked. When enabled, the setting replaces the `IP` of user inputs with asterisks in both the analytics data and the input object.
The IP addresses will not be available through [Cognigy OData Analytics Endpoint](../tools/analytics/odata-analytics-endpoint.md) and [Insights](../../insights/cognigy-insights.md).

## Mask Sensitive Analytics

Masks sensitive information in analytics. Specifically, it replaces `inputText`, `inputData`, `userLanguageText`, and the `IP` of user inputs with asterisks in the analytics data. If this feature is used within an Endpoint, the [Intent Trainer](../resources/tweak/intent-trainer.md) can't be used, as Cognigy will not store the original text of the user. The individual records will also not be available through [Cognigy OData Analytics Endpoint](../tools/analytics/odata-analytics-endpoint.md).

### Ignore specific fields

In order to disable logging of specific analytic fields, one can access and manipulate them within a [Code Node]({{config.site_url}}ai/flow-nodes/code/code/) using the `analyticsdata` variable:

```js
analyticsdata.text = "overwritten text";
delete analyticsdata.data.token;
```

In this example, the token will be deleted from the analytics data before it's written to the database.

## Mask Sensitive Logging

Masks potential sensitive information in system logs produced by the underlying infrastructure. This will also include the logs page within our UI. Here is an example of a log which gets produced when a new message arrives in our system:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/5c5ee41-log.png" width="100%" />
</figure>

The text could contain the name of the user, his location or a credit card number. Once the masking was enabled, all fields which could contain information from the user will be hidden and replaced as you can see in the following figure:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/53c0057-hidden-log.png" width="100%" />
</figure>

We will replace the following properties:
- userId
- text
- data

## Collect Conversations

Defines whether we should store conversation histories in contact profiles for end-users.

## External Analytics Services

You can connect your endpoint with additional analytics providers. An account and API key with an external analytics service provider is required. Note when using external Analytics providers API quota limits, additional terms, conditions and/or charges may apply.

### Available External Analytics Services:
##### Chatbase
We have an integration with Chatbase. To get more information about Chatbase, follow [this](http://www.chatbase.com) link.

##### Dashbot
Cognigy.AI provides an extensive, channel-specific integration with [Dashbot](https://www.dashbot.io).
Go to our [HelpCenter Dashbot Page](https://support.cognigy.com/hc/en-us/articles/360016311379) for a detailed description of how to set up your Dashbot integration.