---
 title: "Endpoint Setup" 
 slug: "live-agent-setup-handover-endpoint" 
 hidden: false 
---
# Setup a Cognigy.AI Endpoint for Handover
<div class="divider"></div>
First, an Endpoint, for example a [Webchat Endpoint]({{config.site_url}}ai/endpoints/webchat/webchat/), needs to be created in Cognigy.AI. 

Once you have an Endpoint, go to the **Endpoint Editor** and scroll down to **Handover Settings**. 

Set the **Handover Platform** to _"Cognigy Live Agent"_. For the base URL, use your Live Agent installation URL, plus `/api/v1`.

See the example below from our *Trial* environment.

<table>
<tr>
<th>Field</th>
<th>Example Value</th>
<th>Description</th>
</tr>
<tr>
<td>Base URL</td>
<td>https://liveagent-trial.cognigy.ai/api/v1</td>
<td>*https://liveagent-trial.cognigy.ai* is the Live Agent URL</td>
</tr>
</table>

<figure>
    <img src="{{config.site_url}}live-agent/images/LA-endpoint-editor-webchat-selection.png" width="100%" alt="Cognigy.AI Endpoint Settings">
  <figcaption>Cognigy.AI Webchat Endpoint Settings</figcaption>
</figure>

## Account ID and API Key in Live Agent
<div class="divider"></div>
Now you need the values to enter in the _Account ID_ and _API Key_ fields. You will need to login to Live Agent as the admin of the current Agent.

Navigate to the UI of Cognigy Live Agent, via the [User Menu]({{config.site_url}}ai/tools/user-menu/user-menu/). Click on *Live Agent* in the User Menu and Live Agent will open up in a new tab.

Click to Sign In when prompted, using your credentials from Cognigy.AI.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/cognigy-live-agent/images/user-menu-with-live-agent-item.png" width="100%" />
  <figcaption>User Menu</figcaption>
</figure>

Once logged into Live Agent, note down the following values: _Account ID_ and _Inbox ID_. These values can be found on the Live Agent URL after logging in.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA-account-inbox-ids.png" width="100%" alt="Live Agent Account ID and Inbox ID">
  <figcaption>Live Agent Account ID and Inbox ID</figcaption>
</figure>

At the bottom left corner of your screen, click the profile icon displaying your initials. Then click on *Profile Settings*.

<figure>
    <img src="{{config.site_url}}live-agent/images/LA-profile-settings.png" width="100%" alt="Live Agent Profile Settings">
  <figcaption>Profile Settings</figcaption>
</figure>

Scroll down and find the section labeled *Access Token*. Copy the value shown here. This is your *API Key*.

<figure>
    <img src="{{config.site_url}}live-agent/images/LA-access-token.png" width="100%" alt="Live Agent Access Token">
  <figcaption>Live Agent Access Token</figcaption>
</figure>

Return to the Endpoint Editor in Cognigy.AI, go back to Handover Settings in the Webchat Endpoint. 

Enter the *Account ID* and *API Key* (Access Token) found in the previous steps and save your changes.

<figure>
    <img src="{{config.site_url}}live-agent/images/LA-endpoint-id-apikey.PNG" width="100%" alt="Account ID and API Key">
  <figcaption>Account ID and API Key</figcaption>
</figure>

## Autoconfigure Live Agent Handover Settings

[![Version badge](https://img.shields.io/badge/Added in-v4.25.0-blue.svg)]({{config.site_url}})

This feature allows you to autoconfigure an Organisation wide connection to a your Live Agent installation and simplify the Configuration effort when setting up multiple Agents and Endpoints. 

To use this feature you need to:

- [setup Live Agent for your Organisation]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-org/)
- [create an Inbox for the account created in the previous step]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-introduction/?h=live+agent+intr#setup-steps-index).

Then you will be able to use a toggle located in Endpoint settings > Handover Settings section called "Handover to pre-configured Live Agent account" as shown in screenshot below to autoconfigure your Cognigy Live Agent Handover.

<figure>
    <img src="{{config.site_url}}ai/handover-providers/images/autoconfigure-live-agent.png" width="100%" alt="Autoconfigure Live Agent Handover settings in Endpoint Settings">
  <figcaption>Autoconfigure Live Agent Handover Settings</figcaption>
</figure>

???+ info "Use Autoconfigure feature in your own Cognigy Installation"
    To use this feature these environment variables must be set in your Cognigy.AI installation:
    ```
    FEATURE_USE_COGNIGY_LIVE_AGENT: true
    COGNIGY_LIVE_AGENT_API_BASE_URL_WITH_PROTOCOL: <https://sub-domain.domain.com>
    COGNIGY_LIVE_AGENT_PLATFORM_TOKEN: <app-platform-token>
    ```

## Next Steps - Setup your Flow for Handover
<div class="divider"></div>

Now your Webchat Endpoint is setup! Next, you will need to setup your [Flow]({{config.site_url}}ai/resources/build/flows/) for handover to Live Agent:

- [**Setup your Flow for Handover to Live Agent**]({{config.site_url}}ai/handover-providers/live-agent-setup/live-agent-setup-handover-flow/)