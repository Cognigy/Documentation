---
 Titel: "Amazon Alexa" 
 Schnecke: "Amazon-Alexa" 
 ausgeblendet: false 
---
# Amazon Alexa

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/cb3fa30-EP_alexa.png" width="100%" />
</figure>

Mit dem **Alexa**-Endpunkt können Sie Ihren Amazon Alexa Skill mit einem **Agenten** verbinden. Amazon Alexa Skills ermöglichen die Benutzerinteraktion per Sprache mit potenzieller visueller Unterstützung.

!!! Warnung
    Der Alexa Endpoint verwendet den Alexa NLU Connector. Weitere Informationen finden Sie auf der Seite [NLU-Konnektoren]({{config.site_url}}/ai/resources/build/nlu-connectors/). Wenn Sie Amazon Alexa mit Cognigy verwenden, wird die gesamte NLU von Amazon durchgeführt. **Es ist NICHT möglich, die Cognigy NLU zu verwenden**.

Amazon übergibt nur den Intent-Namen an den Flow, nicht die eigentliche Benutzereingabe! Daher funktionieren alle Knoten, die Bedingungen verwenden, die auf Benutzereingaben basieren (z. B. if-Nodes und Regelabsichten), nicht wie vorgesehen.

## Generische Endpunkteinstellungen<div class="divider"></div>Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte]({{config.site_url}}/ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}/ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings)  

## Kanalspezifische Einstellungen<div class="divider"></div>Im Dropdown-Menü **Alexa-Einstellungen** erhalten Cognigy.AI die Anmeldeinformationen, um eine Verbindung mit einem **Amazon Alexa Skill** herzustellen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/7f18dd3-alexaMenu.PNG" width="100%" />
</figure>

### Alexa-Slots neu parsen

Aktivieren Sie diesen Schalter, damit die von Alexa gefundenen Slots an Cognigy.AI übergeben und von der Cognigy NLU verarbeitet werden können.

## Bereitstellung

### Geschicklichkeit

Hier können Sie sich direkt in Ihr Amazon-Konto einloggen, das Zugriff auf Ihre Alexa-Skills hat. Sie können sich auch über die Seite [Mein Profil]({{config.site_url}}ai/tools/user-menu/my-profile/) bei Amazon anmelden. Sobald Sie angemeldet sind, können Sie den **Alexa Skill** auswählen, den Sie mit Ihrem Cognigy.AI Endpunkt verbinden möchten.

### Bereitstellen

Nachdem ein Skill ausgewählt wurde, klicken Sie auf die Schaltfläche **DEPLOY**, um Ihren Skill so zu konfigurieren, dass er diesen Endpunkt verwendet, wenn er aufgerufen wird. Der Vorgang kann auch manuell durchgeführt werden, besuchen Sie unser [Hilfe-Center](https://support.cognigy.com/hc/en-us/articles/360016192979) für weitere Informationen.

!!! Hinweis "Hilfe-Center"
    Ausführlichere Informationen zum Einrichten eines **Alexa**-Endpunkts finden Sie in unseren Hilfe-Center-Artikeln [**hier**](https://support.cognigy.com/hc/en-us/articles/360016192979).

## Mehr Informationen

- [HelpCenter: Einführung in Amazon Alexa](https://support.cognigy.com/hc/en-us/articles/360016192979)
- [HelpCenter: Amazon Alexa-Bereitstellung](https://support.cognigy.com/hc/en-us/articles/360016193099-Amazon-Alexa-Deploy-an-Endpoint)
- [HelpCenter: Verknüpfen von Amazon Alexa-Konten ](https://support.cognigy.com/hc/en-us/articles/360016153600-Amazon-Alexa-Account-Linking)