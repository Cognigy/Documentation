# Dashboard Overview

## Overview Dashboard

<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/39bce30-Dashboard_Overview_1.svg" width="100%" />
  <figcaption>Overview dashboard</figcaption>
</figure>

The currently selected dashboard is displayed next to the agent in the top left of the screen.

The dashboard overview page contains various metrics displayed as numerical percentages and in various graphical displays such as bar charts, ring charts, tiles, or time-based line charts.

???+ info "Note"
    **All data displayed in the charts relate to the global filter settings. You can configure global filter settings as described here: [Global filter options](doc:cognigy-insights)**

???+ info "Note"
    **When hovering any chart or metrics field, rating details will be displayed in a tooltip.**

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/5abad80-Dashboard_Overview_4.svg" width="100%" />
  <figcaption>Overview dashboard - 1</figcaption>
</figure>

When hovering the line chart, details as for example the rated month, the year and the exact number of conversations will be displayed.

**Each chart can display data in two ways:**

- as a metrics caption: the numerical information is abbreviated (e.g. ms for milliseconds, 1K for a thousand, 1M for a million, etc.).
- as a tooltip that appears when you move the mouse pointer over it: It displays the data as unabbreviated numeric values.

???+ info "Note"
    **The on top of the dashboard placed blue tiles show currently valid data in a "live" mode. That means that data will be refreshed every 30 seconds to be updated.**

|Graph title|	Description|
|--|--|
|Active Contacts|	The number of currently active users (the report is arranged in a tile).|
|Conversation count|	The number of conversations (the report is arranged in a tile).|
|Understood Messages|	Indicates how many understood messages occurred during conversations (the report is arranged in a tile).|
|Positive Ratings	|Indication of the NLU quality (the report is arranged in a tile).|
|Conversations|	A line chart displays the number of conversations on a timescale.|

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/81da91e-Dashboard_Overview_5.svg" width="100%" />
  <figcaption>Overview dashboard - 2</figcaption>
</figure>

|Graph title|	Descrption|
|--|--|
|Users by Channel|	Total number of users displayed in a ring chart.|
|Top Intents|	Top-rated number of used intents displayed in a bar chart.|
|Users by Locale|	Stacked bar chart display of time-related recognized conversations depending on different locales given in percentages.|
|Top Goals|	The top-rated number of goals will be displayed in a bar chart.|

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/2da6af6-Dashboard_Overview_6.svg" width="100%" />
  <figcaption>Overview dashboard - 3</figcaption>
</figure>

|Graph title|	Description|
|--|--|
|Top Slots|	Top-rated number of slots displayed in a bar chart.|
|Understood/Misunderstood Messages|	Time-related number of "understood messages" and "misunderstood messages" in percentages displayed in a bar chart.|
|Number of inputs|	Time-related number of inputs displayed in a bar chart.More information about inputs you can find here:[Input]()
|Unique Contacts|	Time-related number of unique contacts displayed in a line chart.|

##Download Report

Every widget on the Insights dashboard provides a '**Download report as .csv file**' item in a dropdown menu. 
To create a report file follow instructions here: [Download Report](doc:download-report) 


## More information

- [Dashboard Engagement](doc:dashboard-engagement)

- [Dashboard NLU Performance](doc:dashboard-nlu-performance)

<div class="divider"></div>

- [Global Filter](doc:global-filter)

- [Cognigy Insigths](doc:cognigy-insights)

- [Step Explorer](doc:step-explorer)

- [Transcript Explorer](doc:transcript-explorer)

- [Message Explorer](doc:message-explorer)