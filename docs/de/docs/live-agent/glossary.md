---
Titel: "Glossar"
Schnecke: "Glossar"
description: "Das Live Agent-Glossar bietet eine Referenz für Benutzer, Agenten und alle, die an der Bedienung oder dem Verständnis von Live Agent-Software und -Praktiken beteiligt sind."
ausgeblendet: false
---

# Live-Agenten-Glossar

Live Agent-Begriffe in alphabetischer Reihenfolge aufgeführt. Alle Begriffe im Glossar dienen der Information.

## Ein

_**Abgebrochen (Gespräche)**_
: Der Status, der angibt, dass eine Konversation geschlossen ist, weil der Benutzer die Konversation verlassen hat. Es kann im Abschnitt Kontoeinstellungen konfiguriert werden.

_**Konto**_
: Eine separate Live Agent-Instanz, die die gesamte Organisation oder das gesamte Unternehmen repräsentiert. In diesem Zusammenhang werden alle Ressourcen, Daten und Benutzer, die sich auf die Organisation beziehen, zentral auf Organisationsebene verwaltet. In anderen alternativen Live Agent-Systemen kann diese Entität auch als Mandant bezeichnet werden.

_**Kontoeinstellungen**_
: Sie können die allgemeinen Einstellungen für ein Konto ändern, z. B. Name und Sprache. Den Zugang finden Sie über die dasboard-Seitenleiste von Live Agent. Weitere Informationen finden Sie in der Dokumentation [Kontoeinstellungen](settings/account-settings.md).

