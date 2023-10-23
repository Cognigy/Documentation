---
title: "How to secure XApp from XSS?"
slug: "protect-xApp-from-xss"
hidden: true
---

# How to secure XApp from XSS?

On building an XApp there is a possibility of a Cross-site-scripting attack and it is important to mitigate the risk by following certain guidelines.

## Below guidelines can be followed to protect your XApp from XSS

1. Always validate all variables and escape or sanitize them to protect against a threat.
2. Any untrusted data should always be considered as text
3. HTML Sanitization will remove dangerous HTML from a variable and return a safe string of HTML. OWASP recommends DOMPurify for HTML Sanitization
4. Output Encoding is recommended when you need to safely display data exactly as a user typed it in. 
5. Add javascript encoding on the untrusted data, but should be careful as it may change the application behavior.

You can secure the application from XSS in many other ways by following the techniques in this [cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

In addition, it is also important to protect the user data by enforcing Content-Security-Policy, This can be achieved in various ways as described [here](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)