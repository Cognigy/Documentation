---
 Titel: "Konversations-Workflow" 
 Slug: "Konversations-Workflow" 
 ausgeblendet: false 
---
# Konversations-Workflow

Der Kunde initiiert eine Konversation über das Frontend der Website - über das Webchat-Widget.

Beispiel: Ein Kunde gibt "Hallo" ein.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-1.png" width="100%" alt="Cognigy Webchat Widget" />
  <figcaption>Cognigy Webchat-Widget</figcaption>
</figure>

Eine automatisierte Antwort, die im Cognigy.AI Flow festgelegt wurde, wird sofort als Antwort auf dem Bildschirm angezeigt.

Sehen wir uns nun an, wie diese Nachricht im Agenten-Dashboard erfasst wird.

### Unterhaltungen<div class="divider"></div>Rufen Sie den Startbildschirm des Live Agent Agent-Dashboards auf

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-2.png" width="100%" alt="Live Agent Conversations" />
  <figcaption>Gespräche</figcaption>
</figure>

Klicken Sie auf das Symbol für die Sprechblase in der Seitenleiste. Klicken Sie dann auf Alle Konversationen. Gespräche, die Kunden initiiert haben, können hier eingesehen werden.

Klicken Sie nun auf eine bestimmte Konversation. Die Konversation wird mit weiteren Details und Aktionen geöffnet, die im rechten Seitenbereich verfügbar sind.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-3.png" width="100%" alt="Live Agent Conversations Details" />
  <figcaption>Details zu Unterhaltungen</figcaption>
</figure>

#### Alle Konversationen anzeigen: Posteingangseinstellungen

Standardmäßig können Benutzer mit der Rolle "Agent" die Registerkarte "Alle" nicht für alle Unterhaltungen sehen. Es gibt jedoch eine Einstellung, die dies pro Posteingang ermöglicht. Wenn diese Option aktiviert ist, kann der Benutzer alle Unterhaltungen sehen, einschließlich der Unterhaltungen anderer Agenten. Andernfalls wird der Zugriff eingeschränkt.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-13.png" width="100%" alt="Live Agent Conversations Details" />
  <figcaption>Einstellung "Gesamten Posteingang anzeigen"</figcaption>
</figure>

### Bearbeiter zuweisen<div class="divider"></div>Wenn der Posteingang erstellt wurde, ohne dass die Option "Automatisch zuweisen" ausgewählt ist, werden Konversationen nicht automatisch Agenten zugewiesen.

Klicken Sie auf das Dropdown-Feld im Menü "Zugewiesener Agent" und wählen Sie den Namen des Agenten aus. Sie können die hier zugewiesenen Agenten jederzeit ändern.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-4.png" width="100%" alt="Live Agent Assign Agent" />
  <figcaption>Bearbeiter zuweisen</figcaption>
</figure>

### Team zuweisen<div class="divider"></div>Klicken Sie auf das Dropdown-Feld im Menü "Zugewiesenes Team" und wählen Sie das Team aus, zu dem diese Konversation gehört.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-5.png" width="100%" alt="Live Agent Assign Teams" />
  <figcaption>Zuweisen von Teams</figcaption>
</figure>

### Priorität zuweisen<div class="divider"></div>Um einer Konversation in Live Agent eine Priorität zuzuweisen, gehen Sie wie folgt vor:

1. Gehen Sie zu Live Agent.
2. Wählen Sie auf der linken Seite des Bildschirms **Unterhaltungen** aus.
3. Wählen Sie in der Liste **Posteingänge** einen Posteingang aus.
4. Wählen Sie in der Liste **Konversationen** die Konversation aus, der Sie eine Priorität zuweisen möchten.
5. Gehen Sie auf der rechten Seite des Konversationschats zu **Details > Konversationsaktionen**.
6. Klicken Sie im Abschnitt **Priorität** auf **Priorität auswählen**.
7. Scrollen oder tippen Sie, um nach einer Prioritätsstufe zu suchen, und klicken Sie dann auf die gewünschte Stufe. 

