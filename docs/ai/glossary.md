---
title: "Glossary"
slug: "glossary"
description: "Cognigy.AI Glossary provides a reference for users, administrators, and anyone involved in the operation or understanding of Cognigy.AI software and practices."
hidden:  false
---

# Cognigy.AI Glossary

Cognigy.AI terms listed in alphabetical order. All terms in the glossary are given for informational purposes.

## A

_**AI Agents**_
: Cognigy.AI bots that automatically handle calls and chats from customers and employees. AI Agents use natural language processing (NLP) to understand customer intents and search inquiries.

_**AI Copilot**_
: One of Cognigy's products that offers a variety of features that empower human agents to provide faster and more accurate customer support. The AI Copilot workspace is fully customizable with widgets that display the most relevant information for any chat and voice use case. When embedded into your contact center's desktop, it enhances the overall efficiency of your contact center.
For more information, read the [AI Copilot](../ai-copilot/overview.md) documentation.

_**Agent Handover**_
: A Cognigy feature that allows AI Agents to transfer conversations to human agents when necessary, combining automation with human support for improved customer service. Agent Handover can be integrated in a Flow by using the Handover to Agent Node, with settings that allow connecting to various contact centers, such as Cognigy Live Agent, Genesys, 8x8, Salesforce, and many others.
For more information, read the [Agent Handover](./build/node-reference/service/handover-to-agent.md) documentation.

_**Project Settings**_
: The configuration menu that provides customization options to activate, deactivate,
and adjust important settings that affect the performance and results of the project's NLU and Flow logic.
For more information, read the [Project Settings](administer/access/project-settings.md) article.

## B

_**Billing**_
: The process of charging customers for the usage of Cognigy products. In the context of Cognigy, billing is related to the charges users incur for their interactions with the Cognigy platform.
In Cognigy's billing model, the fundamental unit of consumption is a conversation.
A conversation is an interaction between a user and AI or human agent within the Cognigy platform.
Each conversation is considered a billable unit,
and customers are charged based on the number of conversations they have.
For more information, read the [Billing](./administer/billing.md) documentation.

_**Bots**_
: A Bot (short for "robot") is a software application that performs automated tasks typically associated with human interaction.
Bots are programmed to execute specific functions autonomously, often without direct human intervention.
However, at Cognigy, we prefer the term "AI Agent" instead of "bot" to refer to our automated solutions, such as AI Agents.

## C

_**Chunk**_
: A unit of knowledge that is extracted from a Knowledge Source. Chunks are small, self-contained units of information that the Knowledge AI system searches through and accesses in order to answer user questions.
For more information, read the [Knowledge AI](empower/knowledge-ai/knowledge-chunk/knowledge-chunk.md) documentation.

