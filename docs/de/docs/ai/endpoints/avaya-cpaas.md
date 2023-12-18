---
 Titel: "Avaya CPaaS" 
 Schnecke: "Avaya-CPAAs" 
 ausgeblendet: false 
---

# Avaya CPaaS

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/avaya-cpaas-logo.png" width="100%" />
</figure>

Innerhalb unserer **Cognigy.AI**-Plattform können Sie Ihre Cognigy.AI Ressourcen mit Ihrer **Avaya CPaaS**-Telefonnummer verbinden, indem Sie den Avaya CPaaS-Endpunkt verwenden.

## Generische Endpunkteinstellungen
Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte]({{config.site_url}}ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU-Konnektoren]({{config.site_url}}ai/resources/build/nlu-connectors/)

## Avaya CPaaS einrichten<div class="divider"></div>Um den Avaya CPaaS-Endpunkt in Cognigy.AI mit einer Telefonnummer in Avaya CPaaS zu verbinden, kopieren Sie die Endpunkt-URL aus dem Endpunkt in Cognigy.AI und fügen Sie sie in die Anforderungs-URL in der Avaya CPaaS-Telefonnummernkonfiguration ein.

## Konfigurieren des Avaya CPaaS-Endpunkts<div class="divider"></div>Im Avaya CPaaS Endpoint können Sie anpassen, wie sich die Konversation mit Avaya CPaaS verhalten soll.

### Avaya-Einstellungen

Im Abschnitt **Avaya-Einstellungen** können Sie die folgenden Einstellungen für den Avaya CPaaS-Endpunkt konfigurieren:<table>
    <tr>
    <th>Beschreibung der Einstellung</th><th></th>
     
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">STT + TTS Sprache</td>
    <td style="padding: 20px;">Die Sprache, die Avaya CPaaS verwenden soll, um die Ausgaben des Bots auszulesen.    </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Stimme</td>
    <td style="padding: 20px;">Die Stimme, die mit Avaya CPaaS verwendet werden soll.      </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Avaya CPaaS-Token</td>
    <td style="padding: 20px;">Ein optionales Sicherheitstoken, das Sie einfügen können und das von Avaya CPaaS stammt, um zu überprüfen, ob die Anforderung nicht von einem Drittanbieter stammt.      </td>
  </tr>
</table>### Einstellungen sammeln
Im Abschnitt **Gather-Einstellungen** können Sie mehrere Attribute konfigurieren, die an die Gather-Anweisung angehängt werden, die an Avaya CPaaS gesendet wird:<table>
    <tr>
    <th>Beschreibung der Einstellung</th><th></th>
     
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Aktions-URL</td>
    <td style="padding: 20px;">Die URL, die Avaya CPaaS verwendet, um die Benutzereingaben zu senden. Lassen Sie es leer, damit die Anforderungen an den Avaya CPaaS-Endpunkt gesendet werden.    </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Eingabe-Typ</td>
    <td style="padding: 20px;">Die verschiedenen Arten von Eingabetypen, die Avaya CPaaS akzeptieren sollte. Der Standardwert ist Ziffern + Stimme.    </td>
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Hinweise</td>
    <td style="padding: 20px;">Eine Reihe von Wörtern oder Ausdrücken, auf die Avaya CPaaS achten soll. Kommas sollten Wörter trennen.    </td>
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Methode</td>
    <td style="padding: 20px;">Die HTTP-Anforderungsmethode, die Avaya CPaaS verwenden soll, um die Aktions-URL zu kontaktieren. Der Standardwert ist POST.      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Zeitüberschreitung</td>
    <td style="padding: 20px;">Die Zeitspanne, die der Benutzer hat, um dem Bot zu antworten, bevor der Anruf unterbrochen wird. Die Zeitüberschreitung wird in Sekunden mit einem Standardwert von 30 Sekunden angegeben. <b>Anmerkung:</b> Das Timeout beginnt zu zählen, sobald der Bot zu sprechen beginnt, d.h. wenn Sie dem Benutzer einen langen Text vorlesen, kann es sein, dass es zu einer Zeitüberschreitung kommt, bevor er überhaupt mit der Antwort beginnt.      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Auf Taste beenden</td>
    <td style="padding: 20px;">Die Taste, die der Benutzer drücken sollte, um eine Antwort zu senden, wenn DTMF verwendet wird.      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Ziffern</td>
    <td style="padding: 20px;">Die maximale Anzahl von Ziffern, die der Benutzer eingeben kann.      </td>
  </tr>
</table>