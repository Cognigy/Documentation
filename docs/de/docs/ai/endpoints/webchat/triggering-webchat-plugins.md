---
 title: "Auslösen von Webchat-Plugins" 
 Slug: "Auslösende-Webchat-Plugins" 
 ausgeblendet: false 
---
# Webchat-Plugins auslösen

## Beschreibung<div class="divider"></div>Viele Plugins, z.B. solche, die einen String als 'match'-Wert verwenden, werden nur dann ausgelöst, wenn eine Nachricht bestimmte 'Daten' enthält.

Nehmen wir als Beispiel an, wir haben ein Plugin, das Bilder im Chat anzeigt und die URL aus den Daten der Nachricht nimmt.
Das Feld 'match' ist auf 'inline-image' gesetzt und liest die Bild-URL aus 'message.data._plugin.url'.
Um das Plugin auszulösen, müssten wir eine Nachricht senden, in der das Feld "Daten" wie folgt eingerichtet ist:

'''JSON
{
  "_plugin": {
    "type": "Inline-Bild",
    "url": "https://placekitten.com/256/256"
  }
}
'''

Wenn der Webchat diese Nachricht erhält, löst er das 'inline-image'-Plugin aus, weil 'message.data._plugin.type === 'inline-image'' ist. Das Plugin selbst liest dann die URL aus 'message.data._plugin.url' aus.

## Verwendung innerhalb regulärer Flow-Nodes<div class="divider"></div>Mit regulären Flow-Knoten (z. B.dem Say-Knoten) können Sie das Feld "data" verwenden, um eine Datennutzlast an eine Nachricht anzuhängen. Das Datenfeld hilft Ihnen bei der Syntaxhervorhebung, um strukturelle Fehler zu vermeiden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/f123a42-imagePlugin.PNG" width="100%" />
</figure>

## Verwendung innerhalb von Code-Nodes<div class="divider"></div>Wenn Sie es vorziehen, einen Code Node zum Senden einer Nachricht zu verwenden, können Sie die strukturierte Nutzlast "data" als zweiten Parameter an die Methode "actions.output" übergeben.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/7bb9a4b-codePlugin.PNG" width="100%" />
</figure>

## Verwendung innerhalb von Erweiterungen<div class="divider"></div>Um die beste Benutzererfahrung für die Redakteure einer Konversations-KI zu erhalten, können Sie eine benutzerdefinierte [Erweiterung]({{config.site_url}}ai/resources/manage/extensions/) erstellen, die eine Nachricht sendet, die das Webchat-Plugin auslöst und alles außer den erforderlichen Parametern abstrahiert.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/f123a42-imagePlugin.PNG" width="100%" />
</figure>

**Beispiel für ein benutzerdefiniertes Modul**
'''JavaScript
/**
 * Sendet ein Bild per Webchat an den Benutzer
 * @arg {CognigyScript} 'url' Die URL des Bildes
 */
const sendInlineImage = asynchron (Eingabe, Argumente) => {
    const { url } = Argumente;

Wenn keine URL festgelegt ist
    if (!url) {
        nichts tun
        Return-Eingang;
    }

Senden Sie eine Nachricht, die das Plugin 'inline-image' mit einer URL auslöst
    input.actions.output('', {
        _plugin: {
            Typ: "Inline-Bild",
            url: "https://placekitten.com/256/256"
        }
    });

Return-Eingang;
}

'''