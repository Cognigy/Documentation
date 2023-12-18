---
title: "Benachrichtigungen"
slug: "Benachrichtigungen"
description: "Benachrichtigungen sind Nachrichten oder Warnungen, die generiert werden, um menschliche Agenten über neue Ereignisse, Aktivitäten oder Interaktionen innerhalb eines Konversations-Chat-Systems in Live Agent zu informieren. Diese Benachrichtigungen dienen dazu, die Agenten auf dem Laufenden zu halten und zeitnah auf Kundenanfragen zu reagieren."
ausgeblendet: false
---

# Benachrichtigungen

_Benachrichtigungen_ sind Nachrichten oder Warnungen, die generiert werden, um menschliche Agenten über neue Ereignisse, Aktivitäten oder Interaktionen innerhalb eines Konversations-Chat-Systems in Live Agent zu informieren. Diese Benachrichtigungen dienen dazu, Agenten auf dem Laufenden zu halten und zeitnah auf Kundenanfragen zu reagieren.

## Arten von Benachrichtigungen

In Live Agent können Sie E-Mail- und Push-Benachrichtigungen konfigurieren und auch Audiowarnungen für bestimmte Arten von Aktionen hinzufügen, die Benachrichtigungen auslösen.

In der folgenden Tabelle sind die Aktionen in Live Agent aufgeführt, für die Benachrichtigungen konfiguriert werden können.

| Aktions-/Benachrichtigungstyp | E-Mail | Schieben | Audio |
|------------------------------------------------------|-------|------|-------|
| Eine neue Konversation wird erstellt | +     | +    | +     |
| Eine Konversation wird einem Benutzer zugewiesen | +     | +    | +     |
| Ein Benutzer wird in einer Konversation erwähnt | +     | +    | -     |
| Eine neue Konversation wird erstellt | +     | +    | -     |
| Eine neue Nachricht wird in einer zugewiesenen Konversation erstellt | +     | +    | -     |

### Anforderungen an Push-Benachrichtigungen

Für Push-Benachrichtigungen gelten folgende Voraussetzungen:

- Push-Benachrichtigungen müssen in Live Agent und in Ihrem Browser aktiviert sein. Andernfalls sind sie nicht verfügbar.
- Pushbenachrichtigungen werden vom Microsoft Edge-Browser nicht unterstützt.
- Push-Benachrichtigungen funktionieren in Google Chrome und Mozilla Firefox wie erwartet. Für die anderen Browser kann Cognigy keine Garantie übernehmen.

### Anpassung von E-Mail-Benachrichtigungen

Wenn Sie eine On-Premise-Live-Agent-Installation haben, können Sie Ihre [E-Mail-Vorlage](installation/helm-values/email-templates.md) anpassen.

## Benachrichtigungen konfigurieren

Benachrichtigungen können auf zwei Ebenen konfiguriert werden: 

- [Benutzerprofilebene](#configure-Benachrichtigungen-auf Benutzerprofilebene)
- [Kontoebene](#configure-Benachrichtigungen-auf Kontoebene)

### Konfigurieren von Benachrichtigungen auf Benutzerprofilebene

In Live Agent kann ein Benutzer mit einer beliebigen Rolle Audio-, E-Mail- und Push-Benachrichtigungen in seinem Profil konfigurieren.

!!! Anmerkung
    Die Einstellungen für E-Mail- und Push-Benachrichtigungen in den [Kontoeinstellungen] (#configure-Benachrichtigungen auf Kontoebene) haben Vorrang vor den Profileinstellungen.
    Wenn der Administrator die Einstellungen für Push- und E-Mail-Benachrichtigungen noch nicht geändert hat, hat ein Benutzer dennoch die Möglichkeit, sie in den Profileinstellungen zu ändern.

Gehen Sie folgendermaßen vor, um Benachrichtigungen auf Benutzerprofilebene zu konfigurieren:

1. Gehen Sie zu Live Agent.
2. Klicken Sie in der unteren linken Ecke des Bildschirms auf das Symbol **Profileinstellungen**.
3. Wählen Sie in der Liste **Profileinstellungen** aus.
4. Aktivieren Sie in der Einstellung **Profileinstellungen** die folgenden Einstellungen:
    - **Audio-Benachrichtigungen** — aktivieren Sie Audio-Benachrichtigungen. Wählen Sie eine der folgenden Optionen aus:
        - **Keine** — die Audiobenachrichtigungen sind deaktiviert.
        - **Zugewiesene Unterhaltungen** – die Audiobenachrichtigungen funktionieren nur, wenn die Konversation einem Benutzer zugewiesen ist. 
        - **Alle Unterhaltungen** – die Audiobenachrichtigungen funktionieren für alle erstellten Unterhaltungen.
    - **E-Mail-Benachrichtigungen** – aktivieren Sie die gewünschten Ereignisoptionen für Ihre E-Mail-Benachrichtigungen.
    - **Push-Benachrichtigungen** – aktivieren Sie die gewünschten Ereignisoptionen für Ihre Push-Benachrichtigungen.

Die Einstellungen werden automatisch übernommen.

### Konfigurieren von Benachrichtigungen auf Kontoebene

Sie können E-Mail- und Push-Benachrichtigungen nur dann auf Kontoebene konfigurieren, wenn Sie über die Rolle "Administrator" verfügen.

Diese Konfiguration gilt für alle Benutzerprofile in Ihrem Konto (Organisation) und überschreibt die [Profileinstellungen](#configure-notifications-at-the-user-profile-level).

Gehen Sie folgendermaßen vor, um E-Mail- und Push-Benachrichtigungen auf Kontoebene zu konfigurieren:

1. Gehen Sie zu Live Agent.
2. Wählen Sie auf der linken Seite des Bildschirms **Einstellungen**.
3. Wählen Sie in der Spalte "Einstellungen" die Option "Kontoeinstellungen" aus.
4. Aktivieren Sie auf der Seite **Kontoeinstellungen** die folgenden Benachrichtigungen:
    - **E-Mail-Benachrichtigungen** — Aktivieren Sie **Aktivieren Sie das Überschreiben von E-Mail-Benachrichtigungseinstellungen** und aktivieren Sie die gewünschten Ereignisoptionen für Ihre E-Mail-Benachrichtigungen.
    - **Push-Benachrichtigungen** – aktivieren Sie **Push-Benachrichtigungseinstellungen aktivieren** und aktivieren Sie die gewünschten Ereignisoptionen für Ihre Push-Benachrichtigungen.
5. Klicken Sie in der oberen rechten Ecke auf **Einstellungen aktualisieren**, um die Einstellungen zu übernehmen.

## Ungelesene Benachrichtigungen anzeigen

Um Ihre ungelesenen Benachrichtigungen in Live Agent anzuzeigen, gehen Sie wie folgt vor:

1. Gehen Sie zu Live Agent.
2. Klicken Sie in der unteren linken Ecke des Bildschirms auf ! [Glocke] (.. /assets/icons/bell.svg).
3. Um alle Benachrichtigungen in einem Fenster anzuzeigen, klicken Sie auf **Alle Benachrichtigungen anzeigen**.
4. Klicken Sie auf ein Benachrichtigungselement, um die entsprechende Konversation anzuzeigen.

## Mehr Informationen

- [Profileinstellungen](./profile-settings.md)
- [Kontoeinstellungen](./settings/account-settings.md)