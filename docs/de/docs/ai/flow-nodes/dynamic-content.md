---
 title: "Dynamischer Inhalt in Nodes" 
 Slug: "Dynamischer-Inhalt" 
 ausgeblendet: false 
---
# Dynamischer Inhalt in Nodes

In den meisten Cognigy Flow Nodes können Sie das verwenden, was wir [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) nennen. In den meisten Textfeldern können Sie z. B. die CognigyScript-Notation {{ }} verwenden, um dynamische Inhalte aus den Objekten [Input]({{config.site_url}}ai/tools/interaction-panel/input/), [Context]({{config.site_url}}ai/tools/interaction-panel/context/) und [Profile]({ <span>{</span>config.site_url}<span>}</span> ai/tools/interaction-panel/profile/) einzufügen.

Unten finden Sie ein Beispiel.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/e3c8d1e-cognigyscript.jpg" width="90%" />
</figure>

Wenn der Benutzer z.B. "hi there" sagt, würde Cognigy das CognigyScript zur Laufzeit parsen und den obigen Text in "You said HI THERE" ändern.

CognigyScript ist im Wesentlichen JavaScript mit integriertem Zugriff auf unsere Eingabe-, Kontext- und Profilobjekte, sodass Sie alle Dinge tun können, die Sie in JavaScript tun können, wie z. B. die Funktion .toUpperCase() oben. Weitere Informationen finden Sie auf unserer Seite [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/).