---
Titel: "Übersicht" 
Schnecke: "Übersicht" 
ausgeblendet: false 
---

# xApps Übersicht

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.51-blue.svg)] (.. /.. /release-notes/4.51.md)

{! _includes/ai/xApp/pricing.md !}

Cognigy xApps sind unendlich flexible Micro-Web-Anwendungen für den Self-Service von Kunden. xApps können eigenständig oder ergänzend zu jedem Kanal verwendet werden, um die Fähigkeiten virtueller und menschlicher Agenten zu verbessern und Kanaleinschränkungen zu überwinden, die die Benutzererfahrung beeinträchtigen.

Das Verhalten von xApps wird über eine Reihe von [xApp Flow Nodes](.. /flow-nodes/xApp/overview.md).
Sie können die eigentlichen xApp-Seiten auf zwei Arten erstellen:
durch Bereitstellen von [HTML-Code](.. /flow-nodes/xApp/set-html-xApp-state.md)
oder durch Angabe einer [Adaptiven Karte in JSON](.. /flow-nodes/xApp/set-AdaptiveCard-xApp-state.md).
Alternativ können Sie für weitere Anpassungen Ihren eigenen Node erstellen, indem Sie eine Erweiterung implementieren und hochladen.

Sehen Sie sich dieses Webinar an, um einen schnellen Überblick darüber zu erhalten, was xApps sind, wie sie funktionieren und in welchen Szenarien Sie sie verwenden können. Das Webinar enthält auch ein Tutorial zum Erstellen einer einfachen xApp.<div style="text-align:center;">
  <iframe width="701" height="438" src="https://www.youtube.com/embed/4qvZGG6qK6w" title="Design Multimodal Customer Journeys with Cognigy xApps" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>## Kompatibilität

- Cognigy xApps sind mit den [hier](supported-browsers-and-channels.md) aufgeführten Browsern und Kanälen kompatibel.

## Konzepte 

### Session-Konzept

Eine xApp-Sitzung kann über die URL aufgerufen und über die [xApp: Init-Sitzung](.. /flow-nodes/xApp/init-xApp-session.md) Flow-Knoten. Die xApp-Sitzung zeigt eine Sequenz von xApp-Seiten an, die nach Belieben konfiguriert werden können. Pro Cognigy-Sitzung kann maximal eine xApp-Sitzung initialisiert werden.

### Bildschirm-Konzept

Die Shell-Seite verfügt über eine Reihe von konfigurierbaren integrierten Bildschirmen. Diese Standardbildschirme können verwendet werden, um mit Endbenutzern zu interagieren, z. B. wenn der xApp-Inhalt nicht angezeigt wird. Diese Standardbildschirme sind Teil der Shell-Seite, die die Verbindung zum Cognigy.AI-Backend hält.

#### xApp-Bildschirm

Die xApp-Bildschirme werden angezeigt, wenn die xApp-Seite gestartet wird, nicht gestartet werden kann, ein Fehler auftritt und angehalten wird.

<figure><img class="image-center" src="{{config.site_url}}ai/images/success-screen.png" width="80%"><figcaption>xApp-Erfolgsbildschirm xApp-Fehlerbildschirm</figcaption>
    
    
</figure><figure><img class="image-center" src="{{config.site_url}}ai/images/error-screen.png" width="80%"><figcaption></figcaption>
    
    
</figure>

#### Zwischenbildschirm

Die Zwischenbildschirme werden dem Endbenutzer angezeigt, während keine xApp-Seite für die Anzeige konfiguriert ist. Der standardmäßige Zwischenbildschirm kann durch eine benutzerdefinierte xApp-Seite ersetzt werden.

<figure><img class="image-center" src="{{config.site_url}}ai/images/intermediate-screen.png" width="80%" /><figcaption>Zwischenbildschirm</figcaption>
    
    
</figure>

#### Verbindungsbildschirm

Die Verbindungsbildschirme werden angezeigt, während die Echtzeitverbindung zum Backend wiederhergestellt wird. Der standardmäßige Verbindungsbildschirm kann durch eine benutzerdefinierte xApp-Seite ersetzt werden.

<figure><img class="image-center" src="{{config.site_url}}ai/images/connection-screen.png" width="80%" /><figcaption>Bildschirm "Verbindung"</figcaption>
    
    
</figure>

#### PIN-Bildschirm

Auf dem PIN-Bildschirm wird der Endbenutzer aufgefordert, die xApp-Sitzungs-PIN einzugeben. Der Benutzer muss die richtige PIN angeben, um auf die xApp-Seiten zugreifen zu können. Das Anfordern einer PIN für die Teilnahme an der Sitzung ist optional.

<figure><img class="image-center" src="{{config.site_url}}ai/images/pin-screen.png" width="80%" /><figcaption>xApp-Pin-Bildschirm</figcaption>
    
    
</figure>

## So funktioniert's

Weitere Informationen zur Funktionsweise einer xApp finden Sie in den Artikeln [Anwendungsfälle](use-cases.md) und [Erstellen Ihrer ersten xApp](build/first-xApp.md).
Vorgefertigte Beispiele für xApps finden Sie im Repository [Cognigy GitHub](https://github.com/Cognigy/xApps/tree/main).

## Mehr Informationen

- [Architektur](architecture.md)
- [xApp-Knoten](.. /flow-nodes/xApp/overview.md)
- [xApp-Token](tokens.md)
- [xApp-Flow-API](api.md)