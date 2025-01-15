1. In the left-side menu of the Project, go to **Manage > Settings**.
2. In the **Translation settings** section, select one of the following providers:

    === "Microsoft Translator"
        - **Translation Provider API Key** — enter your unique API key provided by Microsoft Translator. It's necessary for authentication and allows you to access translation services.
        - **Request Retries** — specify how often Cognigy should attempt to call the translation provider if an error occurs during the initial request. For example, if you set it to `3`, Cognigy will try three times before giving up on a translation request.
        - **Request Timeout** — determine how long Cognigy should wait for a response from the translation provider after making a request, measured in milliseconds. If the provider doesn't respond within this time frame, it's considered a timeout.
        - **Sentence Cache Expiry Timeout** — determine how long translations should be kept in the cache before they are considered outdated and removed. The default value is `84,600` seconds, which is equivalent to 1 day. You can set it to `0` for no caching.
        - **Custom API Base URL** — this setting is optional. If you have specific requirements or need to connect to a custom instance of the Microsoft Translator API different from the default one `https://api.cognitive.microsofttranslator.com/`, you can use this field to specify a custom base URL. It allows you to define the URL, including the protocol scheme, for example `https://api-eur.cognitive.microsofttranslator.com`, to tailor the API connection to your needs.
        - **Custom Subscription Region** — this setting is optional. It represents the location or region of your Azure MS Translator resource. You may need to use this field when calling this API, especially if you have specified a specific region in your Azure account.

    === "Google Cloud Translation"
        - **Translation Provider API Key** — enter your unique API key provided by Google Cloud Translation. It's necessary for authentication and allows you to access translation services.
        - **Request Retries** — specify how often Cognigy should attempt to call the translation provider if an error occurs during the initial request. For example, if you set it to `3`, Cognigy will try three times before giving up on a translation request.
        - **Request Timeout** — determine how long Cognigy should wait for a response from the translation provider after making a request, measured in milliseconds. If the provider doesn't respond within this time frame, it's considered a timeout.
        - **Sentence Cache Expiry Timeout** — determine how long translations should be kept in the cache before they are considered outdated and removed. The default value is `84,600` seconds, which is equivalent to 1 day. You can set it to `0` for no caching.

    === "DeepL Translate Pro"
        - **Translation Provider API Key** — enter your unique API key provided by DeepL Translate Pro. It's necessary for authentication and allows you to access translation services.
        - **Request Retries** — specify how often Cognigy should attempt to call the translation provider if an error occurs during the initial request. For example, if you set it to `3`, Cognigy will try three times before giving up on a translation request.
        - **Request Timeout** — determine how long Cognigy should wait for a response from the translation provider after making a request, measured in milliseconds. If the provider doesn't respond within this time frame, it's considered a timeout.
        - **Sentence Cache Expiry Timeout** — determine how long translations should be kept in the cache before they are considered outdated and removed. The default value is `84,600` seconds, which is equivalent to 1 day. You can set it to `0` for no caching.
        - **Custom API Base URL** — this setting is optional. If you have specific requirements or need to connect to a custom instance of the DeepL Translate Pro API, you can use this field to specify a custom base URL. It allows you to define the URL, including the protocol scheme, for example `https://api-free.deepl.com/`, to tailor the API connection to your needs.

3. Click **Save**.