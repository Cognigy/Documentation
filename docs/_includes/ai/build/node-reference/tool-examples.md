### AI Agent Tool

In this example, the `unlock_account` tool unlocks a user account by providing the email and specifying the reason for the unlocking.

Parameter configuration in JSON:

```json
{
  "type": "object",
  "properties": {
    "email": {
      "type": "string",
      "description": "User's login email for their account."
    }
  },
  "required": ["email"],
  "additionalProperties": false
}
```

where:

- `type` — the type for a tool parameter schema, which must always be `object`.
- `properties` — defines the parameters for the tool configuration:
    - `email` — a required tool parameter for unlocking the account.
        - `type` — defines the data type for the tool parameter.
        - `description` — a brief explanation of what the property represents.
- `required` — lists `email` as a required parameter, ensuring that this value is always provided when the tool is called.
- `additionalProperties` — ensures that the input contains only the `email` tool parameter, and no others are allowed.

### AI Agent MCP Tool and Call MCP Tool

#### Use Zapier's Remote MCP server

You can create a custom MCP server with personalized tools by using one of the [provided SDKs](https://github.com/modelcontextprotocol). For a quicker setup, you can use a third-party provider. For example, [Zapier](https://zapier.com/) allows you to [configure your MCP server](https://actions.zapier.com/settings/mcp/), which can be connected to multiple application APIs.

To use Zapier as a remote MCP server, follow these steps:

1. Log in to your Zapier account, go to the [MCP settings](https://actions.zapier.com/settings/mcp/) page, and configure your MCP server.
2. Copy the SSE URL and paste it into the **MCP Server SSE URL** field of your MCP Tool Node.
3. In the Zapier MCP settings, create an action to connect to various APIs. For example, you can create a Zapier action to automatically generate a Google Doc.

Once the setup is complete, the configured MCP Actions will be loaded when the AI Agent is executed.

You will see the following debug message in the Interaction Panel, indicating the result of the tool call after a successful execution:

```txt
AI Agent: MCP Tool
Fetched tools from MCP Tool "zapier"

- google_docs_create_document_from_: Create a new document from text. Also supports limited HTML.
  Parameters:
  - title (string): Document Name
  - file (string): Document Content
```