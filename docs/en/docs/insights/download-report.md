---
 title: "Download Report" 
 slug: "download-report" 
 hidden: false 
---
# Download Report

## Download a Report via Insights UI

Every widget on the Insights dashboards provides a **Download report as .csv file** item in a dropdown menu.

To download a report, proceed as follows:

- Click ![vertical ellipsis](../../assets/icons/vertical-ellipsis.svg) in the top right corner of a dashboard widget you want to get as a report. 
- Select **Download report as .csv file**. The report will now be stored in a csv file.

The downloaded report file contains the complete widget data set (depending on the filter settings) for your data storage or further analysis. 
You can open the `.csv` file using, for example, Microsoft Excel. 

## Export Analytics Reports as CSV using API

Cognigy.AI 4.10.0 provides to export the Analytics reports as CSV using API. This API makes sure that a report does not return only the data displayed intents in a chart but all intents. Even the CSV export for a transcript is provided.

Cognigy Insights:

- can reply Analytics reports as CSV data
- can reply transcript reports as CSV data
- returns full data if no limit is provided for intents

## More Information

- [Cognigy Insights]({{config.site_url}}insights/cognigy-insights/)

- [Cognigy Insights](cognigy-insights.md)
