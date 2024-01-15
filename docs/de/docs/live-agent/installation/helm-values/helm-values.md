---
 Titel: "Helm Values" 
 Slug: "Helm-Werte" 
 ausgeblendet: false 
---

# Helm-Werte

## Kurze Einführung

Helm-Werte sind alle Variablen, die für die Konfiguration der Live Agent-App und der Ressourcen verwendet werden. Diese werden in einer Datei namens "values.yaml" gespeichert. Er kann nach Belieben bearbeitet werden, um das Verhalten des Live Agents zu konfigurieren. Hier ist ein Beispiel für diese Datei:

'''Yaml
# Definieren des Ingress-Hosts
Eintritt:
  Aktiviert: false
  Anmerkungen:
    kubernetes.io/ingress.class: traefik
  Wirte:
    - Gastgeber: "live-agent-domain.com"
      Pfade:
        -Pfad:/
          pathType: Präfix
          Backend:
            Dienst:
              Name: cognigy-live-agent-app

configmap:
  # Kommentar zu einer kommentierten Variablen, sie wird ignoriert
  # REST_CLIENT_SSL_VERIFICATION=falsch
  FORCE_SSL: wahr
'''

Abgesehen davon, dass die Variablen in der Datei 'values.yaml' geändert oder kommentiert werden können, können Parameter auch mit dem Argument '--set key=value[,key=value]' in 'helm install' geändert werden. Zum Beispiel:

'''sch
helm install my-release \
  --set configmap. SSL_CA_FILE="/etc/ca.pem"\
    ./cognigy-live-agent
'''

