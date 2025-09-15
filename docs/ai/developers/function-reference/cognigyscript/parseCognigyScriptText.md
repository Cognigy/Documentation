---
title: "parseCognigyScriptText"
slug: "parse-cognigy-script-text"
description: "parseCognigyScriptText parses and renders a text string containing CognigyScript expressions."
hidden: false
tags:
  - cognigyscript
  - functions
  - parseCognigyScriptText
---

# parseCognigyScriptText

## Syntax

`parseCognigyScriptText(text)`

## Description

Parses and renders a text string containing CognigyScript expressions. Each CognigyScript expression, for example, `{{"{{ cc.userName }}"}}`, is evaluated using the current execution context.

**Parameters:**

- `text`: `string` — text containing CognigyScript expressions.

**Returns:** `string` — a string with all CognigyScript expressions resolved. If an expression can't be resolved, it returns an empty string.

## Example

```js
// Assume the execution context includes:
// cc.userName = "John Doe"
// cc.city = "Berlin"

const input = "Hello {{"{{cc.userName}}"}}, welcome to {{"{{cc.city}}"}}!";
const output = parseCognigyScriptText(input);

console.log(output);
// Output: "Hello John Doe, welcome to Berlin!"
```