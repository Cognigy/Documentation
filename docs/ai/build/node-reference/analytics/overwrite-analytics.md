---
title: "Overwrite Analytics"
slug: "overwrite-analytics"
description: "An Overwrite Analytics Node lets you overwrite default values such as intent, text, understood messages, and more, and manage the analytics data stored in the Cognigy.AI Analytics] database."
hidden: false
---

# Overwrite Analytics

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/overwrite-analytics.png" width="80%" />
  <figcaption>Overwrite Analytics</figcaption>
</figure>

## Description

This Node allows you to selectively overwrite default values such as intent, text, understood messages, and more,
and manage the analytics data stored in the [Analytics](../../../analyze/collecting-data.md) database.
You can view this data on the [Insights dashboards](../../../../insights/overview.md) or retrieve it via the [Cognigy.AI OData Endpoint](../../../analyze/odata.md).
You can also use this Node to add custom values. When a value is left empty, the respective key is not overwritten and the default value is used.

## Settings

### Custom Fields

Custom fields allow you to store any data as a string value.
If the custom field remains empty, the field value will contain `null` in the analytics records.

Custom fields can be useful for enriching the information about a user's conversation by adding more details.
For example, if user inputs contain words such as `excellent` or `great`, you can add a custom field with the value `Positive feedback` to make it easier to analyze positive feedback through analytics records.

| Parameter       | Type          | Description                                                                            |
|-----------------|---------------|----------------------------------------------------------------------------------------|
| Custom Value 1  | CognigyScript | Store a custom field that can be set to any string value. The default value is `null`. |
| Custom Value 2  | CognigyScript | Store a custom field that can be set to any string value. The default value is `null`. |
| Custom Value 3  | CognigyScript | Store a custom field that can be set to any string value. The default value is `null`. |
| Custom Value 4  | CognigyScript | Store a custom field that can be set to any string value. The default value is `null`. |
| Custom Value 5  | CognigyScript | Store a custom field that can be set to any string value. The default value is `null`. |
| Custom Value 6  | CognigyScript | Store a custom field that can be set to any string value. The default value is `null`. |
| Custom Value 7  | CognigyScript | Store a custom field that can be set to any string value. The default value is `null`. |
| Custom Value 8  | CognigyScript | Store a custom field that can be set to any string value. The default value is `null`. |
| Custom Value 9  | CognigyScript | Store a custom field that can be set to any string value. The default value is `null`. |
| Custom Value 10 | CognigyScript | Store a custom field that can be set to any string value. The default value is `null`. |

### Default Fields

Default fields allow you to change existing data or add new data to the default parameters,
such as intents, states and inputs.
If a default value is left empty, the previous value will be used in the analytics record.

The table includes the most commonly used parameters for overwriting.
For example, you can overwrite the intent name.
Consider the case where a user says, `I need to return an item`.
The AI Agent recognizes this message as the `Return request` intent.
For more precise tracking,
you can configure the AI Agent to overwrite this intent so that it is recorded in analytics as `Product return`.

| Parameter            | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                  | 
|----------------------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Intent               | CognigyScript | Store the intent name.                                                                                                                                                                                                                                                                                                                                                                                                       |
| IntentScore          | Number        | Store the intent score.                                                                                                                                                                                                                                                                                                                                                                                                      |
| inputText            | CognigyScript | Store the input text.                                                                                                                                                                                                                                                                                                                                                                                                        |
| Input Data           | JSON          | Store additional input data.                                                                                                                                                                                                                                                                                                                                                                                                 |
| State                | CognigyScript | Store the State information.                                                                                                                                                                                                                                                                                                                                                                                                 |
| Slots                | JSON          | Store the Slot information.                                                                                                                                                                                                                                                                                                                                                                                                  |
| Completed Goals      | Text          | Store a list of completed goals.                                                                                                                                                                                                                                                                                                                                                                                             |
| Understood           | Dropdown      | Select one of the following options:<br>**Don't Overwrite** — the current status of the message (whether it is `understood` or `misunderstood`) will not be overridden. <br>**True** — the message will be counted as `understood`.<br>**False** — the message will not be counted as `misunderstood`.<br>**Don't Count** — the message will not be included in the calculation of `understood` or `misunderstood` messages. |
| Handover Escalations | CognigyScript | Store the number of handover escalations.                                                                                                                                                                                                                                                                                                                                                                                    |

## Alternatives

Alternatively, you can update analytics records using the [PATCH /v2.0/analytics](https://api-trial.cognigy.ai/openapi#patch-/v2.0/analytics) request.