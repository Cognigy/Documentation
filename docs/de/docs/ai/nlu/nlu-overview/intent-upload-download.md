---
 Titel: "Intent Up und Download" 
 slug: "Intent Up- und Download" 
 ausgeblendet: false 
---
# Absicht nach oben und Download

Sie können Intents von Cognigy hoch- und herunterladen. Importieren Sie schnell Intents, bearbeiten Sie sie mit Ihrem bevorzugten Tabellenkalkulationstool oder Entwicklerskripten oder verschieben Sie Intents schnell zwischen Flows.

Wir unterstützen derzeit zwei Formate

## CSV-Datei<div class="divider"></div>Ihre CSV-Datei sollte wie folgt formatiert sein

* Kein Header
* Wir erkennen automatisch verschiedene CSV-Formate, wenn Sie Probleme haben, verwenden Sie UTF-8-Kodierung, Komma (',') als Trennzeichen und doppelte Anführungszeichen ( '"') als Anführungszeichen und Zeilenumbruch ('\n') als Zeilenabschlusszeichen
* Sie müssen die folgenden drei Spalten ausfüllen:

| Bezeichnung: | Art der Immobilie | Wert |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| Der Intent-Name des Typs *string* | Der Typ der Eigenschaft, der den Absichtseigenschaften von Cognigy entspricht<br/>*"exampleSentence" "defaultReply" "confirmationSentence" "rules"* | Der Wert des Feldes, z.B. eine Beispielsatzäußerung "Ich will Pizza", vom Typ *string* |

Zur Veranschaulichung:

|              |                      |                                          |
|--------------|----------------------|------------------------------------------|
| rejectIntent | BeispielSatz | Dieser Satz ist ungültig, und das ist in Ordnung |
| Absicht1 | BeispielSatz | Ich will nach Hause |
| Absicht1 | defaultReply | Ok, dann geh nach Hause |
| Absicht1 | defaultReply | Ok tschüss dann |
| Absicht1 | confirmationSentence | Sind Sie sicher, dass Sie nach Hause wollen?        |
| Absicht 2 | BeispielSatz | Ich möchte eine Pizza mit Käse bestellen |
| Absicht 2 | BeispielSatz | Ich habe Hunger |

## JSON<div class="divider"></div>Das JSON-Format von Cognigy Intent spezifiziert Ihre Absichten vollständig. Weitere Informationen finden Sie in unserer API-Dokumentation [hier](https://api-trial.cognigy.ai/openapi#post-/v2.0).