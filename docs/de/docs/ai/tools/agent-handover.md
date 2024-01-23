---
Titel: "Agentenübergabe" 
Schnecke: "Agenten-Übergabe" 
ausgeblendet: false 
---
# Agentenübergabe

Menschliche Unterstützung **Agentenübergabe** ist ein wichtiges Werkzeug für die Integration virtueller Agenten in bestehende Contact-Center-Workflows. Die direkte Kommunikation zwischen virtuellen Agenten und menschlichen Agenten wird die Erfahrung eines Kunden über die Fähigkeiten einer Conversational AI hinaus bereichern.

## Übergabeprozesse<div class="divider"></div>Wenn es sich bei einer Anfrage eines Benutzers um einen Grenzfall handelt, der einfach zu spezifisch ist, um vom Bot bearbeitet zu werden, kann der Bot dem Benutzer anbieten, an einen Support-Agenten, einen echten Menschen, weitergeleitet zu werden, der die Konversation abfangen und dem Kunden manuell helfen kann, ohne den Kanal wechseln zu müssen.

**Agentenübergabeprozesse** können mithilfe des **Übergabeknotens an den Agentenknoten** in einen Flow integriert werden. Wenn dieser Knoten ausgelöst wird, wird eine Übergabeanforderung des Kunden an den **Contact Center-Dienst** gesendet, der in den [Endpoint Handover Settings]({{config.site_url}}ai/endpoints/handover-settings/) konfiguriert wurde. Ein menschlicher Agent kann dann die Konversation abfangen und vom virtuellen Agenten übernehmen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/handover-flow.png" width="100%" />
</figure>

Sobald eine Übergabe initiiert wurde, wird die normale Ausführung des Flows angehalten, bis der Kunde, der auf einen Supportmitarbeiter wartet, die Anfrage abbricht oder bis ein Agent die Konversation beendet. Bevor die Konversation mit einem Agenten begonnen hat, kann der Kunde die Anfrage abbrechen und zur normalen Flow-Ausführung zurückkehren, indem er eine ausgewählte Absicht oder eine dedizierte Schnellantwort auslöst.

!!! Hinweis "Neuer Übergabeknoten"
    Der alte Übergabeknoten wurde durch einen Übergabeknoten an den Agenten ersetzt. Der folgende Inhalt gilt nur für den neuen Knoten "Übergabe an den Agenten"

Wenn die Übergabe abgeschlossen ist, wird die Flow-Ausführung unterhalb des Übergabeknotens an den Agenten fortgesetzt. Dem Eingabeobjekt wird eine Übergabeeigenschaft hinzugefügt, die Informationen darüber verfügbar macht, warum die Übergabe abgeschlossen wurde. Das Objekt, das verfügbar gemacht wird, weist die folgende Struktur auf:

'''JavaScript
{
    "Übergabe": {
        "status": "abgeschlossen"
    }
}
'''

Der Status kann folgende Werte annehmen:

| Status der Übergabe | Beschreibung |
|-----------------|------------------------------------------------|
| Abgeschlossen | Die Übergabe wurde vom Agenten abgeschlossen |
| Abgesagt | Der Benutzer hat die Übergabeanfrage |
| Fehler | Beim Anfordern der Übergabe |

Im Fehlerfall wird das Übergabeobjekt um zusätzliche Informationen erweitert:

'''JavaScript
{
    "Übergabe": {
        "status": "abgeschlossen",
        "Fehler": {
          "reason": "nicht unterstützt",
          "message": ""
        }
    }
}
'''

Der Fehlergrund kann entweder "nicht unterstützt" sein, falls der Benutzerkanal die Durchführung eines Handovers nicht unterstützt, oder "Fehler", wenn bei der Kontaktaufnahme mit dem Übergabeanbieter ein Fehler aufgetreten ist.

Es gibt auch einen 'Übergabestatus' [Token]({{config.site_url}}ai/resources/manage/tokens/), der verwendet werden kann, um auf den Übergabestatus im Flow zuzugreifen.

