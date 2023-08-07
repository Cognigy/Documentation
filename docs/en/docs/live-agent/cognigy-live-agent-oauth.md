---
 title: "Cognigy Live Agent OAuth" 
 slug: "labels" 
 hidden: false 
---
# Cognigy Live Agent OAuth

## Introduction

You can log in to Live Agent using your Cognigy.AI account by utilizing the OAuth2 protocol. To configure this, follow the instructions provided in the installation section [Helm Values](installation/helm-values/helm-values.md).

Note that this is used as the default login for Live Agent.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-cognigy-oauth.png" width="100%" alt="Live Agent OAuth screen and Cognigy Login" />
  <figcaption>Live Agent OAuth screen and Cognigy Login</figcaption>
</figure>


Once you have entered your credentials, you will be redirected to the Live Agent Dashboard, with the Cognigy.AI account logged in.

!!! note 
    Remember that the user needs to have the proper roles in order to login into Live Agent. Otherwise, an unauthorized error will be thrown.

## Migrating existing users that login with email and password to use Cognigy.AI OAuth

Old users created from Management UI can still log in using the /old-login endpoint.

 However, it is recommended to migrate these users to utilize the Cognigy.AI OAuth login. To initiate the migration process, follow these steps:
1. Create a Cognigy.AI user account with the same email as the old user.

2. To log in to Live Agent, assign a valid role by following the guide [Adding Agents and Admins to Live Agent](../ai/handover-providers/live-agent-setup/live-agent-setup-agents.md).

3. Log into Live Agent using Cognigy.AI OAuth (`/login` endpoint).

!!! note 
    Once this process is completed, the user will no longer be able to log in using `/old-login`, and any changes to their credentials must be made through the Cognigy.AI platform.
## OAuth Errors Meaning

The following list contains the common errors that can be shown while using the Cognigy.AI OAuth.

### Something is wrong with the OAuth configuration

The problem relates to how the Cognigy.AI and Live Agent APIs are set up to communicate. To resolve this, you must review and double-check the configuration for Live Agent in the [Helm Values](../live-agent/installation/helm-values/helm-values.md#oauth) section. Additionally, verify the Cognigy.AI configmap containing the Live Agent API endpoints and client data.
### The user organisation `{Organisation ID}` was not found in the system

This error message indicates that there is no Live Agent account associated with the specified Cognigy.AI organization. To resolve this, you need to set up the organization in Live Agent. Please refer to the [Cognigy Live Agent Setup](../ai/handover-providers/live-agent-setup/live-agent-setup-org.md) guide for instructions on how to do this.

### The Cognigy user is not authorized to access the system

If the user does not have the necessary permissions, follow the instructions provided in the guide [Adding agents and admins to Live Agent](../ai/handover-providers/live-agent-setup/live-agent-setup-agents.md) to grant them the appropriate roles and resolve the authorization issue.
In case the guides above didn't solve the issue, [you can reach us through support](https://support.cognigy.com/hc/en-us/requests/new?).
