# Cognigy Insights 

[![Version badge](https://img.shields.io/badge/Added in-v4.10.0-blue.svg)](https://shields.io/)
## Description

<div class="divider"></div>


Cognigy is committed to providing you with the tools you need to improve the customer experience of your customers.

Cognigy.AI has integrated analytics reporting functionalities, as well as an ODATA, interface our customers can rely on to retrieve their raw analytics data. Our integrated analytics dashboard provides a range of key metrics to understand the usage and the performance of your bots. We felt that it is time to provide an enhanced experience when it comes to understanding the performance of your bots - hence we have created a new product called **Cognigy Insights** which entirely replaces the static analytics dashboard with a whole set of new tools.

## Dashboard

<div class="divider"></div>


Cognigy Insights is a new application that replaces the old and static analytics dashboard. Insights keeps track of the data of your customers while they interact with your virtual agents and makes that data available on a variety of new dashboards and new tools.

Insights is a new application that co-exists side-by-side with Cognigy.AI and is tightly integrated into the Cognigy.AI product experience.

With Cognigy.AI 4.10.0 we improved our capabilities to create metrics to have custom metrics for each service.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/ca1ca18-Agent_dashboard.svg" width="100%" />
  <figcaption>Select your Agent you intend to analyze</figcaption>
</figure>

- Start with creating a new Agent or selecting an existing Agent in your Cognigy.AI.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/f21c0dc-Cognigy.AI_start_Insight_application_.svg" width="100%" />
  <figcaption>Agent dashboard with sidebar menu - select "Insights" to switch to the analytics solution</figcaption>
</figure>

- In order to switch to Cognigy Insights, open the sidebar menu in Cognigy.AI and click on "**Insights**". We have used this option prior to guiding users to our [Analytics](doc:agent-analytics) application.

???+ info "Note"
    **When you are in an agent-specific route in Cognigy.AI (Agent is selected) you should see 'Insights' in the [user menu](doc:cognigy-insights#user-menu) pop-up. You can navigate to Insights of that Agent when you click on the menu item.**

When switching from Cognigy.AI to Cognigy Insights you will be redirected to the Insights **Dashboard** section, starting on the "Overview" dashboard.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/91b658b-Dashboard_Overview_2.svg" width="100%" />
  <figcaption>Insights Overview dashboard</figcaption>
</figure>

You will find all sorts of different report types that visualize key metrics of your currently selected virtual agent. 

Cognigy provides three categories of dashboards available via the Insight sideboard menu:

- [Overview Dashboard](doc:dashboard) (deals with general analytics)  
- [Engagement  Dashboard](doc:dashboard-engagement) (analytics focused on customer reactions in conversations)
- [NLU Performance Dashboard](doc:dashboard-nlu-performance) (these analytics relates to Natural Language Understanding) 


## Local filter

<div class="divider"></div>

???+ info "Note"
    **The local filter options are specific to an application and will be described in the corresponding section.**

## Global filter

<div class="divider"></div>

Cognigy Insights comes with so-called global filters. These filters will be visible no matter where you navigate. Once you have changed the filters, all of the data visualized in any location will respect your filter configuration.

- Timeframe
- Endpoints
- Snapshot
- Locales

- To open the global filter menu click on the filter icon next to the user menu icon on the top right-hand side of the UI.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/24424ad-Dashboard_Overview_1.svg" width="100%" />
  <figcaption>The global filter menu is open</figcaption>
</figure>

???+ info "Note"
    **The global filter options are available in all applications running in Cognigy Insights.**
    **More information about global filter you can find here: [Global Filter](doc:global-filter).**

## User menu

<div class="divider"></div>


You can find the [user menu](doc:user-menu) in the upper right corner of the screen (user profile icon)

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/32749de-tooltip_Insights_user_menu_80.svg" width="100%" />
  <figcaption>User menu icon with tooltip</figcaption>
</figure>

- **[MyProfile](doc:my-profile)**
In the "**Preferences**" section the **user interface language** can be selected.
Language settings in Insights or Cognigy.AI have automatically effect on both applications.
Insights currently supports the following user interface languages: **English**, **German**, **Korean**, **Japanese** and **Spanish**.
You can find more information here: [My Profile](doc:my-profile)

- **[Access Control](doc:access-control)**
The Insights user administration allows you to create new user accounts.
Users need to have sufficient permissions for access to the Insights applications.   

- **[Usage Statistics](doc:usage-statistics)** 
This section shows the total number of user conversations and displays a timeline-related number of conversations as a line chart.  You can select the time period in a drop-down menu. 

- **[Documentation](doc:welcome)** 
Clicking on this menu item leads you to the Cognigy product documentation.


- **[Cognigy.AI](doc:projects)**
You can always go back to Cognigy.AI and your virtual Agent. Open the user pop-up menu at the right top corner of your screen and click on the "Cognigy.AI" menu item.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/bdc1aab-User_menu_my_profile_250.svg" width="100%" />
  <figcaption>User menu</figcaption>
</figure>

## Main menu

<div class="divider"></div>


Using the sidebar menu of Insights you can select all the available data analytical applications to analyze the Agents' performance to improve the Agent for better understanding and improved user experience.
The currently selected application is highlighted in a primary color and will be displayed next to the agent at the top as well.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/cc1edb3-Insights_sidebar_menu_.svg" width="100%" />
  <figcaption>Insights sidebar main menu</figcaption>
</figure>

<div class="divider"></div>


???+ success "Insights product introduction"
    **To advance your understanding you can see our live presentation of Cognigy Insights here:**

    - [Insights product introduction / German](https://youtu.be/kCkUrHM9dQo)
    - [Insights product introduction / English](https://youtu.be/hYB2iQ_dT5g)

## More information

- [Global Filter](doc:global-filter)

- [Dashboard Overview](doc:dashboard)

- [Dashboard Engagement](doc:dashboard-engagement)

- [Dashboard NLU Performance](doc:dashboard-nlu-performance)

<div class="divider"></div>


- [Step Explorer](doc:step-explorer)

- [Transcript Explorer](doc:transcript-explorer)

- [Message Explorer](doc:message-explorer)