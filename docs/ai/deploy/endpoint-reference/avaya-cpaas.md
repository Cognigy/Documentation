---
title: "Avaya CPaaS" 
slug: "avaya-cpaas"
description: "The Avaya CPaaS Endpoint enables you to connect your AI Agent to Avaya CPaaS."
hidden: false
tags:
  - avaya cpaas
  - avaya cpass endpoint
---

# Avaya CPaaS

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/avaya-cpaas.png" width="100%" />
</figure>

The Avaya CPaaS Endpoint enables you to connect your AI Agent to [Avaya CPaaS](https://www.avaya.com/).

## Prerequisites

- Access to the [Avaya CPaaS](https://accounts.avayacloud.com/).

## Generic Endpoint Settings

Learn about the generic Endpoint settings available on the following pages:

- [Endpoints Overview](../endpoints/overview.md)
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/overview.md) 

## Specific Endpoint Settings

In the Avaya CPaaS Endpoint, you can customize the setup of conversations with Avaya CPaaS.

??? info "Avaya Settings"
    | Setting            | Description                                                                                                |
    |--------------------|------------------------------------------------------------------------------------------------------------|
    | STT + TTS Language | The language that Avaya CPaaS should use to read out the outputs from the bot.                             |
    | Voice              | The voice to use with Avaya CPaaS.                                                                         |
    | Avaya CPaaS Token  | An optional security token from Avaya CPaaS to validate that the request doesn't come from a third party. |

??? info "Gather Settings"
    | Setting       | Description                                                                                                                                                   |
    |---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Action URL    | The URL Avaya CPaaS will use to send the user inputs. Leave empty to send requests to the Avaya CPaaS Endpoint.                                               |
    | Input Type    | The types of input Avaya CPaaS should accept. Default is `digits + voice`.                                                                                    |
    | Hints         | A list of words or phrases that Avaya CPaaS will listen for. Separate each item with a comma.                                                                 |
    | Method        | The HTTP request method used to contact the Action URL. The default value is `POST`.                                                                          |
    | Timeout       | Time in seconds the user has to answer before the call disconnects. The default value is `30`. Note that the timer starts as soon as the bot begins speaking. |
    | Finish On Key | The key the user should press to submit input via DTMF.                                                                                                       |
    | Num digits    | The maximum number of digits the user can enter.                                                                                                              |

## How to Set Up

### Setup on the Cognigy.AI Side

??? info "Create an Avaya CPaaS Endpoint"
    1. In the left-side menu of the Cognigy.AI Project, go to **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Avaya CPaaS** Endpoint type.
        2. Add a unique name.
        3. Select a relevant Flow from the list.
    4. Copy the Endpoint URL for later use in the Avaya CPaaS phone number configuration.

### Setup on the Avaya CPaaS Side

??? info "Configure Avaya CPaaS"
    To connect the Avaya CPaaS Endpoint in Cognigy.AI to a phone number in Avaya CPaaS, enter the Endpoint URL in the Voice Request URL field within the Avaya CPaaS phone number configuration.

## More Information

- [All Endpoints](overview.md)
