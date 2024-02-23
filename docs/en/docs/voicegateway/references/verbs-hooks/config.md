---
title: "Config"
slug: "config"
hidden: false
---

# Config

The `config` command enables the developer to modify the default speech settings for the current session or to collect speech or DTMF input in the background while other verbs are executed.
This verb is non-blocking, meaning that the specified settings are changed, and execution immediately proceeds to the next verb in the application.

```json
  {
    "verb": "config",
    "synthesizer": {
      "voice": "Jenny"
    },
    "recognizer": {
      "vendor": "google",
      "language": "de-DE"
    },
    "bargeIn": {
      "enable": true,
      "input" : ["speech"],
      "actionHook: "/userInput"
      }
    }
```

## Configuration

The full set of configuration parameters:

| Parameter                  | Description                                                                                                                                                                       | Required                                   |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------|
| amd                        | Enable the [answering machine detection](amd.md) (AMD).                                                                                                                           | No                                         |
| bargein                    | A background [gather](gather.md) command.                                                                                                                                         | No                                         |
| bargeIn.enable             | If true, begins listening for speech or DTMF input while the session executes other verbs. If false, stops any background listening task in progress.                             | No                                         |
| bargeIn.sticky             | If true and `bargeIn.enable` is true, then when the background [gather](gather.md) completes with speech or DTMF detected, it will automatically start another background gather. | No                                         |
| bargeIn.actionHook         | A webhook to call if the user input is collected from the background gather.                                                                                                      | No                                         |
| bargeIn.input              | An array specifying the allowed types of input: `['digits']`, `['speech']`, or `['digits', 'speech']`.                                                                            | Yes                                        |
| bargeIn.finishOnKey        | The DTMF key that signals the end of DTMF input.                                                                                                                                  | No                                         |
| bargeIn.numDigits          | The exact number of DTMF digits expected to gather.                                                                                                                               | No                                         |
| bargeIn.minDigits          | The minimum number of DTMF digits expected to gather. The default value is 1.                                                                                                     | No                                         |
| bargeIn.maxDigits          | The maximum number of DTMF digits expected to gather.                                                                                                                             | No                                         |
| bargeIn.interDigitTimeout  | The amount of time to wait between digits after `minDigits` have been entered.                                                                                                    | No                                         |
| listen                     | A nested [listen](listen.md) command.                                                                                                                                             | No                                         |
| notifyEvents               | A boolean parameter. Enables event notifications over WebSocket connections. Verbs sent over WebSocket must contain an `id` property to use this feature.                         | No                                         |
| onHoldMusic                | The URL to a remote music source to use when a call is placed on hold.                                                                                                            | No                                         |
| recognizer                 | Change the session-level default speech recognition settings. See the [transcribe](transcribe.md) verb for details on the `recognizer` property.                                  | No                                         |
| reset                      | A string or array. Resets either `recognizer` and/or `synthesizer` to the default application settings.                                                                           | No                                         |
| record                     | Options to manage call recording using [SIPREC](sip-request.md).                                                                                                                  | No                                         |
| record.action              | On of the following actions can be used: `startCallRecording`, `stopCallRecording`, `pauseCallRecording`, or `resumeCallRecording`.                                               | Yes                                        |
| record.siprecServerURL     | The SIP URI for the SIPREC server.                                                                                                                                                | Required if action is `startCallRecording` |
| record.recordingID         | The user-supplied string to identify the recording.                                                                                                                               | No                                         |
| sipRequestWithinDialogHook | An object or string; a webhook to call when a SIP request is received within the dialog. For example: `INFO`, `NOTIFY`, or `REFER`.                                               | No                                         |
| synthesizer                | Change the session-level default text-to-speech settings. See the [say](say.md) command for details on the `synthesizer` property.                                                | No                                         |
