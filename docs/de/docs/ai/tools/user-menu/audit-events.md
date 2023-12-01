---
 Titel: "Audit-Ereignisse" 
 Slug: "Audit-Ereignisse" 
 ausgeblendet: false 
---
# Audit-Ereignisse

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.35.0-blue.svg)] ({{config.site_url}})

Die Schnittstelle "Ereignisse überwachen" ermöglicht es Benutzern mit admin [role]({{config.site_url}}live-agent/roles), Ereignisse auf Organisationsebene zu verfolgen. 

### Dashboard für Audit-Ereignisse aufrufen

Als Admin-Benutzer können Sie die Schaltfläche **Ereignisse überwachen** im Benutzermenü sehen. Klicken Sie darauf, um auf das Dashboard "Audit-Ereignisse" zuzugreifen:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/audit-events-dashboard.png" width="100%" />
</figure>

### Liste der Überwachungsereignisse
Die Liste Überwachungsereignisse enthält alle Ereignisse, die in den letzten 30 Tagen aufgetreten sind, dargestellt durch sechs informative Spalten zur Beschreibung der einzelnen Ereignisse:

- **Typ**: Ereignistyp, bei dem es sich um einen der vordefinierten Ereignistypen handeln kann (Aktion, Erstellen, Ersetzen, Patchen, Löschen, Nicht autorisiert).
- **Aktion**: Spezifische Spalte zur Beschreibung des **Aktions**-Typs. Es enthält Elemente wie "cancelTask", "addRoleToUser", "addProjectMember".
- **Ressourcentyp**: Typ der [Ressource]({{config.site_url}}ai/resources/agents/agents), die im Ereignis verwendet wird (z. B. Projekt, Knoten, Flow, ... usw.). 
- **Zeitstempel**: Die genaue Uhrzeit des Ereignisses. 
- **Projekt**: Identifikationsnummer des Projekts, in dem das Ereignis stattgefunden hat. 
- **Benutzer-E-Mail**: E-Mail-Adresse des Benutzers, der das Ereignis ausgelöst hat. 

## Funktionsweise

#### 1. Filtern von Überwachungsereignissen
Die Liste der Überwachungsereignisse kann nach Benutzer-E-Mail gefiltert werden, um alle Ereignisse zu finden, die ein bestimmter Benutzer ausgelöst hat:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/filter-by-user-email.png" width="100%" />
</figure>

Sie können auch nach Typ gefiltert werden, um ein bestimmtes Ereignis (z. B. Aktion) zu finden:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/filter-by-type.png" width="100%" />
</figure>

#### 2. Sortieren von Überwachungsereignissen
Standardmäßig ist die Liste der Überwachungsereignisse nach dem neuesten Ereignis sortiert:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/default-sorting.png" width="100%" />
</figure>

Sie kann nach Typ, Zeitstempel oder Benutzer-E-Mail sortiert werden. 

#### 3. Benutzerdetails anzeigen
Klicken Sie auf die E-Mail-Adresse des Benutzers, um sein Profil für weitere Details anzuzeigen.

#### 4. Ereigniskette visualisieren

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/event-chain.png" width="100%" />
</figure>

Bewegen Sie den Mauszeiger über ein Ereigniselement, um die Kette des Ereignisses anzuzeigen. Es zeigt die Abhängigkeit aller Ressourcen, die sich auf das Ereignis beziehen.

#### 5. Veranstaltungsdetails anzeigen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/raw-event-details.png" width="100%" />
</figure>

Klicken Sie auf ein Ereigniselement, um weitere Details zum Ereignis in einem technischen Format (JSON) anzuzeigen.

#### 6. Kopieren von Ereignisdetails
Klicken Sie auf die sekundäre Menüschaltfläche neben der Schaltfläche "Schließen" (X), um die Ereignisdetails zu kopieren.