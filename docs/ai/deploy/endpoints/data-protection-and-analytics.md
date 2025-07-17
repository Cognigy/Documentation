---
title: "Data Protection and Analytics" 
slug: "data-protection-and-analytics" 
description: "The Data Protection & Analytics section in Cognigy Endpoints provides control over analytics and system logging. It allows you to customize the handling of contact data creation and storage, analytics data collection, and sensitive data masking to ensure comprehensive data protection."
hidden: false 
tags:
  - data protection
  - analytics
  - privacy
  - security
  - data masking
  - logging
  - data sanitization
  - sensitive data
---

# Data Protection & Analytics

[![Version badge](https://img.shields.io/badge/Updated in-v4.92-blue.svg)](../../../release-notes/4.92.md)

The _Data Protection & Analytics_ section includes Endpoint settings for analytics and system logging. Here you can toggle whether you want to create and store data about contacts, and whether you want to collect analytics data for the Endpoint. If you choose to collect data, you can also configure whether you're masking sensitive data.

| Setting                                              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Contact Profiles                                     | Collects individual [Contact Profiles](../../analyze/contact-profiles.md) data to store user data across sessions.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Collect Analytics                                    | Collects Analytics data for the Endpoint. The [Voice Gateway Endpoint](../endpoint-reference/voice-gateway.md) has [additional settings for collecting analyitics data](#store-extensive-data-payloads-in-analytics).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Mask IP Address                                      | Masks the IP address from the user in the [Input object](../../build/ai-agent-memory/input.md), [Insights](../../../insights/overview.md), and [Analytics](../../analyze/overview.md). When this setting is activated, IP adresses are replaced by asterisks and aren't available through the [OData Analytics Endpoint](../../analyze/odata.md).                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Mask Sensitive Analytics                             | Masks sensitive information in the [Input object](../../build/ai-agent-memory/input.md), [Insights](../../../insights/overview.md), and [Analytics](../../analyze/overview.md). Specifically, the `inputText`, `inputData`, and `userLanguageText` properties, and the user IP address are replaced with asterisks and aren't available through [Cognigy OData Analytics Endpoint](../../analyze/odata.md). If you activate this setting, you can't use the [Intent Trainer](../../train/intent-trainer.md) because Cognigy.AI doesn't store the user's input text.<br><br>Additionally, you can use the Code Node to [ignore specific analytics](#ignore-specific-analytics-data).                                                                                                                                                  |
| Mask Sensitive Logging                               | Masks potential sensitive information in system logs on the [Logs](../../test/logs.md) page. If you activate this setting, Cognigy.AI replaces the following log entries with asterisks:<ul><li>`userId`</li><li>`text`</li><li>`data`</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Collect Conversations                                | Stores the conversation history in Contact Profiles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Enable Input Sanitization                            | Activates server-side input sanitization. If you activate this setting, Cognigy.AI removes potentially harmful HTML content from user inputs before processing them in other parts of the system.<br><br>If you use [Input Transformers](transformers/input-transformer.md), the sanitization takes place after their execution. This process involves validating and cleaning the data on the server to make sure the data is safe and complies with the expected format.<br><br>For [Webchat](../../../webchat/index.md), client-side input [sanitization](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md#endpoint-settings) (`disableHtmlContentSanitization: false`) works by default. In this case, activating server-side input sanitization provides an additional layer of security for your server. |
| Hide References to External Resources in Transcripts | This setting removes tags that reference third-party APIs, such as `<a>` for links and `<img>` for images, from user inputs in conversation transcripts to protect users from risks associated with third-party content. In the Transcript Explorer and Message Explorer in Insights, conversation transcripts keep references to the content instead of rendering the actual links or images. For example, `<img src="url-to-an-image">` or `<a href="url">`.<br><br>For the Interaction Panel, set `DISABLE_SKIP_URI_TAGS_IP_CONVERSATIONS: "true"` in `values.yaml` to hide references to external resources.                                                                                                                                                                                                                     |
| Dashbot                                              | Allows you to integrate Cognigy.AI with [Dashbot](https://www.dashbot.io) using a Dashbot API key. Refer to the [Help Center Dashbot article](https://support.cognigy.com/hc/en-us/articles/360016311379) for a detailed description of how to set up the Dashbot integration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Endpoint-Specific Settings

### Voice Gateway Endpoint

#### Store Extensive Data Payloads in Analytics

If you activate **Store Extensive Data Payloads in Analytics** in the [Voice Gateway](../endpoint-reference/voice-gateway.md) Endpoint, all the information from [Voice Gateway event](../../../voice-gateway/references/events/overview.md) payloads is stored in the Analytics database. You can access this information via [OData](../../analyze/odata.md) or the [Transcript Explorer](../../../insights/explorers/transcript.md) in Insights. You can activate this setting after you toggle on **Collect Analytics**. By default, the setting is disabled.

This setting allows you to store the following information:

- `trace_id`
- `account_sid`
- `application_sid`
- `call_id`
- `sip_status`
- `sip_reason`
- `originating_sip_ip`
- `local_sip_address`
- `service_provider_sid`
- `fs_sip_address`
- `api_base_url`
- `originating_sip_trunk_name`

## Ignore Specific Analytics Data

You can deactivate the logging of specific analytics data fields with a [Code Node](../../build/node-reference/basic/code/analytics-data.md) using the `analyticsdata` object. For example:

```js
  analyticsdata.text = "overwritten text";
  delete analyticsdata.data.token;
```

In this example, the Code Node deletes `token` from the analytics data before it's written to the database.

## More Information

- [Endpoints](overview.md)
