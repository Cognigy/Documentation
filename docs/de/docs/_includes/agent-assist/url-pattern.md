'https://${AICopilotBaseUrl}/?userId=${userId}&sessionId=${sessionId}&URLToken=${URLToken}'

Wo:

- "AICopilotBaseUrl" – die Basis-URL von AI Copilot. Sie stellt die Hauptwebadresse dar, unter der der AI Copilot-Dienst gehostet wird.
- 'sessionId' — die Cognigy-Sitzungs-ID. Eine Sitzung ist ein Zeitraum der Interaktion oder Kommunikation zwischen dem menschlichen Agenten und dem AI Copilot Workspace.
- 'userId' — die Cognigy-Benutzer-ID. Es hilft AI Copilot, die Interaktion mit einem bestimmten Benutzer zu verknüpfen, sodass benutzerspezifische Informationen verfolgt werden können.
- 'URLToken' — der API-Schlüssel auf der Cognigy-Seite. Nur autorisierte Benutzer können über diese URL auf das AI Copilot-System zugreifen oder mit ihm interagieren.

Zum Beispiel:

"https://agent-assist-trial.cognigy.ai/?sessionId=session-17738489-e767-4d47-b669-cb0dd2e899e0&userId=52476cc5-710c-40db-8108-e99109f45d91&URLToken=a4d5c86c98f27730311591f28d194510e05ffed30ca148e3344970defd418e7d"