---
title: "LLM"
slug: "llm"
hidden: false
---
# Large Language Models (LLMs)

Large Language Models (LLMs) are powerful artificial intelligence models designed to process and generate human-like text based on the input provided. These models are trained on vast amounts of text data, allowing them to learn patterns, syntax, and semantic relationships between words and phrases. LLMs are capable of understanding and generating coherent and contextually relevant responses in natural language.

LLMs are important for Cognigy because they help Cognigy virtual agents understand and respond to user input in a natural way.

LLMs make conversations more engaging by generating relevant and contextually appropriate responses. LLMs also assist in managing dialogues and providing multilingual support, enhancing the overall conversational experience for user.


## Supported Models

In the table below, there are LLMs supported by Cognigy.

| Models/Capabilities        | Intent Sentence Generation | AI Enhanced Outputs | Lexicon Generation | Flow Generation | GPT Conversation Node | GPT Prompt Node | Generate Node Output | Knowledge Search |
|----------------------------|----------------------------|---------------------|--------------------|-----------------|-----------------------|-----------------|----------------------|------------------|
| **Microsoft Azure OpenAI** |                            |                     |                    |                 |                       |                 |                      |                  |
| gpt-3.5-turbo (ChatGPT)    | +                          | +                   | +                  | +               | -                     | +               | -                    | -                |
| text-davinci-003           | +                          | +                   | +                  | 🗸              | 🗸                    | 🗸              | 🗸                   | -                |
| text-embedding-ada-002     | -                          | -                   | -                  | -               | -                     | -               | -                    | 🗸               |
| **Open AI**                |                            |                     |                    |                 |                       |                 |                      |                  |
| gpt-3.5-turbo (ChatGPT)    | 🗸                         | 🗸                  | 🗸                 | 🗸              || 🗸                    | -               |
| text-davinci-003           | 🗸                         | 🗸                  | 🗸                 | 🗸              | 🗸                    | 🗸              | 🗸                   | -                |
| text-embedding-ada-002     | -                          | -                   | -                  | -               | -                     | -               | -                    | 🗸               |
| **Anthropic**              |                            |                     |                    |                 |                       |                 |                      |                  |
| claude-v1-100k             | -                          | -                   | -                  | -               | -                     | 🗸              | -                    | -                |
| claude-instant-v1          | -                          | -                   | -                  | -               | -                     | 🗸              | -                    | -                |

[x]


## Add a model

1. Go to Build > LLM.
2. Click +New Model
3. In the **LLM Editor** window, go to the **Generative AI Connection** field.
4. On the right side of the field, click **+**.
5. In the New Connection window, fill in the following fields:
    
    - Connection name -
    - apiKey -
    - resourceName -
    - deploymentName - 
    - apiVersion - 
6. Click **Create**.
7. To apply changes, click **Save**.

When the model is added, you will see it in the list of models.









## Add a Large Language Model

