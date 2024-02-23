---
title: "Answering Machine Detection (AMD)"
slug: "amd"
hidden: false
---

# Answering Machine Detection (AMD)

The Answering Machine Detection feature can be enabled on outbound calls to provide an indication of whether a call has been answered by a person or a machine. To use this feature, provide the `amd` property in a [dial](dial.md) command.

In this example, when the dialed call is answered,
the answering machine detection feature begins listening to the outbound call
and will send a webhook to `amd` with an indication of whether a human or a machine has answered the call.

```json
{
  "verb": "dial",
  "actionHook": "/outdial",
  "callerId": "+495691733312",
  "target": [
    {
      "type": "phone",
      "number": "+49083084888",
      "trunk": "Twilio"
    }
  ],
  "amd": {
        "actionHook": "amd",
        "recognizer": {
            "vendor": "microsoft",
            "language": "en-US",
        }
    }
}
```

Example of a webhook payload:

```json
{"type":"amd_human_detected"}
```

## Events

The payload included in the `actionHook` always contains a type property describing the event type. 
Some event types may include additional properties.

| Event                        | Description                                        | Additional Properties                                                                                                                                                                                                |
|------------------------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| amd_human_detected           | A human is speaking.                               | `{reason, greeting, language}`, where: <br> - `reason` — a short greeting, <br> - `greeting` — is the recognized greeting. <br> - `language` — is the recognized language.                                           |
| amd_machine_detected         | A machine is speaking.                             | `{reason, hint, transcript, language}`, where: <br> - `reason` — a hint or long greeting. <br> - `hint` — a recognized hint. <br> - `transcript` — a recognized greeting. <br> - `language` — a recognized language. |
| amd_no_speech_detected       | No speech was detected.                            | None                                                                                                                                                                                                                 |
| amd_decision_timeout         | No decision was able to be made in the time given. | None                                                                                                                                                                                                                 |
| amd_machine_stopped_speaking | Machine has completed the greeting.                | None                                                                                                                                                                                                                 |
| amd_tone_detected            | A beep was detected.                               | None                                                                                                                                                                                                                 |
| amd_error                    | An error has occurred.                             | Error (an error message)                                                                                                                                                                                             |
| amd_stopped                  | Answering machine detection was stopped.           | None                                                                                                                                                                                                                 |


Multiple events can occur during a single call. For example, on a call to an answering machine, the sequence could be:

1. `amd_machine_detected`
2. `amd_tone_detected`
3. `amd_machine_stopped_speaking`

## Configuration

The full set of configuration parameters:

| Parameter                          | Description                                                                                                                                       | Required |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| actionHook                         | The webhook to send AMD events.                                                                                                                   | Yes      |
| thresholdWordCount                 | The number of spoken words in a greeting that result in an `amd_machine_detected` result. The default value is `9`.                               | No       |
| recognizer                         | Speech recognition parameters, used as per the [gather](gather.md) and [transcribe](transcribe.md) functions. The default value is `application`. | No       |
| timers                             | An object containing various timeouts.                                                                                                            | No       |
| timers.noSpeechTimeoutMs           | The time in milliseconds to wait for speech before returning `amd_no_speech_detected`. The default value is `5000`.                               | No       |
| timers.decisionTimeoutMs           | The time in milliseconds to wait before returning `amd_decision_timeout`. The default value is `15000`.                                           | No       |
| timers.toneTimeoutMs               | The time in milliseconds to wait to hear a tone. The default value is `20000`.                                                                    | No       |
| timers.greetingCompletionTimeoutMs | The silence in milliseconds to wait for during greeting before returning `amd_machine_stopped_speaking`. The default value is `2000`.             | No       |

## Inbound calls

Answering machine detection can also be applied to incoming calls by including an `amd` property in a [config](config.md) command. Although it's not as typical to require answering machine detection for inbound calls, this capability proves valuable in scenarios where the Voice Gateway is situated behind a dialer. In such cases, the dialer makes the initial outbound call and then links it to the Voice Gateway through an `INVITE` request.