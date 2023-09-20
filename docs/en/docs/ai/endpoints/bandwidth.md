---
title: "Bandwidth"
slug: "bandwidth"
hidden: false
---

# Bandwidth

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/bandwidth.png" width="20%"/>
</figure>

Within our **Cognigy.AI** platform,
you are able to connect your virtual agent to your Contact Center or other phone numbers using the [Bandwidth Voice API](https://www.bandwidth.com/voice/voice-api/),
allowing customers to speak to your virtual agent instead of just writing with it.

## Bandwidth Settings

### Async Mode

When async mode is enabled for the Bandwidth Endpoint, outputs are sent directly as they are processed in a Flow.
This approach is beneficial when the Flow needs to send an HTTP request.
When async mode is off, outputs are sent when the entire Flow has finished processing for the given input.

The [Inject & Notify](inject-and-notify.md) functionality only works when async mode is enabled.

## Generic Endpoint Settings

<div class="divider"></div>

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](overview.md)
- [Data Protection & Analytics](data-protection-and-analytics.md)
- [Transformer Functions](transformers/transformers.md)
- [NLU Connectors](../resources/build/nlu-connectors.md)
- [Session Management](../endpoints/session-management.md)
- [Real Time Translation Settings](../endpoints/real-time-translation-settings.md)