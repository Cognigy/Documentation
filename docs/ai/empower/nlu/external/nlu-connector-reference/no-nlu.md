---
title: "No NLU" 
slug: "no-nlu"
description: "The No NLU connector disables build-in Cognigy NLU for the selected Endpoint, meaning no Intents or Slots are detected."
hidden: false
tags:
  - No NLU
  - NLU Connectors
---

# No NLU

The _No NLU_ connector disables build-in Cognigy NLU for the selected Endpoint, meaning no Intents or Slots are detected.

The No NLU connector lets you handle the NLU process directly within your Flow logic for the following purposes:

- You need very fine-grained control over how NLU requests are made. 
- You want to dynamically switch between different NLU services based on the conversation context.

## Use Flow Logic for NLU Execution

Within a Flow, you can control NLU execution by enabling the No NLU connector and using the following Nodes:

??? info "HTTP Request Node"
    Use an [HTTP Request](../../../../build/node-reference/service/http-request.md) Node
    to send the user input to your external NLU service
    and then process the response.

??? info "Custom Nodes (Extensions)"
    You can put the HTTP request and response logic in an Extension to avoid repeating it in every Flow.
    This approach makes your Flows cleaner, easier to maintain, and avoids code duplication. 
    So that the Extension becomes your custom NLU connector on the Flow level, even though you're not using the built-in [Code NLU](code.md) connector.

??? info "Execute Cognigy NLU Node"
    By default, Cognigy.AI NLU runs before the Flow executes. However, in some cases, you may need to process parts of the Flow before triggering NLU analysis to better control when an Intent is recognized.
    To achieve this, add an [Execute Cognigy NLU](../../../../build/node-reference/ai/execute-cognigy-nlu.md) Node to your Flow to trigger Cognigy NLU when needed.

## More Information

- [All NLU Connectors](all-nlu-connectors.md)