---
 title: "Overwrite Analytics" 
 slug: "overwrite-analytics" 
 hidden: false 
---
# Overwrite Analytics

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/overwrite-analytics.png" width="80%" />
  <figcaption>Overwrite Analytics</figcaption>
</figure>

## Description
<div class="divider"></div>

This Node provides the ability to selectively overwrite the Analytics data that will be stored in [Insights Analytics](../../../insights/cognigy-insights.md).

Refer to the [Analytics data](../code/analytics-data.md#analytics-fields) page for a list of fields that can be overwritten.

!!! warning "Selective Overwrite"
    Blank fields will remain "as-is", meaning they will contain the data which Cognigy.AI would store by default.