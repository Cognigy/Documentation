---
 title: "Adding Agents and Admins" 
 slug: "live-agent-setup-agents" 
 hidden: false 
---
# Adding Agents and Admins to Live Agent
<div class="divider"></div>

After you have [Setup your Endpoint and Flow for Handover to Live Agent]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-handover/) and tested a Conversation, you can add new Agents and Admins, and assign them to Inboxes in Live Agent.

## Adding an Agent to Cognigy.AI
<div class="divider"></div>

Login to Cognigy.AI. If your Agent already exists as a user in Cognigy.AI, and is a member of your Project, skip to [adding their Project Roles]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-agents/#adding-project-roles-to-your-agents). 

Otherwise go to the top right corner of your screen, and open the *User Menu*. Click *Access Control*.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/user-menu-with-live-agent-item.png" width="100%" />
  <figcaption>User Menu</figcaption>
</figure>

Next, click the button labeled *Create new User*. Here you will create the credentials for your Agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/create-agent.png" width="100%" />
  <figcaption>Create New User Menu</figcaption>
</figure>

## Adding an Agent to your Project in Cognigy.AI
<div class="divider"></div>

Next, return to your Project in Cognigy.AI. Click *Manage* and then *Members*.

Click the *Add new  Member* button, and select your new agent from the drop down menu that appears and click *Add.*

## Adding Project Roles to your Agents
<div class="divider"></div>

Fom Cognigy.AI, click *Manage* and then *Members*. Select an Agent in the list, and use the *+* button to edit its [Project Roles]({{config.site_url}}ai/resources/manage/members/#project-roles). 

<figure>
  <img class="image-center" src="{{config.site_url}}live-agent/images/la-diagram-roles.png" width="85%" />
  <figcaption>Live Agent Project and Inbox Mapping</figcaption>
</figure>

To make them an Agent within Live Agent, simply give them the *Agent* role as shown below.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-roles.png" width="100%" />
  <figcaption>Adding Roles</figcaption>
</figure>

Now, have your new Agent login to Live Agent with their Cognigy.AI credentials. 

After their first login, you will see them as an Agent within Live Agent! You can now assign them to Inboxes as needed.
## Adding Agents to an Inbox
<div class="divider"></div>

Open Live Agent, and click the gear icon for *Settings*. Next click *Inboxes* and the gear icon next to your Inbox. 

Once in the Inbox settings, click *Collaborators*. Here you can add your Agent to the Inbox.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/add-agent-inbox.png" width="100%" />
  <figcaption>Adding Agents to an Inbox</figcaption>
</figure>

## Setting Agent Roles in Live Agent
<div class="divider"></div>

You can also give your Agent the *Admin Role* within Live Agent. 

Click the gear icon for *Settings*. Next click *Agents* and the pencil icon (*Edit*) button next to your Agent. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/agent-role.png" width="75%" />
  <figcaption>Agent Roles in Live Agent</figcaption>
</figure>

Now you can set the [Roles]({{config.site_url}}live-agent/roles/) for your Agent in Live Agent.

## Live Agent Setup Complete
<div class="divider"></div>

This completes the setup of Live Agent!

## See Further Live Agent Documentation
<div class="divider"></div>

For more on Live Agent, please visit our documentation here: 
- [**Live Agent Overview**]({{config.site_url}}live-agent/overview/)

## Additional Additional Inboxes for a Single Project
<div class="divider"></div>

Do you need additional Inboxes for a single Project? Look here: 
- [**Adding an Additional Inbox for your Project**]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-additional-inbox/)