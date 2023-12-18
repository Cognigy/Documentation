---
 Titel: "Intent-Mapping-Priorität" 
 slug: "Intent-Mapping-Priorität" 
 ausgeblendet: false 
---

# Intent-Mapping-Priorität

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.43-blue.svg)] (.. /.. /.. /release-notes/4.43.md)

Diese Funktion hilft, Mehrdeutigkeiten zwischen übergeordneten und untergeordneten Absichten zu vermeiden. Die Mehrdeutigkeit kann auftreten, wenn die Benutzereingabe eine Kombination aus übergeordneten und untergeordneten Intent-Sätzen enthält.

Mit **Intent-Mapping-Priorität** wählen Sie aus, ob Sie die aktuelle Absicht oder ihre untergeordneten Absichten priorisieren möchten. Indem Sie bestimmten Absichten Priorität einräumen, können Sie beeinflussen, ob die übergeordneten oder untergeordneten Absichten mit größerer Wahrscheinlichkeit zugeordnet werden. 

Es wird empfohlen, ganze Sätze zu verwenden, wenn Sie Beispiele für Absichten generieren. Dieser Ansatz führt zu genaueren Ergebnissen während des Mapping-Prozesses. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/nlu/images/intents/intent-mapping-priority.png" width="80%" />
</figure>

## Wie man es einrichtet

Um eine Priorität festzulegen, führen Sie die folgenden Schritte aus:

1. Öffnen Sie einen Flow oder erstellen Sie einen neuen.
2. Wählen Sie in der oberen rechten Ecke der Seite **Flow-Editor** die Option **NLU** aus.
3. Klicken Sie auf der Registerkarte **Absicht** auf **Absicht erstellen**.
4. Geben Sie einen eindeutigen Namen für den Intent an und klicken Sie auf **Speichern**.
5. Öffnen Sie den erstellten Intent und füllen Sie die erforderlichen Felder aus.
6. Wählen Sie im Feld **Intent-Mapping-Priorität** eine der folgenden Optionen aus:
    - **Diese Absicht priorisieren**: Legen Sie eine Priorität für die aktuelle übergeordnete Absicht fest. Standardmäßig ist diese Option eingerichtet.
    - **Untergeordnete Absichten priorisieren** – Legen Sie eine Priorität für untergeordnete Absichten fest.
7. Speichern Sie die Änderungen, und klicken Sie auf **Modell erstellen**. Erstellen Sie jedes Mal ein Modell, wenn Sie Einstellungen ändern möchten.
 
## Beispiele

Nehmen wir an, wir haben die folgenden Intent-Daten:

| Absicht | Name der Absicht | Sätze                                                                                                                                                                                                                                                       |
|---------|--------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Elternteil | Pizza bestellen | Ich möchte eine Pizza bestellen. <br> Kann ich mir eine Pizza liefern lassen? <br> Kann ich bitte eine Pizza bekommen? <br> Ich muss eine Pizza kaufen. <br> Ich möchte eine Pizza kaufen.                                                                                                       |
| Art 1 | Schinkenpizza bestellen | Ich möchte eine Schinkenpizza essen. <br> Kann ich bitte eine Schinkenpizza essen? <br> Ich brauche eine Schinkenpizza. <br> Ich möchte eine Schinkenpizza bestellen. <br> Ich habe Lust auf eine Schinkenpizza. <br> Kann ich eine Schinkenpizza bestellen? <br> Ich hätte gerne eine Schinkenpizza.                      |
| Art 2 | Käsepizza bestellen | Ich möchte eine Käsepizza essen. <br> Kann ich bitte eine Käsepizza essen? <br> Ich brauche eine Käsepizza. <br> Ich möchte eine Käsepizza bestellen. <br> Ich habe Lust auf eine Käsepizza. <br> Kann ich eine Käsepizza bestellen? <br> Ich hätte gerne eine Käsepizza. |

Sehen Sie sich verschiedene Beispiele dafür an, wie die einzelnen Optionen der Einstellung "Intent-Mapping-Priorität" funktionieren.

### Priorisieren Sie diese Absicht

Richten Sie **Diese Absicht priorisieren** für die übergeordnete Absicht ein.

Benutzereingabe: "Ich möchte eine Bacon-Pizza bestellen" 

Ergebnis: "Absicht: Pizza bestellen, Absichtswert: 0,33"

JSON: Ein Objekt im Array "nlu.intentMapperResults.scores" 

'''json
"Partituren": [
        {
          "id": "6262e9e7-9dc5-4146-9153-96ef0693c18f",
          "name": "Pizza bestellen",
          "Partitur": 0.3363160895380178,
          "negiert": falsch,
          "confirmationSentence": null,
          "confirmationSentences": null,
          "disambiguationSentence": null,
          "flow": "898601c7-c5db-44f3-bfa0-bce265af02ad"
        }
      ]
'''

### Untergeordnete Absichten priorisieren

Richten Sie **Untergeordnete Absichten priorisieren** für die übergeordnete Absicht ein.

Benutzereingabe: "Ich möchte eine Bacon-Pizza bestellen" 

Ergebnis: "Absicht: Schinkenpizza bestellen, Absichtsbewertung: 0,63"

JSON: Zwei Objekte im Array "nlu.intentMapperResults.scores" 

'''json
"Partituren": [
        {
          "id": "8bba4b5a-1166-4459-bd1c-9e8b5391727e",
          "name": "Schinkenpizza bestellen",
          "Punktzahl": 0.6494886591790712,
          "negiert": falsch,
          "confirmationSentence": null,
          "confirmationSentences": null,
          "disambiguationSentence": null,
          "flow": "898601c7-c5db-44f3-bfa0-bce265af02ad"
        },
        {
          "ID": "C16F7AFC-2875-49DC-8D7A-E06629D7FEF9",
          "name": "Käsepizza bestellen",
          "Partitur": 0.24775283391091624,
          "negiert": falsch,
          "confirmationSentence": null,
          "confirmationSentences": null,
          "disambiguationSentence": null,
          "flow": "898601c7-c5db-44f3-bfa0-bce265af02ad"
        }
      ]
'''