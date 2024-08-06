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

This Node provides the ability to selectively overwrite default values (intent, text,...) and the Analytics data that will be stored in [Insights Analytics](../../../../insights/overview.md).
You can also use this Node to add custom values. When a value is left empty when overwriting, the respective key is not overwritten and the default value is used.

Refer to the [Analytics data](../basic/code/analytics-data.md#analytics-data) page for a list of fields that can be overwritten.

!!! warning: "Selective Overwrite"
    Empty fields will keep their default data in Cognigy.AI.

Alternatively, you can update analytics records using the [PATCH /v2.0/analytics](https://api-trial.cognigy.ai/openapi#patch-/v2.0/analytics) request.