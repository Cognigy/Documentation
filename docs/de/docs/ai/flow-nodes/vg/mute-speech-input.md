---
title: "Spracheingabe stummschalten"
slug: "stumm-spracheingabe"
description: "Mit dem Voice Gateway Mute Speech Input Node können Sie steuern, wann Spracheingaben in Ihrem Flow erfasst werden, um Unterbrechungen zu vermeiden und ein reibungsloseres Gesprächserlebnis zu gewährleisten, insbesondere in xApp Flows. Indem Sie die Spracherfassung nach Bedarf aktivieren oder deaktivieren, können Sie eine bessere Kontrolle behalten und einen nahtlosen Workflow in Ihrer Anwendung schaffen."
ausgeblendet: false
---

# Spracheingabe stummschalten

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.61-blue.svg)] (.. /.. /.. /release-notes/4.61.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/vg/mute-speech-input.png" width="80%" />
  <figcaption>Spracheingabe für das Voice-Gateway stummschalten</figcaption>
</figure>

## Beschreibung<div class="divider"></div>Dieser Knoten steuert, wann Sprach- und DTMF-Benutzereingaben in Ihrem Flow erfasst werden können.
Es verhindert Sprach- und DTMF-Unterbrechungen in bestimmten Fällen, z. B. [xApp Flows](https://docs.cognigy.com/ai/xApp/overview/), und ermöglicht so eine reibungslosere Konversation.
Durch Aktivieren oder Deaktivieren von Einstellungen in diesem Knoten nach Bedarf,
Sie behalten eine bessere Kontrolle und sorgen für einen nahtlosen Workflow in Ihrer Anwendung.

## Einstellungen

!!! Warnung
    Deaktivieren Sie eine Spracheingabe während des gesamten Anrufs nicht, um zusätzliche Nachrichten vom Benutzer zu erhalten, insbesondere wenn der virtuelle Assistent mehrere Nachrichten mit Zeitabständen dazwischen senden muss.

| Parameter | Typ | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-------------------|--------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  -----------------------------------------------------------------------|
| Spracheingabe stummschalten | Umschalten | Deaktiviert die Spracheingabeerkennung für den aktuellen Anruf. Standardmäßig ist die Einstellung deaktiviert, sodass die Knoten unterhalb des Spracheingabeknotens Spracheingabe stummschalten Spracheingaben akzeptieren können. <br><br> Wenn diese Einstellung aktiviert ist, akzeptieren die Knoten unterhalb des Spracheingabeknotens stummschalten keine Spracheingaben oder Ziffern als Antwort.  Sie wirkt sich auf alle Spracheingaben aus, die über die folgenden Knoten getätigt werden:<br> - Knoten mit festgelegten Aktivitätsparametern. <br> - Say-and-Play-Knoten mit aktiviertem Barge-In können nicht mehr unterbrochen werden.<br> - Frage- und optionale Frageknoten. |
| DTMF-Eingang stummschalten | Umschalten | Deaktiviert die DTMF-Eingangserkennung für den aktuellen Anruf. Standardmäßig ist diese Einstellung deaktiviert, so dass die Knoten unterhalb des Mute-Eingangsknotens DTMF-Eingaben akzeptieren können. <br><br> Wenn diese Einstellung aktiviert ist, akzeptieren die Knoten unterhalb des DTMF-Eingangsknotens "DTMF stummschalten" keine DTMF-Eingaben mehr. Diese Einstellung wirkt sich auf alle DTMF-Eingaben aus, die über die folgenden Knoten erfolgen:<br> - Knoten mit festgelegten Aktivitätsparametern.<br> - DTMF- und Play-Nodes mit aktivierter DTMF-Einstellung können nicht mehr unterbrochen werden.                                                              |

## Beispiel für die Stummschaltung von Spracheingaben

Im folgenden Beispiel können Sie mit dem Mute-Knoten steuern, wann Spracheingaben innerhalb des Flows akzeptiert oder deaktiviert werden:

1. Sagen Sie Node: "Hallo, Sie erhalten eine xApp".
2. xApp: Init-Sitzungsknoten.
3. Spracheingabe stummschalten (aktiviert).
4. Frageknoten: "Bitte bewerten Sie Ihre Erfahrung mit der xApp auf einer Skala von 1 bis 5".<br>Wenn der STT des Stummschaltungsknotens aktiviert ist, akzeptiert der Frageknoten keine Spracheingaben oder Ziffern als Antwort. Der Benutzer muss die Bewertung auf andere Weise bereitstellen, z. B. durch Auswählen einer Zahl mithilfe von Schaltflächen oder Eingeben der Antwort. Dieser Prozess stellt sicher, dass die Spracherfassung während der Bewertungsfrage vorübergehend ausgeschaltet wird, um unbeabsichtigte Interferenzen durch Hintergrundsprache zu vermeiden.
5. Knoten STT stummschalten (deaktiviert). <br> Nach der Bewertungsfrage wird der Mute Node STT deaktiviert, so dass die nachfolgenden Nodes Spracheingaben normal akzeptieren können.

## Beispiel für einen DTMF-Eingang stummschalten

Im folgenden Beispiel können Sie mit dem DTMF-Eingangsknoten "DTMF stummschalten" steuern, wann der DTMF-Eingang (Dual-Tone Multi-Frequency) innerhalb des Flows akzeptiert oder deaktiviert wird:

1. Sagen Sie Node: "Willkommen im interaktiven Menü".
2. xApp: Init-Sitzungsknoten.
3. DTMF-Eingang stummschalten (aktiviert).
4. Frageknoten: "Bitte wählen Sie mit Ihrer Tastatur eine Option aus dem Menü aus". <br>Wenn der DTMF-Eingangsknoten stummschalten aktiviert ist, akzeptiert der Frageknoten keine DTMF-Eingaben. Benutzer müssen mit anderen Mitteln mit dem Menü interagieren, z. B. mit Spracherkennung oder der Auswahl von Optionen über Tasten oder Touchscreen. Dadurch werden unbeabsichtigte DTMF-Eingabestörungen vermieden, während die Spracherkennung oder andere Eingabemethoden aktiv sind.
5. DTMF-Eingang stummschalten (deaktiviert).

Nach der Menüinteraktion wird der DTMF-Eingangsknoten stummschalten deaktiviert, sodass nachfolgende Knoten DTMF-Eingaben normal akzeptieren können.

## Mehr Informationen

- [Generischer Spracheingabeknoten stummschalten](.. /generic-voice-nodes/mute-speech-input.md)
- [xApps](.. /.. /xApp/overview.md)
- [xApp-Knoten](.. /xApp/overview.md)