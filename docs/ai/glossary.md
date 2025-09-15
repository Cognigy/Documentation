---
title: "Glossary"
slug: "glossary"
description: "Cognigy.AI Glossary provides a reference for users, administrators, and anyone involved in the operation or understanding of Cognigy.AI software and practices."
hidden: false
---

# Cognigy.AI Glossary

Cognigy.AI terms listed in alphabetical order. All terms in the glossary are given for informational purposes.

## A

_**Agent Copilot**_
: A Cognigy product that offers a variety of features in a workspace and empowers human agents to provide faster and more accurate customer support. You can customize the Agent Copilot workspace with widgets that display the most relevant information for chat and voice use cases. When embedded into your contact center's desktop, Agent Copilot enhances the overall efficiency of your contact center. For more information, read the [Agent Copilot](../ai-copilot/overview.md) documentation.

_**AI Agents**_
: Cognigy.AI bots that autonomously handle calls and chats from customers and employees. AI Agents use large language models (LLMs) and natural language understanding (NLU) to understand user inputs and search inquiries. For more information, read the [AI Agents](empower/agentic-ai/overview.md) documentation.

## C

_**Channel**_
: A Cognigy resource that allows users to interact with the AI Agent through multiple interfaces. Each channel is associated with one or more Cognigy.AI [Endpoints](#e). Channels include Webchat, Facebook Messenger, Slack, WhatsApp, and other messaging or communication platforms. For more information, read the [Channels](build/nodes/channels.md) documentation.

_**Chunk Editor**_
: An interface in Cognigy.AI for editing and managing [Knowledge Chunks](#k). Users can edit the text, add new information, delete sections, or rearrange the order of the Knowledge Chunks to ensure their accuracy and relevance. For more information, read the [Knowledge AI](empower/knowledge-ai/knowledge-chunk/knowledge-chunk-editor.md) documentation.

_**Client Libraries**_
: Applications developed in different programming languages that connect with Cognigy.AI, hosted on Cognigy's GitHub pages. For example, the REST API client allows direct interaction with Cognigy.AIresources using TypeScript or JavaScript. For more information, read the [Client Libraries](developers/client-libraries.md) documentation.

_**Cognigy.AI**_
: Cognigy's conversational AI platform, designed for enterprises to create, deploy, and orchestrate chat and voice AI Agents at scale. Cognigy.AI leverages advanced natural language understanding (NLU) technology and LLMs to develop conversational interfaces that can accurately understand and interpret user queries. For more information, read [About the Cognigy.AI Platform](overview/about-cognigy-ai.md).

_**Cognigy.AI API**_
: An HTTP-based application programming interface (API) provided by Cognigy that allows communication with the Cognigy.AI installation. With the Cognigy.AI API, developers can access various functionalities and resources in Cognigy.AI, control the behavior of AI Agents, and develop custom integrations. For more information, read the [API and CLI](developers/api-and-cli.md) article and the [Cognigy.AI API](https://api-trial.cognigy.ai/openapi) documentation.

_**Cognigy NLU**_
: A natural language understanding engine that powers AI Agents in Cognigy.AI. Cognigy NLU allows AI Agents to understand and interpret human language and provide accurate responses. For more information, read the [NLU Overview](empower/nlu/overview.md) documentation.

_**Cognigy Products**_
: Licensed applications and services that Cognigy offers, such as Cognigy.AI, Cognigy Voice Gateway, Cognigy Live Agent, Cognigy Insights, and others. Cognigy Products are listed in the Cognigy order form. For more information, select a [product line](../index.md) and explore all features and platform capabilities.

_**Cognigy SaaS**_
: Cognigy.AI's delivery model, which operates on and maintains cloud-hosted instances for customers. Cognigy SaaS includes dedicated and shared SaaS installations.

_**CognigyScript**_
: A JavaScript superset developed for Cognigy.AI. CognigyScript lets users configure AI Agents to access and manipulate the Input, Context, and Profile objects dynamically. For more information, read the [CognigyScript](build/cognigyscript.md) documentation.

_**Connections**_
: A Cognigy.AI resource that securely stores and manages credentials for integrating external services or APIs with the platform. Connections let AI Agents access and interact with external systems, such as databases, APIs, or third-party services, while ensuring sensitive information, such as API keys or access tokens, is securely encrypted. For more information, read the [Connections](build/connections.md) article.

_**Contact Profiles**_
: The stored data about the users that interact with your AI Agents. Contact Profiles persistently store user data and help to personalize conversations, even across different channels. You can access Contact Profiles from a Flow through the [Profile](build/ai-agent-memory/profile.md) object and manage them with specific Nodes. For more information, read the [Contact Profiles](analyze/contact-profiles.md) article.

_**Context Object**_
: A JSON object that stores session-specific data. The Context object is generated when a user starts a conversation with an AI Agent, which triggers the start of a session. When the user disconnects from Cognigy.AI, the session data persists in the [Context](build/ai-agent-memory/context.md) object and is retrieved upon reconnection with the same session ID. This method allows for multichannel conversations by accessing the Context object when the user connects from a different channel. You can also use CognigyScript to access the Context object and generate more context-aware AI Agent responses. For more information, read the [Context](build/ai-agent-memory/context.md) documentation.

_**Conversation**_
: A billable unit of interaction between a user and an AI Agent or human agent. For more information about billed conversations, read the [Billing](administer/billing.md) documentation.

_**Conversational AI**_
: A technology that allows computers to interact with humans in natural language. Conversational AI uses AI and natural language processing to simulate humanlike conversations and is used in various industries for tasks like customer service and information retrieval.

## E

_**Endpoints**_
: A Cognigy.AI resource that allows seamless interaction between AI Agents and external systems or platforms so that AI Agents can send and receive messages to and from external services. Each Endpoint represents a specific communication channel or interface through which the AI Agent can connect and engage with users or other systems. For more information, read the [Endpoints](deploy/endpoints/overview.md) documentation.

_**Extensions**_
: Custom Nodes that users can build with JavaScript modules to extend Cognigy.AI's capabilities beyond its core features. With Extensions, users can create custom actions, conditions, and integrations to enhance the AI Agent's responses and interactions. These custom functionalities can include accessing external data, making API calls, integrating with databases, and other tasks. For more information, read the [Marketplace Extensions](build/extensions.md) documentation.

## F

_**Flow**_
: A conversational structure that defines how AI Agents interact with users. Flows are composed of Nodes with different functionalities, such as generating output and collecting backend information. When an input comes in through an Endpoint, the Flow is executed, enabling smooth interactions with users. For more information, read the [Flows](build/flows/overview.md) documentation.

_**Flow Editor**_
: A graphical interface where users can create and organize the conversational paths and define the interaction logic by using Nodes that represent different actions, conditions, prompts, and responses to design a [Flow](#f).

_**Functions**_
: A Cognigy.AI resource that you can define with JavaScript code and run to help with asynchronous processes, for example, interaction with third-party systems through HTTP APIs. Functions are independent of Flows, but you can trigger them from a Flow. For more information, read the [Functions](build/functions.md) documentation.

## G

_**Generative AI**_
: A type of artificial intelligence that generates new content, such as images, video, audio, and text, using machine learning algorithms. Generative AI produces new content using LLMs, which are trained on large datasets. Cognigy.AI integrates with multiple LLM providers to improve real-time customer interactions with AI Agents through personalized responses, advanced language understanding, and sentiment analysis. For more information, read the [Generative AI](empower/generative-ai.md) documentation and see [Wikipedia](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).

## H

_**Handover**_
: A Cognigy.AI feature that allows AI Agents to transfer conversations to human agents when necessary, combining automation with human support for improved customer service. You can integrate handover into a Flow using handover providers and the Handover to Agent Node. This approach allows you to connect AI Agents to various contact center platforms, such as Live Agent, Genesys, 8x8, Salesforce, and many others. For more information, read the [Handover](./build/node-reference/service/handover-to-agent.md) documentation.

_**Handover Provider**_
: A Cognigy.AI resource that acts as a connector between an AI Agent and contact center platforms. You can transfer conversations to contact center platforms using the Handover to Agent Node. For more information, read the [Handover Providers](escalate/handover-reference/overview.md) documentation.

## I

_**Inbox**_
: A container for incoming conversations routed to Live Agent. For more information, read the [Inbox](../live-agent/settings/inboxes.md) documentation.

_**Input Object**_
: A JSON object that serves as the short-term AI Agent memory. The Input object is generated each time the user sends a message or provides a voice input to an AI Agent. The Input object stores general data about the user input, such as time and type of input, Endpoint-specific data, and results from the NLU Intent mapping process, such as the recognized Intent and Slots. You can use CognigyScript to access the Input object and generate more context-aware AI Agent responses. For more information, read the [Input](build/ai-agent-memory/input.md) documentation.

_**Insights**_
: A Cognigy product that gathers and displays analytics data in Cognigy.AI. Insights reports and explorers provide a range of key metrics for understanding the deployment and performance of your AI Agents. For more information, read the [Cognigy Insights](../insights/overview.md) documentation.

_**Intents**_
: Patterns or categories users can define in Cognigy.AI to allow AI Agents to better understand user input during conversational interactions. Intents represent the intentions or goals behind what a user says or types. Based on the Intent, AI Agents can take appropriate actions. For example, if a user says `Book a flight to New York for next Friday`, the Intent might be `Book a flight`. For more information, read the [Intents](empower/nlu/intents/overview.md) documentation.

_**Intent Trainer**_
: A Cognigy.AI feature that analyzes collected conversation records, processes them, and creates Intents to improve the comprehension of user input. For more information, read the [Intent Trainer](train/intent-trainer.md) documentation.

_**Interaction Panel**_
: A Cognigy.AI feature that provides a user interface for testing AI Agents in Cognigy.AI. For more information, read the [Interaction Panel](test/interaction-panel/overview.md) documentation.

## K

_**Keyphrase**_
: A specific word or phrase users can define in a [Lexicon](#l) for the AI Agent to recognize, and that can be assigned to Slots and Synonyms. When Keyphrases are detected, they are stored in the Input object for further use, a process known as Slot mapping. For more information, read the [Keyphrases](empower/nlu/slots/user-defined/lexicon.md) and the [Slot mapping](empower/nlu/slots/system-defined.md) documentation.

_**Knowledge AI**_
: A Cognigy.AI feature that provides AI Agents with RAG capabilities to generate context-aware, tailored answers to user questions. Knowledge AI combines Knowledge Sources, embedding, chat, and completion models to improve user interactions with AI Agents. For more information, read the [Knowledge AI](empower/knowledge-ai/overview.md) documentation.

_**Knowledge Chunk**_
: A Knowledge AI component that represents a unit of information extracted from a Knowledge Source and can include metadata. Knowledge AI searches through Knowledge Chunks to answer user questions. For more information, read the [Knowledge AI](empower/knowledge-ai/knowledge-chunk/knowledge-chunk.md) documentation.

_**Knowledge Store**_
: A Knowledge AI component that contains and organizes Knowledge Sources. The Knowledge Store helps streamline knowledge management by grouping related Knowledge Sources, making it easier to search and retrieve relevant information during run-time. For more information, read the [Knowledge AI](empower/knowledge-ai/knowledge-store.md) documentation.

_**Knowledge Source**_
: A Knowledge AI component that contains the source of information to generate Knowledge Chunks and can include metadata. Users can create Knowledge Sources from different text formats, for example, PDF, DOCX, CTXT files, or web pages. For more information, read the [Knowledge AI](empower/knowledge-ai/knowledge-source/knowledge-source.md) documentation.

## L

_**Large Language Model (LLM)**_
: A type of generative AI model that is designed to generate humanlike text based on the user input and the conversation history. LLMs allow AI Agents to understand and respond to questions in a natural way. For more information, read the [Large Language Models (LLMs)](empower/llms/overview.md) documentation.

_**Lexicon**_
: A collection of Keyphrases that you can attach to Flows to help AI Agents understand user queries. For more information, read the [Lexicons](empower/nlu/slots/user-defined/lexicon.md) documentation.

_**Live Agent**_
: A Cognigy product that allows human agents to join and assist in conversations handled by the AI Agents. With Live Agent, AI Agents can escalate user queries to human agents, providing a more personalized and efficient customer support experience. For more information, read the [Live Agent](../live-agent/overview.md) documentation.

_**Localization**_
: The process of adapting a product or a service, such as AI Agents, to a specific region or country, taking language and culture into account. Cognigy.AI includes a localization feature that allows AI Agents to interact with end users in different languages. For more information, read the [Localization](build/translation-and-localization/localization.md) documentation.

_**Logs**_
: A Cognigy.AI feature that allows users to track every input and output message in a conversation with an AI Agent along with other metadata, like timestamp, Endpoint, and more. Logs' main purpose is to help users troubleshoot AI Agents by reviewing errors and identifying where they occur. For more information, read the [Logs](test/logs.md) documentation.

## M

_**Members**_
: A Cognigy.AI feature used to manage the users' access rights through roles at the Project level. These roles complement the Global Roles assigned in the Access Control panel. For more information, read the [Members](administer/access/members.md) documentation.

## N

_**NLU Connectors**_
: A Cognigy.AI feature that provides built-in support for several third-party NLU engines. You can use NLU connectors to connect with third-party NLU engines, such as Google Dialogflow and IBM Watson Assistant. For more information, read the [NLU Connectors](empower/nlu/external/nlu-connector-reference/all-nlu-connectors.md) documentation.

_**NLU Model**_
: A machine learning model used for natural language understanding tasks in Cognigy.AI. The NLU model allows AI Agents to understand and interpret natural language input from users. For more information, read the [Intents](empower/nlu/intents/overview.md) documentation.

_**Node**_
: A fundamental building block of Flows that defines the logic of AI Agents. Each Node represents a specific action, decision point, or interaction during the Flow execution. For more information, read the [Nodes](build/nodes/overview.md) documentation.

_**Node Editor**_
: A graphical interface where users can set the parameters of a Node to define the Flow behavior. For more information, read the [Nodes](build/nodes/overview.md) documentation.

## O

_**OData**_
: A RESTful API endpoint Cognigy provides that allows users to retrieve analytics records of AI Agents' conversations. For more information, read the [OData](analyze/odata.md) documentation.

_**Organization**_
: An independent instance of Cognigy.AI within an environment, isolated for a group of users or licenses.

## P

_**Package**_
: A Cognigy.AI feature that allows users to export and import Project resources, such as Flows or Lexicons, transfer them to other Projects, or share them with other teams. For more information, read the [Packages](build/packages.md) documentation.

_**Playbook**_
: A Cognigy.AI resource that represents conversation scripts to automatically run tests on AI Agents. Users can create Playbooks and add Assertions to check the AI Agent's responses and other aspects of the Flow. For more information, read the [Playbooks](test/playbooks.md) documentation.

_**Profile Object**_
: A JSON object that serves as the long-term memory of the AI Agent. The Profile object stores persistent information about the user, displayed in the user's Contact Profile. When a user disconnects from Cognigy.AI, their data remains in the Profile object and is retrieved upon reconnection with the same user ID. This allows for multichannel conversations by accessing the Profile object when the user connects from a different channel. You can also use CognigyScript to access the Profile object and generate more context-aware AI Agent responses. For more information, read the [Profile](build/ai-agent-memory/profile.md) documentation.

_**Project**_
: A workspace where you can create, test, and deploy AI Agents. Projects include different resources, such as Flows, Lexicons, and Endpoints, and allow for collaboration with multiple team members. For more information, read the [Projects](build/projects.md) documentation.

## S

_**Session**_
: The complete interaction between a user and AI Agent or human agent. The session begins when a user sends their initial chat or voice message to the AI Agent, and ends when the user, AI Agent, or human agent completes or terminates the interaction. A session can contain an unlimited number of user inputs and can be carried out across different channels.

_**Slot**_
: A specific data type or custom phrases that Cognigy NLU can recognize. Slots allow AI Agents to extract structured information from user input and use it dynamically in conversations. For more information, read the [Slots](empower/nlu/slots/system-defined.md) documentation.

_**Snapshot**_
: A Cognigy.AI resource that represents an immutable version of an AI Agent that you can publish to users, or use to create backups or to revert to an earlier state. For more information, read the [Snapshots](./deploy/snapshots.md) documentation.

_**State**_
: A Cognigy.AI feature that limits which Intents the AI Agent can recognize during a part of a Flow. You can use the [Set State](../ai/build/node-reference/logic/set-state.md) and [Reset State](../ai/build/node-reference/logic/reset-state.md) Nodes to control the State of the conversation. For more information, read the [State](test/interaction-panel/state.md) documentation.

## T

_**Task**_
: Specific activities that run in the background and for which you get notifications, such as training Intents, importing Snapshots, or creating a new Project. The Task panel provides an overview of ongoing and completed Tasks. For more information, read the [Tasks](build/projects.md#task-panel) documentation.

_**Tenant**_
: An independent instance of Cognigy.AI within an environment, also known as _organization_, isolated for a group of users or licenses.

_**Tokens**_
: A Cognigy.AI resource that visually represents [CognigyScript](build/cognigyscript.md) expressions in the Node editor and stores them for reuse. Cognigy.AI has a selection of default Tokens that are associated with Input, Context, and Profile objects. For more information, read the [Tokens](build/tokens.md) documentation.

## U

_**User Input**_
: A message, including text, data, or voice input, received by Cognigy.AI from a user or system.

_**User Menu**_
: A menu interface that provides access to a set of views related to the user that is logged in. For more information, read the [User Menu](administer/user-menu/overview.md) documentation.

## V

_**Voice Gateway**_
: A Cognigy product that allows users to deploy voice AI Agents by phone and in contact center platforms, by connecting them to Cognigy.AI. For more information, read the [Voice Gateway](deploy/endpoint-reference/voice-gateway.md) documentation.

## W

_**Webchat**_
: A Cognigy product that integrates AI Agents into websites seamlessly, facilitating interactive engagement with visitors. For more information, read the [Webchat](../webchat/overview.md) documentation.

## X

_**xApps**_
: A Cognigy product that allows users to build flexible micro-web applications for customer self-service. xApps can be used as a standalone application or complementary to any channel to enhance AI and human agents' capabilities. With xApps, users can overcome channel limitations that compromise user experiences. For more information, read the [xApps](../xApps/overview.md) documentation.

## Y

_**Yes/No Intents**_
: A Cognigy.AI feature that allows machine learning to recognize yes and no responses similarly to regular Intent matching. With Yes/No Intents, users can train a NLU model to understand different yes and no confirmation phrases based on a small set of example sentences. For more information, read the [Yes/No Intents](empower/nlu/intents/yes-no-intents.md) documentation.
