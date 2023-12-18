---
 Titel: "SMTP" 
 Schnecke: "SMTP" 
 ausgeblendet: false 
---
# SMTP

SMTP muss für Funktionen wie Agentenbenachrichtigungen für neue Konversationen, Zurücksetzen von Kennwörtern, zur Überprüfung neuer Agentenkonten usw. konfiguriert werden.

## Werte

| Bezeichnung: | Typ | Standardwert |
|---------------------------------------|---------------------------------------------------------------|---------------|
| 'configmap. SMTP_ADDRESS' | Legen Sie Ihre SMTP-Adresse fest.                                        | '""'          |
| 'configmap. SMTP_AUTHENTICATION' | Erlaubte Werte: 'plain','login','cram_md5' | '"plain"' |
| 'configmap. SMTP_ENABLE_STARTTLS_AUTO' | Der Standardwert ist true.                                             | '"wahr"' |
| 'configmap. SMTP_OPENSSL_VERIFY_MODE' | Kann sein: 'none', 'peer', 'client_once', 'fail_if_no_peer_cert' | '"keine"' |
| 'configmap. SMTP_PASSWORD' | SMTP-Kennwort, das ignoriert wird, wenn der geheime Schlüssel definiert wird.            | '""'          |
| 'configmap. SMTP_PORT' | SMTP-Anschluss | '"587"' |
| 'configmap. SMTP_USERNAME' | SMTP-Benutzername | '""'          |
| 'configmap. MAILER_SENDER_EMAIL' | Die E-Mail-Adresse, von der aus alle ausgehenden E-Mails gesendet werden.            | '""'          |

### Erstellen eines Geheimnisses für das SMTP-Passwort

Erstellen Sie vor der Installation von Live Agent mit Helm einen geheimen Schlüssel für den Kubernetes-Cluster-Namespace, in dem Live Agent installiert ist. Notieren Sie sich den Namen und den Schlüssel des SMTP-Geheimnisses, und legen Sie die folgenden Werte fest:

| Bezeichnung: | Typ | Standardwert |
|--------------------------|------------------|---------------|
| 'smtp.secret' | Name des SMTP-Geheimnisses | '""'          |
| 'smtp.secretPasswordKey' | Geheimer SMTP-Schlüssel | '""'          |

## Verschiedene SMTP-Server konfigurieren

Im Folgenden finden Sie ein Beispiel für Konfigurationen, mit denen Sie die E-Mail-Funktionalität für die Live Agent-Anwendung zum Laufen bringen können.  Denken Sie daran, dass das SMTP-Kennwort, wie oben erwähnt, im geheimen Schlüssel gespeichert wird.

Für den folgenden Absenderwert können Sie entweder 'email@yourdomain.com' oder 'BrandName <email@yourdomain.com>' verwenden

| Bezeichnung: | Typ | Wert | 
|-------------------------------|--------|-------| 
| configmap. MAILER_SENDER_EMAIL | Zeichenfolge | '""'  |

Legen Sie die folgenden Variablen basierend auf Ihrer SMTP-Serverkonfiguration fest.

| Bezeichnung: | Typ | Wert | 
|-------------------------|--------|-------| 
| configmap. SMTP_ADDRESS | Zeichenfolge | '""'  |
| configmap. SMTP_USERNAME | Zeichenfolge | '""'  |
| Passwort-Geheimnis | Zeichenfolge | '""'  |

## Keine Authentifizierung

Wenn Ihr Server keine Authentifizierung benötigt, kommentieren Sie oder geben Sie diese Werte nicht an: SMTP_AUTHENTICATION.
SMTP_USERNAME, SMTP_PASSWORD in der Datei 'values.yaml'.

| Bezeichnung: | Typ | Wert | 
|-------------------------------------|---------|---------------------------| 
| configmap. MAILER_SENDER_EMAIL | Zeichenfolge | '"Ihr SMTP-Benutzername"' |
| configmap. SMTP_ADDRESS | Zeichenfolge | '"smtp-mail.outlook.com"' |
| configmap. SMTP_ENABLE_STARTTLS_AUTO | bool | 'wahr' |
| configmap. SMTP_PORT | Zeichenfolge | '"587"' |

## Amazon SES

