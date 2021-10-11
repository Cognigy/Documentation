# Set Rating

<br>
[![Version badge](https://img.shields.io/badge/Added in-v4.9.0-blue.svg)](https://shields.io/)

## Description
<div class="divider"></div>
Cognigy introduces as of release Cognigy.AI (4.9.0)  a new Flow Node "**Set Rating**" which extends the analytical capabilities of Cognigy.AI together with the [Insights]({{config.site_url}}insights/) application. 

The "**Set Rating**" Node sets the rating and rating comment for a conversation. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/58bb917-Set_Rating_Node_1.svg" width="100%" />
  <figcaption>"Set Rating" is available in the Node selection menu</figcaption>
</figure>

You can insert the Set Rating Node in a Flow as follows: 

- Click on the "**+**" icon in a [**Flow**]({{config.site_url}}ai/resources/build/flows/). The Node selection menu appears and provides a list of available Nodes.
- Click on "Set Rating" to select and insert the Node into the Flow.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/b464df0-Set_Rating_Node_3.svg" width="100%" />
  <figcaption>"Set Rating"-Node in a Flow</figcaption>
</figure>

- Click on the Node field. The "Edit Node" panel will be opened for setting the options.

More information about using Flow Nodes you can find here: [Using Flow Nodes]({{config.site_url}}ai/flow-nodes/node-usage/)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/0a17006-Set_Rating_Node_6.svg" width="100%" />
  <figcaption>"Set Rating"-Node configuration</figcaption>
</figure>

| Parameter |  Description |
| --------- |  ----------- |
| **Rating Score**  |  The rating for the conversation. -1 for a negative rating or 1 for a positive rating |
| **Rating Comment**  |  Additional information about the rating. |
| **Settings**  |  - **Label**: Enter a name for your choice to the Node. [Adding a Label]({{config.site_url}}ai/flow-nodes/node-usage/#add-label) replaces the bottom text line of a Node.<br/>- **Comment**: [Additional information]({{config.site_url}}ai/flow-nodes/node-usage/#add-comment) about the Node.<br/>- **Analytics step**: Enter a meaningful step name used as **[Annotation]({{config.site_url}}insights/step-explorer#annotations)** for the [Step Explorer]({{config.site_url}}insights/step-explorer) in [Insights]({{config.site_url}}insights/) analytics. |

- After finishing the settings click on "Save".