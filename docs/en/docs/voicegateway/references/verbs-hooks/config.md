# Config

The config command allows the developer to change the default speech settings for the current session, or to gather speech or DTMF input in the background while other verbs are executing.

This verb is non-blocking; i.e. the specified settings are changed and execution immediately continues with the next verb in the application.

```
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

You can use the following attributes in the `config` command:

| option                     | description | required                                   |
| -------------------------- | --------------------------------------- | ------------------------------------------ |
| amd | enable [answering machine detection]() | no                                         |
| bargein                    | a 'background' [gather]() command | no |
| bargeIn.enable             | if true, begin listening for speech or DTMF input while the session is executing other verbs. If false, stop any background listening task in progress | no                                         |
| bargeIn.sticky             | if true and bargeIn.enable is true, then when the background gather completes with speech or DTMF detected, it will automatically start another background gather | no                                         |
| bargeIn.actionHook         | a webhook to call if user input is collected from the background [gather]() | no |
| bargeIn.input              | Array, specifying allowed types of input: ['digits'], ['speech'], or ['digits', 'speech']. | yes |
| bargeIn.finishOnKey        | DTMF key that signals the end of DTMF input | no                                         |
| bargeIn.numDigits          | Exact number of DTMF digits expected to gather | no                                         |
| bargeIn.minDigits          | Minimum number of DTMF digits expected to gather. Defaults to 1. | no |
| bargeIn.maxDigits          | Maximum number of DTMF digits expected to gather | no                                         |
| bargeIn.interDigitTimeout  | Amount of time to wait between digits after `minDigits` have been entered. | no |
| listen                     | a nested [listen]() command | no |
| notifyEvents               | boolean; enable event notifications over websocket connections. Verbs that are sent over the websocket must contain an "id" property to use this feature. | no  |
| onHoldMusic                | string; provides the URL to a remote music source to use when a call is placed on hold | no |
| recognizer                 | change the session-level default speech recognition settings. See [the transcribe verb]() for details on the `recognizer` property. | no                                         |
| reset | string or array, resets either 'recognizer' and/or 'synthesizer' to the default application settings | no |
| record | options to manage [call recording using SIPREC]() | no |
| record.action              | "startCallRecording", "stopCallRecording", "pauseCallRecording", or "resumeCallRecording" | yes |
| record.siprecServerURL     | sip uri for SIPREC server | required if action is "startCallRecording" |
| record.recordingID         | user-supplied string to identify the recording | no                                         |
| sipRequestWithinDialogHook | object or string, a webhook to call when a sip request is received within the dialog (e.g. an INFO, NOTIFY, or REFER) | no                                         |
| synthesizer                | change the session-level default text-to-speech settings. See [the say verb]() for details on the `synthesizer` property. | no                                         |