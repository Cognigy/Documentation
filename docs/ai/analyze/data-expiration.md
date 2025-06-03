---
title: "Data Expiration"
slug: "data-expiration"
description: "In Cognigy.AI, data retention for Analytics data is controlled by Time to Live (TTL) settings. TTL defines how long data is stored before automatic deletion. This article outlines the expiration logic and provides examples of how different TTL settings affect data retention."
hidden: false
tags:
  - data expiration
  - data retention
  - ttl
  - time to live
---

# Data Expiration in Cognigy.AI

In Cognigy.AI, data retention for Analytics data is controlled by time-to-live (TTL) settings. TTL defines how long data is stored before automatic deletion. 

This article outlines the data expiration logic and provides examples of how different TTL settings affect data retention.

## Data Expiration Logic

Cognigy.AI uses the smallest positive TTL value from the following sources:

- **Management UI Settings**. The TTL is set at the organization level via the Management UI.
- **Infrastructure Variables**. This TTL is set via a server-side environment variable starting with `INSIGHTS_`, for example, `INSIGHTS_MAX_RAW_ANALYTICS_TTL_IN_MINUTES`.
- **Additional Infrastructure Variables**. This TTL is set via server-side environment variables, such as`MAX_CONVERSATION_TTL_IN_MINUTES`.

If no TTL values are positive or valid, the data doesn't expire.

??? info "Example"
    Configuration:

    - Management UI TTL = 6 months (262,800 minutes)
    - Infrastructure Flag TTL = 1 year (525,600 minutes)

    Result: the data will expire after 6 months.

### TTL for Analytics Data

Analytics data includes information from the Analytics database: Analytics, Sessions, Step Events, Steps, Conversations collections, and Contact Profiles.
The expiration of this data is controlled by environment variables or settings configured in the Management UI.
Each value defines how long a specific type of data is stored.
Once the configured time is reached, the data is automatically deleted.

??? info "List of Environment Variables"

    | Data                     | Environment Variable                        | Description                                                                                                                                                                                                                        | Default Value     |                                                                                                                                                                                                                        
    |--------------------------|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------|
    | Contact Profiles         | `MAX_CONTACT_PROFILE_TTL_IN_MINUTES`        | Maximum time in minutes for Contact Profiles.                                                                                                                                                                                      | `43200` (30 days) |
    | Conversations            | `MAX_CONVERSATION_TTL_IN_MINUTES`           | Maximum time in minutes for conversations. This variable can be overridden by `INSIGHTS_MAX_CONVERSATIONS_TTL_IN_MINUTES`. For more information, read [TTL for Conversations](#ttl-for-conversations).                             | `43200` (30 days) |
    | Raw Analytics            | `INSIGHTS_MAX_RAW_ANALYTICS_TTL_IN_MINUTES` | Time in minutes after which raw analytics in Insights data expires. `0` means no expiration.                                                                                                                                       | `0`               |
    | Conversations (Insights) | `INSIGHTS_MAX_CONVERSATIONS_TTL_IN_MINUTES` | Time in minutes after which conversation data in Insights expires. `0` means no expiration. This variable overrides `MAX_CONVERSATION_TTL_IN_MINUTES`. For more information, read [TTL for Conversations](#ttl-for-conversations). | `0`               |
    | Step Events              | `INSIGHTS_MAX_STEP_EVENTS_TTL_IN_MINUTES`   | Time in minutes after which step event data in Insights expires. `0` means no expiration.                                                                                                                                          | `0`               |
    | Steps                    | `INSIGHTS_MAX_STEPS_TTL_IN_MINUTES`         | Time in minutes after which step data in Insights expires. `0` means no expiration.                                                                                                                                                | `0`               |
    | Sessions                 | `INSIGHTS_MAX_SESSIONS_TTL_IN_MINUTES`      | Time in minutes after which session data in Insights expires. `0` means no expiration.                                                                                                                                             | `0`               |

??? info "Examples"

    | Management UI TTL (minutes) | `INSIGHTS_MAX_RAW_ANALYTICS_TTL_IN_MINUTES` | Analytics Expires After |
    | --------------------------- | ------------------------------------------- | ----------------------- |
    | 525,600 (1 year)            | 262,800 (6 months)                          | 262,800 (6 months)      |
    | 0                           | 525,600 (1 year)                            | 525,600 (1 year)        |
    | 262,800 (6 months)          | 525,600 (1 year)                            | 262,800 (6 months)      |
    | 525,600 (1 year)            | 0                                           | 525,600 (1 year)        |
    | 0                           | 0                                           | Doesn't expire          |

#### TTL for Conversations

Conversation data in Cognigy.AI expires according to the following data expiration logic:

1. The system first checks the environment variable: `INSIGHTS_MAX_CONVERSATIONS_TTL_IN_MINUTES`. If this variable is set and has a positive value, it takes precedence.
2. If the `INSIGHTS_MAX_CONVERSATIONS_TTL_IN_MINUTES` variable isn't set or invalid, it falls back to `MAX_CONVERSATION_TTL_IN_MINUTES`.
3. The TTL set in the Management UI is always included in the final check.
4. The system picks the smallest positive TTL from the three sources to decide when conversation data expires.

??? info "Examples"
    | Management UI TTL (min) | `INSIGHTS_MAX_CONVERSATIONS_TTL_IN_MINUTES` | `MAX_CONVERSATION_TTL_IN_MINUTES` | Conversation Expires After |
    |-------------------------|---------------------------------------------|-----------------------------------|----------------------------|
    | 0                       | 0                                           | 0                                 | Doesn't expire             |
    | 40                      | –                                           | 60                                | 40 minutes                 |
    | 0                       | –                                           | 30                                | 30 minutes                 |
    | 40                      | –                                           | 30                                | 30 minutes                 |
    | 90                      | 60                                          | 120                               | 60 minutes                 |
    | 30                      | 45                                          | 25                                | 25 minutes                 |
    | –                       | 20                                          | 60                                | 20 minutes                 |
    | –                       | –                                           | 10                                | 10 minutes                 |

## More Information

- [Quotas and Limits](../administer/limitations.md)
- [Data Expiration in Insights](../../insights/data-management/ttl.md)