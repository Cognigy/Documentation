---
 Titel: "Zutrittskontrolle" 
 Schnecke: "Zutrittskontrolle" 
 ausgeblendet: false 
---
# Zutrittskontrolle

Die Benutzeroberfläche Access Control bietet ein Benutzerverwaltungstool für die Verwaltung auf Organisationsebene. Sie fungiert als **Access Control List (ACL)** und ermöglicht es, Benutzern eine bestimmte Rolle zuzuweisen.

Sie haben wie folgt Zugriff auf das Bedienfeld "Zugriffssteuerung":

1. Klicken Sie auf das **Profil**-Symbol in der oberen rechten Ecke der Benutzeroberfläche.
2. Wählen Sie **Zugriffskontrolle** im Dropdown-Menü aus.

## Benutzer<div class="divider"></div>In der **Benutzerübersicht** werden alle Mitglieder einer bestimmten **Organisation** aufgelistet. Einzelne **Benutzer** können anschließend über die Schnittstelle [**Members**]({{config.site_url}}ai/resources/manage/members/) **bestimmten Agenten** zugewiesen werden.

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.19.0-blue.svg)] ({{config.site_url}})

Mit dieser Version wurde die Benutzerliste mit Benutzerinformationen "Zuletzt aktiv" verbessert. Der Eintrag mit "-" zeigt an, dass sich der Benutzer entweder nach der Veröffentlichung von v4.19.0 nicht angemeldet hat oder dass er sich noch gar nicht angemeldet hat.

!!! Hinweis "Tipp: Globale Benutzer und lokale Benutzer (Mitglieder)"
    Administratoren können **globale Benutzer** auf Organisationsebene erstellen, die dann bestimmten Agenten zugewiesen werden können. Diese **lokalen Benutzer** können detailliertere Rollen innerhalb bestimmter Agentenprojekte haben, die über das Bedienfeld [Members]({{config.site_url}}ai/resources/manage/members/) in jedem Agenten konfiguriert werden.

## Neue Benutzer anlegen
Administratoren können die Schaltfläche *Neuen Benutzer erstellen* verwenden, um einen Benutzer zur Organisation hinzuzufügen. Folgende Felder müssen ausgefüllt werden: 

*Anzeigename
  *E-Mail-Adresse
  *Passwort
  * Passwort bestätigen

!!! Tipp "Passwörter können jederzeit geändert werden und werden sicher gespeichert"
    Der Benutzer kann das Passwort später über das Admin-Panel ändern.

## Globale Benutzerzugriffskontrolle<div class="divider"></div>### Zugewiesene Agenten

Weisen Sie einem Benutzer Agenten zu, indem Sie unter **Zugewiesene Projekte** auf die Schaltfläche **+** klicken und einen Agenten auswählen. Sobald einem Benutzer ein Agent zugewiesen wurde, wird der Agent auf dem Start-Dashboard des Benutzers angezeigt.

### Globale Rollen

*Rollen* verleihen jedem Benutzerprofil die Berechtigung zum Ausführen von CRUD-Aktionen (Erstellen, Lesen, Aktualisieren oder Löschen) und können auf benutzerdefinierte Weise vergeben werden. **Globale Rollen** werden einem Benutzer zugewiesen, um die Basis-Zugriffssteuerungsliste (ACL) zu definieren, die im [Mitgliederbereich]({{config.site_url}}ai/resources/manage/members/) für jeden Agenten angezeigt wird.

Die folgenden **globalen Rollen** sind verfügbar:

