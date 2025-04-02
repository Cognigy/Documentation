---
title: "OData"
slug: "odata-analytics-endpoint"
description: "Cognigy.AI provides an OData v4 analytics Endpoint for retrieving raw data via GET requests. It supports enterprise analytics needs, enabling detailed queries for spreadsheets and dashboard creation with preferred data visualization tools."
hidden: false
---

# Cognigy.AI: OData Analytics Endpoint

[![Version badge](https://img.shields.io/badge/Updated in-v4.95-blue.svg)](../../release-notes/4.90.md)

[OData (Open Data Protocol)](https://www.odata.org/) is a standard for building and using RESTful APIs. It simplifies data access for web clients by providing a consistent way to describe data models and perform CRUD operations (Create, Read, Update, Delete) using standard HTTP methods and URLs.

Based on OData protocol version 4,
Cognigy.AI offers an _OData Analytics endpoint_ to retrieve raw data from Cognigy.AI using `GET` requests.
This endpoint meets all your enterprise analytics needs,
enabling you to make fine-grained queries in your spreadsheets
or build rich dashboards for AI Agents with your favorite data visualization tool.

Watch this video to get a quick overview of what the OData Analytics endpoint is, how it works, and in which scenarios you can use it:

<div style="text-align:center;">
  <iframe width="701" height="438" src="https://www.youtube.com/embed/D18JNjUPvN4?si=UJYuFYZzEovHg83Z&amp;start=1857" title="Cognigy Sessions: Cognigy Insights & OData" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

To analyze your AI Agent's performance, you can use the [built-in Insights reports](../../insights/overview.md) as an alternative to OData or in addition to it.

## Restrictions

- The Cognigy.AI OData endpoint supports only [OData protocol version 4](https://www.odata.org/documentation/).
- The Cognigy.AI OData endpoint only supports `GET` requests and does not support any other request types, such as `PATCH`, `DELETE`, or `POST`.
- The data retrieved through the Cognigy.AI OData endpoint is not updated in real time and may not reflect current conditions or changes.

## Data Protection

You can control data available through the OData endpoint at both the [Endpoint](../deploy/endpoints/overview.md) and [Flow](../build/flows/overview.md) levels:

- **Endpoint**. Go to the [Data Protection & Analytics](../deploy/endpoints/data-protection-and-analytics.md) section within the Endpoint, which manages data associated with your connections to channels such as webchat, Slack, and WhatsApp.
    - If you disable the **Collect Analytics** setting, no analytics data will be logged or available in OData.
    - If you enable the **Mask Sensitive Analytics** setting, the `inputText` and `inputData` fields will be masked.
- **Node**. Add a [Blind Mode](../build/node-reference/analytics/blind-mode.md) Node to your Flow. This Node disables or masks analytics data available in the OData Endpoint.

## Supported Versions

| Cognigy.AI version | Cognigy.AI OData Endpoint version | Status                                      |
|--------------------|-----------------------------------|---------------------------------------------|
| 4.65 and later     | 2.4                               | Supported                                   |
| 4.48 and later     | 2.3                               | Supported; deprecation date is September, 2025 |
| 4.31-4.47          | 2.0–2.3                           | Out of support                              |
| 4.30 and earlier   | 2.0–2.2                           | Out of support                              |

## OData Endpoint Access

The OData endpoint is located on a different domain than your Cognigy User Interface domain:

- Trial. Use [https://odata-trial.cognigy.ai](https://odata-trial.cognigy.ai).
- SaaS and on-premises. Replace `odata-trial.cognigy.ai` with your installation's domain name.

### Authentication

To connect to the OData endpoint, you need to have the `odata` [global role](../../ai/administer/access/admin-center/access-control.md#global-roles)
and an [API Key](../../ai/administer/user-menu/my-profile.md#create-api-keys).

OData Endpoint URL format:

`https://<odata-domain>/<api-version>/<collection>?apikey=<your-api-key>`, where

- `odata domain` — the base domain of the OData service. It is the root URL where your OData service is hosted.
- `api-version` — the version of the API you are interacting with. Currently, Cognigy.AI supports v2.4.
- `collection` — a specific collection within the OData service you want to access. A collection is similar to a database table or a set of entities.
- `your-api-key` — an API key that provides authentication and authorization for accessing the API. You need to get this key from your [profile](../../ai/administer/user-menu/my-profile.md#create-api-keys).

OData Endpoint URL example:

`https://odata-trial.cognigy.ai/v2.4/Analytics?apikey=123abc`, where

- `odata-trial.cognigy.ai` — the Cognigy.AI OData base domain.
- `v2.4` — the API version of the Cognigy.AI OData endpoint.
- `Analytics` — the Analytics data collection you're trying to access within Cognigy.AI.
- `123abc` — your unique API key.

#### Authentication for Microsoft Excel and Power BI

When using Microsoft Excel and Power BI, you might be prompted to authenticate.
In this case, select **Anonymous Authentication**.

## System Query Options

The OData Analytics Endpoint supports the following [OData system query options](https://docs.oasis-open.org/odata/odata/v4.01/odata-v4.01-part1-protocol.html#sec_SystemQueryOptions):

- `$filter`
- `$skip`
- `$top`
- `$orderby`
- `$select`
- `$count`[^*]

[^*]: Microsoft Excel and Power BI do not support for the `$count` query. Use Postman or other options. To perform this query, consider using tools such as Postman or other applications that support advanced API querying.

### Examples

The tables contain examples of requests using System Query Options.
Select the OData endpoint version [compatible with your Cognigy.AI version](#supported-versions).

=== "OData 2.4"

    | Request Description                                                                                                                                                                                          | OData 2.4 Request                                                                                                                                                  |
    |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Returns total count of Analytics records (not supported in Microsoft Excel or Power BI).                                                                                                                     | `https://odata-trial.cognigy.ai/v2.4/Analytics/$count?apikey=<your-api-key>`                                                                                       |
    | Returns all Analytics records for the given API Key.                                                                                                                                                         | `https://odata-trial.cognigy.ai/v2.4/Analytics?apikey=<your-api-key>`                                                                                              |
    | Returns the first 10 Analytics records.                                                                                                                                                                      | `https://odata-trial.cognigy.ai/v2.4/Analytics/?$top=10&apikey=<your-api-key>`                                                                                     |
    | Returns the top 5 Analytics records where `executionTime` is less than 50ms, ordered by `executionTime`.                                                                                                     | `https://odata-trial.cognigy.ai/v2.4/Analytics/?$filter=executionTime lt 50&$top=5&$orderby=executionTime&apikey=<your-api-key>`                                   |
    | Returns all Analytics records for a specific Cognigy.AI Project filtered by `projectId`                                                                                                                      | `https://odata-trial.cognigy.ai/v2.4/Analytics/?$filter=projectId eq '<project-id>'&apikey=<your-api-key>`                                                         |
    | Returns Project IDs and Session IDs for a specific Cognigy.AI project. The request filters the data based on the `projectId` field and selects only the `projectId` and `sessionId` for each matching entry. | `https://odata-trial.cognigy.ai/v2.4/Analytics/?$filter=projectId eq '<project-id>'&$select=projectId,sessionId&apikey=<your-api-key>`                             |
    | Returns all Analytics records between two dates, for example, 1st Jan 2021 and 1st July 2021.                                                                                                                | `https://odata-trial.cognigy.ai/v2.4/Analytics/?$filter=timestamp gt '2021-01-01T00:00:00.000Z' and timestamp lt '2021-07-01T00:00:00.000Z'&apikey=<your-api-key>` |

=== "OData 2.3"

    | Request Description                                                                                                                                                                                          | OData 2.3 Request                                                                                                                                                  |
    |--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Returns total count of Analytics records (not supported in Microsoft Excel or Power BI).                                                                                                                     | `https://odata-trial.cognigy.ai/v2.3/Analytics/$count?apikey=<your-api-key>`                                                                                       |
    | Returns all Analytics records for the given API Key.                                                                                                                                                         | `https://odata-trial.cognigy.ai/v2.3/Analytics?apikey=<your-api-key>`                                                                                              |
    | Returns the first 10 Analytics records.                                                                                                                                                                      | `https://odata-trial.cognigy.ai/v2.3/Analytics/?$top=10&apikey=<your-api-key>`                                                                                     |
    | Returns the top 5 Analytics records where `executionTime` is less than 50ms, ordered by `executionTime`.                                                                                                     | `https://odata-trial.cognigy.ai/v2.3/Analytics/?$filter=executionTime lt 50&$top=5&$orderby=executionTime&apikey=<your-api-key>`                                   |
    | Returns all Analytics records for a specific Cognigy.AI Project filtered by `projectId`                                                                                                                      | `https://odata-trial.cognigy.ai/v2.3/Analytics/?$filter=projectId eq '<project-id>'&apikey=<your-api-key>`                                                         |
    | Returns Project IDs and Session IDs for a specific Cognigy.AI project. The request filters the data based on the `projectId` field and selects only the `projectId` and `sessionId` for each matching entry. | `https://odata-trial.cognigy.ai/v2.3/Analytics/?$filter=projectId eq '<project-id>'&$select=projectId,sessionId&apikey=<your-api-key>`                             |
    | Returns all Analytics records between two dates, for example, 1st Jan 2021 and 1st July 2021.                                                                                                                | `https://odata-trial.cognigy.ai/v2.3/Analytics/?$filter=timestamp gt '2021-01-01T00:00:00.000Z' and timestamp lt '2021-07-01T00:00:00.000Z'&apikey=<your-api-key>` |

For a full reference,
refer to the extensive collection of resources at [OData.org](https://www.odata.org/) and the [Oasis OData URL Convention](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html) documentation.

## Cognigy.AI OData Collections

The OData endpoint provides access to several data collections containing information about your interactions and workflows.
The set of collections varies depending on which version you are using:

=== "Version 2.4"

    The current version of the OData endpoint is `v2.4`. In this version, the following OData collections are available:

    - [Analytics](#analytics) (`/Analytics`)
    - [Conversations](#conversations) (`/Conversations`)
    - [Steps](#steps) (`/Steps`)
    - [ExecutedSteps](#executedsteps) (`/ExecutedSteps`)
    - [Sessions](#sessions) (`/Sessions`)
    - [LiveAgentEscalations](#liveagentescalations) (`/LiveAgentEscalations`)
    - [Goals](#goals) (`/Goals`)
    - [GoalSteps](#goalsteps) (`/GoalSteps`)
    - [GoalStepMetrics](#goalstepmetrics) (`/GoalStepMetrics`)
    - [GoalEvents](#goalevents) (`/GoalEvents`)

    The URL for accessing the v2.4 OData endpoint is as follows:
    `https://<odata-domain>/v2.4/<collection>?apikey=<your-api-key>`

=== "Version 2.3"

    The previous version of the OData endpoint is `2.3`. In this version, the following OData collections are available:

    - [Analytics](#analytics) (`/Analytics`)
    - [Conversations](#conversations) (`/Conversations`)
    - [Steps](#steps) (`/Steps`)
    - [ExecutedSteps](#executedsteps) (`/ExecutedSteps`)
    - [Sessions](#sessions) (`/Sessions`)
    - [LiveAgentEscalations](#liveagentescalations) (`/LiveAgentEscalations`)

    The URL for accessing the v2.3 OData endpoint is as follows:
    `https://<odata-domain>/v2.3/<collection>?apikey=<your-api-key>`

Each collection can be filtered by its fields, which are often retrieved directly from the [Input](../test/interaction-panel/input.md) object results.

### Analytics

The Analytics collection offers a log of comprehensive details such as organizational information,
project identifiers, Flow specifics, and essential performance metrics.
When a chat or voice AI Agent session happens in Cognigy.AI, it creates an Analytics record for the interaction. 
Each interaction is logged as a single record. The information is saved only after the entire session is finished.
You can change this data
by using the [Overwrite Analytics Node](../build/node-reference/analytics/overwrite-analytics.md).

**Requests**

Select one of the requests to extract data from the collection. Note that the API version in the request must match [your version of Cognigy.AI](#supported-versions).

=== "OData 2.4"

    `https://odata-trial.cognigy.ai/v2.4/Analytics?apikey=<your-api-key>`

=== "OData 2.3"
    `https://odata-trial.cognigy.ai/v2.3/Analytics?apikey=<your-api-key>`

**Fields**

{! _includes/ai/understood-messages.md !}

When retrieving this collection, the endpoint will return the following fields:

| Field Name         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Type     | Example                                                          |
|--------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|------------------------------------------------------------------|
| id                 | The unique ID of the record. Applicable to the OData endpoint v2.4 or later.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   | 5a91d194fde28b0011ce2423                                         |
| _id                | The unique ID of the record. Applicable to the OData endpoint v2.3 or earlier.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | String   | 5a91d194fde28b0011ce2423                                         |
| organisation       | The name of your organization.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | String   | cognigy                                                          |
| projectId          | The ID of the Project related to the record.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   | 5a91d194fde28b0011ce2422                                         |
| flowReferenceId    | The ID of the Flow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | String   | 66ceb9cc-ac5b-4cdd-9f4b-8a48dfbb35d9                             |
| entrypoint         | The ID of the Project or Snapshot used by the Endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | String   | 621d3deb87016d3855ec0c92                                         |
| ip                 | The IP address from which the request originated.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | String   | 78.143.45.111                                                    |
| contactId          | The hash of the user ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | String   | 99ea95befe61812656bf963ba7d44ab7                                 |
| sessionId          | The Session ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String   | 5a91d194fde28b0011ce2425                                         |
| inputId            | The ID of the input message.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | String   | 5a91d194fde28b0011ce2424                                         |
| inputText          | The input text.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String   | Hello World!                                                     |
| inputData          | The input data object as a string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String   | {"key":"value"}                                                  |
| state              | The state of the Flow at input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String   | default                                                          |
| mode               | A [Mode](../test/interaction-panel/input.md#properties) of the input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | String   | TextOnly                                                         |
| userType           | The type of the connecting user. Either `external` for external user or `admin` for admin user.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String   | external                                                         |
| channel            | The channel through which the record was received.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | String   | facebook                                                         |
| flowLanguage       | The language of the Flow.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | en-EN                                                            |
| intent             | The found Intent. This field can be empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | String   | orderFood                                                        |
| intentFlow         | The Parent ID of the Flow in which the Intent was found. This field can be empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | String   | 5e33b160e6236da3aa54221461a53f04                                 |
| intentScore        | The numerical score of the input against a recognized Intent. This field can be empty.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Number   | 0.836322430892043                                                |
| completedGoalsList | A list of completed goals in this session.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | String   | orderedFood                                                      |
| foundSlots         | Found Slot tags.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | String   | DATE                                                             |
| foundSlotDetails   | Found Slot tags with details.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | String   | DATE[2018-2-25T12:32:32.000]                                     |
| understood         | An input is considered `understood` if any of the following conditions are met:<br>- An Intent or Slot is identified.<br>- The input is marked as understood through the Nodes: Code, Overwrite Analytics, Search Extract Output, or AI Agent.<br>- The sentence type is `pAnswer`, `nAnswer`, or `Greeting` (if **Confirmation Word logic** is activated).<br><br>An input is considered `not understood` if any of the following conditions are met:<br>- There is an active handover without triggering an AI Copilot Whisper Flow.<br>- The message is explicitly marked as `Don't count` or `Null`. | Boolean  | true                                                             |
| timestamp          | The date and time of the input.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | DateTime | 2018-2-25T12:32:32.000Z                                          |
| executionTime      | The time it took to execute the Flow in milliseconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Number   | 32                                                               |
| execution          | The execution count.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Number   | 3                                                                |
| custom1            | The custom value created by Flow. The custom field has a maximum character limit of 1024.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | custom value                                                     |
| custom2            | The custom value created by Flow. The custom field has a maximum character limit of 1024.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | custom value                                                     |
| custom3            | The custom value created by Flow. The custom field has a maximum character limit of 1024.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | custom value                                                     |
| custom4            | The custom value created by Flow. The custom field has a maximum character limit of 1024.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | custom value                                                     |
| custom5            | The custom value created by Flow. The custom field has a maximum character limit of 1024.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | custom value                                                     |
| custom6            | The custom value created by Flow. The custom field has a maximum character limit of 1024.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | custom value                                                     |
| custom7            | The custom value created by Flow. The custom field has a maximum character limit of 1024.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | custom value                                                     |
| custom8            | The custom value created by Flow. The custom field has a maximum character limit of 1024.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | custom value                                                     |
| custom9            | The custom value created by Flow. The custom field has a maximum character limit of 1024.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | custom value                                                     |
| custom10           | The custom value created by Flow. The custom field has a maximum character limit of 1024.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | custom value                                                     |
| localeReferenceId  | The reference ID for the locale.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | String   | 4bfdcf40-a605-4686-8e92-b17fa9f178af                             |
| localeName         | The name of the locale.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | String   | English                                                          |
| endpointUrlToken   | The URL token for the Endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String   | ea30b8f20db52f9d86ea36fd55a7d66bd2c4c60eb24ac7ad52f1c9e173dd4cdb |
| endpointName       | The name of the Endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | String   | MyEndpoint                                                       |
| rating             | The rating for the session: -1 for a negative rating or 1 for a positive rating.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Number   | 1                                                                |
| ratingComment      | The comment left when given a rating.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | String   | Great service!                                                   |
| snapshotName       | The name for the Snapshot used by the Endpoint.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | String   | Bot Release 2.2                                                  |

!!! note "Why is the Analytics Step label not used?"
    The analytics step label can be updated from the Cognigy.AI UI at any time.
    Therefore, to ensure compatibility between past and future data records, the `entityReferenceId` field is used.
    This field corresponds to either the Node ID or Intent ID assigned as an analytics step.
    The current analytics label of the step can be retrieved
    by mapping the `entityReferenceID` field to the [`Steps`](#steps) record.

### Conversations

The Conversations collection offers a log of all session messages, including the end user, AI Agent, or human agent responses.
Each time one of these sources sends a message to a Cognigy.AI Flow, Cognigy.AI creates a record to log the interaction.
Each interaction is logged as a single record.

**Requests**

Select one of the requests to extract data from the collection. Note that the API version in the request must match [your version of Cognigy.AI](#supported-versions).

=== "OData 2.4"

    `https://odata-trial.cognigy.ai/v2.4/Conversations?apikey=<your-api-key>`

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/Conversations?apikey=<your-api-key>`

**Fields**

When retrieving this collection, the endpoint will return the following fields:

| Field Name             | <div style="width:300px">Description</div>                                                                                                                                                                                                                                                                         | Type     | <div style="width:50px">Example</div>                                                                                         |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------|-------------------------------------------------------------------------------------------------------------------------------|
| id                     | The unique ID of the record. Applicable to the OData endpoint v2.4 or later.                                                                                                                                                                                                                                       | String   | 5a91d194fde28b0011ce2423                                                                                                      |
| _id                    | The unique ID of the record. Applicable to the OData endpoint v2.3 or earlier.                                                                                                                                                                                                                                     | String   | 5a91d194fde28b0011ce2423                                                                                                      |
| projectId              | The ID of the Project related to the record.                                                                                                                                                                                                                                                                       | String   | 5a91d194fde28b0011ce2422                                                                                                      |
| projectName            | The name of the Cognigy.AI Project.                                                                                                                                                                                                                                                                                | String   | Project 1                                                                                                                     |
| inputId                | The ID of the input message.                                                                                                                                                                                                                                                                                       | String   | 5a91d194fde28b0011ce2424                                                                                                      |
| sessionId              | The Session ID.                                                                                                                                                                                                                                                                                                    | String   | 5a91d194fde28b0011ce2425                                                                                                      |
| contactId              | The ID of the connecting user.                                                                                                                                                                                                                                                                                     | String   | myContactID                                                                                                                   |
| organisation           | The Name of your organization.                                                                                                                                                                                                                                                                                     | String   | cognigy                                                                                                                       |
| inputText              | The input text.                                                                                                                                                                                                                                                                                                    | String   | Hello World!                                                                                                                  |
| inputData              | The input data object as a string.                                                                                                                                                                                                                                                                                 | String   | {"key":"value"}                                                                                                               |
| type                   | Whether the message is an input or output of the Flow.                                                                                                                                                                                                                                                             | String   | "input" or "output"                                                                                                           |
| source                 | The source of the message.                                                                                                                                                                                                                                                                                         | String   | "user" or "bot" or "agent" or "suggestion"                                                                                    |
| timestamp              | The date and time of the input.                                                                                                                                                                                                                                                                                    | DateTime | 2018-2-25T12:32:32.000Z                                                                                                       |
| flowName               | The name of the Flow.                                                                                                                                                                                                                                                                                              | String   | MainFlow                                                                                                                      |
| flowParentId           | The Parent ID of the Flow.                                                                                                                                                                                                                                                                                         | String   | 5e33b160e6236da3aa54221461a53f04                                                                                              |
| channel                | The channel through which the record was received.                                                                                                                                                                                                                                                                 | String   | facebook                                                                                                                      |
| inHandoverRequest      | A flag indicating whether the session is in a handover request.                                                                                                                                                                                                                                                    | Boolean  | false                                                                                                                         |
| inHandoverConversation | A flag indicating whether the session is in a handover session.                                                                                                                                                                                                                                                    | Boolean  | true                                                                                                                          |
| outputId               | The output ID.                                                                                                                                                                                                                                                                                                     | String   | f514b7b2-7dc0-4e75-be62-a53fed5b2bb7                                                                                          |
| inputAttachments       | The list of attachments that the end user uploads to the chat. Each attachment will contain the URL of the file, file name, and file type. <br><br> When a human agent uploads a file, it will be recorded in the OData format as follows, without any specific information about the file: `[{"*****":"*****"}]`. | Object   | {"url":"https://files-api-trial.cognigy.ai/v1.0/63babf6e92add771923e87b7/\",\"name\":\"abandon-rate.png\",\"type\":\"image\"} | 
| reference              | The Reference ID. For example, to reference a suggestion.                                                                                                                                                                                                                                                          | String   | null                                                                                                                          |
| localeReferenceId      | The ID of the locale.                                                                                                                                                                                                                                                                                              | String   | 7eff993c-b801-4556-b111-1c319e8577cf                                                                                          |
| endpointUrlToken       | The URL token for the Endpoint.                                                                                                                                                                                                                                                                                    | String   | ea30b8f20db52f9d86ea36fd55a7d66bd2c4c60eb24ac7ad52f1c9e173dd4cdb                                                              |
| endpointName           | The name of the Endpoint.                                                                                                                                                                                                                                                                                          | String   | MyEndpoint                                                                                                                    |
| snapshotId             | The ID of the Snapshot.                                                                                                                                                                                                                                                                                            | String   | 63ff0cc47a466cab278fd19b                                                                                                      |
| snapshotName           | The name of the Snapshot.                                                                                                                                                                                                                                                                                          | String   | Bot Release 2.2                                                                                                               |
| rating                 | The rating for the session: -1 for a negative rating or 1 for a positive rating.                                                                                                                                                                                                                                   | Number   | 1                                                                                                                             |
| ratingComment          | The comment left when given a rating.                                                                                                                                                                                                                                                                              | String   | Great service!                                                                                                                |

### Steps

The Steps collection provides a list of all entities,
which are either Nodes or Intents, assigned as analytics steps within any Flow. 
These steps are created in Cognigy.AI
by setting a value in the [Analytics Step](../analyze/collecting-data.md#analytics-data-flow) field.
For a step to appear in this OData collection, it must have been triggered at least once by a session within the Flow.
Each step is logged as a single record.

**Requests**

Select one of the requests to extract data from the collection. Note that the API version in the request must match [your version of Cognigy.AI](#supported-versions).

=== "OData 2.4"

    `https://odata-trial.cognigy.ai/v2.4/Steps?apikey=<your-api-key>`

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/Steps?apikey=<your-api-key>`

**Fields**

When retrieving this collection, the endpoint will return the following fields:

| Field Name        | Description                                                                     | Type   | Example                          |
|-------------------|---------------------------------------------------------------------------------|--------|----------------------------------|
| id                | The unique ID of the record. Applicable to the OData endpoint v2.4 or later.    | String | 5a91d194fde28b0011ce2423         |
| _id               | The unique ID of the record. Applicable to the OData endpoint v2.3 or earlier.  | String | 5a91d194fde28b0011ce2423         |
| label             | The analytics step label defined for the entity (Node or Intent) in Cognigy.AI. | String | Question (2)                     |
| type              | The type of entity.                                                             | String | `node` or `intent`               |
| entityReferenceId | The unique ID for the entity (Node ID or Flow ID).                              | String | 5a91d194fde28b0011ce2423         |
| flowReferenceId   | The ID of the Flow.                                                             | String | 5a91d194fde28b0011ce2423         |
| flowName          | The name of the Flow where the step exists.                                     | String | Main Flow                        |
| projectName       | The name of the Cognigy.AI Project.                                             | String | Project 1                        |
| snapshotId        | The ID of the Snapshot.                                                         | String | 5e33b160e6236da3aa54221461a53f04 |
| snapshotName      | The name of the Snapshot.                                                       | String | Bot Release 2.2                  |

!!! tip "Building Visualizations with Steps Records"
    The [Step Monitoring with OData](https://support.cognigy.com/hc/en-us/articles/360021089180-Step-Monitoring-with-OData) article explains how these records can be manipulated in BI software to build insightful session path analytics.

### ExecutedSteps

The ExecutedSteps collection logs all step events in sessions, including a reference to the prior (parent) step. 
Whenever a Node or Intent with an assigned step is executed, the collection creates a record for that step.
Each step is logged as a single record.

**Requests**

Select one of the requests to extract data from the collection. Note that the API version in the request must match [your version of Cognigy.AI](#supported-versions).

=== "OData 2.4"

    `https://odata-trial.cognigy.ai/v2.4/ExecutedSteps?apikey=<your-api-key>`

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/ExecutedSteps?apikey=<your-api-key>`

**Fields**

When retrieving this collection, the endpoint will return the following fields:

| Field Name        | Description                                                                    | Type     | Example                                                          |
|-------------------|--------------------------------------------------------------------------------|----------|------------------------------------------------------------------|
| id                | The unique ID of the record. Applicable to the OData endpoint v2.4 or later.   | String   | 5a91d194fde28b0011ce2423                                         |
| _id               | The unique ID of the record. Applicable to the OData endpoint v2.3 or earlier. | String   | 5a91d194fde28b0011ce2423                                         |
| userId            | The ID of the connecting user.                                                 | String   | myContactID                                                      |
| sessionId         | The Session ID.                                                                | String   | 5a91d194fde28b0011ce2425                                         |
| inputId           | The ID of the input message.                                                   | String   | 5a91d194fde28b0011ce2425                                         |
| stepLabel         | The analytics step label defined for the entity (Node or Intent) in Cognigy.AI | String   | Question (2)                                                     |
| parentStep        | The ID of the step that occurred prior to this step.                           | String   | 5a91d194fde28b0011ce2425                                         |
| type              | The type of entity.                                                            | String   | `node` or `intent`                                               |
| entityReferenceId | The unique ID for the entity (Node ID or Intent ID).                           | String   | 5a91d194fde28b0011ce2423                                         |
| flowReferenceId   | The ID of the Flow.                                                            | String   | 5a91d194fde28b0011ce2423                                         |
| flowName          | The name of the Flow where the step exists.                                    | String   | Main Flow                                                        |
| timestamp         | The date and time when the step was executed.                                  | DateTime | 2018-2-25T12:32:32.000Z                                          |
| projectName       | The name of the Cognigy.AI Project.                                            | String   | Project 1                                                        |
| projectId         | The ID of the Project related to the record.                                   | String   | 6067352c18887e471da4e392                                         |
| organisationId    | The ID of the Cognigy.AI organization associated with the record.              | String   | 5f8833dae72b850ad2ed4d53                                         |
| snapshotId        | The ID of the Snapshot.                                                        | String   | 5e33b160e6236da3aa54221461a53f04                                 |
| snapshotName      | The name of the Snapshot.                                                      | String   | Bot Release 2.2                                                  |
| localeReferenceId | The ID of the locale.                                                          | String   | 7eff993c-b801-4556-b111-1c319e8577cf                             |
| localeName        | The name of the locale.                                                        | String   | English                                                          |
| endpointUrlToken  | The URL token for the Endpoint.                                                | String   | ea30b8f20db52f9d86ea36fd55a7d66bd2c4c60eb24ac7ad52f1c9e173dd4cdb |
| endpointName      | The name of the Endpoint.                                                      | String   | MyEndpoint                                                       |

### Sessions

The Sessions collection contains a list of all sessions that have occurred.
The primary objective of this collection is
to provide a list of the analytics steps that took place in any given session, along with the order of execution.
This information is included as a comma-separated list within a field called `stepPath`.
Each session is logged as a single record.

**Requests**

Select one of the requests to extract data from the collection. Note that the API version in the request must match [your version of Cognigy.AI](#supported-versions).

=== "OData 2.4"

    `https://odata-trial.cognigy.ai/v2.4/Sessions?apikey=<your-api-key>`

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/Sessions?apikey=<your-api-key>`

**Fields**

When retrieving this collection, the endpoint will return the following fields:

| Field Name          | Description                                                                      | Type     | Example                                                                        |
|---------------------|----------------------------------------------------------------------------------|----------|--------------------------------------------------------------------------------|
| id                  | The unique ID of the record. Applicable to the OData endpoint v2.4 or later.     | String   | 5a91d194fde28b0011ce2423                                                       |
| _id                 | The unique ID of the record. Applicable to the OData endpoint v2.3 or earlier.   | String   | 5a91d194fde28b0011ce2423                                                       |
| goals               | All the goals that were achieved in the session.                                 | String   | Goal1, Goal2                                                                   |
| stepPath            | A comma-separated list of executed steps.                                        | String   | 9ac4f679-beae-4461-b9e3-43aece8b3430,f1e72fe3-f04b-48f5-b862-1e35ad253f18, ... |
| stepsCount          | The count of the number of steps.                                                | Number   | 10                                                                             |
| handoverEscalations | The number of times the session triggered a handover.                            | Number   | 3                                                                              |
| startedAt           | The date and time when first message was received.                               | DateTime | 2018-2-25T12:32:32.000Z                                                        |
| userId              | The ID of the connecting user.                                                   | String   | myContactID                                                                    |
| sessionId           | The Session ID.                                                                  | String   | 5a91d194fde28b0011ce2425                                                       |
| localeReferenceId   | The ID of the locale.                                                            | String   | 7eff993c-b801-4556-b111-1c319e8577cf                                           |
| localeName          | The name of the locale.                                                          | String   | English                                                                        |
| endpointReferenceId | The ID of the Cognigy.AI Endpoint.                                               | String   | 5e33b160e6236da3aa54221461a53f04                                               |
| endpointName        | The name of the Cognigy.AI Endpoint.                                             | String   | Webchat                                                                        |
| projectName         | The name of the Cognigy.AI Project.                                              | String   | Project 1                                                                      |
| projectId           | The ID of the Project related to the record.                                     | String   | 6067352c18887e471da4e392                                                       |
| organisationId      | The ID of the Cognigy.AI organization associated with the record.                | String   | 5f8833dae72b850ad2ed4d53                                                       |
| snapshotId          | The ID of the Snapshot.                                                          | String   | 5e33b160e6236da3aa54221461a53f04                                               |
| snapshotName        | The name of the Snapshot.                                                        | String   | Bot Release 2.2                                                                |
| endpointUrlToken    | The URL token for the Endpoint.                                                  | String   | ea30b8f20db52f9d86ea36fd55a7d66bd2c4c60eb24ac7ad52f1c9e173dd4cdb               |
| rating              | The rating for the session: -1 for a negative rating or 1 for a positive rating. | Number   | 1                                                                              |
| ratingComment       | The comment left when given a rating.                                            | String   | Great service!                                                                 |

### LiveAgentEscalations

**Description**

The LiveAgentEscalations collection contains records from [Cognigy Live Agent](../../live-agent/overview.md) and includes the related data about handovers to Live Agent.
Each handover (escalation) is logged as a single record.

**Request**

=== "OData 2.4"

    `https://odata-trial.cognigy.ai/v2.4/LiveAgentEscalations?apikey=<your-api-key>`

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/LiveAgentEscalations?apikey=<your-api-key>`

**Fields**

When retrieving this collection, the endpoint will return the following fields:

| Field Name        | Description                                                                                                                                   | Type     | Example                                                          |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|----------|------------------------------------------------------------------|
| id                | The unique ID of the record. Applicable to the OData endpoint v2.4 or later.                                                                  | String   | 5a91d194fde28b0011ce2423                                         |
| _id               | The unique ID of the record. Applicable to the OData endpoint v2.3 or earlier.                                                                | String   | 5a91d194fde28b0011ce2423                                         |
| organisationId    | The ID of the Cognigy.AI organization associated with the record.                                                                             | String   | 5eb4a49d426cd3d05f2892a9                                         |
| projectId         | The ID of the Project related to the record.                                                                                                  | String   | 6409b6c53c9687b5e78e6403                                         |
| sessionId         | The Session ID.                                                                                                                               | String   | session-2a38246e-0395-49a5-876d-dd5133fd5418                     |
| timestamp         | The date and time when the record was created.                                                                                                | DateTime | 2023-06-28T07:59:04.628Z                                         |
| localeName        | The Name of the locale.                                                                                                                       | String   | en                                                               |
| status            | The current status of the escalated conversation in Live Agent. The possible statures are: `opened`, `assigned`, `resolved`, and `abandoned`. | String   | opened                                                           |
| inboxId           | The ID of the inbox associated with the record.                                                                                               | String   | 7983                                                             |
| inboxName         | The name of the inbox.                                                                                                                        | String   | LA Chatbot-default                                               |
| teamId            | The ID of the team assigned to the conversation.                                                                                              | String   | 8                                                                |
| teamName          | The name of the team assigned to the conversation.                                                                                            | String   | IT Support                                                       |
| labels            | The list of labels assigned to the conversation.                                                                                              | Array    | [Hardware]                                                       |
| agentId           | The ID of the human agent assigned to the conversation.                                                                                       | String   | 618cf7687614774ba028dcac                                         |
| agentName         | The name of the human agent assigned to the conversation. This field is supported from Cognigy.AI 4.80.                                       | String   | John Doe                                                         |
| contactId         | The ID of the connecting user.                                                                                                                | String   | 649ba8450d5df5cadf8b75b8                                         |
| endpointName      | The name of the Cognigy.AI Endpoint.                                                                                                          | String   | LA Chatbot                                                       |
| endpointType      | The type of the Endpoint.                                                                                                                     | String   | webchat2                                                         |
| endpointUrlToken  | The URL token for the Endpoint.                                                                                                               | String   | ea30b8f20db52f9d86ea36fd55a7d66bd2c4c60eb24ac7ad52f1c9e173dd4cdb |
| channel           | The channel through which the record was received.                                                                                            | String   | admin-webchat                                                    |
| localeReferenceId | The ID of the locale.                                                                                                                         | String   | 7eff993c-b801-4556-b111-1c319e8577cf                             |
| snapshotId        | The ID of the Snapshot.                                                                                                                       | String   | 63ff0cc47a466cab278fd19b                                         |
| snapshotName      | The name of the Snapshot.                                                                                                                     | String   | Prod-Snapshot 26.7.23                                            |

### Goals

The Goals collection contains records from [Goals](goals-and-tasks/overview.md).
Each goal is logged as a single record.

**Request**

=== "OData 2.4"

    `https://odata-trial.cognigy.ai/v2.4/Goals?apikey=<your-api-key>`

| Field Name     | Description                                                                                                                                 | Field Type | Example                                                      |
|----------------|---------------------------------------------------------------------------------------------------------------------------------------------|------------|--------------------------------------------------------------|
| goalId         | The Goal ID.                                                                                                                                | String     | 66ebf71693dfb26c3ca4c827                                     |
| name           | The name of the goal.                                                                                                                       | String     | Goal_07                                                      |
| version        | The UUID for tracking the current version of the goal configuration. Each update or change of the goal configuration creates a new version. | String     | 8ec4de84-71e2-4c98-a7c3-b18173f36223                         |
| description    | The description of the goal.                                                                                                                | String     | The goal is to gather metrics for a flight booking use case. |
| referenceId    | The Reference ID associated with the goal.                                                                                                  | String     | 04dd272f-6c8c-4957-9714-937e6f0847c2                         |
| projectId      | The ID of the Project related to the record.                                                                                                | String     | 5a91d194fde28b0011ce2422                                     |
| organisationId | The ID of the Cognigy.AI organization associated with the record.                                                                           | String     | 5eb4a49d426cd3d05f2892a9                                     |
| createdAt      | Timestamp indicating when the goal was created.                                                                                             | Timestamp  | 2024-09-19T10:04:06.000Z                                     |
| lastChanged    | Timestamp of the last update to the goal.                                                                                                   | Timestamp  | 2024-09-19T10:04:06.000Z                                     |
| createdBy      | The identifier for the user who created the goal.                                                                                           | String     | 63bff78cd74f7c7f7dd12944                                     |
| lastChangedBy  | The identifier for the user who last modified the goal.                                                                                     | String     | 63bff78cd74f7c7f7dd12944                                     | 

### GoalSteps

The GoalSteps collection contains records about a specific goal step from [Goals](goals-and-tasks/overview.md).
Each goal is logged as a single record.

**Request**

=== "OData 2.4"

    `https://odata-trial.cognigy.ai/v2.4/GoalSteps?apikey=<your-api-key>`

| Field Name     | Description                                                                                                                                                                                                           | Field Type | Example                                                      |
|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|--------------------------------------------------------------|
| goalStepId     | The Goal Step ID.                                                                                                                                                                                                     | String     | 66eac7950dc3fd6e4b3bcd8c                                     |
| name           | The Name of the goal step.                                                                                                                                                                                            | String     | Start                                                        |
| version        | The UUID for tracking step the version of the specific step configuration within the goal. Each update or change of the goal configuration creates a new version.                                                     | String     | 6cb467d0-9f79-4df0-ad31-991d1bb91910                         |
| description    | The description of the goal step.                                                                                                                                                                                     | String     | The goal is to gather metrics for a flight booking use case. |
| order          | The order of the step within the goal configuration.                                                                                                                                                                  | Integer    | null                                                         |
| text           | Additional text information for the goal step                                                                                                                                                                         | String     | null                                                         |
| type           | The type of the goal step: <br>`start` — the initial (first) step of the goal. It shows the beginning of the process.<br>`completion` — the completion (last) step of the goal. It shows that the objectives are met. | String     | start                                                        |
| goalId         | The Goal ID for the goal associated with the step.                                                                                                                                                                    | String     | 66eac7950dc3fdb39c3bcd8b                                     |
| projectId      | The ID of the Project related to the record.                                                                                                                                                                          | String     | 5a91d194fde28b0011ce2422                                     |
| organisationId | The ID of the Cognigy.AI organization associated with the record.                                                                                                                                                     | String     | 5eb4a49d426cd3d05f2892a9                                     |

### GoalStepMetrics

The GoalStepMetrics collection contains records about specific goal-related events from [Goals](goals-and-tasks/overview.md).
Each metric is logged as a single record.

**Request**

=== "OData 2.4"

    `https://odata-trial.cognigy.ai/v2.4/GoalStepMetrics?apikey=<your-api-key>`

| Field Name       | Description                                                                                                                                                         | Field Type | Example                              |
|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|--------------------------------------|
| goalStepMetricId | The Metric ID for the goal step.                                                                                                                                    | String     | 66ebf5a2cabacf6ecb0b5a81             |
| name             | The mame of the metric.                                                                                                                                             | String     | null                                 |
| version          | The UUID for tracking step the version of the specific metric configuration within the goal. Each update or change of the goal configuration creates a new version. | String     | 6cb467d0-9f79-4df0-ad31-991d1bb91910 |
| description      | The description of the metric.                                                                                                                                      | String     | null                                 |
| type             | The category of metrics that can be tracked for goals:<br>- `duration` — time in minutes or hours.<br>- `currency` — currency specified in the Project settings.    | String     | currency                             |
| value            | The value of the metric.                                                                                                                                            | Integer    | 20                                   |
| goalId           | The Goal ID.                                                                                                                                                        | String     | 66ebf5a2cabacf2ac70b5a7e             |
| goalStepId       | The Goal Step ID.                                                                                                                                                   | String     | 66ebf5a2cabacf7c810b5a80             |
| projectId        | The ID of the Project related to the record.                                                                                                                        | String     | 5a91d194fde28b0011ce2422             |
| organisationId   | The ID of the Cognigy.AI organization associated with the record.                                                                                                   | String     | 5eb4a49d426cd3d05f2892a9             |

### GoalEvents

The GoalEvents collection contains records about specific goal-related events from [Goals](goals-and-tasks/overview.md).
Each event is logged as a single record.

**Request**

=== "OData 2.4"

    `https://odata-trial.cognigy.ai/v2.4/GoalEvents?apikey=<your-api-key>`

| Field Name        | Description                                                                                                                                                                                                | Field Type | Example                                                          |
|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------|
| id                | The unique ID of the record. Applicable to the OData endpoint v2.4 or later.                                                                                                                               | String     | 5a91d194fde28b0011ce2423                                         |
| version           | The UUID for tracking the current version of the goal configuration. Each update or change of the goal configuration creates a new version.                                                                | String     | 8ec4de84-71e2-4c98-a7c3-b18173f36223                             |
| timestamp         | The date and time indicating when a specific event related to the goal occurred.                                                                                                                           | Timestamp  | 2024-09-19T10:00:02.322Z                                         |
| goalCycleId       | The ID of the goal cycle to track each iteration of a goal. The cycle groups different goal tracking events into one attempt to complete a goal.                                                           | String     | a0da54a5-ee2e-43be-b743-23d4bccf513c                             |
| stepId            | The ID of the specific goal step.                                                                                                                                                                          | String     | 66ebeca3cabacf41170b4a6d                                         |
| goalId            | The Goal ID.                                                                                                                                                                                               | String     | 66ebeca3cabacf6c820b4a6c                                         |
| sessionId         | The Session ID.                                                                                                                                                                                            | String     | session-2a38246e-0395-49a5-876d-dd5133fd5418                     |
| projectId         | The ID of the Project related to the record.                                                                                                                                                               | String     | 5a91d194fde28b0011ce2422                                         |
| organisationId    | The ID of the Cognigy.AI organization associated with the record.                                                                                                                                          | String     | 5eb4a49d426cd3d05f2892a9                                         |
| expiresAt         | The [expiration date](../administer/access/management-ui.md) for the goal record. After that time, the goal record will be removed from the Analytics database. | Timestamp  | null                                                             |
| localeName        | The name of the locale.                                                                                                                                                                                    | String     | English                                                          |
| endpointName      | The name of the Cognigy.AI Endpoint.                                                                                                                                                                       | String     | LA Chatbot                                                       |
| endpointType      | The type of the Endpoint.                                                                                                                                                                                  | String     | webchat2                                                         |
| endpointUrlToken  | The URL token for the Endpoint.                                                                                                                                                                            | String     | ea30b8f20db52f9d86ea36fd55a7d66bd2c4c60eb24ac7ad52f1c9e173dd4cdb |
| channel           | The channel through which the record was received.                                                                                                                                                         | String     | admin-webchat                                                    |
| localeReferenceId | The ID of the locale.                                                                                                                                                                                      | String     | 7eff993c-b801-4556-b111-1c319e8577cf                             |
| snapshotId        | The ID of the Snapshot.                                                                                                                                                                                    | String     | 63ff0cc47a466cab278fd19b                                         |
| snapshotName      | The name for the Snapshot used by the Endpoint.                                                                                                                                                            | String     | Bot Release 2.2                                                  |

## Cognigy.AI OData Collections: Entity Relationship Diagram (ERD)

The Entity Relationship Diagram (ERD) describes the relationships between the collection entities.

<figure>
    <img class="image-center" src="../../../_assets/ai/analyze/insights-odata-entities.drawio.svg" width="100%" /> 
    <figcaption>
        Entity Relationship Diagram
    </figcaption>
</figure>

## Integrations

The Cognigy.AI OData endpoint can integrate with all tools compatible with OData protocol version 4.
The table outlines popular integration tools, including data visualization tools, recommended for integration.

| Tool                                                                | Description                                                                                                                                                                                                                                                                                                   |
|---------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Microsoft Excel                                                     | Microsoft Excel is a spreadsheet application widely used for data analysis and reporting. When connecting from Microsoft Excel 2016, use the PowerQuery feature, which can be found under `Data > Get & Transform > New Query > From Other Sources > From OData Feed`.                                        |
| Microsoft Power BI                                                  | Microsoft Power BI is a business analytics service that provides interactive visualizations and business intelligence capabilities. For for integrating with the Cognigy.AI OData endpoint, refer to the [Microsoft Power BI](https://docs.microsoft.com/en-us/power-bi/desktop-connect-odata) documentation. |
| OData Consumer Ecosystem                                            | The OData Consumer Ecosystem encompasses a variety of tools and applications that support the consumption of OData services. For a full list of available OData Consumer options, refer to the [OData](https://www.odata.org/ecosystem/#consumers) documentation.                                             |
| Client Libraries in .NET, Java, JavaScript, C++ and other platforms | Client libraries are available in multiple programming languages and platforms, providing developers with OData protocol implementations. For a full list of available libraries, refer to the [OData](https://www.odata.org/libraries/) documentation.                                                       |

If you want to use another tool not listed in the table, verify its compatibility with the OData endpoint on the [OData website](https://www.odata.org/) and in the tool's documentation before integrating. For example, the data visualization tool Tableau cannot be used for integration because it [does not support OData protocol version 4](https://help.tableau.com/current/pro/desktop/en-us/examples_odata.htm) on which the OData endpoint is based.

## More Information

- [Collecting Data](collecting-data.md)
- [Insights](insights.md)