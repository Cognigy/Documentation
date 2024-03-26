---
 Titel: "Mein Profil" 
 Schnecke: "Mein-Profil" 
 ausgeblendet: false 
---
# Mein Profil

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/945574c-usermenu-profile.jpg" width="100%" />
</figure>

## Einstellungen

In diesem Abschnitt kann die **Sprache der Benutzeroberfläche** ausgewählt werden. Cognigy.AI unterstützt derzeit die folgenden Sprachen der Benutzeroberfläche: **Englisch**, **Deutsch**, **Koreanisch**, **Japanisch** und **Spanisch**.

## Globale Rollen

Im Abschnitt **Globale Rollen** können globale Rollen zugewiesen werden, die für verschiedene Agenten gelten. Detailliertere lokale Rollen können pro Agent konfiguriert werden. 

## Login-Historie

Dieser Abschnitt zeigt eine Liste der bisherigen Login-Sitzungen und deren Speicherort (falls vorhanden). Dies kann zu Prüfungszwecken verwendet werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/8a69f25-usermenu-login-history.jpg" width="100%" />
</figure>

## API-Schlüssel

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.49-blue.svg)] (.. /.. /.. /release-notes/4.49.md)

API-Schlüssel (Application Programming Interface) sind Sicherheitstoken, die für ein Benutzerkonto registriert sind. Diese Token können von externen Anwendungen verwendet werden, um auf Cognigy.AI zuzugreifen, so wie ein menschlicher Benutzer sein Passwort eingeben würde, um sich bei der Plattform anzumelden. 

API-Schlüssel erben die gleichen Berechtigungen wie das zugeordnete Benutzerprofil, z. B. Admin, Projektmanager oder OData. 

API-Schlüssel bieten die Autorisierung zum Ausführen von Anfragen, die über die [Cognigy Open API]({{config.site_url}}ai/developer-guides/using-api/) zur Verfügung gestellt werden, oder zum Zurückgeben von Konversationsdaten vom [Cognigy OData Analytics Endpoint]({{config.site_url}}ai/tools/analytics/odata-analytics-endpoint/).

### API-Schlüssel erstellen

Ein Benutzer, der über die globalen Berechtigungen verfügt, kann seine API-Schlüssel auf der Seite **Mein Profil** erstellen:

Gehen Sie folgendermaßen vor, um einen API-Schlüssel zu erstellen:

1. Wechseln Sie auf der Seite **Mein Profil** zum Abschnitt **API-Schlüssel**.
2. Klicken Sie auf **+**. 
3. Geben Sie einen eindeutigen Namen für den API-Schlüssel ein und klicken Sie auf **Bestätigen**.
4. Kopieren Sie den Schlüssel, indem Sie auf den Schlüsselwert klicken, und speichern Sie ihn dann in Ihrem lokalen Speicher. Aus Sicherheitsgründen wird der Schlüssel nur einmal in diesem Fenster angezeigt, d. h., wenn Sie den Schlüssel nicht speichern, können Sie den Schlüsselwert nicht erneut anzeigen oder kopieren.

Sobald der API-Schlüssel erstellt wurde, werden sein Name und sein Erstellungsdatum in der Liste der API-Schlüssel angezeigt.

### API-Schlüssel widerrufen

Gehen Sie folgendermaßen vor, um einen API-Schlüssel zu widerrufen:

1. Wechseln Sie auf der Seite **Mein Profil** zum Abschnitt **API-Schlüssel**.
2. Klicken Sie neben dem ausgewählten API-Schlüssel auf ! [vertikale-Auslassungspunkte] (.. /.. /.. /assets/icons/vertical-ellipsis.svg) **> API-Schlüssel widerrufen**.

Der API-Schlüssel wird widerrufen und kann nicht mehr für die Anfragen verwendet werden.

## Verbundene Konten

In diesem Abschnitt können Benutzer ihre **verbundenen Konten** verwalten, 3rd-Party-Konten, mit denen Cognigy.AI eine Verbindung herstellen können, um die Bereitstellung auf bestimmten Plattformen zu erleichtern. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/ca44eac-usermenu-accounts.jpg" width="100%" />
</figure>

## Erweitertes Menü

Die Profilseite enthält ein erweitertes Menü, auf das Sie zugreifen können, indem Sie auf die drei Punkte in der oberen rechten Ecke der Seite klicken. Damit stehen Ihnen folgende Funktionen zur Verfügung:

* Profil bearbeiten
  * Organisations-ID kopieren (wird für [Single Sign-On]({{config.site_url}}ai/installation/single-signin-saml2/)) verwendet
  * Konto löschen