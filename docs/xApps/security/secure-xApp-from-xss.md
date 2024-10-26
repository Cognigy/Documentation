---
title: "Secure xApps from XSS"
slug: "secure-xApp-from-xss"
description: "When building an xApp, it's important to mitigate the risk of an XSS attack by following specific guidelines."
hidden: true
tags:
  - xApp
  - XSS
  - Cross-site scripting
---

# xApp Security: Prevent XSS Attacks

_XSS (Cross-Site Scripting)_ is a type of security vulnerability in web applications. It occurs when a web application includes untrusted data from a user in its output to a web browser without proper validation or escaping. This vulnerability allows an attacker to inject malicious scripts into web pages viewed by other users.

When building an xApp, it's important to mitigate the risk of an XSS attack by following specific guidelines:

- Always validate all variables and escape or sanitize them to protect against threats.
- Treat all untrusted data as text and not as JavaScript or HTML.
- Use HTML sanitization to remove dangerous HTML from a variable and return a safe HTML string. [OWASP](https://en.wikipedia.org/wiki/OWASP) recommends using DOMPurify for HTML sanitization.
- Use output encoding when you need to safely display data exactly as a user typed it.
- Consider adding JavaScript encoding to untrusted data, but be cautious as it may alter the application's functionality.

## Helpful Materials

- You can secure the application from XSS in many other ways by following the techniques in the [Cross Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).
- It is also important to protect user data by enforcing a Content-Security-Policy. This can be achieved in various ways as described in the [Content Security Policy Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html).

## More Information

- [Build an xApp](../build/overview.md)
- [xApps](../overview.md)