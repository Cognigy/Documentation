---
Titel: "Verwaltungs-UI" 
Slug: "Verwaltungs-UI" 
ausgeblendet: false 
---

# Verwaltungs-UI

## Einleitung

Die Cognigy Management UI ist ein zusätzliches Produkt, das ursprünglich als Cognigy-internes Tool zur Verwaltung unserer eigenen Cloud-Installationen entwickelt wurde. Sie müssen es zusätzlich zu unserem eigentlichen Produkt installieren, um es verwenden zu können.

Sie können die Verwaltungsbenutzeroberfläche selbst einrichten, wenn Sie über eine lokale Cognigy.AI-Installation verfügen. Andernfalls, wenn Sie Änderungen an der Verwaltungs-Benutzeroberfläche vornehmen möchten, wenden Sie sich an [Technischer Support](.. /help/get-help.md/#help-center).

Viele Benutzer wissen nicht, dass Cognigy.AI in der Lage ist, ein mehrinstanzenfähiges Szenario zu verarbeiten. Diese einzelnen Mandanten werden innerhalb Cognigy.AI als **Organisationen** bezeichnet.

Eine Organisation hat sich komplett getrennt:

-Projekte
-Benutzer
- API-Zugriff und -Schlüssel
- Kontaktprofil-Schemata
- Quoten & Limits

Mit dem Einsatz von Organisationen können Sie Ihre eigene Cognigy.AI Installation z.B. für mehrere Kunden verwenden und deren Daten auf sichere Weise trennen. Obwohl eine neue Organisation mithilfe einer speziellen Art von **interner API** erstellt werden kann, haben wir ein zusätzliches Tool namens **Cognigy Management UI** erstellt. Dies ist ein zusätzliches Produkt, das Sie in Ihrem Cluster bereitstellen können. Anschließend können Sie eine Verbindung zu Ihrer Installation herstellen, um z. B. alle Organisationen in Ihrem System zu inspizieren.

Die folgende Abbildung zeigt einen Screenshot davon, wie dieses Produkt aussieht.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/745f45a-mui-1.png" width="100%" />
  <figcaption> Die Benutzeroberfläche für die Cognigy.AI-Verwaltung</figcaption>
</figure>

## Verwendung

Die Bedienung der Verwaltungsoberfläche ist recht selbsterklärend. Auf der linken Seite haben wir eine globale Navigation, mit der Sie zwischen folgenden Optionen wechseln können:
-Benutzer
- Organisationen
- Systemmeldung

Wir schauen uns nun die individuelle Ansicht an und was dort getan werden kann.

## Benutzer

Hier können Sie neue Benutzer zum System hinzufügen. Ein Benutzer muss einer **Organisation** zugewiesen werden, daher müssen Sie möglicherweise zuerst eine neue Organisation erstellen. Um einen neuen Benutzer zu erstellen, klicken Sie auf die große rosa Schaltfläche in der rechten unteren Ecke der Ansicht. Sie sehen dann einen Dialog, in dem Sie Folgendes eingeben:

-Name
-E-Mail
- Wählen Sie die Organisation aus

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/d5af6c0-mui-2.png" width="100%" />
  <figcaption>Das Erstellen eines neuen Benutzers ist einfach</figcaption>
</figure>

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.16.0-blue.svg)] ({{config.site_url}}) 
Sie können einen Benutzer (identifiziert durch eine E-Mail-Adresse) zu mehreren Organisationen hinzufügen, und wie sich der Benutzer für seine Organisation anmelden kann, finden Sie auf der Seite [Login für Benutzer in mehreren Organisationen]({{config.site_url}}ai/installation/AI-login/#login-for-users-in-multiple-organisation) 

Wenn Sie auf einen der bereits vorhandenen Benutzer klicken, öffnet sich eine Detailseite, auf der Ihnen bestimmte Informationen über den Benutzer angezeigt werden. Die wichtigsten Dinge, die Sie hier tun können, sind:

- siehe allgemeine Informationen
- Sehen Sie sich die aktuellen [Rollen]({{config.site_url}}ai/tools/user-menu/access-control/) an
- Bestimmte Statusinformationen einsehen
- sich als Benutzer auszugeben. Dadurch wird zum eigentlichen Produkt weitergeleitet und Sie melden sich an, als wären Sie der ausgewählte Benutzer
- Zusätzliche Aktionen für den Benutzer befinden sich im Triple-Dot-Symbol in der rechten oberen Ecke

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/a8411d2-mui-3.png" width="100%" />
  <figcaption> Details zu einem Benutzer</figcaption>
</figure>

!!! Hinweis "Annehmen der Identität eines Benutzers"
    Wenn Sie sich als Benutzer ausgeben, können Sie sich als der von Ihnen ausgewählte Benutzer beim System anmelden, ohne das tatsächliche Kontokennwort zu kennen. Stellen Sie sicher, dass Sie sich nach Beendigung Ihrer Arbeit abmelden.

## Organisationen

In dieser Ansicht werden alle Organisationen dargestellt, die innerhalb des Systems vorhanden sind. Jede Installation hat mindestens eine Organisation, die automatisch erstellt wird. Diese anfängliche Organisation wird als **defaultOrg-xxx** bezeichnet. Werfen Sie einen Blick auf die folgende Abbildung.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/0454252-mui-4.png" width="100%" />
  <figcaption> Alle Organisationen innerhalb des Systems</figcaption>
</figure>

Sie können auch eine neue Organisation erstellen oder eine bereits vorhandene deaktivieren.

## Systemmeldung

Wenn Sie über eine eigene Cognigy.AI Installation verfügen, sollten Sie die Wartung zu einem bestimmten Zeitpunkt planen. Dafür können Sie unsere **Systemmeldung**-Funktion verwenden. Wählen Sie in der linken Navigation Systemmeldung aus und klicken Sie auf den pinken Button, um eine neue Systemmeldung zu erstellen.

Es kann jeweils nur eine Systemmeldung vorhanden sein. Eine solche Nachricht hat einen tatsächlichen Nachrichtentext und ein **gültig bis** Datum. Die Meldung wird auf allen UI-Clients angezeigt, solange die Meldung gültig ist. Es lackiert automatisch, wenn es abgelaufen ist.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/8c17539-mui-5.png" width="100%" />
  <figcaption>Erstellen einer neuen Systemmeldung</figcaption>
</figure>

Die Systemmeldung wird für alle Benutzer angezeigt - unabhängig von ihrer Organisation.

## Quoten & Limits

Mit der Version 3.4.0 von Cognigy.AI haben wir Quoten und Limits auf Organisationsebene eingeführt. Größere Kunden mit mehreren Organisationen können diese Kontingente verwenden, um die Möglichkeiten innerhalb bestimmter Organisationen einzuschränken. Um Limits zu konfigurieren, wählen Sie zunächst eine Organisation aus, öffnen Sie deren Details und klicken Sie auf die Schaltfläche mit den drei Punkten in der rechten oberen Ecke.

Wählen Sie im Menü **Organisationskontingente ändern** aus.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/19b27f4-mui-6.png" width="100%" />
  <figcaption>Konfigurieren von Kontingenten und Grenzwerten für eine Organisation</figcaption>
</figure>

Sie können derzeit die folgenden Kontingente und Grenzwerte konfigurieren:

| Attribut | 	Beschreibung |
|--------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Max. Benutzer | 	Dies ist die maximale Anzahl von Benutzern, die innerhalb der Organisation erstellt werden können.                                                                    |
| Max. Projekte | Die maximale Anzahl von Projekten, die innerhalb dieser Organisation erstellt werden können.                                                       |
| Max. Kanäle pro Projekt | 	Die maximale Anzahl verschiedener Kanaltypen innerhalb eines einzelnen Projekts. Ein Kanal ist z.B. ein Alexa-Endpunkt. Wenn dies z.B. auf eins gesetzt ist, können Sie unendlich viele Alexa Endpoints erstellen, erhalten aber eine Fehlermeldung, wenn Sie versuchen, z.B. zusätzlich einen Google Actions Endpoint zu erstellen. Es ist die Anzahl der verschiedenen Arten von Kanälen, die eingeschränkt wird |
| Max. Nachrichten pro Tag | 	Dies ist derzeit ein weiches Limit und wird nichts bewirken, wenn Projekte darüber hinausgehen. Wir werden in Zukunft Änderungen an diesem Kontingent vornehmen.     |
 
Wenn Sie ein Kontingent auf 0 festlegen, wird das Kontingent deaktiviert.

## Passwort-Richtlinie

Es ist auch möglich, die Passwortrichtlinien einer Organisation in der Verwaltungsoberfläche zu konfigurieren.  Um die Passwortrichtlinie zu konfigurieren, wählen Sie zunächst eine Organisation aus und klicken Sie auf die Schaltfläche mit den drei Punkten in der rechten oberen Ecke.

Wählen Sie im Menü die Option **Kennwortrichtlinie ändern** aus.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/cefc01d-Screenshot_from_2020-03-25_16-46-15.png" width="100%" />
  <figcaption>Konfigurieren einer Kennwortrichtlinie für eine Organisation</figcaption>
</figure>

Derzeit ist es möglich, die folgenden Attribute der Kennwortrichtlinie zu konfigurieren:

| Attribut | 	Beschreibung |
|--------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Mindestlänge | Die Mindestanzahl von Zeichen, aus denen das Kennwort bestehen muss.                                                                                                                                                  |
| Maximale Länge | Die maximale Anzahl von Zeichen, aus denen das Kennwort bestehen kann.                                                                                                                                                       |
| Mindestanzahl von Kleinbuchstaben | Die Mindestanzahl von Zeichen im Passwort, die in Kleinbuchstaben geschrieben werden müssen.                                                                                                                                        |
| Mindestanzahl von Großbuchstaben | Die Mindestanzahl von Zeichen im Passwort, die in Großbuchstaben geschrieben werden müssen.                                                                                                                                        |
| Mindestanzahl an Sonderzeichen | Die Mindestanzahl von Sonderzeichen im Kennwort.	                                                                                                                                                          |
| Maximale Anzahl identischer Zeichen | Die maximale Anzahl von Zeichen, die im Kennwort identisch sein können.                                                                                                                                            |
| Anzahl der fehlgeschlagenen Anmeldungen, die zur Deaktivierung des Kontos führen | Gibt an, wie oft ein Benutzer versuchen kann, sich anzumelden, bevor sein Konto deaktiviert wird. Wenn Sie diesen Wert auf 0 setzen, bedeutet dies, dass das Konto nie deaktiviert wird. Deaktivierte Benutzer können in der Verwaltungsoberfläche wieder aktiviert werden. |

Ein Klick auf die Schaltfläche "Speichern & Erzwingen" führt dazu, dass alle Benutzer der Organisation abgemeldet werden. Bei der erneuten Anmeldung müssen sie ihr Passwort ändern.

## Datenschutz-Einstellungen

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.38.0-blue.svg)] ({{config.site_url}}) 
Es ist möglich, die Datenschutzeinstellungen einer Organisation in der Verwaltungsoberfläche festzulegen. Um die Datenschutzeinstellungen zu konfigurieren, wählen Sie zunächst eine Organisation aus und klicken Sie dann auf den Dreipunkt-Button in der rechten oberen Ecke.

