---
title: "Sichere xApps von XSS"
slug: "secure-xApp-from-xss"
description: "Beim Erstellen einer xApp ist es wichtig, das Risiko eines XSS-Angriffs zu minimieren, indem bestimmte Richtlinien befolgt werden."
Ausgeblendet: Wahr
---

# xApp Security: XSS-Angriffe verhindern

_XSS (Cross-Site Scripting)_ ist eine Art Sicherheitslücke in Webanwendungen. Es tritt auf, wenn eine Webanwendung nicht vertrauenswürdige Daten von einem Benutzer in ihrer Ausgabe an einen Webbrowser enthält, ohne dass eine ordnungsgemäße Überprüfung oder ein Escapezeichen erfolgt. Diese Sicherheitsanfälligkeit ermöglicht es einem Angreifer, schädliche Skripts in Webseiten einzuschleusen, die von anderen Benutzern angezeigt werden.

Beim Erstellen einer xApp ist es wichtig, das Risiko eines XSS-Angriffs zu minimieren, indem Sie bestimmte Richtlinien befolgen:

- Validieren Sie immer alle Variablen und maskieren oder bereinigen Sie sie, um sie vor Bedrohungen zu schützen.
- Behandeln Sie alle nicht vertrauenswürdigen Daten als Text und nicht als JavaScript oder HTML.
- Verwenden Sie die HTML-Bereinigung, um gefährlichen HTML-Code aus einer Variablen zu entfernen und eine sichere HTML-Zeichenfolge zurückzugeben. [OWASP] (https://en.wikipedia.org/wiki/OWASP) empfiehlt die Verwendung von DOMPurify für die HTML-Bereinigung.
- Verwenden Sie die Ausgabecodierung, wenn Sie Daten sicher genau so anzeigen müssen, wie ein Benutzer sie eingegeben hat.
- Erwägen Sie, nicht vertrauenswürdigen Daten JavaScript-Codierung hinzuzufügen, aber seien Sie vorsichtig, da dies die Funktionalität der Anwendung beeinträchtigen kann.

## Hilfreiche Materialien

- Sie können die Anwendung auf viele andere Arten vor XSS schützen, indem Sie die Techniken im [Spickzettel zur Verhinderung von Cross-Site-Scripting](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html) befolgen.
- Es ist auch wichtig, Benutzerdaten durch die Durchsetzung einer Content-Security-Policy zu schützen. Dies kann auf verschiedene Weise erreicht werden, wie im [Spickzettel zur Inhaltssicherheitsrichtlinie](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html) beschrieben.

## Mehr Informationen

- [Erstellen einer xApp](.. /build/overview.md)
- [xApps](.. /overview.md)