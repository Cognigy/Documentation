---
 title: "Dashboard Overview" 
 slug: "dashboard-overview" 
 hidden: false 
---
# Dashboard Overview

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../release-notes/4.45.md)

## Overview Dashboard

<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/overview_dashboard_overall.png" width="100%" />
  <figcaption>Overview dashboard</figcaption>
</figure>

The currently selected dashboard is displayed next to the agent in the top left of the screen.

The dashboard overview page contains various metrics displayed as numerical percentages and in various graphical displays such as bar charts, ring charts, tiles, or time-based line charts.

???+ info "Note"
    **All data displayed in the charts relate to the global filter settings. You can configure global filter settings as described here: [Global filter options]({{config.site_url}}insights/cognigy-insights/)**

???+ info "Note"
    **When hovering any chart or metrics field, rating details will be displayed in a tooltip.**

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/overview_dashboard_tiles.png" width="100%" />
  <figcaption>Overview dashboard - 1</figcaption>
</figure>

When hovering the line chart, details as for example the rated month, the year and the exact number of sessions will be displayed.

**Each chart can display data in two ways:**

- as a metrics caption: the numerical information is abbreviated (for example, ms for milliseconds, 1K for a thousand, 1M for a million, etc.).
- as a tooltip that appears when you move the mouse pointer over it: It displays the data as unabbreviated numeric values.

???+ info "Note"
    **The on top of the dashboard placed blue tiles show currently valid data in a "live" mode. That means that data will be refreshed every 30 seconds to be updated.**
<div id="overview"></div>

|Graph title|	Description|
|--|--|
|Active Contacts|	The number of currently active users in previous 15 minutes. The data is pulled for the previous 15 minutes and updated every 30 seconds. (the report is arranged in a tile)|
|Session count|	 A session is defined as a user session with the system. Session count indicates the total number of sessions, including ongoing and newly started sessions. This means if the session is started on 2nd June before 12am, and continues on in 3nd June, it will be counted in the Insights session count dashboard (the report is arranged in a tile).|
|Understood Messages|	Indicates how many understood messages occurred during conversations (the report is arranged in a tile). <br> A message is counted as understood if it has triggered an intent, a slot is matched, or it is marked as understood via the [Code Node](../ai/flow-nodes/code/analytics-data.md) or [Overwrite Analytics Node](../ai/flow-nodes/other-nodes/overwrite-analytics.md). <br> A message is not counted as understood if it is marked as `Don't count` in the [Overwrite Analytics Node](../ai/flow-nodes/other-nodes/overwrite-analytics.md) or sent during an active handover without configuring [Agent Assist](../ai/handover-providers/la-agent-assist-overview.md) Flow.|
|Positive Ratings	|Indication of the NLU quality (the report is arranged in a tile).|
|Sessions|	A line chart displays the number of sessions on a timescale.|

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/81da91e-Dashboard_Overview_5.png" width="100%" />
  <figcaption>Overview dashboard - 2</figcaption>
</figure>
<div id="overview-charts"></div>
|Graph title|	Descrption|
|--|--|
|Sessions by Channel|	Total number of conversations (sessions) displayed in a ring chart based on channel. ("Users" changed to "Sessions" in v4.16). A Session by Channel is defined or counted by the number of unique sessions for a given channel. This tile represents all the sessions started between the given time. |
|Top Intents|	Top-rated number of used intents displayed in a bar chart.|
|Users by Locale|	Stacked bar chart display of time-related recognized conversations depending on different locales given in percentages.|
|Top Goals|	The top-rated number of goals will be displayed in a bar chart.|

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/2da6af6-Dashboard_Overview_6.svg" width="100%" />
  <figcaption>Overview dashboard - 3</figcaption>
</figure>
<div id="overview-charts2"></div>

|Graph title|	Description|
|--|--|
|Top Slots|	Top-rated number of slots displayed in a bar chart.|
|Understood/Misunderstood Messages|	Time-related number of "understood messages" and "misunderstood messages" in percentages displayed in a bar chart. <br> A message is counted as understood/misunderstood if it has triggered an intent, a slot is matched, or it is marked as understood or misunderstood via the [Code Node](../ai/flow-nodes/code/analytics-data.md) or [Overwrite Analytics Node](../ai/flow-nodes/other-nodes/overwrite-analytics.md). <br> A message is not counted as understood/misunderstood if it is marked as `Don't count` in the [Overwrite Analytics Node](../ai/flow-nodes/other-nodes/overwrite-analytics.md) or sent during an active handover without configuring [Agent Assist](../ai/handover-providers/la-agent-assist-overview.md) Flow.|
|Number of inputs|	Time-related number of inputs displayed in a bar chart.More information about inputs you can find here:[Input]({{config.site_url}}ai/tools/analytics/analytics-concepts/)
|Unique Contacts| Time-related number of unique contacts displayed in a line chart. If the user creates more than one session in a single day, it will be counted as one unique contact for that day.|

##Download Report

Every widget on the Insights dashboard provides a '**Download report as .csv file**' item in a dropdown menu. 
To create a report file follow instructions here: [Download Report]({{config.site_url}}insights/download-report/) 


## More information
<div class="divider"></div>

- [Cognigy Insights]({{config.site_url}}insights/cognigy-insights/)

- [Global Filter]({{config.site_url}}insights/global-filter/)

- [Dashboard Engagement]({{config.site_url}}insights/dashboard-engagement/)

- [Dashboard NLU Performance]({{config.site_url}}insights/dashboard-nlu-performance/)

- [Step Explorer]({{config.site_url}}insights/step-explorer/)

- [Transcript Explorer]({{config.site_url}}insights/transcript-explorer/)

- [Message Explorer]({{config.site_url}}insights/message-explorer/)

- [Download Report]({{config.site_url}}insights/download-report/)