| Bezeichnung: | Typ | Wert | 
|-------------------------------------|--------|---------------------------------------| 
| configmap. SMTP_ADDRESS | Zeichenfolge | '"email-smtp. <region>.amazonaws.com"' |
| configmap. SMTP_AUTHENTICATION | Zeichenfolge | '"plain"' |
| configmap. SMTP_ENABLE_STARTTLS_AUTO | bool | 'wahr' |
| configmap. SMTP_USERNAME | Zeichenfolge | '"<Your smtp="" username="">"' |
| Geheimes Passwort | Zeichenfolge | '"<Your smtp="" password="">"' |

## Ausblick

Absender und Benutzername müssen mit denen in Outlook übereinstimmen.

| Bezeichnung: | Typ | Wert | 
|-------------------------------------|--------|---------------------------| 
| configmap. MAILER_SENDER_EMAIL | Zeichenfolge | '"Ihr SMTP-Benutzername"' |
| configmap. SMTP_ADDRESS | Zeichenfolge | '"smtp-mail.outlook.com"' |
| configmap. SMTP_AUTHENTICATION | Zeichenfolge | '"login"' |
| configmap. SMTP_ENABLE_STARTTLS_AUTO | bool | 'wahr' |
| configmap. SMTP_USERNAME | Zeichenfolge | '"<Your smtp="" username="">"' |
| Geheimes Passwort | Zeichenfolge | '"<Your smtp="" password="">"' |
| configmap. SMTP_PORT | Zeichenfolge | '"587"' |

## SendGrid

| Bezeichnung: | Typ | Wert | 
|-------------------------------------|--------|-----------------------------| 
| configmap. SMTP_ADDRESS | Zeichenfolge | '"smtp.sendgrid.net"' |
| configmap. SMTP_AUTHENTICATION | Zeichenfolge | '"plain"' |
| configmap. SMTP_DOMAIN | Zeichenfolge | '"<Your verified="" domain="">"' |
| configmap. SMTP_ENABLE_STARTTLS_AUTO | bool | 'wahr' |
| configmap. SMTP_PORT | Zeichenfolge | '"587"' |
| configmap. SMTP_USERNAME | Zeichenfolge | '"apikey"' |
| Geheimes Passwort | Zeichenfolge | '"<your sendgrid="" api="" key="">"' |

## MailGun

| Bezeichnung: | Typ | Wert | 
|-------------------------------------|---------|-------------------------------------------------------| 
| configmap. SMTP_ADDRESS | Zeichenfolge | '"smtp.mailgun.org"' |
| configmap. SMTP_AUTHENTICATION | Zeichenfolge | '"plain"' |
| configmap. SMTP_DOMAIN | Zeichenfolge | '"<Your domain,="" this="" has="" to="" be="" verified="" in="" mailgun="">"' |
| configmap. SMTP_ENABLE_STARTTLS_AUTO | bool | 'wahr' |
| configmap. SMTP_PORT | Zeichenfolge | '"587"' |
| configmap. SMTP_USERNAME | Zeichenfolge | '"<Your smtp="" username,="" view="" under="" domains="" tab="">"' |
| Geheimes Passwort | Zeichenfolge | '"<Your smtp="" password,="" view="" under="" domains="" tab="">"' |

## Mandrill
Wenn Sie Mailchimp zum Versenden Ihrer E-Mails verwenden möchten, verwenden Sie die folgenden Umgebungsvariablen:

>Hinweis: Mandrill ist der Transaktions-E-Mail-Dienst für Mailchimp. Sie müssen Transaktions-E-Mail aktivieren und sich bei mandrillapp.com anmelden.

| Bezeichnung: | Typ | Wert | 
|-------------------------------------|--------|------------------------------------------------------------------------------| 
| configmap. SMTP_ADDRESS | Zeichenfolge | '"smtp.mandrillapp.com"' |
| configmap. SMTP_AUTHENTICATION | Zeichenfolge | '"plain"' |
| configmap. SMTP_DOMAIN | Zeichenfolge | '"<Your verified="" domain="" in="" mailchimp="">"' |
| configmap. SMTP_ENABLE_STARTTLS_AUTO | bool | 'wahr' |
| configmap. SMTP_PORT | Zeichenfolge | '"587"' |
| configmap. SMTP_USERNAME | Zeichenfolge | '"<Your smtp="" username,="" displayed="" under="" settings="" -=""> SMTP & API info>"' |
| Geheimes Passwort | Zeichenfolge | '"<Any valid="" api="" key,="" create="" an="" api="" key="" under="" settings="" -=""> SMTP & API Info>"' |

</Any></Your></Your></Your></Your></Your></your></Your></Your></Your></Your></Your></region></email@yourdomain.com>