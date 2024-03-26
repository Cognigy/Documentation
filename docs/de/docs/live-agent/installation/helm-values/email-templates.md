---
 title: "E-Mail-Vorlagen" 
 Slug: "E-Mail-Vorlagen" 
 ausgeblendet: false 
 ignore_macros: wahr
---

# E-Mail-Vorlagen

Live Agent ermöglicht die Anpassung von E-Mail-Benachrichtigungen.

Um die E-Mail-Benachrichtigungen anzupassen, befolgen Sie die folgenden Anweisungen. Um den Inhalt zu aktualisieren, müssen Sie eine neue Vorlage in der Datenbank hinzufügen, hier erfahren Sie, wie Sie dies tun können.

### 1. Melden Sie sich bei der Rails-Konsole an.

Fügen Sie eine Shell an den Haupt-Live Agent-Pod an und führen Sie den folgenden Befehl aus:

'''rb
RAILS_ENV=Produktions-Bundle exec rails-Konsole
'''

### 2. Erstellen Sie eine neue Vorlage für die E-Mails. Führen Sie die folgenden Befehle aus.

'''rb
email_template = EmailTemplate.new
email_template.name = 'conversation_assignment' # Akzeptiert conversation_assignment, conversation_creation
email_template.body = '// Geben Sie Ihre Inhalte ein'
email_template.sparen!
'''

#### Variablen

Die Vorlage kann 3 Variablen empfangen:

1. 'user' - Verwenden Sie '{{ user.name }}', um den Benutzernamen zu erhalten.
2. 'conversation' - Verwenden Sie '{{ conversation.display_id }}', um die Konversations-ID zu erhalten
3. "action_url" - Dies ist die URL für die Konversation.

### Standardinhalt

Der Standardinhalt der obigen Vorlage ist unten dargestellt.

#### 1. Konversations-Zuweisung

'''html<p>Hallo {{user.available_name}},</p>
<p>Ihnen wurde eine neue Konversation zugewiesen</p>
<p> Klicken Sie <a href="{{action_url}}">hier</a> , um loszulegen.</p>'''

#### 2. Erstellung von Konversationen

'''html<p>Hallo {{user.available_name}}</p>

<p>Eine neue Konversation wurde in {{ inbox.name }} erstellt.</p>
<p>Klicken Sie <a href="{{ action_url }}">hier</a> , um loszulegen.</p>'''

[Flüssigkeits-Templating-Engine] (https://shopify.github.io/liquid/) wird intern verwendet, d.h. es können auch alle gültigen Operatoren verwendet werden.