Die Priorität wird der Konversation zugewiesen. Das Symbol der übereinstimmenden Prioritätsstufe ist jetzt für die Konversation in der Spalte "Unterhaltungen" sichtbar.

#### Unterhaltungen nach Priorität filtern

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.62-blue.svg)] (.. /.. /release-notes/4.62.md)

Um Unterhaltungen nach Priorität zu filtern, gehen Sie wie folgt vor:

1. Gehen Sie zu Live Agent.
2. Wählen Sie auf der linken Seite des Bildschirms **Unterhaltungen** aus.
3. Wählen Sie in der Liste **Posteingänge** einen Posteingang aus.
4. Klicken Sie oben in der Liste **Konversationen** neben dem Namen des Posteingangs auf ! [filtern] (.. /.. /assets/icons/filter.svg).
5. Wählen Sie im Fenster **Unterhaltungen filtern** die folgenden Optionen aus:<br>5.1 Wählen Sie in der Liste **Filter** die Option **Priorität** aus.<br>5.2 Wählen Sie in der Liste **Operator** als Filterbedingung **Gleich** oder **Ungleich** aus. Diese Operatoren geben an, ob Sie Unterhaltungen filtern möchten, die der angegebenen Prioritätsstufe entsprechen oder nicht.<br>5.3 Wählen Sie in der Liste **Auswählen** eine Prioritätsstufe aus, indem Sie entweder darauf klicken oder den Mauszeiger darüber bewegen und dann ++Eingabe++ drücken. Sie können mehrere Prioritäten aus der Liste auswählen.<br> 6. Klicken Sie auf **Filter anwenden**, um die Filtereinstellungen zu aktivieren.

Die gefilterten Konversationen, die den aktivierten Prioritätsfiltereinstellungen entsprechen, werden in der Liste der Konversationen angezeigt.

### Beschriftungen zuweisen<div class="divider"></div>Um einer Konversation in Live Agent ein Label zuzuweisen, gehen Sie wie folgt vor:

1. Gehen Sie zu Live Agent.
2. Wählen Sie auf der linken Seite des Bildschirms **Unterhaltungen** aus.
3. Wählen Sie in der Liste **Posteingänge** einen Posteingang aus.
4. Wählen Sie in der Liste **Unterhaltungen** die Konversation aus, in der Sie ein Label hinzufügen möchten.
5. Gehen Sie auf der rechten Seite des Konversationschats zu **Details > Konversationsaktionen**.
6. Klicken Sie im Abschnitt **Konversationslabels** auf **Labels hinzufügen**.
7. Scrollen oder tippen Sie, um nach einer Beschriftung zu suchen, und klicken Sie dann auf eine Beschriftung. Sie können mehrere Beschriftungen gleichzeitig hinzufügen. 

Die Bezeichnung wird der Konversation hinzugefügt.

### Antwort senden<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.59-blue.svg)] (.. /.. /release-notes/4.59.md)

Um einem Benutzer im Unterhaltungschat zu antworten, geben Sie Ihre Nachricht in den Abschnitt **Antworten** ein.

Für eine schnelle Antwort können Sie vorgefertigte Antworten, Variablen oder eine Kombination aus beidem verwenden.

Standardmäßig können Sie Nachrichten senden, indem Sie ++cmd+enter++ oder ++ctrl+enter++ drücken, anstatt auf die Schaltfläche **Senden** zu klicken.
Die Taste ++enter++ wird für Zeilenumbrüche verwendet. Wenn Sie die Hotkey-Optionen ändern möchten, gehen Sie zu [Profileinstellungen](.. /profile-settings.md).

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/images/send-response.png" width="80%" alt="Live Agent Conversations Reply" />
  <figcaption>Auf eine Nachricht antworten</figcaption>
</figure>

### Schnelle Antworten senden

Für eine schnelle Antwort auf einen Benutzer im Konversations-Chat können Sie vorgefertigte Antworten, Variablen oder eine Kombination aus beidem verwenden.

