---
Titel: "Anwendungen" 
Slug: "VG-WebApp-Anwendungen"
ausgeblendet: false
---

# Anwendungen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.60-blue.svg)] (.. /.. /release-notes/4.60.md)

*Anwendungen* sind Konnektoren
, die den [Endpunkt](.. /getting-started.md#create-a-voice-gateway-endpoint), die an Voice Gateway weitergeleitet werden soll.
Diese Anwendungen legen Standardwerte fest, einschließlich des Standardanbieters für Spracherkennung, 
Sprache und Stimme für die Text-to-Speech-Ausgabe und die Speech-to-Text-Erkennung.

Um eine Anwendung zu erstellen, wählen Sie im Menü auf der linken Seite **Anwendungen** aus und klicken Sie dann auf **Anwendung hinzufügen** oder **+**.

Sie können mehr als eine Anwendung erstellen, abhängig von der Anzahl der in Cognigy.AI erstellten Endpunkte.

Nachdem Sie eine Anwendung erstellt haben, können Sie sie bearbeiten oder löschen.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-applications-overview.png"  width="100%" />

## Einstellungen 

| Einstellungen | Beschreibung | Geltungsbereich |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Name der Anwendung | Ein eindeutiger Anwendungsname.                                                                                                                                                                                  | Konto, Dienstanbieter, Admin |
| Konto | Wählen Sie ein Konto aus der Liste aus.                                                                                                                                                                            | Konto, Dienstanbieter, Admin | 
| Webhook aufrufen | Eine Cognigy.AI Endpunkt-URL für die Webanwendung, die Aufrufe verarbeitet.                                                                                                                                   | Konto, Dienstanbieter, Admin |
| Webhook für den Anrufstatus | Eine Cognigy.AI Endpunkt-URL für die Webanwendung, die den Aufrufstatus empfängt.                                                                                                                        | Konto, Dienstanbieter, Admin | 
| Anbieter von Sprachsynthese | Wählen Sie einen Standardanbieter aus und richten Sie Spracheinstellungen, Voice für Text-to-Speech-Ausgabe ein. Wenn Sie einen anderen Kreditor mit denselben Anmeldeinformationen haben, geben Sie den alternativen Namen des Kreditors in das Feld Bezeichnung ein. | Konto, Dienstanbieter, Admin | 
| Anbieter von Spracherkennungsgeräten | Wählen Sie einen Standardanbieter aus, und richten Sie die Spracheinstellungen für die Sprache-zu-Text-Erkennung ein. Wenn Sie einen anderen Kreditor mit denselben Anmeldeinformationen haben, geben Sie den alternativen Namen des Kreditors in das Feld Bezeichnung ein.   | Konto, Dienstanbieter, Admin |
| Verwenden eines Anbieters für Fallback-Sprachausgabe, wenn der primäre Sprachbefehl ausfällt | Fügen Sie einen [zusätzlichen Speech-To-Text- oder Text-to-Speech](#add-additional-tts-and-stt-vendor)-Anbieter hinzu.                                                                                                            | Konto, Dienstanbieter, Admin |

## Zusätzlichen TTS- und STT-Anbieter hinzufügen

Gehen Sie folgendermaßen vor, um einen zusätzlichen Anbieter hinzuzufügen:

1. Öffnen Sie das Self-Service-Portal von Cognigy Voice Gateway.
2. Wählen Sie im Menü auf der linken Seite **Anwendungen** aus. 
3. Erstellen Sie eine neue Anwendung oder verwenden Sie eine vorhandene.
4. Aktivieren Sie auf der Anwendungsseite die Einstellung **Fallback-Sprachanbieter verwenden, wenn der primäre Fehler ausfällt**.
5. Wählen Sie den Lieferantentyp aus, den Sie hinzufügen möchten (STT oder TTS) oder fügen Sie beide auf einmal hinzu:
    -TTS:
        - **Anbieter von Sprachsynthese**: Wählen Sie einen TTS-Anbieter aus der Liste aus.
        - **Beschriftung** – Geben Sie den alternativen Namen des Lieferanten in das Feld Bezeichnung ein, wenn Sie über einen Standardlieferanten mit denselben Anmeldeinformationen verfügen. 
        - **Sprache** — Wählen Sie eine primäre Sprache aus.
        - **Stimme** — Wählen Sie eine primäre Stimme für den virtualen Agenten aus.
    - STT:
        - **Anbieter der Spracherkennung** – Wählen Sie einen STT-Anbieter aus der Liste aus.
        - **Beschriftung** – Geben Sie den alternativen Namen des Lieferanten in das Feld Bezeichnung ein, wenn Sie über einen Standardlieferanten mit denselben Anmeldeinformationen verfügen.
        - **Sprache** — Wählen Sie eine primäre Sprache aus. 
6. _(Optional)_ Klicken Sie auf **Primär und Fallback tauschen**. Die primären Anmeldeinformationen und die Fallback-Anmeldeinformationen wechseln die Positionen.
7. Klicken Sie auf **Speichern**.

Die Änderungen werden übernommen.

## Konfiguration der Anrufaufzeichnung

Anrufaufzeichnungen können zu Debugging-Zwecken auf Konto- oder Anwendungsebene aktiviert werden.

Hierbei handelt es sich um eine separate Aufzeichnungsfunktion, die nicht von Cognigy.AI innerhalb eines Flows gesteuert werden kann.

Sie müssen einen Bucket-Anbieter sowie zusätzliche Details und Anmeldeinformationen angeben, um diese Funktion zu aktivieren und Ihre aufgezeichneten Anrufe zu speichern.

Nachdem ein Anruf aufgezeichnet wurde, kann ein Administrator die Aufzeichnungen unter [Letzte Anrufe](recent-calls.md#call-recordings) anhören und überprüfen.

### Aufzeichnung auf Anwendungsebene

Wenn diese Option auf Anwendungsebene aktiviert ist, werden nur Anrufe von einer bestimmten Anwendung aufgezeichnet.

Gehen Sie folgendermaßen vor, um die Aufzeichnung von Anrufen auf Anwendungsebene zu aktivieren:

1. Öffnen Sie die Voice Gateway-Schnittstelle.
2. Wählen Sie im Menü auf der linken Seite **Anwendungen** aus.
3. Erstellen Sie eine neue Anwendung oder verwenden Sie eine vorhandene.
4. Scrollen Sie nach unten zum Abschnitt **Konfiguration der Anrufaufzeichnung** und klicken Sie auf das Kontrollkästchen für **Anrufaufzeichnung aktivieren**.
5. Wählen Sie im Feld **Audioformat** zwischen den Formaten ".wav" und ".mp3".
6. Wählen Sie einen Bucket-Anbieter aus:

=== "Amazon S3"
        - **Bucket Name** — Geben Sie den Namen Ihres Buckets an.
        - **Region** — Wählen Sie die Region für Ihren Speicher aus der Liste aus.
        - **Zugriffsschlüssel-ID** – Geben Sie die Zugriffsschlüssel-ID für Ihren Bucket an.
        - **Geheimer Zugriffsschlüssel** – Geben Sie die ID des geheimen Zugriffsschlüssels für Ihren Bucket an.
        - **S3-Tags** – Geben Sie bei Bedarf Namen und Wert für alle S3-Tags an.

=== "Google Cloud-Speicher"
        - **Bucket Name** — Geben Sie den Namen Ihres Buckets an.
        - **Dienstschlüssel**: Geben Sie einen JSON-Schlüssel für ein Dienstkonto mit APIs an, die für Cloud Storage und Storage Transfer API aktiviert sind.
        - **Google Cloud Storage-Tags**: Geben Sie alle Google Cloud Storage-Tags nach Bedarf mit Namen und Wert an.

=== "Azure Cloud Storage"
        - **Containername** — Geben Sie den Namen Ihres Containers an.
        - **Verbindungszeichenfolge** — Geben Sie eine [Verbindungszeichenfolge](https://learn.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string) an.
        - Azure Cloud Storage-Tags: Geben Sie bei Bedarf Namen und Wert für alle Azure Cloud Storage-Tags an.

7. Klicken Sie auf **Test**, um Ihre Verbindung zu überprüfen. 
8. Gehen Sie zu **Anwendungen** und wählen Sie das Konto aus dem Dropdown-Feld auf der rechten Seite des Bildschirms aus. 
9. Klicken Sie auf die Anwendung, die Sie bearbeiten möchten. 
10. Scrollen Sie nach unten zum Abschnitt **Konfiguration der Anrufaufzeichnung** und aktivieren Sie das Kontrollkästchen für **Alle Anrufe aufzeichnen**
11. Klicken Sie auf **Speichern**.

Alle Anrufe von dieser Anwendung werden aufgezeichnet und auf der Seite [Letzte Anrufe](recent-calls.md#call-recordings) angezeigt.