---
Titel: "Kontoeinstellungen"
Slug: "Konto-Einstellungen" 
description: "Die Kontoeinstellungen in Cognigy Live Agent beziehen sich auf die Konfigurationsoptionen, mit denen Administratoren die globalen Einstellungen für die Live Agent-Instanz anpassen und verwalten können."
ausgeblendet: false 
---
# Konto-Einstellungen

_Account Settings_ ermöglichen es Ihnen, verschiedene allgemeine Einstellungen für die Installation von Live Agent zu ändern, einschließlich des Kontonamens, der Spracheinstellungen, der Konversationslogik, der E-Mail- und Push-Benachrichtigungen.

Um auf die Kontoeinstellungen zuzugreifen, navigieren Sie zum Menü auf der linken Seite von Live Agent und klicken Sie auf **Einstellungen** und wählen Sie dann **Kontoeinstellungen** aus.

## Name

Der Name ist der Name Ihres Kontos. Wenn ein Benutzer in mehreren Konten vorhanden ist, wird der Name angezeigt, um zu wissen, in welchem Konto der Benutzer angemeldet ist.

## Sprache

Die Sprache ist die Sprache Ihres Kontos. Alle verfügbaren Sprachen werden in der Dropdown-Liste angezeigt.

## Konversationslimit pro Agent

Das Konversationslimit pro Agent ist die maximale Anzahl von Konversationen, die ein menschlicher Agent gleichzeitig bearbeiten kann. Wenn alle Agenten das Limit in einem Posteingang erreichen, werden neue Konversationen nicht zugewiesen und warten darauf, dass sie von neuen Agenten abgeholt werden, wenn ihre Kapazität abnimmt. Das Konversationslimit gilt für die Gesamtzahl der Konversationen in allen Posteingängen.

Beispielsweise wird der menschliche Agent den Posteingängen A und B zugewiesen, und das Konversationslimit wird auf 2 festgelegt. In diesem Fall kann der Agent zwei Konversationen gleichzeitig bearbeiten, unabhängig davon, zu welchem Posteingang sie gehören.

Gehen Sie folgendermaßen vor, um ein Konversationslimit pro Agent einzurichten:

1. Gehen Sie zu **Einstellungen > Kontoeinstellungen**.
2. Wechseln Sie auf der Seite **Kontoeinstellungen** zum Abschnitt **Allgemeine Einstellungen**.
3. Aktivieren Sie die Option **Konversationslimit für Agenten festlegen**.
4. Geben Sie im Feld **Maximale Anzahl von Konversationen pro Agent** das gewünschte Limit für Agenten an.
5. Klicken Sie in der oberen rechten Ecke auf **Einstellungen aktualisieren**.

Das Limit wird auf alle Posteingänge angewendet.

Wenn Sie das Limit aufheben möchten, aktivieren Sie das **Kein Konversationslimit für Agenten** und klicken Sie auf **Einstellungen aktualisieren**.

## Automatisch wegsetzen

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-auto-set-away.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Kontoeinstellungen automatisch wegsetzen</figcaption>
</figure>

Die Option "Abwesend automatisch einstellen" wird verwendet, um den Agenten automatisch als abwesend festzulegen, wenn der Agent nicht aktiv ist. Dies bedeutet, dass der Agent keine Aktion im Browserfenster ausführt, während es geöffnet ist. 
Wenn der Benutzer eine Aktion ausführt, wird sie automatisch in den Online-Status zurückgesetzt.

>Hinweis: Dies funktioniert nicht, wenn der Live Agent geschlossen ist. In diesem Fall wird der Benutzer automatisch in den Offlinemodus versetzt, wenn das Browserfenster geschlossen wird.

## Anhang TTL

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-attachment-ttl.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Kontoeinstellungen Anhang TTL</figcaption>
</figure>

Die Option Anhänge TT löscht automatisch die Anhänge in den Nachrichten aller Kontounterhaltungen nach einer bestimmten Zeit. Die Uhrzeit ist in den vergangenen Tagen eingestellt. Sie ist standardmäßig deaktiviert.

## Automatische Auflösung

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-auto-resolve.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Automatische Auflösung der Kontoeinstellungen</figcaption>
</figure>

### Dauer der automatischen Auflösung

Mit der Option "Dauer automatisch auflösen" wird die Konversation nach einer bestimmten Anzahl von Stunden automatisch aufgelöst.

### Aktion "Automatisch auflösen"

Die Option "Aktion automatisch auflösen" wird verwendet, um eine Konversation automatisch zu beenden oder abzubrechen. Wenn die Option "Aktion automatisch auflösen" auf "Auflösen" festgelegt ist, wird die Konversation aufgelöst. 
Wenn die Option **Aktion automatisch auflösen** auf **Abbrechen** festgelegt ist, wird die Konversation abgebrochen. Basierend auf diesen Status können Filter angewendet werden.

### Gelöste Konversationen automatisch löschen

<figure>
<img src="{{config.site_url}}live-agent/images/LA-automatically-remove-resolved-conversations.png" width="100%" alt="Live Agent Delete Resolved Conversations" />
  <figcaption>Kontoeinstellungen Gelöste Konversationen automatisch löschen</figcaption>
</figure>

Wenn das Kontrollkästchen zum automatischen Löschen von gelösten Konversationen aktiviert ist, werden die als gelöst markierten Konversationen automatisch gelöscht. Dies gilt auch für die vorhandenen gemäß der Warnmeldung.

### Automatisches Zuweisen von Konversationen zu einem beschäftigten Agenten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.53-blue.svg)] (.. /.. /release-notes/4.53.md)

Standardmäßig können Sie menschlichen Agenten manuell Konversationen zuweisen, wenn diese beschäftigt sind.

Um diesen Prozess zu automatisieren, können Sie die Einstellung **Konversation einem beschäftigten Agenten zuweisen** aktivieren. 

## Benachrichtigungen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.45-blue.svg)] (.. /.. /release-notes/4.45.md)

{! _includes/live-agent/push-notifications.md !}

Als Administrator können Sie Push- und E-Mail-Benachrichtigungen für die folgenden Ereignisse konfigurieren:

- Wenn eine neue Konversation erstellt wird.
- Wenn Ihnen eine Konversation zugewiesen wird.
- Wenn Sie im Gespräch erwähnt werden.
- Wenn eine neue Nachricht in einer zugewiesenen Konversation erstellt wird.

Diese Konfiguration gilt für alle menschlichen Agenten Ihres Organisationskontos und überschreibt die [Profileinstellungen](.. /profile-settings.md#notifications).

## Konto-ID und -Version

<figure>
<img src="{{config.site_url}}live-agent/images/LA-account-settings-account-id-version.png" width="100%" alt="Live Agent Account Settings" />
  <figcaption>Kontoeinstellungen Konto-ID und -Version</figcaption>
</figure>

### Konto-ID

Die Konto-ID ist die eindeutige Kennung Ihres Kontos. Es wird in den Live Agent-URLs verwendet, um zu identifizieren, auf welches Konto zugegriffen wird. Eine Live Agent-URL kann beispielsweise https://liveagent-trial.cognigy.ai/app/accounts/**1**/dashboard lauten, wobei **1** die Konto-ID ist.

### Ausführung

Bei der Version handelt es sich um die Version des Cognigy Live Agents, die ausgeführt wird. Um die Funktionen und Fehlerbehebungen für jede Version zu überprüfen, gehen Sie zu [Versionshinweise](.. /.. /release-notes/release-notes.md)