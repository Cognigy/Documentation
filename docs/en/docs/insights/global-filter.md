---
 title: "Global Filter" 
 slug: "global-filter" 
 hidden: false 
---
# Global Filter

## Global Filter options

<div class="divider"></div>

Cognigy Insights comes with so-called global filters. These filters can be set in a selection menu when clicking on the filter icon next to the user menu icon on the top right-hand side of the user interface. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/ce5e349-tooltip_Insights_Filter.svg" width="100%" />
  <figcaption>Filter icon with tooltip</figcaption>
</figure>

Global filter always will be available no matter where you navigate. Once you have changed the filters, all the data visualized in any location will respect your filter configuration.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/06794a7-Global_filter_1_250.png" width="100%" />
  <figcaption>Global filter menu</figcaption>
</figure>

!!! note
    **The global filter options are available in all applications running in Cognigy Insights.**

!!! warning
    **Every change in filter settings needs to be confirmed with “Apply” to be active.**

Several filter menus provide a "**Negate**" slide bar. When active all but the selected endpoints will be analyzed. 


## Timeframe

<div class="divider"></div>

!!! note
    In v4.16 timeframe filter was updated to show currently selected date range. The widget is now placed on the top of the page.

    <figure>
    <img class="image-center" src="{{config.site_url}}insights/images/timeframe-top.png" width="100%" />
    <figcaption>Timeframe filter showing selected range of Dates.</figcaption>
    </figure>
    

You can select the time period or set it individually with a date picker in a calendar.

Available preset time periods are: 

- Last 7 days
- Last 30 days
- Last 365 days
- This month
- This year
- Custom period (freely selectable with the entry of start date and end date)

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/f1a1b85-Global_filter_Timeframe_2.png" width="50%" />
  <figcaption>Timeframe filter options</figcaption>
</figure>

### Narrowing results to minutes

[![Version badge](https://img.shields.io/badge/Added in-v4.16-blue.svg)]({{config.site_url}})

It is possible to select hours for the chosen timeframe. This might be helpful if needed to narrow the result to a more precise range. For this, enable "Select time"
option when setting a Custom Timeframe

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/select-time.png" width="50%" />
  <figcaption>Custom timeframe with minute precision</figcaption>
</figure>

## Endpoints

<div class="divider"></div>

Endpoints make sure that the channel-specific input and output (Images, Galleries, Voice) gets converted to the standardized Input object. This way, a Cognigy Flow needs to be developed only once, after which it can be deployed to many channels by configuring Endpoints.
Endpoints examples are Webchat / Voice Gateway, Microsoft Teams, Google Actions,…
You can find more information here: [Endpoints]({{config.site_url}}ai/endpoints/overview/)

You can select one or more Endpoint(s) to be analyzed. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/1fe8b3c-Endpoints_filter.svg" width="100%" />
  <figcaption>Endpoints filter options</figcaption>
</figure>

**Admin Console (Interaction Panel) filter**

As of Cognigy.AI 4.10.0  you can filter the Insights reports for the admin console (or Interaction Panel) also.

So if you have tested the Virtual Agent using the Interaction Panel, you now will be able to fetch the Insights reports for this also.

- Open the global filter "Endpoints". 
- Select "Interaction Panel" and confirm with "Apply" to get the analytics data displayed.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/c4625a8-5268_Global_filter_Interaction_Panel_2.png" width="100%" />
  <figcaption>Insights Dashboard for "Interaction Panel" filter</figcaption>
</figure>

## Snapshots

<div class="divider"></div>

!!! note
    Before the version 4.15, it was only possible to inspect the data of a single snapshot at a time.

A Snapshot is an exported Agent and includes required resources.
The selection list displays the available snapshots which can be analyzed.
You can find more information here: [Snapshots](https://docs.cognigy.com/docs/snapshots-1)

By default, we show the **data for all snapshot including the data which was gathered 
without any snapshot (live deployment, here "None" option)**.

[![Version badge](https://img.shields.io/badge/Added in-v4.15-blue.svg)]({{config.site_url}})

You can granually inspect the analytics data by choosing only the preferred snapshots, also by using the "negate" option - in this case you will be excluding certain options. 

For example, selecting "None" and "Negate" will show all the data excluding the one gathered from endpoints without selected snapshots.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/snapshots.png" width="50%" />
  <figcaption>The new "Snapshots" global filter</figcaption>
</figure>

## Locales

<div class="divider"></div>

This filter considers the locales of the available conversations. 

You can select one or more Locales to be analyzed. 

Using the **"Negate"** slider bar "all but the selected" locales will be analyzed.

You can find more information here: [Localization]({{config.site_url}}ai/resources/manage/localization/).

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/2e76d97-Global_filter_Locales_2.svg" width="100%" />
  <figcaption>Local filter options</figcaption>
</figure>

!!! note
    To clear all filter settings at once click on the "**Reset filters**" button.  We will show it if the value of any global filter is not equal to the default value.

## Rating

[![Version badge](https://img.shields.io/badge/Added in-v4.17-blue.svg)]({{config.site_url}})

This filter allows you to select the analytics data based on the last user rating given in a session. By default, all data is shown, regardless of whether user feedback is given or missing.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/rating.png" width="50%" />
  <figcaption>Rating filter</figcaption>
</figure>

!!! note
    See documentation for [Request rating Node]({{config.site_url}}ai/flow-nodes/other-nodes/request-rating/)


## Updating Analytics records using Rest API

<div class="divider"></div>


If you intend to update certain analytics fields on Insights dashboards for an ongoing session you need to use the update API for analytics, available on [https://api-trial.cognigy.ai/openapi](https://api-trial.cognigy.ai/openapi).
More information you can find here: [Using the API]({{config.site_url}}ai/developer-guides/using-api/).

To use the "analytics" API, you need to specify **userId**, **projectId**, **sessionId** and **inputId** in the request.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/0f15d77-OpenAPI_Analytics_v20_2.svg" width="100%" />
  <figcaption>OpenAPI "analytics" for updating analytics records</figcaption>
</figure>

## Sharing application URL

<div class="divider"></div>


Cognigy is always striving to improve conversational data analysis and processing for clients and provides the ability to use shareable URLs for the Insights application.

In detail:
If you navigate to a specific destination within Insights and apply global filters, copying the URL from your address bar and sharing it with a team member, opening the URL will bring the application into the same state (same tool, same selected data, same filters applied). 


Your advantages:

- You can reload on any Insights Page, and it will restore the global filters you selected before.
- You can reload on an open Transcript in the Transcript Explorer and you will land on the same page with the transcript open.
- You can reload on the Message Explorer while having a "search" applied and get to the same as you were in before reloading.
- You can reload on the Message Explorer while having a message selected and get to the same as you were in before reloading.



## More information
<div class="divider"></div>

- [Cognigy Insights]({{config.site_url}}insights/cognigy-insights/)

- [Dashboard Overview]({{config.site_url}}insights/dashboard-overview/)

- [Dashboard Engagement]({{config.site_url}}insights/dashboard-engagement/)

- [Dashboard NLU Performance]({{config.site_url}}insights/dashboard-nlu-performance/)

- [Step Explorer]({{config.site_url}}insights/step-explorer/)

- [Transcript Explorer]({{config.site_url}}insights/transcript-explorer/)

- [Message Explorer]({{config.site_url}}insights/message-explorer/)

- [Download Report]({{config.site_url}}insights/download-report/)