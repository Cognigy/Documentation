---
 title: "Release notes" 
 slug: "release-notes" 
 hidden: false 
---
# Release notes

## 4.26.0
**This version is currently in pre-release and will be released soon**

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