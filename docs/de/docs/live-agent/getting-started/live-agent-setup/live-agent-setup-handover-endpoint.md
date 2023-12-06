---
title: "Endpunkt-Setup" 
Slug: "Live-Agent-Setup-Handover-Endpunkt" 
ausgeblendet: false 
---

# Richten Sie einen Cognigy.AI-Endpunkt für die Übergabe ein

Wenn Sie einen neuen Agenten in Cognigy.AI erstellen, werden Sie aufgefordert, einen Endpunkt auszuwählen. Sie können z. B. **Cognigy Webchat** als bestimmten Endpunkt für die Cognigy.AI Plattform auswählen. 
Weitere Informationen finden Sie unter [Endpunkte](https://docs.cognigy.com/ai/endpoints/overview/).

Wenn Sie einen Übergabeprozess in Ihren Flow integrieren möchten, müssen Sie Ihren Endpunkt für die Übergabe konfigurieren.

## Voraussetzungen

Überprüfen Sie vor dem Einrichten des Endpunkts, ob die folgenden Schritte ausgeführt wurden:

- [Live Agent ist für Ihr Unternehmen eingerichtet](live-agent-setup-org.md)
- [Der Posteingang wird für Ihr Live Agent-Konto erstellt](live-agent-setup-inbox.md)

## Übergabe-Konfiguration

Gehen Sie folgendermaßen vor, um die Übergabeeinstellungen Ihres Endpunkts zu konfigurieren:

1. Gehen Sie zur Cognigy.AI Oberfläche.
2. Wählen Sie im Menü auf der linken Seite **Deploy > Endpoint** aus.
3. Klicken Sie auf **+Neuer Endpunkt**.
4. Fügen Sie im Fenster **Neuer Endpunkt** einen Endpunktnamen hinzu und wählen Sie Ihren Virtual Agent Flow aus, der Sie an einen menschlichen Agenten übergibt.
5. Wählen Sie in der Liste **Endpunkttyp** den Webchat-Endpunkt aus.
6. Geben Sie einen eindeutigen Namen ein und klicken Sie auf **Speichern**.
7. Gehen Sie zu **Übergabeeinstellungen**. 
8. Wählen Sie **Cognigy Live Agent** aus der Liste **Übergabeplattform** aus.

Um Ihren **Live Agent** zu konfigurieren, haben Sie zwei Möglichkeiten: 

1. Sie können das **vorkonfigurierte Live Agent**-Konto für eine Übergabe verwenden, das der Cognigy.AI Organisation zugeordnet ist. 
2. Sie können die Live Agent-Übergabe manuell konfigurieren, indem Sie die **Übergabe an vorkonfiguriertes Live Agent-Konto** mit dem Kippschalter deaktivieren.

Beide Optionen werden im Folgenden beschrieben.

## Übergabe an vorkonfigurierten Live Agent

Wenn der Umschalter für die Option **Übergabe an vorkonfiguriertes Live Agent-Konto** aktiviert ist, werden Konversationen an das Live Agent-Konto übertragen, das der aktuellen Cognigy.AI Organisation zugeordnet ist.

Wenn Sie über eine On-Premise-Installation verfügen, legen Sie die folgenden Umgebungsvariablen in Ihrer Cognigy.AI Installation fest:

'''txt
FEATURE_USE_COGNIGY_LIVE_AGENT: wahr
COGNIGY_LIVE_AGENT_API_BASE_URL_WITH_PROTOCOL: <https: sub-domain.domain.com="">
COGNIGY_LIVE_AGENT_PLATFORM_TOKEN: <app-platform-token>
'''

Sie finden diese Umgebungsvariablen in der Konfigurationsdatei [value.yaml](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/main/values.yaml).

## Übergabe an manuell konfigurierten Live-Agenten

Gehen Sie folgendermaßen vor, um Ihren Live Agent manuell zu konfigurieren:

1. Öffnen Sie den Endpoint-Editor und deaktivieren Sie im Feld **Übergabeeinstellungen** die Option **Übergabe an vorkonfiguriertes Live-Agentenkonto** mit dem Kippschalter.
2. Geben Sie die **Basis-URL** für die Live Agent-Instanz ein. Die Basis-URL ist Ihre Live Agent-Installations-URL, erweitert um 'plus /api/v1'. In der Cognigy-Testumgebung ist beispielsweise "https://liveagent-trial.cognigy.ai/api/v1" die Basis-URL, während "https://liveagent-trial.cognigy.ai" die Live-Agent-URL ist.
3. Geben Sie die **Konto-ID** und den **API-Schlüssel** ein. Wie Sie die **Konto-ID** und den **API-Schlüssel** finden, finden Sie in den folgenden Abschnitten.
4. Klicken Sie auf **Speichern**, um Ihre Live Agent-Einstellungen zu bestätigen. 

Ihr Live Agent wurde konfiguriert. 

## Suchen Sie eine Konto-ID

Der Live-Agenten-Posteingang, den Sie in einem vorherigen Schritt für Ihr Projekt erstellt haben, wird durch eine **Konto-ID** definiert. 

Sie finden die Konto-ID in der Live-Agent-URL Ihres Live-Agent-Posteingangs.

Gehen Sie folgendermaßen vor, um die ID zu finden:

1. Öffnen Sie Ihr Live Agent-Konto und gehen Sie zu **Einstellungen > Posteingänge**. 
2. Suchen Sie in der Liste Posteingänge den Posteingang Ihres Projekts und klicken Sie auf das Symbol Einstellungen neben dem Posteingang. 
3. Die Inbox-Einstellungen werden angezeigt und Sie sehen die Adresszeile Ihres Browsers wie folgt: 'https://liveagent-/ app/accounts//<your-environment><account-id>settings/inboxes/<inbox-id>'. In der URL "https://liveagent-dev.cognigy.ai/app/accounts/2/settings/inboxes/32852" lautet die Konto-ID beispielsweise 2.

<figure>
    <img src="{{config.site_url}}live-agent/getting-started/images/LA_Inbox_URL.png" width="80%">
</figure>

Wenn Sie die Konto-ID gefunden haben, können Sie diese in den **Übergabeeinstellungen** Ihres Endpunkts in Cognigy.AI eingeben.

## Einen API-Schlüssel finden

1. Klicken Sie auf das Symbol **Profileinstellungen** Ihres Kontos in der unteren linken Ecke des Live Agent-Dashboards und wählen Sie dann **Profileinstellungen** im Auswahlmenü aus.
2. Suchen Sie den Abschnitt **Zugriffstoken**, in dem Ihr API-Schlüssel angezeigt wird. 
3. Kopieren Sie den API-Schlüssel und fügen Sie ihn in das Feld **API-Schlüssel** Ihres Endpunkts in Cognigy.AI ein. 

## Wie geht es weiter?

Wenn der Endpunkt konfiguriert ist, [richten Sie Ihren Flow für die Übergabe an den Live-Agenten ein](live-agent-setup-handover-flow.md)</inbox-id></account-id></your-environment></app-platform-token></https:>