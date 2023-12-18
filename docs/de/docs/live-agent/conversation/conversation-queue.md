---
Titel: "Konversationswarteschlange"
slug: "Konversations-Warteschlange"
description: "Die Konversationswarteschlange ist eine Liste von Konversationen, die auf die Aufmerksamkeit menschlicher Agenten warten. In Live Agent ähnelt eine Warteschlange dem Wartebereich, in dem Gespräche geführt werden, bis der Agent die erste Antwort nicht gesendet hat."
ausgeblendet: false
---

# Konversations-Warteschlange

_Conversation Queue_ ist eine Liste von Gesprächen, die auf die Aufmerksamkeit von Agenten warten. In Live Agent ähnelt eine Warteschlange dem Wartebereich, in dem Konversationen geführt werden, bis der Agent die erste Antwort gesendet hat.

Die Warteschlange ist für Agenten auf der Registerkarte **Mine** der Seite "Konversation" sichtbar, wo sie die ihnen zugewiesenen Konversationen sehen und auf ihre Aufmerksamkeit warten können.

Die bereitgestellten Beispiele zeigen, wie die Agentenwarteschlange funktioniert:

!!! Anmerkung
    Die [Konversationslimits](.. /settings/account-settings.md#conversation-limit-per-agent) und das spezifische Warteschlangenverhalten können je nach Live Agent-Konfiguration und -Einstellungen variieren.

**Beispiel 1**

Bedingungen:

- Konversationen werden einem Agenten zugewiesen, aber der Agent muss immer noch die erste Antwort senden.
- Das Konversationslimit ist auf 2 Konversationen pro Agent festgelegt.
- Es steht ein Online-Agent zur Verfügung.
- Es werden 3 Konversationen erstellt.

Ergebnis: Die ersten beiden Konversationen werden dem Agenten zugewiesen und befinden sich in der Warteschlange, wo sie auf die Antwort des Agenten warten. Eine Konversation bleibt nicht zugewiesen.

**Beispiel 2**

Bedingungen:

- Konversationen werden einem Agenten zugewiesen, aber der Agent muss immer noch die erste Antwort senden.
- Das Konversationslimit ist deaktiviert, d. h. es gibt keine Begrenzung für die Anzahl der Konversationen pro Agent.
- Es steht 1 Online-Agent zur Verfügung.
- Es werden 3 Konversationen erstellt.

Ergebnis: Alle drei Konversationen werden dem Agenten zugewiesen und befinden sich in einer Warteschlange, in der darauf gewartet wird, dass der Agent die erste Antwort sendet. Keine der Konversationen wurde bisher zugewiesen.

**Beispiel 3**

Bedingungen:

- Beide Einstellungen im Posteingang sind aktiviert: Automatische Konversationszuweisung und Konversationspriorität berücksichtigen.
- Konversationen werden einem Agenten zugewiesen, aber der Agent muss immer noch die erste Antwort senden.
- Das Konversationslimit ist auf 2 Konversationen pro Agent festgelegt.
- Es steht ein Online-Agent zur Verfügung.
- Es werden 3 Konversationen mit unterschiedlichen [Prioritäten](conversation-routing/automatic-mode.md#consider-conversation-parameters) erstellt:
    - Konversation 1 ist mittel.
    - Konversation 2 ist Niedrig.
    - Konversation 3 ist hoch.

Ergebnis: Dem Agenten wird Konversation 3 (Hoch) zugewiesen, gefolgt von Konversation 1 (Mittel), beide in der Warteschlange. Unterhaltung 2 (Niedrig) bleibt nicht zugewiesen.

## Mehr Informationen

- [Converation Routing: Automatischer Modus](conversation-routing/automatic-mode.md)
- [Übersicht über das Converation Routing](conversation-routing/overview.md)