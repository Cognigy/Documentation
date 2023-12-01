---
 title: "Profil aktivieren" 
 Slug: "Profil aktivieren" 
 ausgeblendet: false 
---
# Profil aktivieren

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/activate-profile.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Der Knoten Profil aktivieren wird verwendet, um ein deaktiviertes Profil wieder zu aktivieren, falls der Benutzer die Datenerfassung versehentlich deaktiviert hat oder die Datenerfassung wieder zulassen möchte. Der Node nimmt keine Parameter an, da er nur das Profil des Kontakts aktiviert, der den Node getroffen hat.

!!! Tipp "Allgemeiner Gebrauch"
    Es ist üblich, diesen Node hinter einem 'If Node' zu platzieren, so dass der Node nur dann getroffen wird, wenn der Kontakt ausdrücklich darum bittet, dass Daten gesammelt werden sollen.