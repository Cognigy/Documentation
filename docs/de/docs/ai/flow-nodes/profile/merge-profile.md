---
 Titel: "Profil zusammenführen" 
 Slug: "Merge-Profil" 
 ausgeblendet: false 
---
# Profil zusammenführen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/merge-profile.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Der Merge Profile Node wird verwendet, um das Profil des Kontakts, der auf den Node trifft, mit einem anderen Kontaktprofil zusammenzuführen. Dies ist nützlich in einer Omnichannel-Umgebung, in der ein Kontakt auf verschiedenen Plattformen mit Ihrem Flow kommunizieren kann, aber auf allen Plattformen als dieselbe Person erkannt werden möchte.

| Parameter | Typ | Beschreibung |
|-----------|---------------|------------------------------------------------------------------------------------|
| Kontakt-ID | CognigyScript | Die ID des Kontakts, den Sie mit dem aktuellen Kontakt zusammenführen möchten, der den Knoten erreicht hat. |

!!! Hinweis "Beispiel"
    Nehmen wir an, ein Benutzer ist auf Ihrer Website angemeldet und verwendet den Webchat, den Sie dort haben. Sie haben dadurch ein Kontaktprofil, in dem die Benutzer-ID mit ihrer ID auf Ihrer Website übereinstimmt. Wenn Sie dann ihre Website-ID z. B. mit ihrem Konto bei Amazon verknüpfen möchten, damit sie das gleiche **Kontaktprofil** haben, wenn sie über ein Alexa-Gerät mit Ihrem Flow sprechen, müssen Sie nur ihre Amazon-Benutzer-ID durch Kontoverknüpfung erhalten und diese ID an den Merge Profile Node weitergeben. Danach hat der Kontakt ein Profil, das aktiviert wird, wenn er über den Webchat und über sein Alexa-Gerät mit Ihrem Flow spricht.