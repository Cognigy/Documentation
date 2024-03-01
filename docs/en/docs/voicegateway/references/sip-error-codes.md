---
title: "SIP Error codes"
slug: "sip-error-codes"
hidden: false
---

# SIP Error codes meaning

The Kibana dashboard provides a pie chart showing the frequency of the SIP responses to incoming calls over a specified period of time.  For instance, at the time of this writing the dashboard for the dev system shows these response codes being received over the past 90 days.

The 200 OK response (shows as green in the diagram) is the "normal" and expected response for an incoming call from a Cognigy customer that has been properly provisioned on the system.  It means that the call was successfully answered.  It doesn't necessarily mean that there were no issues with the call or the flow after that, it just means that from a signaling perspective we answered the call and allocated the necessary resources within VG to handle the call.

You might expect that anything less than 100% 200 OK responses indicates an issue.  This is not actually the case, but it is important that these status codes be tracked on a daily (if not hourly or less) basis and any failures of a significant status code (as described below) or any significant trend of large failures of any code be followed up on.  Following up means to retrieve the sip traces and application logs for some of failures and diagnosing them to determine whether further concern and action is warranted.  This is specifically the function of a Level 1 support team for Voice Infrastructure.  It should not be the function of the Engineering team to look into these unless this first level of troubleshooting has been done.

## Meaning of SIP status codes

- **200 OK** - The call was successfully answered
- **403 Permission Denied** - This is likely a call from a SIP spammer.  If we see large amounts of these we should investigate and possibly block the source IP.
- **404 Not Found** - This is a call to a phone number that is not provisioned in the VG database. It may be a customer that has not configured their trunk and numbers properly or it may be a SIP spammer.  We should track and investigate if we receive significant numbers of these.
- **408 Request Timeout** - This indicates some sip endpoint was unresponsive. Any incidents of these should be immediately investigated.
- **480 Temporarily Unavailable** - This can be returned if there are no feature servers or rtpengine resources available to handle a call.  It is also returned if there is no application configured for an incoming call. We should track and investigate if we receive significant numbers of these.
- **487 Request Terminated** - This is a call where the caller hung up before we connected them.  While this can happen, large numbers of this status code may indicate we are experience a problem or delay in answering calls, and should be investigated.
- **488 Not Acceptable Here** - This indicates the incoming call requested a codec or a facility in the SDP that we do not support.  Any incidents of these should be immediately investigated.
- **500 Server Internal Error** - This indicates an application error of some kind. Any incidents of these should be immediately investigated.
- **503** - This indicates we are not handling the call for a specific reason, which could be that the account is inactive or has reached it max call limit.  We should track and investigate if we receive significant numbers of these.
- **603** - This indicates that we did not handle the call for a specific reason, which may include an issue connecting to the VG endpoint.  Any incidents of these should be immediately investigated.
