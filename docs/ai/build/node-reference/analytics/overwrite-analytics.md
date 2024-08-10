---
 title: "Overwrite Analytics" 
 slug: "overwrite-analytics" 
 hidden: false 
---

# Overwrite Analytics

<figure>
  <img class="image-center" src="../../../../../_assets/ai/build/node-reference/other/overwrite-analytics.png" width="80%" />
  <figcaption>Overwrite Analytics</figcaption>
</figure>

## Description

This Node allows you to selectively overwrite default values such as intent, text, understood messages, and more, and manage the analytics data stored in the [Analytics](../../../analyze/collecting-data.md) database. You can view this data by retrieving it via the [Cognigy.AI OData Endpoint](../../../analyze/odata.md) or on the [Insights dashboards](../../../../insights/overview.md).
You can also use this Node to add custom values. When a value is left empty, the respective key is not overwritten and the default value is used.

The following values can be overwritten:

## Settings

### Default Fields

<Default fields allow you to change existing data or add new data to the default parameters, such as intents, states and inputs for example. If a default value is left empty, the value remains the one gathered by OData.>

| Parameter            | Field                | Description                             | Type
|----------------------|----------------------|-----------------------------------------|----------------
| Intent               | intent               | Store the intent here.                  | string
| IntentScore          | intentScore          | Store the intent score here.            | number
| inputText            | inputText            | Store the input text here.              | string
| Input Data           | inputData            | Store additional input data here.       | {"key":"value"}
| State                | state                | Store the state information here.       | string
| Slots                | slots                | Store slot information here.            | object
| Completed Goals      | completedGoals       | Store completed goals here.             | list of strings
| Understood           | understood           | Please describe the options here.       | boolean
| Handover Escalations | handoverEscalations  | Store handover escalation details here. | boolean

### Custom Fields

<Custom fields allow you to use a string value to add custom values, which are then stored and can be managed through OData. If unused, the default state of custom fields will be empty.>

| Parameter       | Field       | Description                                                                                | Type
|-----------------|-------------|--------------------------------------------------------------------------------------------|----------------
| Custom Value 1  | custom1     | A custom field that can be set to any string value during Flow execution. Defaults to null | string
| Custom Value 2  | custom2     | A custom field that can be set to any string value during Flow execution. Defaults to null | string
| Custom Value 3  | custom3     | A custom field that can be set to any string value during Flow execution. Defaults to null | string
| Custom Value 4  | custom4     | A custom field that can be set to any string value during Flow execution. Defaults to null | string
| Custom Value 5  | custom5     | A custom field that can be set to any string value during Flow execution. Defaults to null | string
| Custom Value 6  | custom6     | A custom field that can be set to any string value during Flow execution. Defaults to null | string
| Custom Value 7  | custom7     | A custom field that can be set to any string value during Flow execution. Defaults to null | string
| Custom Value 8  | custom8     | A custom field that can be set to any string value during Flow execution. Defaults to null | string
| Custom Value 9  | custom9     | A custom field that can be set to any string value during Flow execution. Defaults to null | string
| Custom Value 10 | custom10   | A custom field that can be set to any string value during Flow execution. Defaults to null | string


!!! warning: "Selective Overwrite"
    Empty fields will keep their default data in Cognigy.AI.

Alternatively, you can update analytics records using the [PATCH /v2.0/analytics](https://api-trial.cognigy.ai/openapi#patch-/v2.0/analytics) request.