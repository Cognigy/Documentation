---
title: "Logic Nodes" 
slug: "logic" 
hidden: false 
---

# Logic

Logic Nodes allow you to customize your Flow's behavior. You can use them to control which parts of the Flow should run based on conditions or integrate with other Flows.

<div class="grid cards" style="text-align: center;" markdown>

-   :material-plus-circle:{ .lg .middle } __[Add To Context](add-to-context.md)__

    ---

    Use the Add To Context Node to store information in the [Context](../../../test/interaction-panel/context.md) object and use this information throughout the session.

-   :material-play:{ .lg .middle } __[Execute Flow](execute-flow.md)__

    ---

    Use the Execute Flow Node to execute another Flow and return to the initial Flow afterward.

-   :material-arrow-right:{ .lg .middle } __[Go To](go-to.md)__

    ---

    Use the Go To Node to switch between Flows or between Nodes.

-   :material-code-greater-than:{ .lg .middle } __[If](if.md)__

    ---

    The If Node evaluates a condition statement and triggers either the Then or Else child Nodes.

-   :material-timer:{ .lg .middle } __[Interval](interval.md)__

    ---

    Use the Interval Node to add a minimal interval before other Nodes are executed.

-   :material-directions-fork:{ .lg .middle } __[Lookup](lookup.md)__

    ---

    The Lookup Node acts as a switch between different options. Based on the input value, the Node executes one of the options.

-   :material-numeric-1-circle:{ .lg .middle } __[Once](once.md)__

    ---

    Once Nodes limit the Flow execution after them to once per session, for example, for greetings or database requests.

-   :material-minus-circle:{ .lg .middle } __[Remove From Context](remove-from-context.md)__

    ---

    The Remove From Context Node removes information from the [Context](../../../test/interaction-panel/context.md) object.

-   :material-state-machine:{ .lg .middle } __[Set State](set-state.md)__

    ---

    The Set State Node changes the Flow's [State](../../../test/interaction-panel/state.md).

-   :material-refresh:{ .lg .middle } __[Reset State](reset-state.md)__

    ---

    The Reset State Node resets the Flow's [State](../../../test/interaction-panel/state.md).

-   :material-sleep:{ .lg .middle } __[Sleep](sleep.md)__

    ---

    The Sleep Node pauses the Flow execution for a period you define.

-   :material-stop-circle:{ .lg .middle } __[Stop and Return](stop-and-return.md)__

    ---

    The Stop and Return Node stops the Flow execution and returns to the Start Node.

-   :material-translate:{ .lg .middle } __[Switch Locale](switch-locale.md)__

    ---

    The Switch Locale Node changes [Locales](../../translation-and-localization/localization.md) during a conversation, for example, based on language detection or user region.

-   :material-thought-bubble:{ .lg .middle } __[Think](think.md)__

    ---

    Use the Think Node to inject a text into the Start Node, for example, to restart the Flow, with specific data, text, or Intent.

-   :material-message-reply:{ .lg .middle } __[Wait for Input](wait-for-input.md)__

    ---

    The Wait for Input Node halts the Flow execution until the user input is received.

</div>