#### Antwort mit Variablen senden

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.55-blue.svg)] (.. /.. /release-notes/4.55.md)

Live Agent bietet eine begrenzte Liste von Variablen für Benutzerkontaktprofildaten oder menschliche Agentenprofildaten, die Sie im Abschnitt **Antworten** wiederverwenden können. 

Gehen Sie folgendermaßen vor, um eine Variable einzuschließen:

1. Beginnen Sie mit der Eingabe <code>&lcub;&lcub;</code> in das Feld. Danach erscheint eine Liste der verfügbaren Variablen, in der Sie die gewünschte Variable auswählen können. 
2. Wählen Sie eine Variable mit einer der folgenden Methoden aus:
    - Klicken Sie auf die gewünschte Variable.
    - Verwenden Sie die Pfeiltasten auf der Tastatur, um zur Variablen zu navigieren, und drücken Sie dann die Eingabetaste.<br>Alternativ können Sie Variablen eingeben, anstatt sie aus den Vorschlägen auszuwählen.

Die Variable wird durch einen Wert ersetzt, der für die aktuelle Konversation relevant ist.
Zum Beispiel <code>&lcub;&lcub;contact.first_name&rcub;&rcub;</code> → 'David',
<code>&lcub;&lcub;conversation.id&rcub;&rcub;</code> → '3705'. Wenn eine der Variablen keine Werte hat, erhalten Sie eine entsprechende Warnung.

Beachten Sie, dass Sie keine benutzerdefinierte Variable erstellen können.

Es gibt eine Liste der verfügbaren Variablen:

| Variabel | Beschreibung |
|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| 'conversation.id' | Die ID der aktuellen Konversation.                                                                                                                |
| "contact.id" | Die ID eines Benutzers, der eine Konversation erstellt.                                                                                             |
| "contact.id" | Die Benutzer-ID, die zu einem Benutzer gehört, der eine Konversation erstellt.                                                                                        |
| "contact.name" | Vor- und Nachname des Benutzers. Wenn nicht beides im Profil angegeben ist, wird der Standardwert 'customer' verwendet.                              |
| "contact.first_name" | Der Vorname des Benutzers. Wenn er nicht im Profil angegeben ist, wird der Nachname verwendet. Andernfalls wird der Standardwert 'customer' angewendet. |
| "contact.last_name" | Der Nachname des Benutzers. Wenn er nicht im Profil angegeben ist, wird der Vorname verwendet. Andernfalls wird der Standardwert 'customer' angewendet. |
| "contact.email" | Die E-Mail-Adresse des Benutzers.                                                                                                                          |
| 'contact.age' | Das Alter des Benutzers.                                                                                                                                    |
| 'contact.gender' | Das Geschlecht des Benutzers.                                                                                                                                 |
| 'Kontakt.Geburtstag' | Das Geburtsdatum des Benutzers.                                                                                                                          |
| 'contact.location' | Der aktuelle Standort des Benutzers.                                                                                                                       |
| "contact.accepted_gdpr" | Die Zustimmung des Nutzers zur Datenschutz-Grundverordnung (DSGVO).                                                                     |
| "agent.name" | Der Vor- und Nachname des menschlichen Agenten.                                                                                                       |
| "agent.first_name" | Der Vorname des menschlichen Agenten. Wenn er nicht im Profil angegeben ist, wird der Nachname verwendet.                                                   |
| "agent.last_name" | Der Nachname des menschlichen Agenten. Wenn er nicht im Profil angegeben ist, wird der Vorname verwendet.                                                   |

Dieselben Variablen können innerhalb einer einzigen Antwort mehrfach verwendet werden.

Beispiel:

<code>
Hi &lcub;&lcub;contact.first_name&rcub;&rcub;,
Thank you for your recent message. We appreciate your inquiry.
Your conversation with the ID &lcub;&lcub;conversation.id&rcub;&rcub; has been received.
Our team will review it and provide a response as soon as possible.
&lcub;&lcub;contact.first_name&rcub;&rcub;, please let us know if you have any additional questions or need further assistance.
</code>

