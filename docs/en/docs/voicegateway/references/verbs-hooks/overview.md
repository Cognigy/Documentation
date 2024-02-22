# Voice Gateway Supported Commands

VG and Cognigy.AI interaction is based on sending commands. 

In this section we will reference the supported commands to enable a more custom use in specific cases.

## Using custom VG commands in the Cognigy.AI flow

Cognigy.AI Voice Gateway Nodes in the backend are in essence commands.
Thus, within Cognigy.AI editor to use a command it is best to utilize a [Code Node]().

Example of Code Node sending a customized `dial` command with `answering machine detection` action hook:
```
api.output(null, {
    "_cognigy": {
        "_voiceGateway2": {
            "json": {
                "verb": "dial",
                "actionHook": "/outdial",
                "callerId": "+49454949494949",
                "target": [
                    {
                        "type": "phone",
                        "number": "+491520595959",
                    }
                ],
                "amd": {
                    "actionHook": "amd",
                    "recognizer": {
                        "vendor": "microsoft",
                        "language": "en-US",
                    }
                }
            }
        }
    }
})
```

## Using custom VG commands to control Outbound calls

Refer to [Create Outbound Calls]()