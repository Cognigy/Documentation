---
title: "Avaya CPaaS" 
slug: "avaya-cpaas" 
hidden: false 
---

# Avaya CPaaS

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/avaya-cpaas.png" width="100%" />
</figure>

Within our **Cognigy.AI** platform, you're able to connect your Cognigy.AI resources to your **Avaya CPaaS** phone number by using the Avaya CPaaS Endpoint.

## Generic Endpoint Settings
Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/transformers.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connectors.md)

## Setting up Avaya CPaaS

To connect the Avaya CPaaS Endpoint in Cognigy.AI to a phone number in Avaya CPaaS, copy the Endpoint URL from within the Endpoint in Cognigy.AI and insert it into the Request URL inside the Avaya CPaaS phone number configuration.

## Configuring the Avaya CPaaS Endpoint

In the Avaya CPaaS Endpoint, you can customize how the conversation with Avaya CPaaS should behave.

### Avaya Settings

In the **Avaya Settings** section, you can configure the following settings for the Avaya CPaaS Endpoint:

<table>
    <tr>
    <th>Setting</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">STT + TTS Language</td>
    <td style="padding: 20px;">
      The language that Avaya CPaaS should use to read out the outputs from the bot.
    </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Voice</td>
    <td style="padding: 20px;">
      The voice to use with Avaya CPaaS.
      </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Avaya CPaaS Token</td>
    <td style="padding: 20px;">
      An optional security token you can insert that comes from Avaya CPaaS to validate that the request does not come from a third party.
      </td>
  </tr>
</table>

### Gather Settings

In the **Gather Settings** section, you can configure several attributes that will be attached to the Gather statement that is sent to Avaya CPaaS:

<table>
    <tr>
    <th>Setting</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Action URL</td>
    <td style="padding: 20px;">
      The URL, which Avaya CPaaS will use to send the user inputs to. Keep it empty to have the requests go to the Avaya CPaaS Endpoint.
    </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Input Type</td>
    <td style="padding: 20px;">
      The different kind of input types that Avaya CPaaS should accept. Default is digits + voice.
    </td>
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Hints</td>
    <td style="padding: 20px;">
      A set of words or phrases that Avaya CPaaS should listen for. Commas should separate words.
    </td>
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Method</td>
    <td style="padding: 20px;">
      The HTTP request method that Avaya CPaaS should use to contact the Action URL. Default is POST.
      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Timeout</td>
    <td style="padding: 20px;">
      The amount of time the user has to answer the bot before the call disconnects. The timeout is specified in seconds with a default value of 30 seconds. <b>Note:</b> The timeout starts counting as soon as the bot starts speaking, meaning if you are reading out a long text to the user, it might time out before they even start to answer.
      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Finish On Key</td>
    <td style="padding: 20px;">
      The key the user should press to send an answer when using DTMF.
      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Num digits</td>
    <td style="padding: 20px;">
      The maximum number of digits the user can enter.
      </td>
  </tr>
</table>