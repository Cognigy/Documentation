# Global Filter

## Global Filter options

<div class="divider"></div>

Cognigy Insights comes with so-called global filters. These filters can be set in a selection menu when clicking on the filter icon next to the user menu icon on the top right-hand side of the user interface. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/ce5e349-tooltip_Insights_Filter.svg" width="100%" />
  <figcaption>Filter icon with tooltip</figcaption>
</figure>

Global filter always will be available no matter where you navigate. Once you have changed the filters, all of the data visualized in any location will respect your filter configuration.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/06794a7-Global_filter_1_250.svg" width="100%" />
  <figcaption>Global filter menu</figcaption>
</figure>

???+ info "Note"
    **The global filter options are available in all applications running in Cognigy Insights.**

???+ warning "Note"
    **Every change in filter settings needs to be confirmed with “Apply” to be active.**

Several filter menus provide a "**Negate**" slide bar. When active all but the selected endpoints will be analyzed. 


## Timeframe
You can select the time period or set it individually with a date picker in a calendar.

Available preset time periods are: 

- Last 7 days
- Last 30 days
- Last 365 days
- This month
- This year
- Custom period (freely selectable with the entry of start date and end date)

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/f1a1b85-Global_filter_Timeframe_2.svg" width="100%" />
  <figcaption>Timeframe filter options</figcaption>
</figure>

## Endpoints

Endpoints make sure that the channel-specific input and output (Images, Galleries, Voice) gets converted to the standardized Input object. This way, a Cognigy Flow needs to be developed only once, after which it can be deployed to many different channels by configuring Endpoints.
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
  <img class="image-center" src="{{config.site_url}}insights/images/c4625a8-5268_Global_filter_Interaction_Panel_2.svg" width="100%" />
  <figcaption>Insights Dashboard for "Interaction Panel" filter</figcaption>
</figure>

## Snapshot
A Snapshot is an exported Agent and includes required resources.
The selection list displays the available snapshots which can be analyzed.
You can find more information here: [Snapshots](https://docs.cognigy.com/docs/snapshots-1)


You can select one or more snapshots to be analyzed. 

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/cef67ff-Global_filter_Snapshot_1.svg" width="100%" />
  <figcaption>Snapshot filter options</figcaption>
</figure>

## Locales
This filter considers the locales of the available conversations. 

You can select one or more Locales to be analyzed. 

Using the **"Negate"** slider bar "all but the selected" locales will be analyzed.

You can find more information here: [Localization]({{config.site_url}}ai/resources/manage/localization/).

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/2e76d97-Global_filter_Locales_2.svg" width="100%" />
  <figcaption>Local filter options</figcaption>
</figure>

???+ info "Note"
    To clear all filter settings at once click on the "**Reset filters**" button.  We will show it if the value of any global filter is not equal to the default value.

## Updating Analytics records using Rest API

<div class="divider"></div>


If you intend to update certain analytics fields on Insights dashboards for an ongoing session you need to use the update API for analytics, available on [https://api-trial.cognigy.ai/openapi](https://api-trial.cognigy.ai/openapi).
More information you can find here: [Using the API]({{config.site_url}}ai/developer-guides/using-api/).

Using the "analytics" API you need to specify **userId**, **sessionId** and **inputId** in the request.

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

- You can reload on any Insights Page and it will restore the global filters you selected before.
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