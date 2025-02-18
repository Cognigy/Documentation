---
title: "What's Insights?" 
slug: "overview"
hidden: false 
---

# Cognigy Insights 

*Cognigy Insights* replaces our previous static analytics report and provides you with the tools you need to improve the customer experience your AI agents provide.
Insights features a range of key metrics, helping you to understand the usage and the performance of your bots.

<figure>
  <img class="image-center" src="../../../_assets/insights/overview.png" width="100%" />
</figure>

Cognigy.AI provides two data analysis solutions catering to different preferences:

- **Cognigy.AI OData Endpoint**. Allows access to raw data through APIs and is highly customizable, making it suitable for integration with BI tools and creating custom reports. For more information about the OData endpoint, read the [Cognigy.AI: OData Analytics Endpoint](../ai/analyze/odata.md) documentation.
- **Cognigy Insights**. Offers user-friendly pre-built reports and tools for quick data analysis and visualization without requiring extensive technical expertise.

The comparison of the OData Endpoint and Insights is outlined in the table.

| Feature             | Cognigy.AI OData Endpoint                                                                 | Cognigy Insights                                                                   |
|---------------------|-------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| Purpose             | Provides access to raw data                                                               | Analyzes and visualizes raw data                                                   |
| Data Type           | Raw data (structured format)                                                              | Processed data (visualizations, reports)                                           |
| Functionality       | Allows retrieval of data using GET requests                                               | Offers data exploration, metric tracking, performance analysis, data export in CSV |
| User Interface      | API                                                                                       | User-friendly interface with reports                                               |
| Output              | Data in a structured format (for example, JSON, XML)                                      | Insights, trends, visualizations                                                   |
| Use Case            | Integrate data with external BI tools <br> Build custom reports for complex data analysis | Get quick insights through pre-built reports, explorers, and reports               |
| Technical Expertise | API knowledge required                                                                    | Less technical knowledge required                                                  |
| Customization       | Highly customizable                                                                       | Limited customization                                                              |

## Reports

Cognigy Insights co-exists side-by-side with Cognigy.AI and is tightly integrated with some of Cognigy's products as well.
Insights features a variety of reports and explorers to highlight different data types, enabling you to track your customers' behavior and the success of your AI Agents. Additionally, all collected data is accessible through OData.
Insights operates within individual Cognigy.AI Projects. This allows you to analyze data specific to each Project and switch between Projects seamlessly. However, comparing data across Projects simultaneously is not supported.

Access Cognigy Insights by opening the left-side menu in a Cognigy.AI Project and selecting **Insights**. To switch Projects within Insights, use the dropdown menu in the upper-left corner.
When switching from Cognigy.AI to Cognigy Insights, you will be redirected to the Insights **Report** section, starting on the Overview report.

<figure>
  <img class="image-center" src="../../../_assets/insights/reports/overview/overview-report.png" width="100%" />
  <figcaption>Overview report</figcaption>
</figure>

Cognigy Insights features a variety of different reports and explorers, which visualize key metrics of your currently selected AI Agent. 

Insights provides the following Reports:

- [Overview](reports/overview.md)
- [Engagement](reports/engagement.md)
- [NLU Performance](reports/nlu-performance.md)
- [Live Agent](reports/live-agent.md)
- [Goals](reports/goals.md)

And additionally, a set of Explorers:

- [Message Explorer](explorers/message.md)
- [Step Explorer](explorers/step.md)
- [Transcript Explorer](explorers/transcript.md)

## Filters

Cognigy Insights offers global and local filters. The filter bar shows only a selection of global filters. To access all filters, including both global and local ones, click **more filters**. Any filter changes you make will be applied to all data visualizations throughout the platform.

**Global Filters**

Global filters apply across the entirety of Cognigy Insights. Once you set them up, they persist throughout your session, even if you change from one report to another.

**Local Filters**

Local filters are specific filters, which are only available for one or a few different reports. When you switch from one board to another, they will be temporarily disabled, but not removed from your selection.

## User Menu

You can find the [User Menu](../ai/administer/user-menu/overview.md) in the upper-right corner of the screen.

## Main Menu

The Insights left-side menu displays all available reports and explorers. This menu allows you to easily switch between different reports and explorers to analyze your AI Agent's performance.

You can always identify the currently selected view in two ways: it's highlighted in light blue-gray in the menu bar and displayed in the header at the top of your screen.

The left-side menu also allows you to switch back to Cognigy.AI by clicking **Cognigy.AI**.

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
- [Pre-Aggregation](data-management/pre-aggregation.md)
- [Data Expiration](data-management/ttl.md)