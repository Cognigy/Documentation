---
 Titel: "Profil" 
 slug: "Profil" 
 ausgeblendet: false 
---
# Steckbrief

Das Profil ist ein JSON-Objekt, das persistente Informationen über den Endbenutzer speichert.

Jeder Kontakt, der sich mit Cognigy.AI verbindet, hat sein eigenes **Kontaktprofil**, das auf der Plattform gespeichert ist. Wenn ein Kontakt die Verbindung zu Cognigy.AI trennt, werden die **Profildaten** in der Datenbank beibehalten und bei erneuter Verbindung mit derselben Benutzer-ID abgerufen. Auf diese Weise können Multichannel-Konversationen stattfinden, indem auf das gespeicherte Benutzerprofil zugegriffen wird, wenn der Benutzer über einen alternativen Kanal eine Verbindung herstellt.

Der [Flow]({{config.site_url}}ai/resources/build/flows/) kann aus dem **Profil** lesen und in das **Profil** schreiben, indem er Benutzernachrichten, Slots, Absichten oder andere Daten speichert, die während der Sitzung verfügbar sind. Weitere Informationen zur Lebensdauer des Profils finden Sie auf der Seite [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/#cognigy-objects-life-span/).

## Zugriff auf das Profile-Objekt<div class="divider"></div>Flow-Knoten können dynamisch über [Tokens]({{config.site_url}}ai/resources/manage/tokens/) oder [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) auf **Profil**-Eigenschaften zugreifen, z. B. '{{ " {{profile.property}}" }}'. Das Cognigy-Skript, das für den Zugriff auf das Profilobjekt verwendet wird, folgt der Punktnotation 'property.child.child'.

**Beispiel für ein Profilobjekt**

'''JavaScript
{
    "firstname": "Thijs",
    "Nachname": "Waanders"
}
'''

* '{{ " {{profile.firstname}}" }}' würde 'Thijs' zurückgeben

Flow-Knoten können auch verwendet werden, um die gespeicherten Profildaten für einen Benutzer zu aktualisieren. Weitere Informationen zu den zu verwendenden Knoten finden Sie auf der Seite [Flow Nodes]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/#profile-nodes).