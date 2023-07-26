---
 title: "Tokens" 
 slug: "tokens" 
 hidden: false 
---
# Tokens

The **Tokens** feature allows **CognigyScript** expressions to be packaged into a visual **Token** to provide non-technical platform creators with access to dynamic conversation data without writing code themselves.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/10ad17a-TokensNode.PNG" width="100%" />
</figure>

## Using Tokens

The example below shows two responses that access the user's last message. Both sentences produce the same output. The first message uses a default system token whereas the second sentence uses the coded [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) format.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/deb1830-TokenExample.PNG" width="100%" />
</figure>

Tokens can be added to a dialog message from any text field displaying the **AI** symbol. Simply click the **AI** symbol to expand the tokens menu which displays a searchable list of available tokens. The tokens are sorted into categories based on the location of the data which they access i.e. [Input]({{config.site_url}}ai/tools/interaction-panel/input/), [Context]({{config.site_url}}ai/tools/interaction-panel/context/), [Profile]({{config.site_url}}ai/flow-nodes/profile/profile/) or Custom.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/f00f6f8-createTokenNode.PNG" width="100%" />
</figure>

Cognigy.AI comes with a selection of default tokens that are associated with base input and profile variables.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/bc8e21d-Token_Answer_Snippet_6.svg" width="100%" />
  <figcaption>Token "Answer" used in a Say Node</figcaption>
</figure>

## Creating Tokens

You can create **Tokens** either from flow node text fields showing the **AI** symbol or from the Token Management Menu (see below). From flow nodes, click the **AI** symbol to expand the token selector menu, then click the **+** icon at the end of the search field. If you are creating a token from the *Token Management menu*, simply click the *"Create New Token"* button at the top of the interface.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/987e80f-createnewtoken.PNG" width="100%" />
</figure>

Creating a **Token** requires the following information:

  * Name - The name that will be shown on the token to platform users
  * Script - The [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) path used to access the data
  * Type - The data location (used for sorting the token in the search window)


!!! warning "Curly Brackets not required here!"
    Tokens will automatically apply curly brackets to your script, therefore they must be omitted from the script field when creating tokens and from text fields when using tokens.

!!! note "Create Tokens from JSON"
    You can create a Token directly from any JSON editor within Cognigy.AI. To do this, right-click the value you want to reference and select **Create Token from JSON Path** from the context menu. The **Script** field will already be pre-filled. You can also mark the value before right-clicking it, to have the Name field pre-filled with the marked text.

## Token Management Menu

The **Token Management Menu** can be found under the *Manage* section of the *Agent Resources* menu. A full list of tokens that have been created in an Agent is accessible to view.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/5970d92-tokensMenu.PNG" width="100%" />
</figure>

A token can be deleted by resting the cursor on a token, clicking the menu icon that appears on the right end of the interface and selecting *Delete.*

!!! note "Script Persistence"
    Deleting Tokens will not remove the **CognigyScript** from the Nodes that used the Token.