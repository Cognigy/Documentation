---
title: "Routing für ausgehende Anrufe"
Slug: "Routing von ausgehenden Anrufen"
description: "Mit Voice Gateway Outbound Call Routing können Sie einen SIP-Trunk für ausgehende Anrufe auswählen und bestimmte Regeln für die Anrufweiterleitung einrichten."
ausgeblendet: false
---

# Weiterleitung von ausgehenden Anrufen

_Outbound Anruf Routing_ können Sie einen [Carrier](carriers.md) (SIP-Trunk) für ausgehende Anrufe auswählen und bestimmte Regeln für die Anrufweiterleitung konfigurieren.

## So funktioniert's

Wenn ein Benutzer einen ausgehenden Anruf initiiert, bestimmt die Funktion für die Weiterleitung ausgehender Anrufe den bevorzugten Netzbetreiber (SIP-Trunk) basierend auf den folgenden Fällen:

- **Die Telefonnummer des Anrufers, die in Voice Gateway registriert ist**. Wenn die Telefonnummer des Anrufers im Voice Gateway registriert ist, verwendet das System automatisch den SIP-Trunk, der mit dieser Telefonnummer verknüpft ist, für den ausgehenden Anruf.
- **Die Telefonnummer des Anrufers stimmt mit einer erstellten ausgehenden Routingregel überein**. Wenn die Telefonnummer des Anrufers mit einer der erstellten Regeln übereinstimmt, verwendet das System den in der Regel angegebenen SIP-Trunk für den ausgehenden Anruf.
- **Die Telefonnummer des Anrufers stimmt mit keiner Regel überein**. Wenn die Telefonnummer des Anrufers nicht mit einer erstellten ausgehenden Routing-Regel übereinstimmt, wählt das System nach dem Zufallsprinzip einen der verfügbaren SIP-Trunks aus, um den ausgehenden Anruf weiterzuleiten.

## Ausgehende Routing-Regeln konfigurieren

Stellen Sie vor der Konfiguration der Outbound-Routing-Regeln sicher, dass die Option **Outbound** in den **SIP Gateways**-Einstellungen des Carriers aktiviert ist.

Gehen Sie folgendermaßen vor, um eine Regel für ausgehende Anrufe einzurichten:

1. Öffnen Sie das Self-Service-Portal von Cognigy Voice Gateway. 
2. Wählen Sie im Menü auf der linken Seite **Routing für ausgehende Anrufe** aus. 
3. Klicken Sie auf der Seite **Routing ausgehender Anrufe** auf **Routen für ausgehende Anrufe hinzufügen**. 
4. Geben Sie auf der Seite **Routing für ausgehende Anrufe hinzufügen** im Feld Name einen eindeutigen Namen an, der den Anforderungen für Ihre Regel entspricht. 
5. Aktivieren Sie die Einstellung **Aktiv**, um mit der Anwendung dieser Regel zu beginnen. Wenn Sie diese Regel als Entwurf speichern möchten, deaktivieren Sie diese Einstellung. 
6. Wählen Sie einen Standard-Outbound-Carrier aus, über den die ausgehenden Anrufe weitergeleitet werden, wenn keine Regeln angewendet werden. 
7. Wählen Sie in der Liste Verwendet von die Konten, zu denen die Regel gehören soll, aus. Standardmäßig sind Alle Konten ausgewählt. 
8. Konfigurieren Sie im Abschnitt **Route basierend auf erster Übereinstimmung** eine Reihe von Regeln:
    - **Ziffernmuster** – Geben Sie eine Codenummer des Landes an, z. B. 49 für Deutschland, 46 für Schweden oder 1 für die Vereinigten Staaten.<br>Wenn Sie einen bestimmten Bereich erfassen müssen, können Sie auch einen regulären Ausdruck (Regex) verwenden. Beispielsweise ordnet '^\d{2}41\d{8}' nur brasilianische Nummern mit der Landesvorwahl "55" und der Vorwahl "41" zu, die mehrere Städte in Brasilien abdeckt. Alternativ führt die Verwendung der Ziffernkombination "5541" zum gleichen Zuordnungsergebnis.
    - **Spediteur** — Wählen Sie einen Spediteur aus der Liste aus.
9. Klicken Sie auf **Speichern**.

Die Regel wird angewendet.

Sie erstellen mehrere Regeln und ordnen denselben Spediteur mehreren davon zu. 
Diese Regeln werden in der Reihenfolge angewendet, in der sie aufgeführt sind. 
Die oben positionierte Regel hat Vorrang, gefolgt von den folgenden in der Reihenfolge. 
Um die Reihenfolge der Regeln zu ändern, bewegen Sie den Mauszeiger über eine Regel, halten Sie sie gedrückt und verschieben Sie sie an die gewünschte Position.