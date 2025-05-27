---
title: "Business Dashboard (Beta)"
slug: "business-dashboard"
description: "Insights Business Dashboard gives you a quick overview of your key session metrics through interactive charts and tables."
hidden: false
tags:
  - insights dashboard
  - business dashboard
---

# Business Dashboard

[![Version badge](https://img.shields.io/badge/Added in-v2025.11(Beta)-purple.svg)](../../release-notes/2025.11.md)

!!! note
    This feature is in Beta. We encourage you to try this feature out and provide us with feedback.
    Note that the Goals-related charts are available only if you have migrated to the new [Insights framework](../data-management/pre-aggregation.md).

The _Business Dashboard_ gives you a quick overview of your key session metrics through interactive charts and tables.
It includes location-based activity, active sessions by AI or human agents, and business outcomes, such as time and cost savings.

The summary of key metrics is represented in the following charts:

- [Interactive Map](#interactive-map)
- [Tables](#ta+)
- [Bar Charts](#bar-charts)
- [Indicators](#indicators)

All charts display data based on the filter settings you've selected. The charts display data recorded within the last 15 minutes. Some charts refresh every 30 seconds.

<div style="text-align:center">
   <video width="650" height="400" controls="" alt="type:video" style="border: 1px solid #ccc; border-radius: 12px;" autoplay>
      <source src="https://docscognigyassets.blob.core.windows.net/assets/business-dashboard.mov">
   </video>
</div>

## Prerequisites

Before using this dashboard, add the following feature flags to the `values.yaml` file:

- `FEATURE_INSIGHTS_USE_BUSINESS_DASHBOARD: "true"`
- `FEATURE_INSIGHTS_BUSINESS_DASHBOARD_DIRECT_POSTGRESQL: "true"`. Add this feature flag if you've migrated to the new Insights framework.

## Filters

In the top bar, unlike other reports and explorers, you can select multiple Projects to view their data on the dashboard. However, if you switch between Projects and then open reports or explorers, the **Time Span** filter will reset for them. This reset happens because of the 15-minute time window limitation for data display on the dashboard.

Additionally, you can use the following filters:

| Filter   | Description                                                                                                                                                                                                                                                            |
|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Location | You can select one of the following options: <ul><li>**City** – the default option, filters data by city.</li><li>**Country** – filters data by country.</li></ul>                                                                                                     |
| Channel  | You can select one of the following filters: <ul><li>**All** – the default filter, includes all sessions.</li><li>**Voice** – filters sessions created only via the Voice Gateway Endpoint.</li><li>**Chat** – filters sessions created via other Endpoints.</li></ul> |

{! _includes/insights/reset-filters.md !}

## Interactive Map

Displays the number of sessions by country or city.

To view session data for a specific location, use the **Location** filter to choose between countries or cities. Then, hover over a location on the globe to see the number of sessions.

<div style="text-align:center">
   <video width="650" height="400" controls="" alt="type:video" style="border: 1px solid #ccc; border-radius: 12px;" autoplay>
      <source src="https://docscognigyassets.blob.core.windows.net/assets/session-map.mov">
   </video>
</div>

You can navigate the globe using the following controls:

??? info "Controls"

    | Icon                                                       | Name       | Description                       |
    |------------------------------------------------------------|------------|-----------------------------------|
    | ![play](../../_assets/icons/insights/play.svg) ️           | Play       | Starts the animation.             |
    | ![stop](../../_assets/icons/insights/stop.svg)             | Stop       | Stops the animation.              |
    | ![fullscreen](../../_assets/icons/insights/fullscreen.svg) | Fullscreen | Expands the globe to full screen. |
    | ![zoom-out](../../_assets/icons/insights/zoom-out.svg)     | Zoom out   | Zooms out to show a wider area.   |
    | ![zoom-in](../../_assets/icons/insights/zoom-in.svg)       | Zoom in    | Zooms in to show more detail.     |

The chart shows changes within the last 15 minutes and updates every 30 seconds.

## Tables

### Top Sessions

Displays the total number of current sessions by country or city, including both ongoing sessions and those started in the last 15 minutes.

To view session data for a specific location, use the **Location** filter to switch between country and city views.

#### Unknown Locations

If a city or a county is marked as `Unknown`, this means that Insights didn't determine where the session happened.

In the city view:

- If the entry has a flag, the country is known, but the specific city isn't.
- If there's a question mark instead of a flag, both the city and country are unknown.

In the country view, all known countries will be listed. There will be only one `Unknown` entry to represent all sessions with unidentified locations.

### Top 5 Goals

Displays the top 5 goals completed in the last 15 minutes, allowing you to quickly track recent performance.

## Bar Charts

### Active Sessions

Displays the total number of sessions started within the last 15 minutes, refreshed every 30 seconds. 

The chart breaks down sessions handled by AI Agents versus those escalated to human agents, enabling you to track how many sessions AI Agents resolved independently.

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/active-sessions.png" width="70%" />
</figure>

## Indicators

### Time Saved

Displays the total time saved by summing the time saved from completed and partially completed goals in the last 15 minutes.

### Cost Savings

Displays the total cost savings for completed and partially completed goals in the last 15 minutes.

### Revenue Earned

Displays the total revenue earned for completed and partially completed goals in the last 15 minutes.


## More Information

- [Time Zone with Pre-aggregation](time-zone-with-pre-aggregation.md)
