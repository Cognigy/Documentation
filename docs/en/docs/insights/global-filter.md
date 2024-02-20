---
title: "Global Filters" 
slug: "global-filter" 
hidden: false 
---

# Global Filters

Cognigy Insights enables you to select available Endpoint data for analysis using Global Filters.
Once you have changed a filter setting, the corresponding data will be considered for the analysis report in Insights.
The Global Filter settings are available in all applications, such as dashboards and explorers, and they affect all applications.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/global-filters.png" width="100%" />
  <figcaption>Global Filters</figcaption>
</figure>

The following global filters are available:

- [Time Span](#time-span)
- [Endpoints](#endpoints)
- [Snapshots](#snapshots)
- [Locales](#locales)

## Time Span

To analyze a defined range of Endpoint data, you can either set a preset time frame or choose specific dates using a date picker.

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

If you have changed a time frame, click **Apply** to activate the selected time frame.

### Select a Custom Time Period

You can select hours for the chosen time frame. This might be helpful if you need to narrow the result to a more precise range of times.

To define a custom time frame, proceed as follows:

1. Open the Insights interface.
2. At the top of the Insights page, go to the **Global Filters** section.
3. In the **Time Span** filter, select **Custom Period**. 
4. Activate the **Select time** option to include hours in your selection. 
5. Click **Start Date** to open a date picker calendar. 
6. Select both the date and time by adjusting the clock hand to your preferred hour within the 24-hour cycle. 
7. Select **End Date** to open the date picker calendar once more. 
8. Similarly, select the end date and time that you desire. 
9. Click **Apply** to activate the selected filter settings.

## Endpoints

A connector within Cognigy.AI
that enables seamless interaction between Cognigy virtual agents and external systems or platforms. Examples of Endpoints include Webchat, Voice Gateway, and Microsoft Teams.
For more information, read the [Endpoints](../ai/endpoints/overview.md) documentation.

You can select one or more Endpoints to be analyzed.

To use the **Endpoints** filter, proceed as follows:

1. Open the Insights interface.
2. At the top of the Insights page, go to the **Global Filters** section. 
3. Click **Endpoints**.
4. Use the **Type to search** field to find a specific Endpoint or select Endpoints from the list.
5. _(Optional)_ Activate the **Negate** option to exclude the Endpoints you don't want to include in your analysis. All Endpoints except the selected ones will be considered for analysis.
6. _(Optional)_ To view only selected options, click ![filter](../assets/icons/filter.svg) in the **Type to search** field.
7. _(Optional)_ To reset the search results, click **x** in the **Type to search** filed. 
8. Click **Apply** to activate the filter settings. The analytics data will be displayed.

## Snapshots

A snapshot is an immutable form of a virtual agent in Cognigy.AI that includes various resources such as Flows, Lexicons, Connections, Functions, and more.
For more information, read the [Snapshots](../ai/resources/deploy/snapshots.md) documentation.

To use the **Snapshot** filter, proceed as follows:

1. Open the Insights interface.
2. At the top of the Insights page, go to the **Global Filters** section.
3. Under **Snapshots**, open the list by clicking on it.
4. Use the **Type to search** field to find a specific Snapshot or select Snapshots from the list.
5. *(Optional)* Activate the **Negate** option to exclude the Snapshots you don't want to include in your analysis. All Snapshots except the selected ones will be considered for analysis.
6.  *(Optional)* Activate the **None** option to obtain analysis data of all available endpoint data, except for Snapshot data.
7. *(Optional)* To view only selected options, click ![filter](../assets/icons/filter.svg) in the **Type to search** field.
8. *(Optional)* To reset the search results, click **x** in the **Type to search** field.
9. Click **Apply** to activate the selected filter settings. The analytics data will be displayed.

## Locales

The **Locales** filter considers the locales of available conversations for analysis. You can select one or more Locales to be analyzed. 
For more information, read the [Localization](../ai/resources/manage/localization.md) documentation.

To use the **Locales** filter, proceed as follows:

1. Open the Insights interface.
2. At the top of the Insights page, navigate to the **Global Filters** section.
3. Under **Locales**, open the list by clicking on it.
4. Use the **Type to search** field to find a specific Locale or select Locales from the list.
5. _(Optional)_ Activate the **Negate** option to exclude the Locales you don't want to include in your analysis. All Locales except the selected ones will be considered for analysis.
6. _(Optional)_ To view only selected options, click ![filter](../assets/icons/filter.svg) in the **Type to search** field.
7. _(Optional)_ To reset the search results, click **x** in the **Type to search** field.
8. Click **Apply** to activate the filter settings. The analytics data will be displayed.

## Share Insights URL with Filters

When you share a specific URL with global filters applied,
your team members will see the same data and filters as you have.

More benefits:

- You can reload any Insights page, and it will restore the Global Filters you previously selected.
- When reloading an open transcript in the Transcript Explorer, you will land on the same page with the transcript open.
- Reloading the Message Explorer with an applied search result will take you back to the same point as before reloading.
- Reloading on the Message Explorer while a message is selected will return you to the same state as before reloading.

## More Information

- [Cognigy Insights](cognigy-insights.md)
- [Download Report](download-report.md)
- [Interaction Panel](../ai/tools/interaction-panel/interaction-panel.md)
- [Snapshots](../ai/resources/deploy/snapshots.md)
- [Endpoints](../ai/endpoints/overview.md)
- [Localization](../ai/resources/manage/localization.md)