# Say

The say command is used to send synthesized speech to the remote party. The text provided may be either plain text or use SSML tags. 

## Speech vendors

- [Check supported speech vendors]()
- [Add a custom speech API]()

```
{
  "verb": "say",
  "text": "hi there!",
  "synthesizer" : {
    "vendor": "google",
    "language": "en-US"
  }
}
```

You can use the following options in the say command:
| option               |   | required |
| -------------------- | ------------------------- | -------- |
| text                 | text to speak; may contain SSML tags | yes |
| synthesizer.vendor   | speech vendor to use for synthesis | no  |
| synthesizer.language | language code | no  |
| synthesizer.voice    | voice to use. Check voice lists of vendor used. Defaults to [Application]() setting, if provided.  | no |
| loop                 | the number of times a text is to be repeated; 0 means repeat forever. Defaults to 1. | no |
| earlyMedia           | if true and the call has not yet been answered, play the audio without answering call. Defaults to false |