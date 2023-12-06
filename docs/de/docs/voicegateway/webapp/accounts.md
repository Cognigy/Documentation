---
Titel: "Konten" 
Slug: "vg-webapp-accounts" 
ausgeblendet: false 
---

# Konten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.60-blue.svg)] (.. /.. /release-notes/4.60.md)

*Konten* sind Container für Ressourcen wie [Anwendungen](applications.md), [Netzbetreiber](carriers.md) und [Sprachdienste](speech-services.md), die zum Erstellen und Verwalten von Sprachanwendungen verwendet werden.

In Voice Gateway kann ein Konto eine bestimmte Kundenorganisation darstellen und mehreren Benutzern zugeordnet sein. 

Der Kontoinhaber kontrolliert, was die anderen Benutzer auf der Plattform sehen und tun können, und stellt sicher, dass sensible Daten und Funktionen sicher aufbewahrt werden. Der Kontobesitzer kann ein Benutzer mit den Bereichen "Dienstanbieter" und "Administrator" sein. Sie können mehr als ein Konto erstellen und verwalten. Um ein Konto zu erstellen, wählen Sie im Menü auf der linken Seite Konten aus und klicken Sie dann auf **Konto hinzufügen** oder **+**.

Ein Benutzer mit dem Kontobereich kann nur das Konto anzeigen und bearbeiten, zu dem er gehört.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-accounts.png"  width="100%" />

## Einstellungen

| Einstellungen | Beschreibung | Geltungsbereich |
|----------------------------------|------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Konto-SID | Der Wert wird automatisch generiert, wenn der Administrator ein Konto erstellt | Konto, Dienstanbieter, Admin |
| Kontoname | Ein eindeutiger Kontoname.                                                                                                       | Konto, Dienstanbieter, Admin |
| Einheit | Sie können Sitzungen oder Minuten auswählen und eine maximale Anzahl davon angeben.                                                     | Admin |
| Lizenzierte Sitzungen | Eine Anzahl von gekauften Sitzungen.                                                                                              | Admin |
| SIP-Bereich | Ein Domänenname, mit dem SIP-Geräte registriert werden.                                                                           | Konto, Dienstanbieter, Admin |
| Webhook-Geheimnis | Eine Sicherheitsebene, die die Webhook-Aufrufe "signiert".                                                                             | Konto, Dienstanbieter, Admin |
| Anwendung für SIP-Geräteanrufe | Wählen Sie die Anwendung aus, die für die Verarbeitung eingehender Anrufe von SIP-Benutzern verwendet wird, die sich im SIP-Bereich des Kontos registriert haben. | Konto, Dienstanbieter, Admin |
| Beantragung von SIPREC-Ausschreibungen | Wählen Sie die Anwendung für [SIPREC](https://datatracker.ietf.org/doc/html/rfc7866)-Aufrufe aus.                                    | Konto, Dienstanbieter, Admin |
| Registrierung Webhook | Eine URL für Ihre Webanwendung, die Registrierungen verarbeitet.                                                                   | Konto, Dienstanbieter, Admin |
| Webhook für Warteschlangenereignisse | Eine URL, über die benachrichtigt wird, wenn ein Mitglied einer Warteschlange beitritt oder sie verlässt.                                                                       | Konto, Dienstanbieter, Admin |
| Zwischenspeichern von TTS-Eingabeaufforderungen | Zeigen Sie die Anzahl der zwischengespeicherten Eingabeaufforderungen an, und klicken Sie, um den TTS-Cache zu löschen.                                                          | Konto, Dienstanbieter, Admin |
| Konfiguration der Anrufaufzeichnung | Aktivieren und konfigurieren Sie Anrufaufzeichnungen auf Kontoebene.                                                                    | Konto, Dienstanbieter, Admin |
| Konto-API-Schlüssel | Sie können einen API-Schlüssel generieren, indem Sie auf **Schlüssel hinzufügen** klicken.                                                                            | Konto, Dienstanbieter, Admin |

### Zwischenspeicherung von TTS-Eingabeaufforderungen

Mit der Schaltfläche **TTS-Cache löschen** wird das zwischengespeicherte Audiomaterial für TTS zurückgesetzt. Dadurch wird der Bot gezwungen, neue Audiodaten für TTS zu laden, um TTS-bezogene Probleme zu beheben.

### Konfiguration der Anrufaufzeichnung

Anrufaufzeichnungen können zu Debugging-Zwecken auf Konto- oder Anwendungsebene aktiviert werden.

Hierbei handelt es sich um eine separate Aufzeichnungsfunktion, die nicht von Cognigy.AI innerhalb eines Flows gesteuert werden kann.

Sie müssen einen Bucket-Anbieter sowie zusätzliche Details und Anmeldeinformationen angeben, um diese Funktion zu aktivieren und Ihre aufgezeichneten Anrufe zu speichern.

Nachdem ein Anruf aufgezeichnet wurde, kann ein Administrator die Aufzeichnungen unter [Letzte Anrufe](recent-calls.md#call-recordings) anhören und überprüfen.

#### Aufzeichnung auf Kontoebene

Wenn diese Option auf Kontoebene aktiviert ist, werden Anrufe von allen Anwendungen innerhalb eines Kontos aufgezeichnet.

Gehen Sie folgendermaßen vor, um die Aufzeichnung von Anrufen auf Kontoebene zu aktivieren:

1. Öffnen Sie die Voice Gateway-Schnittstelle.
2. Wählen Sie im Menü auf der linken Seite **Konten** aus.
3. Erstellen Sie ein neues Konto oder verwenden Sie ein bestehendes.
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
8. Klicken Sie auf die Option **Alle Anrufe für dieses Konto aufzeichnen**, wenn Sie Anrufe nicht nur für eine bestimmte Anwendung aufzeichnen möchten.
9. Klicken Sie auf **Speichern**.

Alle Anrufe von allen Anwendungen in diesem Konto werden aufgezeichnet und auf der Seite [Letzte Anrufe](recent-calls.md#call-recordings) angezeigt.