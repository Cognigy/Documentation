---
title: "NLU Warnings" 
slug: "nlu-warnings" 
hidden: false 
---
# NLU Warnings

Cognigy.AI shows warning notifications when the system detects issues in Intent-rules, Intent-Conditions as well as generic issues while executing NLU on user-inputs. 

Warnings will only be generated and forwarded to our user interface when the Interaction Panel is used during testing.

### How it Works

1. Open the Cognigy.AI dashboard and [create a new Flow](https://support.cognigy.com/hc/en-us/articles/360014524180-Design-a-Flow-and-add-a-Message), for example, named as NLU Warnings.

    <figure>
      <img class="image-center" src="../../../../_assets/ai/empower/nlu/nlu-warnings.png" width="100%" />
    </figure>

2. Open the new Flow and select tab **NLU**
3. Create a new Intent, for example, `int1` and enter more than three example sentences. For example, `Test1`, Test2` ... `Test5`. For a proper intent scoring, it is important to define Rules and Conditions.
4. Go to the **Rules** edit field and enter. For example, `input.text=="rule"`.
5. Go to the **Conditions** edit field and enter. For example, `input.includes==="condition"`.
6. Click **Build Model** to finish the intent creation. Now user inputs can be scored of matching to the defined intent example sentences.
7. Open the Interaction Panel on the right-hand side.
8. For the scoring test, activate **Debug mode** on the **SETTINGS** tab. Activated Debug mode will show more detailed data in the Interaction Panel.

    <figure>
      <img class="image-center" src="../../../../_assets/ai/empower/nlu/expert-mode.png" width="100%" />
    </figure>

Now every user input (text message)
on the Interaction Panel will be evaluated with the defined Rules and Conditions of the created intent.
As a result,
a notification will be displayed (see image above) which indicates the intent name and the percentage rating number
(1 means 100%).

In case the rules or conditions are not defined correctly, for example, if relevant code details are missing, the NLU Warning will be displayed on the Interaction Panel for 30 seconds.

<figure>
  <img class="image-center" src="../../../../_assets/ai/empower/nlu/rules-and-conditions.PNG" width="100%" />
</figure>

Cognigy NLU Warning displayed on the Interaction Panel caused by incorrect Rule definition.
NLU Warning indication is helpful to find incorrect defined Rules and Conditions.

<figure>
  <img class="image-center" src="../../../../_assets/ai/empower/nlu/rules-and-conditions-1.png" width="70%" />
</figure>

