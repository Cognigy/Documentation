# Creating Outbound Calls 

Outbound calls are created in a few different ways: 

- [Transfer node]() 
- REST API POST request
    - with [HTTP node]() form the flow
    - Postman call


## REST API POST request 

Send a simple HTTP POST request to our API to generate an outbound call. When the call is answered, the specified webhook will be invoked to manage the call.

Authorization is established via a Bearer token that is filled with an [API key value generated]() in our Self-Service Portal.

=== "cURL"

    ``` text
    curl --location --request POST 'https://<base_url>/v1/Accounts/<account_sid>/Calls' \
    --header 'Authorization: Bearer <valid-api-token>' \
    --header 'Accept: application/json' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "application_sid": "<application_sid>",
        "from": "<number of a Voice Bot>",
        "to": {
            "type": "phone",
            "number": "<number of a User>"
            }
    }'
    ```

=== "JSON body"

    ```JSON
    {
        "application_sid": "<application_sid>",
        "from": "<number of a Voice Bot>",
        "to": {
            "type": "phone",
            "number": "<number of a User>"
        }
    }
    ```

Response example:

The response is an HTTP 201 with a body containing the `call_sid` of the outbound call session and the SIP Call-ID of the INVITE sent by the feature-server. 

```JSON
{
    "sid":"98e4dd21-b178-4af1-83b6-3c1582893890",
    "callId":"8d07a246-f1ac-123b-b8ac-02113b73b840"
} 
```

### Basic configurations

The following properties may be provided in the body of the request: 

| Option          | Description  | Required |
| --------------- | ---------------- | -------- |
| application_sid | The application to invoke when the call is answered | yes  |
| from            | The calling party phone number  | yes      |
| to              | The destination to Dial to | yes      |
| timeLimit       | Maximum length of call in seconds                                             | no       |
| timeout         | Ring `no-answer` timeout, in seconds <br>Default is 60s | no       |
| tag             | An object containing key-pairs of metadata that will be attached to this call | no       |


### Advanced configurations

| Option          | Description  | Required |
| --------------- | ---------------- | -------- |
| actionHook      | webhook to invoke when the call ends. The webhook will include properties describing the outcome of the call attempt | no    |
| amd             | enable Answering Machine Detection; see answering machine detection for details  | no       |
| confirmHook     | webhook for an application to run on the callee's end after the dialed number answers but before the call is connected. This allows the caller to provide information to the dialed number, giving them the opportunity to decline the call, before they answer the call.| no       |
| dtmfCapture     | an array of strings that represent dtmf sequence which, when detected, will trigger a mid-call notification to the application via the configured dtmfHook | no       |
| dtmfHook        | a webhook to call when a dtmfCapture entry is matched. This is a notification only -- no response is expected, and any desired actions must be carried out via the REST updateCall API.                                                                       | no       |
| headers         | an object containing arbitrary sip headers to apply to the outbound call attempt(s) | no       |
| listen          | a nested listen action, which will cause audio from the call to be streamed to a remote server over a websocket connection | no       |
| referHook       | webhook to invoke when an incoming SIP REFER is received on a dialed call. If the application wishes to accept and process the REFER, the webhook application should simply return an HTTP status code 200 with no body, and VG will send a SIP 202 Accepted. Otherwise, any HTTP non-success status will cause VG to send a SIP response to the REFER with the same status code.  <br><br>Note that VG will send the 202 Accepted and do nothing further. It is the responsibility of the third-party application to then outdial a new call and bridge the other leg, presumably by using the REST API. | no       |
| transcribe      | a nested transcribe action, which will cause the call to be transcribed | no       |