---
 title: "Agent Assist" 
 slug: "agent-assist" 
 hidden: false 
---
# Agent Assist

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/1f8d8a9-vg_agentassist.JPG" width="100%" />
  <figcaption>AudioCodes Agent Assist</figcaption>
</figure>

## Description
<div class="divider"></div>
The Agent Assist Node controls the acitivites used for agent assist calls.

The STT engine only starts when a startRecognition activity is received from the Flow and stops when a stopRecognition activity is received from the Flow.

Caller is the user initiating the call.
Callee is the agent who is being called.

| Parameter | Type | Description |
| ----------- | ----------- | ----------- |
| Activity | Select | Whether to start or stop a STT recognition for a participant. |
| Target Participant | Select | Who to start the recognition for. Caller, Callee or both. |

