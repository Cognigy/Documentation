---
 Titel: "Cognigy Webchat" 
 Schnecke: "Webchat" 
 ausgeblendet: false 
---
# Cognigy Webchat

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/532e54a-EP_webchat.png" width="100%" />
</figure>

Der Cognigy Webchat ist ein leistungsstarkes Tool für Kunden, die eine Conversational AI in ihre eigenen Websites implementieren oder einen Bot für schnelle Demonstrationen präsentieren möchten.

Der Webchat kann bei Verwendung mit Cognigy kostenlos genutzt werden und steht für [Download auf GitHub](https://github.com/Cognigy/WebchatWidget/releases/latest) zur Verfügung.

## Eigenschaften

<div class="divider"></div>

Neben dem Senden und Empfangen von normalen Textnachrichten kann der Webchat auch Inhalte präsentieren und interaktive Eingaben auf verschiedene Weise bereitstellen, um die Benutzererfahrung zu verbessern. Lesen Sie mehr darüber in unserer Dokumentation [Webchat-Funktionen]({{config.site_url}}ai/endpoints/webchat/webchat-features/). 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/76766ec-Screenshot_from_2019-12-02_14-32-33.png" width="100%" />
  <figcaption>Der Cognigy Webchat rendert eine Galerie-Vorlage</figcaption>
</figure>

## Plugins
<div class="divider"></div>
Durch das Laden zusätzlicher Plugins kann der Cognigy Webchat um zusätzliche Funktionen erweitert werden, um z.B. Endbenutzern spezielle Eingabemethoden zu ermöglichen oder Nachrichten ausdrucksstark anzuzeigen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/138b697-google-maps-Webchat.png" width="100%" />
  <figcaption>Beispiel für ein Webchat-Plugin, das ein Google Maps-Diagramm anzeigt.</figcaption>
</figure>

Eine [Sammlung von Webchat-Plugins](https://github.com/Cognigy/WebchatPlugins/tree/master/plugins) sowie eine [Dokumentation zum Schreiben eines eigenen Webchat-Plugins](https://github.com/Cognigy/WebchatPlugins) finden Sie in unserem GitHub-Repository für Webchat-Plugins.

Um zu erfahren, wie Sie Webchat-Plugins auf Ihrer Website einbetten können, werfen Sie einen Blick auf den Abschnitt ["Verwendung von Webchat-Plugins" in unserer Einbettungsanleitung](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding/#using-webchat-plugins).

Anweisungen zum Arbeiten mit Webchat-Plugins aus Cognigy heraus finden Sie in unserem Leitfaden zum Auslösen von Webchat-Plugins]({{config.site_url}}ai/endpoints/webchat/triggering-webchat-plugins/).

## Einbetten

<div class="divider"></div>

**Einbetten mithilfe von GitHub-Anweisungen**

<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon-svg"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" width="60" height="60"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://github.com/Cognigy/WebchatWidget/blob/master/docs/README.md" target="_blank">Cognigy/WebchatWidget</a>
      </div>
      <div class="callout-subtext">Verweis auf das Cognigy-Repository auf GitHub      </div>
   </div>
</blockquote>

Wenn Sie einen Webchat-Endpunkt in Cognigy eingerichtet haben, können Sie den [Einbettungsanweisungen auf GitHub](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md) folgen, um zu sehen, wie Sie den Webchat auf Ihrer Website implementieren können.

Es enthält auch eine ausdrucksstarke [technische Dokumentation](https://github.com/Cognigy/WebchatWidget/tree/master/docs) mit Beispielen für Integratoren, die Ihnen helfen können, eine nahtlose und leistungsstarke Integration in Ihre Website zu erstellen.

**Einbetten von HTML-Code im Endpunkt-Editor**

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.9.0-blue.svg)] ({{config.site_url}})

Ab Version 4.9 fügt Cognigy.AI der Webchat-Endpunktkonfiguration einen Formularabschnitt hinzu, um Benutzern einbettungsfähigen Code zur Verfügung zu stellen.
Wenn Sie auf den Link **Einbettungsdokumentation öffnen** unterhalb des Einbettungsfelds klicken, gelangen Sie zur [GitHub Webchat Widget Embedding Documentation](https://github.com/Cognigy/WebchatWidget/blob/master/docs/embedding.md) mit detaillierten Spezifikationen und Beispielen.

Wenn Sie mit der Maus über das Codefeld fahren, wird eine Schaltfläche angezeigt, mit der Sie den Code in die Zwischenablage kopieren können. 

Das macht Ihre Webchat-Konfiguration für Ihre eigenen Zwecke jetzt viel einfacher.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/22b21b7-HTML_embed_code_field_in_Webchat_endpoint_configuration_2.svg" width="100%" />
  <figcaption>HTML-Code-Einbettungsfeld</figcaption>
</figure>

!!! Notiz "Notiz"
    Der Einbettungscode lädt einfach den Webchat mit dem richtigen konfigurierten Endpunkt unter Verwendung der neuesten Version. 

## Mehr Informationen

- [Bereitstellen eines Webchat-Endpunkts]({{config.site_url}}ai/endpoints/webchat/deploy-webchat-endpoint/)
- [Webchat-Funktionen ]({{config.site_url}}ai/endpoints/webchat/webchat-features/)
- [Auslösen von Webchat-Plugins ]({{config.site_url}}ai/endpoints/webchat/triggering-webchat-plugins/)
- [Integrierte Demo-Seite]({{config.site_url}}ai/endpoints/webchat/integrated-demo-page/)