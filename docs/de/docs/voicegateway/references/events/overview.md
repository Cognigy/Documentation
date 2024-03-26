---
title: "Voice Gateway Events"
Slug: "VG-Veranstaltungen"
ausgeblendet: false
---

# Voice Gateway-Ereignisse

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.61-blue.svg)] (.. /.. /.. /release-notes/4.61.md)

Während des Anrufs werden die folgenden Sprachereignisse in der Payload aufgezeichnet:

| Veranstaltung | Beschreibung |
|---------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------|
| [ANSWERING_MACHINE_DETECTION] (ANSWERING_MACHINE_DETECTION.md) | Der Anruf wurde eingeleitet und der Anrufbeantworter-Erkennungsprozess gestartet.                                              |
| [CALL_COMPLETED] (CALL_COMPLETED.md) | Der Anruf wurde vom virtuellen Agenten oder vom Benutzer beendet.                                                             |
| [CALL_CREATED] (CALL_CREATED.md) | Der Benutzer hat einen Anruf erstellt.                                                                                                 |
| [CALL_FAILED] (CALL_FAILED.md) | Der Anruf wurde beendet.                                                                                                 |
| [CALL_RECONNECTED] (CALL_RECONNECTED.md) | Der Anruf wurde aufgrund von Netzwerkproblemen wieder verbunden.                                                                        |
| [RECOGNIZED_SPEECH] (RECOGNIZED_SPEECH.md) | Die Antwort des Benutzers wurde vom virtuellen Agenten erkannt.                                                                   |
| [RECOGNIZED_DTMF] (RECOGNIZED_DTMF.md) | Der DTMF-Code wurde vom virtuellen Agenten erkannt.                                                                       |
| [TRANSFER_DIAL_ERROR] (TRANSFER_DIAL_ERROR.md) | Die Anrufweiterleitung mit der "Dial"-Methode ist aus verschiedenen Gründen fehlgeschlagen, z. B. aufgrund eines nicht erreichbaren Ziels oder Netzwerkproblemen. |
| [TRANSFER_DIAL_SUCCESS] (TRANSFER_DIAL_SUCCESS.md) | Die Anrufweiterleitung mit der "Dial"-Methode war erfolgreich, da die neue Telefonleitung zum Ziel eingerichtet wurde.              |
| [TRANSFER_REFER_ERROR] (TRANSFER_REFER_ERROR.md) | Die Anrufweiterleitung mit der Methode "Refer" ist fehlgeschlagen, möglicherweise aufgrund eines nicht verfügbaren oder abgelehnten Ziels.              |
| [TRANSFER_REFER_SUCCESS] (TRANSFER_REFER_SUCCESS.md) | Die Anrufweiterleitung mit der Methode "Refer" war erfolgreich, wobei die Anrufverantwortung an ein anderes Ziel übergeben wurde.        |
| [USER_BUSY] (USER_BUSY.md) | Der Benutzer (Anrufer) war beschäftigt und konnte den Anruf nicht entgegennehmen oder die gewünschte Aktion ausführen.                                |
| [USER_INPUT_TIMEOUT] (USER_INPUT_TIMEOUT.md) | Der virtuelle Agent hat den Anruf beendet, weil der Benutzer nicht geantwortet hat.                                                  |
| [NO_ANSWER] (NO_ANSWER.md) | Der Benutzer oder Empfänger des Anrufs nimmt den Anruf nicht entgegen.                                                                       |

Sie können auf Voice Gateway-Ereignisse entweder im Eingabeobjekt 'input.data.event' oder im [Output Transformer](.. /.. /.. /ai/endpoints/transformers/output-transformer.md). Fortgeschrittene Benutzer können diese Ereignisse für spezielle Zwecke wie [analytics](.. /.. /.. /ai/tools/analytics/analytics-concepts.md). 

Der Ausgangstransformator wird nach der Verarbeitung des Flusses ausgeführt. Wenn Sie z. B. das Ereignis "CALL_COMPLETED" erhalten, schreiben Sie einige Metriken per HTTP-Anforderung in den Transformer.

Sie können auch einen **Lookup**-Knoten mit dem [Anrufereignisstatus](.. /.. /.. /ai/flow-nodes/logic/lookup.md#call-event-status) verwenden, um diese Ereignisse wiederzuverwenden, die Anrufbearbeitung zu optimieren und die Effizienz zu verbessern.