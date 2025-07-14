---
title: "Assertions"
slug: "assertions"
hidden: false
description: "Assertions are validation checks that verify the AI Agent's responses and Flow behavior during Playbook testing."
tags:
  - assertions
  - testing
  - playbooks
  - validation
  - test automation
---

# Assertions

_Assertions_ are validation checks that verify the AI Agent's responses and different aspects of the Flow for each Step during a Playbook run.

## How to Use Assertions

Assertions include an input field where you can provide the text or data you want to validate during the Playbook run. All assertions are case sensitive. The text, Intent names, Slot names, and data fields that you enter in the input field must match exactly what you want to validate. Specific assertion types include an option to validate only a portion of the provided text or data:

- **Use fuzzy search** — for text assertions.
- **Use partial comparison** — for data and context assertions.

You can also invert the assertion check with the **Invert assertion** option. This option switches the assertion check to validate the absence of the defined value. Inverted assertions must also match the exact text or data provided in the assertion. You can activate both **Invert assertion** and **Use fuzzy search** to validate the absence of a portion of the provided text or data, for example, only the `"status": "active"` JSON property or the word `"error"` in the AI Agent's response.

## Assertion Types

### Text Assertion

Validates text in the AI Agent's response against the expected text or pattern provided in the input field.

| Parameter        | Type        | Description                                                                                    |
|------------------|-------------|------------------------------------------------------------------------------------------------|
| Invert assertion | Option      | Sets the assertion to validate the absence of the text or pattern provided in the input field. |
| Use fuzzy search | Option      | Allows partial matches in the AI Agent's response.                                             |
| Text             | Input field | Sets the exact text or pattern to validate.                                                    |

#### Examples

??? info "Exact Match"

    In this example, configure the assertion as follows:

    | Parameter        | Value                           |
    |------------------|---------------------------------|
    | Invert assertion | Deactivated                     |
    | Use fuzzy search | Deactivated                     |
    | Text             | `Your order has been confirmed` |

    Validates that `Your order has been confirmed` is present in the AI Agent's response.
    Fails if `We have received your order` is in the AI Agent's response.

??? info "Fuzzy Search"

    In this example, configure the assertion as follows:

    | Parameter        | Value       |
    |------------------|-------------|
    | Invert assertion | Deactivated |
    | Use fuzzy search | Activated   |
    | Text             | `"order"`   |

    Validates that `Your order has been confirmed` and `We have received your order` are in the AI Agent's response.
    Fails if `We are preparing your purchase` is in the AI Agent's response.

??? info "Inverted Assertion"

    In this example, configure the assertion as follows:

    | Parameter        | Value       |
    |------------------|-------------|
    | Invert assertion | Activated   |
    | Use fuzzy search | Activated   |
    | Text             | `"error"`   |

    Validates that the AI Agent's response doesn't include `error`, for example, `Your order will be shipped shortly`.
    Fails if the AI Agent's response includes `error`, for example, `We found an error while processing your order`.

### Data Assertion

Validates the AI Agent message's data fields and JSON structures against the data provided in the input field. If the AI Agent's response doesn't include any data fields, the Assertion checks data fields in the user input.

| Parameter              | Type        | Description                                                                                                     |
|------------------------|-------------|-----------------------------------------------------------------------------------------------------------------|
| Invert assertion       | Option      | Sets the assertion to validate the absence of the JSON structure provided in the input field or the user input. |
| Use partial comparison | Option      | Allows matches of a subset of the data structure to validate.                                                   |
| Data                   | Input field | Sets the data structure to validate in JSON format.                                                             |

#### Examples

??? info "Exact Match"

    In this example, configure the assertion as follows:

    <table>
    <thead>
    <tr>
    <th>Parameter</th>
    <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Invert assertion</td>
    <td>Deactivated</td>
    </tr>
    <tr>
    <td>Use partial comparison</td>
    <td>Deactivated</td>
    </tr>
    <tr>
    <td>Data</td>
    <td><pre><code>{
    "userId": "12345",
    "status": "active",
    "timestamp": "2024-01-01T10:00:00Z"
    }</code></pre></td>
    </tr>
    </tbody>
    </table>

    Validates only the exact JSON object provided in the input field.

