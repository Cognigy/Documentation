---
title: "Collecting Metadata"
slug: "collecting-metadata"
description: "Collecting metadata from the user's browser allows you to gather additional information that is not available by default, such as the browser language, geolocation, device type, and operating system."
hidden: false
---

# Collecting Metadata

[![Version badge](https://img.shields.io/badge/Added in-v4.81-blue.svg)](../../release-notes/4.81.md)

_Collecting metadata_ from the user's browser during the conversation via Webchat v3 allows you
to gather additional information that is not available by default. It includes details such as the browser language, geolocation, device type, and operating system.
This data is stored in the [Input](../../ai/test/interaction-panel/input.md) object, enabling you to create more tailored and effective interactions with the user.
After the session, the data is available through the [Insights Transcript Explorer](../../insights/explorers/transcript.md) and [Cognigy.AI OData endpoint](../../ai/analyze/odata.md).
Remember that the metadata includes personal data, such as location, so make sure your privacy notices inform users about data collection and obtain their consent.

Using additional metadata gives you the following benefits:

- **Personalization of Content**. Adapt the conversational interface to display content in the user's preferred language and consider cultural nuances, provide localized recommendations and account for time zones.
- **Interface Optimization**. Optimize the user interface for different devices (mobile, tablet, desktop) and operating systems. Make sure compatibility and address issues specific to different browser versions.
- **Analytics and User Experience Improvement**. Understand user interactions, assess traffic effectiveness, and analyze user geographic distribution for better targeting and market expansion.
- **Security and Regulatory Compliance**. Ensure compliance with local regulations by considering regional specifics when handling user data.

## Restrictions

- Collecting Metadata is available only for Webchat v3.

## Webchat v3 Object

The additional metadata is stored in the `data._webchat3Metadata` Input object when end users send the first message in the Webchat v3 interface.

JSON Example:

```json
  "data": {
    "_webchat3Metadata": {
      "origin": "https://webchat-trial.cognigy.ai",
      "browser": "Chrome",
      "browser_version": "126.0.0.0",
      "os": "Windows",
      "platform": "desktop",
      "language": "en-US",
      "languages": [
        {
          "region": "US",
          "code": "en"
        },
        {
          "region": null,
          "code": "sv"
        }
      ],
      "geolocation": {
        "city": "Berlin",
        "country": "Germany"
      }
    }
  }
```

The `data._webchat3Metadata` Input object has the following keys:

| Key                 | Type   | Description                                                                                                                                                                                                                        | Example                          |
|---------------------|--------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|
| origin              | String | The URL of the website from which the data was collected.                                                                                                                                                                          | https://webchat-trial.cognigy.ai |
| browser             | String | The name of the browser that the user has.                                                                                                                                                                                         | 126.0.0.0                        |
| browser_version     | String | The version of the browser that the user has.                                                                                                                                                                                      | Linux                            |
| os                  | String | The operating system of the user's device.                                                                                                                                                                                         | en-US                            |
| platform            | String | The type of platform or device used.                                                                                                                                                                                               | mobile                           |
| language            | String | The primary language set in the user's browser.                                                                                                                                                                                    | en-US                            |
| languages           | Object | The object containing information about the user's language settings.                                                                                                                                                              | -                                |
| languages.region    | String | The region associated with the user's language settings. Note that not all languages in the browser have an associated region. For example, for Swedish, the region cannot be determined. In such cases, the value will be `null`. | US                               |
| languages.code      | String | The language code representing the user's language.                                                                                                                                                                                | en                               |
| geolocation         | Object | The object containing the geolocation data of the user.                                                                                                                                                                            | -                                |
| geolocation.city    | String | The city of the user's current location.                                                                                                                                                                                           | Berlin                           |
| geolocation.country | String | The country of the user's current location.                                                                                                                                                                                        | Germany                          |

## How to Test

You can test the metadata object only in [Live Follow](../../ai/test/interaction-panel/overview.md#live-follow) mode.

To test receiving metadata, follow these steps:

1. Open the Flow where you want to test metadata, or create a new one.
2. Create a Webchat v3 Endpoint or use an existing one.
3. On the **Endpoint Editor** page, go to the **Webchat Behavior** section and activate the **Collect Metadata** setting.
4. In the upper-right corner, click **Open Demo Webchat** to start a conversation.
5. Get and copy the [user ID](../../ai/analyze/user-and-session-identification.md#user-id) from the chat interaction. Use developer tools of your browser. For example, in the Google Chrome browser, open **Developer Tools**, navigate to **Application > Storage**, and expand **Session Storage**. Click a domain to view its key-value pairs. Next to the `userId` key, copy the value.
6. In the [Interaction Panel](../../ai/test/interaction-panel/overview.md), paste the user ID to the **User ID** field on the Live Follow tab.
7. Send a message as a user via the [Demo Webchat](../demo.md) interface. Once the message is received, you will see the same message on the **Live Follow** tab.
8. View the metadata in the Interaction Panel:
    - To view the metadata in the payload, click ![expand](../../_assets/icons/expand.svg).
    - To view the metadata in the Input object, navigate to **Info > Input**. In the code editor, go to `data._webchat3Metadata`.

If you receive the `data._webchat3Metadata` object and can view it, the metadata settings work as expected.

## Example

This example shows how using metadata (language preferences and geolocation) you can customize and improve customer service interactions.
The AI Agent detects the user's location and suggests switching to their preferred language (German, Austrian).
Also, the AI Agent recognizes that the user is in Salzburg and provides location-based options,
such as picking up the product in Vienna or arranging delivery to Salzburg.

**End User:** With the first message, the user asks for product information. Example: `Hi, I'd like to know if you have product XYZ in stock`.<br>
**AI Agent:** With the first user input, the AI Agent receives the `_webchat3Metadata` object and extracts data from it. Based on the received data, the AI Agent asks a clarifying question. Example: `One moment, please. I'll check that for you. I see your location is Salzburg, Austria. Do you want to switch to German?`<br>
**End User:** The user confirms switching to another language. Example: `Yes, please`.<br>
**AI Agent:** The AI Agent switches the language to German (Austrian). Example: `Einen Moment bitte, ich überprüfe das für Sie`.<br>
**AI Agent:** Based on the user's geolocation (the user is in Salzburg), the AI Agent offers options to the user. Example: `Leider ist das Produkt XYZ derzeit nicht in Salzburg verfügbar. Sie können es jedoch in Wien abholen oder eine Lieferung nach Salzburg arrangieren. Was bevorzugen Sie?`<br>
**End User:** The user makes a choice. Example: `Ich würde es gerne geliefert bekommen`.<br>
**AI Agent:** The AI Agent confirms the option and provides further details. Example: `Kein Problem! Ich habe eine Lieferung des Produkts XYZ nach Salzburg für Sie eingeleitet. Sie sollten es innerhalb von 3-5 Werktagen erhalten. Möchten Sie die Bestellung jetzt abschließen?`<br>
**End User**: The user confirms the option. Example: `Ja, bitte`.<br>
**AI Agent:** The AI Agent completes the order. Example: `Super! Ihre Bestellung für das Produkt XYZ wird nach Salzburg geliefert. Sie erhalten eine Bestätigung per E-Mail`.<br>

## More Information

- [Endpoint Configuration](configuration.md)
- [Interaction Panel](../../ai/test/interaction-panel/overview.md)
- [Input Object](../../ai/test/interaction-panel/input.md)