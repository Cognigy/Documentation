---
Titel: "Bandbreite"
Slug: "Bandbreite"
ausgeblendet: false
---

# Bandbreite

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.60-blue.svg)] (.. /.. /release-notes/4.60.md)

<figure>
  <img class="image-center" src="{{config.site_url}}ai/endpoints/images/bandwidth.png" width="20%"/>
</figure>

Innerhalb unserer **Cognigy.AI**-Plattform
Sie können Ihren virtuellen Agenten über die [Bandbreiten-Sprach-API](https://www.bandwidth.com/voice/voice-api/) mit Ihrem Contact Center oder anderen Telefonnummern verbinden.
Ermöglichen Sie es Kunden, mit Ihrem virtuellen Agenten zu sprechen, anstatt nur mit ihm zu schreiben.

## Generische Endpunkteinstellungen<div class="divider"></div>Informieren Sie sich auf den folgenden Seiten über die generischen Endpunkteinstellungen, die für diesen Endpunkt verfügbar sind:

- [Übersicht über Endpunkte](overview.md)
- [Datenschutz & Analyse](data-protection-and-analytics.md)
- [Transformator-Funktionen](Transformatoren/Transformatoren.md)
- [NLU-Anschlüsse](.. /resources/build/nlu-connectors.md)
- [Sitzungsverwaltung](.. /endpoints/session-management.md)
- [Echtzeit-Übersetzungseinstellungen](.. /endpoints/real-time-translation-settings.md)

## Bandbreiten-Einstellungen

### Asynchroner Modus

Wenn der asynchrone Modus für den Bandbreitenendpunkt aktiviert ist, werden Ausgaben direkt gesendet, wenn sie in einem Flow verarbeitet werden.
Dieser Ansatz ist von Vorteil, wenn der Flow eine HTTP-Anforderung senden muss.
Wenn der asynchrone Modus deaktiviert ist, werden Ausgaben gesendet, wenn der gesamte Flow die Verarbeitung für die angegebene Eingabe abgeschlossen hat.

Die Funktion [Inject & Notify](inject-and-notify.md) funktioniert nur, wenn der asynchrone Modus aktiviert ist.