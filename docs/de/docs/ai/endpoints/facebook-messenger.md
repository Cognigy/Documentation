---
 Titel: "Facebook Messenger" 
 Slug: "Facebook-Messenger" 
 ausgeblendet: false 
---
# Facebook Messenger

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/92b8453-EP_Facebook_messenger.png" width="100%" />
</figure>

Innerhalb unserer **Cognigy.AI**-Plattform können Sie Ihre Cognigy-Ressourcen mit Ihrem **Facebook Messenger**-Kanal verbinden, indem Sie unsere Messenger-Endpunkt-Integration verwenden. 

## Generische Endpunkteinstellungen

Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte]({{config.site_url}}ai/endpoints/overview/) 
- [Datenschutz & Analyse]({{config.site_url}}ai/endpoints/data-protection-and-analytics/)
- [Transformer-Funktionen]({{config.site_url}}ai/endpoints/transformers/transformers/) 
- [NLU-Konnektoren]({{config.site_url}}ai/resources/build/nlu-connectors/)
- [Sitzungsverwaltung]({{config.site_url}}ai/endpoints/session-management/)
- [Übergabe-Einstellungen]({{config.site_url}}ai/endpoints/handover-settings/)
- [Einstellungen für Echtzeitübersetzung]({{config.site_url}}ai/endpoints/real-time-translation-settings)  

!!! Tipp "Unterstützt Inject & Notify"
    Sie können die **[Inject & Notify]({{config.site_url}}ai/endpoints/inject-and-notify/)**-Funktionalität mit diesem Endpunkttyp verwenden.

## Kanalspezifische Einstellungen<div class="divider"></div>## Facebook-Seite einrichten

In diesem Dropdown-Menü erhalten Ihre Cognigy.AI die Anmeldedaten für den Zugriff auf Ihre Facebook Messenger-App.

### Seiten-Zugriffstoken

Das Seitenzugriffstoken wird von Facebook als Authentifizierungsvariable bereitgestellt, um die Kommunikation mit Ihrer Seite zu ermöglichen.

### App-ID

Dieser Wert ist eine eindeutige App-ID, die von Facebook verwendet wird, um Ihre App zu identifizieren.

### App-Geheimnis

Das Geheimnis Ihrer Facebook-App, bei dem es sich um einen zufällig generierten Wert von Facebook handelt. Der Wert dieses Felds muss der GEHEIME Schlüssel sein, der dem Seitenzugriffstoken und der App-ID zugeordnet ist, die in den vorherigen Feldern eingegeben wurden.

