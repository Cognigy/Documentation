---
 Titel: "Flows" 
 Schnecke: "fließt" 
 ausgeblendet: false 
---
# Flüsse 

## Diagramm

**Flows** bieten eine **visuelle Darstellung eines potenziellen Dialogs** in einer benutzerfreundlichen Oberfläche. 
Flows bestehen aus einzelnen **Nodes** mit unterschiedlichen Funktionalitäten, die von der Generierung der Ausgabe bis zum Sammeln von Back-End-Informationen reichen, und ausgeführt werden, sobald ein [Input]({{config.site_url}}ai/tools/interaction-panel/input/)-Objekt über einen [Endpoint]({{config.site_url}}ai/resources/deploy/endpoints/) eingeht.

!!! Tipp "So erstellen Sie einen neuen Flow"
    Um Ihren ersten Flow zu erstellen, gehen Sie zu [Flow entwerfen und Nachricht hinzufügen](https://support.cognigy.com/hc/en-us/articles/360014524180-Design-a-Flow-and-add-a-Message) im Cognigy Help Center.<br>
<img src="{{config.site_url}}ai/resources/images/e1151fe-flow_example_detail.PNG" width="100%" style="margin-bottom: 5px">Flows werden von oben nach unten ausgeführt und verwenden ein logikbasiertes System, um zu bestimmen, welche Knoten ausgeführt werden sollen. Der Ausführungspfad wird durch einen hervorgehobenen grünen Pfad angezeigt. 

<img src="{{config.site_url}}ai/resources/images/ec03ff1-flow_executed_detail.PNG" width="100%" style="margin-bottom: 5px">

## Flow-Knoten<div class="divider"></div>**Flow-Knoten** können verwendet werden, um einem Flow Interaktivität hinzuzufügen. Sie können hinzugefügt werden, indem Sie auf das **+**-Symbol zwischen zwei vorhandenen Knoten klicken. Es gibt viele Arten von Nodes, von **Question Nodes** bis hin zu **Marketing Nodes**. 

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/Node-Create-Menu.png" width="100%" />
</figure>

Weitere Informationen zu den verschiedenen Arten von **Knoten** finden Sie unter [**Flow Nodes**]({{config.site_url}}ai/flow-nodes/flow-nodes-overview/).

## Einstiegspunkte<div class="divider"></div>Die Flow-Ausführung beginnt in der Regel oben mit dem grünen **Startknoten**. Hier findet die [NLU]({{config.site_url}}ai/nlu/nlu-overview/overview/) statt und die NLU-Ergebnisse werden anschließend im Objekt [Input]({{config.site_url}}ai/tools/interaction-panel/input/) veröffentlicht.  Ein Flow wird bei jeder neuen Eingabe ausgelöst und beginnt am **Startknoten**, sofern nicht anders angegeben.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/620d8e2-nodes-start.jpg" width="100%" />
</figure>

Der **Einstiegspunkt** kann sich je nach Status der Konversation ändern. Es wird durch ein grünes Dreieck neben einem bestimmten Flow angezeigt und zeigt an, wo das nächste [**Input**]({{config.site_url}}ai/tools/interaction-panel/input/)-Objekt (Benutzereingabe) in den Flow eintreten würde. Falls ein Frageknoten ausgelöst wurde, verschiebt sich der Einstiegspunkt zu diesem bestimmten Knoten, wie im folgenden Screenshot zu sehen ist.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/resources/images/9c4cb06-nodes-question.jpg" width="100%" />
</figure>

In einigen Fällen gibt es **mehrere Einstiegspunkte**. Dies kann der Fall sein, wenn eine optionale Frage ausgelöst wurde oder wenn ein bestimmter **Absichts-Einstiegspunkt** explizit festgelegt wurde.

## NLU<div class="divider"></div>Zusätzlich zum visuellen **Diagramm** enthalten Flows auch eine Registerkarte mit dem Namen **NLU**. Dieser Abschnitt führt zum **Natural Language Understanding**, das für diesen speziellen Flow relevant ist.

Weitere Informationen finden Sie unter [NLU-Übersicht]({{config.site_url}}ai/nlu/nlu-overview/overview/).

## Einstellungen<div class="divider"></div>Bestimmte Einstellungen können pro Flow konfiguriert werden. 

#### Flow-Konfiguration
Informationen zu den Flow-Konfigurationseinstellungen finden Sie hier: [Flow-Einstellungen]({{config.site_url}}ai/resources/manage/settings/#general-flow-logic).

#### Standardkontext
Kann als Ausgangspunkt für das Context-Objekt des Flows verwendet werden. Weitere Informationen finden Sie unter [Context]({{config.site_url}}ai/tools/interaction-panel/context/).

#### Gebietsschema-Einstellungen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.32.0-blue.svg)] ({{config.site_url}})

Aktivieren Sie diese Einstellung, um das Modell [Intent]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) aus dem Gebietsschema [fallback]({{config.site_url}}ai/resources/manage/localization/) zu erben. Die Registerkarte "Gebietsschemaeinstellungen" ist für das Fallback-Gebietsschema deaktiviert und für alternative Gebietsschemas aktiviert. Standardmäßig ist der Schalter **Intent-Modell vom Fallbackgebietsschema erben** deaktiviert. Nach der Aktivierung werden [Trainingsindikator]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) auf der Intents-Seite und das Fehler-Badge auf der Registerkarte NLU ausgeblendet, ebenso wie die Schaltfläche [Build Model]({{config.site_url}}ai/nlu/nlu-overview/ml-intents/) in Einstellungen, Diagramm und NLU ist deaktiviert.

<img src="{{config.site_url}}ai/images/locale-settings.png" width="100%" />

### Umschalten auf andere Flows

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.10.0-blue.svg)] ({{config.site_url}})<div class="divider"></div>Mit Cognigy.AI 4.10.0 wurde das Umschalten zwischen Flows mit unterschiedlichen Einstellungen und Intents wie folgt verbessert:

- Wenn Sie sich auf der Registerkarte **NLU** von Flow A befinden und zu Flow B wechseln, befinden Sie sich weiterhin auf der Registerkarte NLU.
- Wenn Sie sich auf der Registerkarte **Einstellungen** von Flow A befinden und zu Flow B wechseln, befinden Sie sich weiterhin auf der Registerkarte Einstellungen.

## Generative KI

Um die generative KI-Technologie zum Erstellen eines neuen Flows mit vorkonfigurierten Knoten basierend auf Ihrem Szenario zu verwenden, lesen Sie die [Generative KI](.. /.. /generative-ai.md#generate-flows) Artikel.