### Umgang mit dem Übergabestatus
Um ein anderes Verhalten des virtuellen Agenten basierend auf dem Übergabestatus zu konfigurieren, können Sie einen "Lookup"-Knoten verwenden, um die verschiedenen möglichen Ergebnisse einer Übergabe zu verarbeiten. Im 'Lookup'-Knoten können Sie auswählen, ob Sie nach dem 'Übergabestatus' suchen möchten.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/handover-node-usage.png" width="100%" />
</figure>

## Übergabe an den Agentenknoten<div class="divider"></div>Der Knoten **Übergabe an Agent** verfügt sowohl über allgemeine als auch über spezifische Einstellungen für jeden Übergabeanbieter.

Die allgemeinen Einstellungen sind im Folgenden beschrieben und die spezifischen Einstellungen finden Sie in der [Übersicht der Übergabeanbieter]({{config.site_url}}ai/handover-providers/overview/).

### Übergabe akzeptiert Nachricht

| Parameter | Typ | Beschreibung |
|----------------------------------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Nachricht "Übergabe akzeptiert" | CognigyScript | Die Meldung, die ausgegeben werden soll, wenn die Übergabe angefordert wurde |
| Übergabe akzeptiert Nachricht wiederholen | Umschalten | Gibt an, ob die Nachricht "Übergabe akzeptiert" erneut ausgegeben werden soll, wenn der Benutzer eine Nachricht sendet, während er in der Warteschlange auf einen Agenten wartet.                                                                     |

### Übergabeoptionen abbrechen

| Parameter | Typ | Beschreibung |
|--------------------|---------------|-----------------------------------------------------------------------------------|
| Absicht abbrechen | CognigyScript | Die Absicht, die der Benutzer auslösen muss, um die Übergabeanforderung abzubrechen |
| Schaltflächentext abbrechen | CognigyScript | Der Text für eine Schnellantwortschaltfläche, die die Übergabeanforderung abbricht, wenn darauf geklickt wird. |

### Bei Auflösungsoptionen

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|-------------------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  ------------------------------|
| Flow-Fortsetzung | Selektor | - Unterhalb dieses Knotens: Der Benutzer wird zum Knoten unterhalb des Übergabeknotens weitergeleitet, sobald der Agent die Konversation beendet hat. In diesem Fall würde der Benutzer in einem anderen Ablauf fortfahren, aber der Startpunkt wäre der Knoten unterhalb des Übergabeknotens. <br> - Am aktuellen AgentInject-Einstiegspunkt: Der Benutzer setzt den Chat am aktuellen Agent-Inject-Einstiegspunkt fort. Diese Option ermöglicht es dem Agenten, den Benutzer zu einem bestimmten Teil des Chats zu führen und dann die Kontrolle an den Benutzer zurückzugeben. | 
| Auflösungsereignis an virtuellen Agenten senden | Umschalten | Senden eines Ereignisses, wenn der virtuelle Agent eine Konversation auflöst.                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Event-Einstellungen

| Parameter | Typ | Beschreibung |
|-------------------|--------|-----------------------------------------------------------|
| Warteschlangenereignis senden | Umschalten | Senden eines Ereignisses an den Flow, sobald sich die Übergabe in der Warteschlange befindet. |
| Aktives Ereignis senden | Umschalten | Senden eines Ereignisses an den Flow, sobald die Übergabe aktiv ist. |

## Übergabe-Anbieter

Eine Liste der unterstützten Handover-Services finden Sie in der [Übersicht über Übergabeanbieter](.. /handover-providers/overview.md).

## Mehr Informationen

- [Agentenverfügbarkeitsknoten prüfen](.. /flow-nodes/services/check-agent-availability.md)
- [Erkennung und Behandlung von Benutzerinaktivität](.. /handover-providers/user-inactivity-detection.md)