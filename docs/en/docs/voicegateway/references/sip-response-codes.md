---
title: "SIP Response Codes"
slug: "sip-response-codes"
hidden: false
---

# SIP Response codes

In this page we provide a reference of the SIP response codes and their meanings to give clarity on the actions to be taken in case they are received. This should help the Voice Gateway user to be able to troubleshoot their Voice calls and bots. These response code will usually be visible to you in Cognigy.AI Logs or your Agent as "sip_status" key value or in a [downloaded PCAPs](../webapp/recent-calls.md) for the specific call. 

Please also always refer to the [Alerts page](../webapp/alerts.md) in the Self-Service Portal to see if any alertings were received.

## Meaning & Actions

### **200 OK**

**Meaning**

- The call was successfully answered.

**Actions**

- No specific actions required.

### **202 OK**

**Meaning**

- This code is indicating that the request has been accepted for processing, but the processing has not been completed.

**Actions**

- No specific actions required.

### **400 Bad Request**

**Meaning**

- The request could not be understood by the server due to malformed syntax. The client should not repeat the request without modifications.

**Actions**

- Review the request for any syntax errors or missing parameters. Cognigy.AI error message could have clues on what is missing.
- Ensure that the request conforms to the SIP protocol's standards and requirements.
- Check for any typos in the SIP URI or the headers.
- If the problem persists, consult the server logs or documentation for more specific information regarding the error.

### **403 Permission Denied**

**Meaning**

- The server understood the request but refuses to authorize it. This can happen for various reasons, including the user not having the necessary permissions or having wrong credentials.
- This can also sometimes be a call from a SIP spammer.

**Actions**

- Check the request credentials (e.g., username and password) and permissions.
- Ensure the request is being sent to the correct server and endpoint.
- If there are large amounts of these this should investigate and possibly the source IP blocked.

### **404 Not Found**

**Meaning**

- This might be a call to a phone number that is not provisioned in the Voice Gateway database (Self-Service Portal).
- If there are significant amount of these, this might can also be a SIP spam attempt.

**Actions**
- Please check the Carrier or Phone numbers configurations in the Self-Service-Portal. 
- Verify the request URI provided in your Transfer node is correct. The issue may be due to a mistyped address or an outdated record.
- A high volume of these SIP status codes could indicate a SIP spam attempt. Investigate further for troubleshooting and possible IP blocking.

### **408 Request Timeout**

**Meaning**

- This indicates that the SIP endpoint was unresponsive. The server did not receive a complete request message within the time it was prepared to wait.

**Actions**

- This often indicates network issues or a problem with the server. Try sending the request again after some time or investigate network connectivity problems in a lower level. 
- Check and compare Voice Gateway PCAP for a specific call with your provider's PCAP for that call.

### **480 Temporarily Unavailable**

**Meaning**

- This code is usually returned if there is no `application` configured for an incoming call. 
- This can be also be returned, if there are no more resources available to handle a call (system is at a maximum capacity).

**Actions**

- Check if an `application` is properly attached to the Phone number in the Self-Service Portal.
- Retry after some time. If the issue persists, contact the callee by other means to confirm their availability.

### **487 Request Terminated**

**Meaning**

- This is a call where the caller hung up before we connected them.

**Actions**

- No specific action needed if the termination was intentional. If unexpected, inspect the call flow for issues e.g faulty Code Nodes.

### **488 Not Acceptable Here**

**Meaning**

- This indicates the incoming call requested a codec or a facility in the Session Description Protocol (SDP) that we do not support or sent a parameter that was not acceptable.

**Actions**

- Check the [codecs or any other session parameters](../installation/technical-capabilities.md) being used and ensure they are supported by both the caller and callee.

### **500 Server Internal Error**

**Meaning**

- This indicates an application error of some kind. The server encountered an unexpected condition that prevented it from fulfilling the request. This is a server-side issue.

**Actions**

- Attempt the request later or contact the server administrator if the problem persists. E.g., if Voice Gateway responded with this code contact Customer Support, if it is your carrier responded with this code contact your provider.

### **503 Service Unavailable**

**Meaning**

- This indicates we are not handling the call for a specific reason, which could be that the account is `inactive` or has reached its `max call limit` set.

**Actions**

- Contact Customer Support or your Customer Success Manager at Cognigy.

### **603 Decline**

**Meaning**

- This could indicate that the callee's end system was contacted successfully but the user explicitly rejected the call. 
- This could also indicate that we did not handle the call for a specific reason, which may include an issue connecting to the Voice Gateway endpoint.

**Actions**

- If it was a normal rejection of a call, no further action can be taken to establish the call. If necessary, try contacting the user through alternative means.
- If this response was not expected, check your Self-Service Portal configurations of your Carrier as well as the [Alerts page](../webapp/alerts.md).
- Check Cognigy AI logs for any error log messages that could indicate the root cause.


If you cannot resolve your issue, please contact Cognigy Customer Support.