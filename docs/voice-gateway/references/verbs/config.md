---
title: "Config"
slug: "config"
hidden: false
---

# Config

The `config` verb allows developers to change the default speech settings during a session or to collect speech or DTMF input in the background while other verbs run. This verb is non-blocking, so the specified settings are changed immediately and the application proceeds with the next verb.

```json
{
  "verb": "config",
  "synthesizer": {
    "vendor": "microsoft",
    "language": "de-DE",
    "voice": "de-DE-KillianNeural"
  },
  "recognizer": {
    "vendor": "google",
    "language": "de-DE"
  },
  "bargeIn": {
    "enable": true,
    "input": [
      "speech"
    ],
    "actionHook": "/userInput"
  }
}
```

## Configuration

The full set of configuration parameters:

| Parameter                  | Description                                                                                                                                                                                                                                                                             | Required                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| amd                        | Enable the [Answering Machine Detection](amd.md) (AMD).                                                                                                                                                                                                                                 | No                                         |
| bargein                    | A background [`gather`](gather.md) verb.                                                                                                                                                                                                                                                | No                                         |
| bargeIn.enable             | If true, begins listening for speech or DTMF input while the session executes other verbs. If false, stops any background listening task in progress.                                                                                                                                   | No                                         |
| bargeIn.sticky             | If both `bargeIn.enable` and `bargeIn.sticky` are `true`, another background [`gather`](gather.md) will automatically initiate after detecting speech or DTMF.                                                                                                                          | No                                         |
| bargeIn.actionHook         | A webhook to call if the user input is collected from the background gather. Default is `voice`                                                                                                                                                                                         | No                                         |
| bargeIn.input              | An array specifying the allowed types of input: `['digits']`, `['speech']`, or `['digits', 'speech']`.                                                                                                                                                                                  | Yes                                        |
| bargeIn.finishOnKey        | The DTMF key that signals the end of DTMF input.                                                                                                                                                                                                                                        | No                                         |
| bargeIn.numDigits          | The exact number of DTMF digits expected to gather.                                                                                                                                                                                                                                     | No                                         |
| bargeIn.minDigits          | The minimum number of DTMF digits expected to gather. The default value is `1`.                                                                                                                                                                                                         | No                                         |
| bargeIn.maxDigits          | The maximum number of DTMF digits expected to gather.                                                                                                                                                                                                                                   | No                                         |
| bargeIn.interDigitTimeout  | The amount of time to wait between digits after `minDigits` have been entered.                                                                                                                                                                                                          | No                                         |
| boostAudioSignal           | A string or integer value specifying the number of decibels to increase or decrease the outgoing audio signal level, for example, `-6 dB`. <br> Note that this parameter applies only to the main audio track, not to any additional (dub) audio tracks. <br> The default value is `0`. | No                                         |
| listen                     | A nested [`listen`](listen.md) verb.                                                                                                                                                                                                                                                    | No                                         |
| notifyEvents               | A boolean parameter. Enables event notifications over WebSocket connections. verbs sent over WebSocket must contain an `id` property to use this feature.                                                                                                                               | No                                         |
| onHoldMusic                | The URL to a remote music source to use when a call is placed on hold.                                                                                                                                                                                                                  | No                                         |
| recognizer                 | Change the session-level default speech recognition settings. See the [`transcribe`](transcribe.md) verb for details on the `recognizer` property.                                                                                                                                      | No                                         |
| reset                      | A string or array. Resets either `recognizer` or `synthesizer` to the default application settings.                                                                                                                                                                                     | No                                         |
| record                     | Options to manage call recording using [SIPREC](sip-request.md).                                                                                                                                                                                                                        | No                                         |
| record.action              | On of the following actions can be used: `startCallRecording`, `stopCallRecording`, `pauseCallRecording`, or `resumeCallRecording`.                                                                                                                                                     | Yes                                        |
| record.siprecServerURL     | The SIP URI for the SIPREC server.                                                                                                                                                                                                                                                      | Required if action is `startCallRecording` |
| record.recordingID         | The user-supplied string to identify the recording.                                                                                                                                                                                                                                     | No                                         |
| sipRequestWithinDialogHook | An object or string. A webhook to call when a SIP request is received within the dialog. For example: `INFO`, `NOTIFY`, or `REFER`.                                                                                                                                                     | No                                         |
| synthesizer                | Change the session-level default text-to-speech settings. See the [`say`](say.md) verb for details on the `synthesizer` property.                                                                                                                                                       | No                                         |

## More Information

- [Listen](listen.md)
- [Gather](gather.md)