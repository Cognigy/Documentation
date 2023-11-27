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

Global Filter settings will always be available in Cognigy Insights no matter where you navigate. Once you have changed a Filter setting, all the data visualized in any location will respect your changed Filter configuration.
The Global Filter options are available in all applications running in Cognigy Insights.


!!! note
    The global filter options are available in all applications running in Cognigy Insights.

!!! warning
    Every change in filter settings needs to be confirmed with **Apply** to be active.

Several filter menus provide a **Negate** slide swich. When active, all but the selected options will be analyzed. 

The following global filters are available:

- [Timeframe](#timeframe)
- [Endpoints](#endpoints)
- [Snapshot](#snapshot)
- [Message Rating](#message-rating)

## Timeframe

You can select a preset time frame or set it individually with a date picker.

Available preset time frames are: 

- Last 7 days
- Last 30 days
- Last 365 days
- Today
- This month
- This year
- Custom period, providing date and time picker

If you have changed a time frame, click **Apply**, to confirm and activate the selected ime frame.

### Narrowing results to minutes

It is possible to select hours for the chosen timeframe.
This might be helpful if you need to narrow the result to a more precise range.
To do this, use the slide witch and enable the **Select time** option when setting a **Custom Period** .

## Endpoints

Endpoints make sure that the channel-specific input and output (Images, Galleries, Voice) gets converted to the standardized Input object. This way, a Cognigy Flow needs to be developed only once, after which it can be deployed to many channels by configuring Endpoints.
Endpoint examples are Webchat, Voice Gateway, Microsoft Teams.
For more information, read the [Endpoints](../ai/endpoints/overview.md) documentation.

You can select one or more Endpoint(s) to be analyzed. 

**Admin Console (Interaction Panel) filter**

As of Cognigy.AI 4.10.0, you can filter the Insights reports for the admin console (or Interaction Panel) also.

So if you have tested the Virtual Agent using the Interaction Panel, you now will be able to fetch the Insights reports for this also.

- Open the global filter **Endpoints**. 
- Select "Interaction Panel" and confirm with **Apply** to get the analytics data displayed.

## Snapshot

!!! note
    Before Cognigy.AI version 4.15, it was only possible to show data of a single Snapshot in Insights. As of this version Insights can show data for **All** Snapshots as a default setting, when no filter is selected.

A Snapshot is an exported Agent and includes required resources.
For more information, read the [Snapshots](../ai/resources/deploy/snapshots.md) documentation.

To use the **Snapshot** filter, proceed as follows:

1. Click ![insight-filter-blue](../../assets/icons/insight-filter-blue.svg) to open the side bar menu of global filters on the right hand side.
2. Click **Snapshot** to open the settings drop-down menu.
3. Use one of the following filter options:

     - Select one of the available Snapshots you want to analyze. 
     - Enter the name of a Snapshot in the **Type to search** field, and click ![filter](../../assets/icons/filter.svg) to find the selected Snapshot and select.
     - Select **None** to obtain analysis data of all available endpoint data, with the exception of Snapshot data.
     - Enable **Negate** using the slide switch and select Snapshots you want to exclude for your analysis. All but the selected Snapshots will be considered for the analysis. 
        
4. Click **Apply** to activate the selected filter settings.

Everytime you changed a setting, click **Apply** to activate the changed filter settings.

## Locales

**Locales** filter considers the locales of available conversations for analysis. You can select one or more Locales to be analyzed. 
For more information, read the [Localization](../ai/resources/manage/localization.md) documentation.

To use the **Locales** filter, proceed as follows:

1. Click ![insight-filter-blue](../../assets/icons/insight-filter-blue.svg) to open the side bar menu of global filters on the right hand side.
2. Click **Locales** to open the settings drop-down menu.
3. Select the Locale you want to filter for analysis or optionally, if you have a longer Locales list, enter the language code in the **Type to Search** field, and click ![filter](../../assets/icons/filter.svg) to find the selected Locales displayed.
4. Click **Apply** to activate the filter setting.

If you want to exclude some Locales for your analysis, select them in the list and activate the **Negate** slider switch. When enabled and you confirmed  the settings with **Apply"**, all but the selected Locales will be considered for the analysis.

Everytime you changed a setting, click **Apply** to activate the changed filter settings.

## Message Rating

This filter allows you to select the analytics data based on the last user ratings given in a session. By default, **All** data is shown, regardless of whether user feedback is given or missing. In Live Agent this global filter is not available.
For more information, read the [Request Rating Node](../ai/flow-nodes/other-nodes/request-rating.md) documentation.

| Settings      | Description                                                          |
| --------------|----------------------------------------------------------------------|
| All           | Default setting. All available rating data will be used for analysis.|
| Positive      | Only positive rating data will be used for analysis.                 |
| None          | No rating data will be considered for analysis.                      |
| Negative      | Only negative rating data will be used for analysis.                 |
| Negate        | When enabled, all filter options but the selected are active.        |

Everytime you changed a setting, click **Apply** to activate the changed filter settings.

## Updating Analytics records using Rest API

If you intend to update certain analytics fields on Insights dashboards for an ongoing session, you need to use the update API for analytics, available on [https://api-trial.cognigy.ai/openapi](https://api-trial.cognigy.ai/openapi).
For more information, read the [Using the API](../ai/developer-guides/using-api.md) documentation.

To use the analytics API, you need to specify **userId**, **projectId**, **sessionId** and **inputId** in your request.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/0f15d77-OpenAPI_Analytics_v20_2.svg" width="100%" />
  <figcaption></figcaption>
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