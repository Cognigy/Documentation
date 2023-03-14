---
 title: "Reports" 
 slug: "reports" 
 hidden: false 
---
# Reports

The conversation reports which have occurred over time can be viewed in the Reports section.

Click on **Reports** in the Live Agent Dashboard sidebar.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-dashboard-reports.png" width="100%" alt="Live Agent Dashboard Screen" />
  <figcaption>Live Agent Dashboard</figcaption>
</figure>


The screen will show an overview of all the reports.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-reports-home.png" width="100%" alt="Live Agent Reports Home Screen" />
  <figcaption>Reports</figcaption>
</figure>

### Overview - Supervisor Dashboard
<div class="divider"></div>

[![Version badge](https://img.shields.io/badge/Updated in-v4.46-blue.svg)](../release-notes/4.46.md)

!!! note
    This dashboard is only visible with the [Supervisor Role](roles.md#supervisor).

This dashboard gives you an overview of all conversations and indicates how many conversations came in within the last 24 hours. 

Furthermore, you will see an overview of the Agent Status and some metrics regarding conversation handling. At the end of the page, you will find the conversation overview and handling separated by Agent. 

To view this dashboard, click on the Overview tab in Reports.

Starting from Cognigy 4.46, you can change the status of any human agent. To do that, go to the Conversations by Agents section and select the agent whose status you want to change. Next, click on the agent's current status to open the agent status window and select a new status. The new status will be applied automatically.

<figure>
<img src="{{config.site_url}}live-agent/images/Supervisor-Dashboard-v1.png" width="100%" alt="Overview Report Screen" />
  <figcaption>Supervisor Dashboard</figcaption>
</figure>

### Agents
<div class="divider"></div>

Click on the Agents tab in Reports and select an agent. A graph will show the Conversations of the chosen agent that have occurred during the selected days. 

A report can be generated for various time durations. This can be done by selecting a time window in the drop-down list, as shown below. By default, this is set for the last seven days.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-reports-agents.png" width="100%" alt="Report Duration selection drop down" />
  <figcaption>Report Duration Selection</figcaption>
</figure>


### Conversations
<div class="divider"></div>

Click on the Conversations tab in Reports. A graph will show the Conversations that have occurred during the selected days. When hovering the mouse cursor over a particular chart, the details of Conversations that happened that day can be seen.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-reports-conversations.png" width="100%" alt="Conversations Report Screen" />
  <figcaption>Conversations Report</figcaption>
</figure>



### Incoming Messages
<div class="divider"></div>
Click on the Incoming Messages tab in Reports. A graph will show the number of incoming messages that occurred on the selected days. When hovering the mouse cursor over a particular chart, the number of incoming messages that happened that day can be seen.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-reports-incoming-messages.png" width="100%" alt="Incoming Messages Report Screen" />
  <figcaption>Incoming Messages Report</figcaption>
</figure>


### Outgoing Messages
<div class="divider"></div>
Click on the Outgoing Messages tab in Reports. A graph will show the number of outgoing messages that occurred on the selected days. When hovering the mouse cursor over a particular chart, the number of outgoing messages that happened that day can be seen.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-reports-outgoing-messages.png" width="100%" alt="Outgoing Messages Report Screen" />
  <figcaption>Incoming Messages Report</figcaption>
</figure>


### First Response Time
<div class="divider"></div>
Click on the First Response Time tab in Reports. A graph will show the average number of hours taken to give the first response to a Conversation with a customer. In addition, when hovering the mouse cursor over a particular chart, the average number of hours taken for the first response for that specific day can be seen.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-reports-first-response-time.png" width="100%" alt="First Response Time Report Screen" />
  <figcaption>First Response Time Report</figcaption>
</figure>


### Resolution Time
<div class="divider"></div>
Click on the Resolution Time tab in Reports. A graph will show the average hours to resolve a particular Conversation with a customer. When hovering the mouse cursor over a specific chart, the average number of hours taken for determining conversations for that particular day can be seen.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-reports-resolution-time.png" width="100%" alt="Resolution Time Report Screen" />
  <figcaption>Resolution Time Report</figcaption>
</figure>


### Resolution Count
<div class="divider"></div>
Click on the Resolution Count tab in Reports. A graph will show the number of Conversations resolved on the selected days. When hovering the mouse cursor over a particular chart, the number of Conversations determined on that day can be seen.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-reports-resolution-count.png" width="100%" alt="Resolved Count Report Screen" />
  <figcaption>Resolved Count Report</figcaption>
</figure>



### Download Agent Reports
<div class="divider"></div>
Details of Agents' performance can be done by clicking the Download Agent Reports button at the top right-hand side of the page. The report will be downloaded in CSV format. An example is given below.


<figure>
<img src="{{config.site_url}}live-agent/images/LA-reports-download-agent-reports.png" width="100%" alt="Download Report Button " />
  <figcaption>Download Report</figcaption>
</figure>


<figure>
<img src="{{config.site_url}}live-agent/images/LA-reports-csv-file.png" width="100%" alt="Downloaded Report  in CSV File format " />
  <figcaption>Report CSV Format</figcaption>
</figure>