_**Agenten**_
: Mitglieder Ihres Kundensupport-Teams. Agenten können Nachrichten von Ihren Benutzern anzeigen und beantworten. In der Live Agent-Seitenleiste können Sie auf Einstellungen > Agenten klicken, um sie zu konfigurieren. Zur Unterscheidung zwischen virtuellen und menschlichen Agenten in der Live Agent-Dokumentation verwenden wir in erster Linie den Begriff [Human Agent](#h), um Mitglieder des Support-Teams zu bezeichnen. Weitere Informationen finden Sie in der Dokumentation [Agent](settings/agents.md).

_**Agenten-Warteschlange**_
: Eine Liste von Konversationen, die auf die Aufmerksamkeit von Agenten warten. In Live Agent ähnelt eine Warteschlange dem Wartebereich, in dem Gespräche geführt werden, bis der Agent die erste Antwort nicht gesendet hat. Die Warteschlange ist für Agenten auf der Registerkarte "Mine" der Seite "Konversation" sichtbar, wo sie die ihnen zugewiesenen Konversationen sehen und auf ihre Aufmerksamkeit warten können. Weitere Informationen finden Sie in der Dokumentation [Agentenwarteschlange](conversation/conversation-queue.md).

_**Agentenstatus**_
: Agentenstatus helfen dabei, die Verfügbarkeit und Arbeitsbelastung menschlicher Agenten zu verwalten, einen konsistenten und effizienten Kundenservice zu gewährleisten und Transparenz über die Verfügbarkeit des Agenten für die Bearbeitung von Chat-Anfragen zu schaffen. Weitere Informationen finden Sie in der Dokumentation [Agentenstatus](settings/agents.md).

_**API-Zugriffstoken**_
: Eine Datenstruktur, die Authentifizierungs- und Autorisierungsinformationen für die Verwendung einer Anwendung enthält. Es kann verwendet werden, wenn Sie eine API-basierte Integration erstellen und ihre Aktionen durch die Benutzerrolle eingeschränkt sind. Weitere Informationen finden Sie in der Dokumentation [Profileinstellungen](profile-settings.md).

_**Zugewiesen (Konversationen)**_
: Jede Konversation in Live Agent kann einen Beauftragten haben. Ein Beauftragter kann manuell über die Benutzeroberfläche, die API oder automatisch über ein verfügbares Round-Robin-Zuweisungssystem zur Konversation hinzugefügt werden.
Weitere Informationen finden Sie in der Dokumentation [Konversations-Routing](Konversation/Konversations-Routing/Übersicht.md).

_**Assistent des Bots**_
: Ein Tool, um die Agenten bei der Kommunikation mit den Kunden zu unterstützen. Es besteht aus einem dedizierten Flow, der dem Agenten Informationen zur Verfügung stellt. Daher muss es als separater Flow in Cognigy.AI konfiguriert werden.
Weitere Informationen finden Sie in der Dokumentation [Assist Bot](assistants/assist-bot.md).

_**Anhängsel**_
: In einer laufenden Konversation in Live Agent können sowohl der Benutzer als auch der Agent Dateien (Bilder, Videos, Dokumente, Formulare) senden. Auf diese Weise können die Dateien direkt während eines Gesprächs geteilt werden. Alle Anhänge, die in den Account-Konversationen enthalten sind, sind im Menü "Einstellungen" verfügbar.
Weitere Informationen finden Sie in der Dokumentation [Anhänge](Einstellungen/Anhänge.md).

_**Überwachungsprotokolle**_
: Ein Tool zur Aufrechterhaltung der Transparenz und Rechenschaftspflicht innerhalb Ihrer Live Agent-Ressourcen. In diesen Protokollen werden wichtige Benutzeraktivitäten, Systemereignisse und Konfigurationsänderungen aufgezeichnet und Details zu Sicherheits- und Überwachungszwecken bereitgestellt. Mit Audit-Protokollen können Sie Fragen wie "Wer hat was, wo und wann gemacht?" in Ihrer Live Agent-Umgebung beantworten. Die Protokolle enthalten Ereignisse wie Erstellen, Aktualisieren und Löschen für Posteingänge und Automatisierungsregeln. Nur Benutzer mit der Rolle "Administrator" können auf diese Protokolle zugreifen.
Weitere Informationen finden Sie in der Dokumentation [Audit-Protokolle](settings/audit-logs.md).

_**Automatisierung (Regeln)**_
: Automatisierungsregeln können bestehende Prozesse, die manuellen Aufwand erfordern, ersetzen und automatisieren. Mit der Automatisierung können Sie viele Dinge tun, einschließlich des Hinzufügens von Labels und der Zuweisung von Konversationen an den besten Agenten. So konzentriert sich das Team auf das, was es am besten kann, und verbringt weniger Zeit mit manuellen Aufgaben.
Weitere Informationen finden Sie in der Dokumentation [Automation](settings/automation-rules.md).

_**Abwesend (Agenten)**_
: Einer von vier möglichen Live Agent-Status.
Dieser Status zeigt an, dass der Agent vorübergehend nicht verfügbar ist oder das Chat-System nicht aktiv überwacht. Agenten in diesem Status können keine Kundengespräche führen.
Weitere Informationen finden Sie in der Dokumentation [Agentenstatus](settings/agents.md).

## B

_**Beschäftigt (Agenten)**_
: Einer von vier möglichen Live Agent-Status.
Dieser Status zeigt an, dass der Agent derzeit produktiven Aktivitäten nachgeht oder einen Kunden aktiv unterstützt. Agenten mit dem Status "Beschäftigt" verschieben vorübergehend neue Kundeninteraktionen.
Weitere Informationen finden Sie in der Dokumentation [Agentenstatus](settings/agents.md).

## C

_**Vorgefertigte Antworten**_
: Vorgespeicherte Antwortvorlagen ermöglichen es menschlichen Agenten, schnell auf eine Konversation zu reagieren.
Vorgefertigte Antwortvorlagen bieten Unterstützung für die HTML-Formatierung.
Um eine vorgefertigte Antwort zu erstellen, klicken Sie einfach auf die Option Vorgefertigte Antwort hinzufügen.
Vorgefertigte Antworten werden mit Hilfe von Kurzwahlnummern verwendet. Agenten können während eines Chats auf vorgefertigte Antworten zugreifen, indem sie "/" gefolgt von der Kurzwahlnummer eingeben.
Weitere Informationen finden Sie in der Dokumentation [Vorgefertigte Antworten](settings/canned-responses.md).

_**Cognigy Live Agent OAuth**_
: Sie können sich mit Ihrem Cognigy.AI-Konto bei Live Agent anmelden, indem Sie das OAuth2-Protokoll verwenden. Um dies zu konfigurieren, befolgen Sie die Anweisungen im Abschnitt Helm-Werte.
Weitere Informationen finden Sie in der Dokumentation [Live Agent OAuth](installation/deployment/cognigy-live-agent-oauth.md).

_**Gespräch**_
: Ihre Chats mit verschiedenen Kunden werden in Live Agent als Konversationen bezeichnet.
Dazu gehören alle Sitzungsnachrichten, einschließlich der Antworten von Kunden, Bots oder menschlichen Agenten.
Eine Konversation ist der Kommunikationskanal, der zwischen einem Agenten und einem Kunden geöffnet wird.
Weitere Informationen finden Sie in der Dokumentation [OData Analytics Endpoint](tools/odata-endpoint.md#conversation) und [Conversation workflow](conversation/conversation-workflow.md).

_**Konversations-Routing**_
: Der Prozess, bei dem Kunden- oder Benutzeranfragen an den richtigen Agenten oder das richtige Team weitergeleitet werden. Es gleicht Anfragen mit den Fähigkeiten, Sprachen und der Arbeitsbelastung der Agenten ab und sorgt für eine effiziente Problemlösung. Wie Sie einer Konversation einen Agenten zuweisen können, wird in der Dokumentation [Konversationsweiterleitung](Konversation/Konversationsweiterleitung/overview.md) beschrieben.

_**Konversationsstatus**_
: Die Kommunikation zwischen Kunde und Bediener in Live Agent kann unterschiedliche Status erhalten:
Nicht zugewiesen, zugewiesen, ausstehend, schlummernd, offen, aufgelöst und aufgegeben.

_**Konversations-Workflow**_
: Eine strukturierte Abfolge von Schritten, die ein Gespräch von der Einleitung bis zum Abschluss leiten. Es beschreibt, wie Interaktionen ablaufen, oft einschließlich Begrüßung, Informationsbeschaffung, Antworten, Problemlösung und Abschluss. Weitere Informationen finden Sie in der Dokumentation [Konversations-Workflow](conversation/conversation-workflow.md).

## H

_**Menschliche Agenten**_
: Menschliche Mitglieder Ihres Kundensupport-Teams. Sie können Nachrichten von Ihren Benutzern direkt anzeigen und beantworten oder z. B. wenn ein virtueller Agent gebeten wird, eine Kundenanfrage an ein menschliches Supportmitglied weiterzuleiten.

## Ich

_**Posteingänge**_
: Arbeitsbereiche, in denen menschliche Agenten Chat-Interaktionen mit Kunden in Echtzeit abwickeln und damit verbundene Aufgaben verwalten Sie können eine unbegrenzte Anzahl von Posteingängen in Ihrem Live-Agenten-Konto haben und Sie können Konversationen anzeigen, die für einen Posteingang spezifisch sind, indem Sie darauf klicken. Außerdem gibt es einige Einstellungen, die Sie in bereits vorhandenen Posteingängen ändern können. Weitere Informationen finden Sie in der Dokumentation [Posteingänge](settings/inboxes.md).

_**Posteingangs-ID**_
: Eine eindeutige Kennung, die die Verbindung zwischen Cognigy.AI und Live Agent darstellt. Es wird verwendet, um die Integration zwischen diesen beiden Systemen zu verknüpfen und zu verwalten, um eine nahtlose Kommunikation und einen nahtlosen Datenaustausch zu ermöglichen.

## L

_**LA Copilot**_
: LA Copilot ermöglicht es menschlichen Agenten, die Cognigy Live Agent verwenden, bei der Konversation mit dem Kunden von KI-gestützten virtuellen Agenten unterstützt zu werden. Mit dieser Funktionalität können dem menschlichen Agenten während einer aktiven Übergabe vollständig konfigurierbare virtuelle Agentennachrichten auf der Grundlage von Kundennachrichten angezeigt werden, um den Kunden bestmöglich zu unterstützen. Weitere Informationen finden Sie in der Dokumentation [LA Copilot](assistants/overview.md).

_**Etiketten**_
: Tags, die Ihnen helfen, Konversationen zu kategorisieren und zu priorisieren, und die zusätzlichen Kontext und Informationen über den Inhalt oder Status jeder Konversation bereitstellen. Weitere Informationen finden Sie in der Dokumentation [Labels](settings/labels.md). Weitere Informationen finden Sie in der Dokumentation [Labels](settings/labels.md).

_**Live-Agent**_
: Cognigy-Produkt, das dialogorientierte KI und menschliche Agenten kombiniert, um das Kundenerlebnis zu verbessern und die Produktivität des Support-Teams zu steigern. Es ermöglicht einen reibungslosen Übergang zwischen der Konversation zwischen dem Kunden und dem virtuellen Agenten und dem menschlichen Support, was die effektive Bearbeitung von Kundenanfragen erleichtert. Weitere Informationen finden Sie in der Dokumentation [Live Agent](overview.md).

_**Live Agent-Einstellungen**_
: Die Einstellungen von Cognigy Live Agent bieten viele Funktionen, wie z. B. Team- und Posteingangsverwaltung, Automatisierungsregeln, vorgefertigte Antworten, Anhänge, Audit-Protokolle und Kontoeinstellungen. Diese Funktionen können die Kundeninteraktionen erheblich verbessern und die Effizienz des Supports steigern. Beachten Sie, dass diese Einstellungen alle Profileinstellungen überschreiben. Weitere Informationen finden Sie in der Dokumentation [Live Agent-Einstellungen](settings/overview.md).

## M

_**Erwähnungen**_
: Sie haben die Möglichkeit, ein Teammitglied in privaten Notizen zu markieren, um seine Aufmerksamkeit auf ein bestimmtes Diskussionsthema zu lenken. Darüber hinaus können Sie über die Ansicht "Erwähnungen" auf Unterhaltungen zugreifen, in denen Sie ausdrücklich erwähnt werden.

## N

_**Benachrichtigungen**_
: Nachrichten oder Warnungen, die generiert werden, um menschliche Agenten über neue Ereignisse, Aktivitäten oder Interaktionen innerhalb eines Konversations-Chat-Systems in Live Agent zu informieren. Weitere Informationen finden Sie in der Dokumentation [Benachrichtigungen](notifications.md).

## O

_**OData Analytics-Endpunkt**_
: Live Agent macht einen OData v4-Analyseendpunkt zum Abrufen von Analysedatensätzen verfügbar. OData, der beste Weg zu REST, ist ein leistungsstarkes API-Framework. Mit den OData-Endpunkten können Sie die relevantesten Datenmodelle mithilfe von GET-Anforderungen aus Live Agent abrufen. Es deckt alle Ihre Anforderungen an Unternehmensanalysen ab, um fein abgestufte Abfragen in Ihren Tabellenkalkulationen durchzuführen oder umfangreiche Dashboards für Ihre Bots mit Ihrem bevorzugten Datenvisualisierungstool zu erstellen. Beachten Sie, dass der Live Agent OData-Endpunkt nur GET-Anforderungen unterstützt und keine anderen Anforderungstypen wie "PATCH", "DELETE" oder "POST". Weitere Informationen finden Sie in der Dokumentation [OData-Endpunkt](tools/odata-endpoint.md).

_**Offline (Agenten)**_
: Einer von vier möglichen Live Agent-Status. Dieser Status zeigt an, dass der Agent derzeit nicht beim Live Agent-System angemeldet ist. Agenten in diesem Status können keine Kundeninteraktionen verarbeiten. Weitere Informationen finden Sie in der Dokumentation [Agentenstatus](settings/agents.md).

_**Online (Agenten)**_
: Einer von vier möglichen Live Agent-Status. Dieser Status zeigt an, dass der Agent verfügbar ist und Kundeninteraktionen aktiv bearbeitet. Weitere Informationen finden Sie in der Dokumentation [Agentenstatus](settings/agents.md).

_**Offene (Unterhaltungen)**_
: Dieser Konversationsstatus zeigt an, dass eine Konversation für eine Übergabe an einen Agenten vorbereitet ist.

## P

_**Ausstehend (Gespräche)**_
: Dieser Status spiegelt die Anzahl der Konversationen wider, die vorübergehend angehalten wurden und auf eine Antwort des Kunden oder eines menschlichen Agenten warteten.

_**Profil-Einstellungen**_
: Eine Gruppe von Einstellungen, die von einem Endbenutzer definiert wurden und für die Konfiguration in Live Agent wichtig sind. Grundlegende Benutzerprofileinstellungen können geändert oder aktualisiert werden. Weitere Informationen finden Sie in der Dokumentation [Profileinstellungen](profile-settings.md).

## R

_**Berichte**_
: Die Konversationsberichte, die im Laufe der Zeit stattgefunden haben. Sie können im Abschnitt "Berichte" eingesehen werden. Klicken Sie in der Seitenleiste des Live Agent-Dashboards auf Berichte, um eine Übersicht anzuzeigen. Ein Diagramm zeigt die Konversationen an, die während der ausgewählten Tage stattgefunden haben. Weitere Informationen finden Sie in der Dokumentation [Berichte](reports/overview.md).

_**Gelöst (Gespräche)**_
: Dieser Konversationsstatus bedeutet, dass eine Konversation geschlossen ist, weil das Problem des Benutzers behoben wurde.

_**Rollen**_
: Eine Methode zum Erteilen von Berechtigungen für den Datenzugriff an bestimmte Benutzer. Diese Berechtigungen basieren auf einem Benutzerrollenprofil. In Live Agent können Benutzer drei verschiedene Einzelrollen haben: "Agenten", "Supervisoren" und "Administratoren". Sie können einem Agenten auch mehr als eine Rolle zuweisen. Weitere Informationen finden Sie in der Dokumentation [Rollen](roles.md).

## S

_**Fähigkeiten**_
: Spezifische Fähigkeiten, die Agenten besitzen, wie z. B. Sprachkenntnisse oder Fachwissen in einem bestimmten Bereich. Sie können Skills über das Agenten-Dashboard von Live Agent hinzufügen.

_**Snoozed (Gespräche)**_
: Dieser Konversationsstatus wird angewendet, wenn Sie auf einen bestimmten Zeitraum warten müssen oder eine Antwort des Kunden benötigen, um die Konversation fortzusetzen. In einem Konversations-Workflow zeigt dies an, dass das Problem vorerst beiseite gelegt wird und sich der Status in "Offen" ändert, wenn ein Zeitauslöser oder ein Kundenreaktionsauslöser aktiviert wurde.

## T

_**Mannschaften**_
: Gruppen, die auf den Verantwortlichkeiten menschlicher Agenten basieren. Ein Benutzer kann Teil mehrerer Teams sein. Sie können Unterhaltungen einem Team zuweisen, wenn Sie zusammenarbeiten. Weitere Informationen finden Sie in der Dokumentation [Teams](settings/teams.md).

## U

_**Nicht zugewiesen (Unterhaltungen)**_
: Dieser Konversationsstatus wird angewendet, wenn eine Konversation noch keinem menschlichen Agenten zugewiesen wurde.