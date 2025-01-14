---
title: "Alerts" 
slug: "vg-webapp-alerts"
hidden: false
---

# Alerts

*Alerts* are created when errors happen in your account configuration. For example, your credentials from the speech provider need to be updated.

To view alerts, select **Alerts** in the left-side menu of the Voice Gateway Self-Service Portal.

Note that you can only filter by a maximum of the last 7 days.

<figure>
  <img class="image-center"  src="../../../_assets/voice-gateway/VG-webapp-alerts.png" width="60%"/>
  <figcaption>Alerts</figcaption>
</figure>

## Alert Types

The following types of alerts can appear on the Alerts page.

| Alert Type                     | Alert Message                                                                      | What to do?                                                                                                                                     |
|--------------------------------|------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| Webhook status failure         | `${url} returned ${status}`                                                        | Check why your webhook is unreachable.                                                                                                          |
| Webhook connection failure     | `failed to connect to ${url}`                                                      | Check why your webhook is unreachable and why the connection could be broken.                                                                   |
| Webhook authentication failure | `authentication failure: ${url}`                                                   | Check why your webhook could not authenticate.                                                                                                  |
| Webhook URL not found          | `webhook url not found: ${url}`                                                    | Check if your webhook URL is still valid and exists.                                                                                            |
| Invalid app payload            | `${url} return invalid app payload`                                                | Check the payload that was sent to the Voice Gateway. Look for any abnormal payloads, and check Cognigy AI logs for validation or other errors. |
| TTS not provisioned            | `text to speech credentials for ${vendor} have not been provisioned`               | Check if the correct credentials are selected in the application. Ensure to review the selected label.                                          |
| STT not provisioned            | `speech to text credentials for ${vendor} have not been provisioned`               | Check if the correct credentials are selected in the application. Ensure to review the selected label.                                          |
| TTS failure                    | `text to speech request to ${vendor} failed; please check your speech credentials` | Check if your credentials are still valid, and if there are any request limits that have been reached.                                          |
| STT failure                    | `speech to text request to ${vendor} failed; please check your speech credentials` | Check if your credentials are still valid, and if there are any request limits that have been reached.                                          |
| Carrier not provisioned        | `outbound call failure: no carriers have been provisioned`                         | Check if your phone number has a carrier attached, and ensure that your Outbound Call Routing rules have the carrier correctly provided.        |
| Account call limit reached     | `you have exceeded your account call limit of ${count}`                            | Check with your Customer Success Manager (CSM) or Support about the limitations of your contract.                                               |