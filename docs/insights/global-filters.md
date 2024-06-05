---
title: "Global Filters" 
slug: "global-filter" 
hidden: false 
---

# Global Filters

[![Version badge](https://img.shields.io/badge/Updated in-v4.70-blue.svg)](../release-notes/4.70.md)

Global Filters enable you to focus your dashboards and explorers on specific datasets by adjusting a set of filters. Global filters are available and effective across all dashboards and explorers and they persists, when you switch from one board to another.
Once you have changed a filter setting, the displayed graphics and charts change adapt to your settings. Reports will also include these changes.

<figure>
  <img class="image-center" src="../../../_assets/insights/global-filters.png" width="100%" />
  <figcaption>Global Filters</figcaption>
</figure>

The following global filters are available:

- [Time Span](#time-span)
- [Endpoints](#endpoints)
- [Snapshots](#snapshots)
- [Locales](#locales)

## Time Span

In order to focus on a specific time span, you can either set a preset time frame or choose specific dates using a date picker.

Available preset time frames include:

| Time Span     | Description                                                             |
|---------------|-------------------------------------------------------------------------|
| Last 7 days   | Shows data from the past week.                                          |
| Last 30 days  | Shows data from the last 30 days.                                       |
| Last 365 days | Shows data from the previous year. The maximum period for data storage. |
| Today         | Shows data from from the current day.                                   |
| This Month    | Shows data from  the current month.                                     |
| This Year     | Shows data from the current calendar year.                              |
| Custom Period | Shows data from a user-defined range of dates.                          |

If you have changed a time frame, click **Apply** to confirm and activate this filter.

### Select a Custom Time Period

You can select hours for the chosen time frame. This might be helpful if you need to narrow the results down to a specific time period.

To define a custom time frame, proceed as follows:

1. Open the Insights interface.
2. At the top of the Insights page, you will see the **Filter Bar**.
3. In the **Time Span** filter, select **Custom Period**. 
4. Activate the **Select time** option to include hours in your selection. 
5. Click **Start Date** to open a date picker calendar. 
6. Select both the date and time by adjusting the clock hand to your preferred hour within the 24-hour cycle. 
7. Select **End Date** to open the date picker calendar once more. 
8. Similarly, select the end date and time that you desire. 
9. Click **Apply** to activate the selected filter settings.

## Endpoints

Endpoints serve as a connector. They allow seamless interactions between Cognigy AI Agents and external systems or platforms. Examples of Endpoints include Webchat, Voice Gateway, and Microsoft Teams.
For more information, read the [Endpoints](../ai/deploy/endpoints/overview.md) documentation.

You can select one or more Endpoints to be analyzed.

To use the **Endpoints** filter, proceed as follows:

1. Open the Insights interface.
2. At the top of the Insights page, you will see the **Filter Bar** including the **Endpoint** filter.
3. Click **Endpoints**.
4. Use the **Type to search** field to find a specific Endpoint or select Endpoints from the list.
5. _(Optional)_ Activate the **Negate** option and select Endpoints you don't want to include in your analysis. All Endpoints except the selected ones will be included in your data charts.
6. _(Optional)_ To view only selected options, click ![filter](../_assets/icons/filter.svg) in the **Type to search** field.
7. _(Optional)_ To reset the search results, click **x** in the **Type to search** field. 
8. Click **Apply** to confirm and activate the filter settings. All dashboards and explorers will then display the data according to your selection.

## Snapshots

Snapshots save the current form of your AI Agent and include Flows, Lexicons, Connections, Functions, and more. They serve as an immutable form of an AI Agent in Cognigy.AI.
For more information, read the [Snapshots](../ai/deploy/snapshots.md) documentation.

To use the **Snapshot** filter, proceed as follows:

1. Open the Insights interface.
2. At the top of the Insights page, you will see the **Filter Bar** including the **Snapshot** filter.
3. Under **Snapshots**, open the list by clicking on it.
4. Use the **Type to search** field to find a specific Snapshot or select Snapshots from the list.
5. *(Optional)* Activate the **Negate** option to select the Snapshots you don't want to include in your analysis. All Snapshots except the selected ones will be considered for analysis.
6.  *(Optional)* Activate the **None** option to obtain analysis data of all available endpoint data, except for Snapshot data.
7. *(Optional)* To view only selected options, click ![filter](../_assets/icons/filter.svg) in the **Type to search** field.
8. *(Optional)* To reset the search results, click **x** in the **Type to search** field.
9. Click **Apply** to confirm and activate the filter settings. All dashboards and explorers will then display the data according to your selection.

## Locales

The **Locales** filter allows you to filter the data to include or exclude one or more languages / locales.
For more information, read the [Localization](../ai/build/translation-and-localization/localization.md) documentation.

To use the **Locales** filter, proceed as follows:

1. Open the Insights interface.
2. At the top of the Insights page, go to the filter bar and click **more filters**.
3. Under **Locales**, open the list by clicking on it.
4. Use the **Type to search** field to find a specific Locale or select Locales from the list.
5. _(Optional)_ Activate the **Negate** option to select the Locales you don't want to include in your analysis. All Locales except the selected ones will be considered for analysis.
6. _(Optional)_ To view only selected options, click ![filter](../_assets/icons/filter.svg) in the **Type to search** field.
7. _(Optional)_ To reset the search results, click **x** in the **Type to search** field.
8. Click **Apply** to confirm and activate the filter settings. All dashboards and explorers will then display the data according to your selection.

## Share Insights URL with Filters

When you share a specific URL with global filters applied,
your team members will see the same data and filters you've selected.

More benefits:

- You can reload any Insights page, and it will restore the Global Filters you previously selected.
- When reloading an open transcript in the Transcript Explorer, you will land on the same page with the transcript open.
- Reloading the Message Explorer with an applied search result will take you back to the same point as before reloading.
- Reloading on the Message Explorer while a message is selected will return you to the same state as before reloading.

## More Information

- [Cognigy Insights](overview.md)
- [Download Report](download-reports.md)
- [Interaction Panel](../ai/test/interaction-panel/overview.md)
- [Snapshots](../ai/deploy/snapshots.md)
- [Endpoints](../ai/deploy/endpoints/overview.md)
- [Localization](../ai/build/translation-and-localization/localization.md)