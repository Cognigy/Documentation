---
title: "Hangup"
slug: "hangup"
hidden: false
---

# Hangup

The `hangup` verb terminates the call and ends the session.

```json
{
  "verb": "hangup",
  "headers": {
    "X-Reason" : "maximum call duration exceeded"
  }
}
```

## Configuration

The full set of configuration parameters:

| Parameter | Description                                                       | Required |
|-----------|-------------------------------------------------------------------|----------|
| headers   | An object containing SIP headers to include in the `BYE` request. | No       |
