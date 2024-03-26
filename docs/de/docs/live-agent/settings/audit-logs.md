---
Titel: "Audit-Protokolle"
Slug: "Audit-Protokolle"
Beschreibung: "Live-Agenten-Audit-Protokolle sorgen für Transparenz und Verantwortlichkeit, indem sie Benutzeraktivitäten, Systemereignisse und Konfigurationsänderungen aufzeichnen. Sie helfen bei der Beantwortung wichtiger Fragen zu Maßnahmen, die in Ihrer Live-Agent-Umgebung ergriffen werden, und verbessern die Sicherheit und Prüfung."
ausgeblendet: false
---

# Audit-Protokolle

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.57-blue.svg)] (.. /.. /release-notes/4.57.md)

_Audit Logs_ sind ein Werkzeug zur Aufrechterhaltung der Transparenz und Verantwortlichkeit innerhalb Ihrer Live Agent-Ressourcen. 

In diesen Protokollen werden wichtige Benutzeraktivitäten, Systemereignisse und Konfigurationsänderungen aufgezeichnet und Details zu Sicherheits- und Überwachungszwecken bereitgestellt. 

Mit Audit-Protokollen können Sie Fragen wie "Wer hat was, wo und wann gemacht?" in Ihrer Live Agent-Umgebung beantworten. 

Die Protokolle enthalten Ereignisse wie "create", "update" und "delete" für die folgenden Entitäten:

- [Assist-Bots](.. /assistants/assist-bot.md)
- [Automatisierungsregeln](automation-rules.md)
- [Posteingänge](inboxes.md)
- [Mitarbeiter im Posteingang](inboxes.md#posteingang-Mitarbeiter)
- [Posteingangs-Webhooks](inboxes.md#posteingangseinstellungen)
- [Teams](teams.md)

Nur Benutzer mit der Rolle "Administrator" können auf diese Protokolle zugreifen. 

## Struktur der Audit-Log-Einträge

Jeder Überwachungsprotokolleintrag bietet ein strukturiertes Format, das den für die Aktivität verantwortlichen Benutzer, die ausgeführte Aktion und den Zeitstempel des Ereignisses enthält.

'''txt
| Benutzer | Aktivität | Zeit |
| ---------------- | --------------------------------- | --------------------- |
| System | Einen neuen Posteingang erstellt (#24725) | 22.06.2023 15:06 Uhr |
| user@cognigy.com | Automatisierungsregel gelöscht (#376) | 22.06.2023 12:48 Uhr |
'''
Im ersten Protokolleintrag legte das System einen neuen Eingang mit der Kennung '#24725' an. Die Aktivität trat am "22. Juni 2023 um 15:06 Uhr" auf.

Im zweiten Protokolleintrag hat der Benutzer mit dem Login "user@cognigy.com" eine Automatisierungsregel mit der Kennung "#376" gelöscht. Die Aktivität ereignete sich am 22. Juni 2023 um 12:48 Uhr.

## Audit-Protokolle anzeigen

Gehen Sie folgendermaßen vor, um Überwachungsprotokolle anzuzeigen:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Wechseln Sie zu **Einstellungen > Überwachungsprotokolle**.

Es wird eine Liste von Protokolleinträgen angezeigt, die Benutzer- und Systemereignisse enthalten.

### Änderungen anzeigen

Bei Aktionen können Sie Details zu allen vorgenommenen Änderungen anzeigen.

Gehen Sie dazu folgendermaßen vor:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Wechseln Sie zu **Einstellungen > Überwachungsprotokolle**.
3. Wählen Sie ein Protokoll aus der Liste aus, indem Sie darauf klicken.

Es öffnet sich ein Fenster, in dem die Details der Änderungen angezeigt werden.

Bei einer Aktualisierungsaktion werden im Abschnitt "Vorher** die ursprünglichen Werte oder die ursprüngliche Konfiguration angezeigt, während im Abschnitt "Nachher" die neuen Werte nach dem Update angezeigt werden.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-audit-logs-update-inbox-changes.png" width="100%" alt="Audit Logs Changes" />
  <figcaption>Änderungen an Überwachungsprotokollen</figcaption>
</figure>