??? info "Partial Comparison"

    In this example, configure the assertion as follows:

    <table>
    <thead>
    <tr>
    <th>Parameter</th>
    <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Invert assertion</td>
    <td>Deactivated</td>
    </tr>
    <tr>
    <td>Use partial comparison</td>
    <td>Activated</td>
    </tr>
    <tr>
    <td>Data</td>
    <td><pre><code>{
    "userId": "12345",
    "status": "active"
    }</code></pre></td>
    </tr>
    </tbody>
    </table>

    Validates any JSON structure that contains the JSON object provided in the input field, for example:

    ```json
    {
    "userId": "12345", // part of the provided JSON object
    "status": "active", // part of the provided JSON object
    "timestamp": "2024-01-01T10:00:00Z" // not part of the provided JSON object
    }
    ```

    Fails if the JSON structure doesn't contain the JSON object provided in the input field, for example:

    ```json
    {
    "userId": "12345", // subset of the provided JSON object
    "status": "failed", // not part of the provided JSON object
    "timestamp": "2024-01-01T10:00:00Z" // not part of the provided JSON object
    }
    ```

??? info "Inverted Assertion"

    In this example, configure the assertion as follows:

    <table>
    <thead>
    <tr>
    <th>Parameter</th>
    <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Invert assertion</td>
    <td>Activated</td>
    </tr>
    <tr>
    <td>Use partial comparison</td>
    <td>Activated</td>
    </tr>
    <tr>
    <td>Data</td>
    <td><pre><code>{
    "status": "failed"
    }</code></pre></td>
    </tr>
    </tbody>
    </table>

    Validates any JSON structure that doesn't contain the JSON object provided in the input field, for example:

    ```json
    {
    "userId": "12345",
    "status": "active", // validates if status isn't failed
    "timestamp": "2024-01-01T10:00:00Z"
    }
    ```

### Intent Assertion

Validates that the [Intent](../empower/nlu/intents/overview.md) provided in the input field has been recognized in the user input.

| Parameter        | Type        | Description                                                                           |
|------------------|-------------|---------------------------------------------------------------------------------------|
| Invert assertion | Option      | Sets the assertion to validate the absence of the Intent provided in the input field. |
| Intent           | Input field | Sets the Intent name to validate.                                                     |

#### Examples

??? info "Exact Match"

    In this example, configure the assertion as follows:

    | Parameter        | Value           |
    |------------------|-----------------|
    | Invert assertion | Deactivated     |
    | Intent           | `"greet.hello"` |

    Validates only that the `"greet.hello"` Intent has been recognized.

??? info "Inverted Match"

    In this example, configure the assertion as follows:

    | Parameter        | Value            |
    |------------------|------------------|
    | Invert assertion | Activated        |
    | Intent           | `"cancel.order"` |

    Validates that the `"cancel.order"` Intent hasn't been recognized.

### Slot Assertion

Validates that the [Slot](../empower/nlu/slots/overview.md) provided in the input field has been recognized in the user input.

| Parameter        | Type        | Description                                                                         |
|------------------|-------------|-------------------------------------------------------------------------------------|
| Invert assertion | Option      | Sets the assertion to validate the absence of the Slot provided in the input field. |
| Slot             | Input field | Sets the Slot name to validate.                                                     |

#### Examples

??? info "Exact Match"

    In this example, configure the assertion as follows:

    | Parameter        | Value       |
    |------------------|-------------|
    | Invert assertion | Deactivated |
    | Slot             | `username`  |

    Validates only that the `username` Slot has been recognized.

??? info "Inverted Assertion"

    In this example, configure the assertion as follows:

    | Parameter        | Value        |
    |------------------|--------------|
    | Invert assertion | Activated    |
    | Slot             | `password` |

    Validates that the `password` Slot hasn't been recognized.

### Context Assertion

Validates the data in the [Context object](../build/ai-agent-memory/context.md) against the data provided in the input field.

