---
 title: "Download Report" 
 slug: "download-report" 
 hidden: false 
---
# Download Report

Insight reports contain the important data from Insight dashboards charts based on Cognigy.AI projects, to archive them or for later analysis and strategic decisions to improve customer services through Virtual Agents in your own projects. Data includes key features such as intent scores, key words, conversation transcripts, important request and replies in conversations and their frequency. Analytics data is also used to create charts, such as line charts, bar charts and pie charts, to better identify user-specific behavior and trends.

## Download a Report via Insights UI

Insight provides several dashboards to indicate analytics data in diagrams and charts.

- Overview dashboard
- Engagement dashboard
- Live Agent
- NLU Performance

Every chart on Insights dashboards provides a **Download report as .csv file** item in a dropdown menu.

To download a report, proceed as follows:

**Reports**

1. Go to Insights and select one of the previous mentioned dashboards in the side menu bar on the left side.
2. Click ![vertical ellipsis](../../assets/icons/vertical-ellipsis.svg) in the top right corner of a dashboard chart you want to get as a report. 
3. Select **Download report as .csv file**. The report will now be stored in a CSV file.

The downloaded report file contains the complete chart data set, depending on the filter settings, for your database or further analysis. 
You can open the `.csv` file using, for example, Microsoft Excel. 

**Reports with daily data**:

When a chart displays data on a weekly basis the report will present the weekly summarized data according to the filter settings. 
To get a more detailed report presenting daily data, do the following:

1. Click ![vertical ellipsis](../../assets/icons/vertical-ellipsis.svg) in the top right corner of a dashboard chart you want to get as a daily report. 
2. Select **Show details**. A new window presents a chart on a daily base according to the filter settings.
3. In the details chart window click again ![vertical ellipsis](../../assets/icons/vertical-ellipsis.svg) in the top right corner. The report will now be stored in a CSV file containing daily analysis data.

## Export Analytics Reports as CSV using API

Cognigy.AI 4.10.0 provides to export the Analytics reports as CSV using API. This API makes sure that a report does not return only the data displayed intents in a chart but all intents. Even the CSV export for a transcript is provided.

Cognigy Insights:

- can reply Analytics reports as CSV data
- can reply transcript reports as CSV data
- returns full data if no limit is provided for intents

## More Information

- [Cognigy Insights](cognigy-insights.md)