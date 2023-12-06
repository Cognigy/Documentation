---
 title: "Kontext" 
 slug: "Kontext" 
 ausgeblendet: false 
---
# Kontext

Der Context ist ein JSON-Objekt, das persistente Informationen speichert.

Jeder Kontakt, der sich mit Cognigy.AI verbindet, hat seinen eigenen Kontext, der während der gesamten Lebensdauer der Sitzung erhalten bleibt. Wenn ein Kontakt die Verbindung zu Cognigy.AI trennt, wird der Kontext in der Datenbank beibehalten und bei der Wiederherstellung der Verbindung abgerufen.

Der Flow kann aus dem Kontext lesen und in ihn schreiben, indem er Benutzernachrichten, Slots, Absichten oder andere Daten speichert, die während der Sitzung verfügbar sind. Weitere Informationen zur Lebensdauer des Kontexts finden Sie auf der Seite [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/#cognigy-objects-life-span/).

## Zugriff auf das Context-Objekt<div class="divider"></div>Flow-Knoten können dynamisch über [Tokens]({{config.site_url}}ai/resources/manage/tokens/) oder [CognigyScript]({{config.site_url}}ai/tools/cognigy-script/) zugreifen, z. B. '{{ " {{context.property}}" }}'. Das Cognigy-Skript, das für den Zugriff auf das Kontextobjekt verwendet wird, folgt der Punktnotation 'property.child.child'.

!!! note "JSON-Pfad aus dem Context-Objekt kopieren"
    Sie können den genauen JSON-Pfad kopieren, den Sie benötigen, um auf einen bestimmten Wert im Context-Objekt zu verweisen, indem Sie mit der rechten Maustaste darauf klicken und im Kontextmenü "JSON-Pfad kopieren" auswählen. 

**Beispiel**

'''JavaScript
{
    "Benutzer": {
        "name": "Luke Skywalker"
    }
}
'''

* '{{ " {{context.user.name}}" }}' würde 'Luke Skywalker' zurückgeben
* '{{ " {{context.user.age}}" }}' würde ' ' (leere Zeichenkette) oder - wenn in einer Bedingung verwendet - 'false' zurückgeben

!!! Tipp "Bearbeiten, Speichern oder Zurücksetzen des aktuellen Kontexts"
    Sie können das Kontextobjekt speichern, abbrechen oder zurücksetzen, indem Sie auf die Schaltflächen "Speichern", "Abbrechen" oder "Zurücksetzen" im unteren Optionsbereich des Interaktionsfensters klicken. Bei Kontextmanipulationen werden nur die Werte in der aktuellen Sitzung bearbeitet.<div class="divider"></div>Der Standardkontext ist der Anfangszustand des Kontexts, wenn die Sitzung gestartet wird. Dies kann angepasst werden, um Variablen zu initiieren, auf die während der Konversation zugegriffen und die geändert werden. Der Standardkontext wird im [Flow-Editor]({{config.site_url}}ai/resources/build/flows/) auf der Registerkarte **Einstellungen** konfiguriert.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/0654144-defaultContext.PNG" width="100%" />
</figure>

## Mehr Informationen

- [Profil]({{config.site_url}}ai/tools/interaction-panel/profile/)