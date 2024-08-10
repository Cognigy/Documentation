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

Refer to the [Analytics data](../basic/code/analytics-data.md#analytics-data) page for a list of fields that can be overwritten.

!!! warning: "Selective Overwrite"
    Empty fields will keep their default data in Cognigy.AI.

Alternatively, you can update analytics records using the [PATCH /v2.0/analytics](https://api-trial.cognigy.ai/openapi#patch-/v2.0/analytics) request.