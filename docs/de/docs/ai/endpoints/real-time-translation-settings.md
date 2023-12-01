---
Titel: "Echtzeit-Übersetzungseinstellungen" 
slug: "Echtzeit-Übersetzungseinstellungen" 
ausgeblendet: false 
---

# Echtzeit-Übersetzungseinstellungen

Cognigy.AI unterstützt die Integration mit verschiedenen Echtzeit-Übersetzungsdiensten, sodass Sie eingehenden Text automatisch in die Sprache Ihres Flows übersetzen und die Flow-Ausgabe wieder in die Sprache des Benutzers übersetzen können.

Bevor Sie diese Funktion verwenden können, müssen Sie einen Anbieter für maschinelle Übersetzung konfigurieren. Die Wahl des Anbieters wirkt sich nicht auf die Konfiguration aus, aber es kann Unterschiede in den Übersetzungsergebnissen und der Liste der unterstützten Sprachen geben.

## Übersetzungsanbieter konfigurieren

{! _includes/ai/settings/add-machine-translation-provider.md !}

## Echtzeit-Übersetzungseinstellungen konfigurieren

[! [Versions-Abzeichen] (https://img.shields.io/badge/Updated in-v4.63-blue.svg)] (.. /.. /release-notes/4.63.md)

Nachdem Sie einen Übersetzungsanbieter ausgewählt haben, können Sie nun Übersetzungsparameter in der Endpunktkonfiguration konfigurieren.

1. Öffnen Sie die Cognigy.AI-Schnittstelle.
2. Wählen Sie im Menü auf der linken Seite einen Agenten aus.
3. Wählen Sie im Menü "Agent" auf der linken Seite die Option "> Endpunkte bereitstellen" aus.
4. Wählen Sie einen vorhandenen Endpunkt aus oder erstellen Sie einen neuen.
5. Wechseln Sie in den Endpunkteinstellungen zum Abschnitt **Echtzeit-Übersetzungseinstellungen**. In diesem Abschnitt wird automatisch der Anbieter ausgewählt, den Sie in der Konfiguration der Einstellungen für Übersetzungsanbieter konfiguriert haben.
6. Konfigurieren Sie die Einstellungen basierend auf Ihrem Anbieter:

| Parameter | Beschreibung | Anbieter                              |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------|
| Übersetzung aktivieren | Gibt an, ob die Übersetzung für den Endpunkt aktiviert ist.                                                                                                                                                                                                                                                                                                                                                                     | Microsoft, Google, DeepL Translate Pro |
| Sprache der Benutzereingabe | Legt eine Sprache der Benutzereingaben fest. Wenn Sie die Option **Automatische Erkennung** ausgewählt haben, lesen Sie den Abschnitt [Benutzereingaben automatisch erkennen](#auto-detect-user-inputs).                                                                                                                                                                                                                                                                | Microsoft, Google, DeepL Translate Pro |
| Flow-Sprache | Legt eine Sprache für die Flow-Ausgaben fest.                                                                                                                                                                                                                                                                                                                                                                                     | Microsoft, Google, DeepL Translate Pro |
| Festlegen der Benutzereingabesprache für die Anzahl der Ausführungen | Wenn die Eingabesprache auf **Automatische Erkennung** eingestellt ist, wird sie bei dieser Ausführungsanzahl auf den aktuellen Wert fixiert. Der Maximalwert beträgt 5 Benutzereingaben. Diese Einstellungen gelten für alle Sprachen, die von Cognigy.AI unterstützt werden.                                                                                                                                                                                                            | Microsoft, Google, DeepL Translate Pro |
| Glossar-ID-Ausgabe | Bestimmt die Glossar-ID für die Ausgabeübersetzungen des virtuellen Agenten. Um sicherzustellen, dass die Übersetzungen korrekt funktionieren, müssen die Ausgangs- und Zielsprache des Glossars mit der ausgewählten Sprache in den Feldern **Flusssprache** und **Benutzereingabesprache** übereinstimmen.                                                                                                                                                          | DeepL Translate Pro |.                                                                                                                                                                        | DeepL Übersetzer Pro |
| Glossar-ID-Eingabe | Legt die Glossar-ID für Benutzereingabeübersetzungen fest. Um sicherzustellen, dass die Übersetzungen korrekt funktionieren, müssen die Ausgangs- und Zielsprache des Glossars mit der ausgewählten Sprache in den Feldern **Flusssprache** und **Benutzereingabesprache** übereinstimmen. Wenn **Automatische Erkennung** im Feld **Benutzereingabesprache** ausgewählt ist, wird das Glossar nicht für Eingabeübersetzungen verwendet.                                                 | DeepL Übersetzer Pro |
| Formalität | Legt den Grad der Formalität im übersetzten Text fest. Die Einstellung gilt für bestimmte Zielsprachen wie DE (Deutsch), FR (Französisch), IT (Italienisch), ES (Spanisch), NL (Niederländisch), PL (Polnisch), PT-BR und PT-PT (Portugiesisch), JA (Japanisch) und RU (Russisch). Durch die Auswahl der geeigneten Formalitätsstufe können Sie die Übersetzung besser an Ihre Kommunikationsbedürfnisse anpassen, sei es für formelle oder informelle Kontexte. | DeepL Übersetzer Pro |
| Markierung ohne Übersetzung | Der Text, der in dieser Markierung enthalten ist, wird nicht übersetzt. Zum Beispiel wird "Ich liebe die Cognigy.AI-Plattform" nicht mit "Cognigy.AI" übersetzt.                                                                                                                                                                                                                                                                                   | Microsoft, Google, DeepL Translate Pro |
| No-Translation-Markierungen immer entfernen | Legt fest, ob No-Translation-Markierungen entfernt werden sollen, auch wenn die Übersetzung deaktiviert ist | Microsoft, Google, DeepL Translate Pro |
| Verhindern, dass Nutzlasten übersetzt werden | Verhindert die Übersetzung von Benutzereingaben basierend auf Nutzlasten.                                                                                                                                                                                                                                                                                                                                                                     | Microsoft, Google, DeepL Translate Pro |

### Automatische Erkennung von Benutzereingaben

In den Einstellungen haben Sie die Möglichkeit, eine vordefinierte Sprache auszuwählen oder **Auto-Detect** als Benutzereingabesprache zu wählen.

Wenn die automatische Spracherkennung für Benutzereingaben aktiviert ist, bestimmt das System die Sprache anhand der Anzahl der Benutzereingaben. Um die Anzahl der Benutzereingaben zu konfigurieren, legen Sie den Parameter **Benutzereingabesprache auf Ausführungsanzahl festlegen** auf den gewünschten Wert fest.

Wenn im folgenden Beispiel die Einstellung **Benutzereingabesprache bei Ausführungsanzahl festlegen** auf "1" konfiguriert ist, verwendet ein virtueller Agent die Sprache der ersten Eingabe des Benutzers für alle nachfolgenden Interaktionen.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/auto-detected_user_language.png" width="70%" />
  <figcaption>Automatisch erkannte Benutzereingaben sind deutsch</figcaption>
</figure>

## Mehr Informationen

- [Echtzeit-Übersetzung](.. /tools/real-time-translation.md)
- [Automatische Übersetzung](.. /tools/auto-localization.md)