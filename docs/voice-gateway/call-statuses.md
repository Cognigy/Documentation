---
title: "Outbound Call Statuses"
slug: "outbound-call-statuses"
description: "Monitor outbound call statuses with Cognigy Voice Gateway."
hidden: false
tags:
  - voice gateway
  - outbound
  - outbound call statuses
---

# Outbound Call Statuses

In Cognigy.AI, you can monitor [call events in your Flow](references/events/overview.md) to track the progress of both inbound and outbound calls. 
While you can monitor call events directly through your Flow, for more flexibility, you can also track some statuses of outbound calls through webhook responses.

To receive webhook responses for outbound calls, you need to add the [`notifyUrl`](creating-outbound-calls.md#create-an-outbound-call-via-api-request) parameter with the appropriate webhook URL to the outbound call request. 
This capability allows you to track the occurrence of events, compare them, and identify potential issues.

### Outbound Call Status Descriptions

| **Call Status** | **Description**                                                                                                                                                                                                                                                          |
|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `trying`        | Voice Gateway sends the `INVITE` request to the destination target and receives the `SIP 100 Trying` response.                                                                                                                                                           |
| `ringing`       | The destination target has received the `INVITE` request and sends the `SIP 180 Ringing` response to  Voice Gateway, indicating that Voice Gateway is ringing.                                                                                                           |
| `early-media`   | Voice Gateway receives early media streams (audio, like custom ringtones or announcements) from the destination target before the destination target answers the call, often signaled by a received `SIP 183 Session Progress` response.                                           |
| `in-progress`   | The outbound call has been successfully answered by the destination target. Voice Gateway receives `SIP 200 OK`.                                                                                                                                                         |
| `completed`     | The answered outbound call has ended. This action occurs when Voice Gateway sends or receives a `SIP BYE` request, terminating the session.                                                                                                                              |
| `failed`        | The outbound call attempt failed to connect before the call was answered, except when the destination target was busy or didn't answer. Possible causes include `4xx Client Error`, `5xx Server Error`, `6xx Global Failure`, network issues, or Voice Gateway errors. |
| `no-answer`     | The outbound call attempt failed because Voice Gateway received the `SIP 486 Busy Here` or `600 Busy Everywhere` response from the destination target.                                                                                                                   |

## More Information

- [Create Outbound Calls](creating-outbound-calls.md)
- [Outbound Call Routing](webapp/outbound-call-routing.md)
- [Overview](overview.md)