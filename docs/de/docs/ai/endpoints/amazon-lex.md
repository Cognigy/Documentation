---
Titel: "Amazon Lex" 
Schnecke: "Amazon-Lex" 
ausgeblendet: false 
---

# Amazon Lex

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/28475-amazon-lex-icon.jpg" width="50%" />
</figure>

Mit dem **Amazon Lex-Endpunkt** können Sie Ihre Amazon Lex-Bots mit Cognigy.AI verbinden.

Dies wird durch die Verwendung einer Lambda-Funktion mit Ihren Lex-Bots erreicht.

Diese Amazon Lex-Bots können in Contact Flows in [Amazon Connect](https://aws.amazon.com/pm/connect) integriert werden. Auf diese Weise können Kunden Ihr [Virtual Contact Center](https://aws.amazon.com/connect/remote-agent) anrufen und mit einem Cognigy.AI Bot sprechen.

## Generische Endpunkteinstellungen<div class="divider"></div>Weitere Informationen zu den allgemeinen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind, finden Sie hier:

- [Übersicht über Endpunkte]({{config.site_url}}/ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}/ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings/)  

## Kanalspezifische Einstellungen<div class="divider"></div>

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/28475-lex-endpoint-settings.png" width="100%" />
</figure>### Alexa-Slots neu parsen

Aktivieren Sie diesen Schalter, damit die von Amazon Lex gefundenen Slots und das Transkript an Cognigy.AI übergeben und von der Cognigy NLU verarbeitet werden können.

!!! Warnung
    Die Option zum erneuten Parsen von Slots ist nur verfügbar
    , wenn die **Amazon Lex (Built-in)** NLU ausgewählt ist.

## Einrichtung 

Es ist wichtig, dass Sie Ihre AWS-Umgebung ordnungsgemäß auf die Verbindung mit dem Amazon Lex-Endpunkt vorbereiten. Dazu müssen Sie einen Lex-Bot und eine Lambda-Funktion erstellen. 

Das Verfahren unterscheidet sich, wenn Sie Ihre vorhandenen Amazon Lex-Bots für die NLU-Erkennung wiederverwenden oder die Cognigy.AI NLU-Funktionen verwenden möchten.  

Informationen zur Wiederverwendung der Amazon Lex NLU finden Sie in den folgenden Artikeln: 

- [HelpCenter: Einführung in Amazon Lex](https://support.cognigy.com/hc/en-us/articles/6229744711964)
- [HelpCenter: Amazon Lex: Einrichten von Amazon Lex für Amazon Lex NLU](https://support.cognigy.com/hc/en-us/articles/6229640404636)
- [HelpCenter: Amazon Lex: Einrichten von AWS Lambda für Amazon Lex NLU](https://support.cognigy.com/hc/en-us/articles/6229644597020)

Wenn Sie die Cognigy.AI NLU verwenden möchten, lesen Sie die folgenden Artikel: 

- [HelpCenter: Einführung in Amazon Lex](https://support.cognigy.com/hc/en-us/articles/6229744711964)
- [HelpCenter: Amazon Lex: Einrichten von Amazon Lex für Cognigy.AI NLU](https://support.cognigy.com/hc/en-us/articles/6229658502812)
- [HelpCenter: Amazon Lex: Einrichten von AWS Lambda für Cognigy.AI NLU](https://support.cognigy.com/hc/en-us/articles/6229661373084)

Wenn Sie Ihren Amazon Lex-Bot in Amazon Connect integrieren möchten, lesen Sie die folgenden Artikel: 

- [HelpCenter: Amazon Connect: Einführung](https://support.cognigy.com/hc/en-us/articles/6229662732444)
- [HelpCenter: Amazon Connect: Amazon Connect einrichten](https://support.cognigy.com/hc/en-us/articles/6229664156060)
- [HelpCenter: Amazon Connect: Steuern von Amazon Connect über Cognigy.AI](https://support.cognigy.com/hc/en-us/articles/6229683335196)
- [HelpCenter: Amazon Connect: Aktivieren von SSML-Antworten von Cognigy.AI](https://support.cognigy.com/hc/en-us/articles/6229684421916) 