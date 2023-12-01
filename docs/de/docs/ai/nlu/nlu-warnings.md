---
Titel: "NLU-Warnungen" 
Schnecke: "NLU-Warnungen" 
ausgeblendet: false 
---
# NLU-Warnungen

Cognigy.AI zeigt Warnmeldungen an, wenn das System beim Ausführen von NLU für Benutzereingaben Probleme in Intent-Regeln, Intent-Conditions sowie generische Probleme erkennt. 

Warnungen werden nur generiert und an unsere Benutzeroberfläche weitergeleitet, wenn das Interaction Panel während des Tests verwendet wird.

### So funktioniert's

1. Öffnen Sie das Cognigy.AI-Dashboard und [erstellen Sie einen neuen Flow](https://support.cognigy.com/hc/en-us/articles/360014524180-Design-a-Flow-and-add-a-Message), z. B. mit dem Namen NLU-Warnungen.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/nlu/images/e245ae6-Screen_Shot_045s.png" width="100%" />
    </figure>

2. Öffnen Sie den neuen Flow und wählen Sie die Registerkarte **NLU**
3. Erstellen Sie ein neues Intent, z. B. 'int1', und geben Sie mehr als drei Beispielsätze ein. Beispiel: 'Test1', Test2' ... 'Test5'. Für eine ordnungsgemäße Absichtsbewertung ist es wichtig, Regeln und Bedingungen zu definieren.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/nlu/images/b58dcf4-Screen_Shot_049.PNG" width="100%" />
    </figure>

4. Gehen Sie zum Bearbeitungsfeld **Regeln** und geben Sie ein. Beispiel: 'input.text=="rule"'.
5. Gehen Sie zum Bearbeitungsfeld **Bedingungen** und geben Sie ein. Beispiel: 'input.includes==="condition"'.
6. Klicken Sie auf **Modell erstellen**, um die Absichtserstellung abzuschließen. Jetzt können Benutzereingaben auf Übereinstimmung mit den definierten Intent-Beispielsätzen bewertet werden.
7. Öffnen Sie das [Interaktionsfenster](https://dash.readme.com/project/cognigy/v4.3/docs/interaction-panel) auf der rechten Seite.
8. Aktivieren Sie für den Scoring-Test den **Expertenmodus** auf der Registerkarte **EINSTELLUNGEN**. Wenn der Expertenmodus aktiviert ist, werden detailliertere Daten im Interaktionsbereich angezeigt.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/nlu/images/50a165a-Screen_Shot_052.PNG" width="100%" />
    </figure>

Jetzt wird jede Benutzereingabe (SMS)
auf dem Interaktions-Panel werden mit den definierten Regeln und Bedingungen des erstellten Intent ausgewertet.
Infolgedessen ist die
Es wird eine Benachrichtigung angezeigt (siehe Bild oben), die den Namen der Absicht und die prozentuale Bewertungszahl angibt
(1 bedeutet 100%).

Für den Fall, dass Regeln oder Bedingungen nicht korrekt definiert sind, z. B. wenn relevante Codedetails fehlen,
Die NLU-Warnung wird im Interaktionsbereich angezeigt, der 30 Sekunden lang angezeigt wird.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/77246aa-Screen_Shot_054.PNG" width="100%" />
</figure>

Cognigy NLU-Warnung wird im Interaktionsbereich angezeigt, die durch eine falsche Regeldefinition verursacht wird.
Die NLU-Warnung ist hilfreich, um falsch definierte Regeln und Bedingungen zu finden.<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/11e9f1a-Screen_Shot_059.png" width="70%" />
</figure>

