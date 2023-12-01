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
      <img class="image-center" src="{{config.site_url}}ai/nlu/images/e245ae6-Screen_Shot_045s.png" width="100%" />
    </figure>

2. Open the new Flow and select tab **NLU**
3. Create a new Intent, for example, `int1` and enter more than three example sentences. For example, `Test1`, Test2` ... `Test5`. For a proper intent scoring, it is important to define Rules and Conditions.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/nlu/images/b58dcf4-Screen_Shot_049.PNG" width="100%" />
    </figure>

4. Go to the **Rules** edit field and enter. For example, `input.text=="rule"`.
5. Go to the **Conditions** edit field and enter. For example, `input.includes==="condition"`.
6. Click **Build Model** to finish the intent creation. Now user inputs can be scored of matching to the defined intent example sentences.
7. Open the [Interaction Panel](https://dash.readme.com/project/cognigy/v4.3/docs/interaction-panel) on the right-hand side.
8. For the scoring test, activate **Expert Mode** in the **SETTINGS** tab. Activated Expert Mode will show more detailed data on the Interaction Panel.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/nlu/images/50a165a-Screen_Shot_052.PNG" width="100%" />
    </figure>

Now every user input (text message)
on the Interaction Panel will be evaluated with the defined Rules and Conditions of the created intent.
As a result,
a notification will be displayed (see image above) which indicates the intent name and the percentage rating number
(1 means 100%).

In case that Rules or Conditions are not defined correctly, for example, missing relevant code details,
the NLU Warning will be displayed on the Interaction Panel which is displayed for 30 seconds.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/77246aa-Screen_Shot_054.PNG" width="100%" />
</figure>

Cognigy NLU Warning displayed on Interaction Panel caused by incorrect Rule definition.
NLU Warning indication is helpful to find incorrect defined Rules and Conditions.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/11e9f1a-Screen_Shot_059.png" width="70%" />
</figure>

