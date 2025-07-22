---
title: "Model Support by Feature"
slug: "model-support-by-feature"
description: "The Model Support by Feature table outlines the LLM providers supported by Cognigy.AI and shows the standard models along with their compatibility with Cognigy.AI features."
hidden: false
hide:
  - toc
tags:
  - llms
  - model support
  - all models
  - model support by feature
---

# Model Support by Feature

[![Version badge](https://img.shields.io/badge/Updated in-v2025.15-blue.svg)](../../../release-notes/2025.15.md)

The table provides an overview of the LLM providers supported by Cognigy.AI, detailing the standard models and their compatibility with Cognigy.AI features.
You can also add a custom model that is not presented in the table.
To do so, select the **Custom Model** parameter when creating a model and specify both the model type and name.
For more information about adding a custom or standard model for a selected LLM provider,
refer to the [All LLM Providers](providers/all-providers.md) page.

<table>
  <colgroup>
    <col span="1">
    <col span="1">
    <col span="8">
  </colgroup>
  <thead>
    <tr>
      <th style="text-align: left;">Models</th>
      <th style="text-align: center;"><span style="white-space: nowrap;">Design-Time</span> Features<sup><a href="#footnote1">1</a></sup></th>
      <th style="text-align: center;">AI Agent Node</th>
      <th style="text-align: center;">AI Enhanced Outputs</th>
      <th style="text-align: center;">GPT Conversation Node</th>
      <th style="text-align: center;">LLM Prompt Node</th>
      <th style="text-align: center;">Answer Extraction</th>
      <th style="text-align: center;">Knowledge Search</th>
      <th style="text-align: center;">Sentiment Analysis</th>
      <th style="text-align: center;">NLU Embedding Model</th>
    </tr>
  </thead>
  <tr>
    <td><img src="../../../../_assets/icons/ai-logo.svg" alt="cognigy-ai-logo"> <strong><a href="../../generative-ai#design-time-generative-ai-features">Cognigy.AI</a></strong></td>
    <td style="text-align: center;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>Platform-Provided LLM</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/azure.svg" alt="azure"> <strong><a href="providers/microsoft-azure-openai.md">Microsoft Azure OpenAI</a></strong></td>
    <td style="text-align: center;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td><code>gpt-4.1-nano</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gpt-4.1-mini</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gpt-4.1</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>  
  <tr>
    <td><code>gpt-4o-mini</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gpt-4o</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>text-embedding-ada-002</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>text-embedding-3-small</code><sup><a href="#footnote2">2</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>text-embedding-3-large</code><sup><a href="#footnote2">2</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
    <tr>
    <td><code>gpt-4</code> (<a href="https://platform.openai.com/docs/deprecations">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gpt-3.5-turbo-instruct</code> (<a href="https://platform.openai.com/docs/deprecations">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  </tr>
    <td><code>gpt-3.5-turbo</code> (ChatGPT) (<a href="https://platform.openai.com/docs/deprecations">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/open-ai.svg" alt="open-ai"> <strong><a href="providers/openai.md">OpenAI</a></strong></td>
    <td style="text-align: center;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
    <tr>
    <td><code>gpt-4.1-nano</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gpt-4.1-mini</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gpt-4.1</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gpt-4o-mini</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gpt-4o</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>text-embedding-ada-002</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>text-embedding-3-small</code><sup><a href="#footnote2">2</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>text-embedding-3-large</code><sup><a href="#footnote2">2</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td><code>gpt-4</code> (<a href="https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/model-retirements#current-models">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td><code>gpt-3.5-turbo-instruct</code> (<a href="https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/model-retirements#current-models">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td>
  </tr>
  <tr>
    <td><code>gpt-3.5-turbo</code> (ChatGPT) (<a href="https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/model-retirements#current-models">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/openai-compatible.svg" alt="openai-compatible"><strong style="white-space: nowrap;"><a href="providers/openai-compatible.md">OpenAI-Compatible</a></strong></td>
    <td style="text-align: center;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td>OpenAI-compatible LLMs</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/anthropic.svg" alt="anthropic"> <strong><a href="providers/anthropic.md">Anthropic</a></strong></td>
    <td style="text-align: center;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  <tr>
    <td><code>claude-opus-4-0</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  </tr>
  <tr>
    <td><code>claude-sonnet-4-0</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>claude-3-7-sonnet-latest</code><sup><a href="#footnote3">3</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>claude-3-5-sonnet-latest</code><sup><a href="#footnote3">3</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>claude-3-sonnet</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>claude-3-haiku</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>claude-3-opus</code> (<a href="https://docs.anthropic.com/en/docs/about-claude/model-deprecations">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>claude-v1-100k</code> (<a href="https://docs.anthropic.com/en/docs/about-claude/model-deprecations">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
    <tr>
    <td><code>anthropic.claude-3-5-sonnet-20240620-v1:0</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>claude-instant-v1</code> (<a href="https://docs.anthropic.com/en/docs/about-claude/model-deprecations">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/google-vertex.svg" alt="google-vertex"> <strong><a href="providers/google-vertex-ai.md">Google Vertex</a></strong></td>
    <td style="text-align: center;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td><code>gemini-1.0-pro</code> (<a href="https://cloud.google.com/vertex-ai/generative-ai/docs/deprecations/gemini-1.0-pro">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/google-gemini.svg" alt="google-gemini"> <strong><a href="providers/google-gemini.md">Google Gemini</a></strong></td>
    <td style="text-align: center;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td><code>gemini-2.0-flash-lite</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gemini-2.0-flash</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gemini-1.5-flash</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gemini-1.5-pro</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>gemini-1.0-pro</code> (<a href="https://cloud.google.com/vertex-ai/generative-ai/docs/deprecations/gemini-1.0-pro">Legacy</a>)</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/alephalpha.svg" alt="alephalpha"><strong><a href="providers/aleph-alpha.md">Aleph Alpha</a></strong></td>
    <td style="text-align: center;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td><code>luminous</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>luminous-embedding-128</code><sup><a href="#footnote4">4</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/amazon-bedrock.svg" alt="amazon-bedrock"> <strong><a href="providers/amazon-bedrock.md">Amazon Bedrock</a></strong></td>
    <td style="text-align: center;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td><code>amazon.titan-embed-text-v2:0</code><sup><a href="#footnote5">5</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>amazon.nova-lite-v1:0</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>amazon.nova-pro-v1:0</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html">Converse API</a>-compatible models</td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td>Partially supported<sup><a href="#footnote6">6</a></sup></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><img src="../../../../_assets/icons/mistral.svg" alt="mistral"> <strong><a href="providers/mistral.md">Mistral AI</a></strong></td>
    <td style="text-align: center;"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
  </tr>
  <tr>
    <td><code>mistral-large-latest</code><sup><a href="#footnote3">3</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
    <tr>
    <td><code>mistral-medium-latest</code><sup><a href="#footnote3">3</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>mistral-small-latest</code><sup><a href="#footnote3">3</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>pixtral-large-latest</code><sup><a href="#footnote3">3</a></sup></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
  <tr>
    <td><code>pixtral-12b-2409</code></td>
    <td style="text-align: center;"><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/check-circle.svg" alt="positive mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td><td><img src="../../../../_assets/icons/x-mark.svg" alt="negative mark"></td>
  </tr>
</table>

<sup id="footnote1">1</sup> [Design-time features](../generative-ai.md#design-time-generative-ai-features) include Intent Sentence Generation, Flow Generation, Adaptive Card Generation, Lexicon Generation.

<sup id="footnote2">2</sup> For Knowledge AI, we recommend using `text-embedding-ada-002`. However, if you want to use `text-embedding-3-small` and `text-embedding-3-large`, make sure that you familiarize yourself with the restrictions of these models in [Which Model to Choose?](../knowledge-ai/overview.md).

<sup id="footnote3">3</sup> The `*-latest` suffix indicates that the model you select in Cognigy.AI points to the the latest version of the model. For more information, read [Anthropic's](https://docs.anthropic.com/en/docs/about-claude/models/overview) or [Mistral AI's](https://docs.mistral.ai/getting-started/models/models_overview/) models documentation.

<sup id="footnote4">4</sup> This feature is currently in Beta, hidden behind the `FEATURE_ENABLE_ALEPH_ALPHA_EMBEDDING_LLM_WHITELIST` feature flag, and may contain issues. Only one type of embedding LLM should be used per Project. If you choose to use `luminous-embedding-128`, you must create a new Project. Once you have chosen an embedding model for a Project, you cannot switch to a different embedding model; you must use a different Project. Failing to do so will result in errors while this feature is in Beta.

<sup id="footnote5">5</sup> For Cognigy.AI 2025.10 and earlier versions, the option to select this model is hidden behind the `FEATURE_ENABLE_AWS_BEDROCK_EMBEDDING_LLM_WHITELIST` feature flag.

<sup id="footnote6">6</sup> Note that some models from the [Converse API](https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html) might not support the AI Agent Node feature.

## More Information

- [Overview](overview.md)
- [All LLM Providers](providers/all-providers.md)
- [Other LLM Operations](other-operations.md)