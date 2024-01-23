---
Titel: "LA AI Copilot"
Schnecke: "La-ai-Copilot"
ausgeblendet: false
---
# LA AI Copilot 

{! _includes/live-agent/assistant-setup.md !}

## Einrichten eines Endpunkts

So konfigurieren Sie Ihren Endpunkt:

1. Wechseln Sie zu **Bereitstellen > Endpunkte**.
2. Gehen Sie zu Ihrem **Webchat**-Endpunkt.
3. Scrollen Sie nach unten zu **Übergabeeinstellungen** und wählen Sie **Cognigy Live Agent** aus der Liste aus.
4. Gehen Sie zum Abschnitt **Copilot**.
5. Wählen Sie im Feld **Copilot-Konfiguration** die Option **Keine** aus.
6. Wählen Sie im Feld **Copilot Flow** den Namen des AI Copilot Flow aus, den Sie im vorherigen Schritt erstellt haben.
7. Klicken Sie auf **Speichern**.

Die Einrichtung des Endpunkts ist abgeschlossen.

## LA AI Copilot testen

Gehen Sie folgendermaßen vor, um LA AI Copilot zu testen:

1. Starten Sie eine Webchat-Sitzung.
2. Schließen Sie den Übergabevorgang an Live Agent ab.
3. Sobald die Übergabe abgeschlossen ist, senden Sie eine Nachricht als Agent.
4. Senden Sie danach eine Nachricht als Benutzer im Webchat.

<figure>
    <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-webchat_f.png" width="50%" />
</figure>

Sobald der menschliche Agent diese Nachricht erhält, hängt das Testverhalten davon ab, wie Sie den Endpunkt zuvor konfiguriert haben:

1. Der menschliche Agent erhält ein Dropdown-Menü **Assist**. 
2. In diesem Menü findet der menschliche Agent die Ergebnisse des Flows, der über LA AI Copilot gesendet wurde.
       <figure>
           <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview_f.png" width="55%" />
       </figure>
3. Der menschliche Agent kann auf den blauen Pfeil klicken, um Inhalte an den Benutzer weiterzuleiten.
      <figure>
           <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-agentview-forward_f.png" width="55%" />
      </figure>

       <figure>
           <img class="image-center" src="{{config.site_url}}ai/handover-providers/images/la-agent-assist-webchat-complete_f.png" width="50%" />
       </figure>

Wenn der Test erfolgreich ist, ist das LA AI Copilot-Setup abgeschlossen.

## Mehr Informationen

- [KI-Copilot im Live-Agenten](ai-copilot.md)
- [KI-Copilot-Übersicht](.. /.. /ai-copilot/overview.md)