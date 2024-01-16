---
title: "Data Pre-aggregation"
slug: "data-pre-aggregation"
hidden: false
---

# Data Pre-aggregation

[![Version badge](https://img.shields.io/badge/Updated in-v4.61-blue.svg)](../release-notes/4.61.md)

_Data pre-aggregation_ is a specific type of data aggregation that optimizes query performance and reduces computational resources by aggregating data before it's stored.

Starting from version 4.61, Insights uses pre-aggregation, which means that it generates pre-aggregated tables based on raw data. This enables instant visualization of charts on dashboards, even when applying filters. Updating pre-aggregated tables takes some time, so despite the fact that data on dashboards is always displayed, data refreshing may take some time depending on the source data. An estimated data refresh time will be indicated on your dashboard in the Insights UI.

## More Information

- [Time Zone](time-zone.md)