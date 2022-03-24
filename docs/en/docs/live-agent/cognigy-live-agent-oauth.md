---
 title: "Cognigy Live Agent OAuth" 
 slug: "labels" 
 hidden: false 
---
# Cognigy Live Agent OAuth

## Introduction

It is possible to perform a login into Live Agent with your Cognigy.AI account. This is done by using the OAuth2 protocol. The configuration must be done following the instructions under the installation section [Helm Values]({{config.site_url}}live-agent/installation/helm-values/helm-values/).

Please note that this is used as the default login for Live Agent.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-cognigy-oauth.png" width="100%" alt="Live Agent OAuth screen and Cognigy Login" />
  <figcaption>Live Agent OAuth screen and Cognigy Login</figcaption>
</figure>


Once you have entered your credentials, you will be redirected to the Live Agent Dashboard, with the Cognigy.AI account logged in.

>Note: Remember that the user needs to have the proper roles in order to login into Live Agent. Otherwise, an unauthorized error will be thrown.

## OAuth Errors Meaning

The following list contains the common errors that can be shown while using the Cognigy.AI OAuth.
### Something is wrong with the OAuth configuration

This is related to the configuration for the communication between the Cognigy.AI and Live Agent APIs. Please review the configuration for Live Agent in the [Helm Values]({{config.site_url}}live-agent/installation/helm-values/helm-values/helm-values/#oauth-values) section and also the Cognigy.AI configmap with the Live Agent API endpoints and client data.

### The user organisation `{Organisation ID}` was not found in the system

This appears when there is no account in Live Agent mapped to a Cognigy.AI organisation. For solving this, the setup for the organisation must be done, please head over to [Cognigy Live Agent Setup]({{config.site_url}}ai/cognigy-live-agent/cognigy-live-agent-setup/).

### The Cognigy user is not authorised to access the system

It can happen in the following scenarios:


1. The user has no valid global roles such as `admin` or `liveAgentAdmin`. Add one of them if you want the user to be able to log in as a Live Agent administrator.

2. The user has not a valid project-wide role in a project mapped to a Live Agent inbox, or the project is setup. 
    -  For setting up the project to an inbox head over to [Cognigy Live Agent Setup]({{config.site_url}}ai/cognigy-live-agent/cognigy-live-agent-setup/#agent-settings). 
    - Once the project is set up, add a member and assign the `agent` role. Now the user should be able to log in as a Live Agent agent.

In case the guides above didn't solve the issue, [you can reach us through support](https://support.cognigy.com/hc/en-us/requests/new?).
