---
 title: "Profil löschen" 
 slug: "Profil löschen" 
 ausgeblendet: false 
---
# Profil löschen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/delete-profile.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Dieser Knoten wird verwendet, um das Profil eines bestimmten Kontakts zu **löschen**, falls ein Kontakt dies anfordert.

!!! Gefahr "Wichtig"
    Die Daten des Benutzers sind nach dem Ausführen dieses Knotens nicht mehr verfügbar: Er löscht das gesamte Profil einschließlich **aller Analysedaten** und **aller Transkripte**, die dieser Benutzer bisher hatte.

!!! Tipp "Allgemeiner Gebrauch"
    Es ist üblich, diesen Knoten hinter einem ''Wenn-Knoten'' zu platzieren, der nur aktiviert wird, wenn der Kontakt ausdrücklich darum bittet, dass Sie die persistenten Daten löschen.