---
 title: "OData Analytics Endpoint" 
 slug: "odata-analytics-endpoint" 
 hidden: false 
---
# OData Analytics Endpoint

Cognigy.AI exposes an OData v4 analytics endpoint to retrieve analytics records. [OData](https://www.odata.org/), the best way to REST, is a powerful API framework. The OData Endpoint allows you to retrieve all raw data out of Cognigy.AI. It covers all your enterprise analytics needs to make fine-grained queries in your spreadsheets or build rich dashboards for your bots with your favorite data visualization tool.

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019467199-Cognigy-Sessions-Analytics-OData" target="_blank" >Technical video "Analytics &amp; OData"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>

## Usage and Authentication

<div class="divider"></div>

You can connect to the OData endpoint using your [API Key]({{config.site_url}}ai/tools/user-menu/my-profile/#api-keys/) in the OData URL on your server.

An OData URL is combined of the service root, api version, the collection and api key parameter as follows:

`https://<odata domain>/<api-version>/<collection>?apikey=YOURAPIKEY`

???+ info "OData Domain Name"
    The OData endpoint is available on a different domain to your Cognigy User Interface domain. If you login to Cognigy via [https://trial.cognigy.ai](https://trial.cognigy.ai), your OData domain will be [https://odata-trial.cognigy.ai](https://odata-trial.cognigy.ai).


For example, on our trial server, the OData endpoint URL for the Analytics Inputs Collection is `https://odata-trial.cognigy.ai/v2.2/Inputs?apikey=YOURAPIKEY` (where YOURAPIKEY must be replaced with your respective API Key). For On-Prem installations please replace the `odata-trial.cognigy.ai` domain name with the domain name configured for your local installation.

???+ info "Excel/Power BI"
    When using PowerBI or Excel, you might be asked to authenticate. Simply choose `anonymous authentication`.

## Endpoint Version

<div class="divider"></div>

### Version 2.3

[![Version badge](https://img.shields.io/badge/Added in-v4.31.0-blue.svg)]({{config.site_url}})

The current version of the OData endpoint is `v2.3`. In this version, the following OData collections are available:

- [Analytics](#inputs) (`/Analytics`)
- [Conversations](#chathistory) (`/Conversations`)
- [Steps](#steps) (`/Steps`)
- [ExecutedSteps](#executedsteps) (`/ExecutedSteps`)
- [Sessions](#sessions) (`/Sessions`)

The URL for accessing the V2.3 OData endpoint is as follows:
`https://<hostname>/v2.3/<collection>?apikey=YOURAPIKEY`

### Version 2.2
???+ warning "Deprecation of OData v2.2"
    Starting with Cognigy.AI `v4.42.0`, we deprecate the OData endpoint v2.2. This OData endpoint version will be
    removed in Cognigy.AI `v4.43.0`.

[![Version badge](https://img.shields.io/badge/Added in-v4.17.0-blue.svg)]({{config.site_url}})

- [Inputs](#inputs) (`/Inputs`) - Renamed to Analytics in V2.3 Endpoint
- [ChatHistory](#chathistory) (`/ChatHistory`) - Renamed to Conversations in V2.3 Endpoint
- [Steps](#steps) (`/Steps`)
- [ExecutedSteps](#executedsteps) (`/ExecutedSteps`)
- [Conversations](#conversations) (`/Conversations`) - Renamed to Sessions in V2.3 Endpoint

The URL for accessing the V2.2 OData endpoint is as follows:
`https://<hostname>/v2.2/<collection>?apikey=YOURAPIKEY`


### Version 2.0
???+ warning "Deprecation of OData v2.0"
    Starting with Cognigy.AI `v4.42.0`, we deprecate the OData endpoint v2.0. This OData endpoint version will be
    removed in Cognigy.AI `v4.43.0`.

[![Version badge](https://img.shields.io/badge/Added in-v4.2.0-blue.svg)]({{config.site_url}})

- [Inputs](#inputs) (`/Inputs`)
- [ChatHistory](#chathistory) (`/ChatHistory`)
- [Steps](#steps) (`/Steps`)
- [ExecutedSteps](#executedsteps) (`/ExecutedSteps`)
- [Conversations](#conversations) (`/Conversations`)

The URL for accessing the V2.0 OData endpoint is as follows:
`https://<hostname>/v2.0/<collection>?apikey=YOURAPIKEY`

## Querying

<div class="divider"></div>

The endpoint supports following the OData Query Language operators:

- $filter
- $skip
- $top
- $orderby
- $count
- $select

???+ warning "$count and Excel"
    Microsoft Excel does not support for the $count query. Please use Postman or other options.

## Example Requests

Returns total count of User Input Records.

`https://odata-trial.cognigy.ai/v2.2/Inputs/$count?apikey=YOURAPIKEY`

Returns all Records for the given APIKey.

`https://odata-trial.cognigy.ai/v2.2/Inputs?apikey=YOURAPIKEY`

Returns the first 10 records.

`https://odata-trial.cognigy.ai/v2.2/Inputs/?$top=10&apikey=YOURAPIKEY`

Returns the top 5 records where the executionTime is lower than 50ms, ordered by executionTime.

`https://odata-trial.cognigy.ai/v2.2/Inputs/?$filter=executionTime lt 50&$top=5&$orderby=executionTime&apikey=YOURAPIKEY`

Returns all records for a specific Cognigy.AI agent. The Project ID is available in the URL while the agent is open in the Cognigy.AI user interface, for example,`trial.cognigy.ai/agent/PROJECTID/`.

`https://odata-trial.cognigy.ai/v2.2/Inputs/?$filter=projectId eq 'PROJECTID'&apikey=YOURAPIKEY`

Returns all records between two dates, for example, 1st Jan 2021 and 1st July 2021.

`https://odata-trial.cognigy.ai/v2.2/Inputs/?$filter=timestamp gt 2021-01-01T00:00:00.000Z and timestamp lt 2021-07-01T00:00:00.000Z&apikey=YOURAPIKEY`


## Reference documentation

For a full reference please refer to the [extensive collection of resources at OData.org](https://www.odata.org/) and the [Oasis OData URL Convention Documentation](http://docs.oasis-open.org/odata/odata/v4.0/odata-v4.0-part2-url-conventions.html).

## Data Protection & Analytics

<div class="divider"></div>

You control and manage the data available in the OData Endpoint via the agent settings menu. See [Data Protection & Analytics]({{config.site_url}}ai/endpoints/data-protection-and-analytics/) for more details:

- If you disable *Collect Analytics* no analytics data will be logged or available in OData.

- If you enable *Mask Sensitive Analytics* the *inputText* and *inputData* fields will be masked.

Furthermore, you can control analytics logging behavior inside a Flow using [Blind Mode]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#blind-mode) nodes that will disable or mask analytics data available in OData according to your node settings.

## Cognigy.AI OData Collections

<div class="divider"></div>

This section details the data types the exist within the OData Collections that can be retrieved from the OData Endpoint. The following Collections are available:

  * [Inputs](#inputs)
  * [ChatHistory](#chathistory)
  * [Steps](#steps)
  * [ExecutedSteps](#executedsteps)
  * [Sessions](#sessions)

### Inputs

**Description**

Each time a contact sends a message to a Cognigy.AI Flow, Cognigy.AI creates an Input record with detailed analytics logs about the interaction. Each interaction is exposed in the analytics endpoint as single line item. Data written to this collection is committed at the end of the flow execution, therefore it is possible to overwrite the data contained within this collection via use of the [Overwrite Analytics Node]({{config.site_url}}ai/flow-nodes/other-nodes/overwrite-analytics/).

**Example Query**

 * v2.3 Endpoint: `https://odata-trial.cognigy.ai/v2.3/Analytics?apikey=YOURAPIKEY`.
 * v2.2 Endpoint: `https://odata-trial.cognigy.ai/v2.2/Inputs?apikey=YOURAPIKEY`.
 * v2.0 Endpoint: `https://odata-trial.cognigy.ai/v2.0/Inputs?apikey=YOURAPIKEY`.

**Data Types**

When retrieving this collection, the endpoint will return the following fields:

| Field Name         | Description                                                                                | Type     | Example                          |
| ------------------ | ------------------------------------------------------------------------------------------ | -------- | -------------------------------- |
| _id                | Unique analytics record ID                                                                 | String   | 5a91d194fde28b0011ce2423         |
| organisation       | Name of your organisation                                                                  | String   | cognigy                          |
| projectId          | Project ID                                                                                 | String   | 5a91d194fde28b0011ce2422         |
| flowReferenceId    | ID of the Flow                                                                             | String   | 66ceb9cc-ac5b-4cdd-9f4b-8a48dfbb35d9 |
| entrypoint         | The ID of the Project / Agent, or of a Snapshot when in use by the Endpoint                | String   | 621d3deb87016d3855ec0c92         |
| ip                 | The IP address the request originated from                                                 | String   | 78.143.45.111                    |
| contactId          | ID of the connecting user                                                                  | String   | myContactID                      |
| sessionId          | Session ID                                                                                 | String   | 5a91d194fde28b0011ce2425         |
| inputId            | Unique input ID                                                                            | String   | 5a91d194fde28b0011ce2424         |
| inputText          | The input text                                                                             | String   | Hello World!                     |
| inputData          | The input data object as a string                                                          | String   | {"key":"value"}                  |
| state              | State of the Flow at input                                                                 | String   | default                          |
| mode               | [Mode]({config.site_url}}ai/tools/interaction-panel/input#Properties/) of the input        | String   | TextOnly                         |
| userType           | Type of the connecting user. Either "external" for external user or "admin" for admin user | String   | external                         |
| channel            | Channel the input came through                                                             | String   | facebook                         |
| flowLanguage       | Language of the Flow                                                                       | String   | en-EN                            |
| intent             | Found intent (can be blank)                                                                | String   | orderFood                        |
| intentFlow         | The Parent ID of the Flow in which the intent was found (can be blank)                     | String   | 5e33b160e6236da3aa54221461a53f04 |
| intentScore        | The numerical score of the input against a recognized intent (can be blank)                | Number   | 0.836322430892043                |
| completedGoalsList | List of completed goals in this session                                                    | String   | orderedFood                      |
| foundSlots         | Found slot tags                                                                            | String   | DATE                             |
| foundSlotDetails   | Found slot tags with details                                                               | String   | DATE[2018-2-25T12:32:32.000]     |
| understood         | Whether any slots, intents or the message type was found                                   | Boolean  | true                             |
| timestamp          | DateTime of the input                                                                      | DateTime | 2018-2-25T12:32:32.000Z          |
| executionTime      | Time it took to execute the Flow in ms                                                     | Number   | 32                               |
| execution          | The execution count                                                                        | Number   | 3                                |
| custom1            | Custom value created by flow                                                               | String   |                                  |
| custom2            | Custom value created by flow                                                               | String   |                                  |
| custom3            | Custom value created by flow                                                               | String   |                                  |
| custom4            | Custom value created by flow                                                               | String   |                                  |
| custom5            | Custom value created by flow                                                               | String   |                                  |
| custom6            | Custom value created by flow                                                               | String   |                                  |
| custom7            | Custom value created by flow                                                               | String   |                                  |
| custom8            | Custom value created by flow                                                               | String   |                                  |
| custom9            | Custom value created by flow                                                               | String   |                                  |
| custom10           | Custom value created by flow                                                               | String   |                                  |
| localeReferenceId  | Reference Id for locale                                                                    | String   |                                  |
| localeName         | Name of locale                                                                             | String   |                                  |
| endpointUrlToken   | The URL Token for the Endpoint                                                             | String   |                                  |
| endpointName       | The name of the Endpoint                                                                   | String   |                                  |
| rating             | The rating for the session. -1 for a negative rating or 1 for a positive rating       | Number   |                                  |
| ratingComment      | Comment left when given a rating                                                           | String   |                                  |
| snapshotName       | Name for the Snapshot used by the Endpoint                                                 | String   |                                  |

???+ info "Field Explanation"
    Many of the OData Records fields are retrieved directly from the input object results. See [here]({{config.site_url}}ai/tools/interaction-panel/input/) for more information about what these variables are.

???+ warning "Max length of custom fields"
    You can store maximum 500 characters as the value of each of the custom fields

### ChatHistory

**Description**

The ChatHistory collection offers a log of all session messages, including the end user, bot or human agent responses. Each time one of these sources sends a message to a Cognigy.AI Flow, Cognigy.AI creates a record to log the interaction. Each interaction is exposed in the analytics endpoint as single line item.

**Example Query**

 * V2.3 Endpoint: `https://odata-trial.cognigy.ai/v2.3/Conversations?apikey=YOURAPIKEY`.
 * V2.2 Endpoint: `https://odata-trial.cognigy.ai/v2.2/ChatHistory?apikey=YOURAPIKEY`.
 * V2.0 Endpoint: `https://odata-trial.cognigy.ai/v2.0/ChatHistory?apikey=YOURAPIKEY`.

**Data Types**

When retrieving this collection, the endpoint will return the following fields:

| Field Name             | Description                                                 | Type     | Example                                    |
| ---------------------- | ----------------------------------------------------------- | -------- | ------------------------------------------ |
| _id                    | Unique analytics record ID                                  | String   | 5a91d194fde28b0011ce2423                   |
| inputId                | Unique input ID                                             | String   | 5a91d194fde28b0011ce2424                   |
| sessionId              | Session ID                                                  | String   | 5a91d194fde28b0011ce2425                   |
| contactId              | ID of the connecting user                                   | String   | myContactID                                |
| organisation           | Name of your organisation                                   | String   | cognigy                                    |
| inputText              | The input text                                              | String   | Hello World!                               |
| inputData              | The input data object as a string                           | String   | {"key":"value"}                            |
| type                   | Whether the message is an input or output of the Flow       | String   | "input" or "output"                        |
| source                 | The source of the message                                   | String   | "user" or "bot" or "agent" or "suggestion" |
| timestamp              | DateTime of the input                                       | DateTime | 2018-2-25T12:32:32.000Z                    |
| flowName               | Name of the Flow                                            | String   | MainFlow                                   |
| flowParentId           | ParentId of the Flow                                        | String   | 5e33b160e6236da3aa54221461a53f04           |
| channel                | Channel the input came through                              | String   | facebook                                   |
| inHandoverRequest      | Flag whether the session is in a Handover request      | Boolean  | false                                      |
| inHandoverConversation | Flag whether the session is in a Handover session | Boolean  | true                                       |
| outputId               | Output ID                                                   | String   | f514b7b2-7dc0-4e75-be62-a53fed5b2bb7       |

### Steps

???+ info "Available from Cognigy.AI Version 4.2.0"

**Description**

The Steps collection offers a list of all entities (an entity is a flow node or an intent) that have been assigned as an analytics step and that exist in any flow that the API key has access to. Analytics Steps are created in Cognigy.AI by adding a value to the "Analytics Step" field in the settings for an entity. For a Step to exist in this OData collection, it must also have been triggered by at least one session with the flow. Each step that can exist in ExecutedSteps, is exposed in this analytics endpoint as single line item.

**Example Query**

 * V2.3 Endpoint: `https://odata-trial.cognigy.ai/v2.3/Steps?apikey=YOURAPIKEY`.
 * V2.2 Endpoint: `https://odata-trial.cognigy.ai/v2.2/Steps?apikey=YOURAPIKEY`.
 * V2.0 Endpoint: `https://odata-trial.cognigy.ai/v2.0/Steps?apikey=YOURAPIKEY`.

**Data Types**

When retrieving this collection, the endpoint will return the following fields:

| Field Name        | Description                                                                | Type   | Example                          |
| ----------------- | -------------------------------------------------------------------------- | ------ | -------------------------------- |
| _id               | Unique analytics record ID                                                 | String | 5a91d194fde28b0011ce2423         |
| label             | Analytics step label defined for the entity (node or intent) in Cognigy.AI | String | Question (2)                     |
| type              | Type of entity                                                             | String | `node` or `intent`               |
| entityReferenceId | Unique ID for the entity (node ID or flow ID)                              | String | 5a91d194fde28b0011ce2423         |
| flowReferenceId   | ID of the flow                                                             | String | 5a91d194fde28b0011ce2423         |
| flowName          | Name of the Flow where the step exists                                     | String | Main Flow                        |
| projectName       | Name of the Cognigy.AI project                                             | String | Project 1                        |
| snapshotId        | ID of the snapshot                                                         | String | 5e33b160e6236da3aa54221461a53f04 |
| snapshotName      | Name of the snapshot                                                       | String | Bot Release 2.2                  |

### ExecutedSteps

???+ info "Available from Cognigy.AI Version 4.2.0"
    

**Description**

The ExecutedSteps collection contains a list of all step events that have occurred in sessions. It also includes a reference to the step that occurred prior (parent step). Each time an entity (flow node or intent with an assigned step) is executed, a record is created in this collection. Each executed step is exposed in this analytics endpoint as single line item.

**Example Query**

 * V2.3 Endpoint: `https://odata-trial.cognigy.ai/v2.3/ExecutedSteps?apikey=YOURAPIKEY`.
 * V2.2 Endpoint: `https://odata-trial.cognigy.ai/v2.2/ExecutedSteps?apikey=YOURAPIKEY`.
 * V2.0 Endpoint: `https://odata-trial.cognigy.ai/v2.0/ExecutedSteps?apikey=YOURAPIKEY`.

**Data Types**

When retrieving this collection, the endpoint will return the following fields:

| Field Name        | Description                                                                | Type     | Example                          |
| ----------------- | -------------------------------------------------------------------------- | -------- | -------------------------------- |
| _id               | Unique analytics record ID                                                 | String   | 5a91d194fde28b0011ce2423         |
| userId            | ID of the connecting user                                                  | String   | myContactID                      |
| sessionId         | Session ID                                                                 | String   | 5a91d194fde28b0011ce2425         |
| inputId           | ID of the message                                                          | String   | 5a91d194fde28b0011ce2425         |
| stepLabel         | Analytics step label defined for the entity (node or intent) in Cognigy.AI | String   | Question (2)                     |
| parentStep        | ID of the step that occured prior to this step                             | String   | 5a91d194fde28b0011ce2425         |
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

???+ info "Available from Cognigy.AI Version 4.41.0"

**Description**

The Sessions collection contains a list of all sessions that have occurred. The primary objective of this collection is to provide a list of the analytics steps that took place in any given session and the order in which they took place. This information is included as a comma separated list within a single column called `stepPath`. Each session is exposed in this analytics endpoint as single line item.


**Example Query**

 * V2.3 Endpoint: `https://odata-trial.cognigy.ai/v2.3/Sessions?apikey=YOURAPIKEY`.
 * V2.2 Endpoint: `https://odata-trial.cognigy.ai/v2.2/Conversations?apikey=YOURAPIKEY`.
 * V2.0 Endpoint: `https://odata-trial.cognigy.ai/v2.0/Conversations?apikey=YOURAPIKEY`.

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

???+ info "Building Visualizations with Steps Records"
    The following support article explains how these records can be manipulated in BI software to build insightful session path analytics: [Step Monitoring with OData](https://support.cognigy.com/hc/en-us/articles/360021089180-Step-Monitoring-with-OData)

???+ info "Why is the Analytics Step label not used?"
    The analytics step label can be updated from the Cognigy user interface at any time. Therefore, in order to make all previous data records compatible with future records, the entityReferenceId is used. The entityReferenceID is either the Node ID or Intent ID which has been assigned as an analytics step. The current analytics label of the step can be retrieved by mapping the entityReferenceID to the `/Steps` record.

## Integrations

<div class="divider"></div>

### Excel

When connecting from Microsoft Excel 2016, you must use the PowerQuery feature, which can be found under `Data > Get & Transform > New Query > From Other Sources > From OData Feed`. This will connect to our OData v4 feed.

### PowerBI

Follow the [instructions in the Power BI documentation](https://docs.microsoft.com/en-us/power-bi/desktop-connect-odata).

### Tableau

???+ danger "Incompatible OData Version"
    At the moment, Cognigy.AI supports OData version 4.0, which means that certain versions of Tableau are not compatible.

The instructions on how to connect an OData Feed in Tableau [here](https://help.tableau.com/current/pro/desktop/en-gb/examples_odata.htm).

### OData Consumer Ecosystem

For a full list of available OData Consumer options [follow the link to Consumers on OData.org](https://www.odata.org/ecosystem/#consumers).

### Client Libraries in .NET, Java, JavaScript, C++ and other platforms

For a full list of available OData Libraries [see the latest directory of available libraries on OData.org](https://www.odata.org/libraries/)