---
title: "Erweitert: Erstellen eines benutzerdefinierten xApp-Knotens"
slug: "benutzerdefinierter-xApp-Knoten"
Ausgeblendet: Wahr
---

# Erweitert: Erstellen eines benutzerdefinierten xApp-Knotens

Wenn Sie mehr Kontrolle und Flexibilität benötigen, als die **xApp: Adaptive Karte anzeigen** oder **xApp: HTML anzeigen**
können Sie Ihren eigenen benutzerdefinierten Node erstellen.

Um eine benutzerdefinierte xApp-Erweiterung zu erstellen, müssen Sie eine [Erweiterung](.. /.. /resources/manage/extensions.md#develop-a-custom-extension) mit einer [Vorlage](https://github.com/Cognigy/Extensions/tree/master/docs/example), die im Cognigy-Repository auf GitHub bereitgestellt wird, von Grund auf neu erstellen. Im Folgenden finden Sie den Codeausschnitt, den Sie innerhalb der Erweiterung verwenden können.
Mit diesem Codeausschnitt können Sie einen benutzerdefinierten Knoten erstellen, der Textinhalte anzeigt und es Ihnen ermöglicht, das Dialogfeld abzubrechen oder fortzusetzen.

'''js
export const xappDialogNode = createNodeDescriptor({ 
  Typ: "xapp-dialog",
  Felder: [
    {
      key: "Inhalt",
      label: "Inhalt",
      Typ: "cognigyText",
    },
  ],
  Funktion: (params) => {
    const { cognigy, config } = params;
    const { content } = config wie beliebig;

Über den HTML-Code:
    - Laden Sie das "App Page SDK" aus /sdk/app-page-sdk.js, das für "generische HTML"-Apps immer verfügbar ist. Es ist nicht erforderlich, den SDK-Code in den HTML-Inhalt aufzunehmen.
    - Nach der Zeile "App-Seiten-SDK" können Sie das SDK global verwenden, da es jetzt initialisiert ist.
    - Verwenden Sie einfache "onclick"-Handler für die Schaltflächen, um ein Ergebnis aus der App zu senden, indem Sie "SDK.submit({ action: '<action-description>' })" aufrufen.
    - Wenn Sie auf eine der Schaltflächen klicken, wird die App geschlossen und eine "Inject"-Meldung ausgelöst. Der Wert von "input.data._cognigy._xapp.result" entspricht den Parametern, die Sie in "SDK.submit" angegeben haben ({ action: '<action-description>' }).
    const getDialogHtml = (Inhalt) => '<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="/sdk/app-page-sdk.js"></script>
    </head>
    <body>
        <p>${Inhalt}</p>
        <button type="button" onclick="SDK.submit({ action: 'continue' })">fortsetzen</button>
        <button type="button" onclick="SDK.submit({ action: 'cancel' })">Abbrechen</button>
    </body>
</html>';
    @ts-ignorieren
    cognigy.api.setAppState("generic-html", {
      html: getDialogHtml(Inhalt),
    });
  },
});
'''

Verwenden Sie die [setAppState-API](.. /api.md) mit einer "App-Vorlagen-URL", die auf "generic-html" und "App-Vorlagendaten" festgelegt ist, die den generierten HTML-Code enthalten.

Nach der Implementierung wird der generierte HTML-Code auf dem App-Bildschirm angezeigt, ähnlich wie der **xApp: Show HTML** Node. Dieser Ansatz ermöglicht es Ihnen, einen bestimmten Teil der Seite über Knotenfelder zu bearbeiten, anstatt den gesamten Seiteninhalt zu ändern. Dieser optimierte Prozess konzentriert sich auf die notwendigen Änderungen für den Dialog.

## Mehr Informationen

- [xApp-Knoten](.. /.. /flow-nodes/xApp/overview.md)
- [Erstellen einer xApp](overview.md)
- [xApps](.. /overview.md)</action-description></action-description>