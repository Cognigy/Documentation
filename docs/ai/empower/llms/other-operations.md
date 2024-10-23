---
title: "Other Operations"
slug: "llms-other-operations"
description: ""
hidden: false
---

# Other LLM Operations

Once you've added an LLM to Cognigy.AI, you can perform the following operations with your model:

- [Clone a Model](#clone-a-model)
- [Set a Model as Default](#set-a-model-as-default)
- [Export a Model as a Package](#export-a-model-as-a-package)
- [Delete a Model](#delete-a-model)

## Clone a Model

To create a copy of the existing model, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg).
3. Select **Clone** from the list.

The model will contain the same settings as the initial one.

## Set a Model as Default

Setting a default model ensures a smooth transition when a specific model is removed. It guarantees that there is always a model available to handle compatible use cases, even if the assigned model is removed.

To set a model as the default, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg).
3. Select **Make Default** from the list.

The setting will be applied for the selected model.

## Export a Model as a Package

To reuse a model in other agents, you can package the model.

To package a model, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg).
3. Select **Create a package**.
4. Once the package has created, a new [task](../../build/projects.md#tasks), titled **Create package**, will be run. To view the task, click ![task-menu](../../../_assets/icons/task-menu.svg) in the upper-right corner.

When the task is completed, the package will be downloaded.

## Delete a Model

Note that a [default model](#set-a-model-as-default) cannot be deleted. Before deletion, you need to remove the default tag.

To delete a model, follow these steps:

1. Go to **Build > LLM**.
2. Hover over the existing model and click ![vertical-ellipsis](../../../_assets/icons/vertical-ellipsis.svg).
3. Select **Delete**.
4. Confirm the deletion. Features relying on this model will stop working if no default model is configured to support those features.

The model will be deleted from the list.

## More Information

- [Overview](overview.md)
- [LLM Providers](providers/all-providers.md)
- [Model Support by Feature](model-support-by-feature.md)
