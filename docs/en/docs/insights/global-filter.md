---
title: "Global Filters" 
slug: "global-filter" 
hidden: false 
---

# Global Filters

Cognigy Insights enables you to select available Endpoint data for analysis using global filters. Once you have changed a filter setting, the corresponding data will be considered for the analysis report in Insights. The Global Filter options are available in all applications running in Cognigy Insights, and filter settings have a global effect on all applications.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/Insights_overview_dashboard.png" width="100%" />
  <figcaption>Insights - Global Filter</figcaption>
</figure>

The following global filters are available:

- [Timeframe](#timeframe)
- [Endpoints](#endpoints)
- [Snapshot](#snapshot)
- [Message Rating](#message-rating)

## Timeframe

To analyze a defined range of Endpoint data, you can either set a preset time frame or choose specific dates using a date picker.

Available preset time frames include:

- Last 7 days
- Last 30 days
- Last 365 days
- Today
- This month
- This year
- Custom period, providing date and time picker

If you have changed a time frame, click **Apply** to confirm and activate the selected time frame.

### Narrowing Results to Minutes

You can select hours for the chosen time frame. This might be helpful if you need to narrow the result to a more precise range of times.

To define a date and times, such as hours and minutes, proceed as follows:

1. Click the global time frame filter in the top right corner next to the user menu to open the list of time frames.
2. Click **Custom Period** for setting an individual time frame.
3. Enable the **Select time** option using the slide switch.
4. Click **Start Date** to open a date picker calendar.
5. Click ![date-picker](../assets/icons/date-picker.svg) and select a start date.
6. Click ![time-picker](../assets/icons/time-picker.svg)and move the clock hand successively to the required hour and minute in the 24h circle.
7. Select **End date** and repeat steps 5 and 6. 
8. Click **Apply** to activate the selected filter settings.

## Endpoints

Endpoints ensure that channel-specific input and output (images, galleries, voice) are converted to the standardized Input object. This way, a Cognigy Flow needs to be developed only once, after which it can be deployed to many channels by configuring Endpoints. Examples of Endpoints include Webchat, Voice Gateway, and Microsoft Teams.
For more information, read the [Endpoints](../ai/endpoints/overview.md) documentation.

You can select one or more Endpoints to be analyzed.

To use the **Endpoints** filter, proceed as follows:

1. In the top-right corner, click ![insight-filter-blue](../assets/icons/insight-filter-blue.svg) to open the sidebar of global filters.
2. Click **Endpoints** to open the settings drop-down menu.
3. Choose one of the following filter settings:
     - **Interaction Panel** — if you have tested the virtual agent in your Cognigy.AI project using the Interaction Panel, you can fetch these data for analysis in Insights, using this filter. For more information, read the [Interaction Panel](../ai/resources/agents/agents.md#interaction-panel) documentation.
     - **Endpoints** — select one of the available Endpoints you want to analyze. 
     - **Type to search** field — enter the name of an Endpoint, click ![filter](../assets/icons/filter.svg) to find the selected Endpoint.
     - **Negate** — use the slide switch to activate and select the Endpoints you want to exclude for your analysis. All but the selected Endpoints will be considered for analysis.  
4. Click **Apply** to activate the filter settings. The analytics data will be displayed. 

After changing the settings, click **Apply** to activate the changed filter settings.

## Snapshot

A Snapshot is an exported Agent and includes required resources.
For more information, read the [Snapshots](../ai/resources/deploy/snapshots.md) documentation.

To use the **Snapshot** filter, proceed as follows:

1. In the top-right corner, click ![insight-filter-blue](../assets/icons/insight-filter-blue.svg)  to open the sidebar menu of global filters.
2. Select **Snapshot**.
3. Select one of the following filter settings:
     - **Snapshots** — select one of the available Snapshots you want to analyze. 
     - **Type to search** field — enter the name of a Snapshot, click ![filter](../assets/icons/filter.svg) to find the selected Snapshot.
     - **None** — select this option to obtain analysis data of all available endpoint data, except for Snapshot data.
     - **Negate** — use the slide switch to activate and select the Snapshots you want to exclude for your analysis. All but the selected Snapshots will be considered for analysis.  
4. Click **Apply** to activate the selected filter settings. The analytics data will be displayed. 

After changing the settings, click **Apply** to activate the changed filter settings.

## Locales

The **Locales** filter considers the locales of available conversations for analysis. You can select one or more Locales to be analyzed. 
For more information, read the [Localization](../ai/resources/manage/localization.md) documentation.

To use the **Locales** filter, proceed as follows:

1. In the upper-right corner, click ![insight-filter-blue](../assets/icons/insight-filter-blue.svg) to open the sidebar menu of global filters.
2. Select **Locales**. 
3. Choose one of the following filter settings:
     - **Locales** — select one of the available Locales you want to analyze. 
     - **Type to search** field — enter the language code of a Locale, click ![filter](../assets/icons/filter.svg) to find the selected Locale.
     - **Negate** — use the slide switch to activate and select the Locales you want to exclude for your analysis. All but the selected Locales will be considered for analysis.  
4. Click **Apply** to activate the filter settings. The analytics data will be displayed. 

After changing the settings, click **Apply** to activate the changed filter settings.

## Message Rating

This filter allows you to select analytics data based on the last user ratings given in a session. By default, all data is shown, regardless of whether user feedback is given or missing.
For more information, read the [Request Rating Node](../ai/flow-nodes/other-nodes/request-rating.md) documentation.

| Settings | Description                                                                 |
|----------|-----------------------------------------------------------------------------|
| All      | Default setting. All available rating data will be considered for analysis. |
| Positive | Only positive rating data will be considered for analysis.                  |
| None     | No rating data will be considered for analysis.                             |
| Negative | Only negative rating data will be considered for analysis.                  |
| Negate   | When enabled, all filter options but the selected are active.               |

After changing the settings, click **Apply** to activate the updated filter settings, and the corresponding analytics data will be displayed.

## Sharing an Application URL

Cognigy helps analyze customer conversations.
Easily share insights by copying and distributing URLs.
When you share a specific URL with global filters applied, your team members will see the same data and filters as you.
This approach ensures consistency across different sessions and scenarios.

Using shareable URLs provides the following benefits:

- You can reload any Insights Page, and it will restore the global filters you previously selected.
- When reloading an open Transcript in the Transcript Explorer, you will land on the same page with the transcript open.
- Reloading the Message Explorer with an applied search result will take you back to the same point as before reloading.
- Reloading on the Message Explorer while a message is selected will return you to the same state as before reloading.

## More Information

- [Cognigy Insights](cognigy-insights.md)
- [Download Report](download-report.md)
- [Interaction Panel](../ai/tools/interaction-panel/interaction-panel.md)
- [Snapshots](../ai/resources/deploy/snapshots.md)
- [Endpoints](../ai/resources/deploy/endpoints.md)
- [Localization](../ai/resources/manage/localization.md)