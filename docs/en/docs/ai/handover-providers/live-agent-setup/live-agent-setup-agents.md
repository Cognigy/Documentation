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

Login to Cognigy.AI. If your Agent already exists as a user in Cognigy.AI, and is a member of your Project, skip to [adding their Live Agent Roles]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-agents/#adding-live-agent-roles-in-cognigyai). 

Otherwise go to the top right corner of your screen, and open the *User Menu*. Click *Access Control*.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/user-menu-with-live-agent-item.png" width="100%" />
  <figcaption>User Menu</figcaption>
</figure>

Next, click the button labeled *Create new User*. Here you will create the credentials for your Agent.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/create-agent.PNG" width="100%" />
  <figcaption>Create New User Menu</figcaption>
</figure>

## Adding Live Agent Roles in Cognigy.AI
<div class="divider"></div>

???+ warning "**Live Agent is Still In Development** "
    *Live Agent* is still in development.

    Currently, only the *liveAgentAdmin* Role is available via Global Roles.

    To give your Agent the *liveAgentAgent* Role, you will [add the *Agent* Role in Project Roles]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-agents/#adding-the-agent-role-via-project-roles-in-cognigyai)

Live Agent has two Roles, Administrator (**liveAgentAdmin**) and Agent (**liveAgentAgent**). 

You can hear more about these roles here.

- [Live Agent Roles]({{config.site_url}}live-agent/roles/)

To add Roles to your Agents, go back to the top right corner of your screen, and open the *User Menu* and click *Access Control*.

Click the Agent you would like to assign Roles to. Now you will see *Global Roles*, simply click the plus arrow and choose the Role needed.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/live-agent-roles.png" width="100%" />
  <figcaption>Global Roles Menu</figcaption>
</figure>

## Adding the Agent Role via Project Roles in Cognigy.AI
<div class="divider"></div>

In the future, you will be able to add the *liveAgentAgent* Role in Global Roles. For now, you will add the *Agent* role as shown in the diagram below.

<figure>
  <img class="image-center" src="{{config.site_url}}live-agent/images/la-diagram-roles.PNG" width="85%" />
  <figcaption>Live Agent Project and Inbox Mapping</figcaption>
</figure>

From Cognigy.AI, click *Manage* and then *Members*. Select an Agent in the list, and use the *+* button to edit its [Project Roles]({{config.site_url}}ai/resources/manage/members/#project-roles). 

To make them an Agent within Live Agent, simply give them the *Agent* role as shown below.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-roles.PNG" width="100%" />
  <figcaption>Adding Roles</figcaption>
</figure>

## Have Your Agent Login
<div class="divider"></div>

Now, have your new Agent login to Live Agent with their Cognigy.AI credentials. 

They can do this in Cognigy.AI, via the [User Menu]({{config.site_url}}ai/tools/user-menu/user-menu/). Or via a direct link. (example: **https://liveagent-trial.cognigy.ai/**)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/user-menu-with-live-agent-item.png" width="100%" />
  <figcaption>User Menu</figcaption>
</figure>

After their first login, you will see them as an Agent within Live Agent! You can now assign them to Inboxes as needed.

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

## Additional Additional Inboxes for a Single Project
<div class="divider"></div>

Do you need additional Inboxes for a single Project? Look here: 

- [**Adding an Additional Inbox for your Project**]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-additional-inbox/)