---
title: "Slot Fillers"
slug: "slot-fillers"
hidden: false
---
# Slot Fillers

_Slot Fillers_ are easy-to-use tools that allow you to fill in slots with minimal effort. They can be customized to fit a specific type of slot and are automatically triggered each time the NLU is activated (usually with each user input). Slot Fillers copy any discovered slots to the Context object, which means you can fill those slots using subsequent user responses. When combined with Question Nodes, this creates a natural way of gathering information, allowing end users to provide more context.

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360020609199-Cognigy-Sessions-Question-Nodes" target="_blank" >Technical video "Question Nodes"</a>
      </div>
      <div class="callout-subtext">
      Watch this Episode of Cognigy Sessions for a technical deep dive
      </div>
   </div>
</blockquote>


**Example:**

Suppose we want to gather three pieces of information:

* **Size**
* **Email**
* **Product**

We would configure appropriate **Slot Fillers** for these pieces of information:

<figure>
  <img class="image-center" src="../../../../_assets/ai/empower/nlu/nlu-slot-filling.jpg" width="100%" />
</figure>

If we now add matching Question Nodes, we get the following Flow:

<figure>
  <img class="image-center" src="../../../../_assets/ai/empower/nlu/nlu-slot-filling-flow.jpg" width="100%" />
</figure>

Make sure to configure the Question Nodes with the "Skip if Answer exists in Context" selected, as this is where the Slot Filler results are stored.

<figure>
  <img class="image-center" src="../../../../_assets/ai/empower/nlu/nlu-slot-filling-question-node.jpg" width="100%" />
</figure>

The Flow is now ready to take different kinds of utterances and automatically ask for the missing information.

*"I would like a T-Shirt in XL"* -->**[missing email]**-->*"What is your email?"*.

*"I would like a T-Shirt in XL, and my email is max@cognigy.com"*--> **Flow completed.**
