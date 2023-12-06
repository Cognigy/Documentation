`https://${AICopilotBaseUrl}/?userId=${userId}&sessionId=${sessionId}&URLToken=${URLToken}`

Where:

- `AICopilotBaseUrl` — the base URL of AI Copilot. It represents the main web address where the AI Copilot service is hosted.
- `sessionId` — the Cognigy Session ID. A session is a period of interaction or communication between the human agent and the AI Copilot Workspace.
- `userId` — the Cognigy User ID. It helps AI Copilot associate the interaction with a specific user, allowing for tracking user-specific information.
- `URLToken` — the API Key on the Cognigy side. Only authorized users can access or interact with the AI Copilot system through this URL.

For example:

`https://agent-assist-trial.cognigy.ai/?sessionId=session-17738489-e767-4d47-b669-cb0dd2e899e0&userId=52476cc5-710c-40db-8108-e99109f45d91&URLToken=a4d5c86c98f27730311591f28d194510e05ffed30ca148e3344970defd418e7d`