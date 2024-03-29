---
 title: "Facebook Messenger" 
 slug: "facebook-messenger" 
 hidden: false 
---
# Facebook Messenger

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/92b8453-EP_Facebook_messenger.png" width="100%" />
</figure>

Within our **Cognigy.AI** platform you're able to connect your Cognigy resources to your **Facebook Messenger** channel by using our Messenger Endpoint integration. 

## Generic Endpoint Settings

Find out about the generic endpoint settings available with this endpoint on the following pages:

- [Endpoints Overview]({{config.site_url}}ai/endpoints/overview/) 
- [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer Functions]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Session Management]({{config.site_url}}ai/endpoints/session-management/)
- [Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/)
- [Real Time Translation Settings]({{config.site_url}}ai/endpoints/real-time-translation-settings)  


!!! tip "Supports Inject & Notify"
    You can use the **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)** functionality with this type of Endpoint.

## Channel Specific Settings

<div class="divider"></div>

## Facebook Page Setup

This dropdown menu is where your Cognigy.AI is provided with the credentials to access your Facebook Messenger App.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/940f0ef-facebookMessageSettings.PNG" width="100%" />
</figure>

### Page Access Token

The page access token is provided by Facebook as an authentication variable to allow communication with your page.

### App ID

This value is a unique App ID used by Facebook to identify you app.

### App Secret

Your Facebook app's Secret that is a randomly generated value from Facebook. The value of this field must be the SECRET associated with the Page access token and App ID entered the previous fields.

!!! note "Help Center"
    For more information on how to configure the **Page Access Token**, **App ID** an   **App Secret** head over to our Help Center article [**here**](https://support.cognigy.com/hc/en-us/articles/360015980660-Facebook-Messenger-Deploy-an-Endpoint#2-2-add-the-messenger-product-0-6).

## Facebook Profiles

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/FacebookProfilesSettings.PNG" width="100%" />
</figure>


In your Facebook Endpoint, you will notice a section called ``Facebook Profiles``. Here you can enable / disable several settings regarding how to handle contact profiles for the Facebook Endpoint.

### Request Profile Data

The ``Request Profile Data`` exposes a contact's Facebook Profile information, such as their name and profile picture, in your Flow. If enabled, you can access this profile information in ci.data.profile in your Flow. The table below shows some common information you will find in the ci.data.profile object.

<table>
    <tr>
    <th>Key</th>
    <th>Description</th> 
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Id</td>
    <td style="padding: 20px;">
      The Facebook user's PSID. Each Facebook user has a unique id for each Facebook Page they talk to.
    </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">first_name</td>
    <td style="padding: 20px;">
The user's first name.
      </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">last_name</td>
    <td style="padding: 20px;">
      The user's last name.
      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">profile_pic</td>
    <td style="padding: 20px;">
      A url linking to the profile picture of the user.
      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">locale</td>
    <td style="padding: 20px;">
      Information about the user's locale.
      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">timezone</td>
    <td style="padding: 20px;">
      The user's timezone.
      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">gender</td>
    <td style="padding: 20px;">
      The user's gender.
      </td>
  </tr>
</table>

!!! warning "Data exposed in ci.data.profile"
    Not every user on Facebook will have the same data exposed in the profile object. This depends solely on what data they have on their Facebook profile, and what their privacy settings are.

### Update Contact Profiles

If this setting is enabled, then the information a Facebook user has on their profile will be copied over to their contact profile. This is very useful in order to easily fill the contact profile with useful data.

### Merge Contact Profiles

Each user on Facebook has a unique ID, a PSID, for each Facebook page they talk to. This means that if you own two or more Facebook Pages, you will not be able to immediately identify users across these pages, since they will have a different ID for each page. However, if you enable this setting, we will fetch all of a user's PSIDs for your pages and merge these profiles into one profile. This means that you can easily identify a single user across all of your pages, and thus personalize the chat even more.

!!! warning "Requires a Business"
    In order to perform the API calls necessary to get all the PSIDs for the user, the same Business needs to own all the Facebook Pages. More information at: [https://www.facebook.com/business](https://www.facebook.com/business)

## Messenger Settings

Here you can configure whether typing indicators should be used and how many milliseconds of delay there should be between each message.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/940f0ef-facebookMessageSettings.PNG" width="100%" />
</figure>

!!! note "Help Center"
  For more detailed information on how to set up a **Facebook Messenger** Endpoint, refer to our Help Center articles [**here**](https://support.cognigy.com/hc/en-us/articles/360015980560-Facebook-Messenger-Intro).

## More information

* [HelpCenter: Facebook Messenger Intro](https://support.cognigy.com/hc/en-us/articles/360015980560-Facebook-Messenger-Intro)
* [HelpCenter: Facebook Messenger Deploy an Endpoint](https://support.cognigy.com/hc/en-us/articles/360015980660-Facebook-Messenger-Deploy-an-Endpoint)
* [HelpCenter: Facebook Messenger Use Facebook Handover ](https://support.cognigy.com/hc/en-us/articles/360016021919-Facebook-Messenger-Use-Facebook-Handover)
* [HelpCenter: Facebook Messenger Facebook Tools](https://support.cognigy.com/hc/en-us/articles/360015980780-Facebook-Messenger-Facebook-Tools)