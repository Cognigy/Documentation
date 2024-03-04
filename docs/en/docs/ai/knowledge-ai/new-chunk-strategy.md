---
title: "New Chunk Strategy"
slug: "New Chunk Strategy"
description: "Knowledge AI New Chunk Strategy"
hidden: false
---

# Knowledge AI: New Chunk Strategy

The new chunk strategy is powered by Azure AI Document Intelligence and creates semantic chunks,
resulting in more accurate answers, as compared to fixed-length chunking that is used by default.
 
The new chunk strategy has the following advantages:

- **Improved quality of responses**. Breaking down the text into blocks of meaning allows the virtual agent to more accurately understand the context and find the necessary information to formulate a response. This approach helps to enhance the quality of responses, as the virtual agent may only need to find one chunk to provide the correct answer.
- **Effective use of Markdown**. Markdown allows the virtual agent to recognize headers, tables, images, links, and differentiate them from regular text. This approach adds an additional level of context, helping the virtual agent better understand the structure and organization of information in the text.
- **Improved ability to reference the source**. Adding the page number of the source file to the metadata for each chunk can help track information source in lengthy documents.

## Supported Formats

Only files in `PDF` and `DOCX` are supported. 

## Availability

This feature is available in the following environments:

- Cognigy Trial.
- Cognigy dedicated and shared SaaS.
  Only for a limited number of customers.
  If you want to use this feature, contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
- On-premises. To use this feature, set up  Azure AI Document Intelligence connection and provide an API key. The installation instruction is provided below.

### On-Premises: Azure AI Document Intelligence Configuration 

#### Prerequisites

- Cognigy.AI 4.71 is deployed.

#### Environment Variables

The following environment variables must be specified in the `values.yaml` file to enable the feature:

- `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST`
   - This variable should be set to a comma-separate list of organization IDs for which the feature should be enabled. For example: `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST: "org1,org2,org3"`.
   - If the feature should be enabled for all organizations, the value can be set to `"*"`.
