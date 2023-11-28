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

Cognigy Insights enables you to select available Endpoint data for analysis using global filters. Once you have changed a filter setting, the corresponding data will be considered for the analysis report in Insights.
The Global Filter options are available in all applications running in Cognigy Insights.

!!! note
    The global filter options are available in all applications running in Cognigy Insights.

!!! warning
    Every change in filter settings needs to be confirmed with **Apply** to be active.


The following global filters are available:

- [Timeframe](#timeframe)
- [Endpoints](#endpoints)
- [Snapshot](#snapshot)
- [Message Rating](#message-rating)

## Timeframe

You can select a preset time frame or set it individually using a date picker.

Available preset time frames are: 

- Last 7 days
- Last 30 days
- Last 365 days
- Today
- This month
- This year
- Custom period, providing date and time picker

If you have changed a time frame, click **Apply**, to confirm and activate the selected time frame.

### Narrowing results to minutes

It is possible to select hours for the chosen timeframe.
This might be helpful if you need to narrow the result to a more precise range.

To define date, and hours, and minutes, do the following: 

1. Click the global time frame filter at the top right corner next to the user menu to open the list of time frames. 
2. Click **Custom Period** for setting an individual time frame.
3. Enable the **Select time** option using the slide switch.
4. Click **Start Date** to open a date picker calendar.
5. Click ![date-picker](../../assets/icons/date-picker.svg) and select a start date.
6. Click ![time-picker](../../assets/icons/time-picker.svg) and move the clock hand successively to the required hour and minute in the 24h circle.
7. Select **End date** and repeat steps 5. and 6. 
8. Click **Apply** to activate the selected filter settings.

## Endpoints

Endpoints make sure that the channel-specific input and output (Images, Galleries, Voice) gets converted to the standardized Input object. This way, a Cognigy Flow needs to be developed only once, after which it can be deployed to many channels by configuring Endpoints.
Endpoint examples are Webchat, Voice Gateway, Microsoft Teams.
For more information, read the [Endpoints](../ai/endpoints/overview.md) documentation.

You can select one or more Endpoint(s) to be analyzed.

To use the **Endpoints** filter, proceed as follows:

1. Click ![insight-filter-blue](../../assets/icons/insight-filter-blue.svg) at the top right corner to open the side bar menu of global filters on the right hand side.
2. Click **Endpoints** to open the settings drop-down menu.
3. Choose one of the following filter settings:

     - **Interaction Panel** [^1] - If you have tested the Virtual Agent in your Cognigy.AI project using the Interaction Panel, you can fetch these data for analysis in Insights, using this filter.  
     - **Endpoints** - Select one of the available Endpoints you want to analyze. 
     - **Type to search** field - Enter the name of an Endpoint in the field, and click ![filter](../../assets/icons/filter.svg) to find the selected Endpoint and select.
     - **Negate** - Use the slide switch to activate and select the Endpoints you want to exclude for your analysis. All but the selected Endpoints will be considered for analysis. 
        
4. Click **Apply** to activate the filter settings. The analytics data will be displayed. 

When you changed a setting, click **Apply** to activate the changed filter settings.

[^1]: For more information, read the [Interaction Panel](../ai/resources/agents/agents.md#interaction-panel) documentation.

## Snapshot

!!! note
    Before Cognigy.AI version 4.15, it was only possible to show data of a single Snapshot in Insights. As of this version Insights can show data for **All** Snapshots as a default setting, when no filter is selected.

A Snapshot is an exported Agent and includes required resources.
For more information, read the [Snapshots](../ai/resources/deploy/snapshots.md) documentation.

To use the **Snapshot** filter, proceed as follows:

1. Click ![insight-filter-blue](../../assets/icons/insight-filter-blue.svg)  at the top right corner to open the side bar menu of global filters on the right hand side.
2. Click **Snapshot** to open the settings drop-down menu.
3. Select one of the following filter settings:

     - **Snapshots** - Select one of the available Snapshots you want to analyze. 
     - **Type to search** field - Enter the name of a Snapshot in the field, and click ![filter](../../assets/icons/filter.svg) to find the selected Snapshot and select.
     - **None** - Select this option to obtain analysis data of all available endpoint data, except for Snapshot data.
     - **Negate** - Use the slide switch to activate and select the Snapshots you want to exclude for your analysis. All but the selected Snapshots will be considered for analysis. 
        
4. Click **Apply** to activate the selected filter settings. The analytics data will be displayed. 

When you changed a setting, click **Apply** to activate the changed filter settings.

## Locales

**Locales** filter considers the locales of available conversations for analysis. You can select one or more Locales to be analyzed. 
For more information, read the [Localization](../ai/resources/manage/localization.md) documentation.

To use the **Locales** filter, proceed as follows:

1. Click ![insight-filter-blue](../../assets/icons/insight-filter-blue.svg)  at the top right corner to open the side bar menu of global filters on the right hand side.
2. Click **Locales** to open the settings drop-down menu.
3. Choose one of the following filter settings:

     - **Locales** - Select one of the available Locales you want to analyze. 
     - **Type to search** field - Enter the language code of a Locale in the field, and click ![filter](../../assets/icons/filter.svg) to find the selected Locale and select.
     - **Negate** - Use the slide switch to activate and select the Locales you want to exclude for your analysis. All but the selected Locales will be considered for analysis. 
        
4. Click **Apply** to activate the filter settings. The analytics data will be displayed. 

When you changed a setting, click **Apply** to activate the changed filter settings.

## Message Rating

This filter allows you to select the analytics data based on the last user ratings given in a session. By default, **All** data is shown, regardless of whether user feedback is given or missing. In Live Agent this global filter is not available.
For more information, read the [Request Rating Node](../ai/flow-nodes/other-nodes/request-rating.md) documentation.

| Settings      | Description                                                                |
| --------------|----------------------------------------------------------------------------|
| All           | Default setting. All available rating data will be considered for analysis.|
| Positive      | Only positive rating data will be considered for analysis.                 |
| None          | No rating data will be considered for analysis.                            |
| Negative      | Only negative rating data will be condidered for analysis.                 |
| Negate        | When enabled, all filter options but the selected are active.              |

When you changed a setting, click **Apply** to activate the changed filter settings. The corresponding analytics data will be displayed. 

## Updating Analytics records using Rest API

If you intend to update certain analytics fields on Insights dashboards for an ongoing session, you need to use the update API for analytics, available on [https://api-trial.cognigy.ai/openapi](https://api-trial.cognigy.ai/openapi#patch-/v2.0/analytics).
For more information, read the [Using the API](../ai/developer-guides/using-api.md) documentation.

To use the analytics API, you need to specify following variables:

| Variable      | Description                                                  |
| --------------|--------------------------------------------------------------|
| contact ID    | Your User ID.                                                |
| projectID     | Your specific project ID.                                    |
| sessionID     | Your specific session ID.                                    |
| input ID      |    | 

## Sharing application URL

Cognigy supports the analysis of conversational data for customers. For this reason, Cognigy enables you to use shareable URLs for the Insights application.
If you navigate to a specific destination within Insights and apply global filters, copying the URL from your address bar and sharing it with a team member, opening the URL by the team member will bring his application into the same state as in yours, using the same tool, the same selected data and applied filters. 

Using shareable URLs gives you the following benefits: 

- You can reload on any Insights Page, and it will restore the global filters you selected before.
- You can reload on an open Transcript in the **Transcript Explorer**, and you will land on the same page with the transcript open.
- You can reload on the **Message Explorer** while having a "search" applied and get to the same as you were in before reloading.
- You can reload on the **Message Explorer** while having a message selected and get to the same as you were in before reloading.

## More Information

- [Cognigy Insights](cognigy-insights.md)
- [Download Report](download-report.md)
- [Interaction Panel](../ai/tools/interaction-panel/interaction-panel.md)
- [Snapshots](../ai/resources/deploy/snapshots.md)
- [Endpoints](../ai/resources/deploy/endpoints.md)
- [Localization](../ai/resources/manage/localization.md)