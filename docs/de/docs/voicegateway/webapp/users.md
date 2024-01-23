---
title: "Benutzer" 
Slug: "Benutzer"
ausgeblendet: false
---

# Benutzer

_Benutzer_ ermöglicht es Ihnen, Mitglieder in Ihrem Konto zu verwalten: neue Mitglieder erstellen, bestehende bearbeiten oder löschen. 

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-users.png"  width="100%" />

## Geltungsbereiche

Abhängig von der Installation von Cognigy Voice Gateway können Mitglieder die folgenden Rollen (Bereiche) haben:

- [Konto](#account)
- [Dienstanbieter](#service-Anbieter)
- [Admin](#admin)

### Konto

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.62-blue.svg)] (.. /.. /release-notes/4.62.md)

Dieser Bereich umfasst grundlegende Vorgänge mit Voice Gateway-Entitäten, z. B. das Erstellen, Bearbeiten und Löschen von Entitäten. 

Es ermöglicht auch das Bearbeiten von Benutzerprofilen, Netzbetreibern und Sprachdiensten, die zu Benutzern mit dem Kontobereich gehören.

Benutzer mit der Rolle "Konto" können im Voice Gateway Self-Service-Portal über ihre Cognigy.AI Benutzeranmeldeinformationen autorisiert werden.
Um diese Option zu aktivieren, müssen Sie die Option **Voice Gateway einrichten**
im **Benutzermenü > Organisationsdetails** der Cognigy.AI Benutzeroberfläche. Gehen Sie zu **Benutzermenü > Zugriffssteuerung** und fügen Sie eine "voiceGatewayUser"-Rolle für ausgewählte Benutzer hinzu.

### Dienstleister

Dieser Bereich ist nur für lokale Cognigy Voice Gateway-Installationen verfügbar. 

Es umfasst alle Vorgänge im Kontobereich und die Möglichkeit, Benutzerprofile, Netzbetreiber und Spracherkennungsdienste zu bearbeiten, die Benutzern mit dem Kontobereich oder dem Dienstanbieterbereich gehören. 

Darüber hinaus können Benutzer mit dem Bereich "Dienstanbieter" Benutzer mit den Bereichen "Konto" und "Dienstanbieter" erstellen, bearbeiten und löschen und API-Schlüssel generieren.

### Verwaltung

Dieser Bereich ist nur für lokale Cognigy Voice Gateway-Installationen verfügbar. 

Es umfasst alle Vorgänge in den Bereichen Konto und Dienstanbieter, sodass alle Vorgänge im VoIP-Gateway ausgeführt werden können. 

Darüber hinaus können Administratoren Benutzer mit den Bereichen "Konto", "Dienstanbieter" und "Administrator" erstellen, bearbeiten und löschen. Sie können auch API-Schlüssel generieren und Passwortanforderungen ändern.