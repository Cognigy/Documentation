---
 title: "Add another Inbox for your Project" 
 slug: "live-agent-setup-additional-inbox" 
 hidden: false 
---
# Add another Inbox for your Project

<div class="divider"></div>

You can create additional Inboxes in Live Agent and set them up for handover in your Flows.
## Add another Inbox in Live Agent
<div class="divider"></div>

To add another Inbox in Live Agent, follow these steps:

1. In the sidebar of the Live Agent dashboard, click **Inboxes**.
2. In the upper-right corner, click the **+ Add Inbox** button. Live Agent will show you a screen to set up your Inbox.


<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA_Inbox_setup.png" width="100%" alt="Live Agent Inbox Setup">
  <figcaption></figcaption>
</figure>




3. On the Inbox setup page enter the **Channel Name** and the **Webhook URL**:
	
  - **Channel Name** create a unique Inbox name, for example, 'Cognigy Handover'.
	- **Webhook URL** is the Cognigy.AI Endpoint Config URL domain name, extended by **/handover/liveagent**. You will find the Endpoint Config URL on the Endpoint Editor- Webchat page in your Cognigy.AI (see screenshot).


<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA_Config_URL.png" width="100%" alt="Cognigy AI Endpoint Configuration URL">
  <figcaption></figcaption>
</figure>



4. When entered the **Channel Name** and the **Webhook URL**, click the **Create Cognigy.AI Inbox** button.



<table>
<tr>
<th>Field</th>
<th>Example Value</th>
<th>Description</th>
</tr>
<tr>
<td>Channel Name</td>
<td>Inbox name e.g. 'Cognigy Handover'</td>
<td>Name for the channel name</td>
</tr>
<tr>
<td>Webhook URL</td>
<td>https://endpoint-trial.cognigy.ai/handover/liveagent</td>
<td>https://endpoint-trial.cognigy.ai is the Cognigy.AI endpoint config URL domain</td>
</tr>
</table>

Once you have successfully set up the Inbox, you are prompted in the next step to assign your Agent(s) to the new Inbox. 


5. Select your required Agent(s) in the selection list and click the **Add Agents** button. 

**Congratulations. Your new Live Agent Inbox has been created and set to go.** 

The new Inbox is defined by an **Account ID** and an **Inbox ID**. Both ID's you will find in the Live Agent URL after creating the Inbox. To find them, go on as follows: 

6. On the Live Agent dashboard, click **Inboxes** in the sidebar.
7. Find in the list the new Inbox, you have created before, and click the corresponding **Settings** icon next to the  Inbox. The Inbox settings will be displayed and the address line of your browser shows, for example, following Live Agent URL:  

`https://liveagent-dev.cognigy.ai/app/accounts/2/settings/inboxes/32852`

The ID's are placed directly after the ID designations, i.e. here: 
> **Account ID: 2**
> **Inbox ID: 32852**


 <figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA_Inbox_URL.png" width="100%" alt="Live Agent Inbox URL">
  <figcaption></figcaption>
</figure>





<table>
<tr>
<th>Field</th>
<th>Example Value</th>
</tr>
<tr>
<td>Live Agent URL</td>
<td>cognigy.ai/app/accounts/2/settings/inboxes/32852</td>
</tr>
<tr>
<td>Account ID</td>
<td>2</td>
</tr>
</tr>
<tr>
<td>Inbox ID</td>
<td>32852</td>
</tr>
</table>


!!! Note
    The Live Agent **Inbox ID** of your Inbox is required to configure your Flow for Handover to the new Inbox!   


## Configure a Flow for Handover to the Additional Inbox
<div class="divider"></div>

To configure a Flow for a Handover to a Live Agent, follow these steps:

1. Open your Flow in Cognigy.AI, prepared with a Handover Node.


<figure>
    <img src="{{config.site_url}}live-agent/images/Flow_handover_node_config.png" width="100%" alt="Cognigy.AI Handover Flow Node">
  <figcaption></figcaption>
</figure>


2. Click on the **Handover to Agent Node**, to open the Node Editor.
3. Select "Live Agent Settings" and enter the Live Agent **Inbox Id** of your new Inbox.  
4. To confirm, click the **Save Node** button.

Your Flow is now configured for a Live Agent Handover.  



## More Information
<div class="divider"></div>

- [Live Agent Overview](https://docs.cognigy.com/live-agent/overview/)