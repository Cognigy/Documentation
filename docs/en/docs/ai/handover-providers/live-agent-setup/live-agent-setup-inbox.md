---
 title: "Inbox Setup" 
 slug: "live-agent-setup-inbox" 
 hidden: false 
---
# Set up the Inbox for Live Agent
<div class="divider"></div>

Now that you have [**Set up Live Agent for your Organisation**]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-org/), you can set up your default Inbox for Live Agent.

## Agent Settings
<div class="divider"></div>

Open an existing [Agent]({{config.site_url}}ai/resources/agents/agents/). Go to the bottom left corner of your screen, and click on [Manage]({{config.site_url}}ai/resources/manage/manage/). Next click [Settings]({{config.site_url}}ai/resources/manage/settings/) selection. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/manage-settings.PNG" width="100%" />
  <figcaption>Agent Settings</figcaption>
</figure>

Scroll down and find *Live Agent Settings*.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-setting-create-project-btn.png" width="100%" />
  <figcaption>Live Agent Settings in Agent Settings page</figcaption>
</figure>

Click on the **Create Project Inbox** button to create a new Inbox for the selected Agent. 

Once the Inbox is created, you will find the *Default Inbox ID* above the now disabled button.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-setting-with-inbox-id.png" width="100%" />
  <figcaption>Inbox already created for the Agent</figcaption>
</figure>

## Next Steps - Setup Handover
<div class="divider"></div>
Next, you will setup your [Handover]({{config.site_url}}ai/tools/agent-handover/) to Live Agent:

- [**Set up your Endpoint and Flow for Handover to Live Agent**]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-handover/)

## Having Trouble?
<div class="divider"></div>

???+ warning "**Create Project Inbox** disabled"

	The button could also be disable for the following reasons:

	* You do not have the Cognigy Live Agent feature enabled
	* The Organisation do not have a Live Agent account set up
	* You do not have permissions to create an Inbox for the Agent

    **Example 1:**
    The Cognigy Live Agent feature is not enabled or Live Agent Account not set on an Organisational level

    <figure>
    <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-settings-not-configured.png" width="100%" />
    </figure>


    **Example 2:**
    You don't have permissions to Create an Inbox for Live Agent

    <figure>
    <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-setting-no-permissions.png" width="100%" />
    </figure>


???+ warning "Live Agent Settings not visible"
    The *Live Agent Settings* section in Organisation Details and Agent Settings page will be not be displayed at all, if you have both *Theming* enabled and the *Cognigy Live Agent* feature disabled.