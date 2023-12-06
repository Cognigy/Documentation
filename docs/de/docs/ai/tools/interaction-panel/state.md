---
 Titel: "Staat" 
 slug: "Zustand" 
 ausgeblendet: false 
---
# Zustand

Zustände erlauben das Festlegen von Einschränkungen für eine Konversation, die die gültigen Absichten einschränken, auf die die NLU Zugriff hat. 

Es können nur Intents erkannt werden, die der **Whitelist** des aktuellen Status der Konversation hinzugefügt wurden. Umgekehrt werden Intents, die der **Blacklist** des aktuellen Status hinzugefügt wurden, nicht erkannt.

!!! Hinweis "Beispiel für die Funktionsweise von Staaten"
    Der Admin hat drei Zustände definiert:

*anfangen
    *Ordnung
    *fertig

Der Administrator könnte nun konfigurieren, dass der Benutzer nur *"Ich möchte eine Pizza bestellen*" sagen kann, wenn er sich im "Start"-Status befindet, da dies in einem anderen Bundesstaat keinen Sinn machen würde. In ähnlicher Weise kann der Satz *"Wann kommt meine Bestellung an"* unterschiedliche Ausgaben auslösen, je nachdem, in welchem Zustand sich die Konversation befindet.