---
 Titel: "Sprachvorschau" 
 Slug: "Sprachvorschau" 
 Ausgeblendet: Wahr 
---

# Sprachvorschau

Mit der Voice Preview-Funktion können Benutzer schnell testen, wie die Sprachausgabe klingt, ohne den gesamten Ablauf mit einem Mock-Anruf ausführen zu müssen.

Es unterstützt die Cloud SST/TTS der Anbieter Google, Microsoft und Amazon AWS.

Sobald Sie sich im Bedienfeld "Sprachvorschau" befinden, können Sie Rohtext oder SSML-Syntax eingeben. Sie können auch die Sprache und die zu verwendende Stimme auswählen. Beachten Sie, dass die von Ihnen eingeführte SSML-Syntax von dem von Ihnen ausgewählten Sprachvorschauanbieter unterstützt werden muss.

### Einrichten eines Voice Preview-Anbieters<div class="divider"></div>Sie müssen zu den Agenteneinstellungen -> Einstellungen für die Sprachvorschau navigieren. Wählen Sie dort Ihren STT/TTS-Anbieter aus und
Geben Sie Ihre Anmeldeinformationen ein.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-settings.png" width="100%" />
  <figcaption>Einstellungen für die Sprachvorschau</figcaption>
</figure>

### Sprachvorschau verwenden<div class="divider"></div>Sie können die Sprachvorschau von 3 verschiedenen Orten aus verwenden:

1 - Mit der Tastenkombination ++Strg+Alt+P++ oder ++Cmd+Opt+P++.

<figure><img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-panel.png" width="100%" /><figcaption>Bedienfeld "Sprachvorschau"</figcaption>
  
  
</figure>

2 - Klicken Sie im Flow-Editor auf das Symbol für die Sprachvorschau.
<figure><img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-icon.png" width="20%" /><figcaption>Voice-Vorschau-Symbol Flow-Editor</figcaption>
  
  
</figure><figure><img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-flow-editor.png" width="100%" /> für<figcaption>die Sprachvorschau</figcaption>
  
  
</figure>

3 - Klicken Sie auf die Schaltfläche Sprachvorschau im interaktiven Tooltip einer Nachrichtenausgabe im Interaktionsbereich. Der Ausgabetext wird in das Eingabefeld der Sprachvorschau kopiert.

!!! Hinweis "Unterstützte Ausgabe"
    Beachten Sie, dass die Schaltfläche Sprachvorschau nur für eine bestimmte Ausgabe angezeigt wird. Dazu gehören die reguläre Textausgabe, der Fallback-Text sowie die Text-/SSML-Ausgabe von Kanälen mit Sprachunterstützung.

<figure><img class="image-center" src="{{config.site_url}}ai/tools/images/voice-preview-chat-panel.png" width="100%" /><figcaption>Interaktiver Tooltip für die Sprachvorschau</figcaption>
  
  
</figure>


