---
title: "Step Explorer" 
slug: "step-explorer" 
hidden: false 
---
# Step Explorer

_Step Explorer_ helps you to see how customers navigate through a conversation. It shows key paths in the conversation, such as how customers react to the Virtual Agent's responses and questions, as well as identifying points where customers disengage, all within a specified time frame.  This information allows you to evaluate and improve your Virtual Agent for better understanding, potentially increasing orders, bookings, or reducing support requests. The Step Explorer lets you explore conversation steps and how they connect with each other.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/step-explorer.png" width="100%" />
  <figcaption>Step Explorer UI</figcaption>
</figure>

In the left-side menu of Insights, select **Step Explorer**.

When the Step Explorer is selected, Agent's name is displayed in the top left corner. Insights processes the current Agent's data and the Step Explorer report displays the data-related analytic graphs. If multiple Agents are available in Cognigy.AI, you can select them here in a drop-down menu to analyze each of them.

When switching from your Agent in Cognigy.AI to Cognigy Insights,
all filters are configured so that you can view data related to the active Agent.
This allows you to monitor the performance of this Agent over a specific time period.
To switch between Cognigy.AI and the Cognigy Insights application, clickthe **Insights** option in the user menu.

## Filter options

Every change in filter settings needs to be confirmed with **Apply** to be active.

**Local filter options**

The Local Filter options at the top are specific to the Step Explorer.

**Starting Step**

