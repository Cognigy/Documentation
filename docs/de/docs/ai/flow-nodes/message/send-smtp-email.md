---
title: "SMTP-E-Mail senden"
slug: "E-Mail senden"
ausgeblendet: false
---
# SMTP-E-Mail senden

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/message/send-smtp-email.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Verwenden Sie den Knoten E-Mail senden, um eine E-Mail über eine SMTP-Verbindung an einen Empfänger zu senden.

## Einstellungen

### E-Mail-Dienst

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.49-blue.svg)] (.. /.. /.. /release-notes/4.49.md)

Wählen Sie den E-Mail-Anbieter der Adresse aus, von der aus Sie senden möchten.
Wenn Ihr Dienst nicht aufgeführt ist, können Sie "Anderer SMTP-Dienst" auswählen, um eine manuelle Konfiguration vorzunehmen.

!!! Hinweis "Konfiguration des E-Mail-Dienstes"
    Bei einigen E-Mail-Anbietern, wie z. B. Gmail, müssen Sie Ihr E-Mail-Konto so konfigurieren, dass das Senden von E-Mails über SMTP zulässig ist, bevor Sie es verwenden können.

### SMTP-Einstellungen

Je nachdem, welcher E-Mail-Dienst oben ausgewählt wurde, werden Sie aufgefordert, entweder Ihre Anmeldedaten für diesen Dienst oder die vollständigen SMTP-Verbindungsinformationen einzugeben, falls Sie die Option "Anderer SMTP-Dienst" ausgewählt haben.

### Empfänger-E-Mail-Adressen

Kommagetrennte Liste von E-Mail-Adressen, an die die E-Mail gesendet werden soll.

### Betreff der E-Mail

Der Betreff der E-Mail.

### E-Mail-Inhalt

Der Inhalt der E-Mail.
Das Feld unterstützt die grundlegende Rich-Text-Bearbeitung.

### Authentifizierung

Sie können eine der folgenden Authentifizierungsmethoden verwenden:

=== "OAuth2 (empfohlen)"
    OAuth2 ist eine tokenbasierte Authentifizierungsmethode. Er verwendet Zugriffstoken, die vom Dienstanbieter generiert werden, um Clientanwendungen die Autorisierung für den Zugriff auf Benutzerdaten zu erteilen. Zugriffstoken sind eindeutige Bezeichner, die Benutzer-, Clientanwendungs- und Berechtigungsinformationen enthalten. Sie sind kurzlebig und können bei Bedarf widerrufen werden, was ein höheres Maß an Sicherheit als Basic Auth bietet. E-Mail-Anbieter wie Google und Microsoft dürfen nur OAuth2 für die Authentifizierung verwenden.

Gehen Sie folgendermaßen vor, um eine Verbindung herzustellen:

1. Klicken Sie neben der Einstellung **OAuth2-Parameter** auf **+**.
     2. Fügen Sie eine neue Verbindung hinzu oder verwenden Sie eine bestehende:
        - Verbindungsname: Erstellen Sie einen eindeutigen Verbindungsnamen.
        - Benutzer: Fügen Sie Ihre E-Mail-Adresse hinzu.
        - clientId — fügt eine registrierte Client-ID der Anwendung hinzu.
        - clientSecret — Fügt einen registrierten geheimen Clientschlüssel der Anwendung hinzu.
        - accessToken — fügt ein Zugriffstoken hinzu. Nur erforderlich, wenn refreshToken nicht verfügbar ist.
        - refreshToken — Fügt ein Aktualisierungstoken hinzu. Wenn es bereitgestellt wird, versucht der Knoten, ein neues Zugriffstoken zu generieren, wenn ein vorhandenes abläuft oder fehlschlägt.
        - expiryDate — fügt einen Unix-Zeitstempel in Millisekunden für das aktuelle 'accessToken' hinzu.
        - accessUrl — fügt einen HTTP-Endpunkt zum Anfordern neuer Zugriffstoken hinzu. Dieser Wert ist standardmäßig auf Gmail "https://accounts.google.com/o/oauth2/token" festgelegt. 
        - tlsOption — Geben Sie eine der folgenden Optionen an, wenn Sie eine Verbindung mit TLS herstellen möchten:
            - TLS — wird standardmäßig verwendet. TLS ist ein separates Protokoll, das auf einem anderen Port (normalerweise Port 443 für HTTPS) ausgeführt wird.
            - starttls — ist ein Befehl, der verwendet wird, um eine bestehende unsichere Verbindung auf eine sichere Verbindung innerhalb desselben Ports zu aktualisieren.
            - keine: Stellen Sie keine Verbindung mit TLS her.
     3. Klicken Sie auf **Erstellen**.

