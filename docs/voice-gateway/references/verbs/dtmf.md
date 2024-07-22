---
title: "DTMF"
slug: "DTMF"
hidden: false
---

# DTMF

The `dtmf` verb generates a string of DTMF digit signals, which are transmitted as RTP payloads according to [RFC 2833](https://datatracker.ietf.org/doc/html/rfc2833).

```json
{
  "verb": "dtmf",
  "dtmf": "0276",
  "duration": 250
}
```

## Configuration

The full set of configuration parameters:

| Parameter | Description                                                           | Required |
|-----------|-----------------------------------------------------------------------|----------|
| dtmf      | A string containing a sequence of DTMF digits (`0-9`, `*`, `#`).      | Yes      |
| duration  | The length of each digit in milliseconds. The default value is `500`. | No       |

## More Information

- [RECOGNIZED_DTMF](../events/RECOGNIZED_DTMF.md)