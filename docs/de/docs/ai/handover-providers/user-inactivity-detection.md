---
title: "Erkennung und Behandlung von Benutzerinaktivität"
Slug: "Erkennung und Behandlung von Benutzerinaktivität"
Beschreibung: "Die Cognigy Inactivity Detection and Handling-Funktion ermöglicht es Ihnen, Inaktivität von Endbenutzern während der Übergabe zu erkennen und diese Inaktivität zu behandeln, indem Sie die Übergabe automatisch schließen, automatisierte Antworten konfigurieren oder weitere Aktionen auslösen."
ausgeblendet: false
---
# Erkennung und Behandlung von Benutzerinaktivität

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.53-blue.svg)] (.. /.. /release-notes/4.53.md)

Die _Inactivity Erkennungs- und Handling_Funktion ermöglicht es Ihnen, Inaktivität von Endbenutzern während der Übergabe zu erkennen und diese Inaktivität zu behandeln, indem Sie die Übergabe automatisch schließen, automatisierte Antworten konfigurieren oder weitere Aktionen auslösen. Diese Funktion trägt dazu bei, dass die Ressourcen des menschlichen Agenten effizienter genutzt werden.

Die Konfiguration mehrerer Knoten ist erforderlich, um die Funktion "Inaktivitätserkennung und -behandlung" verwenden zu können:

