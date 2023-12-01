---
 title: "xApp: HTML anzeigen" 
 slug: "Set-HTML-xApp-State" 
 ausgeblendet: false 
---

# xApp: HTML anzeigen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/xApp/set-html-xApp-state.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Die xApp-Seite kann durch Bereitstellen von benutzerdefiniertem HTML-Code erstellt werden.

{! _includes/ai/xApp/custom-node.md !}

### Inhalt 

Sie können entweder ein HTML-Dokument oder nur einen HTML-Text bereitstellen. Sobald dieser Node ausgeführt wird, wird diese xApp-Seite in der xApp-Sitzung angezeigt.

Innerhalb des HTML-Codes können Sie über eine globale "SDK"-Variable auf das xApp Page SDK zugreifen.
Um ein Ergebnis zurück an den Flow zu senden, können Sie 'SDK.submit({ name: "John" });' aufrufen.
Bei den übermittelten Nutzlasten muss es sich um serialisierbare JSON-Objekte handeln.

Sie können die Funktion "Senden" verwenden. Ein Beispiel für eine Schaltfläche, die beim Klicken gesendet wird, wäre das folgende:
'<button type="button" onclick="SDK.submit({ variant: 'button1' })">Geschmack 1</button>'.

Um übermittelte Daten anzuzeigen, verwenden Sie den Bereich "Interaktion". Sie können auf die übermittelten Daten im Objekt "data" zugreifen, indem Sie auf **INFO > Eingabe** klicken, oder im Chat, indem Sie einen Say-Knoten hinzufügen und oder <code>Submit payload: &lcub;&lcub;JSON.stringify(ci.data)&rcub;&rcub;</code>angeben.<code>Submit payload: &lcub;&lcub;JSON.stringify(input.data)&rcub;&rcub;</code>

Um aus dem HTML-Code heraus auf Sitzungsdaten zuzugreifen, verwenden Sie CognigyScript '{{"{{ JSON.stringify(cc.someContextKey) }}"}}'.

### Warteverhalten

Um auf eine Benutzereingabe zu warten, z. B. wenn der Benutzer auf der Bestellseite auf "Senden" klickt, aktivieren Sie die Option **Warteverhalten**.
Sie können das Eingabeergebnis im Context speichern und die Daten in den anderen Nodes verwenden.

### xApp-Seiten-SDK

Wenn die xApp-Seite (oder eine generische HTML-xApp) in Cognigy gehostet wird, kann sie das xApp-Seiten-SDK über eine feste URL laden:
 ''<script src="”/sdk/app-page-sdk.js”"></script>.
Durch das Laden dieser Datei wird das xApp Page SDK als globale Instanz mit dem Namen "SDK" verfügbar gemacht.
Um auf die Methoden zuzugreifen, rufen Sie "SDK.someExampleMethod()" in Ihrem Code auf, nachdem Sie die SDK-Datei geladen haben. Beachten Sie, dass der SDK-Code nicht asynchron geladen wird.

| Funktion | Verwendung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  ---------------------------------------------------------------------------------------|
| 'SDK.getAppTemplateData():P romise<unknown>' | Gibt die xApp-Vorlagendaten zurück, die dieser xApp-Seite zugeordnet sind.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 'SDK.submit(result: Object):P romise<void>'  | Sendet das bereitgestellte "result"-Objekt an den Flow. Es muss sich um ein serialisierbares JSON-Objekt handeln.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 'SDK.getCustomReadyHandler():Funktion' | Gibt einen benutzerdefinierten Bereitschaftszustandshandler zurück. Standardmäßig ist die xApp-Seite bereit, sobald das Dokument vollständig geladen ist. <br>  Wenn Sie zusätzliche Inhalte abrufen möchten, bevor Sie die Seite anzeigen, können Sie das "ready"-Ereignis überschreiben, indem Sie einen benutzerdefinierten "ready"-Handler abrufen und ihn aufrufen, sobald Ihre xApp-Seite manuell bereit ist. <br> Dem Endbenutzer wird der xApp-Ladebildschirm auf der Shell-Seite angezeigt. <br> Hinweis: Wenn das Laden der xApp-Seite länger als 10 Sekunden dauert, wird die xApp als "Fehler beim Laden" behandelt, ohne dass eine Wiederherstellung möglich ist. |

## Mehr Informationen

- [xApps](.. /.. /xApp/overview.md)
- [xApp-Knoten](overview.md)
- [xApp: Init-Sitzung](init-xApp-session.md)
- [xApp: Sitzungs-PIN abrufen](get-xApp-session-PIN.md)
- [xApp: Adaptive Karte anzeigen](set-AdaptiveCard-xApp-state.md)</void></unknown>