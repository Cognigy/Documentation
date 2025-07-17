---
title: "Azure Bot Services" 
slug: "azure-bot-services"
description: "Connect your Cognigy Agent to Azure Bot Services using the Azure Bot Services Endpoint integration."
hidden: false
tags:
  - azure bot services
  - azure bot services endpoint
---

# Azure Bot Services

[![Version badge](https://img.shields.io/badge/Updated in-v4.55-blue.svg)](../../../release-notes/4.55.md)

<figure>
  <img class="image-center" src="../../../../_assets/ai/deploy/endpoint-reference/azure-bot-services.png" width="100%" />
</figure>

{! _includes/release-notes/handover-providers-deprecation.md !}

The Azure Bot Services Endpoint enables you to connect your AI Agent to the [Azure Bot Services](https://azure.microsoft.com/en-us/services/bot-services/) platform. This integration allows you to deploy your AI Agent to Microsoft Teams and other channels supported by Azure Bot Services.

## Prerequisites

- Access to the [Azure Bot Services](https://azure.microsoft.com/en-us/services/bot-services/) platform.
- An account on the [Microsoft Entra Admin Center](https://entra.microsoft.com/).
- An account on the [Microsoft Teams Developer Portal](https://dev.teams.microsoft.com/).

## Restrictions

- In Microsoft Teams, postback buttons in [quick reply](../../build/node-reference/basic/say.md), [gallery](../../build/node-reference/basic/say.md), [list](../../build/node-reference/basic/say.md), or [button](../../build/node-reference/basic/say.md) configurations will always display the button title in the user's chat when clicked. This behavior can't be disabled but doesn't affect other channels supported by the Azure Bot Services Endpoint.

## Generic Endpoint Settings

Learn about the generic Endpoint settings available on the following pages:

- [Endpoints Overview](../endpoints/overview.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md)
- [Data Protection & Analytics](../endpoints/data-protection-and-analytics.md)
- [Transformer Functions](../endpoints/transformers/overview.md) 
- [NLU Connectors](../../empower/nlu/external/nlu-connectors/overview.md)
- [Session Management](../endpoints/session-management.md)
- [Real-Time Translation Settings](../endpoints/real-time-translation-settings.md) 
- [Transformer Functions](../endpoints/transformers/overview.md)
- [Handover Settings](../endpoints/handover-settings.md)
- [Inject and Notify](../endpoints/inject-and-notify.md)

## Specific Endpoint Settings

??? info "Azure Bot Services Settings"
    | Setting                       | Description                                                                                                                                                                                                                                                                                                                 |
    |-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Access Scope                  | Defines who can access this app:<br>- **Multi Tenant** — allows users from any Azure Active Directory (AAD) tenant to access the app, for example, users from different organizations.<br>- **Single Tenant** — restricts access to one specific AAD tenant. Only accounts within your organization’s directory can log in. |
    | Restrict to Azure AD Accounts | When **Multi Tenant** is selected, this toggle restricts access to Azure AD accounts only. It prevents public access and allows access only for accounts managed in your organization's Azure Active Directory.                                                                                                             |
    | Microsoft App ID              | The app ID for your bot. You can find it on the **Settings** page of your bot in the Azure Bot Services Dashboard.                                                                                                                                                                                                          |
    | Microsoft App Password        | The Client Secret for your bot. You can find it on the **App Registrations** page in the Azure Bot Services Dashboard.                                                                                                                                                                                                      |
    | SSO Connection Name           | The name of the connection you create in Azure Bot Services when setting up a Bot. This name is used when connecting the Endpoint with an SSO integration.                                                                                                                                                                  |

## How to Set Up

### Setup on the Cognigy.AI Side

??? info "1. Create an Azure Bot Services Endpoint"
    1. In the left-side menu of your Project, click **Deploy > Endpoints**.
    2. On the **Endpoints** page, click **+ New Endpoint**.
    3. In the **New Endpoint** section, do the following:
        1. Select the **Azure Bot Services** Endpoint type.
        2. Specify a unique name.
        3. Select a Flow from the list. Save changes.
    4. In the **Configuration Information** section, copy the Endpoint URL and save it for later use in Azure Bot Services.

### Setup on the Azure Bot Services Side

??? info "1. Create an App in Azure AD B2C"
     1. Go to the Microsoft Entra Admin Center and select **Azure AD B2C**.
     2. In the **Manage** section, select **App registrations**, then click **New registration**.
     3. In the **Supported account types** section, select one of the following options:

        === "Single Tenant"
             1. Under **Redirect URI**, pick **Single-page application (SPA)** and enter the URL `https://login.microsoftonline.com/<tenantID>/oauth2/v2.0/token`.
             2. Click **Register**, then copy **Tenant ID**. 
             3. Go to **Entra ID > App registrations**, find your application that you created. Then copy and save the **Application (client) ID**.
             4. Open the app by clicking on its name. Go to **Manage > Authentication**. Enter the Cognigy.AI Endpoint URL in the **Front-channel logout URL** field. In the **Supported account types** section, ensure that **Accounts in this organizational directory only** for a single tenant is enabled.
    
        === "Multitenant"
                1. Under **Redirect URI**, select **Single-page application (SPA)** and enter the URL `https://token.botframework.com/.auth/web/redirect`.
                2. Go to **Entra ID > App registrations**, find the app that you created. Then copy and save the **Application (client) ID**.
                3. Open the app by clicking its name. Go to **Manage > Authentication**. Enter the Cognigy.AI Endpoint URL in the **Front-channel logout URL** field. In the **Supported account types** section, ensure that **Accounts in any organizational directory** for a multitenant is enabled.

     4. Go to **Manage > Certificates & secrets**. Click **+ New client secret**. Name your secret, set expiry, click **Save**. Copy the value and save it for later use.
     5. Go to **Manage > API permissions**, click **+ Add a permission**, then **Microsoft Graph > Delegated permissions**. Select `openid`, which is required for SSO. Select other permissions like `email` if needed. 
     6. Click **Add permissions**. Click **Grant admin consent if required** — permissions get a green check. 
     7. Go to **Manage > Expose an API**. In the **Application ID URI** field, enter `api://botid-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. Replace `x` with your saved Client ID. Save changes.
     8. Click **+ Add a scope**. Name the scope. Allow both admins and users to consent. Fill in other required fields. Save changes.
     9. Click **+ Add a client application** and add:
         - `5e3ce6c0-2b1f-4285-8d4b-75ee78787346` (MS Teams Web)
         - `1fec8e78-bce4-4aaf-ab1b-5451cc387264` (MS Teams Mobile & Desktop)
    10. Go to **Manage > Manifest**, update the following parameters to the values:
        - `AccessTokenAcceptedVersion` to `2`.
        - `Oauth2RequirePostResponse` to `true` (use only for Single Tenant).
        - `SignInUrl` – enter your Cognigy.AI Endpoint URL. Save changes.

??? info "2. Create a Resource Group in Azure Bot Services" 
    If you already have a resource group, you can skip this section.

    1. Click the **Create a resource** card. In the Marketplace search, enter **resource group**.
    2. In the search results, find the **Resource group** card. At the bottom of this card, click **Create > Resource group**.
    3. On the **Create a Resource group** page, select your subscription from the list. A trial or usage-based one will work.
    4. Specify a unique name for the group.
    5. Select a region to store the resources.
    6. Save changes by clicking **Review + create**, then **Create**.

    Your resource group will be created. You can check it by clicking the bell icon, then **Go to resource group**.

??? info "3. Create a Bot in Azure Bot Services"
    1. Click the **Create a resource** card. 
    2. In the Marketplace search, enter **azure bot**. In the search results, find the **Azure bot** card. At the bottom of this card, click **Create > Azure bot**. 
    3. On the **Create an Azure bot** page, fill in the following fields:
        - **Bot handle** - enter a display name for the Azure bot. 
        - **Subscription and Resource group** - select the same values that you previously configured in the **Resource group** section.
        - **Data residency** — select **Global**.
        - **Pricing tier** — select **Free plan** by clicking **Change plan**.
    3. In the **Microsoft App ID** section, fill in the following fields according to the scope of your app:

        === "Single Tenant"
            1. Select **Single Tenant**.
            2. In the **Creation type** list, select **Use an existing app registration**.
            3. In the **App ID** field, enter the Client ID you previously copied and saved.
            4. In the **App tenant ID** field, enter the Client Secret you previously copied and saved.

        === "Multitenant"
            1. Select **Multi Tenant**.
            2. In the **Creation type** list, select **Use an existing app registration**.
            3. In the **App ID** field, enter the Client ID you previously copied and saved.

    4. Save changes by clicking **Review + create**, then **Create**. Wait for the deployment, which might take 1-2 minutes, then go to the resource.
    5. In the **Settings** section, select **Configuration**.
    6. The **Messaging endpoint** field must contain the previously copied Endpoint URL from the Azure Bot Services Endpoint. Activate **Enable Streaming Endpoint**. Click **Add OAuth Connection Settings**.
    7. On the **New Connection Setting** window, fill in the following fields:
        - **Name** — add a unique name. Copy and save this name for later use in Cognigy.AI.
        - **Service provider** — select **Azure Active Directory v2**.
        - **Client ID** — enter the Client ID you previously copied and saved.
        - **Client Secret** — enter the Client Secret you previously copied and saved.
        - **Token Exchange URL** — enter the Cognigy.AI Endpoint URL.
        - **Tenant ID** — enter the word `common` for a multitenant or the tenant ID for a single tenant.
        - **Scopes** — add the permissions your bot should have. Must be in a space-delimited list. For example, `email offline_access openid profile User.Read`.
    8. Save changes. At the bottom of the **Configuration** page, click **Apply**.

??? info "4. Add the Teams Channel to your Azure Bot"
    1. Add the **Teams** channel to your channel list. 
    2. Go to the Azure Bot that you have just configured. 
    3. In the **Settings** section, select **Channels**. 
    4. In the **Available channels** section, select **Microsoft Teams**. 
    5. Accept **Terms of Service** by clicking **Agree**. Click **Save**. The Teams channel appears in your channel list.

    !!! note
        The Teams channel might display errors. You can ignore these errors because each message is properly delivered to and processed by Cognigy.AI.

??? info "5. Update the Azure Bot Services Endpoint"
    To update the Azure Bot Services Endpoint:

    1. In the Cognigy.AI interface, go to **Deploy > Endpoints**. Select the Azure Bot Services Endpoint you previously created.
    2. In the **Bot Framework Settings** section, fill in the fields as follows:
        - **Microsoft App ID** — enter the Client ID.
        - **Microsoft App Password** — enter the Client Secret.
        - **SSO Connection Name** — enter the Connection Name.

??? info "6. Create a Microsoft Teams App"
    1. Go to the [Microsoft Teams Developer Portal](https://dev.teams.microsoft.com/) and select **Apps** from the left pane.
    2. Select **+ New app**, enter your app name and click **Add**. Go to **Configure > Basic Information**.
    3. Fill in the following fields:
        - **Short description** — a brief summary about your app.
        - **Long description** — more details about your app, such as its functions or restrictions.
        - **Developer or Company name** — for example, `Cognigy`.
        - **Website** — for example, [https://www.cognigy.com/](https://www.cognigy.com/).
        - **Privacy policy** — for example, [https://www.cognigy.com/privacy-policy](https://www.cognigy.com/privacy-policy).
        - **Terms of use** — for example, [https://www.cognigy.com/legal-notice](https://www.cognigy.com/legal-notice).
        - **Application (client) ID** — the Client ID you saved earlier.
        - *(Optional)* **Microsoft Partner Network ID** — only if you have admin consent permissions.
    4. Save changes and specify which features your bot will use:
        1. Go to **Configure > App features**.
        2. Select the **Bot** card.
        3. On the **Bot** page, configure the following settings:
            3.1 Select **Enter a bot ID** and enter your saved **Client ID**.
            3.2 Enable **Upload and download files** — required to prevent a bug that blocks attachments.
            3.3 Select **Personal scope**.
        4. Save changes.

??? info "_(Optional)_ 6.1 Configure Single Sign-On"
    If you want to use Single Sign-On (SSO) with your bot, follow these steps:

    1. Go to **Configure > Single sign-on**.
    2. In the **Application ID URI** field, enter `api://botid-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`. Replace `x` with your saved Client ID. Save changes.
    3. Still under **Single sign-on**, add these domains:
       - `token.botframework.com` — for token authentication.
       - `mydomain.com` — your Endpoint's hosting domain.
    4. To complete the SSO configuration, go to the [Cognigy Help Center: SSO and Graph API Nodes](https://support.cognigy.com/hc/en-us/articles/6422300559388-Azure-Bot-Services-Advanced-Deployment-with-SSO-Microsoft-Teams-SSO-and-Graph-API-Nodes#creating-an-sso-flow-0-0) guide.

??? info "7. Configure the App Package"
    1. Go to **Configure > App package**.
    2. At the top, click **Download App package**. 
    3. Unzip the downloaded package, you'll get two images and a `manifest.json` file. Open the `manifest.json` in a code editor. Make these adjustments:
        - Around line 6, replace `packageName` with your unique package name — do not use `com.package.name`. Otherwise, SSO won't work.
        - Add this key at the top level:
          ```json
          "permissions": ["identity", "messageTeamMembers"]
          ```
    4. Save the changes and zip the modified `manifest.json` file and the two images. The new zip file must contain only these files.
    5. Open your Teams client or go to [https://teams.microsoft.com](https://teams.microsoft.com). 
    6. In the bottom-left corner, click **Apps**. 
    7. Click **Upload a custom app** and select your new `.zip` package. Click **Add** — the bot should now appear as a contact you can chat with.

## More Information

- [Cognigy Help Center: Microsoft Bot Framework Deployment](https://support.cognigy.com/hc/en-us/articles/360016183720-Microsoft-Bot-Framework-Deploy-an-Endpoint)
- [Cognigy Help Center: Microsoft Bot Framework Adaptive Cards](https://support.cognigy.com/hc/en-us/articles/360016184000-Microsoft-Bot-Framework-Using-Adaptive-Cards)