---
 title: "Step Explorer" 
 slug: "step-explorer" 
 hidden: false 
---
# Step Explorer

## Description
<div class="divider"></div>
The main purpose of Step Explorer is to help you understand how the customer progresses through a conversation. The Step Explorer can visualize all significant situations/step paths of a conversation through the Flow (customers reactions to Virtual Agents answers and questions, when did the customer drop off, etc…) in a defined time period.
Based on these findings you are able to evaluate may improve your Virtual Agent for better understanding in order to increase e.g. the number of orders or bookings or to reduce the number of support requests.
The Step Explorer allows to explore conversational steps and can show how these steps are interconnected with each other.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/7bf4ed7-Step_Explorer_n1.svg" width="100%" />
  <figcaption>Step Explorer UI</figcaption>
</figure>

- Start the Step Explorer via sidebar menu selection.

When the Step Explorer is selected, the agent name is displayed in the top left corner. Insights processes the current Agent's data and the Step Explorer report displays the data-related analytic graphs. If multiple agents are available in Cognigy.AI, you can select them here in a drop-down menu to analyze each of them.

???+ info "Note"
    **When switching between your Virtual Agent in Cognigy.AI to Cognigy Insights all filters are set in the way that you see the data concerning the active Agent. You can see how this Agent performs over a time period.** 
    **To switch between Cognigy.AI and the Cognigy Insights application click on the correspondent  "Insights" menu point in your user menu.**

## Filter options
<div class="divider"></div>

???+ warning "Note"
    **Every change in filter settings needs to be confirmed with “Apply” to be active.**

**Local filter options**
<div class="divider"></div>

???+ info "Note"
    The local filter options at the top are specific to the Step Explorer.

**Starting Step**

