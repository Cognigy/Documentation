---
 title: "Cognigy Live Agent OAuth" 
 slug: "labels" 
 hidden: false 
---
# Cognigy Live Agent OAuth

## Introduction

It is possible to perform a login into Live Agent with your Cognigy.AI account.
This is done by using the OAuth2 protocol.
The configuration must be done following the instructions under the installation section [Helm Values](installation/helm-values/helm-values.md).

Note that this is used as the default login for Live Agent.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-cognigy-oauth.png" width="100%" alt="Live Agent OAuth screen and Cognigy Login" />
  <figcaption>Live Agent OAuth screen and Cognigy Login</figcaption>
</figure>


Once you have entered your credentials, you will be redirected to the Live Agent Dashboard, with the Cognigy.AI account logged in.

>Note: Remember that the user needs to have the proper roles in order to login into Live Agent. Otherwise, an unauthorized error will be thrown.

## Migrating existing users that login with email and password to use Cognigy.AI OAuth

The old users created from the Live Agent agents management UI can still login using the `/old-login` endpoint.
However, it is recommended to migrate the users to use the Cognigy.AI OAuth login.
To do this, follow a process:

1. Create a Cognigy.AI user account with the same email as the old user.

2. Assign a valid role to login into Live Agent, follow the guide [Adding Agents and Admins to Live Agent](../ai/handover-providers/live-agent-setup/live-agent-setup-agents.md).

3. Log into Live Agent using Cognigy.AI OAuth (`/login` endpoint).

>Note: Once this process is completed, the user cannot log in using `/old-login` anymore, and any credential change needs to happen on the Cognigy.AI side.

## OAuth Errors Meaning

The following list contains the common errors that can be shown while using the Cognigy.AI OAuth.

### Something is wrong with the OAuth configuration

This is related to the configuration for the communication between the Cognigy.AI and Live Agent APIs.
Review the configuration for Live Agent in the [Helm Values](../live-agent/installation/helm-values/helm-values.md#oauth) section
and also the Cognigy.AI configmap with the Live Agent API endpoints and client data.

### The user organisation `{Organisation ID}` was not found in the system

This appears when there is no account in Live Agent mapped to a Cognigy.AI organization.
For solving this, the setup for the organization must be done,
head over to [Cognigy Live Agent Setup](../ai/handover-providers/live-agent-setup/live-agent-setup-org.md).

### The Cognigy user is not authorized to access the system

In the case that the user does not have valid roles, follow the instructions found to resolve the issue:
[Adding agents and admins to Live Agent](../ai/handover-providers/live-agent-setup/live-agent-setup-agents.md).

In case the guides above didn't solve the issue, [you can reach us through support](https://support.cognigy.com/hc/en-us/requests/new?).