- `AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT`. The endpoint URL for the Azure AI Document Intelligence service. To copy the key, go to the Azure portal, on the left-side menu, select **Resource Management > Key and Endpoint**. Copy the key from the **Key** field. For more information, read the [Azure](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/sdk-overview-v4-0?view=doc-intel-4.0.0&tabs=csharp#use-an-azure-active-directory-azure-ad-token-credential) documentation.
- `AZURE_DOCUMENT_INTELLIGENCE_APIKEY`. Your API key for the Azure AI Document Intelligence service. To copy the key, go to the Azure portal, on the left-side menu, select **Resource Management > Key and Endpoint**. Copy the endpoint URL from the **Endpoint** field. For more information, read the [Azure](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/sdk-overview-v4-0?view=doc-intel-4.0.0&tabs=csharp#use-an-azure-active-directory-azure-ad-token-credential) documentation.

## How it Works

This strategy is applied when `.preset_ca` is appended to the file name of an uploaded file. For example, `cognigy.preset_ca.pdf`, where `cognigy` is the initial file name,
`.preset_ca` is the preset to apply the new chunk strategy, and `.pdf` is the file extension.

Extracted text is presented in Markdown format in the Chunk editor.

### Formats


#### Headers

H1:

```text
Call Tracing: Unlock New Dimensions in VUX Optimization
===
```

H2:

```text
# Visualizing the Unseen: How Call Tracing Changes the Game
```

H3:

```
## Key job role changes include:
```

#### Images

```txt
`<figure>
![](figures/0)
</figure>`
```

#### Lists

Bullet list:

```txt
- Bread
- Cheese
- Lettuce
```

Number list:

```txt
1. Gather Ingredients
2. Prepare Ingredients
3. Assemble Sandwich
4. Serve
```

#### Metadata

```txt
{
  "firstPage": "1",
  "lastPage": "2"
}
```

#### Tables

```txt
| Task | Traditional Method | Cognigy.AI with Generative AI |
| - | - | - |
| Flow/Process Building | Manual node by node creation | Write a 3-sentence description. 1 Click <5 seconds |
| Generating intent examples for NLU training | Brainstorm and manually type out 10 sentences | Describe intent in several words 1 Click <5 seconds |
| NLU Training | Train NLU based on example content | Zero-shot learning |
```

## Examples

Let's assume that we have an example in PDF. 

### Default Strategy

??? note "Default Chunk Splitting"
    1.
    ```txt
    Currently,	conversation	designers	are	in	both	a	creator	role	as	well	as	a	QA	role.	They	need	to	predict,	design,	
    and	create	conversational	experiences	while	at	the	same	time	handling	aspects	such	as	optimization,	tone	of	
    voice	and	adherence	to	other	corporate	branding	and	style	guidelines.	
    The	core	concept	of	designing	conversations	is	figuring	out	the	most	natural	and	effective	way	for	
    conversations	to	follow.	That	is	creating	the	best
    ```
    
    2.
    ```txt
    possible	conversation	a	user	can	have.		You	still	want	a	
    human	to	design	that	for	now	at	least.	However,	LLMs	can	get	designers	to	a	first	draft	in	seconds.	For	
    experienced	conversation	designers,	it	can	provide	clear	value	and	accelerate	productivity,	but	you	cannot	
    substitute	professional	design	and	expertise	with	automation.	To	use	a	metaphor,	it’s	a	way	to	do	your	
    homework	faster,	but	won’t	necessarily	guarantee	a
    ```
    
    3.
    ```txt
    better	grade.	
    Conversation Designer / 
    Bot Designer
    Here’s how Generative AI can do that today:
    Business Impact by Role
    Task Traditional Method Cognigy.AI with Generative AI
    Flow/Process Building Manual node by node creation  Write	a	3-sentence	description.	
    1 Click
    <5 seconds
    Generating intent
    examples for NLU training
    Brainstorm and manually type out 10
    sentences
    Describe	intent	in	several	words	
    1 Click
    <5 seconds
    NLU Training Train	NLU	based	on	example	content Zero-shot learning
    Building a lexicon Manually	type	out
    ```
    
    4.
    ```txt
    lexicon	terms	and	
    synonyms	or	prepare	and	upload	a	.CSV	
    file	
    1 sentence or less description
    1 Click
    <5	seconds	wait	
    Personalized Responses Write	standard	responses	with	a	few	
    slots	for	variables	that	can	be	customized	
    (names,	dates,	times)
    Select	a	single	dropdown	in	“AI-
    Enhanced	Output”	option	and	
    one click
    Response variants Manually	add	new	lines	and	type	multiple	
    variations	of	a	response	in	a	bot	flow
    1 Click
    Bot testing Manually	build	a	“playbook”
    ```
    
    5.
    ```txt
        of	specific	
    user responses and then click a button to
    automatically run them through the bot
    Create	a	flexible	“playbook”	of	user	
    responses using more dynamic
    language	(vs.	scripted)	
    In	terms	of	response	content	for	conversation	designers,	AI	will	move	towards	the	creator	role	and	humans	to	
    more	of	a	support	role,	focusing	on	prompt	engineering,	quality	assurance,	optimizations	and	the	AI	agent’s	
    adherence	to	brand	guidelines	and	style.	
    A Guide to Generative AI
    ```
    
    6.
    ```txt
     for Contact Centers
    12cognigy.com
    For	the	Head	of	Conversational	AI,	the	changes	will	be	less	impactful	compared	to	others.	Already	tasked	with	
    managing	AI	implementation	and	balancing	automation	with	human	intervention,	they	will	continue	to	focus	
    on	designing	engaging	conversation	flows,	establishing	relevant	KPIs,	and	managing	costs.	
    They	will	continue	to	oversee	the	development,	deployment,	and	continuous	improvement	of	AI-powered
    ```
    
    7.
    ```txt
    customer	service	systems,	while	ensuring	performance	and	alignment	with	organizational	CX	objectives	and	
    strategy.	However,	the	role	will	require	a	deeper	understanding	of	the	rapidly	changing	Generative	AI	and	
    Large	Language	Model	landscape.	This	includes	the	technical	differences,	strengths	and	weaknesses	of	each	
    model,	costs	and	best	practices	in	production.	Finally,	the	benefits,	costs	and	effort	required	for	custom	
    trained	models	and	their	value	for	the	company
    ```
    
    8.
    ```txt
        based	on	size,	contact	volume,	automation	potential	and	so	
    forth	will	also	land	with	the	Head	of	CAI.
    • Overseeing	the	development,	deployment,	
    and	continuous	improvement	of	AI-powered	
    customer service systems
    • Developing and implementing best practices for
    when	and	how	to	use	Generative	AI
    • Ensuring conversation designs are natural,
    engaging, and tailored to customer needs
    • Striking	the	right	balance	between	automation	
    and human intervention in customer
    interactions
    • Establishing and monitoring KPIs for
    ```
    
    9.
    ```txt
     AI systems
    in addition to traditional human-centered ones
    • Managing	costs	associated	with	AI	system	
    development,	maintenance	and	API	usages	(e.g.	
    to	OpenAI)	while	maximizing	ROI
    • Staying	up	to	date	with	advancements	in	
    Generative	AI	and	LLM	technology	and	its	
    potential in contact center operations
    Head of Conversational AI / 
    Digital Assistants
    Key job role changes include:
    While	LLMs	can	deliver	amazing	human-like	and	
    contextual	responses,	they	do	incur	additional	
    costs	per
    ```
    
    10.
    ```txt
        conversation.	Is	the	additional	cost	of	
    the	LLM	worthwhile	for	say	every	package	tracking	
    conversation?	Probably	not.	
    Food for Thought:
    Business Impact by Role
    A Guide to Generative AI for Contact Centers
    13cognigy.com
    
    ```

### New Strategy

???+ note "New Chunk Splitting"

    1.
    ```txt
    Conversation Designer / Bot Designer
    ===
    Currently, conversation designers are in both a creator role as well as a QA role. 
    They need to predict, design, and create conversational experiences while at the same time handling aspects such as optimization, 
    tone of voice and adherence to other corporate branding and style guidelines.
    The core concept of designing conversations is figuring out the most natural and effective way for conversations to follow. 
    That is creating the best possible conversation a user can have. You still want a human to design that for now at least. 
    However, LLMs can get designers to a first draft in seconds.
    For experienced conversation designers, it can provide clear value and accelerate productivity, 
    but you cannot substitute professional design and expertise with automation. 
    To use a metaphor, it's a way to do your homework faster, but won't necessarily guarantee a better grade.
    
    
    {
    "firstPage": "1",
    "lastPage": "1"
    }
    ```
    
    2.
    ```txt
    ## Here's how Generative Al can do that today:
    | Task | Traditional Method | Cognigy.AI with Generative AI |
    | - | - | - |
    | Flow/Process Building | Manual node by node creation | Write a 3-sentence description. 1 Click <5 seconds |
    | Generating intent examples for NLU training | Brainstorm and manually type out 10 sentences | Describe intent in several words 1 Click <5 seconds |
    | NLU Training | Train NLU based on example content | Zero-shot learning |
    | Building a lexicon | Manually type out lexicon terms and synonyms or prepare and upload a .CSV file | 1 sentence or less description 1 Click <5 seconds wait |
    | Personalized Responses | Write standard responses with a few slots for variables that can be customized (names, dates, times) | Select a single dropdown in "Al- Enhanced Output" option and one click |
    | Response variants | Manually add new lines and type multiple variations of a response in a bot flow | 1 Click |
    | Bot testing | Manually build a "playbook" of specific user responses and then click a button to automatically run them through the bot | Create a flexible "playbook" of user responses using more dynamic language (vs. scripted) |
    In terms of response content for conversation designers, AI will move towards the creator role and humans to more of a support role, 
    focusing on prompt engineering, quality assurance, optimizations and the Al agent's adherence to brand guidelines and style.
    Head of Conversational AI / Digital Assistants
    ===
    For the Head of Conversational AI, the changes will be less impactful compared to others.
    Already tasked with managing AI implementation and balancing automation with human intervention, they will continue to focus on designing engaging conversation flows, establishing relevant KPIs, and managing costs.
    They will continue to oversee the development, deployment, and continuous improvement of AI-powered customer service systems, while ensuring performance and alignment with organizational CX objectives and strategy. 
    However, the role will require a deeper understanding of the rapidly changing Generative AI and Large Language Model landscape. This includes the technical differences, strengths and weaknesses of each model, costs and best practices in production. Finally, the benefits, costs and effort required for custom trained models and their value for the company based on size, contact volume, automation potential and so forth will also land with the Head of CAI.
    
    {
      "firstPage": "1",
      "lastPage": "2"
    }
    ```
    
    3.
    ```txt
    ## Key job role changes include:
    · Overseeing the development, deployment, and continuous improvement of AI-powered customer service systems
    · Developing and implementing best practices for when and how to use Generative AI
    · Ensuring conversation designs are natural, engaging, and tailored to customer needs
    · Striking the right balance between automation and human intervention in customer interactions
    · Establishing and monitoring KPIs for Al systems in addition to traditional human-centered ones
    · Managing costs associated with Al system development, maintenance and API usages (e.g. to OpenAI) while maximizing ROI
    · Staying up to date with advancements in Generative AI and LLM technology and its potential in contact center operations
    <figure>
    ![](figures/0)
    </figure>
    Food for Thought:
    While LLMs can deliver amazing human-like and contextual responses, they do incur additional costs per conversation. Is the additional cost of the LLM worthwhile for say every package tracking conversation? Probably not.
    
    {
      "firstPage": "2",
      "lastPage": "2"
    }
    ```