---
title: "getLLMTokenUsageForSession"
slug: "getLLMTokenUsageForSession"
description: "getLLMTokenUsageForSession retrieves the token usage information for the current session."
hidden: false
tags:
  - llm token usage
  - getLLMTokenUsageForSession
  - logging
---

# getLLMTokenUsageForSession

## Syntax

`getLLMTokenUsageForSession()`

## Description

Retrieves the token usage information for the current session.

**Returns:** `TSessionUsageInformation | null` — the number of input and output tokens used, or `null` if the data is unavailable.

??? info "TSessionUsageInformation object" 

    ```js
    type TSessionUsageInformation = {
        [key: string]: {
            llmDisplayName: string;
            providerType: string;
            modelType: string;
            usage: {
                inputTokens: number;
                outputTokens: number;
            }
        }
    };
    ```

## Example

```js
const usage = getLLMTokenUsageForSession();

if (usage) {
  Object.entries(usage).forEach(([key, info]) => {
    console.log(`Model: ${info.llmDisplayName}`);
    console.log(`Provider: ${info.providerType}`);
    console.log(`Type: ${info.modelType}`);
    console.log(`Input tokens: ${info.usage.inputTokens}`);
    console.log(`Output tokens: ${info.usage.outputTokens}`);
    console.log('---');
  });
} else {
  console.log('Token usage data not available for this session.');
}
```