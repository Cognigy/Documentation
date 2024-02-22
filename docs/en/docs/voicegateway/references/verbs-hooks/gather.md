# Gather

The gather command is used to collect dtmf or speech input.

```
{
  "verb": "gather",
  "actionHook": "http://example.com/collect",
  "input": ["digits", "speech"],
  "bargein": true,
  "dtmfBargein": true,
  "finishOnKey": "#",
  "numDigits": 5,
  "timeout": 8,
  "recognizer": {
    "vendor": "Google",
    "language": "en-US",
    "hints": ["sales", "support"],
    "hintsBoost": 10
  },
  "say": {
    "text": "To speak to Sales press 1 or say Sales.  To speak to customer support press 2 or say Support",
    "synthesizer": {
      "vendor": "Google",
      "language": "en-US"
    }
  }
}
```

You can use the following options in the gather command:

| option                                                         | description                                                                                                                                                                       | required |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| actionHook                                                     | Webhook POST to invoke with the collected digits or speech. The payload will include a 'speech' or 'dtmf' property along with the standard attributes. See below for more detail. | yes      |
| bargein                                                        | allow speech bargein, i.e. kill audio playback if caller begins speaking                                                                                                          | no       |
| dtmfBargein                                                    | allow dtmf bargein, i.e. kill audio playback if caller enters dtmf                                                                                                                | no       |
| finishOnKey                                                    | Dmtf key that signals the end of input                                                                                                                                            | no       |
| input                                                          | Array, specifying allowed types of input: ['digits'], ['speech'], or ['digits', 'speech']. Default: ['digits']                                                                    | no       |
| interDigitTimeout                                              | Amount of time to wait between digits after minDigits have been entered.                                                                                                          | no       |
| listenDuringPrompt                                             | if false, do not listen for user speech until say or play has completed. Defaults to true                                                                                         | no       |
| minBargeinWordCount                                            | if bargein is true, only kill speech when this many words are spoken. Defaults to 1                                                                                               | no       |
| minDigits                                                      | Minimum number of dtmf digits expected to gather. Defaults to 1.                                                                                                                  | no       |
| maxDigits                                                      | Maximum number of dtmf digits expected to gather                                                                                                                                  | no       |
| numDigits                                                      | Exact number of dtmf digits expected to gather                                                                                                                                    | no       |
| partialResultHook                                              | Webhook to send interim transcription results to. Partial transcriptions are only generated if this property is set.                                                              | no       |
| play                                                           | nested [play](https://www.jambonz.org/docs/webhooks/gather/#play) Command that can be used to prompt the user                                                                     | no       |
| [recognizer](https://www.jambonz.org/docs/webhooks/recognizer) | Speech recognition options                                                                                                                                                        | no       |

In the case of speech input, the actionHook payload will include a speech object with the response from Google speech:

```
"speech": {
			"stability": 0,
			"is_final": true,
			"alternatives": [{
				"confidence": 0.858155,
				"transcript": "sales please"
			}]
		}
```

In the case of digits input, the payload will simple include a digits property indicating the dtmf keys pressed:

```
"digits": "0276"
```

Note: an HTTP POST will be used for both the action and the partialResultCallback since the body may need to contain nested JSON objects for speech details.

Note: the partialResultCallback web callback should not return content; any returned content will be discarded.