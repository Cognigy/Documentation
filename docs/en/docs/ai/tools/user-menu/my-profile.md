# My Profile

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/945574c-usermenu-profile.jpg" width="100%" />
</figure>

#### Preferences
In this section the** user interface language **can be selected. Cognigy.AI currently supports the following user interface languages: **English**, **German**, **Korean**, **Japanese **and **Spanish**.

#### Global Roles
The **Global Roles** section allows for the assignment of global roles that **apply across different Agents**. More granular Local Roles can be configured per Agent. 

#### Login History
This section shows a list of previous login-sessions and their location (if available). This can be used for auditing purposes.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/8a69f25-usermenu-login-history.jpg" width="100%" />
</figure>

#### API Keys
Application Programming Interface (API) Keys are a security token registered to a user account that can be used by external applications to access Cognigy.AI in the same way that a human user would enter their password to login to the platform. API keys adopt the same permissions (e.g. Admin, Project Manager, Odata) as the user profile with which they are associated. This provides authorization to perform requests made available via the [Cognigy Open API]({{config.site_url}}ai/developer-guides/using-api)  or to return conversation data from the [Cognigy OData Analytics Endpoint]({{config.site_url}}ai/tools/analytics/odata-analytics-endpoint).

A user that holds the required global permissions to create their own API keys can do so from this menu. Click the "+" button to generate a new **API Key**.  When creating a new API key, the user will be prompted to enter a name. The name will be displayed together with the API key in the list.
API Keys can also be revoked by clicking the menu icon to the right of the key and selecting *Revoke API Key*. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/7347291-usermenu-apikeys.jpg" width="100%" />
</figure>

A user may wish to have only one key for all external applications, however a more typical and secure approach is to create a new key for each application. This way, if the integration needs to be disabled, this can be achieved by revoking the associated API key.

???+ success "Tip: Click to Copy API Key"
    The API Key is automatically selected and copied when clicked. This means that you don't have to select the whole key.

#### Connected Accounts
This section lets users manage their **Connected Accounts**, 3rd-party accounts that Cognigy.AI can connect to in order to make it easier to deploy to certain platforms. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/ca44eac-usermenu-accounts.jpg" width="100%" />
</figure>

#### Extended Menu
The Profile page includes an extended menu accessed by clicking the three dots in the top right hand corner of the page. This provides access to the following functions:
  * Edit Profile
  * Copy Organization ID (Used for [Single Sign-on]({{config.site_url}}ai/installation/single-signin-SAML2))
  * Delete Account