# Gather

The `gather` command is used to collect DTMF or speech input.

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
    "text": "To speak to Sales press 1 or say Sales. To speak to customer support press 2 or say Support",
    "synthesizer": {
      "vendor": "Google",
      "language": "en-US"
    }
  }
}
```

You can use the following options in the `gather` command:

| option | description | required |
| -------------------------------------------------------------- | ---------- | -------- |
| actionHook | webhook POST to invoke with the collected digits or speech. The payload will include a `speech` or `dtmf` property along with the standard attributes | yes      |
| bargein | allow speech bargein, i.e. kill audio playback if caller begins speaking | no       |
| dtmfBargein | allow DTMF bargein, i.e. kill audio playback if caller enters DTMF | no       |
| finishOnKey | DTMF key that signals the end of input | no       |
| input | array, specifying allowed types of input: ['digits'], ['speech'], or ['digits', 'speech']. Default: ['digits'] | no       |
| interDigitTimeout | amount of time to wait between digits after minDigits have been entered. | no       |
| listenDuringPrompt | if false, do not listen for user speech until say or play has completed. Defaults to true | no       |
| minBargeinWordCount | if bargein is true, only kill speech when this many words are spoken. Defaults to 1 | no       |
| minDigits | Minimum number of DTMF digits expected to gather. Defaults to 1. | no       |
| maxDigits | Maximum number of DTMF digits expected to gather| no       |
| numDigits | Exact number of DTMF digits expected to gather | no       |
| partialResultHook | Webhook to send interim transcription results to. Partial transcriptions are only generated if this property is set. | no       |
| play | nested [play]() Command that can be used to prompt the user | no       |
| recognizer | Speech recognition options | no       |

In the case of speech input, the `actionHook` payload will include a speech object with the response from e.g. Google speech:

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

In the case of digits input, the payload will simple include a digits property indicating the DTMF keys pressed:

```
"digits": "0276"
```