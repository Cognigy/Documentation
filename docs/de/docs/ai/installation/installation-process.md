---
Titel: "Installationsprozess"
slug: "Installations-Prozess"
ausgeblendet: false
---
# Cognigy.AI installieren

## Helm Charts installieren 

Führen Sie zur Installation Cognigy.AI folgenden Schritte aus: 

1. Installieren Sie die MongoDB-Datenbank mit [MongoDB Helm Chart for Cognigy.AI](https://github.com/Cognigy/cognigy-mongodb-helm-chart). Aktuelle Installationsanweisungen finden Sie unter [README.md](https://github.com/Cognigy/cognigy-mongodb-helm-chart#readme)
2. Installieren Sie Cognigy.AI mit [Cognigy.AI Helm Chart](https://github.com/Cognigy/cognigy-ai-helm-chart). Aktuelle Installationsanweisungen finden Sie unter [README.md](https://github.com/Cognigy/cognigy-ai-helm-chart#readme)

Sobald beide Helm-Versionen erfolgreich installiert sind, können Sie einen Webbrowser öffnen und die URL aufrufen, die Sie im Parameter 'serviceUi.host' Cognigy.AI Helm-Version festgelegt haben. Sie sollten in der Lage sein, den Anmeldebildschirm Cognigy.AI Frontend-Anwendung zu sehen:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/cognigy-ai-login-screen.png" width="90%" />
  <figcaption>Anmeldebildschirm von Cognigy.AI v4</figcaption>
</figure>

## Anmeldedaten abrufen

Sobald Sie den Congigy.AI Anmeldebildschirm sehen, fragen Sie sich vielleicht, mit welchen Anmeldeinformationen Sie sich anmelden können. Wir haben uns dafür entschieden, keinen standardmäßigen "Admin"-Benutzer mit statischen Anmeldeinformationen hinzuzufügen, da solche Benutzer oft nicht ordnungsgemäß aus Systemen entfernt werden und Softwareprodukte potenziellen Sicherheitsangriffen ausgesetzt sind. Unser System erstellt beim Start zufällige Anmeldeinformationen, wenn noch keine Anmeldeinformationen im System vorhanden sind. Die Anmeldeinformationen werden beim ersten Start in die Bereitstellungsprotokolle "Service-Security" gedruckt, um die anfänglichen Anmeldeinformationen wie folgt abzurufen: 
'''
kubectl logs -f -n=cognigy-ai --tail 100 Bereitstellung/Dienstsicherheit
'''
Sie sollten etwas in der Art der folgenden Zeilen mit den anfänglichen Benutzeranmeldeinformationen (E-Mail-Adresse und Kennwort) sehen: 
'''
{"level":"info","time":"2022-07-18T14:07:53.328Z","name":"SECURITY","message":"Dies ist das erste Benutzerkonto, mit dem Sie sich anmelden können","meta":{},"traceId":""}
{"level":"info","time":"2022-07-18T14:07:53.328Z","name":"SECURITY","message":"email: userc3c6ee0f61@cognigy.com","meta":{},"traceId":""}
{"level":"info","time":"2022-07-18T14:07:53.328Z","name":"SECURITY","message":"password: 1caf47b6b79efc59d5f11fde0669b261aA1!","meta":{},"traceId":""}
'''

Es kann vorkommen, dass die Bereitstellung der Dienstsicherheit während der Bereitstellung mehrmals neu gestartet wird und die anfänglichen Protokolle nicht mehr sichtbar sind. Wenn 'service-security' nur einmal neu gestartet wurde, können Sie die Protokolle des vorherigen Containers mit dem Flag '--previous' abrufen:
'''
kubectl logs -n=cognigy-ai --vorherige Bereitstellung/Dienstsicherheit
'''
Wenn "service-security" mehrmals neu gestartet wurde, müssen Sie zum Zurücksetzen der init-Benutzeranmeldeinformationen die "service-security"-Datenbank in der MongoDB-Datenbank löschen und die "service-security"-Bereitstellung neu starten. 

**WICHTIG: Alle Organisationen und Benutzer gehen während dieses Vorgangs verloren. Führen Sie dies nur während der Ersteinrichtung Cognigy.AI** durch.  Hier finden Sie ein separates Dokument zum [Zurücksetzen der anfänglichen Anmeldeinformationen](reset-init-user-credentials.md)

## Aktivierung des Lizenzschlüssels
Sobald Sie die anfänglichen Benutzeranmeldeinformationen erhalten haben, besuchen Sie die Weboberfläche von Cognigy.AI, aber ersetzen Sie die URL mit der Endung "/login" durch "/license". Dadurch öffnet sich unser Lizenzaktivierungsbildschirm, der dem Anmeldeformular sehr ähnlich sieht, aber ein zusätzliches Lizenzschlüsselfeld enthält:

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/cognigy-ai-license-key.png" width="90%" />
  <figcaption>Aktivieren Cognigy.AI Produktlizenz</figcaption>
</figure>

Fügen Sie die anfänglichen Anmeldeinformationen (E-Mail-Adresse und Passwort) und Ihren Lizenzschlüssel ein (einschließlich der beiden Trennzeichen '====BEGIN LICENSE====' und '=====END LICENSE=====') und klicken Sie auf 'Lizenz aktivieren'. Wenn alles funktioniert hat, leitet die Anwendung auf den Anmeldebildschirm weiter, auf dem Sie sich anmelden können, um endlich Cognigy.AI zu verwenden.

!!! Warnung "Eingeschränkte Windows-Unterstützung"
    Wenn Sie die Datei mit dem Lizenzschlüssel auf einem Windows-Computer öffnen und speichern, kann sie mit versteckten Windows-Zeichen beschädigt werden. Verwenden Sie einen Linux-Rechner, um die Lizenz zu kopieren, oder einen Windows-Texteditor, der Linux-Dateien korrekt verarbeiten kann, z.B. [Notepad++](https://notepad-plus-plus.org/)