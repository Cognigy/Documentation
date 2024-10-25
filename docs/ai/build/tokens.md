---
 title: "Tokens" 
 slug: "tokens" 
 hidden: false 
 tags:
  - Cognigy.AI
  - Token
  - Tokens
---
# Tokens

The **Tokens** feature allows **CognigyScript** expressions to be packaged into a visual **Token** to provide non-technical platform creators with access to dynamic conversation data without writing code themselves.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/tokens/example.png" width="100%" />
</figure>

## Using Tokens

The example below shows two responses that access the user's last message. Both sentences produce the same output. The first message uses a default system token, whereas the second sentence uses the coded [CognigyScript](cognigy-script.md) format.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/tokens/usage.png" width="100%" />
</figure>

Tokens can be added to a dialog message from any text field displaying the **AI** symbol.
Simply click the **AI** symbol to expand the token menu, which displays a searchable list of available tokens.
The tokens are sorted into categories based on the location of the data,
which they access i.e. [Input](../test/interaction-panel/input.md),
[Context](../test/interaction-panel/context.md), [Profile](../test/interaction-panel/profile.md) or Custom.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/tokens/selector.png" width="100%" />
</figure>

Cognigy.AI comes with a selection of default tokens that are associated with base input and profile variables.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/tokens/token-answer.svg" width="100%" />
  <figcaption>Token "Answer" used in a Say Node</figcaption>
</figure>

## Creating Tokens

You can create **Tokens** either from flow node text fields showing the **AI** symbol or from the Token Management Menu (see below). From flow nodes, click the **AI** symbol to expand the token selector menu, then click the **+** icon at the end of the search field. If you are creating a token from the *Token Management menu*, simply click the *"Create New Token"* button at the top of the interface.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/tokens/create.png" width="100%" />
</figure>

Creating a **Token** requires the following information:

  * Name - The name that will be shown on the token to platform users
  * Script - The [CognigyScript](cognigy-script.md) path used to access the data
  * Type - The data location (used for sorting the token in the search window)


!!! warning "Curly Brackets not required here!"
    Tokens will automatically apply curly brackets to your script, therefore they must be omitted from the script field when creating tokens and from text fields when using tokens.

!!! note "Create Tokens from JSON"
    You can create a Token directly from any JSON editor within Cognigy.AI. To do this, right-click the value you want to reference and select **Create Token from JSON Path** from the context menu. The **Script** field will already be pre-filled. You can also mark the value before right-clicking it, to have the Name field pre-filled with the marked text.

## Token Management Menu

The **Token Management Menu** can be found under the **Manage** section of the **Project Resources** menu. A full list of tokens that have been created in a Project is accessible to view.

<figure>
  <img class="image-center" src="../../../_assets/ai/build/tokens/page.png" width="100%" />
</figure>

A token can be deleted by resting the cursor on a token, clicking the menu icon that appears on the right end of the interface and selecting **Delete**.

!!! note "Script Persistence"
    Deleting Tokens will not remove the **CognigyScript** from the Nodes that used the Token.