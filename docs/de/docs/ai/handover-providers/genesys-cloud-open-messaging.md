---
Titel: "Genesys Cloud Open Messaging"
Slug: "Genesys-Cloud-Open-Messaging"
ausgeblendet: false
---

# Genesys Cloud Open Messaging

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.63-blue.svg)] (.. /.. /release-notes/4.63.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/genesys.svg" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Cognigy integriert Genesys Cloud als zusätzlichen Übergabeanbieter, der es Cognigy-Benutzern ermöglicht, sich mit menschlichen Agenten aus Genesys Cloud zu verbinden.

Open Messaging erleichtert die Integration zwischen Genesys Cloud und einem Messaging-Dienst eines Drittanbieters über einen Webhook.

Die Übergabe von Genesys Cloud Open Messaging basiert auf [Open Messaging APIs](https://developer.genesys.cloud/commdigital/digital/openmessaging/openmessaging-apis). [Nachrichten öffnen] (https://developer.genesys.cloud/commdigital/digital/openmessaging/) erleichtert die Integration zwischen Genesys Cloud und einem Messaging-Dienst eines Drittanbieters über einen Webhook.

## Einrichtung<div class="divider"></div>### Voraussetzungen

- Sie müssen über ein Konto in [Genesys Cloud](https://login.genesys.pure.cloud/) verfügen.
- Aktivieren Sie Genesys Cloud Open Messaging auf der Cognigy-Seite:
    - Wenn Sie über eine gemeinsam genutzte oder dedizierte SaaS-Installation verfügen, wenden Sie sich an den technischen Support von Cognigy.
    - Wenn Sie eine On-Premise-Installation haben, geben Sie die folgenden Feature-Flags an: 'FEATURE_ENABLE_GENESYS_CLOUD_OM="true"', 'FEATURE_ENABLE_GENESYS_CLOUD_OM_WHITELIST="organisation1,organisation2"', 'FEATURE_USE_GENESYS_BOT_CONNECTOR_ENDPOINT_WHITELIST="organisation1,organisation2"'. Um den Genesys Cloud Open Messaging-Übergabeanbieter für alle Organisationen in Ihrer Installation zu aktivieren, verwenden Sie "*" anstelle einer Liste von Organisationen.

### Genesys Cloud Open Messaging konfigurieren

Bevor Sie mit der Integration mit Cognigy beginnen, erstellen Sie Genesys Cloud Open Messaging auf der Genesys-Seite.

#### Erstellen einer Plattform

Gehen Sie folgendermaßen vor, um eine Plattformkonfiguration für Genesys Cloud Open Messaging zu erstellen:

1. Öffnen Sie die Genesys Cloud-Oberfläche. 
2. Gehen Sie zu **Admin > Nachricht > Plattformkonfigurationen**.
3. Klicken Sie in der oberen rechten Ecke auf **+ Profil erstellen**.
4. Geben Sie im Fenster **Konfigurationsprofil erstellen** einen eindeutigen Plattformkonfigurationsnamen an und klicken Sie auf **Erstellen**.
5. Wählen Sie im Menü auf der linken Seite **Plattformen** aus.
6. Klicken Sie auf der Seite **Plattformen** auf **+ Neue Integration erstellen > Open Messaging**. 
7. Füllen Sie auf der Seite **Open Messaging** die folgenden Felder aus:
    - **Name** — Geben Sie einen Namen für Ihre Integration ein. Kopieren und speichern Sie diesen Namen. Sie müssen diesen Namen im Feld **Bereitstellungsname** auf der Cognigy-Seite angeben.
    - **Webhook-URL für ausgehende Benachrichtigungen** — Geben Sie "https://endpoint-/<your-environment>handover/genesysCloudOM" ein. Beispiel: "https://endpoint-app.cognigy.ai/handover/genesysCloudOM", wobei environment "app.cognigy.ai" ist.
    - **Geheimes Signatur-Webhook-Token für ausgehende Benachrichtigungen** – Geben Sie das Geheimnis in die X-Hub-Signature-256-Headergenerierung für Webhook-Anforderungen ein, die an die Webhook-URL für ausgehende Benachrichtigungen gesendet werden. Für den geheimen Schlüssel können Sie eine beliebige beliebige, aber ausreichend zufällige Zeichenfolge auswählen. Der externe Dienst sollte den geheimen Schlüssel und die Signatur verwenden, um die von Genesys Cloud stammende Nachricht zu validieren. Diese Überprüfung ist optional, wird jedoch empfohlen. Weitere Informationen zur Validierung finden Sie unter [Webhook-Benachrichtigungen im Genesys Cloud Developer Center validieren](https://developer.genesys.cloud/commdigital/digital/openmessaging/validate). Kopieren und speichern Sie dieses Token für die zukünftige Verwendung auf der Cognigy-Seite. Beachten Sie, dass Sie, wenn Sie dieses Token nicht sofort kopiert und gespeichert haben, nach dem Speichern der Plattformkonfiguration dieses Token neu erstellen müssen.
8. Klicken Sie auf **Speichern**. 
9. Wählen Sie in der Liste **Plattformkonfiguration** die Konfiguration aus, die Sie auf der Seite **Plattformkonfigurationen** erstellt haben. 
10. Wählen Sie in der Liste **Unterstütztes Inhaltsprofil** die Option "Standard" aus. 
11. Klicken Sie auf **Speichern**.

Ihre Open Messaging-Plattform wird in der Plattformliste angezeigt.

#### Erstellen einer Warteschlange

Gehen Sie folgendermaßen vor, um eine Warteschlange zu erstellen:

1. Öffnen Sie die Genesys Cloud-Oberfläche.
2. Gehen Sie zu **Admin > Contact Center > Warteschlangen**.
3. Klicken Sie auf der Seite **Warteschlangen** auf **Warteschlange erstellen**.
4. Füllen Sie im Fenster **Warteschlange erstellen** auf der linken Seite die folgenden Felder aus:
    - **Name** — Geben Sie einen eindeutigen Namen für die Warteschlange ein. Speichern und kopieren Sie diesen Namen für die spätere Verwendung.
    - **Division** — wählen Sie "Home".
5. Klicken Sie auf **Speichern**.

Ihre Warteschlange wird in der Warteschlangenliste angezeigt.

#### Erstellen eines eingehenden Nachrichtenflusses

Gehen Sie folgendermaßen vor, um einen Fluss eingehender Nachrichten zu erstellen:

1. Öffnen Sie die Genesys Cloud-Oberfläche. 
2. Gehen Sie zu **Admin > Architect**. 
3. Klicken Sie auf das Menü **Flows** und wählen Sie **Eingehende Nachricht** aus. 
4. Klicken Sie auf **Hinzufügen**. Das Dialogfeld **Flow erstellen** wird geöffnet. 
5. Geben Sie im Feld **Name** einen eindeutigen Namen für den eingehenden Nachrichtenfluss an. 
6. Klicken Sie auf die Liste **Divisions** und wählen Sie die Division aus, in der der Flow platziert werden soll.
7. Klicken Sie auf **Flow erstellen**. Die Konfigurationsseite des Flows wird geöffnet. 
8. Um einen Flow zu konfigurieren, klicken Sie auf **Bearbeiten**. 
9. Gehen Sie zu **Toolbox**. 
10. Ziehen Sie die Aktion **Antwort senden** und legen Sie sie im Messaging-Flow-Editor ab. 
11. Geben Sie im **Nachrichtentext** der Aktion **Antwort senden** "Verbunden" an. 
12. Platzieren Sie unterhalb der Aktion **Antwort senden** die Aktion [An ACD übertragen](https://help.mypurecloud.com/articles/transfer-acd-action/), um eine Interaktion an ein Warteschlangensystem zu übertragen. 
13. Wählen Sie im Feld **Warteschlange** der Aktion **In ACD übertragen** die Warteschlange aus, in die Sie die Interaktion übertragen möchten.
14. Klicken Sie in der oberen linken Ecke auf **Speichern** und dann auf **Veröffentlichen**.

Nachdem Sie Ihren eingehenden Nachrichtenfluss erstellt haben, sehen Sie diesen Fluss in der Architektenliste.

Weitere Informationen zum Entwerfen des Flusses finden Sie unter [Konfigurieren des eingehenden Nachrichtenflusses](https://help.mypurecloud.com/articles/inbound-message-flows/).

#### Nachrichten-Routing einrichten

Gehen Sie folgendermaßen vor, um das Nachrichtenrouting einzurichten:

1. Öffnen Sie die Genesys Cloud-Oberfläche. 
2. Wechseln Sie zu **Admin > Routing > Message Routing**. 
3. Klicken Sie in der oberen rechten Ecke auf **+**. 
4. Navigieren Sie auf der Registerkarte **Nachrichtenroute** zur Liste **Flow auswählen**. 
5. Wählen Sie in der Liste **Fluss auswählen** den Nachrichtenfluss aus, den Sie erstellt haben. 
6. Klicken Sie im Abschnitt **Adressen** auf **+**. 
7. Wählen Sie in der Liste **Adresse auswählen** die Open Messaging-Plattform aus, die Sie erstellt haben, und klicken Sie auf **Hinzufügen**. 
8. Klicken Sie auf **Speichern**.

Die Konfiguration des Nachrichtenroutings wird in der Nachrichtenroutingliste angezeigt.

#### Anmeldeinformationen konfigurieren

{! _includes/ai/providers/genesys/configure-credentials.md !}

Sobald Ihr Client autorisiert ist, können Sie mit der Konfiguration von Genesys Handover Provider auf der Cognigy-Seite beginnen.

### Erstellen eines Endpunkts

Gehen Sie folgendermaßen vor, um Genesys Cloud als Übergabeanbieter mit Cognigy.AI zu verwenden:

1. Öffnen Sie die Cognigy.AI-Schnittstelle. 
2. Wechseln Sie zu **Bereitstellen > Endpunkte**. 
3. Öffnen Sie den Endpunkt, an dem Sie die Übergabe an Genesys Cloud aktivieren möchten. 
4. Kopieren Sie im Abschnitt **Konfigurationsinformationen** die Konfigurations-URL und speichern Sie sie für die zukünftige Verwendung. 
5. Scrollen Sie nach unten zu **Übergabeeinstellungen** und wählen Sie **Genesys Cloud Open Messaging** aus der Liste aus. 
6. Füllen Sie die folgenden Felder aus:
    - **Host** — Geben Sie die Anmelde-URL für Genesys Cloud-Kunden ein, die je nach Region variiert, z. B. "mypurecloud.de" für Deutschland. Sie können die Basisdomäne wie "mypurecloud.com" oder "cac1.pure.cloud" verwenden und den Teil "apps." oder "login." weglassen. Weiterführende Informationen zu Genesys Cloud-Regionen finden Sie unter [AWS-Regionen für die Bereitstellung](https://help.mypurecloud.com/articles/aws-regions-for-genesys-cloud-deployment/).
    - **Bereitstellungsname** – Geben Sie den Namen der Open Messaging-Plattform an, den Sie [auf der Genesys-Seite] (#create-a-platform) erstellt haben.
    - **Warteschlange** — Geben Sie den Namen der Warteschlange ein, den Sie [auf der Genesys-Seite](#create-a-queue) erstellt haben.
    - **Webhook-Geheimnis** – Geben Sie das Webhook-Signatur-Signatur-Token für ausgehende Benachrichtigungen an, das Sie [auf der Genesys-Seite](#create-a-platform) erstellt haben.
    - **Client-ID** — Geben Sie die Client-ID ein, die Sie [auf der Genesys-Seite] generiert haben (#configure-Anmeldeinformationen).
    - **Client Secret** — Geben Sie den Client Secret ein, den Sie [auf der Genesys-Seite] generiert haben (#configure-Anmeldeinformationen). 
7. Aktivieren Sie die Einstellung **Profilinformationen senden**, wenn Sie Benutzerinformationen, wie z. B. den Vor- und Nachnamen, an den menschlichen Agenten senden möchten.
8. Klicken Sie auf **Speichern**.

### Übergabeeinstellungen konfigurieren

Fügen Sie eine [Übergabe an den Agenten](.. /tools/agent-handover.md) Knoten ohne zusätzliche Konfiguration.

Um die Verbindung zu testen, klicken Sie auf **Demo-Webchat öffnen**.

## AI Copilot Arbeitsbereich

Innerhalb der Genesys-Integration können Sie [AI Copilot Workspace](.. /.. /ai-copilot/overview.md) als Assistent für Ihre menschlichen Agenten. AI Copilot wird als eigenständige Anwendung unter folgendem Link verfügbar sein:

{! _includes/ai/agent-assist/url-pattern.md !}

## Mehr Informationen

- [Genesys Cloud-Gast-Chat](genesys-cloud-guest-chat.md)</your-environment>