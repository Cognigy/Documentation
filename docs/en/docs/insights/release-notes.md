---
 title: "Release notes" 
 slug: "release-notes" 
 hidden: false 
---
# Release notes

## 4.32.0
**This version is currently in pre-release and will be released soon**

**Important announcement**:

With release v4.30.0 we have officially marked our [kubernetes](https://github.com/cognigy/kubernetes) repository as `deprecated`. If you are an `on-premise` customer and you are running Cognigy.AI/Cognigy Insights yourself, please have a look at our [Helm Chart](https://github.com/cognigy/cognigy-ai-helm-chart) which we have crafted for Cognigy.AI/Cognigy Insights! Our Kubernetes repository will still receive updates `until 31st December 2022`.

### Improvements

- Improved by adding the info Tooltips  in insight dashboard reports. (pr: !10666, ticket: #27435)
- Improved by including 'today' under 'Last X days' (pr: !10597, ticket: #27819)
- Improved by Making Contact ID copyable in the Transcript explorer (pr: !10206, ticket: #27985)
- Changed duration formatting for the number charts (pr: !10232, ticket: #27805)
- Changed background color in transcript explorer (pr: !10452, ticket: #27976)
- Fixed sidebar animation (pr: !10372, ticket: #28490)
- Added Search field for Flows + order of flows for the Transcript Explorer (pr: !10411, ticket: #27975)

### Bugfixes

- Fixed a bug: Message explorer search filter doesn't work (pr: !10536, ticket: #28416)
- Fixed a bug:  User has to refresh his insights dashboard to see the Actual Active contacts (pr: !10675, !10501, ticket: #28759)
- Fixed a bug:  Close dropdown icon in the Insights dashboards left sidebar doesn't work (pr: !10677, , ticket: #27808)
- Fixed a bug:  Close dropdown icon in the Insights dashboards left sidebar doesn't work (pr: !10677, , ticket: #27808)

## 4.31.0
**Released** August 2nd, 2022

**Important announcement**:

With release v4.30.0 we have officially marked our [kubernetes](https://github.com/cognigy/kubernetes) repository as `deprecated`. If you are an `on-premise` customer and you are running Cognigy.AI/Cognigy Insights yourself, please have a look at our [Helm Chart](https://github.com/cognigy/cognigy-ai-helm-chart) which we have crafted for Cognigy.AI/Cognigy Insights! Our Kubernetes repository will still receive updates `until 31st December 2022`.

### Improvements

- Improved by adding Highlighting the transcripts by changing the background color of the transcript list table to white

### Bugfixes

- Fixed a bug: insights not loading

## 4.30.0
**Released** July 18th, 2022

**Important announcement**:

With this release we are officially marking our [kubernetes](https://github.com/cognigy/kubernetes) repository as `deprecated`. If you are an `on-premise` customer and you are running Cognigy.AI/Cognigy Insights yourself, please have a look at our [Helm Chart](https://github.com/cognigy/cognigy-ai-helm-chart) which we have crafted for Cognigy.AI/Cognigy Insights! Our Kubernetes repository will still receive updates `until 31st December 2022`.

### Improvements

- Improved by adding dropdown to Transcript Explorer with options to create a Playbook and redirect to the Playbook editor in Cognigy AI

### Bugfixes

- Fixed a bug: Remove default timezone warning
- Fixed a bug: Fixed webpack config

## 4.29.0
**Released** July 7th, 2022

## Bugfixes

- Fixed a bug where Odata would double stringify already stringified content and produces wrong JSON
- Fixed a bug where the top part of the filters sidebar was blocked after Notification disappear


## 4.28.0
**Released** June 23rd, 2022

### Improvements

- Improved by adding Endpoint column to Transcript Explorer

## 4.27.0
**Released** June 7th, 2022

### Improvements

- Improved by fixing the Analytics API openapi documentation which was unclear and cannot get the request to work. changed handoverEscalations to number

### Bugfixes

- Fixed a bug where the locale options in global filters of insights repeated twice, because they contained both locale name and nluLanguage
- Fixed a bug where analytics sessions used to use always hardcoded new Date() instead of incoming timestamp

## 4.26.0
**Released** May 24th, 2022

### Improvements

- Improved by adding necessary and missing indices on analytics and sessions collections so that the initial load of Quantitative Queries are covered. Reduces the count totalDocsExamined to 0 by only scanning the indexed Keys
- Improved by adding distinct color to the agent messages

### Bugfixes

- Fixed a bug where conversation records(input) would miss the analytics database, because of invalid field names that starts with $
- Fixed a visualization problem of "switched Flow" messages in the Transcript Explorer

## 4.25.0
**Released** May 10th, 2022

### Bugfixes
- Fixed a bug where Message Explorer had 2 scrollbars which caused to invalid infinite loader behaviour

## 4.24.0
**Released** May 2nd, 2022

### Improvements
- Improved by adding an endpoint for deleting analytics records for an organisation
- Improved by fixing accessibility issues in step explorer
- Improved by reducing the dashboard UI response time by replacing SVG based charts with canvas based charts
- Improved by adding pagination in the Step Explorer to support complex step graphs

### Bugfixes
- Fixed a bug where number reports with "Amount" types show non-integer values
- Fixed a bug when transcript list had a loading issue after filters/agent change


## 4.23.0
**Released** April 12th, 2022

This release does not contain any fixes ore improvements.

## 4.22.0
**Released** March 28th, 2022

### Improvements
- Improved by indicating Flow switches in the expert mode of Transcript Explorer

### Bugfixes
- Fixed a bug where data are not loaded in Step Explorer
- Fixed a bug where Step Explorer mistakenly does not display a newly tracked steps, if there is already a cached version of today’s report
- Fixed a bug where Contact Profiles are not displayed correctly in Transcript Explorer