| Rolle | 	Beschreibung                                                                                                                                                                                                                                                  |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Admin | 	Administratoren haben unbegrenzten Zugriff auf alles innerhalb ihrer Organisation. Bei einer Neuinstallation legt das System einen Benutzer mit dieser Rolle an. Ein Plattformbesitzer sollte einen neuen Benutzer mit dieser Rolle anlegen und den automatisch erstellten Benutzer bei der ersten Anmeldung löschen. |
| Basis-Rolle | 	Die Rolle "Basic" kann die meisten Entitäten im System anzeigen. Sobald ein neuer Benutzer im System erstellt wurde, wird diese Rolle automatisch zugewiesen.                                                                                                                |
| Projektmanager | 	Kann neue Projekte (Agenten) erstellen, aber keine Benutzer verwalten.                                                                                                                                                                                                  |
| Benutzer-Manager | 	Kann neue Benutzerkonten erstellen, die Projekten zugewiesen werden können.                                                                                                                                                                                               |
| API-Schlüssel | 	Kann organisationsweite API-Schlüssel für jeden Benutzer erstellen, um auf die Cognigy.AI RESTful-API zuzugreifen. Die gleichen Berechtigungen gelten, wenn ein ApiKey verwendet wird.                                                                                                                    |
| OData | 	Kann den Abschnitt "Organisationsdetails" und den Zugriff auf die OData-Schnittstelle verwenden, um Analyseinformationen abzufragen.                                                                                                                                                   |
| Live-Agenten-Admin | Diese Rolle wird Benutzern zugewiesen, um als Administrator auf Cognigy Live Agent zuzugreifen. Diese Rolle hat die gleichen Berechtigungen wie die Basisrolle in Cognigy AI.                                                                                                                  |
| Live-Agent-Agent | Diese Rolle wird Benutzern zugewiesen, um als Agent auf Cognigy Live Agent zuzugreifen. Diese Rolle hat die gleichen Berechtigungen wie die Basisrolle in Cognigy AI.                                                                                                                  |
| userDetailsViewer | Diese Rolle ist auf den schreibgeschützten Zugriff beschränkt, der Benutzern Berechtigungen zum Anzeigen von Benutzerdetails wie E-Mail-Adressen und Benutzernamen gewährt. Die Rolle ermöglicht es einem Administrator, Benutzerdetails in Cognigy zu verwalten, ohne andere Zugriffsrechte oder Privilegien zu gewähren.       |
| userDetailsViewer | Diese Rolle ist auf den schreibgeschützten Zugriff beschränkt, der Benutzern Berechtigungen zum Anzeigen von Benutzerdetails wie E-Mail-Adressen und Benutzernamen gewährt. Die Rolle ermöglicht es einem Administrator, Benutzerdetails in Cognigy zu verwalten, ohne andere Zugriffsrechte oder Privilegien zu gewähren.       |
| voiceGateway-Benutzer | Diese Rolle wird Benutzern mit dem [Konto](.. /.. /.. /voicegateway/webapp/users.md#account) für den Zugriff auf das Voice Gateway Self-Service-Portal, sodass sie sich über ihre Cognigy.AI Benutzeranmeldeinformationen autorisieren können.                                      |

!!! Hinweis "Kontrolle der globalen Zugriffsrechte"
    Die globalen Rollen, die einem Benutzer zugewiesen sind, legen die grundlegenden Zugriffsrechte für jeden Agenten fest, auf den der Benutzer Zugriff hat. Rollen auf Projektebene können über das [Mitglieder-Panel]({{config.site_url}}ai/resources/manage/members/) zugewiesen werden, um die Rechte eines Benutzers zum Erstellen ausgewählter Elemente eines bestimmten Agenten zu erhöhen.

Spezifischere **Zugriffsrechte** können für einzelne Funktionen innerhalb von Agenten definiert werden, z. B. für Flows, Lexika, Playbooks bis hin zu fein abgestuften Flow-Eigenschaften wie [Basic]({{config.site_url}}ai/flow-nodes/message/message/) oder [Advanced]({{config.site_url}}ai/flow-nodes/nlu/copy-slots-to-context/) Flow-Nodes. Diese Zugriffsrechte auf **Agentenebene** ergänzen die **Globalen Rechte** und werden im Bereich [Mitglieder]({{config.site_url}}ai/resources/manage/members/) jedes Agenten zugewiesen.

## Benachrichtigungen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.50-blue.svg)] (.. /.. /.. /release-notes/4.50.md)

Wenn Sie einen neuen Benutzer erstellen oder einem vorhandenen Benutzer ein Projekt zuweisen, erhält dieser Benutzer eine Benachrichtigung an die in seinem Profil angegebene E-Mail-Adresse. Die E-Mail enthält Informationen über den Projektnamen und seine URL.

## Mehr Informationen

- [Mitglieder]({{config.site_url}}ai/resources/manage/members/)
- [Organisationsdetails]({{config.site_url}}ai/tools/user-menu/organisation-details/)