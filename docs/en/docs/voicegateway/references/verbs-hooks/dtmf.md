# DTMF

The `dtmf` command generates a string of DTMF digit signals. These are sent as RTP payloads using [RFC 2833](https://datatracker.ietf.org/doc/html/rfc2833).

```
{
  "verb": "dtmf",
  "dtmf": "0276",
  "duration": 250
}
```

You can use the following options in the `dtmf` command:

| option   | description                                                | required   |
| -------- | ---------------------------------------------------------- | ---------- |
| dtmf     | a string containing a sequence of dtmf digits (0-9,\*,#)   | yes        |
| duration | the length of each digit, in milliseconds <br> Defaults to 500 | no |