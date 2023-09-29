---
title: "Time Zone" 
slug: "time-zone" 
hidden: false 
---

# Time Zone

[![Version badge](https://img.shields.io/badge/Updated in-v4.61-blue.svg)](../release-notes/4.61.md)

In Insights, _Time zone_ settings play a crucial role in presenting time-based data accurately to users based on their geographical location. 
By selecting the appropriate time zone, you can view data in your local time, which is essential for accurate data analysis and interpretation.

By default, Insights relies on the time zone preferences of your device according to supported time zones.

## Supported Time Zones

With the release of Insights 4.61, a significant change was made to the data-fetching process from the database.
Before this version, the system fetched the entire dataset from the database based on the applied filters and time zone,
which often resulted in slow queries and timeouts due to the large amount of data being processed.

Insights 4.61 introduced [pre-aggregation](pre-aggregation.md) to improve data retrieval performance. Now Insights groups data by time zones on an hourly basis, allowing faster queries and on-the-fly data generation. However, the update reduced the number of supported time zones to optimize efficiency and avoid timeouts.

The following time zones support pre-aggregation:

- `(UTC+00:00) UTC` (default)
- `(UTC+02:00) Europe/Berlin`

If you choose a time zone that is not supported,
Insights automatically replaces the selected time zone with a supported one.
In the Insights interface, you will see the corresponding warning.

For example:

- If you select `(UTC+09:00) ROK`, which is not supported, the system will replace it with a supported default time zone.
- If you select `(UTC+02:00) Poland` or `(UTC+02:00) Europe/Zurich`, which are not directly supported, the system will automatically replace them with `(UTC+02:00) Europe/Berlin` since these time zones share the same UTC offset.

## Change Timezone Settings

!!! note
    If you decide to set a [custom time zone]() preference, it will be saved in your browser storage. 
    However, keep in mind that if you switch to a different device or browser, you will need to reselect your desired custom time zone preference.

To change time zone preferences, follow these steps:

1. Go to Cognigy.AI.
2. In the upper-right corner, select **User Menu > My Profile**.
3. In the **Preferences** section, select time zone from the **Select Insights time zone** list.

New time zone will be applied to all existing data.

If you change the time zone in Insights version 4.61 or later,
and the [selected time zone is not supported](#supported-time-zones),
the setting will be reset to the default time zone or the nearest one supported to your time zone.
In the Insights interface, you will see the corresponding warning.

## Time Zone Considerations: OData and Insights

In the OData feed, all times are consistently presented in UTC format.
When comparing time zones with Insights, consider this to ensure accurate data interpretation.

## Custom Time Zone

If you are using an on-premise environment, you can specify a custom time zone. Note that each time zone selection necessitates a separate set of pre-aggregations, which can increase the system load.

We recommend selecting 2-3 time zones, with UTC included, as the ideal configuration. The maximum allowed limit is 5 time zones, and UTC must always be included in your value.

Before installation or an upgrade, we strongly advise aligning the list of supported time zones with the customer's preferences. To do this, specify `CUBEJS_SCHEDULED_REFRESH_TIMEZONES=<time-zone-1>,<time-zone-1>,<time-zone-3>` in the `values.yaml` file. For example, `CUBEJS_SCHEDULED_REFRESH_TIMEZONES=UTC,CET,ACST`.

## More Information

- [Pre-aggregation](pre-aggregation.md)