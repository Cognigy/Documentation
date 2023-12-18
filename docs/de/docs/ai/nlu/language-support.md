---
 Titel: "Sprachunterstützung" 
 slug: "Sprachunterstützung" 
 ausgeblendet: false 
---
# Unterstützte Sprachen

## Übersicht der unterstützten Sprachen<div class="divider"></div>Die integrierte NLU von Cognigy.AI ist mit kuratierten Daten aus über 100 Sprachen vortrainiert, um die Absichtserkennung und Schlüsselphrasenerkennung zu unterstützen. Jede andere natürliche (oder künstliche) Sprache wird auf der Grundlage sprachunabhängiger NLU-Algorithmen unterstützt.
 
Für 28 der gebräuchlichsten Sprachen bietet Cognigy.AI vorgefertigte Entitäten, die die automatische Verarbeitung von Eingaben wie Datumsangaben, Währungen und anderen spezifischen Sprachen ermöglichen, die im Flow definiert sind.

* Universell (siehe unten)
*Arabisch
*Bengali
* Chinesisch (vereinfacht)
*Dänisch
*Holländisch
* Englisch (Australien)
* Englisch (Kanada)
* Englisch (Indien)
* Englisch (UK)
* Englisch (US)
*English
*Hindi
*Japanisch
*Koreanisch
*Finnisch
*Französisch
*Italienisch
*Norwegisch
*Polnisch
* Portugiesisch - Brasilien
*Portugiesisch
*Russisch
*Spanisch
*Schwedisch
*Tamil
*Thailändisch
*Türkisch
*Vietnamesisch

## Universelle Sprache<div class="divider"></div>Die Universal Language-Option erweitert die Kompatibilität der Cognigy NLU mit über 100 Sprachen durch den Einsatz fortschrittlicher mehrsprachiger Machine-Learning-Modelle. Zu den unterstützten Sprachen gehören:

*Afrikaans
*Albanisch
*Arabisch
*Aserbaidschanisch
* Bahasa Indonesien
* Bahasa Melayu
*Belarussisch
*Bengali
*Bosnisch
*Bulgarisch
*Katalanisch
* Chinesisch (traditionell / Kantonesisch)
*Kroatisch
*Tschechisch
*Dänisch
*Holländisch
*Englisch
*Estnisch
*Finnisch
*Französisch
*Georgisch
*English
*Griechisch
*Gujarati
*Haitianisch
*Hebräisch
*Hindi
*Ungarisch
*Isländisch
*Indonesisch
*Irisch
*Italienisch
*Japanisch
*Kasachisch
*Koreanisch
*Latein
*Lettisch
*Litauisch
*Mazedonisch
*Malaiisch
*Norwegisch
* Persisch (Farsi)
*Polnisch
*Portugiesisch
*Punjabi
*Rumänisch
*Russisch
*Serbisch
*Sizilianisch
*Slowakisch
*Slowenisch
*Spanisch
*Sundanesisch
*Schwedisch
*Tamil
*Thailändisch
*Türkisch
*Ukrainisch
*Urdu
*Usbekisch
*Vietnamesisch
* Laothian 
*Singhalesisch
* und mehr

Die Universal Language ermöglicht es Ihnen, das Intent-Mapping in jeder Sprache zu verwenden, was es Ihnen zusammen mit der Keyphrase-Erkennung und unserer leistungsstarken Rule Intent Engine ermöglicht, Flows in jeder Sprache zu erstellen.

### Beschreibung
Die Universal Language verwendet mehrsprachige NLU-Algorithmen und -Modelle. Dies muss so qualifiziert werden, dass nur Sprachen mit Leerzeichen wie Englisch enthalten sind, um eine vollständige Unterstützung zu gewährleisten. Bei der Keyphrase-Erkennung werden z. B. Leerzeichen " " als Trennzeichen verwendet. Das Intent-Mapping funktioniert über Tokenisierungsschemata hinweg, profitiert aber auch von Spaces-tokenisierten Sprachen.

### Rule Intents mit der Universellen Sprache
Eine leistungsstarke und nützliche Möglichkeit, die universelle Sprache zu verwenden, ist die Verwendung von Regelabsichten. Mit diesen Absichten können Sie mithilfe von CognigyScript benutzerdefinierte Regeln definieren, die entscheiden, ob die Absicht ausgelöst wird. Sie können eine Regel wie 'input.slots.food[0].keyphrase === "pizza"' erstellen.

Das heißt, sobald der Nutzer das Wort Pizza erwähnt, wird dieser Intent ausgelöst. Weitere Informationen zur Verwendung dieser Intents finden Sie [hier]({{config.site_url}}ai/nlu/nlu-overview/overview/#rules).

### Hinzufügen von positiven und negativen Bestätigungswörtern
Damit unsere askYNQuestion Nodes funktionieren, müssen wir wissen, welche Wörter positive Bestätigungen und welche Wörter negative Bestätigungen sind. Wenn Sie z. B. Englisch als Sprache verwenden, wissen wir, dass wir den onYes-Teil des askYNQuestion-Knotens auslösen, wenn der Benutzer mit "Ja" antwortet. Da Sie jedoch im Wesentlichen jede Sprache verwenden, indem Sie die universelle Sprache verwenden, haben wir diese Informationen nicht. Sie müssen daher das Bedienfeld "FlowProperties" in Ihrem Flow öffnen und zu den Einstellungen navigieren. Hier sind zwei Einstellungen namens "Zusätzliche Bestätigungswörter" und "Zusätzliche negative Bestätigungswörter". Die erste ist eine Liste von Wörtern, die den onYes-Teil eines askYNQuestion-Knotens auslösen sollen, während die zweite eine Liste von Wörtern ist, die den onNo-Teil eines askYNQuestion-Knotens auslösen sollen. Du schreibst einfach jede Variation in eine neue Zeile. Sie können diese auch verwenden, um die Bestätigungswörter für andere Sprachen zu erweitern.