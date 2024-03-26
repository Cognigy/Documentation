---
Titel: "Profileinstellungen" 
Slug: "Profil-Einstellungen" 
ausgeblendet: false 
---

# Profil-Einstellungen

Jeder Benutzer in Live Agent hat ein Profil.
Im Profil können Sie Ihren Avatar und Ihren Namen bearbeiten, die von anderen Live Agent-Benutzern gesehen werden.
Außerdem können Sie bestimmte Systemeinstellungen für sich selbst anpassen, z. B. den Empfang von Benachrichtigungen oder die Verwaltung von Hotkeys.

Um auf Ihr Profil zuzugreifen, klicken Sie in der unteren linken Ecke der Live Agent-Benutzeroberfläche auf die Miniaturansicht des Profils und wählen Sie dann **Profileinstellungen** aus.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-profile-settings-menu.png" width="100%" alt="Live Agent Profile  Menu" />
  <figcaption>Menü "Profil"</figcaption>
</figure>

## Benutzerprofil-Daten

In diesem Abschnitt können die Benutzerprofildaten geändert werden.
Derzeit können Benutzer das Profilbild und den Anzeigenamen anpassen.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-profile-settings-profile.png" width="100%" alt="Live Agent Profile Profile " />
  <figcaption>Profil</figcaption>
</figure>

| Feld | Beschreibung |
|---------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Profilbild | Es wird in der Agentenkonversation, in den Agentenlisten und im Profilmenü angezeigt |
| Anzeigename | Derzeit wird es für das Gesprächsprotokoll verwendet, das der Agent per E-Mail versenden kann. Transkriptnachrichten, die vom Agenten gesendet werden, verwenden den Anzeigenamen als Absendernamen |

Die restlichen Benutzerdaten, z. B. E-Mail-Adresse, vollständiger Name und Kennwort, müssen im Cognigy.AI Konto aktualisiert werden. Die Änderung gilt automatisch für Live Agent.

## Benachrichtigungen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.45-blue.svg)] (.. /release-notes/4.45.md)

{! _includes/live-agent/push-notifications.md !}

Sie können das Verhalten von Benachrichtigungen anpassen.

Ab Cognigy 4.45 können Sie nur noch Audio-Benachrichtigungen konfigurieren.
Push- und E-Mail-Benachrichtigungen werden nach [Kontoeinstellungen]verschoben (settings/account-settings.md#notifications)
und kann nur von Administratoren gesteuert werden.
Wenn der Administrator die Einstellungen für Push- und E-Mail-Benachrichtigungen noch nicht geändert hat,
ein menschlicher Agent hat immer noch die Möglichkeit, sie in den Profileinstellungen zu ändern.

## Hotkey zum Senden von Nachrichten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.59-blue.svg)] (.. /release-notes/4.59.md)

Um Nachrichten im [Konversationschat](conversation/conversation-workflow.md) zu senden, können Sie eine der folgenden Hotkey-Optionen auswählen:

- **Keine** — Senden Sie Nachrichten, indem Sie auf die Schaltfläche **Senden** klicken. Die Taste ++enter++ wird für Zeilenumbrüche verwendet.
- **Enter (↵)** — Senden Sie Nachrichten, indem Sie die Taste ++Enter++ drücken, anstatt auf die Schaltfläche **Senden** zu klicken. Die Tastenkombination ++Shift+Enter++ wird für Zeilenumbrüche verwendet.
- **Cmd/Ctrl + Enter (⌘ + ↵)** — senden Sie Nachrichten, indem Sie ++cmd+enter++ oder ++ctrl+enter+++ drücken, anstatt auf die Schaltfläche **Senden** zu klicken. Diese Option ist standardmäßig aktiviert. Die Taste ++enter++ wird für Zeilenumbrüche verwendet.

## API-Zugriffstoken

Hier finden Sie auch das Benutzerzugriffstoken.
Dies wird für die Live Agent-API verwendet, und ihre Aktionen sind durch die Benutzerrolle eingeschränkt.