---
title: "OData"
slug: "odata-analytics-endpoint"
description":
hidden: false
---

# Cognigy.AI: OData Analytics Endpoint

Cognigy.AI exposes an OData v4 analytics Endpoint to retrieve analytics records. [OData](https://www.odata.org/), the best way to REST, is a powerful API framework. The OData Endpoint allows you to retrieve all raw data out of Cognigy.AI by using `GET` requests. It covers all your enterprise analytics needs to make fine-grained queries in your spreadsheets or build rich dashboards for your bots with your favorite data visualization tool.

Note that the Cognigy OData Endpoint only supports `GET` requests and does not support any other request types, such as `PATCH`, `DELETE`, or `POST`.

Watch this video to get a quick overview of what OData Analytics Endpoint is, how it works,
and in which scenarios you can use it.

<div style="text-align:center;">
  <iframe width="701" height="438" src="https://www.youtube.com/embed/D18JNjUPvN4?si=UJYuFYZzEovHg83Z&amp;start=1857" title="Cognigy Sessions: Cognigy Insights & OData" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Non-Real-Time Data

The data retrieved through the OData endpoint is not updated in real time and may not reflect current conditions or changes.

## Authentication

You can connect to the OData Endpoint using your [API Key](../administer/user-menu/my-profile.md#api-keys) in the OData URL on your server.

An OData URL consists of the service root, API version, collection, and API key parameter: `https://<odata domain>/<api-version>/<collection>?apikey=YOURAPIKEY`

### OData Domain Name

The OData Endpoint is available on a different domain to your Cognigy User Interface domain. If you log in to Cognigy via [https://trial.cognigy.ai](https://trial.cognigy.ai), your OData domain will be [https://odata-trial.cognigy.ai](https://odata-trial.cognigy.ai).
For example, on our trial server, the OData Endpoint URL for the Analytics Inputs Collection is `https://odata-trial.cognigy.ai/v2.2/Inputs?apikey=your-api-key`
(where `your-api-key` must be replaced with your respective API Key).

For on-premises installations replace the `odata-trial.cognigy.ai` domain name with the domain name
configured for your local installation.

!!! note "Authentication for Microsoft Excel and Power BI"
    When using PowerBI or Excel, you might be asked to authenticate, select `anonymous authentication`.

## Endpoint Version

=== "Version 2.3"

    [![Version badge](https://img.shields.io/badge/Added in-v4.31.0-blue.svg)](../../release-notes/4.31.md)

    The current version of the OData Endpoint is `v2.3`. In this version, the following OData collections are available:

    - [Analytics](#analytics) (`/Analytics`)
    - [Conversations](#conversations) (`/Conversations`)
    - [Steps](#steps) (`/Steps`)
    - [ExecutedSteps](#executedsteps) (`/ExecutedSteps`)
    - [Sessions](#sessions) (`/Sessions`)
    - [LiveAgentEscalations](#liveagentescalations) (`/LiveAgentEscalations`)

    The URL for accessing the V2.3 OData Endpoint is as follows:
    `https://<hostname>/v2.3/<collection>?apikey=YOURAPIKEY`

=== "Version 2.2 and Earlier"
    !!! warning "Deprecation of OData v2.0–2.2"
        OData Endpoint versions 2.0-2.2 were deprecated and removed in Cognigy.AI `v4.48.0`.

    - [Inputs](#analytics) (`/Inputs`) - Renamed to Analytics in V2.3 Endpoint
    - [ChatHistory](#conversations) (`/ChatHistory`) - Renamed to Conversations in V2.3 Endpoint
    - [Steps](#steps) (`/Steps`)
    - [ExecutedSteps](#executedsteps) (`/ExecutedSteps`)
    - [Conversations](#sessions) (`/Conversations`) - Renamed to Sessions in V2.3 Endpoint

    The URL for accessing the V2.X OData Endpoint is as follows:
    `https://<hostname>/v2.X/<collection>?apikey=YOURAPIKEY`

## Querying

The Endpoint supports the following OData Query Language operators:

- `$filter`
- `$skip`
- `$top`
- `$orderby`
- `$select`
- `$count`[^*]

[^*]: Microsoft Excel and Power BI do not support for the `$count` query. Use Postman or other options. To perform this query, consider using tools such as Postman or other applications that support advanced API querying.

## Example Requests

=== "OData 2.3"

    | Request Description                                                                                 | OData 2.3 Request                                                                                                                                          |
    | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Returns total count of Anayltics records (Not Supported in Excel or PowerBI)                        | `https://odata-trial.cognigy.ai/v2.3/Analytics/$count?apikey=YOURAPIKEY`                                                                                   |
    | Returns all Analytics records for the given APIKey                                                  | `https://odata-trial.cognigy.ai/v2.3/Analytics?apikey=YOURAPIKEY`                                                                                          |
    | Returns the first 10 Analytics records                                                              | `https://odata-trial.cognigy.ai/v2.3/Analytics/?$top=10&apikey=YOURAPIKEY`                                                                                 |
    | Returns the top 5 Analytics records where executionTime is less than 50ms, ordered by executionTime | `https://odata-trial.cognigy.ai/v2.3/Analytics/?$filter=executionTime lt 50&$top=5&$orderby=executionTime&apikey=YOURAPIKEY`                               |
    | Returns all Analytics records for a specific Cognigy.AI Agent filtered by ProjectId                 | `https://odata-trial.cognigy.ai/v2.3/Analytics/?$filter=projectId eq 'PROJECTID'&apikey=YOURAPIKEY`                                                        |
    | Returns all Analytics records between two dates, for example, 1st Jan 2021 and 1st July 2021        | `https://odata-trial.cognigy.ai/v2.3/Analytics/?$filter=timestamp gt 2021-01-01T00:00:00.000Z and timestamp lt 2021-07-01T00:00:00.000Z&apikey=YOURAPIKEY` |

=== "OData 2.2 and earlier"

    | Request Description                                                                              | OData 2.2 Request                                                                                                                                       |
    | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | Returns total count of Inputs records (Not Supported in Excel or PowerBI)                        | `https://odata-trial.cognigy.ai/v2.2/Inputs/$count?apikey=YOURAPIKEY`                                                                                   |
    | Returns all Inputs records for the given APIKey                                                  | `https://odata-trial.cognigy.ai/v2.2/Inputs?apikey=YOURAPIKEY`                                                                                          |
    | Returns the first 10 Inputs records                                                              | `https://odata-trial.cognigy.ai/v2.2/Inputs/?$top=10&apikey=YOURAPIKEY`                                                                                 |
    | Returns the top 5 Inputs records where executionTime is less than 50ms, ordered by executionTime | `https://odata-trial.cognigy.ai/v2.2/Inputs/?$filter=executionTime lt 50&$top=5&$orderby=executionTime&apikey=YOURAPIKEY`                               |
    | Returns all Inputs records for a specific Cognigy.AI Agent filtered by ProjectId                 | `https://odata-trial.cognigy.ai/v2.2/Inputs/?$filter=projectId eq 'PROJECTID'&apikey=YOURAPIKEY`                                                        |
    | Returns all Inputs records between two dates, for example, 1st Jan 2021 and 1st July 2021        | `https://odata-trial.cognigy.ai/v2.2/Inputs/?$filter=timestamp gt 2021-01-01T00:00:00.000Z and timestamp lt 2021-07-01T00:00:00.000Z&apikey=YOURAPIKEY` |

For a full reference, refer to the [extensive collection of resources at OData.org](https://www.odata.org/) and the [Oasis OData URL Convention Documentation](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

## Data Protection & Analytics

You control and manage the data available in the OData Endpoint via the agent settings menu. See [Data Protection & Analytics](../deploy/endpoints/data-protection-and-analytics.md) for more details:

- If you disable the **Collect Analytics** setting, no analytics data will be logged or available in OData.
- If you enable the **Mask Sensitive Analytics** setting, the `inputText` and `inputData` fields will be masked.

Furthermore, you can control analytics logging behavior inside a Flow using [Blind Mode](../build/node-reference/analytics/blind-mode.md) nodes that will disable or mask analytics data available in OData according to your node settings.

## Cognigy.AI OData Collections

This section details the data types that exist within the OData Collections that can be retrieved from the OData Endpoint. The following Collections are available:

* [Analytics](#analytics)
* [Conversations](#conversations)
* [Steps](#steps)
* [ExecutedSteps](#executedsteps)
* [Sessions](#sessions)
* [LiveAgentEscalations](#liveagentescalations)

### Fields

Each collection will return and can be filtered by fields. Many of the OData record fields are retrieved directly from the input object results.

See [here](../test/interaction-panel/input.md) for more information about what these variables in the input object are.

### Analytics

**Description**

Each time a contact sends a message to a Cognigy.AI Flow,
Cognigy.AI creates an Analytics record with detailed analytics logs about the interaction.
Each interaction is exposed in the analytics endpoint as a single line item.
Data written to this collection is committed at the end of the flow execution,
therefore, it is possible to overwrite the data
contained within this collection via use of the [Overwrite Analytics Node](../build/node-reference/analytics/overwrite-analytics.md).

**Example Query**

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/Analytics?apikey=YOURAPIKEY`

=== "OData 2.2"

    `https://odata-trial.cognigy.ai/v2.2/Inputs?apikey=YOURAPIKEY`

=== "OData 2.0"

    `https://odata-trial.cognigy.ai/v2.0/Inputs?apikey=YOURAPIKEY`

**Data Types**

When retrieving this collection, the endpoint will return the following fields:

| Field Name         | Description                                                                                | Type     | Example                              |
|--------------------|--------------------------------------------------------------------------------------------|----------|--------------------------------------|
| _id                | Unique analytics record ID                                                                 | String   | 5a91d194fde28b0011ce2423             |
| organisation       | Name of your organization                                                                  | String   | cognigy                              |
| projectId          | Project ID                                                                                 | String   | 5a91d194fde28b0011ce2422             |
| flowReferenceId    | ID of the Flow                                                                             | String   | 66ceb9cc-ac5b-4cdd-9f4b-8a48dfbb35d9 |
| entrypoint         | The ID of the Project / Agent, or of a Snapshot when in use by the Endpoint                | String   | 621d3deb87016d3855ec0c92             |
| ip                 | The IP address the request originated from                                                 | String   | 78.143.45.111                        |
| contactId          | ID of the connecting user                                                                  | String   | myContactID                          |
| sessionId          | Session ID                                                                                 | String   | 5a91d194fde28b0011ce2425             |
| inputId            | Unique input ID                                                                            | String   | 5a91d194fde28b0011ce2424             |
| inputText          | The input text                                                                             | String   | Hello World!                         |
| inputData          | The input data object as a string                                                          | String   | {"key":"value"}                      |
| state              | State of the Flow at input                                                                 | String   | default                              |
| mode               | [Mode](../test/interaction-panel/input.md#properties) of the input                         | String   | TextOnly                             |
| userType           | Type of the connecting user. Either "external" for external user or "admin" for admin user | String   | external                             |
| channel            | Channel the input came through                                                             | String   | facebook                             |
| flowLanguage       | Language of the Flow                                                                       | String   | en-EN                                |
| intent             | Found intent (can be blank)                                                                | String   | orderFood                            |
| intentFlow         | The Parent ID of the Flow in which the intent was found (can be blank)                     | String   | 5e33b160e6236da3aa54221461a53f04     |
| intentScore        | The numerical score of the input against a recognized intent (can be blank)                | Number   | 0.836322430892043                    |
| completedGoalsList | List of completed goals in this session                                                    | String   | orderedFood                          |
| foundSlots         | Found slot tags                                                                            | String   | DATE                                 |
| foundSlotDetails   | Found slot tags with details                                                               | String   | DATE[2018-2-25T12:32:32.000]         |
| understood         | Whether any slots, intents or the message type was found                                   | Boolean  | true                                 |
| timestamp          | DateTime of the input                                                                      | DateTime | 2018-2-25T12:32:32.000Z              |
| executionTime      | Time it took to execute the Flow in ms                                                     | Number   | 32                                   |
| execution          | The execution count                                                                        | Number   | 3                                    |
| custom1            | Custom value created by flow                                                               | String   |                                      |
| custom2            | Custom value created by flow                                                               | String   |                                      |
| custom3            | Custom value created by flow                                                               | String   |                                      |
| custom4            | Custom value created by flow                                                               | String   |                                      |
| custom5            | Custom value created by flow                                                               | String   |                                      |
| custom6            | Custom value created by flow                                                               | String   |                                      |
| custom7            | Custom value created by flow                                                               | String   |                                      |
| custom8            | Custom value created by flow                                                               | String   |                                      |
| custom9            | Custom value created by flow                                                               | String   |                                      |
| custom10           | Custom value created by flow                                                               | String   |                                      |
| localeReferenceId  | Reference Id for locale                                                                    | String   |                                      |
| localeName         | Name of locale                                                                             | String   |                                      |
| endpointUrlToken   | The URL Token for the Endpoint                                                             | String   |                                      |
| endpointName       | The name of the Endpoint                                                                   | String   |                                      |
| rating             | The rating for the session. -1 for a negative rating or 1 for a positive rating            | Number   |                                      |
| ratingComment      | Comment left when given a rating                                                           | String   |                                      |
| snapshotName       | Name for the Snapshot used by the Endpoint                                                 | String   |                                      |

!!! warning "Max length of custom fields"
    You can store maximum 500 characters as the value of each of the custom fields.

!!! note "Why is the Analytics Step label not used?"
    The analytics step label can be updated from the Cognigy user interface at any time.
    Therefore, in order to make all previous data records compatible with future records, the entityReferenceId is used.
    The entityReferenceID is either the Node ID or Intent ID, which has been assigned as an analytics step.
    The current analytics label of the step can be retrieved
    by mapping the entityReferenceID to the [`Steps`](#steps) record.

### Conversations

**Description**

The Conversations collection offers a log of all session messages, including the end user, bot or human agent responses.
Each time one of these sources sends a message to a Cognigy.AI Flow, Cognigy.AI creates a record to log the interaction.
Each interaction is exposed in the analytics endpoint as a single line item.

**Example Query**

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/Conversations?apikey=YOURAPIKEY`

=== "OData 2.2"

    `https://odata-trial.cognigy.ai/v2.2/ChatHistory?apikey=YOURAPIKEY`

=== "OData 2.0"

    `https://odata-trial.cognigy.ai/v2.0/ChatHistory?apikey=YOURAPIKEY`

**Data Types**

When retrieving this collection, the endpoint will return the following fields:

| Field Name             | Description                                           | Type     | Example                                    |
|------------------------|-------------------------------------------------------|----------|--------------------------------------------|
| _id                    | Unique analytics record ID                            | String   | 5a91d194fde28b0011ce2423                   |
| projectId              | Project ID                                            | String   | 5a91d194fde28b0011ce2422                   |
| projectName            | Name of the Cognigy.AI project                        | String   | Project 1                                  |
| inputId                | Unique input ID                                       | String   | 5a91d194fde28b0011ce2424                   |
| sessionId              | Session ID                                            | String   | 5a91d194fde28b0011ce2425                   |
| contactId              | ID of the connecting user                             | String   | myContactID                                |
| organisation           | Name of your organization                             | String   | cognigy                                    |
| inputText              | The input text                                        | String   | Hello World!                               |
| inputData              | The input data object as a string                     | String   | {"key":"value"}                            |
| type                   | Whether the message is an input or output of the Flow | String   | "input" or "output"                        |
| source                 | The source of the message                             | String   | "user" or "bot" or "agent" or "suggestion" |
| timestamp              | DateTime of the input                                 | DateTime | 2018-2-25T12:32:32.000Z                    |
| flowName               | Name of the Flow                                      | String   | MainFlow                                   |
| flowParentId           | ParentId of the Flow                                  | String   | 5e33b160e6236da3aa54221461a53f04           |
| channel                | Channel the input came through                        | String   | facebook                                   |
| inHandoverRequest      | Flag whether the session is in a Handover request     | Boolean  | false                                      |
| inHandoverConversation | Flag whether the session is in a Handover session     | Boolean  | true                                       |
| outputId               | Output ID                                             | String   | f514b7b2-7dc0-4e75-be62-a53fed5b2bb7       |

### Steps

**Description**

The Steps collection offers a list of all entities (an entity is a Node or an Intent)
that have been assigned as an analytics step and that exist in any flow that the API key has access to.
Analytics Steps are created in Cognigy.AI by adding a value to the "Analytics Step" field in the settings for an entity.
For a Step to exist in this OData collection, it must also have been triggered by at least one session with the flow.
Each step that can exist in ExecutedSteps, is exposed in this analytics endpoint as a single line item.

**Example Query**

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/Steps?apikey=YOURAPIKEY`

=== "OData 2.2"

    `https://odata-trial.cognigy.ai/v2.2/Steps?apikey=YOURAPIKEY`

=== "OData 2.0"

    `https://odata-trial.cognigy.ai/v2.0/Steps?apikey=YOURAPIKEY`

**Data Types**

When retrieving this collection, the endpoint will return the following fields:

| Field Name        | Description                                                                | Type   | Example                          |
|-------------------|----------------------------------------------------------------------------|--------|----------------------------------|
| _id               | Unique analytics record ID                                                 | String | 5a91d194fde28b0011ce2423         |
| label             | Analytics step label defined for the entity (node or intent) in Cognigy.AI | String | Question (2)                     |
| type              | Type of entity                                                             | String | `node` or `intent`               |
| entityReferenceId | Unique ID for the entity (node ID or flow ID)                              | String | 5a91d194fde28b0011ce2423         |
| flowReferenceId   | ID of the flow                                                             | String | 5a91d194fde28b0011ce2423         |
| flowName          | Name of the Flow where the step exists                                     | String | Main Flow                        |
| projectName       | Name of the Cognigy.AI project                                             | String | Project 1                        |
| snapshotId        | ID of the snapshot                                                         | String | 5e33b160e6236da3aa54221461a53f04 |
| snapshotName      | Name of the snapshot                                                       | String | Bot Release 2.2                  |

!!! note "Building Visualizations with Steps Records"
    The following support article explains how these records can be manipulated in BI software to build insightful session path analytics: [Step Monitoring with OData](https://support.cognigy.com/hc/en-us/articles/360021089180-Step-Monitoring-with-OData).

### ExecutedSteps

**Description**

The ExecutedSteps collection contains a list of all step events that have occurred in sessions. It also includes a reference to the step that occurred prior (parent step). Each time an entity (flow node or intent with an assigned step) is executed, a record is created in this collection. Each executed step is exposed in this analytics endpoint as single line item.

**Example Query**

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/ExecutedSteps?apikey=YOURAPIKEY`

=== "OData 2.2"

    `https://odata-trial.cognigy.ai/v2.2/ExecutedSteps?apikey=YOURAPIKEY`
=== "OData 2.0"

    `https://odata-trial.cognigy.ai/v2.0/ExecutedSteps?apikey=YOURAPIKEY`

**Data Types**

When retrieving this collection, the endpoint will return the following fields:

| Field Name        | Description                                                                | Type     | Example                          |
|-------------------|----------------------------------------------------------------------------|----------|----------------------------------|
| _id               | Unique analytics record ID                                                 | String   | 5a91d194fde28b0011ce2423         |
| userId            | ID of the connecting user                                                  | String   | myContactID                      |
| sessionId         | Session ID                                                                 | String   | 5a91d194fde28b0011ce2425         |
| inputId           | ID of the message                                                          | String   | 5a91d194fde28b0011ce2425         |
| stepLabel         | Analytics step label defined for the entity (node or intent) in Cognigy.AI | String   | Question (2)                     |
| parentStep        | ID of the step that occurred prior to this step                            | String   | 5a91d194fde28b0011ce2425         |
| type              | Type of entity                                                             | String   | `node` or `intent`               |
| entityReferenceId | Unique ID for the entity (node ID or intent ID)                            | String   | 5a91d194fde28b0011ce2423         |
| flowReferenceId   | ID of the flow                                                             | String   | 5a91d194fde28b0011ce2423         |
| flowName          | Name of the Flow where the step exists                                     | String   | Main Flow                        |
| timestamp         | Timestamp when the step was executed                                       | DateTime | 2018-2-25T12:32:32.000Z          |
| projectName       | Name of the Cognigy.AI project                                             | String   | Project 1                        |
| projectId         | ID of the project                                                          | String   | 6067352c18887e471da4e392         |
| organisationId    | Cognigy.AI Organisation ID                                                 | String   | 5f8833dae72b850ad2ed4d53         |
| snapshotId        | ID of the snapshot                                                         | String   | 5e33b160e6236da3aa54221461a53f04 |
| snapshotName      | Name of the snapshot                                                       | String   | Bot Release 2.2                  |

### Sessions

[![Version badge](https://img.shields.io/badge/Added in-v4.41-blue.svg)](../../release-notes/4.41.md)

**Description**

The Sessions collection contains a list of all sessions that have occurred.
The primary objective of this collection is
to provide a list of the analytics steps that took place in any given session and the order in which they took place.
This information is included as a comma-separated list within a single column called `stepPath`.
Each session is exposed in this analytics endpoint as a single line item.

**Example Query**

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/Sessions?apikey=YOURAPIKEY`

=== "OData 2.2"

    `https://odata-trial.cognigy.ai/v2.2/Conversations?apikey=YOURAPIKEY`

=== "OData 2.0"

    `https://odata-trial.cognigy.ai/v2.0/Conversations?apikey=YOURAPIKEY`

**Data Types**

When retrieving this collection, the endpoint will return the following fields:

| Field Name          | Description                                      | Type     | Example                                                                        |
|---------------------|--------------------------------------------------|----------|--------------------------------------------------------------------------------|
| _id                 | Unique analytics record ID                       | String   | 5a91d194fde28b0011ce2423                                                       |
| goals               | All goals that were achieved in the session      | String   | Goal1, Goal2                                                                   |
| stepPath            | Comma separated list of steps executed           | String   | 9ac4f679-beae-4461-b9e3-43aece8b3430,f1e72fe3-f04b-48f5-b862-1e35ad253f18, ... |
| stepsCount          | Count of the number of steps                     | Number   | 10                                                                             |
| handoverEscalations | Number of times the session triggered a handover | Number   | 3                                                                              |
| startedAt           | Timestamp when first message was received        | DateTime | 2018-2-25T12:32:32.000Z                                                        |
| userId              | ID of the connecting user                        | String   | myContactID                                                                    |
| sessionId           | Session ID                                       | String   | 5a91d194fde28b0011ce2425                                                       |
| localeReferenceId   | Id of the locale                                 | String   | en-EN                                                                          |
| localeName          | Name of the locale                               | String   | English                                                                        |
| endpointReferenceId | ID of the endpoint                               | String   | 5e33b160e6236da3aa54221461a53f04                                               |
| endpointName        | Endpoint name                                    | String   | Webchat                                                                        |
| projectName         | Name of the Cognigy.AI project                   | String   | Project 1                                                                      |
| projectId           | ID of the project                                | String   | 6067352c18887e471da4e392                                                       |
| organisationId      | Cognigy.AI Organisation ID                       | String   | 5f8833dae72b850ad2ed4d53                                                       |
| snapshotId          | ID of the snapshot                               | String   | 5e33b160e6236da3aa54221461a53f04                                               |
| snapshotName        | Name of the snapshot                             | String   | Bot Release 2.2                                                                |

### LiveAgentEscalations

[![Version badge](https://img.shields.io/badge/Added in-v4.49-blue.svg)](../../release-notes/4.49.md)

**Description**

The LiveAgentEscalations collection contains records from Live Agent escalations and includes the related data about handovers to Live Agent.

**Example Query**

=== "OData 2.3"

    `https://odata-trial.cognigy.ai/v2.3/LiveAgentEscalations?apikey=YOURAPIKEY`

**Data Types**

When retrieving this collection, the endpoint will return the following fields:

| Field Name        | Description                                                                  | Type     | Example                                                          |
|-------------------|------------------------------------------------------------------------------|----------|------------------------------------------------------------------|
| _id               | Unique identifier for the record                                             | String   | 649be849b7fd71d48b9bacc8                                         |
| organisationId    | Identifier of the organization associated with the record                    | String   | 5eb4a49d426cd3d05f2892a9                                         |
| projectId         | Identifier of the project related to the record                              | String   | 6409b6c53c9687b5e78e6403                                         |
| sessionId         | Identifier of the session                                                    | String   | session-2a38246e-0395-49a5-876d-dd5133fd5418                     |
| timestamp         | Date and time when the record was created                                    | DateTime | 2023-06-28T07:59:04.628Z                                         |
| localeName        | Name of the locale                                                           | String   | en                                                               |
| status            | Current status of the record                                                 | String   | opened                                                           |
| inboxId           | Identifier of the inbox associated with the record                           | String   | 7983                                                             |
| inboxName         | Name of the inbox                                                            | String   | LA Chatbot-default                                               |
| teamId            | Identifier of the team                                                       | String   | 8                                                                |
| teamName          | Name of the team                                                             | String   | IT Support                                                       |
| labels            | List of labels associated with the record                                    | Array    | [Hardware]                                                       |
| agentId           | Identifier of the agent                                                      | String   | 618cf7687614774ba028dcac                                         |
| agentName         | Human agent's name. This field is not supported; the value is always `null`. | String   | -                                                                |
| contactId         | Identifier of the contact                                                    | String   | 649ba8450d5df5cadf8b75b8                                         |
| endpointName      | Name of the endpoint                                                         | String   | LA Chatbot                                                       |
| endpointType      | Type of the endpoint                                                         | String   | webchat2                                                         |
| endpointUrlToken  | Token or identifier associated with the endpoint                             | String   | ea30b8f20db52f9d86ea36fd55a7d66bd2c4c60eb24ac7ad52f1c9e173dd4cdb |
| channel           | Channel through which the record was received                                | String   | admin-webchat                                                    |
| localeReferenceId | Identifier for the specific locale reference                                 | String   | 7eff993c-b801-4556-b111-1c319e8577cf                             |
| snapshotId        | Identifier of the snapshot                                                   | String   | 63ff0cc47a466cab278fd19b                                         |
| endpsnapshotName  | Name of the snapshot                                                         | String   | Prod-Snapshot 26.7.23                                            |

### Entity Relationship Diagram (ERD) for Collections

This scheme describes the relationships between the collection entities.

<figure>
    <img class="image-center" src="../../../_assets/ai/analyze/insights-odata-entities.drawio.svg" width="100%" /> 
    <figcaption>
        Entity Relationship Diagram
    </figcaption>
</figure>

## Integration with Data Visualisation Tools

The table outlines visualization tools that are compatible with the OData Endpoint,
along with recommendations and limitations for integration.

| Visualization Tool                                                  | Description                                                                                                                                     | Limitation                                                                                                                                                                   |
|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Microsoft Excel                                                     |                                                                                                                                                 | When connecting from Microsoft Excel 2016, use the PowerQuery feature, which can be found under `Data > Get & Transform > New Query > From Other Sources > From OData Feed`. |
| Microsoft Power BI                                                  |                                                                                                                                                 | Follow the [instructions in the Power BI documentation](https://docs.microsoft.com/en-us/power-bi/desktop-connect-odata).                                                    |
| Tableau                                                             | The instructions on how to connect an OData Feed in Tableau [here](https://help.tableau.com/current/pro/desktop/en-gb/examples_odata.htm).      | Cognigy.AI supports OData version 4.0, which means that certain versions of Tableau are not compatible.                                                                      |
| OData Consumer Ecosystem                                            | For a full list of available OData Consumer options, [follow the link to Consumers on OData.org](https://www.odata.org/ecosystem/#consumers).   |
| Client Libraries in .NET, Java, JavaScript, C++ and other platforms | For a full list of available OData Libraries, [see the latest directory of available libraries on OData.org](https://www.odata.org/libraries/). |