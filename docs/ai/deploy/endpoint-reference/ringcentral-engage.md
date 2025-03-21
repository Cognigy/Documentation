---
title: "RingCentral Engage" 
slug: "ringcentral-engage" 
hidden: false 
---
# RingCentral Engage

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/ring-central-engage.png" width="100%" />
</figure>

{! _includes/release-notes/handover-providers-deprecation.md !}

Within our **Cognigy.AI** platform, you're able to connect your Cognigy resources to **RingCentral Engage** by using our RingCentral Engage Endpoint integration.  

## Generic Endpoint Settings

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connectors.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md)

{! _includes/ai/providers/inject-and-notify.md !}

## Specific Endpoint Settings

The **RingCentral Engage setup** dropdown menu is where Cognigy.AI needs to be provided with the credentials to connect with a **RingCentral Engage** deployment.

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/rce-setup.png" width="100%" />
</figure>

###API URL

The RingCentral Engage API URL that is determined from your application name and the version of the API.

### Access Token

The RingCentral Engage access token to use for API requests as an authentication variable. 

### Verification token

Verification token applies an added layer of security to ensure the authenticity of API requests to your API domain in RingCentral.

### Secret

This value matches the secret key setup in the RingCentral Engage webhook configuration and is used for the handshake process.

### Bot category ID

The category ID, which will be used to identify the bot. This value is obtained from the RingCentral Engage platform.

### Agent category ID

The category ID, which will be used to identify the agent. This value is obtained from the RingCentral Engage platform.

!!! note "Help Center"
    More detailed information on how to set up a **RingCentral Engage** Endpoint refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360016306779).

## More Information

- [Help Center: RingCentral Engage Deployment](https://support.cognigy.com/hc/en-us/articles/360016306779-RingCentral-Engage-Deploy-an-Endpoint)
- [Help Center: RingCentral Engage Send Structured Content](https://support.cognigy.com/hc/en-us/articles/360016306859-RingCentral-Engage-Send-Structured-Content)
- [Help Center: RingCentral Engage Handover Integration](https://support.cognigy.com/hc/en-us/articles/360016275260-RingCentral-Engage-Handover-Integration)