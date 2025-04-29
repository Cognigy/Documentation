`https://${AICopilotBaseUrl}/?userId=${userId}&sessionId=${sessionId}&URLToken=${URLToken}`

    Where:

    - `AICopilotBaseUrl` — the base URL of AI Copilot. It represents the main web address where the AI Copilot service is hosted.
    - `sessionId` — the Cognigy Session ID. A session is a period of interaction or communication between the human agent and the AI Copilot workspace.
    - `userId` — the Cognigy User ID. It helps AI Copilot associate the interaction with a specific user, allowing for tracking user-specific information.
    - `URLToken` — the Endpoint token on the Cognigy side. To find this token, navigate to the Endpoint linked with AI Copilot. In the **Config URL** field, copy the token found after `https://endpoint-trial.cognigy.ai`. For example, in the URL `https://endpoint-trial.cognigy.ai/f38791ae20d4961acf0e97d9f377c4fe3df92894e1eff1c7a774a8ed089a4590`, the token would be `f38791ae20d4961acf0e97d9f377c4fe3df92894e1eff1c7a774a8ed089a4590`. Note that only authorized users can access or interact with the AI Copilot system through this URL.

    For example:

    `https://ai-copilot-trial.cognigy.ai/?sessionId=session-17738489-e767-4d47-b669-cb0dd2e899e0&userId=52476cc5-710c-40db-8108-e99109f45d91&URLToken=a4d5c86c98f27730311591f28d194510e05ffed30ca148e3344970defd418e7d`