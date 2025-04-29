---
title: "Salesforce Service Cloud" 
slug: "salesforce-handover" 
description: "Cognigy has seamlessly integrated with Salesforce, adding it as an additional handover provider. This integration enables users to effortlessly connect with human agents who use Salesforce Service Cloud as their contact center."
hidden: false
tags:
   - contact centers
   - handover provider
   - salesforce
---
# Salesforce Service Cloud

[![Version badge](https://img.shields.io/badge/Updated in-v4.97-blue.svg)](../../../release-notes/4.97.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/escalate/handover-reference/salesforce.svg" width="100%" />
  <figcaption>Salesforce Service Cloud</figcaption>
</figure>

## Description

!!! warning
    Salesforce announced the removal date for [LiveAgent, Salesforce Chat, Embedded Chat, and Service Chat](https://help.salesforce.com/s/articleView?id=001790618&type=1). The removal date is February 14, 2026. This handover provider connector will remain active until the removal date. Before this date, migrate to a [new connector](salesforce-miaw.md) for the Salesforce provider that supports [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5).
    If you configured the embedded AI Copilot workspace, make sure that you update its [configuration](salesforce-miaw.md#additional-configuration) during the migration.

The Salesforce handover connector bridges Cognigy.AI and [Salesforce Service Cloud](https://salesforce.com/),
enabling end users to connect with human agents working in a contact center that uses Salesforce Service Cloud.

## Prerequisites

- Access to [Salesforce Service Cloud](https://login.salesforce.com/).
- Created Endpoint [compatible with Salesforce](../../deploy/endpoints/handover-settings.md#channel-support).

## Configuration on the Handover Provider Side

??? info "Configure Salesforce Service Cloud"
    1. [Log in](https://login.salesforce.com/) to Salesforce.
    2. If no chat deployment is available in Salesforce, using the following guides: 
        - [Create a Basic Chat Implementation](https://help.salesforce.com/s/articleView?id=sf.live_agent_set_up_basic_implementation.htm)
        - [Create Chat Deployments](https://help.salesforce.com/s/articleView?id=sf.live_agent_create_deployments.htm).
    3. On the Salesforce home page, navigate to **Feature Settings > Service > Chat > Chat Settings**. On the **Chat Settings** page, go to the **API Information > Chat API Endpoint**. Copy the Chat API Endpoint value without the `/chat/rest` part, for example `https://x.xxx-xx-xxx.salesforceliveagent.com`. Save it for future use.
    4. Navigate to **Feature Settings > Service > Embedded Service > Embedded Service Deployments**. In the raw with the deployment you want to use, click ![vertical ellipsis](../../../_assets/icons/vertical-ellipsis.svg), then select **View**.
    5. In the **Embedded Service Code Snippets** section, click **Get Code**. Copy and save the values from the following parameters without the single quotes `''`:
        - `deploymentId`
        - `buttonId`
        - `organizationId`
         <br>

         ```js
         embedded_svc.init(
             'https://...', 
             'https://...', 
             gslbBaseURL, 
             '<your-organization-id>', // Copy the Organization ID
             '...', 
             {
                 baseLiveAgentContentURL: '...',
                 deploymentId: '<your-deployment-id>', // Copy the Deployment ID
                 buttonId: '<your-button-id>', // Copy the Button ID
             }
         );
         ```

## Configuration on the Cognigy.AI Side

??? info "1. Create a Handover Connector (Beta)"

    !!! note 
        This feature is in Beta. We encourage you to try it out and provide us with feedback.

    1. Go to **Build > Handover Providers** and click **+ New Handover Provider**.
    2. In the **New Handover Provider** window, select **Salesforce** from the list and name the connector.
    3. _(Optional)_ Activate the **Forward Events to the Flow** setting. This setting forwards any event to the Flow, which can be handled in the Lookup Node. Select the **Handover Status** type in the Lookup Node. In the Case Node, select **Events** from the **Handover Status** list. Agent Replies and Conversation Closed events are not forwarded.
    4. Fill in the following fields:

    | **Field**           | **Description**                                                                        |
    |---------------------|----------------------------------------------------------------------------------------|
    | Live Agent Base URL | The URL, copied from the **Chat API Endpoint** field.                                  |
    | API Version         | The API version is `52`.                                                               |
    | Organization ID     | The unique identifier for your Salesforce organization, copied from `organizationId`.  |
    | Deployment ID       | The ID of your deployment in Salesforce, copied from `deploymentId`.                   |
    | Button ID           | The ID of the button for the related deployment in Salesforce, copied form `buttonId`. |

??? info "2. Add a Handover to Agent Node"
    In the **Salesforce Settings** section of the [Handover to Agent](../../build/node-reference/service/handover-to-agent.md) Node, configure the following settings:

    - **Send Transcript as a first message** — the setting allows Salesforce to receive conversation transcript as a first message. It is turned off by default.
    - **Button ID** — the ID of the Button you created in the Salesforce installation. This setting will override the default Button ID that you specified in the [Endpoint configuration](#create-an-endpoint). You can use different Button IDs for individual Handover to Agent Nodes.
    - **Pre-chat Entities and Details** — the additional context sent in a custom JSON structure, providing the information before engaging with the human agent. See more information in the [Pre-chat Entities and Details](#pre-chat-details) section.

??? info "2.1 Configure Pre-Chat Entities and Details"
    By default, Cognigy.AI doesn't send a conversation transcript from the chat with the AI Agent to the chat with the human agent. If you activate the [Send Transcript as a first message](#configure-handover-settings) setting, Cognigy.AI sends the conversation transcript to the chat with the human agent as the first message. The conversation transcript includes the entire chat between the user and the AI Agent.
   
    The conversation transcript is displayed when the human agent receives the first message from the user and can be found in the Salesforce Service Console, under the **Transcripts** tab, in the **Transcript > Details > Transcript > Body** section.
   
    Moreover, Cognigy.AI allows users to send Pre-chat Details and Pre-chat Entities arrays as a custom JSON structure. This feature allows users to include additional context or relevant information before initiating the chat with the human agent. This information can then be used for further processing or personalizing the conversation based on the provided details.

    **Pre-Chat Entities**

    Cognigy.AI allows the creation of fields
    and linking User details obtained through Pre-Chat Details to Salesforce Entities like Contact or Case.
   
    To do this, you must send the Pre-Chat Entities array to the live chat session on Salesforce.
   
    The JSON example shows how to connect the conversation to a Case and use Pre-Chat Details:
   
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

    **Pre-Chat Details**

    Cognigy.AI allows sending conversation information to Salesforce Live Agent using Pre-chat Details.

    By using the **entityMaps** field, this information can be mapped to specific Pre-Chat Entity fields.

    CognigyScript can fetch values from Cognigy input, profile, and context objects before sending the data.

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

    For more information about the Pre-Chat Entities and Pre-Chat Details fields and their usage, read the [Salesforce API documentation](https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm#CustomDetail). 

To check the handover, go to the installation that your server administrator has deployed.

## Additional Configuration

??? info "AI Copilot Workspace"
    To integrate Copilot directly into Salesforce Service Cloud, refer to the [Salesforce Integrations](https://github.com/Cognigy/salesforce-integrations) documentation on GitHub.

## More Information

- [All Handover Providers](overview.md)
- [Handovers](../handovers.md)