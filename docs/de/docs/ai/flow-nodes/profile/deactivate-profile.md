---
 title: "Profil deaktivieren" 
 Slug: "Profil deaktivieren" 
 ausgeblendet: false 
---
# Profil deaktivieren

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/deactivate-profile.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Dieser Knoten wird verwendet, um ein bestimmtes Kontaktprofil zu deaktivieren, falls ein Kontakt dies anfordert. Dieser Knoten hat einen Parameter, da er das Profil des Kontakts, der auf den Knoten trifft, deaktiviert und bei Bedarf auch die gespeicherten Profildaten löschen kann.

| Parameter | Typ | Beschreibung |
|------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Daten löschen | Boolescher Wert | Bei True deaktiviert dieser Knoten das Kontaktprofil und löscht gespeicherte Daten, einschließlich **aller Analysedaten** und **aller Transkripte**. Das **Kontaktprofil** wird nicht gelöscht, so dass es weiterhin möglich ist, den Benutzer erneut zu aktivieren. |

!!! Tipp "Allgemeiner Gebrauch"
    Es ist üblich, diesen Knoten hinter einem ''Wenn-Knoten'' zu platzieren, der nur aktiviert wird, wenn der Kontakt ausdrücklich darum bittet, dass Sie keine Daten sammeln sollen.

!!! Gefahr "Wichtig"
    Wenn die Option "DeleteData" verwendet wird, werden **alle Analysedaten** und **alle Transkripte** aus dem System entfernt. Dieser Vorgang kann nicht rückgängig gemacht werden.