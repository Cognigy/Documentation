---
 Titel: "Absichtsbedingungen" 
 Slug: "Bedingungen" 
 ausgeblendet: false 
---
# Intent-Bedingungen

Absichtsbedingungen ermöglichen es Ihnen, Absichten dynamisch zu deaktivieren und zu aktivieren. Die Absichtsbedingungen stellen daher einen dynamischen Zustand dar, der durch den Zustand der [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) Intent-Bedingungen definiert wird. 

## Festlegen der Absichtsbedingung für eine Absicht
Jedes Intent hat eine Zeile CognigyScript-Code, die als "true" oder "false" ausgewertet wird. Die Absicht wird nur gefunden, wenn die Bedingung als "wahr" ausgewertet wird. Wenn keine Absichtsbedingung festgelegt ist, ist die Absicht aktiviert.

Das Feld wird für jede Absicht als [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) Code festgelegt. Es hat sich bewährt, die gesamte Bedingung in einen "exists"-Operator einzuschließen:

'''js
!! (input.slots.city[0].keyphrase === "Düsseldorf")
'''

oder

'''js
!! ( !context.topics.includes("Cognigy"))
'''

Die CognigyScript-Bedingung wird zur Laufzeit ausgewertet, bevor das Intent-Modell bewertet wird. 

Es kann die angegebenen 'input'-, 'profile'- oder 'context'-Werte berücksichtigen, um Intents basierend auf den im Eingabetext oder Kontaktprofil enthaltenen Informationen zu aktivieren und zu deaktivieren.

## Zustände vs. Bedingungen
Hinweis: [States]({{config.site_url}}ai/tools/interaction-panel/state/) verwendet eine vordefinierte Liste von Intents, die basierend auf der Variablen 'input.state' aktiviert/deaktiviert werden, die natürlich auch dynamisch gesetzt werden kann. Dies bietet eine einfache Bedienung, wenn Sie eine große Anzahl von Absichten auf einmal deaktivieren möchten.

## Beispiel

Um ein Beispiel zu nennen, kümmert sich ein virtueller Agent einer Bank um Absichten im Zusammenhang mit Kreditkarten. Wenn der Kunde z.B. kein Kreditkartenprodukt hat, möchten wir nicht, dass ein "CancelCreditCard"-Intent gefunden wird.

Wir aktivieren und deaktivieren den Intent basierend auf dem "Profil" des Kunden. Nehmen wir an, es hat eine Variable 'has_credit_card', die Informationen darüber speichert, ob der Kunde das Produkt hat oder nicht, dann wäre die Absichtsbedingung:

'''js
!! (profile.has_credit_card)
'''

Infolgedessen wird die Absicht "CancelCreditCard" nur vom maschinellen Lernmodell berücksichtigt und für Kunden ausgelöst, die tatsächlich über eine Kreditkarte verfügen, die möglicherweise gekündigt werden muss.