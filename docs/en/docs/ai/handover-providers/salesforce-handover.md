---
 title: "Salesforce Handover" 
 slug: "salesforce-handover" 
 hidden: false 
---
# Chatwoot Integration

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

### Live Agent Base URL:
- Navigate to **Chat Settings**
- You will see a box titled **API Information** with a field called **Chat API Endpoint**
- Copy the "Base URL" from the field (`https://x.xxx-xx-xxx.salesforceliveagent.com` without `/chat/rest`) into the "Live Agent Base URL" field in Cognigy.AI
<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/salesforce-baseurl.png" width="100%" />
  <figcaption>Retreiving the Live Agent Base URL</figcaption>
</figure>

### API Version:
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