- [Übergabe an Agent](#set-up-handover-to-agent-node)
- [Suche](#set-up-lookup-node)
- [Übergabeinaktivität festlegen](#set-up-set-handover-inactivity-node)
- [Gehe zu](#set-up-go-to-node)
- [Wenn](#set-up-if-Knoten)

Im Folgenden finden Sie ein Beispiel für die Einrichtung der Inaktivitätserkennung und -behandlung, die an Ihre spezifischen Anforderungen angepasst werden kann.

## Übergabe an Agentenknoten einrichten

Gehen Sie folgendermaßen vor, um sicherzustellen, dass Inaktivität während der Warteschlangenzeit oder bei aktiven Übergaben ordnungsgemäß erkannt und behandelt wird:

1. Fügen Sie im Flow-Editor den Knoten **Übergabe an Agent** hinzu.
2. Öffnen Sie einen Node-Editor, indem Sie auf den Knoten **Übergabe an Agent** klicken.
3. Gehen Sie im Node-Editor zum Abschnitt **Ereigniseinstellungen**:
4. Schalten Sie die Einstellungen **Warteschlangenereignis senden** und **Aktives Ereignis senden** ein:
     - **Warteschlangenereignis senden** – Wenn diese Option aktiviert ist, wird ein Ereignis an den Flow gesendet, sobald der Endbenutzer die Warteschlange betritt. Dies ist eine Voraussetzung, um Inaktivität zu erkennen, während sich der Endbenutzer in der Warteschlange befindet. 
     - **Aktives Ereignis senden** - Wenn diese Option aktiviert ist, wird ein Ereignis an den Flow gesendet, sobald die Übergabe aktiv wird, d. h. wenn der menschliche Agent die erste Nachricht sendet. Dies ist eine Voraussetzung, um Inaktivität zu erkennen, während eine Übergabe aktiv ist.
5. Klicken Sie auf **Knoten speichern**.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/1-handover-event-settings.png" width="100%" />
</figure>

## Lookup-Knoten einrichten

Richten Sie den Lookup Node mit Übergabestatus ein:

1. Fügen Sie im Flow-Editor unter dem Knoten **Übergabe an Agent** den Knoten **Lookup** hinzu.
2. Öffnen Sie einen Node-Editor, indem Sie auf den Node klicken.
3. Gehen Sie im Node-Editor zur Einstellung **Typ** und wählen Sie **Übergabestatus** aus der Liste aus. 
4. Klicken Sie auf **Knoten speichern**.
    <figure>
        <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/2-handover-lookup.png" width="100%" />
    </figure>
5. Gehen Sie zu den untergeordneten Nodes:<br>5.1 Klicken Sie auf den Knoten **Fall**.<br>5.3 Geben Sie im Feld **Wert** den Übergabestatus "aktiv" an, wenn Sie Inaktivität erkennen und behandeln möchten, während sich die Endbenutzer in der Warteschlange befinden.<br>5.4 Klicken Sie auf **Knoten speichern**.<br>
      <figure>
           <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/3-handover-child-lookup.png" width="100%" />
      </figure>5.5 Klicken Sie auf den zweiten **Fall**-Knoten.<br>5.6 Geben Sie im Feld **Wert** den Übergabestatus "Warteschlange" an, wenn Sie Inaktivität erkennen und behandeln möchten, während sich die Endbenutzer in der Warteschlange befinden.<br>5.7 Klicken Sie auf **Knoten speichern**.<br>
      <figure>
           <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/4-handover-second-child-lookup.png" width="100%" />
      </figure>6. Fügen Sie die untergeordneten Knoten **completed** und **error** analog hinzu.
   
## Set Handover Inactivity Node einrichten

Wenn Sie Inaktivität während der Warteschlangenzeit erkennen möchten, sollte der erste Timer gestartet werden, sobald der Endbenutzer die Warteschlange betritt.

Fügen Sie dazu den Once-Knoten hinzu, um den Inaktivitäts-Timer zu starten, wenn Sie das Warteschlangenereignis erhalten:

1. Fügen Sie unter dem untergeordneten Knoten **Warteschlange** den Knoten **Once** hinzu.
2. Fügen Sie unter dem untergeordneten Knoten **Beim ersten Mal** den Knoten **Übergabeinaktivität festlegen** hinzu.
3. Geben Sie im Knoten **Übergabeinaktivität festlegen** die Inaktivitätszeitüberschreitung in Minuten an, z. B. "1".  Bei jeder eingehenden Benutzereingabe wird der Timer automatisch zurückgesetzt und beginnt von vorne. Sobald der Timer abgelaufen ist, wird ein Inaktivitätsereignis an den Flow gesendet.
4. Klicken Sie auf **Knoten speichern**.
5. Wiederholen Sie die gleichen Schritte für den **aktiven** untergeordneten Node, falls Sie Inaktivität während aktiver Übergaben erkennen und behandeln möchten.

<figure>
   <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/5-set-handover-inactivity.png" width="100%" />
</figure>

Der Timer wird in Minuten eingestellt und kann um bis zu einer Minute variieren. Wenn keine Eingabe durch den Endbenutzer erfolgt, läuft der Timer nach der angegebenen Zeit ab. Wenn eine Endbenutzereingabe vor der Zeitüberschreitung empfangen wird, wird der Timer automatisch zurückgesetzt und beginnt von vorne.

## Gehe zu Knoten einrichten

Legen Sie den Knoten **Gehe zu** fest, um zum Suchknoten zurückzukehren. Dadurch wird der Einstiegspunkt auf den Lookup-Knoten verschoben, sodass der Flow die richtige untergeordnete Lookup-Verzweigung basierend auf eingehenden Ereignissen ausführen kann.

Wählen Sie im **Gehe zu** Knoten-Editor
Wählen Sie **Lookup** aus der Liste **Select Node** aus.
und **Gehe zu Knoten und warte auf Eingabe** aus der Liste **Ausführungsmodus** im Abschnitt **Erweitert**.

<figure>
   <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/6-handover-go-to.png" width="100%" />
</figure>

## If Node einrichten

Ein Beispiel dafür, wie mit erkannter Inaktivität umgegangen werden könnte, wird hier erläutert:

1. Fügen Sie den IF-Knoten am Ende des Flows hinzu.
2. Geben Sie im Node-Editor "input.handover.inactivityCount >= 2" an. Dies ermöglicht es, die zweite erkannte Inaktivität anders zu behandeln als die erste. Bitte beachten Sie, dass "input.handover.inactivityCount" auf 0 zurückgesetzt wird, sobald der Endbenutzer eine Nachricht sendet.
3. Gehen Sie unter dem **If**-Knoten und seinem **Else**-untergeordneten Knoten wie folgt vor, um den Endbenutzer basierend auf der erkannten Inaktivität zu fragen, ob er noch vorhanden ist.<br>3.1 Fügen Sie den Knoten **say** hinzu.<br>3.2 Geben Sie im **Say** Node-Editor im Textfeld "Sind Sie noch da? Die Konversation wird in Kürze automatisch geschlossen."  <br>3.3 Wählen Sie unter **Übergabeeinstellungen > Übergabeausgabeziel** die Option **Benutzer** aus, um die Nachricht nur dem Benutzer und nicht dem menschlichen Agenten anzuzeigen.<br>3.4 Klicken Sie auf **Knoten speichern**.<br>3.5 Fügen Sie den Knoten **Übergabeinaktivität festlegen** hinzu, um einen nachfolgenden Inaktivitäts-Timer zu starten.<br>Wenn die Anzahl der Inaktivität größer als zwei ist, wird der Close-Handover-Prozess ausgelöst, der die Übergabe sowohl auf der Benutzer- als auch auf der menschlichen Agentenseite abschließen kann.
4. Führen Sie unter dem **If**-Knoten und seinem **Then**-untergeordneten Knoten die folgenden Schritte aus, um die Übergabe automatisch zu schließen, nachdem der Inaktivitäts-Timer zum zweiten Mal direkt hintereinander abgelaufen ist:<br>4.1 Fügen Sie den Knoten **Übergabe schließen** hinzu, um die Übergabe automatisch zu schließen.<br>4.2 Fügen Sie den Knoten **say** hinzu.<br>4.3. Geben Sie im **Say** Node-Editor im Textfeld "Sie sind jetzt wieder beim Bot!" an.<br>4.4 Wählen Sie unter **Übergabeeinstellungen > Übergabeausgabeziel** die Option **Benutzer und Agent** aus.<br>4.5 Klicken Sie auf **Knoten speichern**.<br>Wenn die Anzahl der Inaktivität weniger als zwei beträgt, wird der Benutzer durch Trigger aufgefordert, zu antworten, um zu verhindern, dass die Konversation automatisch geschlossen wird. Der Knoten "Übergabe festlegen" legt den Zeitraum für die Inaktivität fest, nach dem die Konversation geschlossen wird oder ein Flow von Anfang an neu gestartet wird.

<figure>
   <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/scenarios/7-handover-if.png" width="100%" />
</figure>

Fügen Sie am Ende den Knoten "Gehe zu" hinzu, um wie zuvor zum Knoten "Suchen" zurückzukehren. Wählen Sie im **Gehe zu** Knoten-Editor
Wählen Sie **Lookup** aus der Liste **Select Node** aus.
und **Gehe zu Knoten und warte auf Eingabe** aus der Liste **Ausführungsmodus** im Abschnitt **Erweitert**. 

Testen Sie Ihren Flow über den Demo-Webchat und alle angeschlossenen Anbieter, z. B. Cognigy Live Agent.

## Mehr Informationen

- [Übergabeinaktivität einstellen](.. /flow-nodes/other-nodes/set-handover-inactivity.md)
- [Übergabe schließen](.. /flow-nodes/other-nodes/close-handover.md)
- [Übergabeanbieter](overview.md)
- [Agentenübergabe](.. /tools/agent-handover.md)