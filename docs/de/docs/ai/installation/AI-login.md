---
Titel: "Cognigy.AI An- und Abmeldung"
slug: "KI-Login"
ausgeblendet: false
---

# Cognigy.AI An- und Abmeldung

Benutzer können sich mit dieser URL bei Cognigy.AI anmelden:

'''txt
https://<frontend-url>/einloggen
'''

Zum Beispiel ist die 'Frontend-URL' für die Trial Cognigy-Umgebung 'trial.cognigy.ai'.

## Melden Sie sich bei mehreren Organisationen an<div class="divider"></div>[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.16.0-blue.svg)] ({{config.site_url}})

Cognigy.AI ermöglicht es Benutzern, Teil mehrerer Organisationen zu sein. Ein Benutzer, der durch eine E-Mail-Adresse und ein Kennwort identifiziert wird, kann Teil verschiedener Organisationen sein. Die URL für die Anmeldung bei Cognigy.AI sollte wie folgt lauten und angeben, bei welcher Organisation sich der Benutzer anmelden möchte:

'''txt
<frontend-url>https:///login?organisationId=<organisation-id>'''

Die "organization-id" ist eine eindeutige Kennung aus 24 Zeichen, die eine Organisation im Cognigy-System identifiziert.<br>
<figure>
  <img class="image-center" src="{{config.site_url}}ai/installation/images/CognigyAI_Login.png" width="100%" />
  <figcaption> Cognigy.AI Benutzer-Login-Seite</figcaption>
</figure>

!!! Warnung
    Wenn ein Benutzer Teil mehrerer Organisationen ist und in der Anmelde-URL keine "organizationId" übergeben wird, wird dem Benutzer die Anmeldung verweigert.

Für einen Benutzer, der einer einzelnen Organisation zugewiesen ist, ist die Angabe der "organizationId" in der Anmelde-URL optional und hat keine Auswirkungen.

### E-Mail-Benachrichtigung für mehrere Organisationen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.27.0-blue.svg)] ({{config.site_url}})

Wenn ein Benutzer mit einer gültigen E-Mail-Adresse mehreren Organisationen angehört und in der Anmelde-URL keine organizationId übergeben wird, wird dem Benutzer die Anmeldung verweigert. Sie erhalten jedoch eine E-Mail mit direkten Anmeldelinks für jede Organisation, der sie angehören.
Wenn Sie auf diese Links klicken, wird die Cognigy.AI Anmeldeseite mit dem entsprechenden organizationId-Parameter in der URL geöffnet.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/installation/images/multi-org-email.png" width="100%" />
  <figcaption>E-Mail-Adresse mehrerer Organisationsbenutzer bei fehlgeschlagener Anmeldung.</figcaption>
</figure>

### Passwort zurücksetzen

Angenommen, ein Benutzer möchte das Kennwort für eine der Organisationen zurücksetzen, denen der Benutzer zugewiesen ist. In diesem Fall ist die Angabe organizationId in der Anmelde-URL beim Ausfüllen des Formulars "Passwort vergessen" zwingend erforderlich.

### Melden Sie sich mit SSO an

Ein Benutzer, der Teil mehrerer Organisationen ist, kann sich mit SSO anmelden, indem er dieselbe Anmelde-URL verwendet, einschließlich der organizationId, und dann auf **MIT SSO ANMELDEN** klicken.

Weitere Informationen zum Konfigurieren von Cognigy.AI mit SSO finden Sie auf der Seite [Single Sign-On mit SAML 2.0](single-signin-saml2.md).

## Automatische Abmeldung

Mit der Funktion **Automatische Abmeldung** können Sie einen Inaktivitätszeitraum für Mitglieder Ihrer Organisation festlegen. Wenn ein Benutzer während dieses Zeitraums inaktiv bleibt, wird er automatisch abgemeldet.

Diese Funktion ist nur für lokale und dedizierte SaaS-Kunden verfügbar. Um die Funktion zu aktivieren, geben Sie in der Datei "values.yaml" "FEATURE_ENABLE_AUTO_LOGOUT_ON_INACTIVITY= true" an.

Standardmäßig ist der Inaktivitätszeitraum auf 15 Minuten festgelegt. Sie können diesen Wert ändern, indem Sie 'AUTO_LOGOUT_IDLE_TIME_IN_MIN=' <your time="" in="" minutes="">in der Datei 'values.yaml' angeben.
</your></organisation-id></frontend-url></frontend-url>