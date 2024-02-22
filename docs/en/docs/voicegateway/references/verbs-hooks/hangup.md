# Hangup

The hangup command terminates the call and ends the application execution.

```
{
  "verb": "hangup",
  "headers": {
    "X-Reason" : "maximum call duration exceeded"
  }
}
```

You can use the following options in the `hangup` command:

| option  | description                                                    | required   |
| ------- | -------------------------------------------------------------- | ---------- |
| headers | an object containing SIP headers to include in the BYE request | no |