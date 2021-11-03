# Avaya CPaaS

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/avaya-cpaas-logo.png" width="100%" />
</figure>

Within our **COGNIGY.AI** platform you're able to connect your Cognigy.AI resources to your **Avaya CPaaS** phone number by using the CPaaS Endpoint.

## Generic Endpoint Settings

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/)

## Setting up CPaaS

<div class="divider"></div>

To connect the CPaaS Endpoint in Cognigy.AI to a phone number in CPaaS, copy the Endpoint URL from within the Endpoint in Cognigy.AI and insert this into the Request URL inside the CPaaS phone number configuration.

## Configuring the CPaaS Endpoint
<div class="divider"></div>

In the CPaaS Endpoint you can customize how the conversation with CPaaS should behave.

### Avaya Settings

In the **Avaya Settings** section, you can configure the following settings for the CPaaS Endpoint:

<table>
    <tr>
    <th>Setting</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">STT + TTS Language</td>
    <td style="padding: 20px;">
      The language that CPaaS should use to read out the outputs from the bot.
    </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Voice</td>
    <td style="padding: 20px;">
      The voice to use with CPaaS.
      </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">CPaaS Token</td>
    <td style="padding: 20px;">
      An optional security token you can insert that comes from CPaaS to validate that the request does not come from a third party.
      </td>
  </tr>
</table>

### Gather Settings
In the **Gather Settings** section, you can configure several different attributes that will be attached to the Gather statement that is sent to CpaaS:

<table>
    <tr>
    <th>Setting</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Action URL</td>
    <td style="padding: 20px;">
      The URL which CPaaS will use to send the user inputs to. Keep it empty to have the requests go to the CPaaS Endpoint.
    </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Input Type</td>
    <td style="padding: 20px;">
      The different kind of input types that CPaaS should accept. Default is digits + voice.
    </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Method</td>
    <td style="padding: 20px;">
      The HTTP request method that CPaaS should use to contact the Action URL. Default is POST.
      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Timeout</td>
    <td style="padding: 20px;">
      The amount of time the user has to answer the bot before the call disconnects. <b>Note:</b> The timeout starts counting as soon as the bot starts speaking, meaning if you are reading out a long text to the user, it might timeout before they even start to answer.
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
      The amount of digits the user should enter.
      </td>
  </tr>
</table>