!!! Hinweis "Hilfe-Center"
    Weitere Informationen zum Konfigurieren des **Page Access Token**, der **App-ID** und des **App-Geheimnisses** finden Sie in unserem Hilfe-Center-Artikel [**hier**](https://support.cognigy.com/hc/en-us/articles/360015980660-Facebook-Messenger-Deploy-an-Endpoint#2-2-add-the-messenger-product-0-6).

## Facebook-Profil

In Ihrem Facebook-Endpunkt sehen Sie einen Abschnitt mit dem Namen **Facebook-Profile**.
Hier können Sie verschiedene Einstellungen zum Umgang mit Kontaktprofilen für den Facebook-Endpunkt aktivieren oder deaktivieren.

### Profildaten anfordern

Die "Profildaten anfordern" zeigt die Facebook-Profilinformationen eines Kontakts, wie z. B. seinen Namen und sein Profilbild, in deinem Flow an. Wenn diese Option aktiviert ist, können Sie auf diese Profilinformationen in ci.data.profile in Ihrem Flow zugreifen. Die folgende Tabelle zeigt einige allgemeine Informationen, die Sie im ci.data.profile-Objekt finden.<table>
    <tr>
    <th>Beschreibung des Schlüssels</th><th></th>
     
  </tr>
  <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Id</td>
    <td style="padding: 20px;">Die PSID des Facebook-Nutzers. Jeder Facebook-Nutzer hat eine eindeutige ID für jede Facebook-Seite, mit der er spricht.    </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">first_name</td>
    <td style="padding: 20px;">Der Vorname des Benutzers.      </td>
  </tr>
    <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">last_name</td>
    <td style="padding: 20px;">Der Nachname des Benutzers.      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">profile_pic</td>
    <td style="padding: 20px;">Eine URL, die auf das Profilbild des Benutzers verweist.      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Gebietsschema</td>
    <td style="padding: 20px;">Informationen über das Gebietsschema des Benutzers.      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Zeitzone</td>
    <td style="padding: 20px;">Die Zeitzone des Benutzers.      </td>
  </tr>
      <tr>
    <td class="type" style="vertical-align: middle; padding: 10px;">Geschlecht</td>
    <td style="padding: 20px;">Das Geschlecht des Benutzers.      </td>
  </tr>
</table>!!! Warnung "Daten, die in ci.data.profile verfügbar gemacht werden"
    Nicht bei jedem Benutzer auf Facebook werden die gleichen Daten im Profilobjekt angezeigt. Dies hängt ausschließlich davon ab, welche Daten sie in ihrem Facebook-Profil haben und welche Datenschutzeinstellungen sie haben.

### Kontaktprofile aktualisieren

Wenn diese Einstellung aktiviert ist, werden die Informationen, die ein Facebook-Benutzer in seinem Profil hat, in sein Kontaktprofil kopiert. Dies ist sehr nützlich, um das Kontaktprofil einfach mit nützlichen Daten zu füllen.

### Kontaktprofile zusammenführen

Jeder Nutzer auf Facebook hat eine eindeutige ID, eine PSID, für jede Facebook-Seite, mit der er spricht. Das bedeutet, dass Sie, wenn Sie zwei oder mehr Facebook-Seiten besitzen, nicht in der Lage sind, Benutzer auf diesen Seiten sofort zu identifizieren, da sie für jede Seite eine andere ID haben. Wenn Sie diese Einstellung jedoch aktivieren, rufen wir alle PSIDs eines Benutzers für Ihre Seiten ab und führen diese Profile zu einem Profil zusammen. Das bedeutet, dass Sie einen einzelnen Benutzer auf all Ihren Seiten leicht identifizieren und so den Chat noch mehr personalisieren können.

!!! Warnung "Erfordert ein Geschäft"
    Um die API-Aufrufe ausführen zu können, die erforderlich sind, um alle PSIDs für den Benutzer zu erhalten, muss dasselbe Unternehmen alle Facebook-Seiten besitzen. Weitere Informationen unter: [https://www.facebook.com/business](https://www.facebook.com/business)

## Messenger-Einstellungen

Hier können Sie konfigurieren, ob Eingabeindikatoren verwendet werden sollen und wie viele Millisekunden Verzögerung zwischen den einzelnen Nachrichten liegen sollen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/940f0ef-facebookMessageSettings.PNG" width="100%" />
</figure>

!!! Hinweis "Hilfe-Center"
  Ausführlichere Informationen zum Einrichten eines **Facebook Messenger**-Endpunkts findest du in unseren Hilfe-Center-Artikeln [**hier**](https://support.cognigy.com/hc/en-us/articles/360015980560-Facebook-Messenger-Intro).

## Mehr Informationen

* [HelpCenter: Einführung in den Facebook Messenger](https://support.cognigy.com/hc/en-us/articles/360015980560-Facebook-Messenger-Intro)
* [HelpCenter: Facebook Messenger Bereitstellen eines Endpunkts](https://support.cognigy.com/hc/en-us/articles/360015980660-Facebook-Messenger-Deploy-an-Endpoint)
* [HelpCenter: Facebook Messenger verwenden Facebook-Übergabe](https://support.cognigy.com/hc/en-us/articles/360016021919-Facebook-Messenger-Use-Facebook-Handover)
* [HelpCenter: Facebook Messenger Facebook Tools](https://support.cognigy.com/hc/en-us/articles/360015980780-Facebook-Messenger-Facebook-Tools)