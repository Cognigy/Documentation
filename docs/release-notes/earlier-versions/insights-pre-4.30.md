---
 title: "Cognigy Insights" 
 slug: "pre-4.30" 
 hidden: false 
---
# Cognigy Insights

## 4.29.0

**Released** July 7, 2022

## Bug Fixes

- Fixed a bug where Odata would double stringify already stringified content and produce wrong JSON
- Fixed a bug where the top part of the filters sidebar was blocked after the Notification disappeared

## 4.28.0

**Released** June 23, 2022

### Improvements

- Improved by adding Endpoint column to Transcript Explorer

## 4.27.0

**Released** June 7, 2022

### Improvements

- Improved by fixing the Analytics API openapi documentation which was unclear and cannot get the request to work. changed handoverEscalations to number

### Bug Fixes

- Fixed a bug where the locale options in global filters of insights repeated twice, because they contained both locale name and nluLanguage
- Fixed a bug where analytics sessions used to use always hardcoded new Date() instead of incoming timestamp

## 4.26.0

**Released** May 24, 2022

### Improvements

- Improved by adding necessary and missing indices on analytics and sessions collections so that the initial load of Quantitative Queries are covered. Reduces the count totalDocsExamined to 0 by only scanning the indexed Keys
- Improved by adding distinct color to the agent messages

### Bug Fixes

- Fixed a bug where conversation records(input) would miss the analytics database because of invalid field names that start with $
- Fixed a visualization problem of "switched Flow" messages in the Transcript Explorer

## 4.25.0

**Released** May 10, 2022

### Bug Fixes

- Fixed a bug where Message Explorer had 2 scroll bars which caused to invalid infinite loader behavior

## 4.24.0

**Released** May 2, 2022

### Improvements

- Improved by adding an endpoint for deleting analytics records for an organization
- Improved by fixing accessibility issues in step explorer
- Improved by reducing the dashboard UI response time by replacing SVG based charts with canvas-based charts
- Improved by adding pagination in the Step Explorer to support complex step graphs

### Bug Fixes

- Fixed a bug where number reports with "Amount" types show non-integer values
- Fixed a bug when a transcript list had a loading issue after filters/agent change

## 4.23.0

**Released** April 12, 2022

This release does not contain any fixes or improvements.

## 4.22.0

**Released** March 28, 2022

### Improvements

- Improved by indicating Flow switches in the expert mode of Transcript Explorer

### Bug Fixes

- Fixed a bug where data are not loaded in Step Explorer
- Fixed a bug where Step Explorer mistakenly does not display a newly tracked steps, if there is already a cached version of today’s report
- Fixed a bug where Contact Profiles are not displayed correctly in the Transcript Explorer
