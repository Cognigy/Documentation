---
title: "What's Insights?" 
slug: "overview"
hidden: false 
---

# Cognigy Insights 

**Cognigy Insights** replaces our previous static analytics dashboard and provides you with the tools you need to improve the customer experience your AI agents provide.
Insights features a range of key metrics, helping you to understand the usage and the performance of your bots.

Cognigy.AI offers both integrated analytics dashboards, as well as an OData access, allowing you to build your own dashboards, by retrieving your raw analytics data.

As of release v4.10, Cognigy provides a completely new designed Analytics solution for Insights.

<figure>
  <img class="image-center" src="../../../_assets/insights/overview.png" width="100%" />
</figure>

## Dashboards

Cognigy Insights co-exists side-by-side with Cognigy.AI and is tightly integrated with all of Cognigy's products.
It features a variety of different dashboards and explorers to highlight different data types, which allow you to keep track of your customer's behaviour and the success of your AI agents. All of the collected data is also accessible through OData.

You can access Cognigy Insights, by opening the sidebar menu in Cognigy.AI and click on **Insights**, previously this had led to our [Analytics](../ai/analyze/collecting-data.md) application.
In order to view the data correlating to a specific agent, you can select one from the dropdown menu in the upper left area.

!!! note
    When you are in an agent-specific route in Cognigy.AI (Agent is selected), you should see Insights in the user menu pop-up. You can navigate to Insights of that Agent when you click on the menu item.

When switching from Cognigy.AI to Cognigy Insights, you will be redirected to the Insights **Dashboard** section, starting on the Overview dashboard.

<figure>
  <img class="image-center" src="../../../_assets/insights/dashboards/overview/overview_dashboard.png" width="100%" />
  <figcaption>Overview dashboard</figcaption>
</figure>

Cognigy Insights features a variety of different dashboards and explorers, which visualize key metrics of your currently selected virtual agent. 

We provide the following Dashboards:

- [Overview](dashboards/overview.md)
- [Engagement](dashboards/engagement.md)
- [NLU Performance](dashboards/nlu-performance.md)
- [Live Agent](dashboards/live-agent.md)

And additionally a set of Explorers:

- [Message Explorer](explorers/message.md)
- [Step Explorer](explorers/step.md)
- [Transcript Explorer](explorers/transcript.md)

## Filters

Cognigy Insights features global and local filters. The filter bar only displays a small portion of the available filters openly. In order to access all filters, you have to click on **additional filters**. This list includes both global and local filters. Once you have changed the filters, all the data visualized in any location will respect your filter configuration.

**Global Filters**

Global filters apply across the entirety of Cognigy Insights. Once you set them up, they persist throughout your session, even if you change from one dashboard to another.

**Local Filters**

Local filters are specific filters, which are only available for one or a few different dashboards. When you switch from one board to another, they will be temporarily disabled, but not removed from your selection.

## User menu

You can find the [user menu](../ai/administer/user-menu/overview.md) in the upper-right corner of the screen.

## Main menu

The sidebar menu of Insights, features all available dashboards and explorers and allows you to quickly switch between different analytics views to analyze your AI Agent's performance.

You can always recognize the currently selected option as the one highlighted in a light blue-grey color in the menu bar, but also by the header displayed in the upper part of your screen.
The sidebar also allows you to switch back to Cognigy.AI by clicking on the **Cognigy.AI** entry.

<figure>
  <img class="image-center" src="../../../_assets/insights/insights-menu.png" width="100%" />
  <figcaption>Insights main menu</figcaption>
</figure>


!!! tip "Insights product introduction"
    To advance your understanding you can see our live presentation of Cognigy Insights here: 
    
    - [Insights product introduction (English)](https://youtu.be/hYB2iQ_dT5g)
    - [Insights product introduction (German)](https://youtu.be/kCkUrHM9dQo)

## More Information

- [Global Filters](global-filters.md)
- Dashboards:
    - [Overview](dashboards/overview.md)
    - [Dashboard Engagement](dashboards/engagement.md)
    - [Dashboard NLU Performance](dashboards/nlu-performance.md)
- Explorers:
    - [Step Explorer](explorers/step.md)
    - [Transcript Explorer](explorers/transcript.md)
    - [Message Explorer](explorers/message.md)
    - [Download Report](download-reports.md)