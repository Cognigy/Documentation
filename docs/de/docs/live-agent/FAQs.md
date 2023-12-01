---
Titel: "Fragen und Antworten" 
Slug: "Fragen-und-Antworten" 
ausgeblendet: false 
---

# Fragen und Antworten zu Live Agent

## Live-Agent

### Wie entferne ich einen Benutzer?
Das Entfernen eines Benutzers (menschlicher Agent) aus Live Agent kann über die Cognigy.AI [Mitgliederseite](.. /ai/resources/manage/members.md). Die Rollen 'liveAgentAdmin'/'liveAgentAgent' müssen entfernt werden, um zu verhindern, dass sich der menschliche Agent bei Live Agent anmeldet. Dies kann auch erreicht werden, indem der Benutzer aus Cognigy.AI gelöscht wird.

Gehen Sie zu [Cognigy.AI Access Control](.. /ai/tools/user-menu/access-control.md) für weitere Informationen.

### Wie erstelle ich einen Agenten mit mehreren Rollen?

Um einen Agenten mit mehreren Rollen zu erstellen, lesen Sie den Artikel [Rollen](roles.md#multiple-roles).

### Was passiert, wenn ein Posteingang gelöscht wird?
Manuell erstellte Posteingänge können sicher gelöscht werden, mit Ausnahme derjenigen mit dem Suffix "-default". Das Löschen von Posteingängen mit '-default' unterbricht die Integration zwischen Live Agent und Cognigy.AI. Wenn dieser Posteingang versehentlich gelöscht wird, finden Sie die Lösung in der folgenden Frage.

### Was soll ich tun, wenn der Posteingang gelöscht wird?

Sie müssen einen neuen Posteingang erstellen. Verwenden Sie dazu den Artikel [Hinzufügen eines weiteren Posteingangs für Ihr Projekt](getting-started/live-agent-setup/live-agent-setup-additional-inbox.md).

### Wo kann ich nachsehen, was der Standard-Posteingang ist? Hat es eine spezielle Konto-ID?

Der Standardeingang hat den Musternamen "XXXX-default", z. B. "7119-default". Sie können es in [Inbox-Einstellungen](settings/inboxes.md#inbox-settings) umbenennen.

### Wie behebt man einen Fehler bei der Überprüfung des benutzerdefinierten SSL-Zertifikats?
Dies kann passieren, weil Cognigy.AI unter einem benutzerdefinierten SSL-Zertifikat ausgeführt wird (Fehler kann Zertifikat nicht validieren). Und Live Agent kann die Anfragen an ihn nicht ausführen, da SSL-Anfragen nicht überprüft werden können.

Gehen Sie zu [Rest-Client-SSL-Helm-Werte](.. /live-agent/installation/helm-values/helm-values.md#rest-client-ssl) für die Konfiguration.

### So beheben Sie SMTP ohne Authentifizierungsanbieter.
Bei selbstgehosteten Installationen muss die SMTP-Konfiguration geändert werden.

Gehen Sie zu [Helm-SMTP-Werte](.. /live-agent/installation/helm-values/smtp.md) für weitere Informationen.

### Wie erstelle ich Labels und weise sie Konversationen zu? 
Nachdem ein Label erstellt wurde, navigieren Sie zu einer Unterhaltung. Auf der rechten Seite befindet sich ein Abschnitt mit dem Namen ***Conversation Labels***, in dem Labels hinzugefügt werden können.

Weitere Informationen finden Sie unter [Labels](settings/labels.md).

### Wie fordere ich eine Datei aus einer Konversation an? 

<figure>
  <img src="{{config.site_url}}live-agent/images/LA-request-file.png" width="100%" alt="Live Agent request file" />
  <figcaption>Schaltfläche "Datei-Upload anfordern"</figcaption>
</figure>

Gehen Sie zu [Conversations-Workflow](.. /live-agent/conversation/conversation-workflow.md) für weitere Informationen.

### Wie füge ich Agenten zu einem Posteingang hinzu?
Nur Benutzer mit der Rolle "Administrator" können diese Aktion ausführen. 

Gehen Sie folgendermaßen vor, um einen Agenten zu einem Posteingang hinzuzufügen:

1. Navigieren Sie im Menü auf der linken Seite zu **Einstellungen** und wählen Sie dann **Posteingänge** aus.
2. Suchen Sie den Posteingang, den Sie bearbeiten möchten, und klicken Sie auf das Symbol **Einstellungen**.
3. Wählen Sie auf der Registerkarte **Mitarbeiter** den Agentennamen aus der Liste **Agenten** aus.
4. Übernehmen Sie die Änderungen, indem Sie auf **Aktualisieren** klicken.
Weitere Informationen finden Sie unter [Posteingänge](settings/inboxes.md#inbox-collaborators).

### Wie erstelle ich ein Team und füge Mitglieder hinzu?
Navigieren Sie zu **Einstellungen > Teams** und klicken Sie auf die Schaltfläche **Neues Team erstellen**. Fügen Sie im zweiten Schritt die gewünschten Agenten hinzu. Die hinzugefügten Agenten können später aktualisiert werden.

Weitere Informationen finden Sie unter [Teams](settings/teams.md).

### Wie bekomme ich das Benutzerzugriffstoken (API-Schlüssel)?
Das Benutzerzugriffstoken wird am unteren Rand der [Profileinstellungen](.. /live-agent/profile-settings.md).

### Wie kann ich die Konto-ID und die Posteingangs-ID anzeigen? 
Diese Informationen können über die Live Agent-URL abgerufen werden. 

Eine schnelle Möglichkeit besteht darin, einen Posteingang auf dem Dashboard-Bildschirm auszuwählen. Die URL sieht folgendermaßen aus: ''https:/// <live-agent-domain>app/accounts/1/inbox/4''.

Die URL folgt dem Muster "accounts/{Account ID}/inbox/{Inbox ID}", wobei die Konto-ID "1" und die Posteingangs-ID "4" lautet.

### Kann eine TTL für Anhänge in Nachrichten festgelegt werden?
Ja, eine TTL für Anhänge, die in Nachrichten pro Konto enthalten sind, kann unter [Kontoeinstellungen](settings/account-settings.md#attachment-ttl) definiert werden.

### Ist das Hochladen von Antivirendateien für App- und Testumgebungen aktiviert?
Das Hochladen von Antivirendateien muss auf Infrastrukturebene konfiguriert werden und ist derzeit nicht für die Test- und App-Instanzen aktiviert.
Gehen Sie zu [Antivirus-Scan-Helm-Werte für Datei-Uploads](.. /live-agent/installation/helm-values/helm-values.md#file-upload-antivirus-scan), um zu lernen, wie man es konfiguriert.

### Wie navigiere ich von Live Agent zu Cognigy.AI?
Unter dem Profilmenü befindet sich ein Link namens Cognigy.AI, der zum Cognigy.AI führt. Wenn es nicht vorhanden ist, gehen Sie zu [URLs Helm values](.. /live-agent/installation/helm-values/helm-values.md#urls) für die Konfiguration.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-link-cognigi.ai-platform.png" width="100%" alt="Link to Cognigy.AI" />
  <figcaption>Link zu Cognigy.AI</figcaption>
</figure>

### Abrufen eines Google Maps API-Schlüssels
Um einen von WhatsApp gesendeten Standort mit Google Maps zu sehen, benötigen Sie einen [Google Maps API-Schlüssel](https://developers.google.com/maps/documentation/javascript/get-api-key). Gehen Sie zur [App](.. /live-agent/installation/helm-values/helm-values.md#app), um es zu konfigurieren.

## Live-Agent-OData-Dienst

### Warum gibt der OData-Dienst nicht alle Informationen aus der Datenbank zurück?
Der OData-Dienst gibt Daten zurück, die zu Ihrem Konto gehören.

Gehen Sie zu [OData-Endpunkt](.. /live-agent/tools/odata-endpoint.md) für weitere Informationen.

### Warum löst der OData-Endpunkt bei der Abfrage einen nicht autorisierten Fehler aus?
Wenn ein nicht autorisierter Fehler auftritt, stellen Sie sicher, dass das API-Zugriffstoken zu einem Benutzer mit der Rolle "Administrator" für das Konto gehört, das in der Abfrage verwendet wird.
### Wie kann ich alle Inhalte aus einer bestimmten Sammlung abrufen?

Sie können alle Inhalte aus einer bestimmten Sammlung abrufen, z. B. Unterhaltung, Nachricht.

Die folgende Filterabfrage kann durchgeführt werden:

Beispiel: 'http://{{host}}:{{port}}/v1.0/odata/Conversation?$filter=created_at le '2126-11-23T00:00:00''.

Es werden alle Felder für das Konversationsmodell zurückgegeben, die vor dem 23.11.2126 erstellt wurden. 

Gehen Sie zu [OData-Endpunkt](.. /live-agent/tools/odata-endpoint.md) für weitere Informationen.

### Wie filtere ich OData mit bestimmten Feldern?

Um OData-Ergebnisse nach bestimmten Feldern zu filtern, können Sie die Abfrageparameter "$select" und "$filter" verwenden. 

Beispiel: 'http://{{host}}:{{port}}/v1.0/odata/Conversation?$select=id,account_id&$filter=created_at le '2026-11-23T00:00:00'.

In diesem Beispiel ruft die Anforderung die Felder "id" und "account_id" aus dem Konversationsmodell ab, gefiltert nach dem Feld "created_at", das kleiner oder gleich "2026-11-23T00:00:00" ist.

Ausführlichere Informationen finden Sie unter [OData-Endpunkt](.. /live-agent/tools/odata-endpoint.md) Artikel.</live-agent-domain>