| Parameter              | Type        | Description                                                                                |
|------------------------|-------------|--------------------------------------------------------------------------------------------|
| Invert assertion       | Option      | Sets the assertion to validate the absence of the context data provided in the input field |
| Use partial comparison | Option      | Allows matches of a subset of the context data to validate.                                |
| Context data           | Input field | Sets the context data to validate in JSON format.                                          |

#### Examples

??? info "Exact Match"

    In this example, configure the assertion as follows:

    <table>
    <thead>
    <tr>
    <th>Parameter</th>
    <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Invert assertion</td>
    <td>Deactivated</td>
    </tr>
    <tr>
    <td>Use partial comparison</td>
    <td>Deactivated</td>
    </tr>
    <tr>
    <td>Context data</td>
    <td><pre><code>{
    "authenticated": true,
    "userRole": "premium",
    "sessionId": "abc123"
    }</code></pre></td>
    </tr>
    </tbody>
    </table>

    Validates only the exact JSON object provided in the input field.

??? info "Partial Match"

    In this example, configure the assertion as follows:

    <table>
    <thead>
    <tr>
    <th>Parameter</th>
    <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Invert assertion</td>
    <td>Deactivated</td>
    </tr>
    <tr>
    <td>Use partial comparison</td>
    <td>Activated</td>
    </tr>
    <tr>
    <td>Context data</td>
    <td><pre><code>{
    "hasCreditCard": true,
    "activeCreditCard": true
    }</code></pre></td>
    </tr>
    </tbody>
    </table>

    Validates any context data that contains the JSON object provided in the input field, for example:

    ```json
    {
    "hasCreditCard": true, // part of the provided JSON object
    "activeCreditCard": true, // part of the provided JSON object
    "sessionId": "abc123" // not part of the provided JSON object
    }
    ```

    Fails if the JSON structure doesn't contain the JSON object provided in the input field, for example:

    ```json
    {
    "hasCreditCard": true, // subset of the provided JSON object
    "activeCreditCard": false, // not part of the provided JSON object
    "sessionId": "abc123" // not part of the provided JSON object
    }
    ```

??? info "Inverted Assertion"

    In this example, configure the assertion as follows:

    <table>
    <thead>
    <tr>
    <th>Parameter</th>
    <th>Value</th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Invert assertion</td>
    <td>Activated</td>
    </tr>
    <tr>
    <td>Use partial comparison</td>
    <td>Activated</td>
    </tr>
    <tr>
    <td>Context data</td>
    <td><pre><code>{
    "activeCreditCard": false
    }</code></pre></td>
    </tr>
    </tbody>
    </table>
    
    Validates any JSON structure that doesn't contain the JSON object provided in the input field, for example:

    ```json
    {
    "hasCreditCard": true,
    "activeCreditCard": true, // validates if activeCreditCard isn't false
    "creditCardNumber": "1234567890"
    }
    ```

### State Assertion

Validates the conversation state.

| Parameter        | Type        | Description                                                                          |
|------------------|-------------|--------------------------------------------------------------------------------------|
| Invert assertion | Option      | Sets the assertion to validate the absence of the State provided in the input field. |
| State            | Input field | Sets the State name to validate.                                                     |

#### Examples

??? info "Exact Match"

    In this example, configure the assertion as follows:

    | Parameter        | Value               |
    |------------------|---------------------|
    | Invert assertion | Deactivated         |
    | State            | `waiting_for_input` |

    Validates only that the `waiting_for_input` State is active.

??? info "Inverted Assertion"

    In this example, configure the assertion as follows:

    | Parameter        | Value         |
    |------------------|---------------|
    | Invert assertion | Activated     |
    | State            | `error_state` |

    Validates only that the `error_state` State isn't active.

## Best Practices

For testing best practices, see [Best Practices: Testing your Virtual Agents with Playbooks](https://support.cognigy.com/hc/en-us/articles/9585431937948-Best-Practices-Testing-your-Virtual-Agents-with-Playbooks#7-regression-test-nlu-models-0-6).

## More Information

- [Slots](../empower/nlu/slots/overview.md)
- [Intents](../empower/nlu/intents/overview.md)