Conversational [steps]({{config.site_url}}ai/tools/analytics/analytics-concepts/#steps) are only available and displayed here when you first have configured the Node settings in your Flow with [annotations]({{config.site_url}}insights/step-explorer/#annotations) in the “Analytics steps” section e.g. with 'Welcome New Caller'. Then you can select the starting step here for Step Explorer processing starting at this point.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/c54d50d-Step_Explorer_Starting_Step_250.svg" width="60%" />
  <figcaption>Local filter "Starting Step"</figcaption>
</figure>

**Direction**

You can choose between **Forward** and **Backward**. 
If you apply the forward direction, the step report starts with the first step (from the conversation's beginning to the end).
If you apply the backward direction, the step report starts at the last step (from the conversation's end to the beginning).

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/c03f83b-Step_Explorer_Direction.svg" width="60%" />
  <figcaption>Local filter "Direction"</figcaption>
</figure>

**Global filter options**
<div class="divider"></div>
???+ info "Note"
    The global filter options at the bottom apply to all applications running in Cognigy Insights.
    More information about global filters you can find here: [Global Filter]({{config.site_url}}insights/global-filter/).

## Annotations
<div class="divider"></div>
Before working with Step Explorer you need to annotate certain components in Cognigy.AI. Annotations can be defined in the Node settings of your configured Flow. 
Start the Node Editor, go to “Settings” and enter a meaningful annotation in the “Analytics step” section. The annotation should have an informative reference to the configured node. 
When you want to annotate for example a Say Node which starts a customer conversation with a welcome you can enter “Greetings” or “Welcome New Caller”. For Order Intents, you can enter in the  “Analytics step“ field for example “Order Intent triggered” as an annotation.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/c2f0e52-Say_Node_Analytics_step_setting_300.svg" width="60%" />
  <figcaption>Say Node editor with annotation in the "Analytics step" section</figcaption>
</figure>

The more Flow Nodes you name with annotations in the “Analytics step” sections, the more fine graduation you will get with the Step Explorer data display.

???+ danger "Note"
    The Step Explorer absolutely requires defined annotations for the evaluation and display of analytics data.

The Step Explorer provides the following advantages:

- Order intent understanding (how many customers have ordered something).
- Understanding of customer reactions at certain steps (how many, how often,….).
- You can define different time frames for evaluation.
- You can display the step report both in "Forward" and "Backward" directions.
- You can get the step report beginning at a „Starting Step“.
- You can click on a  step to see details.
- You can select available snapshots from different Virtual Agent versions to compare them for improvement purposes.

## Analysis
<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/7bf4ed7-Step_Explorer_n1.svg" width="100%" />
  <figcaption>Step Explorer: Analytic steps displayed in <b>forward direction</b></figcaption>
</figure>

When local filter "Forward Direction"  is set, the Step Explorer displays the conversations analysis results with the conversation's start on the left side to the conversation's end on the right side. 

Using the previously in Cognigy.AI defined annotations in your Flow Nodes the Step Explorer can analyze the conversation steps and every annotation is assigned to a specific step. The corresponding conversation data in relation to the defined steps lead to a percentage distribution which the Step Explorer visualizes on the screen.

**Analysis example:**  
100% of the users went through the starting step at the beginning of a conversation.

99% of the users who started a conversation went through a welcome as a new caller.

66% of the 'new callers' made an appointment - 11% of the new callers initiated a handover request.

51% of the users who made an appointment completed the booking. 

48% of users who made an appointment needed explanations .....etc.

89% of users who needed an explanation completed the booking.

???+ info "Note"
    **The red marked areas of a step represent the number of users who dropped off at that point. 
    You may take an early "drop off" in a conversation to improve your Agent and to inspect with our [Message Explorer]({{config.site_url}}insights/message-explorer/) what did the Virtual Agent say before the user dropped off.**

- You can get more details displayed when you hover the mouse over any step.   

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/ddd1d85-Step_Explorer_handover_request_n2_400.svg" width="100%" />
  <figcaption>Details to the "Handover request" step</figcaption>
</figure>

- You can select any step as "**Starting Step**" in the local filter settings. The Step Explorer will then visualize the analysis beginning at that step.

- You can change the conversation's "**Forward**" direction to a "**Backward**" direction. The Step Explorer will then display the analysis starting on the left side with the end of a conversation.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/7d637e4-Step_Explorer_direction_backward_n3.svg" width="100%" />
  <figcaption>Step Explorer: Analytic steps displayed in <b>backward direction</b></figcaption>
</figure>

- You can click on a step, for example on "Make an appointment", and the Step Explorer will change the displayed analysis by a separated display of the selected step and the related analytics data in detail.  

Fields with an 'arrow' icon are placeholders for hidden steps. These hidden steps will be displayed only when you click on an 'arrow field'. Using arrow fields make sure that the displayed steps are clearly arranged.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/d54affb-Step_Explorer_make_appointment_n4.svg" width="100%" />
  <figcaption>Example: Separate display of a selected step "Make an appointment"</figcaption>
</figure>

**Example step analysis of "Make an Appointment"**:

**Step label**: 66% of the 'new callers' from the previous step made an appointment.
**Additional information via hover field**: 66 % of the users who started a conversation made an appointment (the number found by Step Explorer: 5,477).

48% of the users who started to make an appointment needed explanations of what the Agent just did.
89% of them who needed explanations completed the booking and all of them dropped off afterward (100%).
____________________________________________________________

48% of the users who started to make an appointment completed the booking.

100% of the users who completed a booking dropped off.

???+ info "Note"
    The rated value of a conversation step relates directly to the previous step value before.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/9c01d54-Step_Explorer_make_appointment_n5.svg" width="100%" />
  <figcaption>Example step: Make an appointment analysis data</figcaption>
</figure>

**Example step "Completed Booking" and evaluation of additional displayed analytics data**:

89% of the users who needed explanations completed the booking and all of them dropped off afterward (100%; end of conversation).

**additional information (via hover function)**: 

89% of the users completed the booking from the previous step.
28% of the users who started a conversation completed the booking.
The Step Explorer found 2,368 as a total number of completed bookings.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/8e3fdd6-Step_Explorer_completed_booking_n7.svg" width="100%" />
  <figcaption>Example step: Completed booking analysis data</figcaption>
</figure>

### Open Flow 
To check your Flow or to improve the configuration the Step Explorer provides the context menu  **"Open Flow"** option when right-clicking on a specific step, for example "Make an Appointment". Clicking the button leads you to the Flow in Cognigy.AI.

???+ info "Note"
    The context menu "Open Flow" is not available on "drop off" steps or collapsed steps (steps with arrows). 
    The "Open Flow" option is not available when there is no related Flow available in Cognigy. AI or when the Step Explorer visualizes steps of a Snapshot.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/a040540-Step_Explorer_open_flow_n8.svg" width="100%" />
  <figcaption>Right-clicking a specific explorer step will provide the "Open Flow" option</figcaption>
</figure>

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/1135531-Open_Flow_in_Cognigy_2.svg" width="100%" />
  <figcaption>The "Open Flow" option led to the Flow in Cognigy.AI</figcaption>
</figure>

### Go to Transcript Explorer

In case you want to evaluate the early drop-offs during conversations to improve your Virtual Agent a right-click on a 'Drop off' step provides a context menu "Go to Transcript Explorer" which allows you to check the conversations by searching keywords representing the steps when the customer drops off.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/a7e0fdb-Step_Explorer_early_drop_off_situation_4.svg" width="100%" />
  <figcaption>Go to Transcript Explorer to evaluate the conversation steps</figcaption>
</figure>


## More information
<div class="divider"></div>

- [Cognigy Insights]({{config.site_url}}insights/cognigy-insights/)

- [Global Filter]({{config.site_url}}insights/global-filter/)

- [Dashboard Overview]({{config.site_url}}insights/dashboard-overview/)

- [Dashboard Engagement]({{config.site_url}}insights/dashboard-engagement/)

- [Dashboard NLU Performance]({{config.site_url}}insights/dashboard-nlu-performance/)

- [Transcript Explorer]({{config.site_url}}insights/transcript-explorer/)

- [Message Explorer]({{config.site_url}}insights/message-explorer/)

- [Download Report]({{config.site_url}}insights/download-report/)