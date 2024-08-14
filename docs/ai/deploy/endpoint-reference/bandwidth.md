---
title: "Bandwidth"
slug: "bandwidth"
hidden: false
---

# Bandwidth

[![Version badge](https://img.shields.io/badge/Added in-v4.60-blue.svg)](../../../release-notes/4.60.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/bandwidth.png" width="20%"/>
</figure>

Within our **Cognigy.AI** platform,
you are able to connect your AI Agent to your Contact Center or other phone numbers using the [Bandwidth Voice API](https://www.bandwidth.com/voice/voice-api/),
allowing customers to speak to your AI Agent instead of just writing with it.

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md)
- [NLU Connectors](../../empower/nlu/external/nlu-connectors.md)
- [Session Management](../endpoints/session-management.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)

## Bandwidth Settings

### Async Mode

When async mode is enabled for the Bandwidth Endpoint, outputs are sent directly as they are processed in a Flow.
This approach is beneficial when the Flow needs to send an HTTP request.
When async mode is off, outputs are sent when the entire Flow has finished processing for the given input.

The [Inject & Notify](../endpoints/inject-and-notify.md) functionality only works when async mode is enabled.

