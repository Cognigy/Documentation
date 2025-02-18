---
title: "Data Pre-Aggregation"
slug: "data-pre-aggregation"
hidden: false
---

# Data Pre-Aggregation

{! _includes/insights/new-framework.md !}

_Data pre-aggregation_ is a specific type of data aggregation that optimizes query performance and reduces computational resources by aggregating data before it's stored.

After migrating to the new framework, Insights uses pre-aggregation,
which means that it generates pre-aggregated tables based on raw data.
This approach enables instant visualization of charts on reports, even when applying filters.
Updating pre-aggregated tables takes some time, so despite the fact that data on reports is always displayed,
data refreshing may take some time depending on the source data.
An estimated data refresh time will be indicated on your report in the Insights UI.

## More Information

- [Time Zone with Pre-aggregation](time-zone-with-pre-aggregation.md)
