---
title: "Model Support by Feature"
slug: "model-support-by-feature"
description: "The Model Support by Feature table outlines the LLM providers supported by Cognigy.AI and shows the standard models along with their compatibility with Cognigy.AI features."
hidden: false
tags:
  - llms
  - model support
  - all models
  - model support by feature
---

# Model Support by Feature

[![Version badge](https://img.shields.io/badge/Updated in-v4.99-blue.svg)](../../../release-notes/4.99.md)

The table provides an overview of the LLM providers supported by Cognigy.AI, detailing the standard models and their compatibility with Cognigy.AI features.
You can also add a custom model that is not presented in the table.
To do so, select the **Custom Model** parameter when creating a model and specify both the model type and name.
For more information about adding a custom or standard model for a selected LLM provider,
refer to the [All LLM Providers](providers/all-providers.md) page.

<table>
  <col style="width: 220px;">
  <col span="12">
  <thead>
    <tr>
      <th style="width: 200px; min-width: 200px;"></th>
      <th colspan="4">Design-Time Features</th>
      <th colspan="8">Run-Time Features</th>
    </tr>
    <tr>
      <th>Models</th>
      <th>Intent Sentence Generation</th>
      <th>Flow Generation</th>
      <th>Adaptive Card Generation</th>
      <th>Lexicon Generation</th>
      <th>AI Agent Node</th>
      <th>AI Enhanced Outputs</th>
      <th>GPT Conversation Node</th>
      <th>LLM Prompt Node</th>
      <th>Answer Extraction</th>
      <th>Knowledge Search</th>
      <th>Sentiment Analysis</th>
      <th>NLU Embedding Model</th>
    </tr>
  </thead>
  <tr>
    <td><img src="../../../../_assets/icons/azure.svg" alt="azure"> <strong><a href="providers/microsoft-azure-openai.md">Microsoft Azure OpenAI</a></strong></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>gpt-3.5-turbo (ChatGPT) (<a href="https://platform.openai.com/docs/deprecations">Legacy</a>)</td>
    <td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>gpt-3.5-turbo-instruct (<a href="https://platform.openai.com/docs/deprecations">Legacy</a>)</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>gpt-4 (<a href="https://platform.openai.com/docs/deprecations">Legacy</a>)</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>gpt-4o</td>
    <td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>gpt-4o-mini</td>
    <td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>text-embedding-ada-002</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>text-embedding-3-small<sup><a href="#footnote1">1</a></sup></td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>text-embedding-3-large<sup><a href="#footnote1">1</a></sup></td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/open-ai.svg" alt="open-ai"> <strong><a href="providers/openai.md">OpenAI</a></strong></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>gpt-3.5-turbo (ChatGPT) (<a href="https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/model-retirements#current-models">Legacy</a>)</td>
    <td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>gpt-3.5-turbo-instruct (<a href="https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/model-retirements#current-models">Legacy</a>)</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>gpt-4 (<a href="https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/model-retirements#current-models">Legacy</a>)</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>gpt-4o</td>
    <td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>gpt-4o-mini</td>
    <td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>text-embedding-ada-002</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>text-embedding-3-small<sup><a href="#footnote1">1</a></sup></td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>text-embedding-3-large<sup><a href="#footnote1">1</a></sup></td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/openai-compatible.svg" alt="openai-compatible"><strong style="white-space: nowrap;"><a href="providers/openai-compatible.md">OpenAI-Compatible</a></strong></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>OpenAI-compatible LLMs</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/anthropic.svg" alt="anthropic"> <strong><a href="providers/anthropic.md">Anthropic</a></strong></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>claude-3-opus</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>claude-3-haiku</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>claude-3-sonnet</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>claude-3-5-sonnet</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>claude-3-7-sonnet</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>claude-v1-100k (<a href="https://docs.anthropic.com/claude/docs/legacy-model-guide#anthropics-legacy-models">Legacy</a>)</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>claude-instant-v1 (<a href="https://docs.anthropic.com/claude/docs/legacy-model-guide#anthropics-legacy-models">Legacy</a>)</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>anthropic.claude-3-5-sonnet-20240620-v1:0</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/google-vertex.svg" alt="google-vertex"> <strong><a href="providers/google-vertex-ai.md">Google Vertex</a></strong></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>text-bison-001 (Bard)</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/google-gemini.svg" alt="google-gemini"> <strong><a href="providers/google-gemini.md">Google Gemini</a></strong></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>gemini-1.0-pro (<a href="https://cloud.google.com/vertex-ai/generative-ai/docs/deprecations/gemini-1.0-pro">Legacy</a>)</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>gemini-1.5-flash</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>gemini-1.5-pro</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>gemini-2.0-flash</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>gemini-2.0-flash-lite</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/alephalpha.svg" alt="alephalpha"> <strong><a href="providers/aleph-alpha.md">Aleph Alpha</a></strong></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>luminous</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td>luminous-embedding-128<sup><a href="#footnote2">2</a></sup></td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/amazon-bedrock.svg" alt="amazon-bedrock"> <strong><a href="providers/amazon-bedrock.md">Amazon Bedrock</a></strong></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>amazon.nova-lite-v1:0</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>amazon.nova-pro-v1:0</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>amazon.titan-embed-text-v2:0<sup><a href="#footnote3">3</a></sup></td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html">Converse API</a>-compatible models</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td>Partially supported<sup><a href="#footnote4">4</a></sup></td>
  </tr>
    <tr>
    <td><img src="../../../../_assets/icons/mistral.svg" alt="mistral"> <strong><a href="providers/mistral.md">Mistral AI</a></strong></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
    <tr>
    <td>mistral-large-2411</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>mistral-small-2503</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>pixtral-large-2503</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td>pixtral-12b-2409</td>
    <td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"</td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/ai-logo.svg" alt="cognigy-ai-logo"> <strong><a href="../../../generative-ai.md#design-time-generative-ai-features">Cognigy.AI</a></strong></td>
    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>Platform-Provided LLM</td>
    <td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
</table>

<sup id="footnote1">1</sup> For Knowledge AI, we recommend using `text-embedding-ada-002`. However, if you want to use `text-embedding-3-small` and `text-embedding-3-large`, make sure that you familiarize yourself with the restrictions of these models in [Which Model to Choose?](../knowledge-ai/overview.md).

<sup id="footnote2">2</sup> This feature is currently in Beta, hidden behind the `FEATURE_ENABLE_ALEPH_ALPHA_EMBEDDING_LLM_WHITELIST` feature flag, and may contain issues. Only one type of embedding LLM should be used per Project. If you choose to use `luminous-embedding-128`, you must create a new Project. Once you have chosen an embedding model for a Project, you cannot switch to a different embedding model; you must use a different Project. Failing to do so will result in errors while this feature is in Beta.

<sup id="footnote3">3</sup> For Cognigy.AI 2025.10 and earlier versions, the option to select this model is hidden behind the `FEATURE_ENABLE_AWS_BEDROCK_EMBEDDING_LLM_WHITELIST` feature flag.

<sup id="footnote4">4</sup> Note that some models from the [Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html) might not support the AI Agent Node feature.

## More Information

- [Overview](overview.md)
- [All LLM Providers](providers/all-providers.md)
- [Other LLM Operations](other-operations.md)