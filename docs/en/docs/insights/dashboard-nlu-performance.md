# NLU Performance

## NLU Performance Dashboard

<div class="divider"></div>


The currently displayed dashboard can be seen next to the agent in the top left of the screen.

The data presented on this dashboard is related to the **Natural Language Understanding (NLU)** section.

More information regarding "NLU" and "Intents" you will find here: [NLU Overview]({{config.site_url}}ai/nlu/nlu-overview/overview/).

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/bc68486-Dashboard_NLU_Performance_2.svg" width="100%" />
  <figcaption>NLU Performance dashboard</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/84b1a53-NLU_Performance_dashboard_03.svg" width="100%" />
  <figcaption>NLU Performance dashboard details</figcaption>
</figure>

|Graph title|	Description|
|--|--|
|Understood messages|	This percentage value, displayed as a report arranged in a tile, relates to the evaluated messages and is helpful to improve your agent in natural language understanding.<br>Clicking on the three dots menu item you can select the "Go to [Intent Trainer]({{config.site_url}}ai/resources/tweak/intent-trainer/)" option that leads you to the Intent Trainer in Cognigy.AI to improve your Agent.|
|Average Execution Time|	The average time it took to execute the Flow in ms.<br>The execution time is displayed as a report arranged in a tile and as a graph on a timeline scale as well<br>A tooltip will display additional info in the line chart depending on the cursor position. Time scaling depends on the global filter "Timeframe" setting.|
|Avg Intent Score	|This tiled report shows the average figure between 0 and 1 and indicates the quality of your Agent how "good" Intents were found in conversations, depending on the global filter "Timeframe" setting. <br>More information about Intents you will find here: [Machine Learning Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/)|
|Max Intent Score|	This tiled report shows the figure of how many Intents the Agent matched with 100%.|
|Understood/Misunderstood Messages|	This stacked bar chart shows bars on a timeline (per month) which figures out in percentage the understood /misunderstood messages in conversations. Tooltip info displays the exact number, percentage value, and month.<br>The "Understood" values form the lower parts of the stacked bar chart. <br>Clicking on the three dots menu item you can select the "Go to [Intent Trainer]({{config.site_url}}ai/resources/tweak/intent-trainer/)" option that leads you to the Intent Trainer in Cognigy.AI to improve your Agent.|

???+ info "Note"
    **The on top of the dashboard placed blue tiles show currently valid data in a "live" mode. That means that data will be refreshed every 30 seconds to be updated.**

???+ info "Note"
    **All data displayed in the charts relate to the **global** filter settings. You can configure global filter settings as described here: [Global Filter]({{config.site_url}}insights/global-filter/)**

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/67dfbbf-Dashboard_NLU_Performance_3.svg" width="100%" />
  <figcaption>NLU Performance dashboard details - 2</figcaption>
</figure>

|Graph title|	Description|
|--|--|
|Top Intents|	The highest-rated numbers of found intents are displayed in a bar chart (the x-axis is scaled in thousands).<br>More information about Intents you will find here: [Machine Learning Intents]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/)|
|Top Slots|	The highest number of found slots are displayed in a bar chart (the x-axis is scaled in thousands).<br>More information about Slots you will find here: [Slot Mapping]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/)|
|Intents by Score Range|	The scoring range of found Intents is visualized in this bar chart. Every score range bar shows a min-max value and has an average value marker.<br>Clicking on the three dots menu item you can select the "Go to I[ntent Trainer]({{config.site_url}}ai/resources/tweak/intent-trainer/)" option that leads you to the Intent Trainer in Cognigy.AI to improve your Agent.<br>More information about Intent Trainer you will find here: [Intent Trainer]({{config.site_url}}ai/resources/tweak/intent-trainer/)|
|Top Intent Scores|	Top-rated numbers of Intents are displayed in a bar chart.<br>More information about Intent analysis you will find here: [Intent Analyzer]({{config.site_url}}ai/nlu/nlu-overview/intent-analyzer/)|

???+ info "Note"
    **When hovering over any chart or metrics field, rating details will be displayed in a tooltip. Consider that rating data depend on the settings in your [global filter options]({{config.site_url}}insights/cognigy-insights/).** 

##Download Report

Every widget on the Insights dashboard provides a '**Download report as .csv file**' item in a dropdown menu. 
To create a report file follow instructions here: [Download Report]({{config.site_url}}insights/download-report/) 


## More information
<div class="divider"></div>

- [Cognigy Insights]({{config.site_url}}insights/cognigy-insights/)

- [Global Filter]({{config.site_url}}insights/global-filter/)

- [Dashboard Overview]({{config.site_url}}insights/dashboard-overview/)

- [Dashboard Engagement]({{config.site_url}}insights/dashboard-engagement/)

- [Step Explorer]({{config.site_url}}insights/step-explorer/)

- [Transcript Explorer]({{config.site_url}}insights/transcript-explorer/)

- [Message Explorer]({{config.site_url}}insights/message-explorer/)

- [Download Report]({{config.site_url}}insights/download-report/)