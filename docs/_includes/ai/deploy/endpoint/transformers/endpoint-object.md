### Endpoint Configuration Object

??? info "`endpoint` Object Properties"

    | Property              | Type      | Description                                                                                       |
    |-----------------------|-----------|---------------------------------------------------------------------------------------------------|
    | `_id`                 | `string`  | The Endpoint's Reference ID.                                                                      |
    | `channel`             | `string`  | The Endpoint's [channel](../../../build/nodes/channels.md).                                       |
    | `URLToken`            | `string`  | The URL Token, found in the [Input object](../inject-and-notify.md#how-to-use-inject-and-notify). |
    | `name`                | `string`  | The Endpoint's name.                                                                              |
    | `flowId`              | `string`  | The Reference ID of the specified Flow to which the Endpoint points to.                           |
    | `entrypoint`          | `string`  | The Entrypoint of the Endpoint.                                                                   |
    | `active`              | `boolean` | The flag to activate or deactivate the Endpoint.                                                  |
    | `nluConnectorId`      | `string`  | ID of the selected NLU connector for the Endpoint.                                                |
    | `useAnalytics`        | `boolean` | The flag to collect analytics data for the Endpoint.                                              |
    | `storeDataPayload`    | `boolean` | The flag to store data payloads into analytics for the Endpoint.                                  |
    | `useConversations`    | `boolean` | The flag to collect conversations history for the Endpoint.                                       |
    | `maskIPAddress`       | `boolean` | The flag to mask sensitive IP addresses in input object and analytics data.                       |
    | `maskAnalytics`       | `boolean` | The flag to mask sensitive data in analytics for the Endpoint.                                    |
    | `maskLogging`         | `boolean` | The flag to mask sensitive data in logs for the Endpoint.                                         |
    | `useContactProfiles`  | `boolean` | The flag to use Contact Profiles for the Endpoint.                                                |
    | `useDashbotAnalytics` | `boolean` | The flag to use Dashbot for collecting analytics data.                                            |
    | `dashbotApikey`       | `string`  | The API key of the Dashbot bot for analytics collection.                                          |
    | `dashbotPlatform`     | `string`  | The selected platform of the Dashbot bot for analytics collection.                                |
    | `settings`            | `object`  | Optional Endpoint-specific settings. For example, Facebook Page token.                            |
    | `handoverSettings`    | `object`  | Settings to configure a handover provider.                                                        |
    | `createdAt`           | `number`  | Unix timestamp when the Endpoint was created.                                                     |
    | `lastChanged`         | `number`  | Unix timestamp when the Endpoint was last modified.                                               |
    | `createdBy`           | `string`  | Email of the user who created the Endpoint.                                                       |
    | `lastChangedBy`       | `string`  | Email of the user who last modified the Endpoint.                                                 |