Conversational [steps](../ai/tools/analytics/analytics-concepts.md#steps) are only available
and displayed here when you first have configured the Node settings in your Flow with [annotations](#annotations) in the **Analytics steps** section, for example, with 'Welcome New Caller'. 
Then you can select the starting step here for Step Explorer processing starting at this point.

Additionally, you can click a step and choose **Select as starting step** from the context menu.

**Direction**

You can choose between **Forward** and **Backward** direction. 
If you apply the forward direction, the step report starts with the first step (from the conversation's beginning to the end).
If you apply the backward direction, the step report starts at the last step (from the conversation's end to the beginning).

**Global filter options**

The Global Filter options at the bottom apply to all applications running in Cognigy Insights.
For more information, read [Global Filter](global-filter.md).

## Annotations

Before working with Step Explorer, you need to annotate certain components in Cognigy.AI. Annotations can be defined in the Node settings of your configured Flow.

To get started, open the Node Editor, navigate to the **Settings** tab, and provide a meaningful Annotation in the Analytics step section. This Annotation should include an informative reference to the configured Node.

For instance, if you're annotating a **Say** Node that initiates a customer conversation with a welcome message, you can enter either `Greetings` or `Welcome New Caller`.

For Order Intents, use the Analytics step field. For example, you can enter `Order Intent triggered` as an annotation.


<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/c2f0e52-Say_Node_Analytics_step_setting_300.svg" width="60%" />
  <figcaption>Say Node editor with Annotation in the Analytics step section</figcaption>
</figure>

As you name more Flow Nodes with Annotations in the **Analytics step** sections, the Step Explorer data display will provide finer granularity.

!!! warning
    The Step Explorer requires defined Annotations for the evaluation and display of analytics data.

The Step Explorer provides the following advantages:

- Order Intent understanding (how many customers have ordered something).
- Understanding of customer reactions at certain steps (how many, how often).
- You can define different time frames for evaluation.
- You can display the step report both in **Forward** and **Backward** directions.
- You can get the step report beginning at a Starting Step.
- You can click a step to see details.
- You can select available Snapshots from different virtual agent versions to compare them for improvement purposes.

## Analysis

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/7bf4ed7-Step_Explorer_n1.png" width="100%" />
  <figcaption>Step Explorer: Analytic steps displayed in <b>forward direction</b></figcaption>
</figure>

When the **Local Filter** is set to the Forward direction, the Step Explorer displays the conversation analysis results with the conversation's start on the left side and the conversation's end on the right side.

Using the Annotations defined previously in Cognigy.AI for your Flow Nodes, the Step Explorer can analyze the conversation steps, and each Annotation is assigned to a specific step. The corresponding conversation data in relation to the defined steps leads to a percentage distribution, which the Step Explorer visualizes on the screen.

**Analysis example**

100% of the users went through the starting step at the beginning of a conversation.

99% of the users who started a conversation went through a welcome as a new caller.

66% of the new callers made an appointment - 11% of the new callers initiated a handover request.

51% of the users who made an appointment completed the booking. 

48% of users who made an appointment needed explanations.

89% of users who needed an explanation completed the booking.

!!! note
    The red-marked areas of a step represent the number of users who dropped off at that point. 
    You may take an early "drop off" in a conversation to improve your Agent and to inspect with Cognigy's [Message Explorer](message-explorer.md) what the Virtual Agent said before the user dropped off.

- You can get more details displayed when you hover the mouse over any step.   

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/ddd1d85-Step_Explorer_handover_request_n2_400.svg" width="100%" />
  <figcaption>Details to the Handover request step</figcaption>
</figure>

- You can select any step as **Starting Step** in the Local Filter settings. The Step Explorer will then visualize the analysis beginning at that step.

- You can change the conversation's **Forward** direction to a **Backward** direction. The Step Explorer will then display the analysis starting on the left side with the end of a conversation.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/7d637e4-Step_Explorer_direction_backward_n3.png" width="100%" />
  <figcaption>Step Explorer: Analytic steps displayed in backward direction</figcaption>
</figure>

- You can click a step, for example, **Make an appointment**, and the Step Explorer will change the displayed analysis by a separated display of the selected step and the related analytics data in detail.  

Fields with an arrow icon are placeholders for hidden steps.
These hidden steps will be displayed only when you click the arrow field.
Using arrow fields, make sure that the displayed steps are clearly arranged.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/d54affb-Step_Explorer_make_appointment_n4.png" width="100%" />
  <figcaption>Example: Separate display of the selected Make an appointment step</figcaption>
</figure>

**Example step analysis of Make an Appointment**:

**Step label**: 66% of the 'new callers' from the previous step made an appointment.
**Additional information via hover field**: 66 % of the users who started a conversation made an appointment (the number found by Step Explorer: 5,477).

48% of the users who started to make an appointment needed explanations of what the Agent just did.
89% of them who needed explanations completed the booking, and all of them dropped off afterward (100%).

48% of the users who started to make an appointment completed the booking.

100% of the users who completed a booking dropped off.

!!! note
    The rated value of a conversation step relates directly to the previous step value before.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/9c01d54-Step_Explorer_make_appointment_n5.svg" width="100%" />
  <figcaption>Example step: Make an appointment analysis data</figcaption>
</figure>

**Example of the Completed Booking step and evaluation of additional displayed analytics data**:

89% of the users who needed explanations completed the booking, and all of them dropped off afterward (100%; end of conversation).

**additional information (via hover function)**: 

89% of the users completed the booking from the previous step.
28% of the users who started a conversation completed the booking.
The Step Explorer found 2,368 as a total number of completed bookings.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/8e3fdd6-Step_Explorer_completed_booking_n7.svg" width="100%" />
  <figcaption>Example step: Completed booking analysis data</figcaption>
</figure>

### Open Flow 

To check your Flow or to improve the configuration, the Step Explorer provides the context menu **Open Flow** option when right-clicking on a specific step.
For example, clicking **Make an Appointment** takes you to the Flow in Cognigy.AI.

The red-highlighted sections within a step indicate the points where users dropped off. You have the option to intentionally initiate a 'drop-off' in a conversation. This allows you to enhance your agent's performance and analyze what the Virtual Agent said before the user disengaged by using Cognigy's [Message Explorer](message-explorer.md).

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/a040540-Step_Explorer_open_flow_n8.svg" width="100%" />
  <figcaption>Right-clicking a specific explorer step will provide the "Open Flow" option</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/1135531-Open_Flow_in_Cognigy_2.svg" width="100%" />
  <figcaption>The "Open Flow" option led to the Flow in Cognigy.AI</figcaption>
</figure>

### Open Node

[![Version badge](https://img.shields.io/badge/Added in-v4.16-blue.svg)]({{config.site_url}})

Calling the context menu on a Step defined in a Node will present the **Open Node** menu
option. Clicking it opens the Flow Editor with editing mode for the respective Node.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/open-node.png" width="100%" />
  <figcaption>Context menu of a Step defined in a Node</figcaption>
</figure>

### Go to Transcript Explorer

If you want to evaluate early drop-offs during conversations to improve your Virtual Agent, click the **Drop off** step to access the **Go to Transcript Explorer** menu. 

This menu allows you to check conversations by searching for keywords that represent the steps when the customer drops off.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/a7e0fdb-Step_Explorer_early_drop_off_situation_4.svg" width="100%" />
  <figcaption>Go to Transcript Explorer to evaluate the conversation steps</figcaption>
</figure>

## Inspecting conversations by Steps taken

[![Version badge](https://img.shields.io/badge/Added in-v4.16-blue.svg)]({{config.site_url}})

In the context menu of a Step, there are two options for inspecting the conversations.
Activating one of them will open Transcript Explorer showing the following conversations:

- **Open conversations that took this path**. This option displays conversations that followed the exact path of the chosen step. In the illustration below, we have opened a context menu on the **Completed Booking** step. Conversations that followed this path will show only those that contained the following step path: **Welcome New Caller > Make an Appointment > Explain > Completed Booking** steps. 
- **Open conversations, which contain this step**. This option shows all the conversations, which include the chosen Step. The exact path in this case is not important.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/conversation-path-step-explorer.png" width="100%" />
  <figcaption>Go to Transcript Explorer to evaluate the conversation steps</figcaption>
</figure>

## More information

- [Transcript Explorer](transcript-explorer.md)
- [Message Explorer](message-explorer.md)
