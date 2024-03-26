---
Titel: "RingCentral Engage" 
Slug: "Ring-Central-Engage-Handover" 
ausgeblendet: false 
---
# RingCentral Engage-Integration

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/ring-central-engage.svg" width="100%" />
</figure>

## Beschreibung<div class="divider"></div>Cognigy hat **RingCentral Engage** als zusätzlichen Übergabeanbieter integriert
, die von Cognigy-Kunden verwendet werden können, um ihre Benutzer mit menschlichen Agenten zu verbinden.
Weitere Informationen zur Agentenübergabe finden Sie [hier](.. /.. /ai/tools/agent-handover.md). 

## Einrichtung<div class="divider"></div>Um RingCentral Engage als Übergabeanbieter mit Cognigy.AI zu verwenden, gehen Sie zu Bereitstellen und öffnen Sie Ihre Endpunkte.

Öffnen Sie den Endpunkt, an dem Sie die Übergabe an RingCentral Engage aktivieren möchten. Scrollen Sie nach unten zu **Übergabeeinstellungen** und wählen Sie RingCentral Engage aus.

Um die Einrichtung abzuschließen, gehen Sie wie folgt vor:
Siehe
im Artikel [Help Center: RingCentral Engage Handover Integration](https://support.cognigy.com/hc/en-us/articles/360016275260-RingCentral-Engage-Handover-Integration).

## Benutzerprofil an RingCentral Engage senden

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.29.0-blue.svg)] ({{config.site_url}})

Während eines Übergabeereignisses wird das Benutzerprofil an RingCentral Engage gesendet, um hilfreiche Informationen für menschliche Agenten bereitzustellen.

!!! Warnung "Profilfelder von Cognigy Profile und RingCentral Profile stimmen nicht genau überein"
    Das Cognigy-Benutzerprofil wird an RingCentral Engage gesendet und mit den in RingCentral Engage vorhandenen Objektschlüsseln abgeglichen. Die Informationen, die nicht übereinstimmen, werden dem Objekt "context_data" hinzugefügt. 

- [RingCentral Engage akzeptierte Benutzerprofilobjektstruktur](https://developers.ringcentral.com/engage/digital/guide/sdks/source-sdk/objects#users), die während der Übergabe gesendet wurde.
    - [Cognigy-Profilschema]({{config.site_url}}ai/resources/manage/contact-profiles/?h=profile#manage-contact-profiles). Das Cognigy-Profilschema kann bearbeitet und zusätzliche Felder mit bestimmten Objektschlüsseln hinzugefügt werden.

## Warteschlangen-Updates abrufen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.58.0-blue.svg)] ({{config.site_url}})

Die Einstellung **Warteschlangenaktualisierung abrufen** ermöglicht das Einfügen von Warteschlangenaktualisierungen als Ereignisse in den Konversationsfluss. Diese Funktion ermöglicht es Ihnen, auf Warteschlangenaktualisierungen in Ihrem Konversationsablauf zu reagieren.

Zusätzlich zum Aktivieren der Option **Warteschlangenaktualisierung abrufen**
Sie müssen den Suchknoten so konfigurieren, dass der Übergabetyp als **Warteschlange** ausgewählt ist. Weitere Informationen finden Sie unter [Übergabestatus](.. /flow-nodes/logic/lookup.md#handover-status) ein.

Die Warteschlangenaktualisierungen von RingCentral Engage sind im Objekt "input.data.handover" sichtbar. 
Das Objekt enthält die folgenden Eigenschaften:

- 'estimatedWaitTime' — die ungefähre Wartezeit für den Benutzer, gemessen in Millisekunden.
- 'position' — die Position der Konversation in der Warteschlange.