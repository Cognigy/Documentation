---
Titel: "Cognigy Text Format"
Slug: "Cognigy-Text-Format"
Beschreibung: "Das Cognigy-Textformat (ctxt) ist ein spezielles Textformat, das von Cognigy für die Cognigy Knowledge AI-Lösung entwickelt wurde."
ausgeblendet: false
---

# Cognigy Textformat

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.63-blue.svg)] (.. /.. /release-notes/4.63.md)

_Cognigy Text format_ ("ctxt") ist ein spezielles Textformat, das von Cognigy entwickelt wurde.
Dieses Format dient zum Importieren von benutzerdefinierten Inhalten in die [Cognigy Knowledge AI](overview.md)-Lösung.

Um dem ctxt-Format zu entsprechen, müssen Ihre Dateien den von Cognigy vorgegebenen Formatierungsrichtlinien entsprechen.
Zu diesen Richtlinien gehören die Verwendung der Dateierweiterung ".ctxt", die Anwendung der Regeln der ctxt-Dokumentstruktur und die Sicherstellung der Verwendung einer gültigen Markdown-Syntax.
Sie können die ".ctxt"-Datei in Code-Editoren bearbeiten
z. B. [Visual Studio Code](https://code.visualstudio.com/),
[Notizblock++] (https://notepad-plus-plus.org/downloads/) oder [Erhabener Text](https://www.sublimetext.com/),
bietet eine visuelle Darstellung der Formatierung. Unabhängig davon, welchen Texteditor Sie verwenden, wählen Sie den Markdown-Sprachmodus aus. In Visual Studio Code können Sie z. B. den Sprachmodus anpassen, indem Sie im unteren Bereich des Editors auf den Abschnitt [Sprachmodus ändern](https://code.visualstudio.com/docs/languages/overview#_change-the-language-for-the-selected-file) zugreifen.

## Grundregeln für die Inhaltssegmentierung

Das Segmentieren von Inhalten in Blöcke umfasst die folgenden Grundregeln:

- Der Inhalt wird in Blöcke unterteilt, die auf doppelten Zeilenumbrüchen basieren, anstatt sich auf Überschriften zu verlassen.
- Der erste Block beginnt unmittelbar nach dem ersten doppelten Zeilenumbruch in der Datei.
- Wenn ein Teil des Inhalts die [maximal unterstützte Länge](overview.md#limitations) überschreitet, wird der Prozess angehalten, und es wird die Fehlermeldung "Chunk too long" angezeigt.

Um den Text effektiv in Blöcke aufzuteilen und die umfangreichen Metadatenfunktionen zu nutzen, erstellen Sie eine .ctxt-Datei, die den folgenden Anforderungen an die Dokumentstruktur entspricht.

## Struktur

Eine Datei im 'ctxt'-Format muss sowohl die Abschnitte [header](#header) als auch [body](#body) enthalten.

??? + "Cognigy ctxt Beispiel"

'''Markdown
    'Ausführung: 1'
    'Titel: Cognigy xApps FAQs'
    'URL: https://www.cognigy.com'
    'Stichworte: [Cognigy, Xapps, Architektur]'
    
Was ist Cognigy?
    Cognigy ist ein führender Anbieter von Unternehmenssoftware für die Automatisierung von Conversational AI. Unsere Plattform Cognigy.AI automatisiert die Kommunikation zwischen Kunden und Mitarbeitern. Cognigy.AI ist in On-Premises- und SaaS-Umgebungen verfügbar und ermöglicht es Unternehmen, mit ihren Benutzern in natürlicher Sprache über jeden Kanal - Webchat, SMS, Sprach- und mobile Apps - und in jeder Sprache zu sprechen. Cognigy.AI unterstützt intelligente Sprach- und Chatbots, die über einfache FAQ hinaus konsistent und genau kommunizieren, was zu reduzierten Contact-Center-Kosten und höherer Effizienz bei gleichzeitiger Verbesserung der Benutzererfahrung führt. Zum weltweiten Kundenportfolio von Cognigy gehören Toyota, E.ON, Lufthansa und viele mehr.
    'URL: https://www.cognigy.com/'
    
Was sind xApps?
    Cognigy xApps sind unendlich flexible Micro-Web-Anwendungen für den Self-Service von Kunden. xApps können als eigenständige Anwendung oder ergänzend zu jedem Kanal verwendet werden, um die Fähigkeiten virtueller und menschlicher Agenten zu verbessern. In Multi-Channel-Szenarien schließen xApps die Erlebnislücken bestehender Sprach- und Messaging-Kanäle, um dynamische, vollständig vernetzte Kundeninteraktionen zu ermöglichen, indem sie dazu beitragen, Einschränkungen von Kommunikationskanälen wie Sprache, Webchat-Widget oder Microsoft Teams zu überwinden, die die Benutzererfahrung beeinträchtigen.
    'URL: https://docs.cognigy.com/ai/xApp/overview/'
    
Was sind Anwendungsfälle von xApps?
    Die Anwendungsfälle sind endlos, da xApps aufgrund der Tatsache, dass es sich im Wesentlichen um Micro-Web-Anwendungen handelt, unendlich flexibel sind. Drei mögliche Anwendungsfälle sind hier aufgeführt:
    - Authentifizierung über Anmeldeinformationen: Mit xApps können Sie Benutzern die Authentifizierung mit verschiedenen Methoden wie E-Mail-Adressen, Benutzernummern oder anderen Identifikationsdetails ermöglichen. Benutzer können ihre Identität sicher verifizieren und Zugang zu bestimmten Diensten oder Informationen erhalten.
    - Wählen Sie einen Flugsitzplatz: Mit xApps können Sie Benutzern eine Oberfläche anbieten, über die sie ihren bevorzugten Sitzplatz für ihren Flug auswählen können. Benutzer können die verfügbaren Sitzplätze anzeigen und den Sitzplatz ihrer Wahl auswählen, um ihr Reiseerlebnis zu verbessern.
    - Standort freigeben: Mit xApps können Sie Benutzern erlauben, die Standortinformationen ihres Geräts freizugeben. Dieser Anwendungsfall kann in verschiedenen Szenarien nützlich sein, z. B. bei der Bereitstellung standortbezogener Dienste, der Nachverfolgung von Lieferungen oder der Suche nach Ressourcen in der Nähe.
    'Internetadresse: https://docs.cognigy.com/ai/xApp/use-cases/'
    
Wie funktionieren xApps?
    Das Verhalten von xApps wird über eine Reihe von xApp Flow Nodes gesteuert. Eine xApp-Sitzung kann über den Knoten "xApp: Init-Sitzung" initialisiert werden. Die xApp-Sitzung kann auf zwei Arten mit den tatsächlichen xApp-Seiten aktualisiert werden: durch Bereitstellen von HTML-Code über den Knoten "xApp: HTML anzeigen" oder durch Angeben einer adaptiven Karte in JSON über den Knoten "xApp: Adaptive Karte anzeigen". Alternativ können Sie für weitere Anpassungen einen eigenen Knoten erstellen, um den xApps-Status zu aktualisieren, indem Sie eine Erweiterung implementieren und hochladen. Um auf die xApp-Benutzereingabe in einem Flow zu warten, verwenden Sie den Knoten "Frage" oder "Optionale Frage". Der xApp-Typ des Frageknotens gilt nur dann als beantwortet, wenn die übermittelten Ergebnisse als Teil der Eingabe verfügbar sind.
    'URL: https://docs.cognigy.com/ai/xApp/build-an-xApp/'
    
Wie ist die xApps-Architektur aufgebaut?
    Die xApp-Shell-Seite lädt ihre Ressourcen (HTML/CSS/JS), indem sie statische Dateien über HTTP/HTTPs 1.1-Anforderungen an service-static-files anfordert und eine WebSocket-Verbindung (über Socket.io) zu serviceapp-session-manager herstellt, um Informationen über xApp-Sitzungen abzurufen. Zu diesen Informationen gehört ein asynchrones Ereignis zum Initialisieren einer xApp-Sitzung, das eine eindeutige URL erstellt und angibt, welche xApp in einer bestimmten xApp-Sitzung angezeigt wird. Der Elastic Load Balancer hilft bei der Verteilung des eingehenden Datenverkehrs, während Traefik den Datenverkehr basierend auf bestimmten Anforderungen dynamisch an Backend-Server weiterleitet. Der serviceapp-session-manager aktualisiert den xApp-Sitzungsstatus in der App-Sitzungsdatenbank, und der WebSocket überträgt Daten an die Shell-Seite, die xApps lädt und Daten für das SDK bereitstellt.
    'URL: https://docs.cognigy.com/ai/xApp/architecture/'
    'Bild: https://docs.cognigy.com/ai/images/xApp/architecture.png'       
    '''

Sie können diese Datei [cognigy-sample.ctxt](https://docs.cognigy.com/ai/images/knowledge-ai/cognigy-sample.ctxt) auch im '.ctxt'-Format herunterladen.

### Kopfzeile

Der Header enthält globale Metadateninformationen mit Schlüssel-Wert-Paaren.

Eine Metadateneinheit ist als Schlüssel-Wert-Paar strukturiert, das in Backticks eingeschlossen ist.
Zum Beispiel:

'''Markdown
'URL: https://www.cognigy.com'
'''

Der Header sollte durch doppelte Zeilenumbrüche vom [body](#body) getrennt werden.

#### Quell-Metadaten

| Schlüssel | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Obligatorisch |
|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  -----------------------------------------------------------------------------------------------------------------------------------------|-----------|
| Ausführung | Die Version des ctxt-Formats. Sie sollte auf 1 festgelegt werden, da derzeit nur 1 unterstützt wird. Die Versionsnummer kann geändert werden, wenn eine neue Version eingeführt wird.                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Ja |
| Titel | Der Schlüssel "title" ist ein Beispiel für einen benutzerdefinierten Metadatenschlüssel, um den Namen des Dokuments zu definieren. Wenn ein Benutzer die Informationsquelle anfordert, kann der virtuelle Agent so konfiguriert werden, dass der Titel des Dokuments in der Antwortnachricht angezeigt wird. <br>Diesen Parameter finden Sie im Input-Objekt unter 'input.knowledgeSearch.topK[0].sourceMetaData.title'.                                                                                                                                                                                                                                                                              | Nein |
| Internetadresse | Der 'url'-Schlüssel ist ein Beispiel für einen benutzerdefinierten Metadatenschlüssel, um eine URL zur Quelle des Dokuments zu definieren, z. B. zu einer Website, auf der die Informationen abgerufen wurden. Wenn ein Benutzer die Informationsquelle anfordert, kann der virtuelle Agent so konfiguriert werden, dass der Link zur Quelle in der Antwortnachricht angezeigt wird. Dieser Parameter ermöglicht es Benutzern, auf die Quelle zuzugreifen, um weitere Details oder Überprüfungen zu erhalten. Wenn die Informationen des Dokuments beispielsweise von der Website Ihres Unternehmens stammen, enthält das URL-Feld die URL der Website. <br>Diesen Parameter finden Sie im Input-Objekt unter 'input.knowledgeSearch.topK[0].sourceMetaData.url' . | Nein |
| Schlagwörter | Der Schlüssel "Tags" ist ein Beispiel für einen benutzerdefinierten Metadatenschlüssel, der zum Definieren von Tags verwendet wird, die Benutzern helfen, ihre Wissenssuchen zu filtern, sich auf relevante Informationen zu konzentrieren und letztendlich genauere Suchergebnisse zu erhalten. Die maximale Anzahl von Tags pro Wissensquelle beträgt 10.                                                                                                                                                                                                                                                                                                                                                                     | Nein |             

Sie können Ihre Schlüsseltypen für Metadaten erstellen, z. B.
'author: Cognigy', wobei 'author' ein Schlüssel ist.

Weitere Informationen zu den Grenzwerten für Quellmetadaten finden Sie im Abschnitt [Einschränkungen](overview.md#limitations).

#### Beispiel

'''Markdown
'Ausführung: 1'
'Titel: Cognigy xApps FAQs'
'URL: https://www.cognigy.com'
'Stichworte: [Cognigy, Xapps, Architektur]'
'''

### Karosserie

Der Text enthält Blöcke, die klaren und informativen Text und relevante Metadaten enthalten.

Jeder Block sollte durch doppelte Zeilenumbrüche getrennt werden.

#### Chunk-Text

Der Chunk-Text ist der Text, der innerhalb des Flows aufgenommen und zurückgegeben wird.
Stellen Sie sicher, dass der Text klar und prägnant ist und direkt auf die Frage oder das Thema eingeht, die oder das durch eine mögliche Überschrift gekennzeichnet ist.
Die Leser verlassen sich auf den Text, um die gesuchten Informationen zu finden, daher sind Klarheit und Genauigkeit von entscheidender Bedeutung.

Wenn die Kopfzeile z. B. **Wie wird die xApps-Architektur entworfen?** lautet, sollte der Text die Prinzipien und Methoden erläutern, die beim Entwerfen der xApps-Architektur verwendet werden.

Der Text kann Aufzählungen und nummerierte Listen im Markdown-Format enthalten. Andere Elemente, wie z. B. Links, werden in der Chat-Konversation möglicherweise nicht korrekt angezeigt.

#### Chunk-Metadaten

Metadaten sind zusätzliche Informationen, die einem Block zugeordnet sind
und ist im Input-Objekt unter 'input.knowledgeSearch.topK[0].chunkMetaData' zu finden.
Metadaten ermöglichen es Ihnen, kontextbezogene Details bereitzustellen, die das Verständnis oder die Interaktion des Benutzers mit dem Inhalt verbessern.

Metadaten werden in einem Schlüssel-Wert-Format dargestellt, das Vielseitigkeit bei der Art der Inhalte bietet, die Sie einbeziehen können.

Wenn Ihr Block z. B. das Thema "xApp-Architektur" behandelt,
Sie können Metadaten mit Links zu verwandten Dokumentations-URLs einfügen,
Bilder von Architekturdiagrammen oder zusätzliche detaillierte Informationen, die für eine begrenzte Anzahl von Benutzern von Interesse sein könnten.
Die Wiederverwendung solcher Informationen kann von Vorteil sein
Wenn Sie den Typ **Nur Suche** in der [Suchextraktausgabe](.. /flow-nodes/other-nodes/search-extract-output.md) Knoten.

Eine Metadateneinheit ist als Schlüssel-Wert-Paar strukturiert, das in Backticks eingeschlossen ist. 
Zum Beispiel:

'''Markdown
'Bild: https://docs.cognigy.com/ai/images/xApp/architecture.png'
'''

Allgemeine Metadaten können die folgenden Elemente enthalten:

- **URLs**. Um auf externe Quellen zu verlinken oder zusätzliches Lesematerial bereitzustellen.
-**Bilder**. Zur Veranschaulichung von Konzepten oder zur Bereitstellung visueller Hilfsmittel.
-**Videos**. So fügen Sie den Text mit Multimedia-Inhalten hinzu.
- **Referenzen.** Zum Hinzufügen von Quellen oder verwandten Artikeln zur weiteren Erkundung.

Sie können Ihre Elementtypen für Metadaten erstellen, z. B.
"Details: Für weitere Informationen wenden Sie sich bitte an unser Support-Team".

Weitere Informationen zu den Grenzwerten für Chunk-Metadaten finden Sie im Abschnitt [Einschränkungen](overview.md#limitations).

#### Beispiel

Das folgende Beispiel enthält zwei Blöcke.

'''Markdown
Was sind Anwendungsfälle von xApps?
Die Anwendungsfälle sind endlos, da xApps aufgrund der Tatsache, dass es sich im Wesentlichen um Micro-Web-Anwendungen handelt, unendlich flexibel sind. Drei mögliche Anwendungsfälle sind hier aufgeführt:
- Authentifizierung über Anmeldeinformationen: Mit xApps können Sie Benutzern die Authentifizierung mit verschiedenen Methoden wie E-Mail-Adressen, Benutzernummern oder anderen Identifikationsdetails ermöglichen. Benutzer können ihre Identität sicher verifizieren und Zugang zu bestimmten Diensten oder Informationen erhalten.
- Wählen Sie einen Flugsitzplatz: Mit xApps können Sie Benutzern eine Oberfläche anbieten, über die sie ihren bevorzugten Sitzplatz für ihren Flug auswählen können. Benutzer können die verfügbaren Sitzplätze anzeigen und den Sitzplatz ihrer Wahl auswählen, um ihr Reiseerlebnis zu verbessern.
- Standort freigeben: Mit xApps können Sie Benutzern erlauben, die Standortinformationen ihres Geräts freizugeben. Dieser Anwendungsfall kann in verschiedenen Szenarien nützlich sein, z. B. bei der Bereitstellung standortbezogener Dienste, der Nachverfolgung von Lieferungen oder der Suche nach Ressourcen in der Nähe.
'Internetadresse: https://docs.cognigy.com/ai/xApp/use-cases/'
  
Wie ist die xApps-Architektur aufgebaut?
Die xApp-Shell-Seite lädt ihre Ressourcen (HTML/CSS/JS), indem sie statische Dateien über HTTP/HTTPs 1.1-Anforderungen an service-static-files anfordert und eine WebSocket-Verbindung (über Socket.io) zu serviceapp-session-manager herstellt, um Informationen über xApp-Sitzungen abzurufen. Zu diesen Informationen gehört ein asynchrones Ereignis zum Initialisieren einer xApp-Sitzung, das eine eindeutige URL erstellt und angibt, welche xApp in einer bestimmten xApp-Sitzung angezeigt wird. Der Elastic Load Balancer hilft bei der Verteilung des eingehenden Datenverkehrs, während Traefik den Datenverkehr basierend auf bestimmten Anforderungen dynamisch an Backend-Server weiterleitet. Der serviceapp-session-manager aktualisiert den xApp-Sitzungsstatus in der App-Sitzungsdatenbank, und der WebSocket überträgt Daten an die Shell-Seite, die xApps lädt und Daten für das SDK bereitstellt.
'URL: https://docs.cognigy.com/ai/xApp/architecture/'
'Bild: https://docs.cognigy.com/ai/images/xApp/architecture.png'
'''

## Mehr Informationen

- [Wissens-KI-Übersicht](overview.md)
- [Suchextrakt-Ausgabeknoten](.. /flow-nodes/other-nodes/search-extract-output.md)