---
 title: "Salesforce Service Cloud" 
 slug: "salesforce-handover" 
 hidden: false 
---
# Salesforce Service Cloud Integration

## Description

<div class="divider"></div>

Cognigy has integrated **"Salesforce"** as an additional handover provider that can be used by our customers to connect their users with real agents (in third-party sources). You can read more about Agent Handover [here]({{config.site_url}}ai/tools/agent-handover/). 

## Setup
<div class="divider"></div>
To start using Salesforce as a handover provider with Cognigy.AI, you first have to sign in to Salesforce, e.g. here: https://login.salesforce.com/.


## Endpoint Configuration
<div class="divider"></div>
In the "Handover Settings" section of your Endpoint, you need to select "Salesforce" as your "Handover Platform".
This will require you to fill out the following related fields. To get started, visit your Salesforce web UI and navigate to the "Setup" area (using the cogwheel icon at the top right).

### Live Agent Base URL
- Navigate to **Chat Settings**
- You will see a box titled **API Information** with a field called **Chat API Endpoint**
- Copy the "Base URL" from the field (`https://x.xxx-xx-xxx.salesforceliveagent.com` without `/chat/rest`) into the "Live Agent Base URL" field in Cognigy.AI
<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/salesforce-baseurl.png" width="100%" />
  <figcaption>Retreiving the Live Agent Base URL</figcaption>
</figure>

### API Version
- Use `52` as a value

### Organization ID, Deployment ID, Button ID
- Navigate to **Embedded Service Deployments**
- Open the dropdown for the deployment you want to use, then select **View**
- In the **Embedded Service Code Snippets** section, click the **Get Code** button
- A dialog with a code snippet will open. Search the snippet for the following part and copy the commented values from the snippet to the Endpoint Settings. Leave out the `''` markers.
```javascript
embedded_svc.init(
    'https://...'
    'https://...',
    gslbBaseURL
    'xxxxxxxxxxxxxxx', // <--- use this as the "Organization ID"
    '...',
    {
        baseLiveAgentContentURL: '...',
        deploymentId: 'yyyyyyyyyyyyyyyy', // <--- use this as the "Deployment ID"
        buttonId: 'zzzzzzzzzzzzzz', // <--- use this as the "Button ID"
    }
);
```
<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/salesforce-ids.png" width="100%" />
  <figcaption>Retreiving Organisation ID, Deployment ID and Button ID</figcaption>
</figure>

## Prechat Entities and Prechat Details

### Default behavior

Cognigy.AI sends a stringified version of the Conversation History. The Conversation history will be displayed when the Agent received the first message from the user, as well as in the "Transcripts" tab of Salesforce Service Console under the Transcript > Details > Trascript > Body section.


### Sending Pre-Chat Details and Pre-Chat Entities to Salesforce

[![Version badge](https://img.shields.io/badge/Added in-v4.26.0-blue.svg)]({{config.site_url}})

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/salesforce-prechat-entities-details.png" width="100%" />
  <figcaption>Salesforce section in "Handover to Agent" node</figcaption>
</figure>

Cognigy.AI allows user to send Pre-Chat Details and Pre-Chat Entities arrays as a custom JSON structure.

#### Pre-Chat Details

Cognigy.AI provides an opportunity to send conversation information to the Salesforce live agent about the to help the human agent via Pre-Chat Details. Via `entitiyMaps` field the information can be linked Pre-Chat Entity specific fields. Cognigy Script is available to get values from Cognigy input, profile, context objects before sending.


```
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


#### Pre-Chat Entities

To create fields and link the User details received via Pre-Chat Details to a Salesforce Entity (e.g. Contact, Case), send Pre-Chat Entities array to the live chat session on Salesforce.

**Sample JSON to attach the conversation to a Case and use Pre-Chat Details :**
```
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

???+ info "Please check [Salesforce API documentation](https://developer.salesforce.com/docs/atlas.en-us.live_agent_rest.meta/live_agent_rest/live_agent_rest_data_types.htm#CustomDetail) for more information Pre-Chat Entities and Pre-chat Details fields and their usage." 