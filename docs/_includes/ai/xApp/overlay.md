??? info "xApp Overlay"

    By default, an xApp page opens in a separate browser tab.
    If you are using Webchat v3,
    you can override this behavior to open your xApp pages directly in Webchat v3.
    The pages are presented in the format of screens.

    The table lists the parameters for configuring xApp screens in the Webchat v3 interface.

    | Parameter                      | Type          | Description                                                                                                                                                                                                                          |
    |--------------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | Header Title                   | CognigyScript | This parameter shows a title of the screen. The title displayed at the top panel of the Webchat v3 interface. If no title is provided, the top panel remains empty.                                                              |
    | Show Close Icon                | Toggle        | This parameter displays the `x` button in the upper-right corner of the screen. This parameter is enabled by default.                                                                                                                |
    | Send Event on Close Icon Click | Toggle        | This parameter records the event when the user closes the screen without submitting. This parameter is disabled by default.                                                                                                          |
    | Auto Open                      | Toggle        | This parameter automatically opens the screen within the Webchat v3 interface. This setting is enabled by default. If you want xApp pages to open in browser tabs instead of within the Webchat v3 interface, activate this setting. |
    | Close Overlay on Submit        | Toggle        | This parameter closes the screen after the user clicks the Submit button. This parameter is enabled by default.                                                                                                                      |
    | Feedback Message on Submit     | CognigyScript | This parameter sends a message to the chat after the user clicks the Submit button.                                                                                                                                                  |