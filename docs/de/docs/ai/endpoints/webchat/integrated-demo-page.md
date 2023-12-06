---
Titel: "Demo Webchat" 
Schnecke: "Demo-Webchat" 
ausgeblendet: false 
---

# Demo Webchat

_Cognigy Demo-Webchat_ bietet die Möglichkeit, Webchat-Integrationen mit verschiedenen Anbietern, einschließlich Übergabeanbietern, zu testen, und ermöglicht es Ihnen auch, eine Vorschau des Aussehens Ihres Webchats anzuzeigen, bevor Sie ihn in einer Produktionsumgebung bereitstellen. Demo-Webchat ist ein wertvolles Tool zum Testen und Anpassen, um sicherzustellen, dass Ihr Webchat gemäß Ihren Erwartungen funktioniert und so aussieht, wie Sie es möchten, bevor Sie ihn starten.

## Demo-Webchat verwenden

Gehen Sie folgendermaßen vor, um Demo-Webchat zu verwenden:

1. Öffnen Sie die Cognigy.AI-Schnittstelle.
2. Wechseln Sie zu **Build > Endpoints**.
3. Wählen Sie auf der Seite **Endpunkte** einen vorhandenen Webchat-Endpunkt aus oder erstellen Sie einen neuen, indem Sie auf **+ Neuer Endpunkt** klicken. 
4. Klicken Sie in der oberen rechten Ecke des Endpoint-Editors auf **Demo-Webchat öffnen**.

Auf der Webchat-Demoseite wird eine Website angezeigt, die einen Webchat enthält, den Sie in den Webchat-Einstellungen auf dem Endpunkt in Cognigy.AI konfiguriert haben.

### Manuelles Definieren der Benutzer-ID

Wenn Sie den Webchat laden, wird Ihnen standardmäßig eine zufällige "Benutzer-ID" zugewiesen, die im lokalen Speicher gespeichert wird, um sicherzustellen, dass Sie bei der nächsten Verwendung des Webchats dieselbe "Benutzer-ID" haben.

Um Ihren Webchat als Endbenutzer zu testen, definieren Sie die 'Benutzer-ID', indem Sie '?user=<user-id>' an die Demo-Webchat-URL anhängen.
Zum Beispiel in der
'https://webchat-trial.cognigy.ai/v2/7e466a9d76611d8decbd15f366f607345efc36805c4e7cff25789ec91ee66457?user=test'-URL,
Die 'Benutzer-ID' ist auf 'test' gesetzt.

Um eine neue Sitzung für den vorhandenen Benutzer zu erstellen, verwenden Sie '?user=<old-user-id>&sessionId=<new-user-id>'.

Um die "Benutzer-ID" vergangener Konversationen zu finden, navigieren Sie zu "> Kontaktprofile verwalten".

## Demo-Webchat-Einstellungen

Diese Konfigurationsoptionen innerhalb des Webchat-Endpunkts wirken sich nur auf die integrierte Demo-Webchat-Seite aus.

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                |
|-------------------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Demo-Webchat aktivieren | Umschalten | Aktiviert oder deaktiviert den integrierten Demo-Webchat für diesen Endpunkt.                                                                                                                                                                                                                                                                                                                                                                         |
| Aktivieren von Speech-to-Text | Umschalten | Schalten Sie um, ob der Webchat eine Mikrofontaste enthalten soll.                                                                                                                                                                                                                                                                                                                                                                             |
| Aktivieren von Text-to-Speech | Umschalten | Schalten Sie um, ob der Webchat alle Bot-Nachrichten laut vorlesen soll.                                                                                                                                                                                                                                                                                                                                                                             |
| Hintergrundbild | Internetadresse | Das Bild, das hinter dem Webchat angezeigt wird.                                                                                                                                                                                                                                                                                                                                                                                       |
| Zentrums-Webchat | Wählen Sie | Legt fest, wo auf der Seite der Webchat positioniert werden soll: mittig oder unten rechts.                                                                                                                                                                                                                                                                                                                                                              |
| Benutzerdefinierte Webchat-Bundle-URL verwenden | Umschalten | Dies ist eine erweiterte Funktion. Einige Endpoint-Konfigurationen funktionieren möglicherweise nicht, da sie in Ihrem Webchat-Bundle möglicherweise nicht unterstützt werden.                                                                                                                                                                                                                                                                                                            |
| Benutzerdefinierte Webchat-Bundle-URL | Internetadresse | Dieses Feld ist nur verfügbar, wenn die **Benutzerdefinierte Webchat-Bundle-URL verwenden** aktiviert ist. Sie können eine neue URL von Webchat angeben, wenn Sie benutzerdefiniertes Webchat verwenden möchten, indem Sie den Webchat-Quellcode ändern. Die URL sollte das folgende Format haben: "https://url.to/webchat. <package-name>.js', wobei 'url.to' ein Speicher für Ihr Plugin ist, z. B. Amazon S3, und 'package-name' ein Name Ihres Pakets ist, z. B. 'webchat.legacy'. |

## Mehr Informationen

- [Webchat-Endpunkt](deploy-webchat-endpoint.md)
- [Cognigy Webchat](https://docs.cognigy.com/ai/endpoints/webchat/webchat/)</package-name></new-user-id></old-user-id></user-id>