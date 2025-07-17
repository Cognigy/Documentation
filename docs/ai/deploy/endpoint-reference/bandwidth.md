---
title: "Bandwidth"
slug: "bandwidth"
description: "The Bandwidth Endpoint enables you to connect your AI Agent to your contact center or other phone numbers using the Bandwidth Voice API. This Endpoint allows your customers to speak with your AI Agents instead of using a chat."
hidden: false
tags:
  - bandwidth
  - bandwidth endpoint
---

# Bandwidth

[![Version badge](https://img.shields.io/badge/Added in-v4.60-blue.svg)](../../../release-notes/4.60.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/bandwidth.png" width="20%"/>
</figure>

The Bandwidth Endpoint enables you to connect your AI Agent to your contact center or other phone numbers using the [Bandwidth Voice API](https://www.bandwidth.com/voice/voice-api/). This Endpoint allows your customers to speak with your AI Agents instead of using a chat.

## Prerequisites

- Access to the [Bandwidth Voice API](https://www.bandwidth.com/).

## Generic Endpoint Settings

Learn about the generic Endpoint settings available on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/overview.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)
- [Inject & Notify](../endpoints/inject-and-notify.md)

## Specific Endpoint Settings

??? info "Bandwidth Settings"
    | **Parameter** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                  |
    |---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Async Mode    | When async mode is enabled for the Bandwidth Endpoint, outputs are sent directly as they are processed in a Flow. This mode is useful when the Flow needs to send an HTTP request. <br><br>When async mode is off, outputs are sent only after the entire Flow has finished processing the input.<br><br>The [Inject & Notify](../endpoints/inject-and-notify.md) feature only works when async mode is enabled. |

## How to Set Up

### Configuration on the Cognigy.AI Side

??? info "Create a Bandwidth Endpoint"
    1. In the left-side menu of the Cognigy.AI Project, go to **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Bandwidth** Endpoint type.
        2. Add a unique name.
        3. Select a relevant Flow from the list.
    4. _(Optional)_ Activate the **Async Mode** setting.

## More Information

- [All Endpoints](overview.md)