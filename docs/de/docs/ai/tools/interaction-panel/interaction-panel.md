---
Titel: "Interaktions-Panel" 
Slug: "Interaktions-Panel" 
ausgeblendet: false 
---

# Interaktions-Panel

Das Interaktionsfenster kann verwendet werden, um mit Ihrem virtuellen Agenten zu interagieren. Sie können darauf zugreifen, indem Sie auf die Chat-Schaltfläche oben rechts in der Benutzeroberfläche klicken, wenn Sie sich in einem Agenten befinden. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/8f8cdab-interaction.jpg" width="100%" />
</figure>

## Testen<div class="divider"></div>!!! Anmerkung
    Die Registerkarte **Chat** wurde ab Version 4.25.0 in **Test** umbenannt.

### Kanalspezifischer Ausgang

Das Interaction Panel zeigt eine Vorschau der kanalspezifischen Ausgabe an, falls dies in Ausgabeknoten wie dem Say-Node konfiguriert wurde.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-channel-selection.png" width="100%" />
</figure>

!!! tip "Tipp: Nur ausgewählte Ausgabe anzeigen"
    Es ist möglich, nur eine bestimmte Ausgabe für einen ausgewählten Satz von Kanälen anzuzeigen. Dies kann unter den [Einstellungen des Interaktions-Panels] (Interaktions-Panel/#chat-Ausgabe) konfiguriert werden.

### Eingabe-Modi
Wenn Sie auf die sekundäre Schaltfläche in der unteren linken Ecke des Interaktionsfensters klicken, öffnet sich ein Menü mit der Liste der verfügbaren Eingabemodi. Im Folgenden sind die drei Eingabemodi im Interaktionsbereich aufgeführt.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-input-modes.png" width="100%" />
</figure>

!!! Anmerkung
    Vor Version 4.25.0 war die Auswahl des **Eingabemodus** Teil der Registerkarte "Interaction Panel"-Einstellungen.

#### Chat
Wenn **Chat** als Eingabemodus ausgewählt ist, kann der **Virtuelle Agent** durch Eingabe in das Eingabefeld und Drücken der Eingabetaste (oder Drücken der Senden-Taste) ausgelöst werden. Alternativ kann die Mikrofontaste gedrückt werden, woraufhin das Mikrofon Ihres Geräts gestartet und die Spracheingabe registriert wird. 

Es ist üblich, dass Nachrichten mit angehängten Daten an Cognigy.AI gesendet werden. Es ist möglich, diese Dateneingabe zu simulieren, indem dem Dateneingabefeld eine Datennutzlast im [JSON](https://www.json.org/json-en.html)-Format hinzugefügt wird. Das Feld **Dateneingabe** kann aktiviert werden, indem der Schalter **Dateneingabe anzeigen** in den [Einstellungen des Interaktionsfensters](input.md) aktiviert wird. Alle Daten, die mit einer Nachricht an Cognigy.AI gesendet werden, sind über [CognigyScript](.. /cognigy-script.md) unter '{{ " {{input.data}}" }}'

#### Sprachanruf

[! [Versions-Abzeichen] (https://img.shields.io/badge/Beta-purple.svg)] ({{config.site_url}})

!!! info "Verfügbarkeit von Funktionen"
    - Wenn Sie eine SaaS Cognigy-Installation verwenden, wenden Sie sich an das Support-Team, um diese Funktion zu aktivieren.
    - Wenn Sie eine On-Premises-Cognigy-Installation verwenden, aktivieren Sie diese Funktion, indem Sie "FEATURE_ENABLE_VOICECALL_WHITELIST" in "values.yaml" hinzufügen. Beispiel: 'FEATURE_ENABLE_VOICECALL_WHITELIST:<organization-1-id>,<organization-2-id>'.

Wenn der Eingabemodus **Sprachanruf** ausgewählt ist, können Sie einen Testanruf über das Interaktionspanel initiieren und verstehen, wie der Sprachbot klingen würde.

Bevor Sie einen Sprachanruf starten, müssen Sie auf der Seite "Agenteneinstellungen" einen **Audioanbieter** konfigurieren. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/agent-settings-audio-provider-settings.png" width="100%" />
</figure>

Basierend auf dem ausgewählten **Audioanbieter** ändert sich die Liste der unterstützten STT/TTS-Sprachen und -Stimmen. Sie können Ihre bevorzugte Sprache und Stimme für Ihren Testanruf im Abschnitt [Sprachanruf](interaction-panel.md#voice-call) auf der Registerkarte Einstellungen im Interaktionsbereich auswählen. 

Nachdem Sie den Audioanbieter, die Sprache und die Stimme konfiguriert haben, können Sie den Anruf starten, indem Sie einfach auf die Schaltfläche **Anruf starten** klicken.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-start-voice-call.png" width="60%" />
</figure>

Wenn der Anruf läuft, können Sie mit Hilfe des Anruf-Timers unter der Schaltfläche **Anruf beenden** sehen, wie lange der Anruf gerade aktiv ist. Darüber hinaus können DTMF-Töne auch während des Gesprächs über die **Wähltastatur** eingefügt werden. Sie können auch das Gespräch sehen und dem Test-Sprachanruf folgen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-end-voice-call.png" width="100%" />
</figure>

#### Live-Folgen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.26.0-blue.svg)] ({{config.site_url}})

Der **Live-Follow**-Eingabemodus hilft dabei, eine Konversation zwischen einem virtuellen Agenten und einem Benutzer in Echtzeit zu beobachten.
Sie können einen Flow debuggen, wenn Sie bereits einen Endpunkt für diesen Flow eingerichtet haben.

Gehen Sie folgendermaßen vor, um diesen Modus zu verwenden und zu testen:

1. Gehen Sie zu **Test > Logs**.
2. Suchen Sie auf der Seite **Protokolle** nach "userId" im Protokoll "info Received message from user". Wenn dieses Protokoll nicht angezeigt wird, navigieren Sie zu dem Kanalchat, den Sie über den Endpunkt erstellt haben (z. B. Webchat, Teams oder Slack). Senden Sie eine Nachricht an diesen Chat und rufen Sie dann die Seite **Protokolle** auf. Um 'userId' für Cognigy Demo Webchat zu erhalten, lesen Sie [Manuelles Definieren der Benutzer-ID](.. /.. /endpoints/webchat/integrated-demo-page.md#description).
3. Kopieren Sie 'userId'.
4. Wechseln Sie zum Flow-Editor und öffnen Sie das Bedienfeld Interaktion.
5. Klicken Sie am unteren Rand des Interaktionsfensters auf ! [Live-Folgen] (.. /.. /.. /assets/icons/live-follow.svg).
6. Fügen Sie "userId" in das Feld **Benutzer-ID** ein.
7. Um das Live-Following zu starten, klicken Sie auf ! [Start-Live-Folgen] (.. /.. /.. /assets/icons/start-live-following.svg).

Jetzt können Sie die Echtzeit-Konversation des Benutzers in Ihrem Interaktions-Panel anzeigen und verfolgen. Um die Live-Follower zu beenden, klicken Sie auf **Live-Follower beenden**.

!!! Anmerkung
    Menschliche Agentennachrichten werden im Live-Follow-Modus nicht angezeigt.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-follow-user.gif" width="80%" />
</figure>

#### Playbook
Wenn der Eingabemodus **Playbook** ausgewählt ist, wird ein Auswahlfeld mit der Liste der Playbooks angezeigt, die im virtuellen Agenten vorhanden sind. Wählen Sie ein Playbook aus, das Sie ausführen möchten, und klicken Sie auf die Schaltfläche **Wiedergabe**. Während der Ausführung können die Informationen zu den Playbook Step-Assertionen angezeigt werden, die fehlgeschlagen oder bestanden wurden. Wenn Sie den Mauszeiger über die Assertionsergebnisse bewegen, erhalten Sie weitere Details in einem Tooltip. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-playbook.png" width="100%" />
</figure>

!!! Tipp: Konfigurieren der Playbookausführung"
	Sie können die Playbook-Ausführung unter den [Playbook-Einstellungen des Interaktionsbereichs](interaction-panel.md#playbooks) weiter konfigurieren.

## Infos<div class="divider"></div>Die Registerkarte "Info" enthält 4 Unterregisterkarten - Eingabe, Status, Kontext und Profil.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/7983f68-interaction-info.jpg" width="100%" />
</figure>

### Eingabe-Objekt
Das Input-Objekt wird mit jeder Benutzereingabe aktualisiert und enthält viele relevante Informationen über die Eingabe des Benutzers, z. B. die gefundenen **Intents**, den **Kanal**, über den die Nachricht gesendet wurde, und alle anderen relevanten Metadaten. 

!!! Hinweis "Eingabeobjekt"
    Weitere Informationen finden Sie unter [Eingabe](input.md).

### Zustand
State kann verwendet werden, um die Gruppe von **Intents** einzuschränken, die ausgelöst werden können, indem bestimmte Intents aktiv von einem bestimmten Status ausgeschlossen werden. 

!!! Hinweis "Bundesland"
    Gehen Sie zu [State](state.md), um mehr zu erfahren. 

### Context-Objekt

Der **Kontext** kann als Kurzzeitgedächtnis des **Virtual Agent** angesehen werden und wird verwendet, um sitzungsspezifische Informationen zu speichern, wie z. B. ausgewählte Produkte oder den aktuellen Standort des Benutzers. Es ist der Ort, an dem API-Antworten in der Regel gespeichert werden, da sie für die jeweilige Sitzung relevant sind. 

!!! Hinweis "Kontextobjekt"
    Weitere Informationen finden Sie unter [Kontext](context.md). 

### Profil-Objekt
Das **(Kontakt-)Profil** fungiert als persistenter - Langzeitspeicher - und wird verwendet, um bestimmte Benutzerdaten wie den Namen und die E-Mail-Adresse des Benutzers sowie anwendungsfallspezifische Informationen wie z. B. die Lieblingsfarbe des Benutzers zu speichern.

!!! Hinweis "Profilobjekt"
    Weitere Informationen finden Sie unter [Profil](profile.md).
 
## Einstellungen<div class="divider"></div>Das Interaktionsfenster kann mit einer Reihe von Einstellungen in verschiedenen Abschnitten konfiguriert werden.

### Chat-Eingabe
In diesem Abschnitt können Sie eine alternative NLU-Engine für die Verwendung in Ihrem Interaction Panel aktivieren. Es ist möglich, NLU-Engines von Drittanbietern zu verbinden, indem Sie zur Seite [NLU Connectors]({{config.site_url}}ai/resources/build/nlu-connectors/) navigieren. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-setting-chat-input.png" width="100%" />
</figure>

### Chat-Ausgabe
In diesem Abschnitt können Sie die Chat-Ausgaben im Interaktionsbereich konfigurieren.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-setting-chat-output.png" width="100%" />
</figure>

#### Text-to-Speech
Wenn diese Option aktiviert ist, spricht der virtuelle Agent über die Text-to-Speech-Funktion des Browsers mit Ihnen.

#### Experten-Modus

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.47-blue.svg)] (.. /.. /.. /release-notes/4.47.md)

Wenn diese Option aktiviert ist, werden im Interaktionsbereich zusätzliche Informationen zur Flow-Ausführung angezeigt:

- Ausgelöste [Intents](.. /.. /nlu/nlu-overview/ml-intents.md) und deren Punktzahl.
- Ausgelöste [Ja/Nein-Absichten](.. /.. /nlu/nlu-overview/yes-no-intents.md) und deren Punktzahl.
- Der Name des Flows, der ausgelöst wurde. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-chat-tab-expert-mode.png" width="80%" />
</figure>

#### Kanal auswählen
Wir können die Nachrichten im Interaktionsbereich auch nach einem bestimmten Kanal filtern. Standardmäßig werden die Ausgänge aller Kanäle angezeigt.

### Sprachanruf

[! [Versions-Abzeichen] (https://img.shields.io/badge/Beta-purple.svg)] ({{config.site_url}})

In diesem Abschnitt können Sie die Sprache und die Stimme auswählen, um die Sprachanrufe aus dem Interaktionsbereich zu testen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-voice-settings.png" width="100%" />
</figure>

### Playbooks
In diesem Abschnitt können Sie die Playbook-Ausführungen im Interaktionsbereich konfigurieren.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-setting-playbook.png" width="100%" />
</figure>

#### Wiederholen
Wenn Sie diese Funktion aktivieren, wird das ausgewählte Playbook immer wieder ausgeführt.

#### Verzögerung
Zeit (in Millisekunden), die zwischen der Ausführung der einzelnen Playbookschritte gewartet werden soll.

### Allgemeines

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-setting-general.png" width="100%" />
</figure>

#### Automatisches Verschieben des Flow-Editors

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.27.0-blue.svg)] ({{config.site_url}})

Wenn diese Option aktiviert ist, verschiebt und zentriert der Flow-Editor basierend auf den Ausgaben des Interaktionsbereichs automatisch den zuletzt ausgeführten Flow-Knoten. Wenn der letzte ausgelöste Knoten zu einem anderen Flow gehört als dem, der derzeit im Editor geöffnet ist, wird der Flow des zuletzt ausgelösten Knotens automatisch geöffnet und der Knoten wird zentriert.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-follow-flow-node.gif" width="100%" />
</figure>

!!! Anmerkung
    Wenn Sie diese Einstellung aktivieren, wird die Einstellung "Ziel-Flow-Auswahl automatisch wechseln" automatisch deaktiviert und deaktiviert.

#### Automatisches Umschalten der Zielflussauswahl
Wenn diese Einstellung aktiviert ist, wechselt die Flow-Auswahl im Interaktionsbereich automatisch zu dem Flow, der im Flow-Editor geöffnet ist. 

### Eingabe

In diesem Abschnitt können Sie den Schalter **Dateneingabe anzeigen** aktivieren, um das Feld **Dateneingabe** für den Chat-Eingabemodus im Interaktionsbereich zu aktivieren.<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/interaction-panel-setting-input.png" width="100%" />
</figure></organization-2-id></organization-1-id>