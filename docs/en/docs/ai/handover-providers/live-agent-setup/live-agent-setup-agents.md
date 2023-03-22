---
 title: "Adding Agents and Admins" 
 slug: "live-agent-setup-agents" 
 hidden: false 
---
# Adding Agents and Admins to Live Agent
<div class="divider"></div>

After you have [Set up your Endpoint and Flow for Handover to Live Agent]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-handover/) and tested a Conversation, you can add new Agents and Admins, and assign them to Inboxes in Live Agent.

## Creating a User
<div class="divider"></div>

Login to Cognigy.AI. If the Agent or Admin you want to add already exists as a user in Cognigy.AI, skip to [adding their Live Agent Roles]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-agents/#adding-live-agent-roles-in-cognigyai). 

Go to the top right corner of your screen, and open the *User Menu*. Click *Access Control*.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/user-menu-access-control-selected.png" width="100%" />
  <figcaption>User Menu</figcaption>
</figure>

Next, click the button labeled *Create new User*. Here you will create the credentials for your Agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/create-agent.PNG" width="100%" />
  <figcaption>Create New User Menu</figcaption>
</figure>

## Adding Live Agent Roles to Users
<div class="divider"></div>

Cognigy Live Agent has two roles: Administrator and Agent. You can learn more about these two roles here:

- [Live Agent Roles]({{config.site_url}}live-agent/roles/)

To add one of these Roles to users, go back to the top right corner of your screen, open the *User Menu* and click *Access Control*.

Click the user you would like to assign Roles to. Now you will see *Global Roles*, simply click the plus arrow and choose the Role needed.

Assign the **liveAgentAdmin** Role to users who are to have Admin rights in Live Agent.
Assign the **liveAgentAgent** Role to users who are to have Agent rights in Live Agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/live-agent-roles.png" width="100%" />
  <figcaption>Global Roles Menu</figcaption>
</figure>

## Adding Agents to an Inbox
<div class="divider"></div>

Open Live Agent, and click the gear icon for *Settings*. Next click *Inboxes* and the gear icon next to your Inbox. 

Once in the Inbox settings, click *Collaborators*. Here you can add your Agent to the Inbox.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/add-agent-inbox.PNG" width="100%" />
  <figcaption>Adding Agents to an Inbox</figcaption>
</figure>

## Live Agent Setup Complete
<div class="divider"></div>

This completes the setup of Live Agent!

## See Further Live Agent Documentation
<div class="divider"></div>

For more on Live Agent, please visit our documentation here: 

- [**Live Agent Overview**]({{config.site_url}}live-agent/overview/)

## Additional Inboxes for a Single Project
<div class="divider"></div>

Do you need additional Inboxes for a single Project? Look here: 

- [**Adding another Inbox for your Project**]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-additional-inbox/)