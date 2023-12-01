---
Titel: "Automatik-Modus"
Slug: "Automatik-Modus"
description: "Der automatische Modus in Live Agent umfasst zwei Hauptfunktionen: Automatische Zuweisung und Neuzuweisung von Konversationen zulassen, die Agenten Konversationen zuweisen."
ausgeblendet: false
---

# Automatik-Modus

_Automatic mode_ enthält zwei wichtige Funktionen: Automatische Zuweisung und Neuzuweisung von Konversationen zulassen, die Konversationen Agenten zuweisen. Die automatische Zuweisung verteilt Konversationen auf Online-Agenten, während die automatische Neuzuweisung Konversationen in Echtzeit basierend auf Änderungen der Agentenverfügbarkeit neu zuweist. Diese Funktionen optimieren die Gesprächsführung und verbessern die Effizienz des Kundensupports.

Im automatischen Modus können Konversationen automatisch Benutzern mit bestimmten Live Agent-Rollen innerhalb eines bestimmten Posteingangs zugewiesen oder neu zugewiesen werden: "Agent", "Supervisor" oder "Administrator".

Es gibt verschiedene Szenarien für die Verteilung von Konversationen an menschliche Agenten, basierend auf ihrem Onlinestatus und ihrer Arbeitsbelastung:

- **Online-Agenten**. Wenn eine Konversation im Posteingang erstellt wird und Agenten online sind, die Zugriff darauf haben, verteilt das System die Konversationen gleichmäßig auf sie.
  Nicht zugewiesene Konversationen werden automatisch Agenten zugewiesen, wenn die Option [Schwellenwert begrenzen](.. /.. /settings/account-settings.md#conversation-limit-per-agent) ist niedriger als der Maximalwert und hat Vorrang vor neu eingehenden Konversationen.
- **Offline-Agenten**. Wenn eine Konversation im Posteingang erstellt wird und keine Agenten online sind, die darauf zugreifen können, behält das System alle Konversationen nicht zugewiesen.

## Automatische Zuweisung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.47-blue.svg)] (.. /.. /.. /release-notes/4.47.md)

Live Agent bietet standardmäßig ein automatisches Zuweisungssystem für Konversationen, das auf _round-robin_Logik basiert. Mit dieser Logik verteilt das System eingehende Konversationen automatisch sequentiell auf Ihre menschlichen Agenten.

Nach der Einrichtung listet die Aktion Benutzer auf und weist Konversationen nacheinander zu. Wenn Ihr Kundensupport-Team beispielsweise aus drei Benutzern besteht, geht die erste Konversation an Alex, die zweite an David und die dritte an Sara. Wenn das vierte Gespräch eintrifft, beginnt der Zyklus von vorne, und es wird Alex zugewiesen.

<figure>
    <img class="image-center" src="{{config.site_url}}live-agent/conversation/images/round-robin.png" width="50%" />
    <figcaption>Round-Robin-Ansatz</figcaption>
</figure>

Sie können das System für die automatische Zuweisung konfigurieren, indem Sie die Einstellung **Automatische Zuweisung** verwenden. Diese Einstellung ist standardmäßig für alle Posteingänge aktiviert. Sie können dieses Verhalten für einen bestimmten Posteingang ändern.

Gehen Sie folgendermaßen vor, um die automatische Zuweisung in Ihrem Posteingang zu konfigurieren:

1. Gehen Sie zu **Einstellungen > Posteingänge**.
2. Wählen Sie einen Posteingang aus der Liste aus und klicken Sie auf ! [Ausrüstung] (.. /.. /assets/icons/gear.svg).
3. Wechseln Sie auf der Registerkarte **Mitarbeiter** zum Abschnitt **Konversationszuweisung**.
4. Wählen Sie in der Liste **Automatische Zuweisung zulassen** eine der folgenden Optionen aus:
    * Aktivieren — ermöglicht die automatische Zuweisung von Agenten zu Konversationen. Die Einstellung ist standardmäßig aktiviert.
    * Deaktivieren — ermöglicht die manuelle Zuweisung von Agenten zu Konversationen.

Die Änderungen werden übernommen.

### Zusätzliche automatische Zuweisungsparameter

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.60-blue.svg)] (.. /.. /.. /release-notes/4.60.md)

