---
Titel: "Cognigy Live Agent OAuth" 
slug: "Etiketten" 
ausgeblendet: false 
---

# Cognigy Live Agent OAuth

Sie können sich mit Ihrem Cognigy.AI-Konto bei Live Agent anmelden, indem Sie das OAuth2-Protokoll verwenden.
Um dies zu konfigurieren, befolgen Sie die Anweisungen im Abschnitt [Helm-Werte](.. /helm-values/helm-values.md) Artikel. Beachten Sie, dass dieser Ansatz die Standard-Anmeldemethode für Live Agent ist.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-cognigy-oauth.png" width="100%" alt="Live Agent OAuth screen and Cognigy Login" />
  <figcaption>Live-Agent-OAuth-Bildschirm und Cognigy-Anmeldung</figcaption>
</figure>

Nachdem Sie Ihre Anmeldedaten eingegeben haben, werden Sie auf die Live Agent-Seite weitergeleitet, auf der Ihr Cognigy.AI Konto angemeldet ist.

!!! Anmerkung 
    Denken Sie daran, dass der Benutzer über die richtigen Rollen verfügen muss, um sich bei Live Agent anmelden zu können. Andernfalls wird ein nicht autorisierter Fehler ausgelöst.

## Migrieren Sie bestehende Benutzer, die sich derzeit mit ihrer E-Mail-Adresse und ihrem Passwort anmelden, zur Verwendung von Cognigy.AI OAuth

Alte Benutzer, die über die Verwaltungsbenutzeroberfläche erstellt wurden, können sich weiterhin mit dem Endpunkt "/old-login" anmelden.

Es wird jedoch empfohlen, diese Benutzer zu migrieren, um die Cognigy.AI OAuth-Anmeldung zu verwenden. Gehen Sie folgendermaßen vor, um den Migrationsprozess zu initiieren:

1. Erstellen Sie ein Cognigy.AI Benutzerkonto mit derselben E-Mail-Adresse wie der alte Benutzer. 
2. Um sich bei Live Agent anzumelden, weisen Sie eine gültige Rolle zu, indem Sie der Anleitung [Hinzufügen von Agenten und Administratoren zum Live Agent] folgen (.. /.. /getting-started/live-agent-setup/live-agent-setup-agents.md). 
3. Melden Sie sich mit Cognigy.AI OAuth (Endpunkt "/login") bei Live Agent an.

!!! Anmerkung 
    Sobald dieser Vorgang abgeschlossen ist, kann sich der Benutzer nicht mehr mit "/old-login" anmelden, und alle Änderungen an seinen Anmeldeinformationen müssen über die Cognigy.AI Plattform vorgenommen werden.

## OAuth-Fehler

Die folgende Liste enthält die häufigsten Fehler, die bei der Verwendung des Cognigy.AI OAuth angezeigt werden können.

### Irgendetwas stimmt nicht mit der OAuth-Konfiguration

Das Problem bezieht sich auf die Art und Weise, wie die Cognigy.AI- und Live Agent-APIs für die Kommunikation eingerichtet sind. Um dieses Problem zu beheben, müssen Sie die Konfiguration für Live Agent im Feld [Helm-Werte](.. /helm-values/helm-values.md#oauth) ein. Überprüfen Sie außerdem die Cognigy.AI Konfigurationszuordnung, die die Live Agent-API-Endpunkte und Clientdaten enthält.

### Die Benutzerorganisation '{Organisations-ID}' wurde im System nicht gefunden

Diese Fehlermeldung weist darauf hin, dass dem angegebenen Cognigy.AI Organisation kein Live Agent-Konto zugeordnet ist. Um dieses Problem zu beheben, müssen Sie die Organisation in Live Agent einrichten. Weitere Informationen finden Sie in der [Cognigy Live Agent Setup](.. /.. /getting-started/live-agent-setup/live-agent-setup-org.md) für eine Anleitung dazu.

### Der Cognigy-Benutzer ist nicht berechtigt, auf das System zuzugreifen

Wenn der Benutzer nicht über die erforderlichen Berechtigungen verfügt, befolgen Sie die Anweisungen im Handbuch [Hinzufügen von Agenten und Administratoren zu Live Agent](.. /.. /getting-started/live-agent-setup/live-agent-setup-agents.md), um ihnen die entsprechenden Rollen zuzuweisen und das Autorisierungsproblem zu beheben.
Falls die obigen Anleitungen das Problem nicht gelöst haben, [können Sie uns über den Support erreichen](https://support.cognigy.com/hc/en-us/requests/new?).