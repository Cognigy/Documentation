---
 Titel: "Alle Slots" 
 Slug: "beliebige-Slots" 
 ausgeblendet: false 
---
# Beliebige Slots

Any Slots*** sind Catch-All-Platzhalter-Slots, die es Ihnen ermöglichen, Schlüsselphrasen beliebiger Länge außerhalb Ihrer Lexika abzugleichen. Wenn die Benutzereingabe genau mit dem Platzhalter-Slot übereinstimmt, wird ein [Cognigy Slot]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) mit dem übereinstimmenden Inhalt gefüllt. Das Ergebnis ist dasselbe, als ob die übereinstimmende Benutzereingabe einem angehängten Lexikon als Schlüsselphrase hinzugefügt worden wäre.

Um einen beliebigen Slot hinzuzufügen, kommentieren Sie einfach ein einzelnes Wort in Ihrem Beispielsatz und wählen Sie den Typ "Any-Slot" aus. Geben Sie dann den gewünschten Slot-Namen ein.

Ein Beispielsatz mit ***Any Slot*** "movie_title" wie z.B. ...

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/d68399d-Screenshot_2021-01-14_at_17.51.31.png" width="60%" />
</figure>

... fügt dynamisch Benutzereingaben hinzu, die genau dem Slot *movie_title* entsprechen:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_gonewiththewind.png" width="60%" />
</figure>

Alle Eingabeinhalte, die genau dem Muster eines *Any Slot* in Ihren Beispielsätzen entsprechen, werden als neuer Cognigy Slot aufgefüllt. Das Ergebnis ist dasselbe, als ob Sie ein Lexikon mit dem Tag Ihres Platzhalters *Any Slot* und einer Schlüsselphrase gefüllt hätten, die mit der übereinstimmenden Benutzereingabe identisch ist.

!!! Hinweis "Einschränkungen"
    - Funktioniert am besten, wenn nur ein einziges Wort mit Anmerkungen versehen ist
    - Bis zu 4 verschiedene *Any Slots* pro Satz
    - Bis zu 500 Beispielsätze mit *Any Slots* pro Flow
    - Beispielsätze mit *Any Slots* müssen weniger als 400 Zeichen lang sein
    - Alle Slot-Muster werden exakt übereinstimmend interpretiert und lösen immer eine Punktzahl von 1 für die Absicht aus. Lexikon-Synonyme oder [Annotationen]({{config.site_url}}ai/nlu/nlu-overview/annotations/) werden zum Zwecke des Abgleichs synonym behandelt.

## Beispiele

### Beliebiger Slot am Ende eines Satzes

Betrachten Sie das folgende Beispiel:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_thisisanorange.png" width="60%" />
</figure>

Dadurch wird dynamisch eine Benutzereingabe hinzugefügt, die genau dem Slot *fruit* entspricht:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisanapple.png" width="60%" />
</figure>

Beachten Sie, dass, da sich die Anmerkung *Any Slot* ganz am Ende des Trainingssatzes befindet, eine beliebige Anzahl von Wörtern nach *"This is a"* mit dem Slot *fruit* abgeglichen wird:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisanappletree.png" width="60%" />
</figure>

Dies ist beabsichtigt und scheint für dieses spezielle Beispiel nicht sinnvoll zu sein. Betrachten Sie jedoch das obige Beispiel mit dem Satz *"Wer ist der Regisseur von Titanic"*, bei dem *Any Slot* mit jedem Filmtitel abgeglichen wird, auch mit Titeln, die Leerzeichen enthalten.

### Beliebiger Slot in der Mitte eines Satzes

Lassen Sie uns das oben entdeckte Problem "beheben", indem wir den Beispielsatz ein wenig anpassen:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_thisisanorangetree.png" width="60%" />
</figure>

Wir haben die Annotation *Any Slot* in der Mitte eines Satzes platziert. Nun wird das Wort eines Eingabesatzes, der genau die Struktur des Trainingssatzes hat, dem Slot *fruit* zugeordnet:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisanappletree2.png" width="60%" />
</figure>

Abgesehen von grammatikalischen Problemen funktioniert auch die Verwendung mehrerer Wörter:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisankiwifruittree.png" width="60%" />
</figure>

### Beliebiger Slot in Kombination mit Lexicon Slot

Bei der Verwendung von *Any Slots* verlassen wir uns darauf, dass der Benutzer die genaue Wortstruktur dieses Satzes verwendet. Um ziemlich flexibel zu bleiben, was der Benutzer sagen kann, damit der *Any Slot* immer noch erkannt wird, können wir einen *Lexicon Slot* verwenden.

Kommentieren wir den Beispielsatz aus dem vorherigen Beispiel mit einem *Lexicon Slot*:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_lexiconannotated.png" width="60%" />
</figure>

Denken Sie daran, dass wir auch ein Lexikon erstellen und an den Fluss anhängen müssen, um *Lexikon-Slots* kommentieren zu können:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_lexicon.png" width="60%" />
</figure>

Wie in den folgenden Beispielen zu sehen ist, hat der Benutzer mehr Flexibilität bei der Formulierung des Satzes:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisanorangejuice.png" width="60%" />
</figure>

Abgesehen von grammatikalischen Problemen funktioniert es auch, ganz andere Wörter als aus dem Trainingssatz zu verwenden:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_thisisanpinapplehouse.png" width="60%" />
</figure>

### Interpunktion

*Alle Slots* sind unempfindlich gegen Interpunktion. Das bedeutet, dass zusätzliche oder unerwartete Interpunktion im Eingabesatz keinen Einfluss auf die *Any Slot*-Zuordnung hat.

