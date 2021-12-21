---
 title: "Cognigy Live Agent Setup" 
 slug: "cognigy-live-agent-setup" 
 hidden: false 
---
# Cognigy Live Agent Setup


## User Menu
<div class="divider"></div>

When you have the Cognigy Live Agent feature enabled, you can navigate to the UI of Cognigy Live Agent, via the [User Menu]({{config.site_url}}ai/tools/user-menu/user-menu/). Just click on the menu item *Live Agent* in the User Menu and our Cognigy Live Agent will open up in a new tab.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/user-menu-with-live-agent-item.png" width="100%" />
  <figcaption>User Menu</figcaption>
</figure>

## Organisation Details
<div class="divider"></div>

If you navigate to the *Organisation Details* page via the User Menu, you can see that we have a new section for Live Agent Settings. In that you will find a button **Set up Live Agent**, clicking on which would set up the Live Agent Account for your entire organisation. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/organisation-wide-live-agent-setup-button.png" width="100%" />
  <figcaption>Live Agent Settings in Organisation Details page</figcaption>
</figure>

If the button is disabled, it could be for the following reasons:

* You do not have the Cognigy Live Agent feature enabled
* You do not have permissions to create a Live Agent account
* There is already a Live Agent account created for your organisation

The text above the button can help you find why the button is disabled for you. 

**Example 1:**
Cognigy Live Agent feature not enabled 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/organisation-wide-live-agent-not-configured.png" width="100%" />
</figure>


**Example 2:**
Live Agent Account already set up for the Organisation

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/organisation-wide-live-agent-successfully-configured.png" width="100%" />
</figure>

## Agent Settings
<div class="divider"></div>

If you go to the *Settings* page of an Agent, you will now find a new section for Live Agent Settings at the bottom.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-setting-create-project-btn.png" width="100%" />
  <figcaption>Live Agent Settings in Agent Settings page</figcaption>
</figure>

If an Organisation has a Live Agent Account (See [here]({{config.site_url}}ai/cognigy-live-agent/cognigy-live-agent-setup/#organisation-details) on how to setup Live Agent account for your Organisation), clicking on the **Create Project inbox** button will create a new Inbox for the specific Agent within your Live Agent account. Once the inbox is created, you will see the *Default Inbox ID* above the disabled button.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-setting-with-inbox-id.png" width="100%" />
  <figcaption>Inbox already created for the Agent</figcaption>
</figure>

The button could also be disable for the following reasons:

* You do not have the Cognigy Live Agent feature enabled
* The organisation do not have a Live Agent account set up
* You do not have permissions to create an Inbox for the Agent

**Example 1:**
Cognigy Live Agent feature not enabled or Live Agent Account not set on an Organisational level

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-settings-not-configured.png" width="100%" />
</figure>


**Example 2:**
No permission to Create an Inbox for Live Agent

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/project-wide-live-agent-setting-no-permissions.png" width="100%" />
</figure>


???+ warning "Live Agent Settings"
    The new *Live Agent settings* section in Organisation Details and Agent Settings page will be hidden, if you have both Theming enabled and Cognigy Live Agent feature disabled.