Cognigy speichert Verbindungen standardmäßig zwischen, und bei OAuth2-Verbindungen speichert Cognigy auch die Aktualisierungs- und Zugriffstoken zwischen. Um das Aktualisierungstoken oder Zugriffstoken zu aktualisieren, erstellen Sie ein [snapshot](.. /.. /resources/deploy/snapshots.md).

=== "Grundlegende Authentifizierung"
    Bei der Standardauthentifizierung handelt es sich um ein einfaches Authentifizierungsschema, bei dem der Client die Anmeldeinformationen des Benutzers (Benutzername und Kennwort) im HTTP-Header an den Server sendet. Er wird für Webanwendungen verwendet, die eine Authentifizierung erfordern, und fügt der HTTP-Anforderung einen Authorization-Header hinzu. Es gibt jedoch Sicherheitseinschränkungen, da die Anmeldeinformationen im Klartext gesendet werden und der Server keine Möglichkeit bietet, sich abzumelden.

Gehen Sie folgendermaßen vor, um eine Verbindung herzustellen:

1. Klicken Sie neben der Einstellung **Grundlegende Authentifizierungsparameter** auf **+**.
     2. Fügen Sie eine neue Verbindung hinzu oder verwenden Sie eine bestehende:
        - Verbindungsname: Erstellen Sie einen eindeutigen Verbindungsnamen.
        - Benutzername – Fügen Sie ein Login hinzu, das Sie von Ihrem E-Mail-Anbieter erhalten haben.
        - Passwort – Fügen Sie ein Passwort hinzu, das Sie von Ihrem E-Mail-Anbieter erhalten haben.
    3. Klicken Sie auf **Erstellen**.

### Anhänge

Standardmäßig ist die Option **Keine Anlage** ausgewählt.

Sie können die anderen E-Mail-Anhänge auswählen:

| Anhang | Beschreibung |
|-----------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Von URL | Sie können eine öffentliche Web-URL oder eine Daten-URL angeben. Die verknüpfte Datei wird dann an diese E-Mail angehängt. Sie können auch einen benutzerdefinierten Dateinamen für die angehängte Datei auswählen. |
| Aus Textinhalt | Sie können einen Text definieren, der als Anhang versendet werden soll, indem Sie als Option "Aus Textinhalt" auswählen.                                                      |
| Aus Base64-Zeichenfolge | Wenn Sie Base64-codierte Daten haben, die angehängt werden sollen, können Sie dies tun, indem Sie die Option "Aus Base64-Zeichenfolge" auswählen.                                           |
| Benutzerdefinierter Inhaltsanhang | Wenn Sie Textinhalte mit einem bestimmten MIME-Typ versenden möchten, können Sie "Aus benutzerdefiniertem Inhaltstyp" auswählen, um einen eigenen MIME-Typ |
| Aus vorgeneriertem MIME-Knoten | Ermöglicht das manuelle Versenden eines vollständig angepassten Befestigungskörpers.                                                                                                    |

### Ergebnisspeicherung & Fehlerbehandlung

### Speicherort des SMTP-Anforderungsergebnisses

Kann auf **Ergebnis nicht speichern** (Standard), **Eingabe** oder **Kontext** festgelegt werden.
Wenn diese Option auf **Input** oder **Context** festgelegt ist, können Sie einen Speicherort für das Ergebnis innerhalb von **Input** oder **Context** definieren.
Das Ergebnis der gesendeten E-Mail-Antwort wird dann an diesem Ort abgelegt.

#### Stopp bei Fehler

Wenn diese Option aktiviert ist, wird die Flow-Ausführung angehalten, falls der E-Mail-Versand fehlschlägt.

### Fortgeschritten

#### Benutzerdefiniert von E-Mail-Adresse

Diese E-Mail-Adresse wird im Feld "Von" (Absenderadresse) angezeigt.

#### CC-E-Mail-Adressen

Die CC-Empfänger Ihrer E-Mail.

#### BCC-E-Mail-Adressen

Die BCC-Empfänger Ihrer E-Mail.

#### Antwort an Adresse

Diese E-Mail-Adresse ist das Ziel, das E-Mails empfängt, wenn die Empfänger auf Ihre E-Mail antworten.

#### Definieren Sie benutzerdefinierten Text E-Mail-Inhalt

Wenn Ihr Inhalt Nicht-Text-Inhalte enthält, können Sie hier eine benutzerdefinierte Nur-Text-Version des E-Mail-Inhalts bereitstellen, um die Kompatibilität mit eingeschränkten Geräten zu verbessern.

#### E-Mail-Priorität

Damit können Sie Ihre Priorität auf "hoch", "normal" (Standard) oder "niedrig" setzen.

#### Request asynchron ausführen

Wenn diese Option aktiviert ist, wird die Flow-Ausführung direkt nach dem Auslösen des Knotens "E-Mail senden" fortgesetzt. Wenn diese Option deaktiviert ist, wartet die Flow-Ausführung, bis die E-Mail gesendet wird.