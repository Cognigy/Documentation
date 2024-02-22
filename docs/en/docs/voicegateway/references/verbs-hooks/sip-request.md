# SIP:request

The sip:request command is used to send a SIP INFO, NOTIFY, or MESSAGE request on an established call leg, i.e. an in-dialog request. This allows an application to send SIP messages during a call; e.g. to transmit metadata to the calling sip endpoint using a SIP INFO message.

```
{
  "verb": "sip:request",
  "method": "INFO",
  "headers": {
    "X-Metadata": "my sip metadata"
  }
  "actionHook": "/info"
}
```

You can use the following options in the `sip:request` command:

| option     | description                                                              | required |
| ---------- | ------------------------------------------------------------------------ | -------- |
| method     | SIP method, should be one of INFO, MESSAGE, or NOTIFY                    | yes      |
| headers    | an object containing headers (key-value) to include with the SIP request | no       |
| body       | the body of the SIP request, if any                                      | no       |
| actionHook | a webhook to call when the sip request has completed                     | no       |

!!! note "Nested JSON  SIP messages"
    To send a nested object use a string JSON notation of an object. For example:
    ```
    {
   "infoObject": "{\"objectLevel1\": {\"objectLevel2\": {\"objectLevel3\": \"stringValue\"}}}"
    }
    ```

!!! note "Sending a nested JSON in the message `body`"
    To send a nested object in the `body` you will need to include "Content-Type" header with value “application/json" and then in the `body` value use a string notation of JOSN object.