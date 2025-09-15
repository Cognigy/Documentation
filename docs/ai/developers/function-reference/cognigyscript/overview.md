---
title: "Overview"
slug: "cognigyscript"
description: "The CognigyScript functions are used to execute and evaluate CognigyScript expressions. You can use them to render text that contains CognigyScript or to evaluate a condition to a true or false value."
hidden: false
tags:
  - cognigyscript
  - functions
  - overview
---

# CognigyScript Functions

The _CognigyScript_ functions are used to execute and evaluate CognigyScript expressions. You can use them to render text that contains CognigyScript or to evaluate a condition to a `true` or `false` value.

## [`parseCognigyScriptText`](parseCognigyScriptText.md)

**Syntax**

`parseCognigyScriptText(text)`

Parses and renders a text string containing CognigyScript expressions. Each CognigyScript expression, for example, `{{"{{ cc.userName }}"}}`, is evaluated using the current execution context.

## [`parseCognigyScriptCondition`](parseCognigyScriptCondition.md)

**Syntax**

`parseCognigyScriptCondition(condition)`

Evaluates a CognigyScript expression and returns a `true` or `false` value.