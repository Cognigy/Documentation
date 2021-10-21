# Data Protection & Analytics

The **Data Protection & Analytics** (previously called Data Management) section is all about analytics and system logging. Here you can toggle whether you want to create and store data about contacts and whether you want to collect analytics data for the Endpoint. If you choose to collect data, you can also configure whether you are masking sensitive data or not.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/5b29da1-Data_Protection__Analytics.PNG" width="100%" />
</figure>

## Contact Profiles

This setting enables the collection of individual contact profiles to store persisted user data across sessions.

## Collect Analytics

Enable the collection of Analytics data for this endpoint.

## Mask Sensitive Analytics

Masks potential sensitive information in analytics information. Replaces potentially sensitive information with asterisks. If this feature is used within an endpoint, the [Intent Trainer]({{config.site_url}}ai/resources/tweak/intent-trainer/) can't be used as we will not e.g. store the original text of the user. The individual records will also not be available through our [OData Analytics Endpoint]({{config.site_url}}ai/tools/analytics/odata-analytics-endpoint/) endpoint.

### Ignore specific fields

In order to disable logging of specific analytic fields, one can access and manipulate them within a [Code Node]({{config.site_url}}ai/flow-nodes/code/code/) using the `analyticsdata` variable:

``` JavaScript
analyticsdata.text = "overwritten text";
delete analyticsdata.data.token;
```

In this example, the token will be deleted from the analytics data before it's written to the database.

## Mask Sensitive Logging

Masks potential sensitive information in system logs produced by the underlying infrastructure. This will also include the logs page within our UI. Here is an example of a log which gets produced when a new message arrives in our system:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/5c5ee41-log.png" width="100%" />
</figure>

The text could e.g. contain the name of the user, his location or e.g. a credit card number. Once the masking was enabled, all fields which could contain information from the user will be hidden and replaced as you can see in the following figure:

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
Go to our [Helpcenter Dashbot Page](https://support.cognigy.com/hc/en-us/articles/360016311379) for a detailed description of how to setup your Dashbot integration.