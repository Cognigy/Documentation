---
 Titel: "Kontaktprofile" 
 Slug: "Kontakt-Profil" 
 ausgeblendet: false 
---
# Kontaktprofil

Kontaktprofile speichern Informationen über die Endbenutzer Ihrer KI und können von Flows und Endpunkten abgerufen werden. Kontaktprofile können verwendet werden, um Informationen dauerhaft zu speichern und Diskussionen mit Benutzern zu personalisieren.

Sie können Kontakte, die mit Ihren KIs interagieren, in *Kontaktprofilen* verwalten, in denen die Kontaktdaten und der Transkriptverlauf eingesehen werden können.

## Kontaktprofile verwalten<div class="divider"></div>Das Menü **Kontaktprofile** ist auf der Registerkarte **Verwalten** der Symbolleiste des Agenten verfügbar.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/4f02781-contact-profiles.png" width="100%" />
   <figcaption>Die Benutzeroberfläche für die Verwaltung von Kontaktprofilen</figcaption>
</figure>

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.2.0-blue.svg)] ({{config.site_url}})

Hier können Sie im Suchfeld oben rechts nach Kontaktprofilen suchen und die Tabelle sortieren, indem Sie auf die Spaltenüberschriften klicken. **Mit Cognigy.AI 4.2.0 haben wir eine neue Checkbox "Inaktive Profile ausblenden" eingeführt, die standardmäßig aktiviert ist.** Auf diese Weise durchsuchen unsere Kunden nur aktive Profile.

### Profil-Schema

Das Profilschema enthält die folgenden Standardschemawerte:

| Name der Eigenschaft|
| ----------- | 
| Kontakt-IDs | 
| Vorname |
| Nachname | 
| Akzeptierte DSGVO | 
| Erreichte Ziele | 
| E-Mail | 
| Geschlecht | 
| Alter | 
| Geburtstag | 
| Lage | 

Es ist auch möglich, benutzerdefinierte Schemaeigenschaften hinzuzufügen, um organisationsspezifische Daten zu verarbeiten.

* Klicken Sie auf die Schaltfläche *Schema bearbeiten* oben links im Menü **Kontaktprofile**, um den Editor zu öffnen.
  * Der Bereich Profilschema wird angezeigt, in dem jedes benutzerdefinierte Profildatenfeld angezeigt wird.
  * Klicken Sie auf die Schaltfläche *Hinzufügen* in der oberen rechten Ecke, um ein neues Feld hinzuzufügen.
  * Klicken Sie auf ein vorhandenes Feld, um ein Schemafeld zu bearbeiten

!!! Hinweis "Schema-Felder"
    Ein Schemafeld hat einen Feldnamen, der in der Benutzeroberfläche verwendet wird, einen eindeutigen internen Bezeichner *Interner Name* und einen Feldtyp.

!!! Warnung "Einschränkungen des Feldtyps"
    Ein Schemafeld, das auf den Typ *Zahl* festgelegt ist, sollte nicht mit einem Wert größer als 2<sup>53</sup> - 1 oder 9.007.199.254.740.991 (~9 Billiarden ) gefüllt werden. Höhere Ganzzahlen können in JavaScript nicht korrekt dargestellt werden.

### Kontaktprofile prüfen

Klicken Sie auf eine Kontaktzeile in der Tabelle der Kontaktprofile, um zu einem einzelnen Kontaktprofil zu navigieren.

Innerhalb des individuellen Kontaktprofils wird eine Liste der Gesprächsprotokolle mit den gespeicherten Kontaktprofildaten angezeigt, die im rechten Bereich verfügbar sind. 

Um die Datenerfassung für das Profil zu deaktivieren, klicken Sie auf den Schalter ***Datenerfassung aktiv***.
Um das Kontaktprofil zu löschen, öffnen Sie das sekundäre Menü in der oberen rechten Ecke und wählen Sie ***Kontakt löschen***.

## Kontaktprofile verwenden<div class="divider"></div>Kontaktprofile ermöglichen es Ihnen, einzelne Kontakte auch kanalübergreifend zu personalisieren und mit ihnen zu arbeiten.

Sie können über Flow-Knoten oder über CognigyScript verwendet werden, wobei Profile als "Profil" angezeigt werden.

Um Kontaktprofile in Ihrem Flow zu aktivieren, zu deaktivieren, zu löschen oder zusammenzuführen, können Sie die folgenden Knoten verwenden:

* Profil aktivieren
  * Profil deaktivieren
  * Profil löschen
  * Profil zusammenführen

!!! Tipp: "Verwenden Sie Kontaktprofildaten für ein personalisiertes Benutzererlebnis"
    Fügen Sie gespeicherte Kontaktprofilinformationen wie Name und Standort hinzu, um Benutzernachrichten eine persönliche Note zu verleihen. Weitere Informationen zum Zugriff auf Profildaten finden Sie auf der Seite [**Profile**]({{config.site_url}}ai/tools/interaction-panel/profile/).

## DSGVO<div class="divider"></div>Cognigy hilft unseren Kunden, die europäische Datenschutz-Grundverordnung (DSGVO) vollständig einzuhalten, indem es Folgendes ermöglicht:

- Der **Export** von Kontaktprofilen über UI und API
- Die **Löschung** von Kontaktprofilen
- Das **Ausschalten** der Datenerfassung für einzelne Profile und Endpunkte

## Auslaufende Kontaktprofile<div class="divider"></div>Es ist möglich, eine Ablaufzeit für Kontaktprofile so zu konfigurieren, dass diese automatisch aus dem System gelöscht werden. Dies kann in der Verwaltungsoberfläche konfiguriert werden.

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.11.0-blue.svg)] ({{config.site_url}})
## Konversationsliste sortieren<div class="divider"></div>Ab Cognigy.AI v4.11.0 wurde die Konversationsliste auf der Seite "Kontaktprofile" durch Sortieroptionen verbessert. 

- Um die Konversationsliste zu öffnen, klicken Sie auf der Seite "Kontaktprofile" auf eine "Kontakt-ID".

- Die Kopfzeilen der Konversationsliste können angeklickt werden und die Sortierreihenfolge ändert sich entsprechend.

Ein Pfeil nach oben oder unten wird neben der Kopfzeile angezeigt, auf die zuletzt geklickt wurde, zunächst am Startdatum.

Pfeile zeigen die richtige Sortierreihenfolge an, aufsteigend oder absteigend.

Kontaktprofile: Start- und Enddatum in absteigender Reihenfolge sortiert (gekennzeichnet durch einen Pfeil)<figure><figcaption>Kontaktprofile: Anzahl der Nachrichten (bezogen auf Flows) in absteigender Reihenfolge sortiert (gekennzeichnet durch einen Pfeil)</figcaption><img class="image-center" src="{{config.site_url}}ai/resources/images/797a434-Messages_sort.svg" width="100%" />
  
  
</figure> <figure><figcaption></figcaption><img class="image-center" src="{{config.site_url}}ai/resources/images/4f02781-contact-profiles.png" width="100%" />
  
  
</figure>


