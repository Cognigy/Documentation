## Einrichten eines Flows

Um Ihren Agenten zusätzliche Echtzeitinformationen zur Verfügung zu stellen, verwendet dieser Assistent einen Flow.

Um einen Assistenten einzurichten, benötigen Sie zwei separate Flows:

- Der Hauptfluss, in dem die primäre Logik definiert ist.
- Ein Flow, in dem die Logik für Ihren Assistenten implementiert wird.

Während einer aktiven Live-Agent-Übergabe verarbeitet dieser Flow alle Kundeneingaben und zeigt die Ausgaben als Teil der Konversation für den menschlichen Agenten an.

Die Nachrichten des Assistenten werden nur auf der Grundlage von Kundeneingaben angezeigt, die während einer aktiven Übergabe empfangen wurden, nachdem der menschliche Agent zunächst geantwortet hat.

!!! Warnung
    Sie müssen den Übergabeknoten nicht in den Ablauf des Assistenten aufnehmen, da die Verwendung des Übergabeknotens an den Agentenknoten im Hauptablauf des Live-Agenten für den Konfigurationsprozess ausreicht.

Um Ihren Agenten hilfreiche Informationen zur Verfügung zu stellen, erstellen Sie Absichten und verwenden Sie Suchknoten mit Say-Knoten basierend auf Kundeneingaben.<figure>
  <img class="image-center" src="https://docs.cognigy.com/ai/handover-providers/images/la-agent-assist-flow-example.png" width="100%" />
</figure>
