# Analytics data
## Description
<div class="divider"></div>

Within a [Code Node]({{config.site_url}}ai/flow-nodes/code/code/) you can modify certain parts of the analytics data to get more control of what exactly is written to analytics.

You can access the analytics data in a code node by using the key ```analyticsdata```. For example:

```javascript
analyticsdata.intent = "test";
``` 

## Analytics fields
<div class="divider"></div>
The following fields can be overwritten in a Code Node:

| Field | Description | Type |
| ----------- | ----------- | ----------- |
| intent | The intent that will be written to analytics. You can for instance modify this field to store the intent that was found in an executed Flow in analytics | String |
| intentFlow | The Flow parent ID of the Flow where the intent was found | String |
| intentScore | The score of the intent that was found | Number |
| inputText | The input text. | String |
| inputData | The input data object. | {"key":"value"} |
| state | The [State]({{config.site_url}}states) the Flow is currently in | String |
| slots | The slots that were found in the user's input | Object |
| completedGoals | A list of goals the user has completed | List of Strings |
| understood | Whether the input was understood | Boolean |
| custom1 | A custom field that can be set to any string value during Flow execution. Defaults to null | String |
| custom2 | A custom field that can be set to any string value during Flow execution. Defaults to null | String |
| custom3 | A custom field that can be set to any string value during Flow execution. Defaults to null | String |

## Working with the custom fields
<div class="divider"></div>
The custom fields are used to store any custom data into analytics. This can be any string value that has a maximum length of 512 characters. If you want to store more complex data, you can store a stringified object as the value:

```javascript
const customData = {
  key: "value"
};

analyticsdata.custom1 = "userFocusGroup: focusGroup1";
analyticsdata.custom2 = JSON.stringify(customData);
``` 

???+ warning "Max length of custom fields"
    You can store a maximum of 512 characters as the value for each of the custom fields

## Analytics data life span
<div class="divider"></div>
The analyticsdata object is generated for each Flow Execution. This means that any data you store in the analyticsdata object (e.g. a custom field) will only be stored in analytics for this Flow Execution. On the next Flow Execution, there will be a new analyticsdata object with a new intent etc.