Wählen Sie im Menü **Datenschutzeinstellungen ändern**

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/docs-mngmt-org-data-privacy.png" width="100%" />
  <figcaption>Konfigurieren von Datenschutzeinstellungen für eine Organisation</figcaption>
</figure>

- Datenschutzeinstellungen aktivieren
  
Datenschutzeinstellungen auf alle Projekte dieser Organisation anwenden

- Kontaktprofil  

Erstellen Sie individuelle Kontaktprofile, um persistente Benutzerdaten sitzungsübergreifend zu speichern

- Sammeln von Analysen
  
Sammeln von Analysedaten für alle Endpunkte

- Sensible Analysen maskieren

Maskieren Sie alle sensiblen Analysedaten für alle Endpunkte

- Maskensensitive Protokollierung

Maskieren Sie die gesamte vertrauliche Protokollierung für alle Endpunkte

- Sammeln von Konversationen

Erfassen des Konversationsverlaufs für alle Endpunkte

- Ignorierliste

Die Projekte ignorieren die Datenschutzeinstellungen der Organisation und verwenden die im Endpunkt definierten Einstellungen

## Ablaufwerte (TTL) für sensible Daten

Es kann konfiguriert werden, wann bestimmte sensible Daten ablaufen und aus dem System gelöscht werden. Um dies zu ändern, wählen Sie zunächst eine Organisation aus und klicken Sie auf den Dreipunkt-Button in der rechten oberen Ecke.

