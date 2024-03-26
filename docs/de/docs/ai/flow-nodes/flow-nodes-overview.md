---
 Titel: "Übersicht über Flow-Knoten" 
 slug: "Flow-Knoten-Übersicht" 
 ausgeblendet: false 
---
# Übersicht über Flow-Knoten

Flow-Knoten können verwendet werden, um einem Flow Interaktivität hinzuzufügen. Wenn sie auf eine bestimmte Weise kombiniert werden, können sie dazu beitragen, dynamische, interaktive Gespräche zu führen. Es gibt viele Arten von Nodes, von Basic bis Advanced. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/Node-Create-Menu.png" width="100%" />
</figure>

Gehen Sie zu den [Erweiterungen](.. /resources/manage/extensions.md) für Informationen zum Hinzufügen weiterer Typen von **Knoten**.

| Knoten-Kategorien |
|---------------------------------|
| [Grundlegende Knoten] (#basic-Knoten) |
| [Nachrichten-Knoten] (#message-Knoten) |
| [Logik-Knoten] (#logic-Knoten) |
| [Profil-Knoten] (#profile-Knoten) |
| [Service-Knoten] (#service-Knoten) |
| [NLU-Knoten] (#nlu-Knoten) |

## Grundlegende Knoten<div class="divider"></div>Grundlegende Knoten werden häufig in grundlegenden Konversationsabläufen verwendet. Enthalten sind typische Nodes wie der [Say Node]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#say), der [Question Node]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#question) sowie bestimmte Flow-Aktionen wie [Stop and Return]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#stop-and-return). 

## [Nachrichtenknoten](./message/message.md)<div class="divider"></div>Nachrichtenknoten generieren eine bestimmte Ausgabe, die an den Benutzer zurückgegeben wird. Sie sind in der Regel multichannelfähig, was bedeutet, dass sie über eine breite Palette von Endpunkten hinweg funktionieren.

### [Sagen](./message/say.md)

Dies ist der grundlegendste Ausgabeknoten, der verwendet werden kann, um eine Nachricht an den Benutzer auf seinem aktuellen Kanal zu senden. 

### [Frage](./message/question.md)

Der Frageknoten kann verwendet werden, um dem Benutzer eine Frage zu stellen. Wenn er ausgelöst wird, verschiebt sich der Einstiegspunkt zu diesem Knoten, sodass die Konversation fortgesetzt werden kann, wenn der Benutzer antwortet - und ein neues [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/)-Objekt generiert wird. Standardmäßig bleibt der [**Einstiegspunkt**]({{config.site_url}}ai/resources/build/flows/#entry-points) an diesem Knoten, bis eine gültige Antwort gefunden wurde.

### [Optionale Frage](./message/optionale-frage.md)

Der optionale Frageknoten funktioniert ähnlich wie der Frageknoten, mit der Ausnahme, dass der Einstiegspunkt standardmäßig optional ist. 

### [SMTP-E-Mail senden](./message/send-smtp-email.md)

Der Knoten "E-Mail senden" kann verwendet werden, um eine E-Mail-Nachricht direkt aus dem Flow heraus zu senden. Die IT benötigt eine [Connection]({{config.site_url}}ai/resources/build/connections/), um zu funktionieren.

### [Datepicker](./message/datepicker.md)

Der Datepicker kann verwendet werden, um ein Datumsauswahl-Widget in bestimmten Kanälen zu rendern. Es verfügt über eine umfangreiche Liste konfigurierbarer Optionen.

## [Logik-Knoten](./logic/logic.md)<div class="divider"></div>Logikknoten können verwendet werden, um eine bestimmte Logik im Ablauf auszuführen. Dazu gehören sowohl klassische Bedingungen als auch spezifisches Flow-Verhalten wie das Warten auf eine Benutzereingabe.

### [if](./logic/if.md)

Der If-Knoten ist einer der gebräuchlichsten Logikknoten. Es kann verwendet werden, um eine Aussage zu bewerten, und je nach Ergebnis werden die Fälle Then or Else ausgelöst.  Bedingungen können mit **CognigyScript** oder mit dem integrierten [**Token System**]({{config.site_url}}ai/resources/manage/tokens/) erstellt werden.

### [Nachschlagen](./logic/lookup.md)

Der Lookup Node fungiert als Schalter zwischen verschiedenen Optionen. Ein bestimmter Eingabetyp (z. B. Intents) wird ausgewertet und basierend auf dem Wert wird eine bestimmte Verzweigung ausgeführt.

!!! Hinweis "Kommen Sie von Cognigy Version 3.x?"
    Der Lookup-Node wurde zuvor als **Switch-Node** bezeichnet.

### [Gehe zu](./logic/go-to.md)

Der Gehe zu Knoten kann verwendet werden, um zwischen Flows oder zwischen Nodes zu springen. Wenn der "Gehe zu"-Knoten verwendet wird, um zu einem anderen Flow zu wechseln, wechselt der **Einstiegspunkt** vollständig zu diesem Flow (bis er zurückgeschaltet wird).

### [Flow ausführen](./logic/execute-flow.md)

Der Execute Flow Node kann verwendet werden, um einen anderen Flow auszuführen, was bedeutet, dass er diesen Flow ausführt und anschließend zum ursprünglichen Flow zurückkehrt. Das bedeutet, dass der *Einstiegspunkt* nicht zum neuen Flow wechselt. Dieser Vorgang kann mit einem Funktionsaufruf verglichen werden. 

### [Denken](./logic/think.md)

Der Think Node kann verwendet werden, um absichtlich einen Text in den **Start Node** des Flows einzufügen. Dies ist nützlich, falls es notwendig ist, den Flow mit einer bestimmten Nutzlast erneut zu starten. Die Nutzlast könnte z.B. einem bestimmten Intent entsprechen.

### [Einmal](./logic/once.md)

Alles, was sich unterhalb eines Once Node befindet, wird nur einmal pro Sitzung ausgeführt. Dies ist nützlich, wenn der Bot den Benutzer begrüßen muss oder wenn eine Datenbankanforderung nur einmal pro Sitzung erfolgen muss.

### [Intervall](./logic/interval.md)

Der Intervallknoten kann verwendet werden, um bestimmte Knoten nur dann auszuführen, wenn eine bestimmte Zeit (Intervall) verstrichen ist. Es ist mit einer Anzahl von Millisekunden konfigurierbar.

### [Stopp und Rückkehr](./logic/stop-and-return.md)

Der Stop-and-Return-Knoten stoppt die Flow-Ausführung und kehrt zum Einstiegspunkt am Startknoten zurück.

### [Warten auf Eingabe](./logic/wait-for-input.md)

Der Knoten Warten auf Eingabe wartet auf Benutzereingaben und setzt die Flow-Ausführung fort.

### [Ruhezustand](./logic/sleep.md)

Der Ruhezustandsknoten unterbricht die Ausführung für eine bestimmte Anzahl von Millisekunden. Dieser Knoten wurde früher als Pause-Knoten bezeichnet. 

### [Status festlegen](./logic/set-state.md)

Mit dem Knoten "Status festlegen" wird der [state](.. /tools/interaction-panel/state.md) geändert werden.

### [Status zurücksetzen](./logic/reset-state.md)

Mit dem Knoten Status zurücksetzen wird der [state](.. /tools/interaction-panel/state.md) zurückgesetzt werden.

## [Profilknoten](./profile/profile.md)<div class="divider"></div>Profilknoten werden verwendet, um [Kontaktprofil](.. /resources/manage/contact-profiles.md) Informationen. Gängige Vorgänge sind:

### [Profil aktivieren](./profile/activate-profile.md)

Dieser Knoten kann verwendet werden, um ein [Kontaktprofil](.. /resources/manage/contact-profiles.md), falls sie deaktiviert wurde. Der Knoten ist nicht konfigurierbar. 

### [Profil deaktivieren](./profile/deactivate-profile.md)

Kann verwendet werden, um das [Kontaktprofil](.. /resources/manage/contact-profiles.md).

### [Profil aktualisieren](./profile/update-profile.md)

Dieser Knoten wird häufig verwendet, da er bei der Aktualisierung von [Kontaktprofil](.. /resources/manage/contact-profiles.md) Informationen. Es kann mit einem Dropdown-Menü aller [**Kontaktprofilschema**]({{config.site_url}}ai/resources/manage/contact-profiles/) konfiguriert werden.  

### [Profil zusammenführen](./profile/merge-profile.md)

Dieser Knoten kann verwendet werden, um die aktuelle Sitzung mit einem vorhandenen [Kontaktprofil](.. /resources/manage/contact-profiles.md). Der Knoten kann mit einer Kennung konfiguriert werden, die als Benutzer-ID verwendet werden kann.

### [Blind-Modus](./profile/blind-mode.md)

Der Blind-Modus deaktiviert die gesamte (oder ausgewählte) Protokollierung. Der Node kann immer dann verwendet werden, wenn der virtuelle Agent vertrauliche Daten verarbeitet, die aus den Protokollen ausgeschlossen werden sollen.

* Mask Login: Gibt XXXX in den Ausgabeprotokollen des Agenten aus.
* Analyse maskieren: Gibt XXXX in der Analyse aus (einschließlich Kontaktprofil-Konversationen).
* Konversationen deaktivieren: Ausgabeanalysen wurden vollständig deaktiviert.

### [Profil löschen](./profile/delete-profile.md)

Löscht das aktuell aktive [Kontaktprofil](.. /resources/manage/contact-profiles.md).

### [Ziel abschließen](./profile/complete-goal.md)

Kann verwendet werden, um dem [Kontaktprofil](.. /resources/manage/contact-profiles.md). Benutzerdefinierte Ziele sind KPIs, die dynamisch konfiguriert werden können und in der Ausgabeanalyse sowie in der Übersicht [**Kontaktprofil**]({{config.site_url}}ai/resources/manage/contact-profiles/) angezeigt werden.

## [Dienstknoten](./services/services.md)<div class="divider"></div>Service Nodes können verwendet werden, um externe Dienste wie Datenbanken und E-Mail-Server auszulösen. Cognigy.AI wird mit einer Reihe von integrierten Diensten geliefert. Zusätzliche Dienste können über [**Erweiterungen**]({{config.site_url}}ai/resources/manage/extensions/) hinzugefügt werden.

### [HTTP-Anforderung](./services/http-request.md)

Der HTTP Request Node ist ein sehr praktischer Node, der HTTP-Anfragen an andere Schnittstellen (APIs) ausführen kann. Es kann mit typischen REST-Operationen (GET, POST, PATCH, PUT, DELETE) konfiguriert werden und verfügt über konfigurierbare JSON- oder Text-Nutzlasten.

Jede Anforderungsmethode verfügt über ein Feld, das sie mit den anderen Methoden teilt. Dies sind die Felder:

* [URL](#url)
  * [Überschriften](#headers)
  * [Autorisierungstyp](#authorization-Typ)
  * Kontext-Speicher
  *Asynchron
  * [Zwischenspeicherung](#execution-und-Zwischenspeicherung)
    * Ablauf des Caches
   
#### URL

Die URL zur Zielressource im Format: "https://api-endpoint.com/resource".

#### Kopfzeilen

Hier können Sie die Header hinzufügen, die Sie benötigen, um die HTTP-Anfrage erfolgreich auszuführen.

#### Berechtigungsart

* Keine Authentifizierung
  * Grundlegende Authentifizierung
  * OAuth2
  * API-Schlüssel - "Autorisierung: ApiKey"
  * API-Schlüssel - "X-API-Schlüssel"

Wenn Sie einen anderen Autorisierungstyp als No Auth auswählen, erhalten Sie zusätzliche Felder, die vom ausgewählten Autorisierungstyp abhängen.

#### Ausführung und Caching

In diesem Abschnitt können Sie die HTTP-Anforderung so konfigurieren, dass sie asynchron ist, und optional die Zwischenspeicherung von Anforderungen aktivieren.

### [MongoDB-Knoten](./services/mongo-db.md)

Cognigy.AI verfügt über einen integrierten MongoDB-Konnektor, der direkt im Flow verwendet werden kann. Der Knoten macht eine Reihe von Anforderungen verfügbar:

### [Microsoft SQL-Knoten](./services/ms-sql.md)

Cognigy.AI verfügt über einen integrierten Microsoft SQL-Konnektor, der direkt im Flow verwendet werden kann. Der Knoten macht eine Reihe von Anforderungen verfügbar:

* SQL-Abfrage ausführen
Führt eine SQL-Abfrage aus.

* Transaktion ausführen
Führt eine Transaktion aus.

* StoredProcedure ausführen
Löst eine StoredProcedure aus.

## [NLU-Knoten](./nlu/nlu.md)<div class="divider"></div>NLU-Knoten sind eine Sammlung von Knoten, die sich auf die [**NLU**]({{config.site_url}}ai/nlu/nlu-overview/overview/) der Plattform beziehen. Es verfügt über eine Reihe verschiedener Nodes.

### [Slots in den Kontext kopieren](./nlu/copy-slots-to-context.md)

Dieser Knoten kann verwendet werden, um Slots, die im Objekt [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/) erkannt und veröffentlicht wurden, in die Konversation [**Context**]({{config.site_url}}ai/tools/interaction-panel/context/) zu kopieren. 

### [Lexikon-Schlüsselphrase hinzufügen](./nlu/add-lexicon-keyphrase.md)

Dieser Knoten kann verwendet werden, um dynamisch einen [Lexicons]({{config.site_url}}ai/resources/build/lexicons/)-Schlüsselworteintrag zu erstellen, entweder basierend auf hartcodierten oder dynamischen Daten.

### [Cognigy NLU ausführen](./nlu/execute-cognigy-nlu.md)

Kann verwendet werden, um **Cognigy NLU** an einem bestimmten Punkt im Ablauf explizit auszuführen. Die NLU-Ausführung erfolgt automatisch zu Beginn des Flows und bei jeder neuen Benutzereingabe.

### [Regex-Slot-Füller](./nlu/regex-slotfiller.md)

Dieser Knoten kann verwendet werden, um einen Slot basierend auf einem **Regex-Muster** zu erstellen. Wenn das Muster erkannt wird, wird ein Slot im [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/)-Objekt veröffentlicht.

## [Code-Knoten](./code/code.md)<div class="divider"></div>Der Codeknoten ermöglicht es einem Flow-Ersteller, benutzerdefinierten JavaScript- oder TypeScript-Code innerhalb des Flows auszuführen. Der Editor verfügt über vollständiges IntelliSense und macht alle Cognigy-Objekte und -Aktionen verfügbar. Um eine bessere Leistung zu erzielen, wird der TypeScript-Code beim Speichern des Knotens transpiliert. Wenn die Transpilation fehlschlägt, wird der Code gespeichert, und in der oberen rechten Ecke des Codeknotens wird ein Fehlersymbol angezeigt, das darauf hinweist, dass ein potenzielles Problem mit dem Code vorliegt.

## [Voice-Gateway-Knoten](./vg/voice-gateway.md)<div class="divider"></div>Cognigy Voice Gateway Nodes stellen die von Cognigy Voice Gateway bereitgestellten Funktionen direkt im Flow-Editor zur Verfügung.

## [Andere Knoten](./andere-Knoten/andere-Knoten.md)<div class="divider"></div>Knoten, die in keine der oben genannten Kategorien passten. 