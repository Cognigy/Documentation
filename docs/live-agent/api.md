---
title: "Cognigy Live Agent API"
slug: "cognigy-live-agent-api"
description: "The Cognigy Live Agent API provides access to conversations, teams, and agents. It enables you to integrate, automate, and analyze workflows beyond the Live Agent GUI."
hide:
  - 'live agent api'
---

# Cognigy Live Agent API

The [Cognigy Live Agent API](https://liveagent-api.cognigy.ai/openapi) provides access to conversations, teams, and agents. It enables you to integrate, automate, and analyze workflows beyond the Live Agent GUI.

## Access the API

The API Base URL and an access token are required to access the API.

### Choose the API Base URL

The API Base URL is the endpoint for accessing the Cognigy Live Agent OpenAPI.
The table outlines the base URLs for different environments.

| Environment               | API Base URL                                                                                                                                                                                                                         |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Trial                     | `https://liveagent-trial.cognigy.ai`                                                                                                                                                                                                 |
| App                       | `https://liveagent-app.cognigy.ai`                                                                                                                                                                                                   |
| App-US                    | `https://liveagent-app-us.cognigy.ai`                                                                                                                                                                                                |
| Dedicated SaaS            | Use the following pattern `https://api-<company-name>.cognigy.cloud/openapi`, where `company-name` is your company name. For example, if your company name is `abc123`, the URL would be `https://api-abc123.cognigy.cloud/openapi`. |
| On-premises installations | In your Live Agent `values.yaml` file, replace live-agent.example.com in `host: "live-agent.example.com"` with the API URL from your installation.                                                                                   | 

### Get an Access Token

To use the Live Agent API, you need to get an access token. The token must be passed for each method in the HTTP-Authorization header.

1. In the bottom-left corner of the Live Agent interface, click your profile icon and select **Profile Settings**.
2. In the **Access Token** section, copy the token and save it for later use.

## Make your First API Request

Create a request to get conversation metadata. Select one of the options to make the request:

=== "cURL"
    1. Open your terminal to create a `GET` request:

        ```bash
        curl -X GET "https://{api_base_url}/api/v1/accounts/{account_id}/conversations/meta" \
        -H "api_access_token: your_access_token"
        ```
    1. Replace the following placeholders in request:
        - Replace `{api_base_url}` with the base URL of your environment. For example, for the trial environment, use `liveagent-trial.cognigy.ai`.
        - Replace `{account_id}` with your Live Agent account ID. Find the ID in the Live Agent URL. For example, in `https://liveagent-trial.cognigy.ai/accounts/12345/conversations`, the account ID is `12345`.
        - Replace `your_access_token` with the access token you saved.

=== "Postman"

    1. Open Postman and create a `GET` request with the following URL: `https://{api_base_url}/api/v1/accounts/{account_id}/conversations/meta`.
    2. Replace the following placeholders in request:
            - Replace `{api_base_url}` with the base URL of your environment. For example, for the trial environment, use `liveagent-trial.cognigy.ai`.
            - Replace `{account_id}` with your Live Agent account ID. Find the ID in the Live Agent URL. For example, in `https://liveagent-trial.cognigy.ai/accounts/12345/conversations`, the account ID is `12345`.
    3. Add the authorization header:
        1. Go to the **Headers** tab.
        2. Add the `api_access_token` key and set the value to `your_access_token`.
    4. Click **Send** to execute the request.

You should receive a `200 OK` response containing the following JSON:

```json
{
    "meta": {
        "mine_count": 0,
        "assigned_count": 20,
        "unassigned_count": 512,
        "all_count": 532
    }
}
```

## Troubleshooting

??? info "Error 401 (unauthorized)"
    If you receive a `401 Unauthorized` error, ensure that you have included the correct access token in the request header.

## More Information

- [Account Settings](settings/account-settings.md)