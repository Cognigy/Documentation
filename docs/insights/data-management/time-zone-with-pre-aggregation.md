---
title: "Time Zone with Pre-Aggregation"
slug: "time-zone"
hidden: false
---

# Time Zone with Pre-Aggregation

{! _includes/insights/new-framework.md !}

In Insights, _Time zone_ settings play a crucial role in presenting time-based data accurately to users based on their geographical location.
By selecting the appropriate time zone, you can view data in your local time, which is essential for accurate data analysis and interpretation.

By default, Insights relies on the time zone preferences of your device according to supported time zones.

## Supported Time Zones

With migrating to the new framework, a significant change was made to the data-fetching process from the database.
Before the migration, the system fetched the entire dataset from the database based on the applied filters and time zone,
which often resulted in slow queries and timeouts due to the large amount of data being processed.

After migrating to the new framework, Insights introduced [pre-aggregation](pre-aggregation.md) to improve data retrieval performance.
Now, Insights groups data by time zones on an hourly basis, enabling quicker queries and on-the-fly data generation. However, the update has reduced the number of supported time zones to optimize efficiency and prevent timeouts.

By default, the `(UTC+00:00)` UTC time zone supports pre-aggregation.
You can include 2 extra custom time zones (recommended), with a maximum of 5.

If a previously set time zone is not supported, it will be reset to the default time zone or the nearest supported time zone.
In the Insights interface, you will see the corresponding warning.

## Custom Time Zone

The configuration of additional time zones depends on the type of your installation:

=== "Dedicated SaaS"
     Contact your customer success manager to add preferable custom time zones.

=== "On-Premises"

    If you are using an on-premises environment, you can specify a custom time zone.
    Note that each time zone selection necessitates a separate set of pre-aggregations, which can increase the system load.
    
    We recommend selecting 2–3 time zones, with UTC included, as the ideal configuration. The maximum allowed limit is 5 time zones, and UTC must always be included in your value.
    
    Before installation or an upgrade, we strongly advise aligning the list of supported time zones with the customer's preferences. To do this, specify `CUBEJS_SCHEDULED_REFRESH_TIMEZONES=<time-zone-1>,<time-zone-1>,<time-zone-3>` in the `values.yaml` file. For example, `CUBEJS_SCHEDULED_REFRESH_TIMEZONES=UTC,CET,ACST`.

## Change Time Zone Settings

!!! note
    If you decide to set a [custom time zone](#custom-time-zone) preference, it will be saved in your browser storage.
    However, keep in mind that if you switch to a different device or browser, you will need to reselect your desired custom time zone preference.

To change time zone preferences, follow these steps:

1. In the upper-right corner of the **Main** page, select **User Menu > My Profile**.
2. In the **Preferences** section, select time zone from the **Select Insights time zone** list.

New time zone will be applied to all existing data.

{! _includes/insights/time-zone-odata-and-insights.md !}

## More Information

- [Data pre-aggregation](pre-aggregation.md)
- [Time Zone](time-zone.md)