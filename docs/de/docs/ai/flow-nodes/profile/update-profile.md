---
 title: "Profil aktualisieren" 
 Slug: "Update-Profil" 
 ausgeblendet: false 
---
# Profil aktualisieren

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/profile/update-profile.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Der Knoten "Profil aktualisieren" wird verwendet, um das Kontaktprofil des Benutzers zu aktualisieren.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/18cbc8a-update-profile.jpg" width="100%" />
</figure>

Die verfügbaren 'Schlüssel'-Optionen sind alle definierten Felder im Profilschema dieses Projekts.

Wenn der verwendete Schlüssel einen ungültigen Wert hat, führt er keine Funktion aus. Eine Liste der standardmäßigen Profileigenschaftsschlüssel finden Sie auf der Seite [Kontaktprofile]({{config.site_url}}ai/resources/manage/contact-profiles/)

| Parameter | Typ | Beschreibung |
|-----------|---------------|------------------------------------------------------|
| Schlüssel | Wählen Sie | Das Feld im Kontaktprofil des Benutzers, das aktualisiert werden soll. |
| Wert | CognigyScript | Der Wert, den Sie festlegen möchten.                           |