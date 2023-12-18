---
Titel: "Blind-Modus"
Slug: "Blind-Modus"
ausgeblendet: false
---
# Blind-Modus

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/blind-mode.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Die Maskierung von Daten ist wichtig, um die Privatsphäre der Benutzer und ihre sensiblen Informationen zu schützen. In Cognigy.AI werden Benutzereingaben und -antworten protokolliert und für das Training analysiert. Diese Protokolle können jedoch personenbezogene Daten wie Namen, Adressen oder andere vertrauliche Daten enthalten.

Der Blind Mode Node bietet Optionen zum vollständigen Maskieren von Daten innerhalb der Protokollierung, Analysen, Intent Trainer-Aufzeichnungen oder Konversationen. Mit diesem Knoten können Sie sicherstellen, dass Benutzerinformationen sicher und privat bleiben.

## Einstellungen

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                             |
|--------------------------------|--------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Masken-Protokollierung | Umschalten | Maskiert Benutzereingaben in den [Logs](.. /.. /resources/test/logs.md).                                                                                                                                                                                                                                          |
| Masken-Analytik | Umschalten | Maskiert Benutzereingaben in der [Analytics](.. /.. /tools/analytics/analytics.md) (einschließlich Kontaktprofil-Konversationen) und blendet sie in der Nachrichtenvorschau in der Insights [Nachricht](.. /.. /.. /insights/message-explorer.md) und [Transcript](.. /.. /.. /insights/transcript-explorer.md) Entdecker. |
| Intent-Trainer-Datensätze deaktivieren | Umschalten | Absichten aus der Konversation werden nicht aufgezeichnet.                                                                                                                                                                                                                                                          |
| Unterhaltungen deaktivieren | Umschalten | Erfasst keine Benutzereingaben für [Analytics](.. /.. /tools/analytics/analytics.md) Daten.                                                                                                                                                                                                                  |

Wenn Sie Daten für den gesamten Flow maskieren möchten, können Sie die Maskierung alternativ am [Endpunkt](.. /.. /resources/deploy/endpoints.md) verwenden.

## Beispiel

Durch Hinzufügen eines Blindmodus-Knotens können Sie die Maskierung an einem bestimmten Punkt im Flow aktivieren und später deaktivieren, um die Daten während der gesamten Konversation wieder sichtbar zu machen. 

Platzieren Sie z. B. den Knoten für den Blindmodus, bevor Sie nach der E-Mail-Adresse eines Benutzers fragen, aktivieren Sie ihn mit der Beschriftung "Blinder Modus ein" und deaktivieren Sie ihn später mit der Beschriftung "Blindmodus aus". Auf diese Weise werden alle Benutzerantworten auf die E-Mail-Frage vollständig maskiert, und niemand kann sie in den Konversationsaufzeichnungen und -protokollen sehen.<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/blind-mode-example.png" width="100%" />
</figure>