#### Senden Sie eine vorgefertigte Antwort

Um eine [vorgefertigte Antwort](.. /settings/canned-responses.md) als Antwort an den Benutzer verwenden, gehen Sie folgendermaßen vor:

1. Geben Sie in den Abschnitten **Dem Benutzer antworten** oder **Dem Bot antworten** "/" ein. Eine Liste der verfügbaren vorgefertigten Antworten wird angezeigt. 
2. Wählen Sie die gewünschte vorgefertigte Antwort aus der Liste aus.

Die ausgewählte vorgefertigte Antwort wird in Ihre Antwort eingefügt, sodass Sie ganz einfach vorgefertigte Nachrichten in Ihre Konversation einfügen können.

<figure>
<img class="image-center" src="{{config.site_url}}live-agent/images/LA-conversation-workflow-14.png" width="80%" alt="Live Agent Canned Responses" />
  <figcaption>Vorgefertigte Antwort senden</figcaption>
</figure>

#### Senden einer vorgefertigten Antwort mit Variablen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.55-blue.svg)] (.. /.. /release-notes/4.55.md)

Sie können einen Text mit [Variablen](#send-eine-Antwort-mit-Variablen) für [vorgefertigte Antworten](.. /settings/canned-responses.md).

Eine vorgefertigte Antwort mit Variablen wird auf die gleiche Weise wie eine [einfache vorgefertigte Antwort](#send-a-response) aufgerufen.
mit dem Symbol '/'.
Wenn Sie die vorgefertigte Antwort auswählen,
Variablen in der Antwort werden durch Werte ersetzt, die für die aktuelle Konversation relevant sind.
Wenn eine der Variablen keine Werte hat, erhalten Sie eine entsprechende Warnung.

### Konversations-Aktionen

[! [Versions-Abzeichen] (https://img.shields.io/badge/updated in-v4.45-blue.svg)] (.. /.. /release-notes/4.45.md)

Nachfolgend finden Sie eine Liste mit Konversationsaktionen, die ein Agent ausführen kann, indem er auf die folgenden Symbole klickt.

| Schaltfläche | Beschreibung |
|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-9.png" width="50%" alt="" />  | Diese Schaltfläche ermöglicht es einem menschlichen Agenten, ein Emoji auszuwählen und in die Nachricht einzufügen.     |
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-10.png" width="50%" alt="" /> | Diese Schaltfläche ermöglicht es einem menschlichen Agenten, Anhänge auszuwählen und in die Nachricht aufzunehmen. |
| <img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-11.png" width="50%" alt="" /> | Diese Schaltfläche ermöglicht es einem menschlichen Agenten, eine Datei vom Kunden anzufordern.               |
| <img src="{{config.site_url}}live-agent/images/audio-icon.png" width="50%" alt="" />                  | Diese Schaltfläche ermöglicht es einem menschlichen Agenten, Sprachnachrichten an den Kunden zu senden.            |
| <img src="{{config.site_url}}live-agent/images/link-icon.png" width="50%" alt="" />                   | Diese Schaltfläche ermöglicht es einem menschlichen Agenten, Hyperlink-Text an den Kunden zu senden.          |

### LA AI Copilot<div class="divider"></div>Wenn LA AI Copilot aktiviert ist, 
Agenten erhalten (basierend auf Kundeneingaben) KI-gestützte Copilot-Ausgaben als Teil des Gesprächs, die dazu beitragen können, einem Kunden besser zu antworten.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview.png" width="75%" />
    </figure>

Wenn die Weiterleitung für AI Copilot-Nachrichten aktiviert wurde, kann der Agent auf den blauen Pfeil klicken, um Inhalte an den Endbenutzer oder Kunden weiterzuleiten.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview-forward.png" width="75%" />
    </figure>

### Datei-Upload anfordern

Standardmäßig können menschliche Agenten keine Dateien von Benutzern anfordern. Um diese Funktion zu aktivieren, müssen Sie das Plugin [Datei-Upload](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins/file-upload) im [Webchat-Endpunkt](.. /.. /ai/endpoints/webchat/deploy-webchat-endpoint.md#persistent-menu).

Anforderungen an die Datei:

- Unterstützte Dateitypen sind jpeg, jpg, png, docx, wav, ogg, pdf.
- Die maximale Dateigröße beträgt 40 MB.

Gehen Sie folgendermaßen vor, um eine Datei anzufordern:

1. Klicken Sie auf das Symbol **Datei anfordern** am unteren Rand des Live Agent-Antwortfelds. 

<figure><img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-24.png" width="100%" alt="Live Agent request file upload" /><figcaption>Datei-Upload anfordern</figcaption>
    
      
    </figure>

2. Bestätigen Sie, dass Sie die Datei an den Kunden senden möchten, um den Datei-Upload zu aktivieren.

<figure><img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-25.png" width="100%" alt="Live Agent request file upload confirm" /><figcaption>Datei-Upload anfordern bestätigen</figcaption>
    
      
    </figure>

Im Chat sollte eine Nachricht angezeigt werden, die darauf hinweist, dass die Datei angefordert wurde.

<figure><img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-26.png" width="100%" alt="Live Agent request file upload message" /><figcaption>Nachricht zum Hochladen von Dateien anfordern</figcaption>

  
</figure>

Jetzt sollte der Kunde eine Schaltfläche sehen, um einen Datei-Upload-Dialog zu öffnen.

<figure><img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-27.png" width="100%" alt="Live Agent request file upload webchat" /><figcaption>Datei-Upload anfordern Webchat</figcaption>

  
</figure>

Nach dem Hochladen der Datei sollte sie im Webchat und im Live Agent angezeigt werden und die Datei sollte auf der Live Agent-Seite zum Download bereit sein.

<figure><img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-28.png" width="100%" alt="Live Agent request file upload webchat completed" /><figcaption>Datei-Upload im Webchat angefordert</figcaption>

  
</figure> abgeschlossen <figure><figcaption>Datei-Upload in Live Agent abgeschlossen</figcaption><img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-29.png" width="100%" alt="Live Agent request file upload completed" />

  
</figure>

### Privater Chat mit Agenten<div class="divider"></div>Es besteht die Möglichkeit, das Gespräch des Kunden mit einem anderen Agenten zu besprechen, falls Sie weitere Erläuterungen oder Unterstützung benötigen. Diese Option ist neben der Registerkarte "Antworten" mit der Bezeichnung "Private Notiz" verfügbar.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-15.png" width="100%" alt="Live Agent Private Chat" />
  <figcaption>Privater Chat mit Agenten</figcaption>
</figure>

Geben Sie "@" in das Fenster "Private Notiz" ein, und alle Agenten, die zu diesem Team hinzugefügt wurden, werden aufgelistet. Wählen Sie einen Agenten aus und geben Sie eine Nachricht ein, um sich mit dem ausgewählten Agenten zu beraten.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-16.png" width="100%" alt="Live Agent Private Chat 2" />
  <figcaption>Privater Chat mit Agent -2</figcaption>
</figure>

Klicken Sie auf Notiz hinzufügen, um die Nachricht zu senden. Sie können ein Sperrzeichen auf der gesendeten Nachricht sehen. Diese Meldung ist für den Kunden nicht sichtbar.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-17.png" width="100%" alt="Live Agent Private Message" />
  <figcaption>Private Nachricht mit Agent</figcaption>
</figure>

Der zweite Agent, der in der privaten Notiz angesprochen wird, erhält eine Benachrichtigung in seinem Konto.

Antworten, die vom zweiten Agenten gesendet werden, werden im Fenster "Private Notiz" angezeigt.

#### Private Notiz löschen<div class="divider"></div>Es besteht die Möglichkeit, die private Notiz, die Sie bereits gesendet haben, zu löschen. Klicken Sie auf die 3 Punkte (...) neben der gesendeten Nachricht.
Es steht eine Option zum Kopieren oder Löschen der privaten Notiz zur Verfügung.
Klicken Sie auf Löschen. Die private Notiz wird gelöscht.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-18.png" width="100%" alt="Live Agent Delete Message" />
  <figcaption>Nachricht löschen</figcaption>
</figure>

### E-Mails versenden<div class="divider"></div>Um eine Kopie der aktuellen Konversation zu senden, klicken Sie auf die Schaltfläche "Transkript senden" in der oberen rechten Ecke.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-20.png" width="100%" alt="Live Agent Contact Details Menu" />
  <figcaption>Schaltfläche "Transkript senden"</figcaption>
</figure>

Es öffnet sich ein Bildschirm, über den eine E-Mail an Agenten im Team gesendet werden kann. Das Chat-Protokoll kann auch an den Kunden oder eine andere ausgewählte E-Mail-Adresse gesendet werden.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-21.png" width="100%" alt="Live Agent Conversation Transcript Dialog" />
  <figcaption>Dialogfeld "Gesprächsprotokoll"</figcaption>
</figure>

Wählen Sie die gewünschte Option aus und klicken Sie auf Senden. Es wird die Meldung "Das Chatprotokoll wurde erfolgreich gesendet" angezeigt. Der ausgewählte Empfänger erhält das Chat-Transkript in seinem E-Mail-Posteingang.

### Agenten übertragen<div class="divider"></div>Sie können ein Problem/eine Konversation an einen anderen Agenten weiterleiten, indem Sie im Menü "Zugewiesener Agent" einen anderen Agenten auswählen. Die gesamte Konversation ist für den neu ausgewählten Agenten sichtbar.

### Erinnerungen und Status festlegen<div class="divider"></div>Der Status kann in "Gelöst" geändert werden, sobald dem Kunden eine Lösung zur Verfügung gestellt wurde.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-22.png" width="100%" alt="Live Agent Conversations Status" />
  <figcaption>Konversationen-Status</figcaption>
</figure>

Die verfügbaren Konversationsstatus sind unten aufgeführt. Sobald eine Konversation als gelöst markiert wurde, kann ihr Status nicht mehr in "Offen" oder "Ausstehend" geändert werden.

| Optionen | Aktionen |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Als ausstehend markieren | Ändern Sie das Problem in den Status "Ausstehend" |
| Auflösen | Ändern Sie das Problem in den Status "Gelöst" |
| Abbrechen und Auflösen | Ändern Sie das Problem in den Status "Gelöst", und fügen Sie das abfragbare Abbruchattribut |
| Öffnen | Ändern Sie das ausstehende Problem in den Status "Offen" |
| Snooze bis zur nächsten Antwort | Das Problem wird vorerst beiseite gelegt, und der Status ändert sich bei der nächsten Antwort des Kunden |
| Schlummern bis morgen | Das Problem wird vorerst beiseite gelegt, und der Status ändert sich am nächsten Tag in Offen |
| Snooze bis nächste Woche | Das Problem wird vorerst beiseite gelegt, und der Status wird nächste Woche in Offen |

Unterhaltungen können im Bereich "Unterhaltung" ausgewählt und nach ihrem Status gefiltert werden, wie unten zu sehen ist.

<figure>
<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-23.png" width="100%" alt="Live Agent Conversations Selections" />
  <figcaption>Wählen Sie Konversation aus</figcaption>
</figure>

### Vorherige Unterhaltungen<div class="divider"></div>Sobald eine Konversation als gelöst markiert wurde, wird das nächste Mal, wenn derselbe Kunde eine neue Konversation startet, die vorherige Konversation, die mit diesem Kunden verknüpft ist, im Menü "Vorherige Konversationen" angezeigt. Dies hilft dem Agenten, die Historie des Kundenproblems zu verstehen.<img src="{{config.site_url}}live-agent/images/LA-conversation-workflow-12.png" width="50%" alt="Live Agent Previous Conversations" />
