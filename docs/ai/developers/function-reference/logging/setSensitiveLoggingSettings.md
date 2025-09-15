---
title: "setSensitiveLoggingSettings"
slug: "set-sensitive-logging-settings"
description: "setSensitiveLoggingSettings adjusts the masking and redaction configuration for the conversation."
hidden: false
tags:
  - logging
  - sensitive logging
  - setSensitiveLoggingSettings
---

# setSensitiveLoggingSettings

## Syntax

`setSensitiveLoggingSettings(settings)`

## Description

Adjusts the masking and redaction configuration for the conversation.

**Parameters:**

- `settings`: `ISensitiveLoggingSettings` — an object containing the sensitive logging settings.

??? info "ISensitiveLoggingSettings Object Structure"

    ```js
    export interface ISensitiveLoggingSettings {
        maskLogging: boolean;
        maskAnalytics: boolean;
        maskIPAddress?: boolean;
        disableConversations: boolean;
        disableIntentTrainer: boolean;
    }
    ```

**Returns:** `void`

## Example

```js
// Example: Update sensitive logging settings for the current conversation
setSensitiveLoggingSettings({
  maskLogging: true,
  maskAnalytics: false,
  disableConversations: false,
  disableIntentTrainer: true,
});
```