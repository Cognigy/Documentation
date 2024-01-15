---
title: "E-Mail-Benachrichtigung"
Slug: "E-Mail-Benachrichtigung"
ausgeblendet: false
---
# E-Mail-Benachrichtigung

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.49-blue.svg)] (.. /.. /.. /release-notes/4.49.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/email-notification.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Mit dem E-Mail-Benachrichtigungsknoten können Sie während Sitzungen oder für die interne Kommunikation schnell und einfach E-Mails versenden, ohne dass Anbietereinstellungen in der Benutzeroberfläche eingerichtet werden müssen. Stattdessen können Sie die erforderlichen Anbietereinstellungen in den Umgebungsvariablen und Geheimnissen konfigurieren. Es kann jeweils nur ein Anbieter eingerichtet werden. 

## Einschränkungen

* Ihre SMTP-Server-Einstellungen müssen angepasst werden, um die interne Cognigy-E-Mail-Benachrichtigung verwenden zu können.
* E-Mail-Anhänge sind eingeschränkt (z. B. Dateien, Bilder). Verwenden Sie bei Bedarf [SMTP-E-Mail-Knoten senden](send-smtp-email.md).

## Authentifizierung

Dieser Knoten unterstützt sowohl die Standardauthentifizierung als auch die OAuth2-Authentifizierungsmethode.

Wenn Sie eine lokale Installation haben, müssen Sie der Datei "values.yaml" die folgenden Parameter hinzufügen:

=== "OAuth2 (empfohlen)"
    Objekt:
    
'''Yaml
    smtpEmailNotificationCredentials:
     authType: "oauth2"
     OAuth2:
       Benutzer: "<smtp-server>@domain.com"
       clientId: "Ihre Kunden-ID"
       clientSecret: "Ihr geheimer Clientschlüssel"
       refreshToken: "Ihr Aktualisierungstoken"
       accessToken: "Ihr Zugriffstoken"
    '''
    Variablen:
    
'''Yaml
    EMAIL_NOTIFICATION_SMTP_FROM: "<smtp-server>@domain.com"
    EMAIL_NOTIFICATION_SMTP_AUTH_TYPE: "oauth2"
    EMAIL_NOTIFICATION_SMTP_EMAIL_SERVICE_TYPE: "<email service,="" for="" example,="" outlook365="">"
    EMAIL_NOTIFICATION_SMTP_OAUTH2_TOKEN_ACCESS_URL: "<provider token="" access="" url,="" for="" example,="" for="" microsoft="" https://login.microsoftonline.com/common/oauth2/v2.0/token,="" for="" google="" https://accounts.google.com/o/oauth2/token="">"
    EMAIL_NOTIFICATION_SMTP_OAUTH2_EXPIRY_DATE_UNIX_TIMESTAMP: "<unix timestamp="" for="" the="" current="" accesstoken,="" for="" example,="" 1681382246000="">"
    EMAIL_NOTIFICATION_SMTP_TLS_REQUIRED: "<tls method,="" for="" example,="" 'tls'="" for="" default="" tls="" on="" port="" 443,="" 'starttls'="" to="" upgrade="" an="" insecure="" connection="" on="" the="" same="" port,="" or="" 'none'="" to="" connect="" without="" tls="">"
    '''
    Cognigy speichert Verbindungen standardmäßig zwischen, und bei OAuth2-Verbindungen speichert Cognigy auch die Aktualisierungs- und Zugriffstoken zwischen. Um das Aktualisierungstoken oder Zugriffstoken zu aktualisieren, erstellen Sie ein [snapshot](.. /.. /resources/deploy/snapshots.md).

=== "Grundlegende Authentifizierung"
    Objekt:

'''Yaml
    smtpEmailNotificationCredentials:
      authType: "basic"
      Grundlegend:
        Benutzername: "<your email="" client's="" username="">"
        Passwort: "<your email="" clientl's="" password="">"
    '''
    Variablen:

'''Yaml
    EMAIL_NOTIFICATION_SMTP_AUTH_TYPE: "einfach"
    EMAIL_NOTIFICATION_SMTP_HOST: "<SMTP_HOST>"
    EMAIL_NOTIFICATION_SMTP_PORT: "<SMTP_PORT>"
    EMAIL_NOTIFICATION_SMTP_FROM: "<smtp-server>@domain.com"
    EMAIL_NOTIFICATION_SMTP_TLS_REQUIRED: "<tls method,="" for="" example,="" 'tls'="" for="" default="" tls="" on="" port="" 443,="" 'starttls'="" to="" upgrade="" an="" insecure="" connection="" on="" the="" same="" port,="" or="" 'none'="" to="" connect="" without="" tls="">"
    '''

## Einstellungen

### Empfänger-E-Mail-Adressen

Kommagetrennte Liste von E-Mail-Adressen, an die die E-Mail gesendet werden soll.

### Betreff der E-Mail

Der Betreff der E-Mail.

### E-Mail-Inhalt

Der Inhalt der E-Mail.
Das Feld unterstützt die grundlegende Rich-Text-Bearbeitung.

### Speicherort des SMTP-Anforderungsergebnisses

Kann auf **Ergebnis nicht speichern** (Standard), **Eingabe** oder **Kontext** festgelegt werden.
Wenn diese Option auf **Input** oder **Context** festgelegt ist, können Sie einen Speicherort für das Ergebnis innerhalb von **Input** oder **Context** definieren.
Das Ergebnis der gesendeten E-Mail-Antwort wird dann an diesem Ort abgelegt.

#### Stopp bei Fehler

Wenn diese Option aktiviert ist, wird die Flow-Ausführung angehalten, falls der E-Mail-Versand fehlschlägt.

#### CC-E-Mail-Adressen

Die CC-Empfänger Ihrer E-Mail.

#### BCC-E-Mail-Adressen

Die BCC-Empfänger Ihrer E-Mail.

#### Request asynchron ausführen

Wenn diese Option aktiviert ist, wird die Flow-Ausführung direkt nach dem Auslösen des Knotens "E-Mail senden" fortgesetzt. Wenn diese Option deaktiviert ist, wartet die Flow-Ausführung, bis die E-Mail gesendet wird.

## E-Mail-Vorlage<div class="divider"></div>Die E-Mail wird mit einer Vorlage gesendet, die in etwa wie folgt aussieht:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/eccd2bc-Screen_Shot_080.PNG" width="100%" />
</figure>

Der Empfänger erhält die E-Mail-Benachrichtigung</tls></smtp-server></SMTP_PORT></SMTP_HOST></your></your></tls></unix></provider></email></smtp-server></smtp-server>