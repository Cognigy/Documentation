---
Titel: "Spediteure" 
Slug: "VG-WebApp-Träger"
ausgeblendet: false 
---

# Spediteure

*Carrier* ermöglichen es Ihnen, Ihren SIP-Trunk mit dem Voice Gateway zu verbinden. 

Es gibt zwei Möglichkeiten, wie der SIP-Trunk hinzugefügt werden kann:

- indem Sie das Formular durchgehen und alle Felder ausfüllen.
- indem Sie auf **Vordefinierten Spediteur auswählen** klicken und einen der vorkonfigurierten Spediteure auswählen. Dadurch werden alle Felder mit Standardwerten vorausgefüllt.

!!! Warnung
    Benutzer mit einem Kontobereich können nur Spediteure bearbeiten, die sie selbst erstellt haben, sowie Spediteure, die von anderen Benutzern mit demselben Bereich erstellt wurden. Sie können weiterhin Spediteure verwenden und anzeigen, die von Dienstanbietern oder Administratoren freigegeben wurden.

<img class="image-center"  src="{{config.site_url}}voicegateway/images/VG-webapp-carriers.png"  width="100%" />

## Einstellungen<div class="divider"></div>| Einstellungen | Beschreibung | Geltungsbereich |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| Bezeichnung: | Name des SIP-Trunks.                                                                                                              | Konto, Dienstanbieter, Admin |
| Wählen Sie einen vordefinierten Spediteur aus | Vorkonfigurierte Liste von SIP-Trunks.                                                                                           | Konto, Dienstanbieter, Admin |
| Aktiv | Aktivieren oder deaktivieren Sie den Spediteur.                                                                                               | Konto, Dienstanbieter, Admin |
| E.164 Syntax | Definiert ein allgemeines Format für internationale Telefonnummern.                                                                | Konto, Dienstanbieter, Admin |
| Ausgehende Authentifizierung | Verwendung eines Benutzernamens und eines Kennworts für die Authentifizierung.                                                                      | Konto, Dienstanbieter, Admin |
| Präfix | Wird verwendet, um ein bestimmtes Ziffernmuster in der gewählten Nummer abzugleichen und den Anruf entsprechend weiterzuleiten.                           | Konto, Dienstanbieter, Admin |
| SIP-Umleitungs-Header | Bezeichnet einen Header, der zur Unterstützung von PSTN-Umleitungsdiensten wie der Anrufweiterleitung verwendet wird.                                            | Konto, Dienstanbieter, Admin |
| SIP-Gateways | Fügen Sie die Netzwerkadresse / den Port / die Netzmaske Ihres Netzbetreibers hinzu. Sie können die Richtung der Anrufe auswählen: Ausgehend, Eingehend oder beides. | Konto, Dienstanbieter, Admin |