Der obige Befehl setzt den Pfad der Live Agent-Zertifikatsdatei auf '/etc/ca.pem'. Weitere Informationen finden Sie in der Helm-Dokumentation [Template and Values](https://helm.sh/docs/chart_best_practices/values).

Es wird empfohlen, eine Datei "custom-values.yaml" zu erstellen und die Schlüssel/Wert-Paare hinzuzufügen, die überschrieben werden müssen, anstatt die Datei "values.yaml" direkt zu ändern. Dann wäre es im Moment des Ausführens von Installations-/Upgrade-Befehlen so einfach, wie das Argument am Ende wie folgt zu verwenden:

'''sch
helm install cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version X.X.X --namespace live-agent -f custom-values.yaml
'''

Als Nächstes finden Sie eine Definition für jeden dieser Werte, um zu verstehen, wie Sie sie entsprechend ändern können.

## Spezifische Konfigurationen

Für bestimmte Werte und Logik können Sie hier diese speziellen Abschnitte verwenden:

- [Datenbank](database.md)
- [Redis](redis.md)
- [Lagerung](storage.md)
- [SMTP](smtp.md)
- [E-Mail-Vorlagen](email-templates.md)

## Bilder

| Bezeichnung: | Beschreibung | Wert |
|------------------------------|-----------------------------------------|---------------------------------------|
| 'image.repository' | Live-Agenten-Bild-Repository | "cognigy.azurecr.io/live-agent" |
| 'image.tag' | Live-Agent-Bild-Tag | "z.B. 2.0.0" |
| 'image.pullPolicy' | Richtlinie zum Abrufen von Live-Agent-Images | 'IfNotPresent' |
| 'image.pullSecretName' | Name des geheimen Geheimnisses für Live Agent-Image abrufen | 'cognigy-registry-token' |
| 'odata.image.repository' | OData-Image-Repository für Live-Agenten | "cognigy.azurecr.io/live-agent-odata" |
| 'odata.image.tag' | OData-Bild-Tag für Live-Agent | "z.B. 1.0.0" |
| 'odata.image.pullPolicy' | OData-Image-Pullrichtlinie für Live Agent | 'IfNotPresent' |
| 'odata.image.pullSecretName' | Name des geheimen Geheimnisses für Live Agent OData-Image abrufen | 'cognigy-registry-token' |

## Cognigy

### App-Plattform-Token

Cognigy.AI verwendet ein App Platform Token zum Ausführen von Vorgängen,
 z. B. das Synchronisieren und Erstellen von Daten (z. B. Posteingänge und Konten),
mit der Live Agent-API.
Zu diesem Zweck müssen die Geheimnisse von Live Agent und Cognigy.AI auf übereinstimmende Werte festgelegt sein.

#### Live-Agenten-Geheimnis

Es wird empfohlen, einen neuen geheimen Schlüssel unter dem Live Agent-Namespace zu erstellen und in den Helm-Werten darauf zu verweisen. Andernfalls wird automatisch ein Geheimnis mit dem Namen "live-agent-cognigy-live-agent-cognigy-platform-app-token" mit einem zufälligen Wert erstellt (dieses Geheimnis wird beibehalten und in zukünftigen Helm-Upgrades nicht geändert).

| Bezeichnung: | Beschreibung | Standardwert |
|---------------------------------------------|----------------------------------------|---------------|
| 'cognigyPlatformAppToken.existingSecret' | Geheimer Name des Cognigy-App-Plattform-Tokens | '""'          |
| 'cognigyPlatformAppToken.existingSecretKey' | Geheimer Token-Schlüssel für die Cognigy-App-Plattform | '""'          |

> Hinweis: Der Wert des geheimen Schlüssels muss eine zufällige alphanumerische Zeichenfolge mit 24 Zeichen sein, ähnlich wie "V65Xyf6pphEeac64g2d92pvw"

#### Cognigy.AI Geheimnis

Die folgenden Helm-Werte müssen eingerichtet werden:

'''Yaml
cognigyLiveAgent:
  ## Vorhandener geheimer Schlüssel mit Live-Agent-Anmeldeinformationen. Der geheime Schlüssel muss über den folgenden Schlüssel verfügen:
  ## "cognigy-live-agent-platform-token": Das Token für den kognitiven Live-Agenten
  existingSecret: ""
'''

#### Fehlerbehebung

Wenn die Geheimnisse denselben Wert haben, die Integration jedoch nicht funktioniert (z. B. Übergabe oder vorkonfigurierter Live Agent funktioniert nicht), gehen Sie wie folgt vor:

1. Starten Sie den App-Pod "live-agent-cognigy-live-agent-XXX" im Live Agent-Namespace neu.
2. Starten Sie die folgenden Cognigy.AI Pods im Cognigy.AI-Namespace neu:
   - Service-Übergabe
   - Service-Sicherheit
   - Service-API
   - Service-Ressourcen
   - service-ui

### OAuth

Dies sind die Werte, die für die Aktivierung der Cognigy-Authentifizierung in Live Agent verwendet werden. Auf diese Weise können sich Cognigy-Benutzer mit denselben Anmeldedaten bei Live Agent anmelden.

| Bezeichnung: | Beschreibung | Standardwert |
|-----------------------------------------|---------------------------------|-------------------------------------------------------------------|
| 'configmap. COGNIGY_OAUTH_CLIENT_ID' | OAuth-Client-ID | '"cognigy-live-agent"' |
| 'configmap. COGNIGY_OAUTH_SITE' | Cognigy API-Webseite | '"https://api-installation.cognigy.ai"/v2.0' |
| 'configmap. COGNIGY_OAUTH_AUTHORIZE_URL' | Cognigy OAuth API URL autorisieren | '"https://installation.cognigy.ai/login?cognigy-live-agent=true"' |
| 'configmap. COGNIGY_OAUTH_TOKEN_URL' | OAuth-Token-URL | '"https://api-installation.cognigy.ai/auth/oauth2/token"' |

Erstellen Sie für den geheimen OAuth-Clientschlüssel einen geheimen Schlüssel im Live Agent-Namespace, und legen Sie dann die folgenden Werte fest:

| Bezeichnung: | Beschreibung | Standardwert |
|----------------------------------|-----------------------------------------|---------------|
| 'cognigyOAuth.existingSecret' | Geheimnisname für den geheimen OAuth-Clientschlüssel | '""'          |
| 'cognigyOAuth.existingSecretKey' | Geheimer Schlüssel für den geheimen OAuth-Client | '""'          |

> Hinweis: Der Wert des geheimen Schlüssels muss eine zufällige alphanumerische Zeichenfolge mit 64 Zeichen sein, ähnlich wie "DUSOBAPM2L5V3CNLBw48surpgzrpk6bji9fav65xyf6ppheeac64g2d92pvwouhm"

#### Cognigy.AI

Die folgenden Helm-Werte müssen eingerichtet werden:

'''Yaml
cognigyEnv:
  ...
  COGNIGY_LIVE_AGENT_API_BASE_URL_WITH_PROTOCOL: <live-agent-url>"
  CLIENT_ID_COGNIGY_LIVE_AGENT: "Cognigy-Live-Agent"
  CLIENT_SECRET_COGNIGY_LIVE_AGENT: "<secret-value>"
  REDIRECT_URI_COGNIGY_LIVE_AGENT: "/<live-agent-url>omniauth/cognigy/callback"
  COGNIGY_LIVE_AGENT_UI_BASE_URL_WITH_PROTOCOL: "<live-agent-url>"
  FEATURE_USE_COGNIGY_LIVE_AGENT: "wahr"
'''

#### Fehlerbehebung

Wenn die Geheimnisse und Konfigurationszuordnungen den gleichen Wert haben, die Integration jedoch nicht funktioniert (z. B. OAuth-Konfigurationsfehler "Mit der OAuth-Konfiguration stimmt etwas nicht"), führen Sie die folgenden Schritte aus:

1. Starten Sie den App-Pod "cognigy-live-agent-app-XXX" im Live Agent-Namespace neu.
2. Starten Sie die folgenden Cognigy.AI Pods im Cognigy.AI-Namespace neu:
   - Service-Sicherheit
   - Service-API
   - Service-Ressourcen
   - service-ui

### Einblicke

Um Analysen zu Konversationen von Live Agent an Insights zu senden, müssen die folgenden Helm-Werte festgelegt werden:

| Bezeichnung: | Beschreibung | Standardwert |
|-----------------------------|----------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| 'cognigyInsights.apiUrl' | Dies ist die URL des Dienstsammlers und besteht aus dem Dienstnamen und dem Namespace. | '"http://service-collector.cognigy-ai.svc.cluster.local:8000"' |
| 'cognigyInsights.secret' | Name des Geheimnisses, der den Schlüssel und den Wert für den API-Schlüssel enthält | '""'                                                           |
| 'cognigyInsights.secretKey' | Geheimer Schlüssel, der auf den Wert für den API-Schlüssel verweist | '""'                                                           |

Der Wert für den geheimen Schlüssel wird aus dem geheimen Schlüssel abgerufen
im Cognigy.AI-Namespace mit dem Namen "cognigy-insights-collector-api-key" enthalten
und einen Schlüssel namens Secret.
Die URL muss auf die lokale Adresse des Insights-Dienstsammlers verweisen.

#### Fehlerbehebung

Wenn diese Werte nicht festgelegt sind, werden keine Konversationsanalysedaten an Insights gesendet, und ein Warnprotokoll wird angezeigt, wenn der Live Agent-Pod gestartet wird.

'''
Die Daten werden nicht an Cognigy Insights gesendet, da keine der folgenden Umgebungsvariablen festgelegt wurde: COGNIGY_INSIGHTS_API_KEY und COGNIGY_INSIGHTS_API_BASE_URL_WITH_PROTOCOL
'''

### URLs

| Bezeichnung: | Beschreibung | Standardwert |
|---------------------------------------------------|-------------------------------------------------------|-------------------------------------------|
| 'configmap. COGNIGY_AI_UI_BASE_URL_WITH_PROTOCOL' | URL, die für den Zugriff auf Cognigy.AI Benutzeroberfläche von Live Agent aus verwendet wird. | '""https://installation.cognigy.ai""' |
| 'configmap. COGNIGY_AI_API_BASE_URL_WITH_PROTOCOL' | URL zum Ausführen von Anforderungen an Cognigy.AI API | '""https://api-installation.cognigy.ai""' |

## Antivirus-Scan zum Hochladen von Dateien

Um den Antivirus-Datei-Upload-Scan zu aktivieren, müssen die folgenden Werte aktiviert werden:

| Bezeichnung: | Beschreibung | Standardwert |
| ------------------------- | -------------------------------------------------------- | ------------- |
| 'antivirusScan.enabled' | Boolescher Wert zum Aktivieren des Datei-Upload-Antivirus-Scans | 'falsch' |
| 'antivirusScan.resources' | Empfohlene Werte sind bereits für die Pod-Ressourcen festgelegt |               |

Es scannt die hochgeladene Datei auf Viren und blockiert den Upload, wenn ein Virus gefunden wird. Es scannt alle Dateien, die in einer Nachricht als Anhang hochgeladen werden, einschließlich der Dateien von Live Agent UI und Cognigy.AI Webchat.

## App

| Bezeichnung: | Beschreibung | Standardwert |
| ------------------------------------ | ------------------------------------------------------------------------------------------------- | ------------- |
| 'configmap. FORCE_SSL' | Erzwingt den gesamten Zugriff auf die App über SSL, der Standardwert ist auf false festgelegt.                                    | '"falsch"' |
| 'configmap. GOOGLE_MAPS_API_TOKEN' | Dieser Wert wird verwendet, um eine Google Maps-Karte mit dem vom Nutzer freigegebenen Standort zu laden.                | '""'          |
| 'configmap. USE_INBOX_AVATAR_FOR_BOT' | Bot-Anpassungen | '"wahr"' |
| 'configmap. FRONTEND_EXTERNAL_URL' | Legen Sie eine andere Frontend-URL für externe Systeme fest, um auf Live Agent zuzugreifen (z. B. Datei-Upload anfordern) | '""'          |
| 'configmap. SENTRY_DSN' | Sentry DSN zur Fehlerverfolgung | '""'          |

### Integrität von Cookies

Live Agent verwendet einen sicheren Speicher zum Signieren von Cookies. Der Wert "SECRET_KEY_BASE" muss auf einen sicheren Wert festgelegt werden. Der Standardwert ist auf eine zufällige Zeichenfolge festgelegt, es wird jedoch empfohlen, ihn in einen sicheren Wert zu ändern.

> Hinweis: Bisher wurde das 'SECRET_KEY_BASE' direkt unter dem Abschnitt 'configmap' gesetzt. Dies ist jetzt veraltet und sollte im Abschnitt "cookiesIntegrity" festgelegt werden. Für frühere Installationen wird empfohlen, einen vorhandenen geheimen Schlüssel zu erstellen, da sich sonst der Wert ändert und alle Live Agent-Benutzersitzungen ablaufen.

'''Yaml
cookiesIntegrität:
  # Kommentieren Sie diese Zeilen aus, falls es ein vorhandenes Geheimnis gibt und Sie es bei der Installation nicht erstellen möchten
  # existingSecret: "<secret-name>"
  # existingSecretKey: "<secret-key>"
'''

### Rest-Client-SSL

Live Agent führt Anforderungen an Cognigy.AI-APIs aus. Wenn Sie Cognigy.AI Dienste mit einem selbstsignierten Zertifikat mit einer benutzerdefinierten Zertifizierungsstelle (CA) ausführen, der Sie vertrauen möchten, oder wenn SSL deaktiviert werden muss, sind diese Einstellungen erforderlich.

#### Verifizierung von Zertifikaten

| Bezeichnung: | Beschreibung | Standardwert |
| ----------------------------- | ----------------------------------- | ------------- |
| 'restClient.ssl.verification' | SSL-Zertifikatsüberprüfung aktivieren | '"wahr"' |

#### Selbstsigniertes Zertifikat mit benutzerdefinierter Zertifizierungsstelle

Erstellen Sie einen geheimen Schlüssel mit einem Schlüssel, der als Name der Zertifikatsdatei bezeichnet wird (z. B. "cert.pem"). Er wird im Pod-Dateisystem gemountet, um von der Live Agent-App als vertrauenswürdig eingestuft zu werden. Der Wert muss den Inhalt der Zertifikatsdatei ohne zusätzliche Tabulatoren/Leerzeichen enthalten. Geben Sie dann die folgenden Werte ein:

| Bezeichnung: | Beschreibung |
| ---------------------------- | -------------- |
| 'restClient.ssl.CASecret' | Name des geheimen CA-Geheimnisses |
| 'restClient.ssl.CASecretKey' | Geheimer CA-Schlüssel |

Stellen Sie sicher, dass die Pods nach dem Aktualisieren der Werte neu gestartet werden.

#### Client-Zertifikat

Um ein Clientzertifikat zu verwenden, erstellen Sie einen geheimen Schlüssel, der das Clientzertifikat, den Clientzertifikatschlüssel und die Schlüsselpassphrase enthält (sofern der Schlüssel eine Passphrase hat). Geben Sie dann die folgenden Werte ein:

| Bezeichnung: | Beschreibung |
|-----------------------------------------------|-----------------------------------------------------------------------------------|
| 'restClient.ssl.clientCertSecret' | Name des geheimen Clientzertifikats |
| 'restClient.ssl.clientCertSecretKey' | Geheimer Schlüssel des Clientzertifikats. Der Wert muss im X509-Format |
| 'restClient.ssl.clientKeySecretKey' | Geheimer Schlüssel des Clientschlüssels. Sein Wert muss als RSA-Schlüsselinhalt |
| 'restClient.ssl.clientKeySecretPassphraseKey' | Geheimer Schlüssel für die Passphrase des Clientschlüssels. Lassen Sie es kommentieren, wenn der Schlüssel keine Passphrase hat |

Stellen Sie sicher, dass die Pods nach dem Aktualisieren der Werte neu gestartet werden.

## OData

| Schlüssel | Beschreibung | Typ | Standardwert |
|----------------------------------|-----------------------------------|---------|---------------|
| 'odata.enabled' | Aktivieren des OData-Diensts und -Endpunkts | Boolescher Wert | 'wahr' |
| "odata.configmap.ODATA_PROTOCOL" | http oder https | Zeichenfolge | '"https"' |

## Sonstiges

| Schlüssel | Typ | Standardwert |
|---------------------------------------------------------|----------------------------------------------------------------------------------------------------------|--------------------------------------|
| 'Affinität' | Objekt | '{}'                                 |
| 'frontendUrlOverride' | Standardmäßig ist die Front-End-URL der Ingress-Host. Überschreiben Sie sie mit dieser Eigenschaft, falls dies erforderlich ist. | '"https://<live-agent-domain>.com/"' |
| 'fullnameOverride' | Zeichenfolge | '""'                                 |
| 'hooks.affinity' | Objekt | '{}'                                 |
| 'hooks.migrate.env' | Liste | '[]'                                 |
| 'hooks.migrate.hookAnnotation | Zeichenfolge | '"post'-install,post-upgrade"' |
| 'hooks.migrate.resources.limits.memory' | Zeichenfolge | '"1000Mi"' |
| 'hooks.migrate.resources.requests.memory' | Zeichenfolge | '"1000Mi"' |
| 'ingress.annotations' | Objekt | '{}'                                 |
| 'ingress.enabled' | bool | 'falsch' |
| 'ingress.hosts[0].host' | Zeichenfolge | '""'                                 |
| 'ingress.hosts[0].paths[0].backend.service.name' | Zeichenfolge | '"cognigy-live-agent-app"' |
| 'ingress.hosts[0].paths[0].backend.service.port.number' | int | '3000' |
| 'ingress.hosts[0].paths[0].path' | Zeichenfolge | '"/"'                                |
| 'ingress.hosts[0].paths[0].pathType' | Zeichenfolge | '"Präfix"' |
| 'ingress.tls' | Liste | '[]'                                 |
| 'nameOverride' | Zeichenfolge | '""'                                 |
| 'nodeSelector' | Objekt | '{}'                                 |
| 'podAnnotations' | Objekt | '{}'                                 |
| 'podSecurityContext' | Objekt | '{}'                                 |
| "Ressourcen" | Objekt | '{}'                                 |
| 'securityContext' | Objekt | '{}'                                 |
| 'service.port' | int | '80' |
| 'service.type' | Zeichenfolge | '"ClusterIP"' |
| 'serviceAccount.annotations' | Objekt | '{}'                                 |
| 'serviceAccount.create' | bool | 'falsch' |
| "serviceAccount.name" | Zeichenfolge | '""'                                 |
| 'services.annotations' | Objekt | '{}'                                 |
| 'services.internlPort' | int | '3000' |
| "services.name" | Zeichenfolge | '"cognigy-live-agent-app"' |
| 'services.targetPort' | int | '3000' |
| 'services.type' | Zeichenfolge | '"LoadBalancer"' |
| "Toleranzen" | Liste | '[]'                                 |
| 'app.replica' | int | "1" |
| 'app.extraVolumes' | Objekt | '{}'                                 |
| 'app.extraVolumeMounts' | Objekt | '{}'                                 |
| 'worker.replica' | int | "1" |
| 'worker.extraVolumes' | Objekt | '{}'                                 |
| 'worker.extraVolumeMounts' | Objekt | '{}'                                 |
</live-agent-domain></secret-key></secret-name></live-agent-url></live-agent-url></secret-value></live-agent-url>