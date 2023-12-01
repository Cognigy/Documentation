---
Titel: "Letzte Anrufe" 
Slug: "vg-webapp-recent-calls"
description: "Die Funktion "Letzte Anrufe" des Voice Gateways bietet wichtige Informationen zu jedem Anruf, einschließlich Datum, Richtung, Anrufer-ID, Empfänger, SIP-Trunk und Anrufdauer."
ausgeblendet: false
---

# Kürzliche Anrufe

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.60-blue.svg)] (.. /.. /release-notes/4.60.md)

*Kürzliche Anrufe* sind Anrufe Ihres [Kontos](accounts.md). Voice Gateway stellt allgemeine Daten zu den Anrufen bereit, z. B. Datum, Richtung, Von, An, SIP-Trunk und Anrufdauer. 

"Konto", "Datum", "Richtung" und "Status" können diese Anrufe filtern. Beachten Sie, dass Sie nur maximal nach den letzten 30 Tagen filtern können.

Um detaillierte Informationen zum Anruf anzuzeigen, klicken Sie auf die Registerkarte **Details**.

Darüber hinaus stellt Voice Gateway PCAP-Dateien zur Verfügung, die in der detaillierten Informationsübersicht heruntergeladen werden können.

Bei eingehenden Anrufen können Sie den erfassten Medienstream analysieren, um Probleme mit der Sprachqualität zu diagnostizieren und zu beheben, indem Sie auf die Registerkarte **Ablaufverfolgung** klicken und den Bericht anzeigen. Diese Funktion bietet wertvolle Einblicke in die Dauer verschiedener Aktionen während des Anrufs, wie z. B. Spracherkennung und Verbindungen. Durch die Überprüfung des Berichts können Sie alle Verzögerungen oder Probleme identifizieren, die während dieser Aktionen aufgetreten sind, und so potenzielle Bereiche mit Verbesserungspotenzial in Bezug auf Leistung und Effizienz ermitteln.

Wenn [Anrufaufzeichnungen](recent-calls.md#call-recordings) unter [Kontoeinstellungen](accounts.md#call-recording-configuration) aktiviert sind, werden alle aufgezeichneten Anrufe auch in einem Audioplayer unter den Anrufdetails angezeigt.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-recent-calls.png"  width="100%" />

## PCAP-Felder

| Einstellungen | Beschreibung |
|----------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| attempted_at | Der Zeitpunkt des Versuchs.                                                                                                                |
| account_sid | Identifiziert das Konto, zu dem dieses Telefon gehört.                                                                                           |
| beantwortet | Bestimmt, ob ein Anruf angenommen wurde oder nicht.                                                                                          |
| answered_at | Der Zeitpunkt, an dem eine Antwort gegeben wurde.                                                                                                      |
| application_sid | Ein eindeutiger Bezeichner für die Anwendung.                                                                                                |
| call_sid | Ein eindeutiger Bezeichner für den Aufruf. Spezifisch für die Anruf-SIP-Sitzungen.                                                                   |
| Richtung | Bestimmt, ob ein Anruf eingehend oder ungebunden war.                                                                                       |
| Dauer | Die Dauer des Anrufs in Sekunden.                                                                                                    |
| von | Eine Telefonnummer des Teilnehmers, der den Anruf getätigt hat.                                                                                          |
| Gastgeber | Ein SBC-SIP-Server, der die eingehenden Anrufe verarbeitet hat.                                                                                      |
| remote_host | Zeigt die IP-Adresse des Netzbetreibers/SIP-Trunks an.                                                                                           |
| service_provider_sid | Eine eindeutige Kennung für den Dienstanbieter.                                                                                           |
| sip_callid | Eine eindeutige Sitzungs-ID, die Sie für verschiedene Zwecke verwenden können, einschließlich Anrufprotokollierung und Abrechnungskorrelation.                      |
| sip_status | Eine [SIP-Code-Antwort](https://en.wikipedia.org/wiki/List_of_SIP_response_codes).                                                        |
| terminated_at | Die Zeit des Anrufs war beendet.                                                                                                         |
| termination_reason | Der Grund, warum der Anruf beendet wurde.                                                                                                      |
| bis | Eine Telefonnummer des Teilnehmers, an den der Anruf getätigt wurde.                                                                                  |
| trace_id | Ein eindeutiger Bezeichner für den Aufruf. Kann verwendet werden, um jede Art von Anruf oder Sitzung zu verfolgen, während sie durch verschiedene Teile des Netzwerks läuft. |
| Kofferraum | Ein [Spediteur](carriers.md) Name.                                                                                                          |

## Gesprächsaufzeichnungen

Wenn die Anrufaufzeichnung aktiviert ist, können Sie den eingebetteten Media Player verwenden, um Aufzeichnungen von Anrufen zu Debugging-Zwecken abzuhören.

Mit den mitgelieferten Mediaplayer-Steuerelementen können Sie den Ton scannen und die Aufnahme zusätzlich lokal herunterladen.

Markierte Abschnitte der Kundenaufzeichnung können angeklickt werden, wodurch sich ein neues Fenster öffnet und die Sprache zu einem Textergebnis angezeigt wird.

Sie können eine Anrufaufzeichnung löschen, indem Sie auf ! [Löschen] (.. /images/delete.svg). Beachten Sie, dass diese Aktion Ihre Datei sowohl aus Voice Gateway als auch aus dem Remote-Speicher, z. B. Amazon S3, löscht.