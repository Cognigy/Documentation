---
 title: "Global Filter" 
 slug: "global-filter" 
 hidden: false 
---
# Global Filter

## Global Filter options

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/Insights_overview_dashboard.png" width="100%" />
  <figcaption>Insights - Global Filter</figcaption>
</figure>

Cognigy Insights has global filters. These filters can be set in a selection menu when clicking on the filter icon next to the user menu icon on the top right-hand side of the user interface. 

Global filter will always be available no matter where you navigate. Once you have changed the filters, all the data visualized in any location will respect your filter configuration.

!!! note
    The global filter options are available in all applications running in Cognigy Insights.

!!! warning
    Every change in filter settings needs to be confirmed with **Apply** to be active.

Several filter menus provide a **Negate** slide bar. When active, all but the selected endpoints will be analyzed. 

The following global filters are available:

- [Timeframe](#timeframe)
- [Endpoints](#endpoints)
- [Snapshot](#snapshots)
- [Message Rating](#message-rating)

## Timeframe

You can select the time period or set it individually with a date picker in a calendar.

Available preset time periods are: 

- Last 7 days
- Last 30 days
- Last 365 days
- Today
- This month
- This year
- Custom period (date picker via calendar)

### Narrowing results to minutes

It is possible to select hours for the chosen timeframe.
This might be helpful if needed to narrow the result to a more precise range.
To do this, enable the **Select time**
option when setting a Custom Timeframe.

## Endpoints

Endpoints make sure that the channel-specific input and output (Images, Galleries, Voice) gets converted to the standardized Input object. This way, a Cognigy Flow needs to be developed only once, after which it can be deployed to many channels by configuring Endpoints.
Endpoint examples are Webchat, Voice Gateway, Microsoft Teams.
You can find more information here: [Endpoints](../ai/endpoints/overview.md)

You can select one or more Endpoint(s) to be analyzed. 

**Admin Console (Interaction Panel) filter**

As of Cognigy.AI 4.10.0, you can filter the Insights reports for the admin console (or Interaction Panel) also.

So if you have tested the Virtual Agent using the Interaction Panel, you now will be able to fetch the Insights reports for this also.

- Open the global filter **Endpoints**. 
- Select "Interaction Panel" and confirm with **Apply** to get the analytics data displayed.

## Snapshots

!!! note
    Before the version 4.15, it was only possible to inspect the data of a single snapshot at a time.

A Snapshot is an exported Agent and includes required resources.
The selection list displays the available snapshots which can be analyzed.
For more information, read the [Snapshots](../ai/resources/deploy/snapshots.md) documentation.

By default, we show the **data for all snapshots including the data which was gathered 
without any snapshot (live deployment, here "None" option)**.

You can granually inspect the analytics data by choosing only the preferred snapshots,
also by using the "negate" option — in this case, you will be excluding certain options. 

For example, selecting "None" and "Negate" will show all the data excluding the one gathered from endpoints without selected snapshots.

## Locales

This filter considers the locales of the available conversations. 

You can select one or more Locales to be analyzed. 

Using the **Negate** slider bar "all but the selected" locales will be analyzed.

For more information, read the [Localization](../ai/resources/manage/localization.md) documentation.

!!! note
    To clear all filter settings at once, click on the **Reset filters** button.  We will show it if the value of any global filter is not equal to the default value.

## Message Rating

This filter allows you to select the analytics data based on the last user rating given in a session. By default, all data is shown, regardless of whether user feedback is given or missing.

For more information, read the [Request rating Node](../ai/flow-nodes/other-nodes/request-rating.md) documentation.

## Updating Analytics records using Rest API

If you intend to update certain analytics fields on Insights dashboards for an ongoing session, you need to use the update API for analytics, available on [https://api-trial.cognigy.ai/openapi](https://api-trial.cognigy.ai/openapi).
More information you can find here: [Using the API](../ai/developer-guides/using-api.md).

To use the "analytics" API, you need to specify **userId**, **projectId**, **sessionId** and **inputId** in the request.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/0f15d77-OpenAPI_Analytics_v20_2.svg" width="100%" />
  <figcaption>OpenAPI "analytics" for updating analytics records</figcaption>
</figure>

## Sharing application URL

Cognigy is always striving to improve conversational data analysis and processing for clients and provides the ability to use shareable URLs for the Insights application.

In detail:
If you navigate to a specific destination within Insights and apply global filters, copying the URL from your address bar and sharing it with a team member, opening the URL will bring the application into the same state (same tool, same selected data, same filters applied). 

Your advantages:

- You can reload on any Insights Page, and it will restore the global filters you selected before.
- You can reload on an open Transcript in the Transcript Explorer, and you will land on the same page with the transcript open.
- You can reload on the Message Explorer while having a "search" applied and get to the same as you were in before reloading.
- You can reload on the Message Explorer while having a message selected and get to the same as you were in before reloading.

## More Information

- [Cognigy Insights](cognigy-insights.md)
- [Download Report](download-report.md)