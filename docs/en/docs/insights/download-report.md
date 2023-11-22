---
title: "Download Report" 
slug: "download-report" 
hidden: false 
---

# Download Report

You can obtain detailed reports in CSV format from the charts on the Insights dashboards:

- [Overview dashboard](dashboard-overview.md)
- [Engagement dashboard](dashboard-engagement.md)
- [NLU Performance](dashboard-nlu-performance.md)
- [Live Agent](dashboard-live-agent.md)

These CSV reports contain crucial information, including intent scores, transcripts, and conversation details, enabling a better understanding of user behavior.

The CSV format ensures compatibility with various tools, making analysis seamless.
You can easily import this data into Microsoft Excel or databases like Microsoft Access.

## Download a Report via Insights UI

To download a report, follow these steps:

1. Go to Insights and select one of the previous mentioned dashboards in the side menu bar on the left side.
2. Click ![vertical ellipsis](../assets/icons/vertical-ellipsis.svg) in the top right corner of a dashboard chart you want to get as a report. 
3. Select **Download report as .csv file**. The report will now be stored in a CSV file.

The downloaded report file contains the complete chart dataset based on the filter settings. You can open the `.csv` file using applications such as Microsoft Excel or similar software.

## Export Analytics Reports as CSV using API

Cognigy.AI 4.10.0 provides the ability to export Analytics reports as CSV using an API. 

This API ensures that a report returns not only the data displayed in a chart but also includes all intents. Additionally, the CSV export for a transcript is available.

Cognigy Insights:

- Can reply with Analytics reports as CSV data.
- Can reply with transcript reports as CSV data.
- Returns full data if no limit is provided for intents.

## More Information

- [Cognigy Insights](cognigy-insights.md)