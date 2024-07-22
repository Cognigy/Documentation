---
title: "Answering Machine Detection (AMD)"
slug: "amd"
hidden: false
---

# Answering Machine Detection (AMD)

The Answering Machine Detection (AMD) feature can be enabled on outbound calls to provide an indication of whether a call has been answered by a person or a machine. To use this feature, provide the `amd` property in a [dial](dial.md) verb.

In this example, the Answering Machine Detection feature is activated as soon as the call is answered, and later sends a webhook to `amd` to determine if a human or a machine has answered the call.

```json
{
  "verb": "dial",
  "actionHook": "dial",
  "callerId": "+49XXXXXXXXXXX",
  "target": [
    {
      "type": "phone",
      "number": "+49XXXXXXXXXXX",
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

{"type":"amd_machine_detected","reason":"hint","hint":"call has been forwarded","language":"en-us"}

{"type":"amd_no_speech_detected"}
```

## Configuration

The full set of configuration parameters:

| Parameter                          | Description                                                                                                                                       | Required |
|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| actionHook                         | A webhook to receive an HTTP POST for AMD events. Default is `amd`                                                                                | Yes      |
| thresholdWordCount                 | The number of spoken words in a greeting that result in an `amd_machine_detected` result. The default value is `9`.                               | No       |
| recognizer                         | Speech recognition parameters, used as per the [gather](gather.md) and [transcribe](transcribe.md) functions. The default value is `application`. | No       |
| timers                             | An object containing various timeouts.                                                                                                            | No       |
| timers.noSpeechTimeoutMs           | The time in milliseconds to wait for speech before returning `amd_no_speech_detected`. The default value is `5000`.                               | No       |
| timers.decisionTimeoutMs           | The time in milliseconds to wait before returning `amd_decision_timeout`. The default value is `15000`.                                           | No       |
| timers.toneTimeoutMs               | The time in milliseconds to wait to hear a tone. The default value is `20000`.                                                                    | No       |
| timers.greetingCompletionTimeoutMs | The silence in milliseconds to wait for during greeting before returning `amd_machine_stopped_speaking`. The default value is `2000`.             | No       |

## Events

The payload included in the `actionHook` always contains a type property describing the event type. 
Some event types may include additional properties.

| Event                        | Description                                        | Additional Properties                                                                                                                                                                                                |
|------------------------------|----------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| amd_human_detected           | A human is speaking.                               | `{reason, greeting, language}`, where: <br> - `reason` — a short greeting, <br> - `greeting` — a recognized greeting. <br> - `language` — a recognized language.                                                     |
| amd_machine_detected         | A machine is speaking.                             | `{reason, hint, transcript, language}`, where: <br> - `reason` — a hint or long greeting. <br> - `hint` — a recognized hint. <br> - `transcript` — a recognized greeting. <br> - `language` — a recognized language. |
| amd_no_speech_detected       | No speech was detected.                            | -                                                                                                                                                                                                                    |
| amd_decision_timeout         | No decision was able to be made in the time given. | -                                                                                                                                                                                                                    |
| amd_machine_stopped_speaking | Machine has completed the greeting.                | -                                                                                                                                                                                                                    |
| amd_tone_detected            | A beep was detected.                               | -                                                                                                                                                                                                                    |
| amd_error                    | An error has occurred.                             | An error message.                                                                                                                                                                                                    |
| amd_stopped                  | Answering Machine Detection was stopped.           | -                                                                                                                                                                                                                    |

Multiple events can occur during a single call. For example, on a call to an answering machine, the sequence could be:

1. `amd_machine_detected`
2. `amd_tone_detected`
3. `amd_machine_stopped_speaking`

## Inbound calls

You can use Answering Machine Detection for incoming calls by adding an `amd` property in a [`config`](config.md) verb. It can be useful in situations where Voice Gateway is located behind a dialer. In these cases, the dialer initiates the outbound call and then links it to Voice Gateway via an `INVITE` request.

## More information

- [ANSWERING_MACHINE_DETECTION](../events/ANSWERING_MACHINE_DETECTION.md)