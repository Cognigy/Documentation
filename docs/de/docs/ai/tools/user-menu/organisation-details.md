---
Titel: "Details zur Organisation" 
Slug: "Organisations-Details" 
ausgeblendet: false 
---

# Details zur Organisation

Die Seite **Organisationsdetails** enthält einen Analyseübersichtsabschnitt mit der Bezeichnung **Abrechenbare Konversationen**.
Bereitstellung eines umfassenden Berichts über das Konversationsvolumen für Plattformadministratoren
, die zwischen allen Agenten in der Organisation stattgefunden haben.

So greifen Sie auf die Seite **Organisationsdetails** zu: 
Klicken Sie in der oberen rechten Ecke einer beliebigen Cognigy.AI Seite auf **Benutzermenü** und wählen Sie dann **Organisationsdetails** aus.

## Abrechenbare Konversationen

Das Diagramm zeigt eine Reihe von [abrechenbaren Gesprächen](.. /.. /billing.md).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/d242bd4-usageStats.png" width="100%" />
  <figcaption>Der Bericht "Abrechenbare Unterhaltungen"</figcaption>
</figure>

## Filtern von Berichten

Der Bericht kann mithilfe der Dropdown-Listen für den Datumsfilter oben rechts auf der Seite nach Jahr und Monat gefiltert werden.

## Löschen einer Organisation

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.30.0-blue.svg)] ({{config.site_url}})

Mit dieser Funktion werden alle Daten aus Ihrer Organisation gelöscht.

!!! Gefahr
    Es gibt keine Möglichkeit, den Löschvorgang rückgängig zu machen. Sobald Sie den Vorgang eingeleitet haben, werden alle Ihre Daten dauerhaft gelöscht.

Vor dem Löschen der Organisation müssen Sie Folgendes einrichten:

- Eine gültige E-Mail-Adresse des Systemadministrators in der Umgebungsvariablen 'SYS_ADMINISTRATOR_EMAIL'.
- Die Cognigy.AI [Management UI](organisation-details.md) ordnungsgemäß installiert und ihr Pfad in der Umgebungsvariablen 'MANAGEMENTUI_BASE_URL_WITH_PROTOCOL' festgelegt.

Dieser Prozess umfasst die folgenden Schritte:

1. Ein Benutzer mit einer Administratorrolle (Systemadministrator) fordert das Löschen der Organisation auf der Seite **Organisationsdetails** an. Diese Aktion löst eine Anfrage aus, die für den nächsten Schritt an den Systemadministrator gesendet wird (E-Mail-Adresse als "SYS_ADMINISTRATOR_EMAIL festgelegt").

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/tools/images/delete-organisation-confirm_org_deletion.png" width="100%" />
      <figcaption>Organisation löschen</figcaption>
    </figure>

2. Sobald der Systemadministrator die E-Mail erhalten hat, kann er auf den bereitgestellten Link zur [Verwaltungs-Benutzeroberfläche] (.. /management-ui.md) durch das eingebettete Token, um mit dem Löschen fortzufahren. Der Systemadministrator muss über einen gültigen Benutzer für die Cognigy Management-Benutzeroberfläche verfügen.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/tools/images/deleteOrg-request-email.png" width="100%" />
      <figcaption>E-Mail zum Löschen von Organisationen</figcaption>
    </figure>

3. Nach der Anmeldung bei der Verwaltungsbenutzeroberfläche muss der Systemadministrator auf die Schaltfläche **Organisation löschen** klicken, die den Punkt angibt, an dem es kein Zurück mehr gibt, um die gesamte Organisation zu löschen.

    <figure>
      <img class="image-center" src="{{config.site_url}}ai/tools/images/delete-organisation-delete_org_management_ui.png" width="100%" />
      <figcaption>Löschen einer Organisation in der Verwaltungsbenutzeroberfläche</figcaption>
    </figure>

Sobald der Löschvorgang abgeschlossen ist,
Der Systemadministrator erhält eine E-Mail, in der er darüber informiert wird, dass die Organisation vollständig entfernt wurde.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/deleteOrg-complete-email.png" width="100%" />
  <figcaption>Abgeschlossene E-Mail der Organisation löschen</figcaption>
</figure>