Standardmäßig berücksichtigt [Automatische Zuweisung](#automatic-Zuweisung) keine zusätzlichen Parameter.
z. B. die Anzahl der Konversationen, die von jedem Agenten bearbeitet werden, die Agentenfähigkeiten oder die Konversationspriorität.
In diesem Fall
Neue Konversationen können jedem verfügbaren Agenten zugewiesen werden, ohne seine aktuelle Arbeitsbelastung, seine Fähigkeiten oder seine Sprache zu berücksichtigen.

Sie können dieses Verhalten steuern, indem Sie die folgenden Einstellungen verwenden:

| Einstellung | Beschreibung | Beispiel                                                                                                                                                                                                                                                                                                                         |
|---------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------  ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Berücksichtigen Sie die Anzahl der Konversationen | Wenn diese Einstellung aktiviert ist, berücksichtigt Live Agent die Anzahl der Konversationen, die jeder Agent bereits bearbeitet, bevor ihm neue Konversationen zugewiesen werden. Mit dieser Einstellung verteilt das System eingehende Konversationen automatisch gleichmäßig auf Ihre menschlichen Agenten. Es verhindert, dass Ihre Agenten überfordert werden, und stellt sicher, dass Ihre Kunden schnelle Antworten erhalten. | Wenn Alex derzeit drei Konversationen bearbeitet und Sara eine Konversation bearbeitet, weist das System Sara neue eingehende Konversationen zu, da sie eine geringere Arbeitsbelastung hat. Weitere Beispiele für die Funktionsweise dieser Einstellung finden Sie in [Szenario 5](#scenario-5).                                                            |
| Konversationsfähigkeiten berücksichtigen | Wenn diese Einstellung aktiviert ist, berücksichtigt Live Agent bei der Zuweisung neuer Konversationen die Kenntnisse eines Agenten in bestimmten Fähigkeiten, um eine ausgewogenere Verteilung der Arbeitslast zwischen Agenten mit dem entsprechenden Fachwissen zu gewährleisten | Wenn für eine Konversation Fachwissen in der Fertigkeit "Abrechnung" erforderlich ist und Alex über Fachkenntnisse im technischen Support verfügt, während Sara sich auf die Abrechnung spezialisiert hat, weist das System Sara neue Konversationen zu, für die die Fertigkeit "Abrechnung" erforderlich ist. Weitere Beispiele für die Funktionsweise dieser Einstellung finden Sie in [Szenario 6](#scenario-6).             |                                                                                                                                                                                                                                                                      |
| Konversationssprachen in Betracht ziehen | Wenn diese Einstellung aktiviert ist, berücksichtigt Live Agent bei der Zuweisung neuer Konversationen die Sprachen, die ein Agent beherrscht. Dadurch wird sichergestellt, dass Kundenanfragen in verschiedenen Sprachen an Agenten weitergeleitet werden, die in diesen Sprachen effektiv kommunizieren können.                                                                                                                                  | Wenn eine Kundenanfrage auf Spanisch ist und Alex nicht fließend Spanisch spricht, Sara aber schon, weist das System diese Konversation Sara zu. Weitere Beispiele für die Funktionsweise dieser Einstellung finden Sie in [Szenario 7](#scenario-7).                                                                                                      |
| Konversationspriorität berücksichtigen | Wenn diese Einstellung aktiviert ist, priorisiert Live Agent Konversationen basierend auf ihrer Dringlichkeit. Die Prioritätsoption gilt in erster Linie für neu zugewiesene oder in der Warteschlange befindliche Konversationen, nicht für neue eingehende Konversationen.                                                                                                                                                                                                       | Wenn sich in der Konversationswarteschlange sowohl Konversationen mit hoher Priorität als auch mit dringender Priorität befinden, weist das System die dringende Konversation zuerst Alex zu. Wenn Sara online ist, wird ihr die zweite Konversation mit hoher Priorität zugewiesen. Weitere Beispiele für die Funktionsweise dieser Einstellung finden Sie in [Szenario 8](#scenario-8). |

Wenn Agenten die gleiche Anzahl aktiver Konversationen haben, wird ihnen die nächste Konversation in der richtigen Reihenfolge zugewiesen, wobei die Standard-Roundrobin-Logik verwendet wird. Wenn Online-Agenten nicht über die erforderlichen Fähigkeiten verfügen, wird die Konversation über die Standard-Round-Robin-Logik an den nächstgelegenen verfügbaren Agenten weitergeleitet.

Gehen Sie folgendermaßen vor, um zusätzliche automatische Zuweisungsparameter in Ihrem Posteingang zu berücksichtigen:

1. Gehen Sie zu **Einstellungen > Posteingänge**.
2. Wählen Sie einen Posteingang aus der Liste aus und klicken Sie auf ! [Ausrüstung] (.. /.. /assets/icons/gear.svg).
3. Wechseln Sie auf der Registerkarte **Mitarbeiter** zum Abschnitt **Konversationszuweisung**.
4. Aktivieren Sie die folgenden Optionen:
    - Berücksichtigen Sie die Anzahl der Konversationen – berücksichtigen Sie die Arbeitsbelastung der Agenten.
    - Berücksichtigen Sie die Konversationsfähigkeiten – berücksichtigen Sie die Fähigkeiten der Agenten.
    - Berücksichtigen Sie Konversationssprachen – berücksichtigen Sie Agentensprachen.
    - Berücksichtigen Sie die Konversationspriorität – berücksichtigen Sie die Dringlichkeit des Gesprächs.

Die Änderungen werden übernommen.

## Automatische Neuzuweisung

Live Agent bietet ein System zur automatischen Neuzuweisung von Gesprächen. Dieses System folgt einem Round-Robin-Ansatz, ähnlich wie [automatische Zuweisung](#automatic-Zuweisung).

Das automatische Neuzuweisungssystem arbeitet in Echtzeit und wird durch bestimmte agentenbezogene Ereignisse ausgelöst. Zu diesen Veranstaltungen gehören:

- Wenn ein menschlicher Agent seine Verfügbarkeit auf "Offline", "Abwesend" oder "Beschäftigt" ändert.
- Wenn sich ein menschlicher Agent abmeldet.

Wenn eines dieser Ereignisse ausgelöst wird, werden die Konversationen, die dem menschlichen Agenten zugewiesen sind, automatisch anderen verfügbaren menschlichen Agenten zugewiesen. Wenn derzeit keine menschlichen Agenten online sind, werden die Konversationen als nicht zugewiesen markiert.

Sie können das System für die automatische Neuzuweisung konfigurieren, indem Sie die Einstellung **Neuzuweisung von Unterhaltungen zulassen** verwenden. Diese Einstellung ist standardmäßig für alle Posteingänge aktiviert. Sie können dieses Verhalten für einen bestimmten Posteingang ändern.

Gehen Sie folgendermaßen vor, um die automatische Neuzuweisung in Ihrem Posteingang zu konfigurieren:

1. Gehen Sie zu **Einstellungen > Posteingänge**.
2. Wählen Sie einen Posteingang aus der Liste aus und klicken Sie auf ! [Ausrüstung] (.. /.. /assets/icons/gear.svg).
3. Wechseln Sie auf der Registerkarte **Mitarbeiter** zum Abschnitt **Konversationszuweisung**.
4. Wählen Sie in der Liste **Neuzuweisung von Unterhaltungen zulassen** eine der folgenden Optionen aus:
    * Aktivieren: Ermöglicht die automatische Neuzuweisung von Agenten zu Konversationen. Die Einstellung ist standardmäßig aktiviert.
    * Deaktivieren — ermöglicht die manuelle Neuzuweisung von Agenten zu Konversationen.

Die Änderungen werden übernommen.

## Automatische Zuweisung und Neuzuweisung für beschäftigte Agenten

Standardmäßig können menschliche Agenten mit dem Status "Beschäftigt" nicht automatisch zugewiesen oder neu zugewiesen werden.

Wenn einem Agenten bereits Konversationen zugewiesen wurden, bevor er beschäftigt ist,
Diese zugewiesenen Konversationen verbleiben in der [Konversationswarteschlange](.. /conversation-queue.md).
Neue Konversationen werden diesem Agenten jedoch erst dann zugewiesen, wenn er sich nicht mehr im Status "Beschäftigt" befindet.

Sie können dieses Verhalten ändern, indem Sie die Option [Konversationen einem beschäftigten Agenten automatisch zuweisen](.. /.. /settings/account-settings.md#auto-assign-conversations-to-a-busy-agent) in **Kontoeinstellungen**. Beachten Sie, dass diese Einstellung auf der Live Agent-Installationsebene aktiviert ist und Sie das Verhalten für einen bestimmten Posteingang nicht ändern können.

Wenn die Einstellung aktiviert ist, werden beschäftigte Agenten so behandelt, als hätten sie den Status "Online" und befolgen die gleichen Zuweisungs- und Neuzuweisungsregeln wie andere verfügbare Agenten.

## Häufige Szenarien

Der Routing-Prozess hängt von den eingehenden Daten und der Kombination von Einstellungen ab, die Sie auf der Ebene der Kontoeinstellungen und des Posteingangs konfiguriert haben.

Es gibt verschiedene gängige Szenarien oder Situationen, die für den Automatikmodus relevant sind.

### Standardszenario

Dies ist das Standardszenario, in dem alle Konversationen dem ersten verfügbaren Agenten zugewiesen werden.

Quelltabelle:

'''txt
| Name des Agenten | Status |
|------------|---------|
| Agent 1 | Online |
| Agent 2 | Online |
| Agent 3 | Online |
| Agent 4 | Offline |
'''

Bedingungen:

- Kein [Konversationslimit](.. /.. /settings/account-settings.md#conversation-limit-per-agent) pro Agent.
- Es werden 4 Konversationen erstellt.
-Aktiviert:
    - Automatische Zuweisung von Konversationen.
    - Automatische Neuzuweisung von Konversationen.
-Deaktiviert:
    - Automatisches Zuweisen von Konversationen zu einem beschäftigten Agenten.
    - Berücksichtigen Sie die Anzahl der Konversationen.

Ergebnis: Agent 1 erhält das erste und vierte Gespräch, Agent 2 erhält das zweite, Agent 3 das dritte.

### Szenario 1

Quelltabelle:

'''txt
| Name des Agenten | Grenzwert | Status |
|------------|-------|---------|
| Agent 1 | 2 | Online |
| Agent 2 | 2 | Beschäftigt |
| Agent 3 | 2 | Auswärts |
| Agent 4 | 2 | Offline |
'''

Häufige Bedingungen:

- Das Limit liegt bei 2 Konversationen pro Agent.
- Es werden 4 Konversationen erstellt.

**Beispiel 1**

Zusätzliche Bedingungen:

- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist deaktiviert.
- Die automatische Konversationszuweisung ist aktiviert.
- Die automatische Neuzuweisung von Konversationen ist aktiviert.

Ergebnis: Die ersten beiden werden Agent 1 zugewiesen, und die nächsten beiden bleiben nicht zugewiesen.

**Beispiel 2**

Zusätzliche Bedingungen:

- Die automatische Konversationszuweisung ist aktiviert.
- Die automatische Neuzuweisung von Konversationen ist aktiviert.
- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist aktiviert.

Ergebnis: Agent 1 erhält die erste Konversation, Agent 2 erhält die zweite, Agent 1 erhält die dritte und Agent 2 erhält die vierte.

**Beispiel 3**

Zusätzliche Bedingungen:

- Die automatische Konversationszuweisung ist aktiviert.
- Die automatische Neuzuweisung von Konversationen ist deaktiviert.
- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist deaktiviert.
- Agent 1 geht offline.

Ergebnis: Die ersten beiden Konversationen bleiben Agent 1 zugewiesen, und die nächsten beiden bleiben nicht zugewiesen.

**Beispiel 4**

Zusätzliche Bedingungen:

- Die automatische Konversationszuweisung ist deaktiviert.
- Die automatische Neuzuweisung von Konversationen ist aktiviert.
- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist aktiviert.

Ergebnis: Alle Konversationen bleiben nicht zugewiesen.

### Szenario 2

Quelltabelle:

'''txt
| Name des Agenten | Status |
|------------|--------|
| Agent 1 | Online |
| Agent 2 | Online |
| Agent 3 | Online |
| Agent 4 | Online |
'''

Häufige Bedingungen:

-Aktiviert:
    - Automatische Neuzuweisung von Konversationen.
    - Automatische Zuweisung von Konversationen.
-Deaktiviert:
    - Berücksichtigen Sie die Anzahl der Konversationen.
- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist aktiviert oder deaktiviert.

**Beispiel 1**

Zusätzliche Bedingungen:

- Das Limit liegt bei 2 Konversationen pro Agent.
- Es werden 4 Konversationen erstellt.

Ergebnis: Jeder Agent erhält eine Konversation.

**Beispiel 2**

- Das Limit liegt bei 2 Konversationen pro Agent.
- Es werden 8 Konversationen erstellt.
- Agent 1 hat den Status nach der Konversationszuweisung in "Abwesend" geändert.

Ergebnis: Jeder Agent führt zwei laufende Gespräche. Wenn Agent 1 jedoch offline geht oder als abwesend markiert wird, bleiben seine beiden Konversationen nicht zugewiesen.

### Szenario 3

Quelltabelle:

'''txt
| Name des Agenten | Grenzwert | Status |
|------------|-------|---------|
| Agent 1 | 2 | Offline |
| Agent 2 | 2 | Auswärts |
| Agent 3 | 2 | Offline |
| Agent 4 | 2 | Beschäftigt |
'''

Häufige Bedingungen:

- Das Limit liegt bei 2 Konversationen pro Agent.
- Es werden 4 Konversationen erstellt.
-Aktiviert:
    - Automatische Neuzuweisung von Konversationen.
    - Automatische Zuweisung von Konversationen.
-Deaktiviert:
    - Berücksichtigen Sie die Anzahl der Konversationen.

**Beispiel 1**

Zusätzliche Bedingungen:

- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist deaktiviert.

Ergebnis: Die Zuweisung aller Konversationen wird aufgehoben.

**Beispiel 2**

Zusätzliche Bedingungen:

- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist deaktiviert.
- Agent 1 hat den Status in "Online" geändert.

Ergebnis: Wenn Agent 1 wieder online ist, werden einem Agenten zwei Konversationen zugewiesen, und zwei Konversationen bleiben nicht zugewiesen.

**Beispiel 3**

Zusätzliche Bedingungen:

- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist aktiviert.

Ergebnis: Die ersten beiden Konversationen werden Agent 4 zugewiesen, und die nächsten beiden bleiben unzugewiesen.

### Szenario 4

Quelltabelle:

'''txt
| Name des Agenten | Grenzwert | Status |
|------------|-------|---------|
| Agent 1 | 2 | Offline |
| Agent 2 | 2 | Offline |
| Agent 3 | 2 | Offline |
| Agent 4 | 2 | Offline |
'''

Häufige Bedingungen:

- Das Limit liegt bei 2 Konversationen pro Agent.
-Aktiviert:
    - Automatische Neuzuweisung von Konversationen.
    - Automatische Zuweisung von Konversationen.
-Deaktiviert:
    - Berücksichtigen Sie die Anzahl der Konversationen.

**Beispiel 1**

Zusätzliche Bedingungen:

- Es werden 5 Konversationen erstellt.
- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist aktiviert oder deaktiviert.

Ergebnis: Alle Konversationen sind nicht zugewiesen.

**Beispiel 2**

Zusätzliche Bedingungen:

- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist deaktiviert.
- Agent 1 hat den Status in "Beschäftigt" geändert.

Ergebnis: Alle Konversationen sind nicht zugewiesen.

**Beispiel 3**

Zusätzliche Bedingungen:

- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist aktiviert.
- Agent 1 hat den Status in "Beschäftigt" geändert.

Ergebnis: Wenn Agent 1 den Status von "Offline" in "Beschäftigt" geändert hat, werden diesem menschlichen Agenten zwei Konversationen zugewiesen.

### Szenario 5

Quelltabelle:

'''txt
| Name des Agenten | Grenzwert | Status | Unterhaltungen |
|------------|-------|---------|---------------|
| Agent 1 | Nr. 5 | Online | 2 |
| Agent 2 | Nr. 5 | Online | 3 |
| Agent 3 | Nr. 5 | Online | Nr. 1 |
| Agent 4 | Nr. 5 | Online | 4 |
'''

Häufige Bedingungen:

- Das Limit liegt bei 5 Konversationen pro Agent.
- Jedem Agenten sind Konversationen zugewiesen.
-Aktiviert:
    - Automatische Zuweisung von Konversationen.
    - Automatische Neuzuweisung von Konversationen.
    - Berücksichtigen Sie die Anzahl der Konversationen.

**Beispiel 1**

Zusätzliche Bedingungen:

- 3 neue eingehende Konversationen.
- Deaktiviert: Automatisches Zuweisen von Konversationen zu einem beschäftigten Agenten.

Ergebnis: Die erste Konversation wird Agent 3 zugewiesen, während die zweite und dritte Konversation nach dem Zufallsprinzip entweder Agent 1 oder Agent 3 zugewiesen werden.

**Beispiel 2**

Zusätzliche Bedingungen:

- 4 neue eingehende Konversationen.
- Die automatische Zuweisung von Konversationen zu einem beschäftigten Agenten ist deaktiviert.
- Agent 3 hat den Status in "Offline", "Abwesend" oder "Beschäftigt" geändert.

Ergebnis: Die erste Konversation wird Agent 1 zugewiesen. Die zweite Konversation wird entweder Agent 1 oder Agent 2 zugewiesen. Die dritte Konversation wird dem Agenten zugewiesen, der nur noch drei Konversationen hat. Das vierte Gespräch wird nach dem Zufallsprinzip einem der drei Agenten zugewiesen.

### Szenario 6

Quelltabelle:

'''txt
| Name des Agenten | Grenzwert | Status | Unterhaltungen | Fertigkeiten | 
|------------|-------|--------|---------------|-------------------|
| Agent 1 | Nr. 5 | Online | Nr. 1 | Technischer Support |
| Agent 2 | Nr. 5 | Online | Nr. 1 | Abrechnung |
| Agent 3 | Nr. 5 | Online | Nr. 1 | Kundenbetreuung |
| Agent 4 | Nr. 5 | Online | Nr. 1 | Technischer Support |
'''

Häufige Bedingungen:

- Das Limit liegt bei 5 Konversationen pro Agent. 
- Jeder Agent wird pro Konversation zugewiesen
-Aktiviert:
  - Automatische Zuweisung von Konversationen.
  - Automatische Neuzuweisung von Konversationen.
  - Berücksichtigen Sie die Anzahl der Konversationen.
  - Berücksichtigen Sie die Konversationsfähigkeiten.

**Beispiel 1**

Zusätzliche Bedingungen:

- 1 neue eingehende Konversation mit dem Skill "Technischer Support" 
- 1 neue eingehende Konversation mit den Fähigkeiten 'Technischer Support', 'Abrechnung'
- Deaktiviert: Automatisches Zuweisen von Konversationen zu einem beschäftigten Agenten.

Ergebnis: Das erste Gespräch wird entweder Agent 1 oder Agent 4 zugewiesen, die beide über die erforderlichen Fähigkeiten verfügen. Die zweite Konversation wird entweder Agent 2 oder dem Agenten zugewiesen, dem eine Konversation aus der vorherigen Zuweisung überlassen wurde.

**Beispiel 2**

Zusätzliche Bedingungen:

- 1 neue eingehende Konversation mit dem Skill "Technischer Support"
- 1 neue eingehende Konversation mit den Fähigkeiten 'Technischer Support', 'Abrechnung'
- Agent 2 geht offline
- Deaktiviert: Automatisches Zuweisen von Konversationen zu einem beschäftigten Agenten.

Ergebnis: Die erste eingehende Konversation wird Agent 1 zugewiesen.
die zweite an Agent 4.

**Beispiel 3**

Zusätzliche Bedingungen:

- 1 neue eingehende Konversation mit dem Skill "Technischer Support"
- 1 neue eingehende Konversation mit den Fähigkeiten 'Technischer Support', 'Abrechnung'
- Agent 1 und Agent 2 gehen offline
- Deaktiviert: Automatisches Zuweisen von Konversationen zu einem beschäftigten Agenten.

Ergebnis: Die erste und die zweite eingehende Konversation werden Agent 4 zugewiesen.

### Szenario 7

Quelltabelle:

'''txt
| Name des Agenten | Grenzwert | Status | Unterhaltungen | Fertigkeiten | Sprachen |
|------------|-------|--------|---------------|-------------------|------------------|
| Agent 1 | Nr. 5 | Online | Nr. 1 | Technischer Support | Englisch |
| Agent 2 | Nr. 5 | Online | Nr. 1 | Abrechnung | Spanisch |
| Agent 3 | Nr. 5 | Online | Nr. 1 | Kundenbetreuung | Englisch, Spanisch |
| Agent 4 | Nr. 5 | Online | Nr. 1 | Technischer Support | Griechisch |
'''
Häufige Bedingungen:

- Das Limit liegt bei 5 Konversationen pro Agent.
- Jeder Agent hat pro Konversation zugewiesen.
-Aktiviert:
    - Automatische Zuweisung von Konversationen.
    - Automatische Neuzuweisung von Konversationen.
    - Berücksichtigen Sie die Anzahl der Konversationen.
    - Berücksichtigen Sie die Konversationsfähigkeiten.
    - Berücksichtigen Sie Konversationssprachen.
  
**Beispiel 1**

Zusätzliche Bedingungen:

- 1 neues eingehendes Gespräch mit den Kenntnissen 'Technischer Support', 'Englisch'
- 1 neues eingehendes Gespräch mit den Fähigkeiten 'Technischer Support', 'Abrechnung', 'Spanisch'
- Deaktiviert: Automatisches Zuweisen von Konversationen zu einem beschäftigten Agenten.

Ergebnis: Die erste eingehende Konversation wird Agent 1 zugewiesen, die zweite Deckung wird nach dem Zufallsprinzip zugewiesen, mit Ausnahme von Agent 1.

**Beispiel 2**

Zusätzliche Bedingungen:

- 3 neue eingehende Konversation mit den Kenntnissen 'Technischer Support', 'Englisch'
- Deaktiviert: Automatisches Zuweisen von Konversationen zu einem beschäftigten Agenten.

Ergebnis: 3 eingehende Konversationen werden Agent 1 zugewiesen.

### Szenario 8

Quelltabelle:

'''txt
| Name des Agenten | Grenzwert | Status | Unterhaltungen | Fertigkeiten | Sprachen | 
|------------|-------|--------|---------------|-------------------|------------------|
| Agent 1 | Nr. 5 | Online | Nr. 1 | Technischer Support | Englisch |
| Agent 2 | Nr. 5 | Online | Nr. 1 | Abrechnung | Spanisch |
| Agent 3 | Nr. 5 | Online | Nr. 1 | Kundenbetreuung | Englisch, Spanisch |
| Agent 4 | Nr. 5 | Online | Nr. 1 | Technischer Support | Griechisch |
'''
Häufige Bedingungen:

- Das Limit liegt bei 5 Konversationen pro Agent.
- Jeder Agent wird pro Konversation zugewiesen.
-Aktiviert:
    - Automatische Zuweisung von Konversationen.
    - Automatische Neuzuweisung von Konversationen.
    - Berücksichtigen Sie die Anzahl der Konversationen.
    - Berücksichtigen Sie die Konversationsfähigkeiten.
    - Berücksichtigen Sie Konversationssprachen.
    - Berücksichtigen Sie die Priorität der Konversation.

**Beispiel 1**

Zusätzliche Bedingungen:

- 1 neue eingehende Konversation mit den Prioritäten "Technischer Support", "Englisch" und **Recht**
- 1 neue eingehende Konversation mit den Fertigkeiten "Technischer Support", "Abrechnung", "Spanisch" und **Dringend**
- Deaktiviert: Automatisches Zuweisen von Konversationen zu einem beschäftigten Agenten.

Ergebnis: Die erste eingehende Konversation wird Agent 1 zugewiesen, während die zweite Konversation nach dem Zufallsprinzip jedem verfügbaren Agenten zugewiesen wird, mit Ausnahme von Agent 1.

**Beispiel 2**

Zusätzliche Bedingungen:

- 1 neue eingehende Konversation mit der Priorität **Gesetz**.
- 1 neue eingehende Konversation mit den Fertigkeiten "Technischer Support", "Abrechnung", "Spanisch" und **Dringend**
- Deaktiviert: Automatisches Zuweisen von Konversationen zu einem beschäftigten Agenten.

Ergebnis: Das erste Gespräch wird nach dem Zufallsprinzip vergeben,
Und der zweite wird ebenfalls zufällig zwischen den verbleibenden Agenten mit Skill- und Sprachübereinstimmungen zugewiesen.

## Mehr Informationen

- [Manueller Konversationsmodus](manual-mode.md)
- [Konversations-Routing](automatic-mode.md)
- [Posteingänge](.. /.. /settings/inboxes.md)
- [Kontoeinstellungen](.. /.. /settings/account-settings.md)