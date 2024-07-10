---
title: "Analytics data" 
slug: "analytics-data" 
hidden: false 
---

# Analytics Data

Within a [Code Node](overview.md), you can modify certain parts of the analytics data to get more control of what exactly is written to analytics.

You can access the analytics data in a code node by using the key `analyticsdata`. For example:

```javascript
analyticsdata.intent = "test";
``` 

## Analytics Fields

[![Version badge](https://img.shields.io/badge/Updated in-v4.45-blue.svg)](../../../../../release-notes/4.45.md)

The following fields can be overwritten in a Code Node:

| Field          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Type            |
|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
| intent         | The intent that will be written to analytics. You can for instance modify this field to store the intent that was found in an executed Flow in analytics                                                                                                                                                                                                                                                                                                                                  | String          |
| intentFlow     | The ID of the Flow where the intent was found (main flow or attached flow)                                                                                                                                                                                                                                                                                                                                                                                                                | String          |
| intentScore    | The score of the intent that was found                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Number          |
| inputText      | The input text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | String          |
| inputData      | The input data object.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | {"key":"value"} |
| state          | The [State](../../../../test/interaction-panel/state.md) the Flow is currently in                                                                                                                                                                                                                                                                                                                                                                                                         | String          |
| slots          | The slots that were found in the user's input                                                                                                                                                                                                                                                                                                                                                                                                                                             | Object          |
| completedGoals | A list of goals the user has completed                                                                                                                                                                                                                                                                                                                                                                                                                                                    | List of Strings |
| understood     | Whether the input was understood. An input is counted as understood if an Intent or a Slot is found, the input is marked as understood via the Code Node or Overwrite Analytics Node, or the type of sentence is pAnswer, nAnswer, or Greeting (if Confirmation Word logic is activated). In all other cases, it is marked as not understood, except if there is an active handover (without activation of an agent Assist Flow) or a message has been marked as `Don't count` or `Null`. | Boolean         |
| custom1        | A custom field that can be set to any string value during Flow execution. Defaults to null                                                                                                                                                                                                                                                                                                                                                                                                | String          |
| custom2        | A custom field that can be set to any string value during Flow execution. Defaults to null                                                                                                                                                                                                                                                                                                                                                                                                | String          |
| custom3        | A custom field that can be set to any string value during Flow execution. Defaults to null                                                                                                                                                                                                                                                                                                                                                                                                | String          |
| custom4        | A custom field that can be set to any string value during Flow execution. Defaults to null                                                                                                                                                                                                                                                                                                                                                                                                | String          |
| custom5        | A custom field that can be set to any string value during Flow execution. Defaults to null                                                                                                                                                                                                                                                                                                                                                                                                | String          |
| custom6        | A custom field that can be set to any string value during Flow execution. Defaults to null                                                                                                                                                                                                                                                                                                                                                                                                | String          |
| custom7        | A custom field that can be set to any string value during Flow execution. Defaults to null                                                                                                                                                                                                                                                                                                                                                                                                | String          |
| custom8        | A custom field that can be set to any string value during Flow execution. Defaults to null                                                                                                                                                                                                                                                                                                                                                                                                | String          |
| custom9        | A custom field that can be set to any string value during Flow execution. Defaults to null                                                                                                                                                                                                                                                                                                                                                                                                | String          |
| custom10       | A custom field that can be set to any string value during Flow execution. Defaults to null                                                                                                                                                                                                                                                                                                                                                                                                | String          |

## Custom Fields

Custom fields let you add extra data to your Analytics reports. 
This feature helps you analyze your data more deeply and get insights beyond the standard metrics. By customizing your data, you can make better decisions that fit your specific business needs and goals.

### Limitations

- The maximum length of a custom field is 1024 characters.

### Store Complex Custom Data

For more complex data, you can use a string field object. 

In this example, `custom1` stores a simple string value, while `custom2` uses a JSON representation of the `customData` object to store more complex information.

```javascript
const customData = {
  key: "value"
};

analyticsdata.custom1 = "userFocusGroup: focusGroup1";
analyticsdata.custom2 = JSON.stringify(customData);
```

## Analytics Data Lifespan

The analyticsdata object is generated for each Flow Execution.
This means that any data you store in the analyticsdata object
(for example, a custom field) will only be stored in analytics for this Flow Execution.
On the next Flow Execution, there will be a new analyticsdata object with a new Intent.