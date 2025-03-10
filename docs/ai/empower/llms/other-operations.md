---
title: "Other Operations"
slug: "other-llm-operations"
description: "Once you've added an LLM to Cognigy.AI, you can perform the following operations with your model: clone, set as default, export, or delete. "
hidden: false
tags:
  - llm
  - delete llm
  - clone llm
  - default llm
  - export llm
---

# Other LLM Operations

Once you've added an LLM to Cognigy.AI, you can perform the following operations with your model:

??? info "Clone a Model"

    === "GUI"
         To create a copy of the existing model, follow these steps:
    
         1. Go to **Build > LLM**.
         2. Hover over the existing model and click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg).
         3. Select **Clone** from the list.
    
         The model will contain the same settings as the initial one.
   
    === "API"
         To create a copy of the existing model, use the [Cognigy.AI API POST /v2.0/largelanguagemodels/{largeLanguageModelId}/clone](https://api-trial.cognigy.ai/openapi#post-/v2.0/largelanguagemodels/-largeLanguageModelId-/clone) request.

??? info "Set a Model as Default"

    Setting a default model ensures a smooth transition when a specific model is removed. It guarantees that there is always a model available to handle compatible use cases, even if the assigned model is removed.

    === "GUI"

        To set a model as the default, follow these steps:
    
        1. Go to **Build > LLM**.
        2. Hover over the existing model and click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg).
        3. Select **Make Default** from the list.
    
        The setting will be applied for the selected model.
       
    === "API"
        To set a model as the default, use the `"isDefault": true` parameter in the [Cognigy.AI API PATCH /v2.0/largelanguagemodels/{largeLanguageModelId}](https://api-trial.cognigy.ai/openapi#patch-/v2.0/largelanguagemodels/-largeLanguageModelId-) request. 

??? info "Export a Model as a Package"

    To reuse a model in other Projects, package the model.

    To package a model, follow these steps:

    1. Go to **Build > LLM**.
    2. Hover over the existing model and click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg).
    3. Select **Create a package**.
    4. Once the package has created, a new [task](../../build/projects.md#tasks), titled **Create package**, will be run. To view the task, click ![task-menu](../../../_assets/icons/task-menu.svg) in the upper-right corner.

    When the task is completed, you can download the Package in the Task Panel.
    To ensure the model works correctly in a different Project, export its [connection](../../build/connections.md) as a Package.

??? info "Delete a Model"

    Note that a [default model](#set-a-model-as-default) cannot be deleted. Before deletion, you need to remove the default tag.

    === "GUI"
        To delete a model, follow these steps:
    
        1. Go to **Build > LLM**.
        2. Hover over the existing model and click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg).
        3. Select **Delete**.
        4. Confirm the deletion. Features relying on this model will stop working if no default model is configured to support those features.
    
        The model will be deleted from the list.
    === "API"
        To delete a model, use the [Cognigy.AI API DELETE /v2.0/largelanguagemodels/{largeLanguageModelId}](https://api-trial.cognigy.ai/openapi#delete-/v2.0/largelanguagemodels/-largeLanguageModelId-).

## More Information

- [Overview](overview.md)
- [LLM Providers](providers/all-providers.md)
- [Model Support by Feature](model-support-by-feature.md)
