---
 title: "Trigger Intent" 
 Slug: "Trigger-Absicht" 
 ausgeblendet: false 
---
# Trigger-Absicht
## Beschreibung<div class="divider"></div>Die Funktion "Trigger Intent" ermöglicht es Ihnen, einen Intent manuell auszulösen, indem Sie "cIntent:" gefolgt vom gewünschten Intent-Namen in Ihre Texteingabe schreiben, die reguläre Intent-Zuordnung wird ignoriert.

Ab Cognigy 3.4.1 können Sie zusätzlich zusätzlichen Text für das Parsen von Schlüsselwörtern bereitstellen.

Die vollständige Syntax lautet wie folgt. Beachten Sie, dass der durch den senkrechten Strich getrennte Text optional ist, nur der fettgedruckte Text ist erforderlich. Ersetzen Sie die gewünschte Absicht und den Text, der nach Slots analysiert werden soll, in den jeweiligen Platzhaltern:

> **cIntent:Intent-Name**|Text, der für Slots analysiert werden soll

!!! Hinweis "Vollständige NLU wird nicht ausgeführt"
    Beachten Sie, dass die vollständige NLU-Logik nicht ausgeführt wird, wenn Sie die Triggerabsicht verwenden. Wenn die benannte Absicht über Standardantworten oder andere erweiterte Optionen verfügt, werden diese nicht in Kraft gesetzt. Stattdessen wird eine Flow-Eingabe immer mit dem angegebenen Intent und (optional) dem angegebenen Text und den abgeleiteten Slots generiert.

!!! Hinweis "Trigger Intent Score"
    Die Funktion "Trigger Intent" führt immer zu einem Intent-Score von 1.

## Verwendung<div class="divider"></div>Sie verwenden die Funktion "Trigger Intent", indem Sie eine Texteingabe in Ihren Flow senden, die mit "cIntent:" beginnt. Was auch immer folgt, wird deine gefundene Absicht sein. Wenn Sie möchten, dass Ihre Absicht "myIntent" genannt wird, senden Sie die Texteingabe "cIntent:myIntent" (lassen Sie kein Leerzeichen). Hier ist ein Beispiel:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/f2ba2e4-Screenshot_from_2019-09-12_15-33-12.png" width="100%" />
</figure>

Sie können zusätzlichen Text angeben, der mithilfe des Pipe-Operators nach Schlüsselwörtern analysiert wird. Hier ist ein Beispiel, das die Funktionalität veranschaulicht:<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/08f251c-Screenshot_from_2019-10-28_13-48-19.png" width="100%" />
</figure>