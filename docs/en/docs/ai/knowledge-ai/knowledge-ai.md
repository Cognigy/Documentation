---
title: "Knowledge AI (Beta)"
slug: "Knowledge AI (Beta)"
hidden: false
---

# Knowledge AI (Beta)

[![Version badge](https://img.shields.io/badge/Added in-v4.57(Beta)-purple.svg)](../release-notes/4.57.md)

!!! note
    Our Knowledge AI functionality requires the usage of external AI model provides such as Microsoft. You are subject to the terms of those once you are using the feature. Cognigy cannot take responsibility for your use of third-party services, systems, or materials.

Knowledge is a critical part when building modern virtual agents. In the current era of bots, our customers usually use [Intents]() and so-called [Default Replies]() in order to detect questions and respond with appropriate content based on the Default Replies. Crafting these Q&A pairs is time-consuming and requires a lot of maintenace effort. The future of bots will be different - and it starts right now! The Cognigy Knowledge AI solution allows our customers to upload their existing knowledge in the form of already existing documents like PDF files. Cognigy.AI will then learn how to extract meaningful information from those documents and will expose them to Flow designers via a new set of Flow Nodes. This functionality allows our customers to build knowledge based bots in minutes and get started way quicker.

## Quickstart
This Quickstart guide aims to provide a solid step-by-step tutorial on how to get started with our Knowledge AI solution. It won't explain concepts nor will it contain detailed information on how things work - please have a look at the other sections of this document in order to learn about the details.

### Setup LLMs
In order to leverage the power of the Cognigy Knowledge AI solution, we have to create two LLM resources in your project:
- an Embedding model which will be used to encode the text of our documents into a numeric representation which is used for search
- a generative AI model which will be used to extract and generate a response based on a users questions and the information from your documents

1. Open the Cognigy.AI user interface.
2. Go to **Build > LLM.**
3. Click **+New LLM.**
4. Select the **text-embedding-ada-002** model and provide a name - you can either select the **Azure OpenAI** or **OpenAI** variants.
5. Click on **Save**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/llm-ada.png" width="90%" />
</figure>

6. You will now have to create a [Connection]() pointing either to Azure OpenAI or OpenAI. Click on the **+** button next to the dropdown.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/azure-connection.png" width="90%" />
</figure>

7. Provide a name for your Connection, e.g. **Azure OpenAI** and provide your **API Key**. You can find the API Key in the **Azure OpenAI** section of the Azure portal.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/azure-portal-api-key.png" width="90%" />
</figure>

8. Once you have saved the Connection, you will have to insert a **Resource Name**, **Deployment Name** and a mandatory **API Version** Cognigy.AI will use when interacting with the LLM. Please note that these will be different for you based on how you have named the resource as well as the deployments in your Azure account. Once you are done, the configuration should look similar to the following:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/llm-ada-configured.png" width="90%" />
</figure>

You are now done with the setup for the first LLM - the **embedding model** which Cognigy.AI will use to encode the text of our documents. We have to create a second LLM for extracting and generating responses based on your knowledge. Since the second LLM is also Azure OpenAI based (in our example), configuration will be easier as we will be able to reuse the Azure OpenAI Connection we have already created.

1. Go back to **Build > LLM.**
2. Click **+New LLM.**
3. Select the **text-davinci-003** model and provide a name.
4. Click on **Save**.
5. Select the **Azure OpenAI** Connection which we have created when configuring the first LLM.
6. Insert the **Resource Name**, **Deployment Name** and a mandatory **API Version**. Once you are done, the configuration should look similar to the following:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/davinci-configured.png" width="90%" />
</figure>

This part of the configuration does not need to be touched again. Let's now navigate to the **Project Settings** of your project to continue.

### Activate GenAI features
You will now have to activate **Generative AI capabilities** for your project.

1. Navigate to the **Project Settings** page of your project.
2. Open the **Generative AI Settings** section.
3. Click on the **Enable Generative AI Features** button.
4. Scroll through the list and select the **Davinci** model for **LLM Prompt Node** and the **ADA (embedding)** model for **Knowledge Search**. Your project settings should look like the following:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/project-settings.png" width="90%" />
</figure>

5. Ensure that you click the **Save** button.

Perfect 🎉 - we can now finally start to upload Knowledge to your Cognigy.AI project.

### Knowledge
In the sidebar of Cognigy.AI you should be able to see a new section under **Build** called **Knowledge**:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/knowledge.png" width="90%" />
</figure>

Click on it in order to navigate to the **Knowledge Stores** page. If everything was configured properly during setting up the LLMs as well as activating generative AI features, you should now see the following screen:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/knowledge-stores.png" width="90%" />
</figure>

!!! warning "Configuration mistake"
    If you can't click a **+New Knowledge Store** button on the Knowledge Stores page, but even see a **Enable in Settings** button, then you have not properly followed the steps above. It is important that you create the two required LLMs (ada-model for text embeddings as well as the generative-ai davincii model) as well as that you activate generative AI features in the Project Settings of your project.

Let's get started and upload some knowledge!

1. Click on **+New Knowledge Store** in order to create a new group of knowledge.
2. Provide a **Name** - like "Sample" - in the sidbar and click on **Save**.
3. Drag and drop [this file](./images/cognigy-sample.ctxt) onto the large background:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/upload.png" width="90%" />
</figure>

4. Cognigy.AI will now process the uploaded document and extract **Chunks** from it. You will see the status in the [Task Manager]() as well as on the actual **Knowledge Source** list item.
5. Click on the list item once the file was completely processed - you will now see the **Chunks** that Cognigy.AI has extracted in the **Chunk Editor**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/chunk-editor.png" width="90%" />
</figure>

Our Chunk Editor allows our customers to fine-tune their Knowledge within our platform. It is often hard or even impossible to change the content of source-documents especially if they have not been specifically crafted for ingestion into a system like Knowledge AI. More information on the Chunk Editor in the sections below.

### Query Knowledge AI
The last step in our Quickstart guide is to query the Knowledge AI solution during [Flow]() execution.

1. Navigate to **Build > Flows** and create a new Flow.
2. A **Search Extract Output** Flow Node to your Flow.
3. Open the Flow Node and select which **Knowledge Store** the Flow Node should use and click **Save Node**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/knowledge-ai/images/configure-search-extract-output.png" width="90%" />
</figure>

4. Open the Interaction Panel and type in the question "Can Cognigy connect to a Contact Center?" and send it.
5. You should get a response which was crafted based on the ingested Knowledge!

Congratulations 🔥 - you are done with our Quickstart! Go ahead and read through the other sections on this page to learn more about our Knowledge AI solution.


## Overview
Todo

## Manage Knowledge

### Knowledge Stores
Todo

- explain why we have Knowledge Stores
- explain the limitations (how many you can have right now)

### Knowledge Sources
Todo

- explain why we have Knowledge Sources
- explain meta-data
- give an overview of the different types of sources (mention CLI?)
- explain the limitations (how many sources you can have; which file formats are supported; whats coming)

### Chunk Editor
Todo

- explain what the Chunk Editor is
- explain why the Chunk Editor is so important (other solutions: black box - our solution: full transparency)
- explain meta-data

## Search, Extract & Output
Todo

- more details about the search extract output Flow Node

## FAQ

Todo - compile a list of FAQs

Q1: When will Knowledge AI be available publicly?
A1: ???

Q2: Will Knowledge AI resources be part of Snapshots?
A2: Yes, we are working on adding Knowledge Stores, Sources & Chunks including meta-data to Cognigy Snapshots.

Q3: Will Knowledge AI be free of charge? 
A3: No. We will provide pricing information until end of August.

## More information

- [LLM](../resources/build/llm.md)
- [Generative AI](../generative-ai.md)
