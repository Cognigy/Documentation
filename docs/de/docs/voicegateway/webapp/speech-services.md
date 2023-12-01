---
title: "Speech Services" 
Slug: "VG-WebApp-Speech-Services" 
description: "Speech Services ermöglichen das Hinzufügen mehrerer Speech-Anbieter zum Voice Gateway-Portal"
ausgeblendet: false
---

# Sprachdienste

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.56-blue.svg)] (.. /.. /release-notes/4.56.md)

*Speech-Dienste* ermöglichen das Hinzufügen mehrerer Speech-Anbieter zum Voice Gateway. Die vollständige Liste der unterstützten Anbieter finden Sie in der [TTS- und STT-Anbieter](.. /references/tts-and-stt-vendors.md) Referenz.

Um einen Sprachdienst zu erstellen, wählen Sie im Menü auf der linken Seite Anwendungen aus, und klicken Sie dann auf **Sprachdienst hinzufügen** oder **+**. Wählen Sie verfügbare Sprachanbieter aus der Liste aus. Rufen Sie Anmeldeinformationen von Ihrem Anbieter ab, und fügen Sie sie den Einstellungen des Sprachdienstanbieters hinzu.

Sie können mithilfe von Sprachanbietern mehrere Spracherkennungsdienste erstellen.

Wenn Sie mehrere Spracherkennungsdienste desselben Anbieters erstellen müssen, verwenden Sie das Feld **Beschriftung**, um einen eindeutigen Spracherkennungsdienst zu erstellen.

Nachdem Sie einen Spracherkennungsdienst erstellt haben, können Sie ihn bearbeiten oder löschen.

!!! Warnung
    Benutzer mit einem Kontobereich können nur Sprachdienste bearbeiten, die sie selbst erstellt haben, sowie Spracherkennungsdienste, die von anderen Benutzern mit demselben Bereich erstellt wurden. Sie können weiterhin Sprachdienste verwenden und anzeigen, die von Dienstanbietern oder Administratoren freigegeben wurden.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-speech-services.png"  width="100%" />

## Hinzufügen eines Anbieters für benutzerdefinierte Sprache

Gehen Sie folgendermaßen vor, um einen Anbieter für benutzerdefinierte Sprachaussprachen hinzuzufügen:

1. Öffnen Sie das Cognigy Voice Gateway Self-Service-Portal.
2. Wählen Sie im Menü auf der linken Seite **Sprache** aus.
3. Klicken Sie auf der Seite **Speech-Dienste** auf **Speech-Dienst hinzufügen**.
4. Wählen Sie auf der Seite **Spracherkennungsdienst hinzufügen** in der Liste **Anbieter** die Option **Benutzerdefiniert** aus.
5. Geben Sie im Feld **Name** einen eindeutigen Namen für Ihren Anbieter an. Sie müssen diesen Namen in der Knotenkonfiguration wiederverwenden.
6. Wählen Sie in der Liste **Konto** ein bestimmtes Konto aus, oder lassen Sie den Wert **Alle Konten** bei, wenn Sie möchten, dass der Anbieter für benutzerdefinierte Sprache für alle verfügbaren Konten verfügbar ist.
7. Erstellen Sie im Feld **Bezeichnung** nur dann eine Bezeichnung, wenn Sie mehrere Sprachdienste desselben Anbieters erstellen müssen. Verwenden Sie dann die Bezeichnung in Ihrer [Anwendung](applications.md#add-additional-tts-and-stt-vendor), um anzugeben, welcher Dienst verwendet werden soll. 
8. Aktivieren Sie die Einstellung **Für Text-to-Speech verwenden**, um diesen Anbieter als TTS-Anbieter zu verwenden. Geben Sie die TTS-HTTP-URL ein, die Sie von Ihrem TTS-Anbieter erhalten. 
9. Aktivieren Sie die Einstellung **Für Sprache-zu-Text verwenden**, um diesen Anbieter als STT-Anbieter zu verwenden. Geben Sie die STT-Websocket-URL ein, die Sie von Ihrem TTS-Anbieter erhalten. 
10. Geben Sie im Feld **Authentifizierungstoken** den Schlüssel ein, den Sie von Ihrem TTS- oder STT-Anbieter erhalten, um eine Verbindung einzurichten. 
11. Klicken Sie auf **Speichern**.

So beginnen Sie mit der Verwendung Ihres Sprachanbieters:
Sie müssen den Anbieternamen im Parameter **Benutzerdefiniert** der entsprechenden Knoten angeben.
wie z. B. [Sitzungskonfiguration festlegen](.. /.. /ai/flow-nodes/vg/set-session-config.md),
[Sagen] (.. /.. /ai/flow-nodes/message/say.md#voice-gateway), [Question](.. /.. /ai/flow-nodes/message/question.md) oder [Optionale Frage](.. /.. /ai/flow-nodes/message/optionale-frage.md),
oder [Konfiguration der Sprachparameter der Sitzung](.. /.. /ai/flow-nodes/generic-voice-nodes/session-speech-parameters-config.md).

## Mehr Informationen

- [TTS- und STT-Anbieter](.. /references/tts-and-stt-vendors.md)