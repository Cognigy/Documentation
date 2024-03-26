---
 Titel: "Erweiterungen" 
 slug: "Erweiterungen" 
 ausgeblendet: false 
---
# Erweiterungen

Erweiterungen sind eine Möglichkeit, den Cognigy Flow Editor um neue Nodes zu erweitern. Erweiterungen enthalten mehrere Flow-Knoten, die nach der Installation im Flow-Editor angezeigt werden.

## Erweiterungs-Marktplatz<div class="divider"></div>Eine Vielzahl von vorgefertigten Erweiterungen kann mit einem einzigen Klick aus dem Cognigy Extension Marketplace installiert werden, sofern konfiguriert.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/11976f3-Extension-Marketplace.PNG" width="100%" />
  <figcaption>Marktplatz für Erweiterungen</figcaption>
</figure>

- Wenn Sie eine Erweiterung aus dem Marketplace-Bereich auswählen, werden weitere Informationen angezeigt - ähnlich wie bei der Auswahl einer bereits installierten Erweiterung.
- Sie können die URL kopieren und in einem anderen Tab öffnen, auch beim Neuladen der Seite.
- Sie können über das Feld **Suchen** nach Erweiterungen suchen.
- Sie können installierte Erweiterungen deinstallieren.

Sie können die verfügbaren Marketplace-Erweiterungen auch online auf dem [Cognigy.AI Marketplace](https://www.cognigy.com/marketplace#/) durchsuchen.

## Entwickeln Sie eine benutzerdefinierte Erweiterung<div class="divider"></div>Cognigy ermöglicht es jedem, die Möglichkeiten von Cognigy.AI zu erweitern, indem er seine eigenen Erweiterungen entwickelt. Erweiterungen sind JavaScript- oder TypeScript-Module, die als Flow-Knoten innerhalb Cognigy.AI verfügbar gemacht werden können. Erweiterungen können für die Integration mit APIs von Drittanbietern, für die Ausführung komplexer Logik, für die Durchführung von Berechnungen mit langer Laufzeit oder für die Erstellung von Komfortknoten mit verschiedenen npm-Modulen verwendet werden.

Sehen Sie sich unsere Cognigy Sessions-Episode über Erweiterungen an, um einen technischen Einblick zu erhalten.<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">▶️</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360019893139-Cognigy-Sessions-Extensions" target="_blank">Technisches Video "Cognigy Extensions"</a>
      </div>
      <div class="callout-subtext">Sehen Sie sich diese Folge von Cognigy Sessions an, um einen technischen Einblick zu erhalten      </div>
   </div>
</blockquote>Wenn Sie sofort mit der Entwicklung von Erweiterungen beginnen möchten, lesen Sie unsere Dokumentation zu den ersten Schritten.<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon">📘</span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://support.cognigy.com/hc/en-us/articles/360016534459-Get-Started" target="_blank">Loslegen</a>
      </div>
      <div class="callout-subtext">Artikel im Cognigy Help Center      </div>
   </div>
</blockquote>Alle erforderlichen Ressourcen zum Erstellen und Hochladen der Erweiterung auf Cognigy.AI finden Sie in der Readme-Datei unseres @cognigy/extension-tools-Pakets.<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon-svg"><img src="https://img.icons8.com/color/96/000000/npm.png"/></span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://www.npmjs.com/package/@cognigy/extension-tools" target="_blank">@cognigy/Erweiterungs-Tools</a>
      </div>
      <div class="callout-subtext">Verweis auf das Cognigy-Repository auf GitHub      </div>
   </div>
</blockquote>Wenn Sie Beispiele für Erweiterungen sehen möchten, besuchen Sie unser GitHub-Repository.<blockquote class="callout callout_info" theme="📘">
    <span class="callout-icon-svg"><svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 16 16" width="60" height="60"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></span>
    <div class="callout-heading">
      <div class="callout-text">
         <a href="https://github.com/Cognigy/Extensions" target="_blank">Cognigy-Erweiterungen</a>
      </div>
      <div class="callout-subtext">Verweis auf das Cognigy-Repository auf GitHub      </div>
   </div>
</blockquote>!!! Tipp "Extension Development Suite"
    [Cognigy Hammer] (https://github.com/tgbv/cognigy-hammer/), erstellt von der [Cognigy-Gemeinschaft](.. /.. /.. /help/community.md) ist eine Entwicklungssuite für Erweiterungen, die für Cognigy.AI entwickelt wurde. Es bietet verschiedene Tools und Funktionen, die bei der Entwicklung von Cognigy Extensions helfen. Beachten Sie, dass Cognigy Hammer kein Produkt von Cognigy ist und nicht für den Unternehmenssupport qualifiziert ist.

### Behandeln von Zeitüberschreitungen in einer Erweiterung
Erweiterungen haben eine Standardzeitüberschreitung von 20 Sekunden, d. h., wenn die Zeit, die für den Abschluss der Erweiterung benötigt wird, mehr als 20 Sekunden beträgt, wird die Erweiterung beendet und ein Fehler an den Flow zurückgegeben. Die Flow-Ausführung wird fortgesetzt, und der Fehler kann unter "input.extensionError.message" aufgerufen werden.

!!! Warnung "Extension Timeout"
    Erweiterungen haben ein Standardtimeout von 20 Sekunden. Das Timeout kann bei dedizierten Cognigy.AI-Installationen geändert werden.

## Installieren einer benutzerdefinierten Erweiterung<div class="divider"></div>Sie können eine benutzerdefinierte Erweiterung aus dem Extension Marketplace installieren, indem Sie die Schaltfläche **Erweiterung hochladen** oder per Drag & Drop verwenden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/7cf0412-Installing-Custom-Extensions.PNG" width="100%" />
  <figcaption>Installieren einer benutzerdefinierten Erweiterung</figcaption>
</figure>

## Aktualisieren einer benutzerdefinierten Erweiterung<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.25.0-blue.svg)] ({{config.site_url}})

Sie können eine benutzerdefinierte Erweiterung aktualisieren, indem Sie die Erweiterung entweder im Abschnitt **Marketplace** oder im Abschnitt **Installiert** auswählen und auf **Aktualisieren** klicken. Wenn Sie im Abschnitt **Marketplace** eine Erweiterung auswählen, wird die installierte Erweiterung durch die neueste Version aus dem **Marketplace für Erweiterungen** ersetzt. Wenn Sie die Erweiterung im Abschnitt **Installiert** auswählen, werden Sie aufgefordert, die aktualisierte Erweiterung hochzuladen.

[Vertrauenswürdige Erweiterungen] (#make-an-extension-trusted) kann nur von Administratoren oder Mitgliedern mit der Projektrolle "extension_trust_admin" aktualisiert werden.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/update-extension-package.png" width="100%" />
  <figcaption>Aktualisieren einer benutzerdefinierten Erweiterung</figcaption>
</figure>

## Veröffentlichen einer Erweiterung<div class="divider"></div>Wenn Sie möchten, dass wir Ihre entwickelte Erweiterung genehmigen und auf dem Extension Marketplace veröffentlichen, befolgen Sie das Genehmigungsverfahren, das in der Readme-Datei unseres [GitHub-Repositorys](https://github.com/Cognigy/Extensions) erläutert wird.

## Erweiterungs-Performance<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.1.6-blue.svg)] ({{config.site_url}})

Cognigy.AI betrachtet den Code innerhalb einer Erweiterung als "nicht vertrauenswürdig", was bedeutet, dass der Code standardmäßig in einer sicheren und zusätzlich gehärteten Umgebung ausgeführt wird. Es gibt einen gewissen Overhead beim Bootstrapping dieser sicheren Umgebung pro Ausführung - daher werden Flow Nodes von Extensions in der Regel langsamer ausgeführt als unsere eingebauten (z.B. unser "Say"-Node).

Mit Cognigy.AI v4.1.6 haben wir die Möglichkeit eingeführt, dem Code einer Extension zu "vertrauen", indem wir Kunden entscheiden lassen, ob sie den Code in einer sicheren Umgebung oder in der normalen Ausführungsumgebung ausführen möchten, in der unsere eigenen Flow Nodes laufen.

!!! Warnung "Verfügbarkeit von Funktionen"
    Diese Funktion ist nur für unsere On-Premise-Kunden oder dedizierte SaaS-Kunden mit eigener Cognigy.AI Installation verfügbar.

Um die Funktion zu aktivieren, kann die folgende zusätzliche Umgebungsvariable verwendet werden:

'''txt
FEATURE_ALLOW_TRUSTED_CODE_CONFIGURATION=wahr
'''

Unsere Kunden erreichen dies in der Regel, indem sie ihrer "config-map_patch.yaml" im "Kubernetes"-Repository, in dem sich die Manifestdateien für die Bereitstellung befinden, Folgendes hinzufügen:

'''YML
- op: hinzufügen
  Pfad: /data/FEATURE_ALLOW_TRUSTED_CODE_CONFIGURATION
  Wert: "true"
'''

Wenn Sie die Funktion aktivieren, ändert sich nicht automatisch etwas. Sobald die Funktion aktiviert wurde, kann ein zusätzlicher API-Endpunkt (siehe unsere RESTful API-Dokumentation) verwendet werden, um die Eigenschaft "trustedCode" einer Erweiterung zu aktualisieren.

!!! Gefahr "Sicherheitsüberlegungen"
    Es gibt einen Grund, warum Erweiterungen und ihr Code standardmäßig in der sicheren Umgebung ausgeführt werden! Vertrauen Sie niemals dem Code einer Erweiterung, ohne den darin enthaltenen Code ordnungsgemäß zu überprüfen! Erweiterungen können externe Pakete von NPM verwenden, die schädlichen Code und Routinen enthalten können - sobald eine Erweiterung im "nativen Kontext" ausgeführt wird, kann sie möglicherweise sensible Informationen stehlen. Stellen Sie sicher, dass Sie sich dieser Auswirkungen bewusst sind, bevor Sie den Ausführungskontext ändern.

### Eine Erweiterung als vertrauenswürdig einstufen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.46-blue.svg)] (.. /.. /.. /release-notes/4.46.md)

Alle vertrauenswürdigen Erweiterungen sind mit dem speziellen Symbol gekennzeichnet! [trust-extensions] (.. /images/icons/trusted-extension.svg).

Sie können Ihre hochgeladenen Erweiterungen als vertrauenswürdig einstufen. Es kann sich um eine vorinstallierte Erweiterung oder eine benutzerdefinierte Erweiterung handeln. Damit Benutzer Erweiterungen als vertrauenswürdig einstufen und aktualisieren können, muss ein Administrator die Rolle "extension_trust_admin" im [Projekt des virtuellen Agenten](members.md) hinzufügen. Der Projektadministrator hat diese Rolle standardmäßig.

Gehen Sie folgendermaßen vor, um eine Erweiterung als vertrauenswürdig zu markieren:

1. Installieren Sie auf der Seite "Erweiterungen" die vorhandene Erweiterung aus dem Marketplace oder fügen Sie eine benutzerdefinierte hinzu.
2. Öffnen Sie den Bereich Erweiterung, indem Sie auf die Karte Erweiterung klicken.
3. Klicken Sie im rechten Bereich auf ! [vertikale-Auslassungspunkte] (.. /.. /.. /assets/icons/vertical-ellipsis.svg), dann **Trust Extension**.
Die Erweiterung wird als vertrauenswürdig markiert.

Um eine Erweiterung als nicht vertrauenswürdig zu markieren, klicken Sie auf ! [vertikale-Auslassungspunkte] (.. /.. /assets/icons/vertical-ellipsis.svg), dann **Untrust Extension**.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/trust-extension.png" width="100%" />
  <figcaption> Eine Erweiterung als vertrauenswürdig einstufen</figcaption>
</figure>

## Erweiterung organisationsweit einbettbar<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.8.0-blue.svg)] ({{config.site_url}})

Mit Cognigy.AI v4.8 haben wir die Möglichkeit für On-Premise-Kunden eingeführt, bestimmte Erweiterungen organisationsweit einzubetten.

Um die Funktion zu aktivieren, kann die folgende zusätzliche Umgebungsvariable verwendet werden, um die GitHub-Datei **config.map** zu aktualisieren: 

**Umgebungsvariable für organisationsweite Erweiterungen**
'''txt
FEATURE_ADDITIONAL_SYSTEM_WIDE_EXTENSIONS_PATH
'''

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.8.0-blue.svg)] ({{config.site_url}})

## Cache-Erweiterungen im lokalen Verzeichnis<div class="divider"></div>Ab Version v4.8 können Erweiterungen im lokalen Verzeichnis zwischengespeichert werden, was die Ladeleistung verbessert. 
Der Pfad zu diesem Cache wird zusammen mit einem Zeitstempel in einer Erweiterungszuordnung gespeichert.

Wenn die maximale Verzeichnisgröße von einer Erweiterung überschritten wird, werden die letzten X-Erweiterungen (derzeit 10 - editierbar über eine Umgebungsvariable) sowohl aus der Erweiterungszuordnung als auch aus dem lokalen Dateisystem gelöscht.

Bei Bedarf können Sie das Verhalten anpassen, indem Sie Umgebungsvariablen hinzufügen und konfigurieren:

'''txt
MAX_EXTENSIONS_CACHE_DIR_SIZE_IN_MB
'''

Der Standardwert von 'MAX_EXTENSIONS_CACHE_DIR_SIZE_IN_MB' ist 512 MB.

Der Cache befindet sich innerhalb des [Kubernetes-Pods](https://kubernetes.io/docs/concepts/workloads/pods/) der Dienstausführung. Es macht also keinen Unterschied, ob Sie On-Premises oder Testversionen, Apps usw. verarbeiten.

'''txt
EXCEED_DIR_SIZE_AMOUNT_TO_DROP_FROM_MAP
'''

## Dynamische Felder<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.9.0-blue.svg)] ({{config.site_url}})

Cognigy.AI v4.9.0 bietet neue Funktionen, die es unseren Kunden ermöglichen, ein neues dynamisches Auswahlfeld als neuen Feldtyp in ihren Erweiterungen zu verwenden. Die Funktion kann verwendet werden, um den Inhalt eines Auswahlfelds dynamisch abzurufen, z. B. durch einen externen API-Aufruf.

## Lokalisierung für Erweiterungen<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.12.0-blue.svg)] ({{config.site_url}})

Cognigy.AI v4.12.0 bietet neue Funktionen, mit denen Erweiterungsersteller optional lokalisierte Variationen für benutzerseitige Texte einschließen können, z. B. Standardknotenbeschriftungen oder Knotenfeldbeschreibungen.
Wenn konfiguriert, wird Benutzern die lokalisierte Version für die von ihnen ausgewählte Benutzeroberflächensprache angezeigt.

Diese Lokalisierungsoptionen sind optional und können bei Bedarf Text für Text konfiguriert werden.
Wenn keine Lokalisierung konfiguriert wurde, die der vom Benutzer ausgewählten Sprache der Benutzeroberfläche entspricht, wird dem Benutzer eine (obligatorische) Standardoption angezeigt.

Entwickler können der [Localization for Extensions Documentation](https://www.npmjs.com/package/@cognigy/extension-tools#extension-localization) folgen, um loszulegen.