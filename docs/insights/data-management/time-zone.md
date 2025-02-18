---
title: "Time Zone" 
slug: "time-zone" 
hidden: false 
---

# Time Zone

!!! warning
    This page explains how the Time Zone works before we start migrating to the [new Insights framework](time-zone-with-pre-aggregation.md). If the migration process has not yet started for your organization, this page remains relevant for you.

In Insights, _Time zone_ settings play a crucial role in presenting time-based data accurately to users based on their geographical location.
By selecting the appropriate time zone, you can view data in your local time, which is essential for accurate data analysis and interpretation.

Insights supports different time zones with various time offsets. The complete list of time zones is available in your personal profile in the Cognigy.AI interface. Report data is generated on the fly. However, if you choose a rarely used time zone and have a large amount of processed data, report information may not load promptly and could experience delays.

By default, Insights relies on the time zone preferences of your device according to supported time zones.

## Change Time Zone Settings

By default, Insights uses time zone preferences of your device. You can override this in **My Profile**. 

To change time zone preferences, follow these steps:

1. In the upper-right corner of the **Main** page, select **User Menu > My Profile**.
2. In the **Preferences** section, select time zone from the **Select Insights time zone** list.

New time zone will be applied to all existing data.

!!! note
    Custom time zone preferences are stored in the browser storage, which means you will need to select your custom time zone preference again if you change the device or the browser.

{! _includes/insights/time-zone-odata-and-insights.md !}

## More Information

- [Pre-aggregation](pre-aggregation.md)
- [Time Zone with Pre-aggregation](time-zone-with-pre-aggregation.md)