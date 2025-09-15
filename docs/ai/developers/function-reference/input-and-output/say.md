---
title: "say"
slug: "say"
description: "Sends a message to the user."
hidden: false
tags:
  - say
  - output
  - input and output
---

# `say`

## Syntax

`say: TSayFunction`

**Alias:** `output`

## Description

Sends a message to the user.

**Parameters:**

`TSayFunction` has the following parameters:

- **text** — the message to send. Can be an empty string `""` or `null` if you're only sending structured content.
- **data** — a structured content payload containing rich UI elements like buttons, carousels, quick replies, and images. This parameter is optional.
- **settings** — a configuration object related to a handover to a human agent, such as whether the message can be forwarded and the output destination (user, human agent, or both). This parameter is optional.

**Returns:** depends on the `TSayFunction` implementation.

## Types

```js
interface ILiveAgentSettings {
  forwardable: boolean;
  outputDestination?: "userOnly" | "agentOnly" | "userAndAgent";
}

interface ISayNodeSettings {
  liveAgentSettings: ILiveAgentSettings;
}

type TSayFunction = (
  text: string,
  data?: IStructuredContentData,
  settings?: ISayNodeSettings
) => void;
```

### Structured Content Types

```js
export interface IStructuredContentBase {
  type: string;
  text?: string;
  fallbackText?: string;
}

export interface IStructuredContentObject {
  _gallery?: ICarouselStructuredContent;
  _list?: IListStructuredContent;
  _quickReplies?: IQuickRepliesStructuredContent;
  _buttons?: IButtonsStructuredContent;
  _adaptiveCard?: IAdaptiveCardStructuredContent;
  _image?: IImageStructuredContent;
  _video?: IVideoStructuredContent;
  _audio?: IAudioStructuredContent;
}

export interface ITextStructuredContent extends IStructuredContentBase {
  type: 'text';
  text: string;
}

export interface IQuickRepliesStructuredContent extends IStructuredContentBase {
  type: 'quick_replies';
  quickReplies: IQuickReply[];
}

export interface IImageStructuredContent extends IStructuredContentBase {
  type: 'image';
  imageUrl: string;
  imageAltText?: string;
}

export interface IVideoStructuredContent extends IStructuredContentBase {
  type: 'video';
  videoUrl: string;
  videoAltText?: string;
  videoCaptionsUrl?: string;
}

export interface IAudioStructuredContent extends IStructuredContentBase {
  type: 'audio';
  audioUrl: string;
  audioAltText?: string;
}

export interface ICarouselStructuredContent extends IStructuredContentBase {
  type: 'carousel';
  items: ICarouselItem[];
}

export interface IListStructuredContent extends IStructuredContentBase {
  type: 'list';
  button: IUrlButton | IPostbackButton | IPhoneNumberButton;
  items: IListItem[];
  largeTopItem?: boolean;
}

export interface IButtonsStructuredContent extends IStructuredContentBase {
  type: 'buttons';
  text: string;
  buttons: (IUrlButton | IPostbackButton | IPhoneNumberButton)[];
}

export interface IAdaptiveCardStructuredContent extends IStructuredContentBase {
  type: 'adaptiveCard';
  adaptiveCard: object;
}

export type TStructuredContent =
  | ITextStructuredContent
  | IQuickRepliesStructuredContent
  | IImageStructuredContent
  | IVideoStructuredContent
  | IAudioStructuredContent
  | ICarouselStructuredContent
  | IListStructuredContent
  | IButtonsStructuredContent
  | IAdaptiveCardStructuredContent;
```

#### Supporting Types

```js
interface IListItem {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAltText?: string;
  defaultActionUrl?: string;
  buttons: (IUrlButton | IPostbackButton | IPhoneNumberButton)[];
}

interface ICarouselItem {
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAltText?: string;
  buttons: (IUrlButton | IPostbackButton | IPhoneNumberButton)[];
}

interface IQuickReply {
  title: string;
  payload: string;
  contentType: string;
  imageUrl: string;
  imageAltText?: string;
}

interface IButtonBase {
  type: string;
  title: string;
}

interface IUrlButton extends IButtonBase {
  type: 'web_url';
  url: string;
  target?: '_self' | '_blank';
}

interface IPostbackButton extends IButtonBase {
  type: 'postback';
  payload: string;
}

interface IPhoneNumberButton extends IButtonBase {
  type: 'phone_number';
  payload: string;
}
```

## Example

??? info "Send a Simple Text Message"

    ```js
    say("Hello, world!");
    ```

??? info "Send Structured Content: Text and Quick Replies"

    ```js
    say("Choose an option:", {
      _data: {
        _cognigy: {
          _default: {
            _quickReplies: {
              type: "quick_replies",
              quickReplies: [
                { title: "Yes", payload: "yes", contentType: "text", imageUrl: "", imageAltText: "" },
                { title: "No", payload: "no", contentType: "text", imageUrl: "", imageAltText: "" }
              ]
            }
          }
        }
      }
    });
    ```

??? info "Send Structured Content: Carousel"

    ```js
    say("", {
      _data: {
        _cognigy: {
          _default: {
            _gallery: {
              type: "carousel",
              items: [
                {
                  title: "Item 1",
                  subtitle: "Description for item 1",
                  imageUrl: "https://example.com/image1.jpg",
                  buttons: [
                    { type: "web_url", title: "View", url: "https://example.com" }
                  ]
                },
                {
                  title: "Item 2",
                  subtitle: "Description for item 2",
                  imageUrl: "https://example.com/image2.jpg",
                  buttons: [
                    { type: "postback", title: "Select", payload: "select_item_2" }
                  ]
                }
              ]
            }
          }
        }
      }
    });
    ```

??? info "Send a Message Only to the Human Agent"

    ```js
    say("This message is for the human agent only.", null, {
      liveAgentSettings: {
        forwardable: true,
        outputDestination: "agentOnly"
      }
    });
    ```