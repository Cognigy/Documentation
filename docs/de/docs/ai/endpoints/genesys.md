---
Titel: "Genesys"
Slug: "Genesys"
ausgeblendet: false
---

# Genesys

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.64-blue.svg)] (.. /.. /release-notes/4.64.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/genesys.svg" width="100%" />
</figure>

Der **Genesys**-Endpunkt ermöglicht die Verbindung eines virtuellen Agenten mit der [Genesys Cloud CX-Plattform](https://apps.mypurecloud.de/) über einen [Genesys Bot Connector](https://help.mypurecloud.com/articles/about-genesys-bot-connector/).

## Voraussetzungen

- Sie müssen über ein Konto in [Genesys Cloud](https://apps.mypurecloud.de/) verfügen.
- Aktivieren Sie den Genesys-Endpunkt auf der Cognigy-Seite:
    - Wenn Sie über eine gemeinsam genutzte oder dedizierte SaaS-Installation verfügen, wenden Sie sich an den technischen Support von Cognigy.
    - Wenn Sie eine On-Premise-Installation haben, geben Sie das folgende Feature-Flag an: 'FEATURE_USE_GENESYS_BOT_CONNECTOR_ENDPOINT_WHITELIST="organisation1,organisation2"'. Um den Genesys-Endpunkt für alle Organisationen in Ihrer Installation zu aktivieren, verwenden Sie "*" anstelle einer Liste von Organisationen.

## Generische Endpunkteinstellungen<div class="divider"></div>Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte](overview.md)
- [Datenschutz & Analyse](data-protection-and-analytics.md)
- [Einstellungen für Echtzeitübersetzung](real-time-translation-settings.md)
- [Transformator-Funktionen](Transformatoren/Transformatoren.md)

## Kanalspezifische Einstellungen

### Genesys Bot Connector einrichten

| Parameter | Beschreibung |
|--------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Token verifizieren | Ein Verifizierungstoken für die Verbindung des Cognigy Genesys Endpoint mit dem Genesys Bot Connector. Dieses Token muss auf der Cognigy-Seite generiert werden und kann aus Buchstaben, Zahlen und Satzzeichen bestehen. |

## Wie man es einrichtet

Gehen Sie folgendermaßen vor, um den Genesys-Endpunkt einzurichten:

1. [Genesys-Endpunkt konfigurieren](#configure-genesys-endpoint)
2. [Genesys konfigurieren](#configure-genesys-cloud-cx)

### Genesys-Endpunkt konfigurieren

1. Klicken Sie im Menü auf der linken Seite Ihres Agents auf **Deploy > Endpoints**.
2. Klicken Sie auf der Seite **Endpunkte** auf **+ Neuer Endpunkt**.
3. Gehen Sie im Abschnitt **Neuer Endpunkt** wie folgt vor: <br>3.1 Wählen Sie den Endpunkttyp **Genesys** aus. <br>3.2 Fügen Sie einen eindeutigen Namen hinzu.<br>3.3 Wählen Sie einen relevanten Flow aus der Liste aus.<br>4. Kopieren Sie im Abschnitt **Konfigurationsinformationen** die Endpunkt-URL und speichern Sie sie für die spätere Verwendung in Genesys.
5. Aktivieren Sie die Einstellung **Endpunkt aktivieren**.
6. Erstellen Sie im Abschnitt **Genesys Bot Connector Setup** im Feld **Verify Token** ein Verifizierungstoken für die Verbindung des Cognigy Genesys Endpoint mit dem Genesys Bot Connector. Das Token kann aus Buchstaben, Zahlen und Satzzeichen bestehen. Speichern Sie dieses Token für die spätere Verwendung in Genesys.
7. Klicken Sie auf **Speichern**.

### (optional) KI-Copilot aktivieren

Wenn Sie [AI Copilot](.. /.. /ai-copilot/overview.md) und [Genesys Notification Forwarder](https://developer.genesys.cloud/notificationsalerts/notifications/notifications-apis) innerhalb der Genesys-Integration,
Erstellen Sie Anmeldeinformationen auf der Genesys-Seite und konfigurieren Sie die **Copilot**-Einstellungen im Endpunkt.

#### Anmeldeinformationen erstellen

{! _includes/ai/providers/genesys/configure-credentials.md !}

#### Konfigurieren von Einstellungen für Agent AI Copilot

Gehen Sie folgendermaßen vor, um die Einstellungen für den Agent Assist-Arbeitsbereich zu konfigurieren:

1. Navigieren Sie in den **Genesys Endpoint-Einstellungen** zum Abschnitt **Copilot**.
2. Konfigurieren Sie AI Copilot, indem Sie eine [AI Copilot-Konfiguration](https://api-trial.cognigy.ai/openapi#post-/v2.0/agentassistconfigs) erstellen und einen Flow hinzufügen. Weitere Informationen finden Sie in der [Agent Assist-Dokumentation](.. /.. /ai-copilot/overview.md).
3. Genesys Cloud-Anmeldeinformationen einrichten:
    - **Verbindungsname** — Erstellen Sie einen eindeutigen Namen für Ihre Verbindung.
    - **oAuth2Url** — Geben Sie die Anmelde-URL für Genesys Cloud-Kunden ein, die je nach Region variiert, z. B. "mypurecloud.de" für Deutschland. Sie können die Basisdomäne wie "mypurecloud.com" oder "cac1.pure.cloud" verwenden und den Teil "apps." oder "login." weglassen. Weitere Informationen zu Genesys Cloud-Regionen finden Sie unter [AWS-Regionen für die Bereitstellung](https://help.mypurecloud.com/articles/aws-regions-for-genesys-cloud-deployment/).
    - **oAuth2ClientId** — Geben Sie die Client-ID ein, die Sie [auf der Genesys-Seite] generiert haben (#configure-Anmeldeinformationen).
    - **oAuth2ClientSecret** — Geben Sie den geheimen Clientschlüssel ein, den Sie [auf der Genesys-Seite] generiert haben (#configure-Anmeldeinformationen).
    - **oAuth2Scope** — Geben Sie '*' ein. Dieses Systemfeld ist nur für die Autorisierung des Antrags erforderlich.
4. Klicken Sie auf **Erstellen**.
5. Klicken Sie auf **Speichern**.

### Genesys Cloud CX konfigurieren

#### Erstellen eines Genesys Bot Connectors

1. Öffnen Sie die Genesys Cloud-Oberfläche.
2. Navigieren Sie zu **Admin > Integrationen**.
3. Klicken Sie auf **+ Integrationen** in der oberen rechten Ecke.
4. Wählen Sie die Karte **Genesys Bot Connector** aus und klicken Sie auf **Installieren**.
5. Weisen Sie Ihrer Integration einen eindeutigen Namen zu.
6. Navigieren Sie auf der Registerkarte **Konfiguration** zum Abschnitt **Eigenschaften**.
7. Geben Sie im Feld **Bot Connector Handle Utterance URI** den Endpunkt-URL-Wert ein, der zuvor auf der Cognigy-Seite gespeichert wurde.
8. Klicken Sie auf der Registerkarte **Anmeldeinformationen** auf **+Anmeldeinformationsfeld hinzufügen**. Geben Sie die folgenden Anmeldeinformationen ein:<br>- **Feldname** — Verwenden Sie "verify-token" als Namen.<br>- **Wert** — Geben Sie das zuvor erstellte Token in das Feld **Token verifizieren** auf der Cognigy-Seite ein.
9. Klicken Sie auf **Ok** und dann auf **Speichern**.
10. Klicken Sie auf der Registerkarte **Details** auf **Integrations-ID kopieren** und speichern Sie diese ID für die spätere Verwendung.

Ihre Integration wird unter den Integrationen aufgeführt.

#### Hinzufügen eines Bots für die Bot-Connector-Integration

1. Öffnen Sie die Benutzeroberfläche [Genesys Developer Tools](https://developer.genesys.cloud/developer-tools/#/api-explorer).
2. Wählen Sie im Menü auf der linken Seite **API Explorer** aus.
3. Navigieren Sie zu **Integrationen > BotConnector**.
4. Wählen Sie in der Liste die Option **PUT: Liste der botConnector-Bots plus Versionen für diese Integration festlegen** aus.
5. Füllen Sie das Feld **integrationId** mit der **Integrations-ID** aus, die Sie zuvor kopiert und gespeichert haben.
6. Fügen Sie im **BODY**-Editor den folgenden JSON-Code ein:

'''json
      {
         "chatBots": [
            {
               "id": "<your uuid="">",
               "name": "Cognigy.AI Bot",
               "Versionen": [
                  {
                     "version": "1",
                     "supportedLanguages": ["en-us"],
                     "Absichten": [
                        {
                           "name": "Erfolg",
                           "slots": {
                              "processedTimestamp": {
                                 "name": "processedTimestamp",
                                 "type": "Ganzzahl"
                              }
                           }
                        }
                     ]
                  }
               ]
            }
         ]
      }   
      '''
   Das Feld 'id' sollte Ihre UUID enthalten, die Sie mit einem [Online-UUID-Generator](https://www.uuidgenerator.net/version4) erstellen können.<br>7. Klicken Sie auf **Anfrage senden**.

#### Erstellen eines eingehenden Nachrichtenflusses

Um einen digitalen Bot-Flow in Architect zu erstellen, konfigurieren Sie den eingehenden Nachrichtenfluss:

1. Gehen Sie zu **Admin > Architect**.
2. Klicken Sie auf das Menü **Flows** und wählen Sie **Eingehende Nachricht** aus.
3. Klicken Sie auf **Hinzufügen**. Das Dialogfeld **Flow erstellen** wird geöffnet.
4. Geben Sie im Feld **Name** einen eindeutigen Namen für den eingehenden Nachrichtenfluss an.
5. Klicken Sie auf die Liste **Abteilungen** und wählen Sie die Abteilung aus, in der der Flow platziert werden soll.
6. Klicken Sie auf **Flow erstellen**. Die Konfigurationsseite des Flows wird geöffnet.
7. Um einen Flow zu konfigurieren, klicken Sie auf **Bearbeiten**.
8. Gehen Sie zu **Toolbox**.
9. Ziehen Sie die Aktion **Call bot Connector** und legen Sie sie im Messaging-Flow-Editor ab. 
10. Füllen Sie im Fenster **Call Bot Connector** auf der rechten Seite die folgenden Felder aus:
    - **Bot-Integration** – Wählen Sie die Integration aus, die Sie erstellt haben.
    - **Bot-Name** – Wählen Sie den Bot aus, den Sie erstellt haben.
    - **Bot-Version**: Wählen Sie die Bot-Version aus, die Sie erstellt haben.
11. Ziehen Sie die Aktion **Antwort senden** und legen Sie sie unter der Aktion **Erfolg** ab. 
12. Ziehen Sie die Aktion **Antwort senden** und legen Sie sie unter der Aktion **Fehler** ab.
13. Geben Sie im **Nachrichtentext** der Aktionen **Antwort senden** "Erfolgsmeldung" und "Fehlermeldung" an. 
14. Platzieren Sie unter den Aktionen **Antwort senden** die Aktion [An ACD übertragen](https://help.mypurecloud.com/articles/transfer-acd-action/), um eine Interaktion an ein Warteschlangensystem zu übertragen. 
15. Wählen Sie im Feld **Warteschlange** der Aktion **An ACD übertragen** die Warteschlange aus, in die Sie die Interaktion übertragen möchten.
    
    <figure>
      <img src="{{config.site_url}}ai/endpoints/images/genesys-flow-example.png" width="100%"/>
    </figure>

16. Klicken Sie in der oberen linken Ecke auf **Speichern** und dann auf **Veröffentlichen**.

Nachdem Sie Ihren eingehenden Nachrichtenfluss erstellt haben, sehen Sie diesen Fluss in der Architektenliste.

Weitere Informationen zum Entwerfen des Flusses finden Sie unter [Konfigurieren des eingehenden Nachrichtenflusses](https://help.mypurecloud.com/articles/inbound-message-flows/).

#### Messenger konfigurieren

Gehen Sie folgendermaßen vor, um eine neue Version einer Messenger-Konfiguration und einer Messenger-Bereitstellung zu erstellen:

1. Gehen Sie zu **Admin > Nachrichten- > Messenger-Konfigurationen**.
2. Klicken Sie auf **+ Neue Konfiguration**.
3. Geben Sie im Feld **Name** einen eindeutigen Konfigurationsnamen an, der Ihre Bot-Integration widerspiegelt.
4. Wählen Sie in der Liste **Wählen Sie Ihre unterstützten Sprachen aus** die verfügbaren Sprachen für die Benutzeroberfläche aus und passen Sie die Textbeschriftungen an. Die Sprache des Browsers bestimmt die Sprache des Benutzers.
5. Wählen Sie im Feld **Standardsprache auswählen** eine Standardsprache für Fälle aus, in denen die Browsersprache nicht erkannt wird oder nicht in der Liste enthalten ist.
6. Klicken Sie auf **Neue Version speichern**. Ihre Konfiguration wird in der Konfigurationsliste angezeigt.
7. Gehen Sie zu **Admin > Message > Messenger-Bereitstellungen**.
8. Klicken Sie auf **+ Neue Bereitstellung**.
9. Geben Sie im Feld **Name** einen eindeutigen Bereitstellungsnamen ein, der Ihrer Messenger-Konfiguration entspricht.
10. Wählen Sie in der Liste **Konfiguration auswählen** die Nachrichtenkonfiguration aus, die Sie kürzlich erstellt haben.
11. Wählen Sie im Abschnitt **Domain-Zugriff einschränken** die Option **Alle Domains zulassen** aus oder geben Sie vertrauenswürdige Domains an, auf denen Messenger ausgeführt werden kann.
12. Wählen Sie in der Liste **Wählen Sie Ihren Architect Flow aus** einen vorhandenen veröffentlichten eingehenden Nachrichtenfluss aus, um Bot-Verhalten auszulösen oder Benutzer mit Agenten zu verbinden. 
13. Klicken Sie im Abschnitt **Snippet bereitstellen** auf **In Zwischenablage kopieren**, um ein Code-Snippet auf die Seiten der Website zu kopieren, auf denen der Messenger angezeigt werden soll. Nach dem Bereitstellen des Codeausschnitts werden alle zukünftigen gespeicherten Änderungen an der Konfiguration und Bereitstellung automatisch angewendet. 
14. Klicken Sie auf **Speichern**. Ihre Bereitstellung wird dann in der Bereitstellungsliste angezeigt. 
15. Um den virtuellen Agenten zu testen, besuchen Sie [CodeSandbox](https://codesandbox.io/) und wählen Sie ein Standard-**HTML**-Projekt aus. Fügen Sie den kopierten Codeausschnitt in das Verzeichnis '<body>'-Element des HTML-Dokuments.

Um die Leistung des virtuellen Agenten zu überprüfen, greifen Sie auf die Installation zu, die Ihr Serveradministrator bereitgestellt hat.

## Wie geht es weiter?

Jetzt können Sie die Knoten "Sagen", "Frage" und "Optionale Frage" konfigurieren, indem Sie die Option [Genesys](.. /flow-nodes/message/say.md#genesys) in den Einstellungen des Node-Editors. Es ist wichtig, Nachrichten zu erstellen, die mit dem Genesys-Endpunkt kompatibel sind, da der Genesys-Kanal eine [begrenzte Anzahl von Ausgabetypen](content-conversion.md) unterstützt.</body></your>