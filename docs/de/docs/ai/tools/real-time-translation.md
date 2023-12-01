---
Titel: "Echtzeit-Übersetzung" 
Slug: "Echtzeit-Übersetzung" 
ausgeblendet: false 
---

# Echtzeit-Übersetzung

_Real-Time-translation_ konvertiert Sprachen während Live-Konversationen sofort, so dass keine Vorübersetzung erforderlich ist, wie sie normalerweise bei typischen [Lokalisierung](.. /resources/manage/localization.md) Szenarien.

Mit der Echtzeit-Übersetzungsfunktion benötigen Sie keine Agenten, die alle für Ihr Unternehmen erforderlichen Sprachen sprechen. Sie können sich auf nur zwei oder drei Kernsprachen konzentrieren, aber gleichzeitig können Sie durch die Nutzung der Echtzeit-Übersetzungsfunktionen von Cognigy Ihren Kunden Dienstleistungen in bis zu hundert Sprachen anbieten.

Sie können die Echtzeit-Übersetzungsfunktion innerhalb der [Echtzeit-Übersetzung](.. /endpoints/real-time-translation-settings.md) im Endpunkt.
Die Echtzeitübersetzung kann für jeden Endpunkttyp konfiguriert werden, einschließlich Sprachendpunkten, wie z. B.dem Voice Gateway.

Verwenden Sie diese Funktion, um eine Konversation zwischen den folgenden Akteuren zu übersetzen:

- [Benutzer und virtuelle Agenten](#users-und-virtuelle-Agenten)
- [Benutzer und menschliche Agenten](#users-und-menschliche-agenten)

## Benutzer und virtuelle Agenten

Die Übersetzung zwischen einem Benutzer und einem virtuellen Agenten in Echtzeit funktioniert für textbasierte und sprachbasierte Gespräche.

### Beispiel für einen Webchat-Endpunkt

Bedingungen:

- Webchat-Konversation mit der **vorausgewählten** Benutzersprache.
- Die Sprache des Benutzers ist Russisch.

Ergebnis:

Die Inhalte des virtuellen Agenten werden in Echtzeit ins Russische übersetzt. Alles in der Konversation wird übersetzt, einschließlich Komponenten wie die Datumsauswahl (Tag, Monat, Woche).

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/preselected_user_language_1.png" width="70%" />
  <figcaption>Webchat Echtzeit-Übersetzung und vorgewählte Sprache für Benutzereingaben</figcaption>
</figure>

## Benutzer und menschliche Agenten

Unterhaltungen mit Echtzeitübersetzung zwischen dem Benutzer und einem menschlichen Agenten werden zu Compliance-Zwecken aufgezeichnet.

In Ihrem Flow muss ein **Übergabeknoten an den Agenten** hinzugefügt werden.

### Beispiel für eine Chatwoot-Übergabe

Bedingungen:

- Die Sprache des Nutzers ist Deutsch. 
- Die Sprache von Human Agent ist Englisch.

Ergebnis:

Die Webchat-Konversation zwischen einem Benutzer und dem virtuellen Agenten beginnt.
Wenn der Benutzer zu irgendeinem Zeitpunkt in der Konversation den Wunsch äußert, mit einem menschlichen Agenten zu sprechen,
wie z.B. zu sagen: "Ich würde gerne mit einem menschlichen Agenten sprechen",
Cognigy Virtual Agent erkennt diese Absicht, stoppt die Flow-Ausführung,
und übergibt die Konversation an einen Live-Agenten, der dann die Interaktion übernehmen und fortsetzen kann.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/Webchat_1.png" width="70%" />
  <figcaption>Webchat-Konversation mit einem Übergabeantrag des Benutzers</figcaption>
</figure>

Der Chat-Flow-Prozess zwischen dem Benutzer und dem menschlichen Agenten, der eine Echtzeitübersetzung beinhaltet, läuft wie folgt ab:

- Der menschliche Agent sieht in Echtzeit übersetzte Benutzereingaben auf Englisch und antwortet auf Englisch.
- Der Benutzer erhält in Echtzeit übersetzte Antworten des menschlichen Agenten auf Deutsch innerhalb seiner Webchat-Anwendung und Antworten auf Deutsch.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/tools/images/real-time_translation_Webchat-Live_Agent_4.png" width="100%" />
  <figcaption>Ein menschliches Agentengespräch (Englisch) mit einem Benutzer (Deutsch) in Echtzeit-Übersetzung</figcaption>
</figure>

Wenn Sie auf "Auflösen" klicken, kann der menschliche Agent die Konversation schließen, und der Benutzer kehrt wie zuvor zur Konversation des virtuellen Agenten zurück.

## Mehr Informationen

- [Echtzeit-Übersetzungseinstellungen](.. /endpoints/real-time-translation-settings.md)
- [Automatische Übersetzung](auto-localization.md)
- [Lokalisierung](.. /resources/manage/localization.md)