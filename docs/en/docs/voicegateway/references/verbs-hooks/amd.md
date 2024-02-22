# Answering Machine Detection (AMD)

The Answering Machine Detection feature can be enabled on outbound calls to provide an indication of whether a call has been answered by a person or a machine. This is done by providing an `amd` property in a [dial] command as shown in the simple example below:

```
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

In this example, when the dialed call is answered the answering machine detection feature will begin listening to the outbound call leg and will send a webhook to 'amd' with an indication of whether a human or a machine has answered the call.

The payload in the webhook will look something like this:

```
{"type":"amd_human_detected"}
```

## Events
The payload that is included in the `actionHook` will always contain a type property describing the event type. Some event types may also include additional properties.

| type                         | meaning                                           | additional properties                                                                                                                                                                           |
| ---------------------------- | ------------------------------------------------- | --------- |
| amd_human_detected           | a human is speaking | {reason, greeting, language} <br> reason is 'short greeting', <br> greeting is the recognized greeting and <br> language is the recognized language |
| amd_machine_detected         | a machine is speaking | {reason, hint, transcript, language} <br> reason is 'hint' or 'long greeting', <br> hint is the recognized hint <br> transcript is the recognized greeting and<br>language is the recognized language |
| amd_no_speech_detected       | no speech was detected | none |
| amd_decision_timeout         | no decision was able to be made in the time given | none |
| amd_machine_stopped_speaking | machine has completed the greeting                | none |
| amd_tone_detected            | a beep was detected                               | none |
| amd_error                    | an error has occurred                             | error - an error message |
| amd_stopped                  | answering machine detection was stopped           | none|

It is possible to receive more than one event for a single call. For instance, a possible sequence of events on a call to an answering machine is:

1. amd_machine_detected, then
2. amd_tone_detected, then
3. amd_machine_stopped_speaking

## Configuration

The full set of configuration parameters:

| property | meaning | required |
| ---------------------------------- | ------------ | ------------------------ |
| actionHook                         | webhook to send amd events | yes |
| thresholdWordCount                 | number of spoken words in a greeting that result in an amd_machine_detected result, default=9  | no           |
| recognizer                         | speech recognition parameters, used as per [gather]() and [transcribe](), default=application defaults | no |
| timers                             | object containing various timeouts | no |
| timers.noSpeechTimeoutMs           | time in milliseconds to wait for speech before returning amd_no_speech_detected, default=5000 | no         |
| timers.decisionTimeoutMs           | time in milliseconds to wait before returning amd_decision_timeout, default=15000  | no       |
| timers.toneTimeoutMs               | time in milliseconds to wait to hear a tone, default=20000 | no        |
| timers.greetingCompletionTimeoutMs | silence in milliseconds to wait for during greeting before returning amd_machine_stopped_speaking , default=2000  | no|


## Answering machine detection on inbound calls

Answering machine detection can also be performed on an inbound leg by adding an `amd` property to a [config]() command. While it is less common to need to do answering machine detection on an inbound leg, this can be useful when VG is behind a dialer that has placed the outbound call and then connected it to VG by sending an INVITE.