---
title: "Overwrite Analytics"
slug: "overwrite-analytics"
description: "An Overwrite Analytics Node lets you overwrite default values such as intent, text, understood messages, and more, and manage the analytics data stored in the Cognigy.AI Analytics database."
hidden: false
---

# Overwrite Analytics

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/analytics/overwrite-analytics.png" width="50%" />
</figure>

## Description

{! _includes/ai/understood-messages.md !}

This Node allows you to selectively overwrite default values, such as Intents, text, understood messages, and more,
as well as manage the analytics data stored in the [Analytics](../../../analyze/collecting-data.md) database.
You can view this data on the [Insights reports](../../../../insights/overview.md) or retrieve it via the [Cognigy.AI OData Endpoint](../../../analyze/odata.md).
You can also use this Node to add custom values.

Empty fields don't overwrite the initial values.
If you add this Node and leave some fields empty, such as the **Intent** default field,
the initial value stored in the Analytics database will remain unchanged.

## Parameters

??? info "Custom Fields"

    Custom fields allow you to store any data as a string value.

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

??? info "Default Fields"

    Default fields allow you to change existing data or add new data to the default parameters,
    such as Intents, States, and inputs.
    If a default field is left empty, the previous value will be used in the analytics record.

    The table includes the most commonly used parameters for overwriting.
    For example, you can overwrite the Intent name.
    Consider the case where a user says, `I need to return an item`.
    The AI Agent recognizes this message as the `Return request` Intent.
    For more precise tracking,
    you can configure the AI Agent to overwrite this Intent so that it is stored in the Analytics database as `Product return`.

    | Parameter            | Type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                              |
    |----------------------|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Intent               | CognigyScript | Store the intent name.                                                                                                                                                                                                                                                                                                                                                                                                                                   |
    | IntentScore          | Number        | Store the intent score.                                                                                                                                                                                                                                                                                                                                                                                                                                  |
    | inputText            | CognigyScript | Store the input text.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
    | Input Data           | JSON          | Store additional input data.                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | State                | CognigyScript | Store the State information.                                                                                                                                                                                                                                                                                                                                                                                                                             |
    | Slots                | JSON          | Store the Slot information.                                                                                                                                                                                                                                                                                                                                                                                                                              |
    | Completed Goals      | Text          | Store a list of completed goals.                                                                                                                                                                                                                                                                                                                                                                                                                         |
    | Understood           | Dropdown      | Select one of the following options:<ul><li>**Don't Overwrite** — the current status of the message (whether it is `understood` or `misunderstood`) will not be overridden.</li><li>**True** — the message will be counted as `understood`.</li><li>**False** — the message will not be counted as `misunderstood`.</li><li>**Don't Count** — the message will not be included in the calculation of `understood` or `misunderstood` messages.</li></ul> |
    | Handover Escalations | CognigyScript | Store the number of handover escalations.                                                                                                                                                                                                                                                                                                                                                                                                                |

## Examples

??? info "Anonymize Personal Data for Privacy in OData"

    You can anonymize specific text in the field to ensure privacy while maintaining context in OData. 
    For example, instead of `My name is Alex, how do I do something?` you can replace it with `My name is <Name>, how do I do something?`.

??? info "Clean Up NLU Metrics with Understood"

    To clean up NLU metrics, you can set the `Understood` field to `null` or `true` in specific circumstances.
    This approach is useful in voice AI Agents for handling Voice Gateway payloads, which are automatically set to `false`.

## Alternatives

Alternatively, you can update analytics records using the [PATCH /v2.0/analytics](https://api-trial.cognigy.ai/openapi#patch-/v2.0/analytics) request.