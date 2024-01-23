---
title: "Salesforce Service Cloud" 
slug: "salesforce-handover" 
description: "Cognigy has seamlessly integrated with Salesforce, adding it as an additional handover provider. This integration enables users to effortlessly connect with human agents who utilize Salesforce Service Cloud as their contact center."
hidden: false 
---
# Salesforce Service Cloud

[![Version badge](https://img.shields.io/badge/Updated in-v4.55.1-blue.svg)](../../release-notes/4.55.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/salesforce.svg" width="100%" />
  <figcaption>Salesforce Service Cloud </figcaption>
</figure>

## Description

<div class="divider"></div>

Cognigy has integrated **Salesforce** as an additional handover provider,
which can be used to connect users with human agents who use Salesforce Service Cloud as a contact center.

To learn more about handovers, refer to [Agent Handover](overview.md).

## Setup

<div class="divider"></div>

To start using Salesforce as a handover provider with Cognigy.AI, follow these steps:

1. [Sign in](https://login.salesforce.com/) to Salesforce.
2. If no Chat Deployment is available in Salesforce, create a new one using these guides: [Create a Basic Chat Implementation](https://help.salesforce.com/s/articleView?id=sf.live_agent_set_up_basic_implementation.htm) and [Create Chat Deployments](https://help.salesforce.com/s/articleView?id=sf.live_agent_create_deployments.htm).

### Create an Endpoint

1. Go to **Deploy > Endpoints**.
2. Open the Endpoint where you want to enable handover to Salesforce.
3. Scroll down to **Handover Settings** and select **Salesforce** from the **Handover Platform** list.
4. Fill in the following fields:
    - **Live Agent Base URL** — the Base URL which you need to retrieve from the Salesforce installation.
      On the **Home** page, navigate to **Feature Settings > Service > Chat > Chat Settings**.
      On the **Chat Settings** page, go to the **API Information > Chat API Endpoint**.
      Copy the Endpoint value without the `/chat/rest` part, for example `https://x.xxx-xx-xxx.salesforceliveagent.com`.
    - **API Version** — the value of the API version is `52`.
    - **Organization ID** — the ID of your organization in Salesforce.
    - **Deployment ID** — the ID of your deployment in Salesforce.
    - **Button ID** — the ID of your button for related deployment in Salesforce.<br><br>
      Go to the Salesforce installation to retrieve the Organization ID, Deployment ID, and Button ID.
      Navigate to **Feature Settings > Service > Embedded Service > Embedded Service Deployments**.
      In the raw with the deployment you want to use, click the **Show 3 more actions** button, then select **View**.
      In the **Embedded Service Code Snippets** section, click **Get Code**.
      A dialog with a code snippet will be opened.
      Search the snippet for the following part and copy the commented values from the snippet to the Endpoint Settings.
      Leave out the `''` markers.
      <br>

          ```javascript
          embedded_svc.init(
              'https://...'
              'https://...',
              gslbBaseURL
              '<your-organization-id>', // copy the Organization ID
              '...',
              {
                  baseLiveAgentContentURL: '...',
                  deploymentId: '<your-deployment-id>', // copy the Deployment ID
                  buttonId: '<your-button-id>', // copy the Button ID
              }
          );
          ```

5. _(Optional)_ Activate the **Forward Events to the Flow** setting. This setting forwards any event to the Flow, which can be handled in the Events case of a Handover Status Lookup Node. Agent Replies and Conversation Closed events are not forwarded.
6. Click **Save**.

### Configure Handover Settings

In the Salesforce settings of the [Handover to Agent](../tools/agent-handover.md) Node,
configure the following settings:

- **Send Transcript as a first message** — the setting allows Salesforce to receive conversation transcript as a first message. It is turned off by default.
- **Button ID** — the ID of the Button you created in the Salesforce installation. This setting will override the default Button ID that you specified in the [Endpoint configuration](#create-an-endpoint). You can use different Button IDs for individual Handover to Agent Nodes.
- **Pre-chat Entities and Details** — the additional context sent in a custom JSON structure, providing the information before engaging with the human agent. See more information in the [Pre-chat Entities and Details](#pre-chat-details) section.

#### Pre-chat Entities and Details

Cognigy.AI sends the Conversation History by default, which includes the entire chat between the user and agent. 
It's displayed when the agent receives the first message from the user
and can be found in the **Transcripts** tab of Salesforce Service Console under the **Transcript > Details > Transcript > Body** section.

Moreover, Cognigy.AI allows users to send Pre-chat Details and Pre-chat Entities arrays as a custom JSON structure.
This feature allows users
to include additional context or relevant information before initiating the chat with the human agent.
This information can then be used for further processing or personalizing the conversation based on the provided details.

##### Pre-chat Entities

Cognigy.AI allows the creation of fields
and linking User details obtained through Pre-Chat Details to Salesforce Entities like Contact or Case.

To do this, you must send the Pre-Chat Entities array to the live chat session on Salesforce.

The JSON example shows how to connect the conversation to a Case and utilize Pre-Chat Details:

```json
[
   {
         "entityName":"Contact",         
         "saveToTranscript": "Contact",
         "linkToEntityName":"Case",
         "linkToEntityField":"ContactId",
         "showOnCreate":true,          
         "entityFieldsMaps":[
             {
               "fieldName":"LastName",
               "label":"LastName",
               "doFind":true,
               "isExactMatch":true,
               "doCreate":true
            },
            {
               "fieldName":"FirstName",
               "label":"FirstName",
               "doFind":true,
               "isExactMatch":true,
               "doCreate":true
            },
            {
               "fieldName":"Email",
               "label":"Email",
               "doFind":true,
               "isExactMatch":true,
               "doCreate":true
            }          
         ]
      }   
   ]
```

##### Pre-chat Details

Cognigy.AI allows sending conversation information to Salesforce Live Agent using Pre-chat Details.

By utilizing the entityMaps field, this information can be mapped to specific Pre-Chat Entity fields.

Cognigy Script can fetch values from Cognigy input, profile, and context objects before sending the data.

```json
[
       {
         "label":"LastName",
         "value":"Mustermann",
         "entityMaps":[
            {
               "entityName":"contact",
               "fieldName":"LastName"
            }
         ],
         "transcriptFields":[
            "LastName__c"
         ],
         "displayToAgent":true
      },
      {
         "label":"FirstName",
         "value":"Max",
         "entityMaps":[
            {
               "entityName":"contact",
               "fieldName":"FirstName"
            }
         ],
         "transcriptFields":[
            "FirstName__c"
         ],
         "displayToAgent":true
      },
      {
         "label":"Email",
         "value":"max.mustermann@mail.de",
         "entityMaps":[
            {
               "entityName":"contact",
               "fieldName":"Email"
            }
         ],
         "transcriptFields":[
            "Email__c"
         ],
         "displayToAgent":true
      }
   ]
```

For more information about the Pre-Chat Entities and Pre-Chat Details fields and their usage,
read the [Salesforce API documentation](https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm#CustomDetail). 

To check the handover, go to the installation that your server administrator has deployed.

### Integrate Copilot into Salesforce Service Cloud

To integrate Copilot directly into Salesforce, see our article on [Salesforce Integrations](https://github.com/Cognigy/salesforce-integrations).