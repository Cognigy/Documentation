---
title: "Timezone" 
slug: "timezone" 
hidden: false 
---

# Timezone

[![Version badge](https://img.shields.io/badge/Updated in-v4.58-blue.svg)]({{config.site_url}})

In Insights, _Timezone_ settings play a crucial role in presenting time-based data accurately to users based on their geographical location. 
By selecting the appropriate timezone, users can view data in their local time, which is essential for accurate data analysis and interpretation.

By default, Insights uses the timezone preferences of your device.

Custom timezone preferences are stored inside the browser storage, which means you need to select the custom timezone preference again if you change the device and/or the browser.

## Supported Timezones

Starting from version 4.58 of Insights, a significant change was made to the data-fetching process from the database. Before this version, the system fetched the entire dataset from the database based on the applied filters and time zone, which often resulted in slow queries and timeouts due to the large amount of data being processed.

Insights version 4.58 introduced pre-aggregation to improve data retrieval performance. Now Insights groups data by time zones on an hourly basis, allowing faster queries and on-the-fly data generation. However, the update reduced the number of supported time zones to optimize efficiency and avoid timeouts.

The following timezones support pre-aggregation:

- `(UTC+00:00) UTC` (default)
- `(UTC+02:00) Europe/Berlin`

If you choose a timezone that is not supported, Insights will show a warning and automatically replace the selected timezone with a supported one.

For example:

- If you select `(UTC+09:00) ROK`, which is not supported, the system will replace it with a supported default timezone.
- If you select `(UTC+02:00) Poland` or `(UTC+02:00) Europe/Zurich`, which are not directly supported, the system will automatically replace them with `(UTC+02:00)` Europe/Berlin because these timezones have the same UTC offset.

## Change Timezone Settings

To change timezone preferences, follow these steps:

1. Go to Cognigy.AI.
2. In the upper-right corner, select **User Menu > My Profile**.
3. In the **Preferences** section, select timezone from the list.

New timezone will be applied to all existing data.

If you change the timezone in Insights version 4.58 or later, and the [selected timezone is not supported](#supported-timezones), the setting will be reset to the default timezone or the nearest one supported to your timezone. In the Insights interface, you will see the corresponding warning.

## OData Timezone

In OData feed, time is always in UTC format. You should take this into account if you compare timezones with Insights.
