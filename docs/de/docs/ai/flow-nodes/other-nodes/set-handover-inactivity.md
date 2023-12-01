---
Titel: "Übergabeinaktivität festlegen"
Slug: "Set-Handover-Inaktivität"
ausgeblendet: false
---
# Übergabe-Inaktivität festlegen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-handover-inactivity.png" width="80%" />
  <figcaption>Übergabeinaktivität festlegen</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Dieser Knoten erkennt und behandelt die Inaktivität von Benutzern, wodurch Kapazitäten für das menschliche Agententeam freigesetzt werden. Um diesen Knoten zu konfigurieren, geben Sie die Zeit in Minuten an, in der der Benutzer inaktiv sein kann.

Um den Node zu verwenden, konfigurieren Sie zunächst die [Lookup](.. /logic/lookup.md) Knoten, um verschiedene Inaktivitätsverhaltensweisen zu aktivieren.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-handover-inactivity-lookup.png" width="120%" />
</figure>

Um die Inaktivitätszeit des Benutzers zu verwalten, verwenden Sie die Bedingung 'input.handover.inactivityCount >= <times inactivity="" was="" reached="">' im Feld **Bedingung** des [If](.. /logic/if.md) Knoten. Beispiel: "input.handover.inactivityCount >= 2". Sie können auch den Zählwert nach Bedarf anpassen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-handover-inactivity-if.png" width="120%" />
</figure>

Um die Benutzerfreundlichkeit zu verbessern, fügen Sie nach dem Knoten Übergabe festlegen ein [Say](.. /message/say.md) Knotenmeldung, die den Benutzer mit einer Meldung wie "Sind Sie noch da? Die Konversation wird in Kürze automatisch geschlossen."

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/other/set-handover-inactivity-say.png" width="120%" />
</figure>

Mit dem [Say](.. /message/say.md#handover-settings) können Sie festlegen, ob der Agent, der Benutzer oder beide nach Ablauf der Zeit Nachrichten vom virtuellen Agenten erhalten.

Um eine Übergabe basierend auf dem Inaktivitätsereignis zu schließen, verwenden Sie den Knoten [Übergabe schließen](close-handover.md). Alternativ können Sie bei Bedarf ein anderes Inaktivitätsverhalten initiieren.

## Mehr Informationen

- [Erkennung und Behandlung von Benutzerinaktivität](.. /.. /handover-providers/user-inactivity-detection.md)
- [Agentenübergabe](.. /.. /tools/agent-handover.md)
- [Übergabeinaktivität einstellen](.. /.. /flow-nodes/other-nodes/set-handover-inactivity.md)
- [Übergabe schließen](.. /.. /flow-nodes/other-nodes/close-handover.md)</times>