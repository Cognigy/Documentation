---
title: "Gather"
slug: "gather"
hidden: false
---

# Gather

The `gather` verb is used to collect DTMF or speech input.

```json
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
      "language": "en-US",
      "voice": "en-US-Wavenet-F"
    }
  }
}
```

## Configuration

The full set of configuration parameters:

| Parameter           | Description                                                                                                                                                               | Required |
|---------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|
| actionHook          | A webhook POST to send the collected digits or speech. The payload includes a `speech` or `dtmf` property along with the standard attributes.                             | Yes      |
| bargein             | Enable speech barge-in, which pauses audio playback if the caller starts speaking.                                                                                        | No       |
| dtmfBargein         | Enable DTMF barge-in, which pauses audio playback if the caller enters DTMF tones.                                                                                        | No       |
| finishOnKey         | The DTMF key that signals the end of input.                                                                                                                               | No       |
| input               | An array specifying the allowed types of input: `['digits']`, `['speech']`, or `['digits', 'speech']`. The default value is `['digits']`.                                 | No       |
| interDigitTimeout   | The amount of time to wait between digits after `minDigits` have been entered.                                                                                            | No       |
| listenDuringPrompt  | If this parameter is `false`, the system will not listen for user speech until the [`say`](say.md) or [`play`](play.md) verbs has completed. The default value is `true`. | No       |
| minBargeinWordCount | If `bargein` is `true`, only halt speech when this many words are spoken. The default value is `1`.                                                                       | No       |
| minDigits           | The minimum number of DTMF digits expected to gather. The default value is `1`.                                                                                           | No       |
| maxDigits           | The maximum number of DTMF digits expected to gather.                                                                                                                     | No       |
| numDigits           | The exact number of DTMF digits expected to gather.                                                                                                                       | No       |
| partialResultHook   | A webhook POST to send interim transcription results to. Partial transcriptions are only generated if this property is set.                                               | No       |
| play                | A nested [`play`](play.md) verb that can be used to prompt the user.                                                                                                      | No       |
| recognizer          | Speech recognition options.                                                                                                                                               | No       |

## Example

When speech input is used,
the `actionHook` payload will contain a speech object with the response from the speech provider, such as Google Speech.

```json
"speech": {
			"stability": 0,
			"is_final": true,
			"alternatives": [{
				"confidence": 0.858155,
				"transcript": "sales please"
			}]
		}
```

In the case of digits input, the payload includes a `digits` property indicating the DTMF keys pressed:

```json
"digits": "0276"
```

## More Information

- [RECOGNIZED_DTMF](../events/RECOGNIZED_DTMF.md)
- [RECOGNIZED_SPEECH](../events/RECOGNIZED_SPEECH.md)
- [USER_INPUT_TIMEOUT](../events/USER_INPUT_TIMEOUT.md)