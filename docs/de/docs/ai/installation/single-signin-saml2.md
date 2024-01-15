---
title: "Single Sign-on mit SAML 2.0" 
Slug: "Single-Signin-SAML2" 
ausgeblendet: false 
---

# Single Sign-On mit SAML 2.0

Cognigy.AI lässt sich in gängige SSO-Identitätsanbieter (Single Sign-On) wie Azure Active Directory, OneLogin und Okta integrieren. Diese Integration ermöglicht es Benutzern innerhalb Ihrer Organisation, sich ohne separate Anmeldeinformationen bei Cognigy.AI anzumelden. Durch die Verwendung von Single Sign-On wird automatisch Zugriff gewährt, der einen optimierten Authentifizierungsprozess gewährleistet. Darüber hinaus können Sie das robuste Zugriffskontrolltool verwenden, Cognigy.AI die Zugriffsrechte einzelner Benutzer effektiv zu verwalten und zu kontrollieren.

## Abrufen der SSO-URL<div class="divider"></div>Um Single Sign-On in Ihrem Identitätsanbieter zu konfigurieren, benötigen Sie die URL, die während des SAML-Authentifizierungsprozesses verwendet wird. Die SAML-Anforderungen werden an den API-Dienst gesendet, daher sollten Sie die API-Domäne verwenden, die Sie für Ihre Installation konfiguriert haben. Die SSO-URL hat das folgende Format:

'''txt
https://<api-url>/auth/saml/login/<organization-id>''' 

Die API-URL für die App-Umgebung lautet beispielsweise "api-app.cognigy.ai". Die "Organisations-ID" ist die "ID" Ihrer Organisation innerhalb Cognigy.AI. Sie können Ihre 'organizationId' auf der [Mein Profil](.. /tools/interaction-panel/profile.md) durch Klicken auf ! [vertikale-Auslassungspunkte] (.. /.. /assets/icons/vertical-ellipsis.svg) **> Organisations-ID kopieren**.

Sie benötigen die SSO-URL, wenn Sie Ihren Identitätsanbieter (IDP) mit einem der bereitgestellten Einrichtungsleitfäden konfigurieren.

Informationen zum Konfigurieren des SSO-Anbieters mit Cognigy.AI finden Sie in einem der spezifischen Handbücher für die [unterstützten Identitätsanbieter](#more-Informationen). Diese Leitfäden enthalten Beispiele für die erforderlichen API-Anfragen. Wenn Ihr Identitätsanbieter nicht aufgeführt ist, empfehlen wir, dem [OneLogin-Handbuch](https://support.cognigy.com/hc/en-us/articles/360016310699-OneLogin#introduction-0-0) als Beispiel zu folgen. Die API-Anforderung für die Konfiguration von SSO mit Cognigy.AI ist dieselbe, aber die Konfigurationswerte können je nach Anbieter variieren.

## Abrufen der SLO-URL<div class="divider"></div>!!! Warnung
    - Single Logout wird nur mit OneLogin und Microsoft Azure Active Directory unterstützt:
        - Die vom Dienstanbieter initiierte einmalige Abmeldung wird nur mit Microsoft Azure Active Directory unterstützt.
        - Vom Identitätsanbieter initiiertes Single Logout wird nur mit OneLogin unterstützt.

Um Single Logout für Ihren Identitätsanbieter zu konfigurieren, benötigen Sie die URL, die für die Verarbeitung der Abmeldeanforderung vom IDP verwendet wird. Während des Single-Logout-Prozesses leitet der IDP an das Frontend von Cognigy.AI weiter. Daher sollten Sie die Frontend-Domäne verwenden, die Sie für Ihre Installation konfiguriert haben. Die SLO-URL hat das folgende Format:

'''txt
https://<frontend-url>/Slo/<organization-id>''' 

Zum Beispiel könnte die Frontend-URL "app.cognigy.ai" lauten.

Weitere Informationen zum Herstellen einer Verbindung mit Ihrem angebotenen SSO-Anbieter finden Sie im [Cognigy Help Center](https://support.cognigy.com/hc/en-us/sections/360004563679-Single-Sign-on).

## Ändern einer Single-Sign-On-Konfiguration in Cognigy.AI<div class="divider"></div>Sie können nur eine SSO-Konfiguration für Ihre Organisation haben. Wenn Sie die Konfiguration ändern möchten, müssen Sie sie zunächst löschen und eine neue erstellen. Um eine SSO-Konfiguration zu löschen, senden Sie eine "POST"-Anfrage an:

'''txt
https://<api-url>/v2.0/identityprovider/reset
''' 

Weitere Informationen zur Verwendung der Cognigy.AI API finden Sie auf der [API-Referenzseite](https://api-trial.cognigy.ai/openapi#post-/v2.0/identityprovider/reset).

## Melden Sie sich über SSO an<div class="divider"></div>Wenn sich ein Benutzer zum ersten Mal über SSO bei Cognigy.AI anmeldet, muss er dies über den Identitätsanbieter tun. Auf diese Weise erhalten sie die richtigen Zugriffsrechte in Cognigy.AI und können sich bei nachfolgenden Anmeldungen über die Cognigy.AI Anmeldeseite anmelden.

!!! Warnung "Erstmalige Anmeldung"
    Bei der ersten Anmeldung müssen sich Benutzer mit ihren Anmeldeinformationen für den Identitätsanbieter (IDP) anmelden.

Um sich auf der Anmeldeseite bei Cognigy.AI anzumelden, klicken Sie auf **Mit SSO anmelden** und geben Sie Ihre E-Mail-Adresse ein. Dadurch werden Sie zu Ihrem konfigurierten IDP weitergeleitet, wenn ein IDP für Ihre Organisation konfiguriert ist.

## Mehr Informationen

- Help-Center-Beiträge:
    - [SSO mit Azure Active Directory](https://support.cognigy.com/hc/en-us/articles/360016310859-Azure-Active-Directory)
    - [SSO mit Google](https://support.cognigy.com/hc/en-us/articles/360016274780-Google)
    - [SSO mit Okta](https://support.cognigy.com/hc/en-us/articles/360016311079-Okta)
    - [SSO mit OneLogin](https://support.cognigy.com/hc/en-us/articles/360016310699-OneLogin)
    - [SSO mit Auth0](https://support.cognigy.com/hc/en-us/articles/360018693139)</api-url></organization-id></frontend-url></organization-id></api-url>