_**Chunk Editor**_
: A tool that helps you interact with and manage [Chunks](#c). The Editor provides a user-friendly interface that enables you to manipulate the content within each chunk. Users can modify the text, add new information, delete sections, or rearrange the order of content to ensure the accuracy and relevance of the knowledge.
For more information, read the [Knowledge AI](empower/knowledge-ai/knowledge-chunk/knowledge-chunk-editor.md) documentation.

_**Channel**_
: A Cognigy component through which users can interact with the AI Agent. Each channel is associated with one or more Cognigy Endpoints, allowing users to communicate with the AI Agent through various interfaces. Cognigy Channels include Webchat, Facebook Messenger, Slack, WhatsApp, and other messaging or communication platforms.

_**Clients**_
: Various applications developed in different programming languages connect with Cognigy.AI, all hosted on the Cognigy GitHub account.
For example, the REST API Client enables direct interaction with Cognigy Resources using TypeScript/JavaScript.
For more information, read the [Clients](developers/client-libraries.md) documentation.

_**Cognigy.AI**_
: The Cognigy Conversational AI platform.
For more information, read [Conversational AI](#c).

_**Cognigy.AI API**_
: An Application Programming Interface provided by Cognigy.AI that allows communication with the Cognigy.AI installation. It is an HTTP-based interface that enables developers to interact with Cognigy.AI programmatically and build custom integrations.
With the Cognigy.AI API, developers can access various functionalities and resources within Cognigy.AI, including managing conversations, retrieving user data, analyzing analytics, and controlling the behavior of AI Agents.
For more information, read [Using Cognigy API](developers/api-and-cli.md) and [Cognigy OpenAPI](https://api-trial.cognigy.ai/openapi) documentation.

_**Cognigy Products**_
: Licensed applications and services such as Cognigy.AI, Cognigy Voice Gateway, Cognigy Live Agent, Cognigy Insights, or any other Cognigy Product: which are listed when completing a Cognigy order form.
For more information, choose a [product line](../index.md) and explore all features and platform capabilities.

_**CognigyScript**_
: A scripting language developed for Cognigy.AI that serves as a superset of JavaScript. CognigyScript allows users to access and manipulate the Input and Context objects within the text and JSON data during the conversation flow with the AI Agent.
For more information, read the [CognigyScript](build/cognigyscript.md) documentation.

_**Connections**_
: A way to securely store and manage credentials for integrating external services or APIs with the platform. They allow AI Agents to access and interact with external systems, such as databases, APIs, or third-party services, while ensuring sensitive information, such as API keys or access tokens, is securely encrypted.
For more information, read the [Connections](build/connections.md) article.

_**Contact Profiles**_
: The stored information about the end users of your project that Flows and Endpoints can access. Contact Profiles can persistently store information and help to personalize conversations with users, even across different channels.
For more information, read the [Contact Profiles](analyze/contact-profiles.md) documentation.

_**Context**_
: A JSON object that stores persistent information.
Every contact that connects to Cognigy.AI has its own Context, which lives throughout the session's lifetime. When a contact disconnects from Cognigy.AI, the Context is persisted in the database and retrieved upon reconnection.
For more information, read the [Context](test/interaction-panel/context.md) documentation.

_**Conversation**_
: A billable unit of interaction between a user and an AI Agent or human agent.
For more information about billed conversations, read the [Billing](administer/billing.md) documentation.

_**Conversational AI**_
: A technology that enables computers to interact with humans in natural language. It includes chatbots, virtual assistants, and other interfaces that understand and respond to user queries. This technology uses AI and natural language processing to simulate humanlike conversations and is used in various industries for tasks like customer service and information retrieval.

## E

_**Endpoints**_
: A connector within Cognigy.AI that enables seamless interaction between Cognigy AI Agents and external systems or platforms. It acts as a bridge, facilitating bidirectional communication, and allows AI Agents to send and receive messages to and from external services. Each Cognigy Endpoint represents a specific communication channel or interface through which the AI Agent can connect and engage with users or other systems.
For example, if you want your AI Agent to be available on both Webchat and Facebook Messenger, you would create two Cognigy Endpoints: one for Webchat and another for Facebook Messenger. These Endpoints would handle incoming and outgoing messages for their respective platforms, enabling the AI Agent to provide responses and receive user inputs on both channels.
For more information, read the [Endpoints](deploy/endpoints/overview.md) documentation.

_**Extensions**_
: Custom-built JavaScript modules that extend the platform's capabilities beyond its core features. With extensions, users can create custom actions, conditions, and integrations to enhance the AI Agent's responses and interactions. These custom functionalities can range from performing complex calculations, accessing external data, making API calls, integrating with databases, and more.
For more information, read the [Marketplace Extensions](build/extensions.md) documentation.

## F

_**Flows**_
: A visual representation of a potential dialog using a Flow chart. Flows are composed of individual Nodes with different functionalities, ranging from generating output to collecting back-end information. When an input comes in through an Endpoint, the Flow is executed, enabling smooth interactions with users.
For more information, read the [Flows](build/flows/overview.md) documentation.

_**Flow Editor**_
: A graphical interface where users can create and organize the dialogue paths and define the interaction logic by using Nodes. Users can drag and drop Nodes representing different actions, conditions, prompts, and responses to design a [Flow](#f).

_**Functions**_
: Code Blocks that can be run inside your Cognigy.AI installation and help you with long-running asynchronous processes, for example, interaction with third-party systems through HTTP APIs.
For more information, read the [Functions](build/functions.md) documentation.

## G

_**Generative AI**_
: A type of artificial intelligence that creates new content, such as images, video, audio, and text, using machine learning algorithms. It works by learning from existing data and producing new content based on that learning.
Cognigy.AI integrates with multiple LLM Providers to empower you to improve real-time customer interactions through personalized responses, advanced language understanding and sentiment analysis.
For more information, read the [Generative AI](empower/generative-ai.md) documentation and see [Wikipedia](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).

## H

_**Handover Providers**_
: Connectors between a Cognigy agent and third-party handover services. Handover providers facilitate the smooth transfer of conversations between Cognigy.AI and external handover services using the Handover Node.
For more information, read the [Handover Providers](escalate/handover-reference/overview.md) documentation.

## I

_**Inbox**_
: Incoming conversations are routed to an inbox in the Live Agent.
By default, there is one inbox per Project.
For more information, read the [Inbox](../live-agent/settings/inboxes.md) documentation.

_**Input (Object)**_
: A short-term JSON data object generated each time a message is sent to Cognigy.AI.
The Input Object contains general information about the message, such as the time it was received and the channel from which it was sent. It also includes specific results from the NLU intent mapping process, such as the selected Intent, identified Slots, and other useful information.
The Input Object is passed to the Flow to determine the next action. You can find more information about the input's lifespan on the [CognigyScript](build/cognigyscript.md) page.
For more information, read the [Input](test/interaction-panel/input.md) documentation.

_**Insights**_
: A Cognigy product used to collect and display analytics data within Cognigy.AI. Insights reports and explorers provide a range of key metrics for understanding the usage and performance of your AI Agents.
For more information, read the [Cognigy Insights](../insights/overview.md) documentation.

_**Intents**_
: Predefined patterns or categories that the Cognigy.AI platform uses to understand user input during conversational interactions. In natural language processing (NLP) and Conversational AI, intents represent the intentions or goals behind what a user says or types.
For example, if a user says `Book a flight to New York for next Friday`, the intent might be to `Book a flight`. Cognigy.AI analyzes the user input to identify the intent and then takes appropriate actions based on that understanding.
For more information, read the [Intents](empower/nlu/intents/ml-intents.md) documentation.

_**Intent Trainer**_
: Feature that allows analyzing the collected user inputs (records) and adding them to Intents to improve user input comprehension.
For more information, read the [Intent Trainer](train/intent-trainer.md) documentation.

_**Interaction Panel**_
: User interface for interacting with an AI Agent, directly from the Cognigy.AI platform. It can be accessed by clicking on the "Chat" button at the top right of the interface.
For more information, read the [Interaction Panel](test/interaction-panel/overview.md) documentation.

## K

_**Keyphrase**_
: Individual Lexicon entries. Keyphrases possess Slots (also known as Tags) and Synonyms, and they can be utilized by the NLU (Natural Language Understanding) system.
For more information, read the [Keyphrases](empower/nlu/slots-and-lexicons/lexicons.md) documentation.

_**Knowledge AI**_
: Knowledge AI provides generative question answering on the basis of an individually definable knowledge base through the combination of Conversational AI, Large Language Models, and vector search technology.
For more information, read the [Knowledge AI](empower/knowledge-ai/overview.md) documentation.

_**Knowledge Store**_
: A container that contains and organizes multiple Knowledge Sources and can be searched from the Flow. It provides a centralized and structured environment for managing and categorizing various sources of knowledge. The Knowledge Store helps streamline the knowledge management process by grouping related Knowledge Sources, making it easier to organize, search, and retrieve relevant information during runtime.
For more information, read the [Knowledge AI](empower/knowledge-ai/knowledge-store.md) documentation.

_**Knowledge Source**_
: Coherent textual information unit that is loaded into the Knowledge AI solution and is part of a searchable Knowledge Store. Various types of Knowledge Sources are supported in Cognigy, for example files in PDF, docx, CTXT format or web pages.
For more information, read the [Knowledge AI](empower/knowledge-ai/knowledge-source/knowledge-source.md) documentation.

## L

_**Large Language Model (LLM)**_
: A specific type of Generative AI model that is designed for generating humanlike text based on the input and context provided.
With LLMs, Cognigy AI Agents can understand and respond to user input in a natural way.
LLMs also assist in managing dialogues and providing multilingual support, enhancing the overall conversational experience for users.
For more information, read the [Large Language Models (LLMs)](empower/llms/overview.md) documentation.

_**Lexicons**_
: A collection of domain-specific Keyphrases that can be attached to a Flow.
A Lexicon enables the AI Agent to comprehend specific words such as car brands, product groups, or postal codes.
Once a Keyphrase is detected, it is published to the Input Object for further use, a process known as Slot Mapping.
For more information, read the [Lexicons](empower/nlu/slots-and-lexicons/lexicons.md) documentation. For more information about Slot Mapping, read the [Slot Mapping](empower/nlu/slots-and-lexicons/slots.md) documentation.

_**Live Agent**_
: A Cognigy product that allows human agents to seamlessly join and assist in conversations handled by the virtual assistants powered by Cognigy.AI. It enables a smooth transition from automated interactions to human-assisted ones, providing a more personalized and efficient customer support experience.
For more information, read the [Live Agent](../live-agent/overview.md) documentation.

_**Localization**_
: The process of adapting and customizing conversational experiences, such as AI Agents, to suit the preferences and languages of different regions or locales.
For more information, read the [Localization](build/translation-and-localization/localization.md) documentation.

_**Logs**_
: This debugging tool feature allows platform users to track every input and output message that occurs with an AI Agent. Logs are most commonly used to troubleshoot workflows by observing errors and identifying their points of occurrence.
For more information, read the [Logs](test/logs.md) documentation.

## M

_**Members**_
: An administration tool used to manage the access rights (roles) of individuals within Projects.
The Members panel allows Project Admins
to oversee the roles assigned to users within an organization for a specific Project.
These roles complement the Global Roles assigned in the Access Control panel.
For more information, read the [Members](administer/access/members.md) documentation.

## N
_**NLU**_
: Cognigy NLU is an industry-leading natural language understanding engine that powers AI Agents in Cognigy.AI, allowing for advanced comprehension and interpretation of human language.
For more information, read the [Cognigy NLU](empower/nlu/overview.md) documentation.

_**NLU Connectors**_
: Cognigy.AI features built-in support for several third-party NLU engines.
NLU Connectors can be utilized to connect with third-party NLU engines, such as Google Dialogflow and IBM Watson Assistant.
For more information, read the [NLU Connectors](empower/nlu/external/nlu-connectors.md) documentation.

_**NLU Model**_
: A machine learning model that is used for Natural Language Understanding (NLU) tasks in Cognigy.AI.
The NLU model is a crucial component of Cognigy's conversational AI platform,
enabling AI Agents to understand and interpret natural language input from users.
For more information, read the [Building the NLU Model](empower/nlu/intents/ml-intents.md) documentation.

_**Node Editor**_
: A graphical interface where users can modify the settings of individual Nodes to define their behavior within the Flow.
For more information, read the [Nodes](build/nodes/overview.md) documentation.

_**Nodes**_
: Fundamental building blocks that are used to construct Flows and define the logic of AI Agents. Each Node represents a specific action, decision point, or interaction within the Flow. Users can create, configure, and connect Nodes to design complex conversational experiences.
For more information, read the [Nodes](build/nodes/overview.md) documentation.

## O

_**OData**_
: An Analytics Endpoint provided by Cognigy that allows users to retrieve analytics records related to conversation data.
For more information, read the [OData](analyze/odata.md) documentation.

## P

_**Packages**_
: A feature that enables you to export and import individual Project resources, such as Flows or Lexicons,
to transfer these assets to other Projects or to share them with other teams.
Packages automatically include their direct dependencies and can be shared as a portable zip archive once downloaded.
You can create a Package for a single resource or multiple resources.
Additionally, you can upload Packages and view merge resolution steps.
For more information, read the [Packages](build/packages.md) documentation.

_**Playbooks**_
: Playbooks enable quick and automated testing of pre-recorded dialogs, suitable for both Unit Testing (testing individual Flow units) and Regression Testing (verifying overall functionality). Playbooks are automated conversations with built-in Assertions to check various elements of your Flow.
For more information, read the [Playbooks](test/playbooks.md) documentation.

_**Profile**_
: A JSON object that stores persistent information about the end user and which can be accessed from the Flow. Each contact connecting to Cognigy.AI has their own Contact Profile stored in the platform. When a contact disconnects, their Profile Data remains in the database and is retrieved upon reconnection using the same user ID. This allows for multichannel conversations by accessing the stored user profile when the user connects from a different channel.
For more information, read the [Profile](test/interaction-panel/profile.md) documentation.

_**Project**_
: A workspace where you can create, test, and deploy AI Agents. Projects contain collections of Conversational AI resources, including Flows, Lexicons, Endpoints, and more. It is possible to work on a given Project with multiple team members.

## S

_**Session**_
: A unit of interaction between a user and AI Agent or human agent. The session begins when a user sends their initial input to Cognigy, which can be either a chat or voice message, and ends when the user or human agent completes or terminates the interaction. A session can contain an unlimited number of user inputs.

_**Slot**_
: A specific data type or custom Keyphrase detected by the Cognigy NLU and placed into the Input Object under the property input.slots. There are two types of Slots: System-defined Slots and user-defined Slots (Lexicons / Keyphrases) which can both be accessed easily through CognigyScript.
For more information, read the [Slots](./empower/nlu/slots-and-lexicons/slots.md) documentation.

_**Snapshot**_
: A snapshot is an immutable form of an AI Agent in Cognigy.AI that includes various resources such as Flows, Lexicons, Connections, Functions, and more. Snapshots can be used to create a copy of an AI Agent for deployment, to create backups, or to revert to an earlier state if needed.
For more information, read the [Snapshots](./deploy/snapshots.md) documentation.

_**State**_
: A feature in Cognigy.AI that limits which intents the NLU can access during a conversation. Only intents on the Whitelist will be detected, while those on the Blacklist won't be recognized.
For more information, read the [State](test/interaction-panel/state.md) documentation.

_**Support Ticket**_
: Cognigy's Support Team handles issues evaluated according to various criteria (Severity Levels) with corresponding response times (Target Response Time). Issues can be reported via email or phone call.
For more information, read the [Get Help & Report Problems](../help/get-help.md) documentation.

## T

_**Tasks**_
: Certain activities, like training Intents, importing Snapshots, or creating a new Project, generate so-called [Tasks](build/projects.md#task-panel). An asynchronous process that can run in the background and is tied to the Cognigy notification system.

_**Tenant**_
: An independent instance within a multi-tenant environment, logically isolated for a group of users or licenses. They share common access with specific privileges to Cognigy SaaS and Cognigy Private Cloud SaaS.

_**Tokens**_
: Placeholders that allow users to access dynamic data within the conversation flow without having to write code. These tokens provide a convenient way to access input, context, and profile information. Users can use default tokens provided by Cognigy.AI or create custom tokens tailored to their specific requirements.

_**Tweak**_
: One of the characteristics of AI Agents is their ability to improve over time. In addition to a self-learning mechanism, Cognigy.AI can tweak agents based on existing dialogs. This can be done using the Intent Trainer.

## U

_**User Input**_
: A message (text and/or data) received by Cognigy.AI, coming from a user or system.

_**User Menu**_
: Provides access to a set of views that are related to the user that is logged in.
For more information, read the [User Menu](administer/user-menu/overview.md) documentation.

## V

_**Voice Gateway**_
: A Cognigy product that connects Cognigy.AI with phone lines and contact center solutions,
enabling you to link your voice agent to your Contact Center or other phone numbers.
This allows customers to speak with your voice agent instead of just writing to it.
For more information, read the [Voice Gateway](./deploy/endpoint-reference/voice-gateway.md) documentation.

## W

_**Webchat**_
: A Cognigy tool designed to integrate Conversational AI into websites seamlessly. It empowers Cognigy customers to host chatbots directly on their web pages, facilitating interactive engagement with visitors. This integration allows visitors to access assistance and obtain information without navigating away from the site.
For more information, read the [Webchat](../webchat/overview.md) documentation.

## X

_**xApps**_
: Flexible micro-web applications for customer self-service.
xApps can be used standalone or complimentary to any channel to enhance AI and human agents'
capabilities and to overcome channel limitations that compromise user experiences.
For more information, read the [xApps](../xApps/overview.md) documentation.

## Y

_**Yes / No Intents**_
: This feature enables machine learning to determine yes and no confirmations, similar to regular intent matching. It allows a small set of example sentences to train a model capable of understanding various yes and no confirmation phrases, thereby introducing a more fluent natural language experience.
For more information, read the [Yes/No Intents](./empower/nlu/intents/yes-no-intents.md) documentation.