Sehen Sie sich die folgende Eingabe mit dem gleichen Trainingssatz wie in den vorherigen Beispielen an:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_punctuation.png" width="60%" />
</figure>

### Alle Slots aus früheren Eingaben

*Alle Slots*, die in früheren Sätzen gefunden wurden, werden auf das Eingabeobjekt des aktuellen Satzes angewendet, wenn dieser Satz diese Slots enthält. Dazu muss der Satz nicht mit einer Absicht oder einem Trainingssatz übereinstimmen. Dies ermöglicht einen leichteren Gesprächsfluss, falls ein Thema aus einem früheren Teil des Gesprächs in einem späteren Teil des Gesprächs wieder auftaucht.

Betrachten wir die folgenden Trainingssätze.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_past_slots.png" width="60%" />
</figure>

Im Folgenden werden in den ersten beiden Eingängen die beiden entsprechenden *Any Slots* vom Agenten erkannt. Die dritte Eingabe enthält kein Wort, das einem Slot zugeordnet werden soll. An dieser Stelle kann man sich vorstellen, dass das Gespräch beliebig lang ist, bis das Thema Äpfel und Schmackhaftigkeit wieder aufkommt.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/result_follow_up.png" width="60%" />
</figure>

## Bekannte Probleme
Es gibt einige Grenzfälle für den *Any Slot*-Abgleich, in denen scheinbar seltsame Verhaltensweisen auftreten, die mit der Implementierung zusammenhängen. Diese Grenzfälle sind hier der Vollständigkeit halber aufgeführt, sollten aber in der Praxis nicht von Belang sein. 

### 1. Keine Leerzeichen in der Eingabe

Ein Eingabesatz ohne Leerzeichen wird zugeordnet.

<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/result_anyslotwithoutspaces.png" width="60%" />
</figure>

### 2. Übermäßige Interpunktion

Übermäßige Interpunktion kann zu Problemen bei der Wortzuordnung führen.

<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/result_excessivepunctuation.png" width="60%" />
</figure>

### 3. Widersprüchliche Trainingssätze 

Widersprüchliche Trainingssätze können zu unerwünschten Ergebnissen führen. Beachten Sie den gleichen Anfang beider Trainingssätze unten. Die Anmerkung "Any Slot" im zweiten Satz überschreibt die des ersten Satzes.

<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_conflicts.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/anyslot_result_conflicts.png" width="60%" />
</figure>

Beachten Sie, dass dies auch passieren kann, wenn beliebige Steckplätze in Kombination mit Lexikon-Steckplätzen, Systemsteckplätzen oder anderen beliebigen Steckplätzen verwendet werden. Wenn Sie beabsichtigen, den Slot-Abgleich in Ihrem Agenten übermäßig zu nutzen, müssen Sie besonders darauf achten, dass mehrere kommentierte Trainingssätze mit derselben oder mehreren Absichten nicht miteinander in Konflikt geraten.

Dieses Verhalten kann angepasst werden, indem der Abgleich eines beliebigen Steckplatzes auf Systemebene für Kunden konfiguriert wird, die Cognigy On-Premises verwenden. Neben der Standardoption stehen zwei zusätzliche Optionen zur Verfügung:

| <nobr>Beliebige Slot-Rückgabe-Modi</nobr> | Beschreibung |
|-|-|
| Vorgabe | Das obige Verhalten tritt auf |
| Alle | Alle möglichen Any Slot-Matches werden zurückgegeben. Im obigen Beispiel ist das sowohl "Frucht" als auch "car_brand". |
| Exakt | Alle Slot-Übereinstimmungen, deren Satzstrukturen genau mit der Struktur des Eingabesatzes übereinstimmen, werden zurückgegeben. Im obigen Beispiel ist das nur "Frucht". |

### 4. Führende und nachfolgende Leerzeichen

Sie sollten besonders darauf achten, führende und nachfolgende Leerzeichen in beliebigen Slot-Anmerkungen zu vermeiden. Sie können sich schnell mit einem Rutsch der Maus einschleichen und unerwünschte Slot-Mapping-Ergebnisse verursachen. 

<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/4_in.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/4_out.png" width="60%" />
</figure>

### 5. Fortlaufende beliebige Slot-Anmerkungen

Die Verwendung mehrerer beliebiger Slot-Anmerkungen direkt hintereinander kann zu Problemen führen. Stellen Sie sicher, dass Sie mindestens ein Wort oder Zeichen zwischen zwei aufeinanderfolgenden Any Slot-Anmerkungen einfügen.

Folgendes funktioniert nicht wie erwartet:

<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/5_wrong_in.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/5_wrong_out.png" width="60%" />
</figure>

Folgendes funktioniert:

<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/5_right_in.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/5_right_out.png" width="60%" />
</figure>

### 6. Mehrere Wörter als beliebige Slot-Anmerkungen

Die Verwendung mehrerer Wörter in beliebigen Slot-Anmerkungen kann zu unerwünschten Ergebnissen führen. Jeder Slot-Abgleich funktioniert am besten, wenn Anmerkungen verwendet werden, die nur ein einzelnes Wort enthalten. Denken Sie daran, dass dies Sie nicht bei der Erkennung von Mehrwort-Slots einschränkt. Es ist eher umgekehrt: Anmerkungen von beliebigen Slots mit mehreren Wörtern schränken Sie daran ein, einzelne Wort-Slots zu erkennen.

Falsch:
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/6_wrong_in.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/6_wrong_out.png" width="60%" />
</figure>

Rechts:<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/5_right_in.png" width="60%" />
</figure>
<figure>
<img class="image-center" src="{{config.site_url}}ai/nlu/images/5_right_out.png" width="60%" />
</figure>
