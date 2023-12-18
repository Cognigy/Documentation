---
 title: "Single Sign-On mit OpenID Connect" 
 Slug: "Single-Signin-OpenID-Connect" 
 ausgeblendet: false 
---
# Single Sign-On mit OpenID Connect

## Beschreibung<div class="divider"></div>Cognigy.AI unterstützt bereits [SSO (Single Sign-on)]({{config.site_url}}ai/installation/single-signin-saml2/) durch die Verwendung unserer SAML 2.0-Integration. 

Mit der Version v4.3.0 hat Cognigy die Unterstützung von Single Sign-On für OpenID Connect hinzugefügt. Kunden können nun auswählen, welche Art von Strategie sie zur Umsetzung ihrer SSO-Unternehmensstrategie verwenden möchten. 

So verwenden Sie Open ID Connect mit Auth0 als Anbieter Lesen Sie den folgenden Artikel: [Single Sign-On](https://support.cognigy.com/hc/en-us/articles/360021171120-Auth0-OpenID-Connect#introduction-0-0)

!!! Warnung "So verwenden Sie OpenID Connect"
    Möchten Sie mehr über die Verwendung von OpenID Connect erfahren? Werfen Sie einen Blick auf **[Auth0 - OpenID Connect](https://support.cognigy.com/hc/en-us/articles/360021171120-Auth0-OpenID-Connect#introduction-0-0)** in unserem Hilfe-Center.

!!! Notiz "Notiz"
    "In dieser Anleitung erfahren Sie, wie Sie SSO in Cognigy.AI mit Auth0 als **Identitätsanbieter** unter Verwendung des OpenID Connect-Protokolls einrichten. Nachdem Sie diesen Leitfaden abgeschlossen haben, können sich Ihre Benutzer über Auth0 bei Cognigy.AI anmelden und es wird automatisch ein Benutzerkonto für sie in Cognigy.AI erstellt, dem eine Cognigy.AI Zugriffsrolle zugewiesen wird, die vom Administrator in Auth0 definiert wurde.
    
"Bei der Einrichtung von SSO mit Auth0 kann man zwischen zwei verschiedenen SSO-Protokollen wählen. In diesem Artikel wird das OpenID Connect-Protokoll behandelt. 
    
Informationen zu SAML 2.0 finden Sie im folgenden Artikel: [Auth0 - saml2.0](https://support.cognigy.com/hc/en-us/articles/360018693139)

##Configuring SSO in Cognigy.AI für OpenID Connect

Nachdem Sie SSO in Ihrem Identitätsanbieter konfiguriert haben, können Sie endlich eine SSO-Konfiguration für Ihre Organisation in Cognigy.AI erstellen.
 - siehe [Auth0 - OpenID Connect](https://support.cognigy.com/hc/en-us/articles/360021171120-Auth0-OpenID-Connect#introduction-0-0)

Senden Sie dazu eine POST-Anforderung an die folgende URL:

''''
https://<API adress="">/v2.0/identityprovider/configure
''''

Und hängen Sie die folgenden JSON-Payload-Einstellungen mit Ihren eindeutigen Werten an die Anfrage an (siehe unten):

''''JSON
{
"idpType": "oidc",
"idpIssuer": "<DOMAIN>",
"idpClientId": "<CLIENT id="">",
"idpClientSecret": "<CLIENT secret="">",
"idpIdTokenSignedResponseAlg": "RS256",
"idpTokenEndpointAuthMethod": "client_secret_basic"
}
''''</CLIENT></CLIENT></DOMAIN></API>