Wählen Sie im Menü **Ablaufwerte ändern** aus.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/exp-values.png" width="100%" />
  <figcaption> Konfigurieren der Ablaufwerte für sensible Daten in einer Organisation</figcaption>
</figure>

Alle Ablaufwerte definieren, wie viele **Minuten** es dauert, bis die Daten erstellt wurden, bis sie ablaufen. Das Festlegen eines Ablaufwerts auf 0 bedeutet, dass die Daten nie ablaufen. Es ist möglich, den Ablauf der folgenden Daten zu konfigurieren:

| Ablaufwert | 	Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-----------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Ablauf von Kontaktprofilen | Dieser Ablaufwert bestimmt die Anzahl der Minuten zwischen dem Zeitpunkt, an dem ein Kontaktprofil zuletzt in einer Konversation aktiv war, und dem Zeitpunkt, an dem es gelöscht wird.                                                                                                                                                                                                                                                                                                                |
| Ablauf der Sitzung | Dieser Ablaufwert bestimmt die Anzahl der Minuten zwischen dem Senden der letzten Nachricht in einer Sitzung und dem Löschen der Sitzung. Das bedeutet, dass der Ablauf-Timer bei jeder neuen Nachricht in einer Sitzung zurückgesetzt wird. Der [Sitzungsablauf]({{config.site_url}}ai/endpoints/session-management/) kann für einige Endpunkte auch in den einzelnen Endpunkten konfiguriert werden. Falls der Wert auch dort konfiguriert ist, wird der kleinste Wert verwendet. |
| Ablauf der Konversation | Dieser Ablaufwert bestimmt die Anzahl der Minuten zwischen der Erstellung einer [Konversation](analytics/analytics-concepts.md) und dem Löschen aus der Datenbank.                                                                                                                                                                                                                                                                                     |
| Analytics-Ablauf | Dieser Ablaufwert bestimmt die Anzahl der Minuten zwischen der Erstellung der Daten von [Analytics](analytics/analytics-concepts.md) bis zum Löschen aus der Datenbank.                                                                                                                                                                                                                                                                          |
| Ablauf der Sitzungsdaten von Insight | Dieser Ablaufwert bestimmt die Anzahl der Minuten zwischen der Erstellung der Daten der Insight-Sitzung und dem Löschen aus der Datenbank.                                                                                                                                                                                                                                                                                                         |
| Schritte Datenablauf | Dieser Ablaufwert bestimmt die Anzahl der Minuten zwischen der Erstellung der Daten von [Steps](analytics/analytics-concepts.md#steps) und dem Löschen aus der Datenbank.                                                                                                                                                                                                                                                                            |

Weitere Informationen zum Datenablauf in Insights finden Sie unter [Datenablauf](.. /.. /insights/ttl.md) in der Insights-Dokumentation.

Es ist auch möglich, eine serverweite maximale Ablaufzeit für alle oben genannten sensiblen Daten festzulegen. Dies ist in der Infrastrukturdokumentation dokumentiert, die den Kunden bei der Installation zur Verfügung gestellt wird.

## Installation

Weitere Informationen zur Installation der Cognigy Management-Benutzeroberfläche finden Sie auf der Seite [GitHub](https://github.com/Cognigy/cognigy-ai-helm-chart/blob/main/README.md#install-management-ui), indem Sie sich an Ihren Cognigy-Vertriebsmitarbeiter wenden oder eine E-Mail mit Ihrer Frage an info@cognigy.com senden.