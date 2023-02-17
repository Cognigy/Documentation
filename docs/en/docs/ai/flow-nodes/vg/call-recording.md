---
 title: "Call Recording" 
 slug: "call-recording" 
 hidden: false 
---
# Call Recording

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vg/call-recording.png" width="100%" />
  <figcaption>Voice Gateway Call Recording</figcaption>
</figure>

## Description
<div class="divider"></div>

The Voice Gateway Call Recording Node controls the voice recording capabilities of the conversation.

The Voice Gateway Call Recording Node initiates or terminates the recording of a conversation.

The Node uses a Voice Gateway API to act as a [SIPREC](https://datatracker.ietf.org/doc/html/rfc7866) client to record the audio using the SIPREC protocol. The recorded audio is sent to a Session Recording Server (SRS) for storage. You can use any SRS for storing audio records.

| Parameter | Type | Description | Activity type |
| ----------- | ----------- | ----------- |  ----------- |
| Activity | Select | Whether to start, stop, pause, or resume a call recording. | -
| Call Recording Server | CognigyScript | Defines the SRS URL as an IP Group name (as configured on the Voice Gateway) to record the call.|  Start Call Recording
| Call Recording ID | CognigyScript | Defines the recording session identifier, which is forwarded by the Voice Gateway to the SRS. | Start Call Recording



