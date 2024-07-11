!!! warning "Resolving Connection Errors in Microsoft Azure OpenAI LLMs"
    In recent releases, we have updated the connection settings to Azure OpenAI LLMs and added new parameters, such as the Resource Name.
    If you have an older connection (for example, created in the 4.53 release) to Azure OpenAI LLMs, especially Azure OpenAI `text-embedding-ada-002` for knowledge search features, you might encounter the following error when an LLM is triggered:
    `Error while performing knowledge search. Remote returned error: Search failed: Could not fetch embeddings due to missing API resource name for Azure OpenAI.`
    To resolve this issue, recreate the LLM and the connection so that both have the latest format.