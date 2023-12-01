---
 title: "Gebietsschema wechseln" 
 slug: "switch-locale" 
 ausgeblendet: false 
---
# Gebietsschema wechseln

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/switch-locale.png" width="80%" />
</figure>

## Beschreibung<div class="divider"></div>Der Knoten **Switch Locale** wird verwendet, um zu einem alternativen [Locale](.. /.. /resources/manage/localization.md) während eines Gesprächs. Es ist üblich, diesen Knoten nach der Spracherkennung oder basierend auf der Region des Benutzers zu verwenden, um eine Änderung der Konversationssprache oder -struktur basierend auf einer Bewertung der Region oder der gesprochenen Sprache des Benutzers auszuführen. 

Ein Gebietsschema muss vorkonfiguriert sein, damit die Optionen ausgefüllt werden können, die im Dropdown-Menü Gebietsschema zur Auswahl stehen.

## Verwendung<div class="divider"></div>Um das Gebietsschema für die aktuelle Ausführung zu wechseln, muss ein [Think](think.md) Node nach dem Switch Locale Node verwendet werden. Mit dieser Funktion wird der aktuelle Flow erneut ausgelöst – das neue Gebietsschema wird anstelle des alten verwendet.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/switch-locale-usage.png" width="80%" />
</figure>

## Locale-Referenz-ID

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.8.0-blue.svg)] ({{config.site_url}})

Ab Version v4.8 kann Cognigy Script verwendet werden, um mithilfe der Gebietsschema-Referenz-ID zu einem anderen Gebietsschema zu wechseln. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/d22f5e3-Switch_Locale_example.svg" width="100%" />
  <figcaption>Wechseln des Gebietsschemas mit Cognigy Script</figcaption>
</figure>

Die Referenz-ID finden Sie in der **Lokalisierung** der Anwendung **Verwalten** in Cognigy.AI.

Klicken Sie auf die Schaltfläche "drei Punkte" auf der rechten Seite eines verfügbaren Gebietsschemas, um die entsprechende Referenz-ID zu kopieren. 
Öffnen Sie dann den Konfigurationseditor für den Switch Locale Node und geben Sie die Referenz-ID in das Feld **Locale ID** ein, wenn Cognigy Script aktiviert ist.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/cda3717-copy_reference_ID_00.svg" width="100%" />
  <figcaption>Kopieren der Gebietsschema-Referenz-ID</figcaption>
</figure>

!!! Hinweis "Weitere Informationen zur Lokalisierung"
    Weitere Informationen zum Erstellen mehrsprachiger und regionalspezifischer Bots finden Sie auf der [Lokalisierungsseite](.. /.. /resources/manage/localization.md).