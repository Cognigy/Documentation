---
title: "Accessibility"
slug: "accessibility"
description: "Build accessible Webchat"
hidden: false
---

# Webchat v3: Accessibility

Cognigy encourages conversation designers to build solutions with accessibility in mind.

Ensure that your Webchat is designed to be accessible to everyone, including individuals with varying accessibility needs. Developing Webchat with accessibility in mind enhances the user experience for all users. This page offers guidelines for implementing essential accessibility features to make it easier for everyone to use your Webchat.

## Content Labeling

Ensure all UI elements in your Webchat are labeled to describe their purpose. Provide users with descriptive labels for each interactive element, clearly explaining the element's meaning.

For example, for images, include alternative text in the Say, Question, and Optional Question nodes.

## Add Transcript for Audio

An audio track should be provided along with the transcript for this track. In the Say, Question, and Optional Question nodes, add the audio file and paste the transcript into the Audio Alternative Text in the following format

```txt
Speaker 1: "What’s up today?"
Speaker 2: "Not much, just rewatching the original Star Wars trilogy. It’s amazing how timeless those films are."
```

The transcript should accurately reflect the number of speakers and their lines, include all the voice content present in the audio, and account for any background music.

The transcript will be available under the Download Transcript button and accessible in TXT format.

You can use third-party tools like Otter.ai, Sonix, and others to upload your audio and convert it into text.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/audio-transcript.png" width="100%" />
</figure>

## Add Transcript and Captions for Video

Along with the Video URL, you need to provide the Video Alternative Text (a downloadable transcript) and the Video Captions URL, where you should add the URL. The captions should be in `.vtt` format.

The transcript will be available under the Download Transcript button and accessible in TXT format.

The video transcript should have the following format:

```txt
[00:00]
Speaker 1: Welcome to our tutorial on video transcription.

[00:08]
Speaker 2: In this video, we'll cover the basics of creating transcripts.

[00:16]
Speaker 1: Transcripts help make your content accessible to a broader audience.

[00:21]
Speaker 2: They are also useful for improving search engine optimization.

[00:25]
Speaker 1: Now, let’s go over how to create a transcript step-by-step.

[00:33]
Speaker 2: Be sure to check the description for links to the tools mentioned.

[00:37]
Speaker 1: Thank you for watching, and don't forget to subscribe for more tutorials.
```

Captions are designed to make content accessible to people who are deaf or hard of hearing, and they include not only spoken dialogue but also relevant non-verbal audio cues. 

The file should have the following `.vtt` format:

```txt
1
00:00:01.000 --> 00:00:03.500
[Music playing]

2
00:00:03.600 --> 00:00:07.000
Welcome to our tutorial on video transcription.

3
00:00:07.100 --> 00:00:10.200
In this video, we'll cover the basics of creating transcripts.

4
00:00:10.300 --> 00:00:14.000
[Background noise: office sounds]

5
00:00:14.100 --> 00:00:18.000
Transcripts help make your content accessible to a broader audience.

6
00:00:18.100 --> 00:00:21.500
They are also useful for improving search engine optimization.

7
00:00:21.600 --> 00:00:25.000
Now, let's go over how to create a transcript step-by-step.

8
00:00:25.100 --> 00:00:28.000
[Background noise fades out]

9
00:00:28.100 --> 00:00:32.000
Be sure to check the description for links to the tools mentioned.

10
00:00:32.100 --> 00:00:35.500
Thank you for watching, and don't forget to subscribe for more tutorials.

11
00:00:35.600 --> 00:00:37.000
[Music fades out]
```

## Add Text for Lables in Adaptive Cards

In Microsoft Adaptive Cards, each field should contain a title with meaningful text. 
To provide this text, add values to the `label` parameter.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/adaptive-card-labels.png" width="100%" />
</figure>

When you mark a text block as a heading in the `style` parameter, it helps visually impaired users navigate content more efficiently by providing a hierarchical structure and enabling faster navigation.

Headings improve content accessibility for visually impaired users, as screen readers announce them differently from regular text, aiding in navigation. They also create a hierarchical structure, making information easier to understand, and allow for quicker navigation through content using screen readers.

```json
{
  "type": "AdaptiveCard",
  "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
  "version": "1.6",
  "body": [
    {
      "type": "TextBlock",
      "size": "Medium",
      "weight": "Bolder",
      "text": "Purchase your Product",
      "style": "heading"
    },
    {
      "type": "Input.Text",
      "label": "Full Name",
      "placeholder": "Enter your full name"
    },
    {
      "type": "Input.Text",
      "label": "Email Address",
      "placeholder": "Enter your email address"
    },
    {
      "type": "Input.ChoiceSet",
      "label": "Select Product",
      "choices": [
        {
          "title": "AI Agent Standard",
          "value": "Standard"
        },
        {
          "title": "AI Agent Premium",
          "value": "Premium"
        },
        {
          "title": "AI Agent Enterprise",
          "value": "Enterprise"
        }
      ],
      "placeholder": "Choose a product"
    },
    {
      "type": "Input.Date",
      "label": "Preferred Purchase Date",
      "placeholder": "Select a date"
    }
  ]
}
```


## Color Contrast

If the primary color is dark (for example, the Webchat widget uses a dark color as the primary), the text color will be light, and vice versa. However, you need to manually check the color contrast, especially if you add additional customizations to the home screen, such as a colorful background image. In such cases, ensure that the text in the foreground remains visible.

For each set of text, we recommend maintaining a sufficient color contrast — the difference in perceived brightness between the text and its background.

- The minimum contrast ratio for normal text is 4.5:1. Avoid using text smaller than 12px.
- For larger text, the contrast ratio should be at least 3:1.

To verify the color contrast in your app, use an online contrast checker, for example,  the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker).

Instances where the pair of colors used for a text element and the background behind that element have a lower color contrast ratio than recommended.

You can determine the contrast ratio of your Webchat using the browser DevTools. For Chrome DevTools, follow these steps to check the color contrast ratio:

1. Open Chrome DevTools by right-clicking on the webpage and select **Inspect**, or press ++ctrl+shift+I++` (Windows/Linux) or ++Cmd+ Option+I++ (Mac).
2.  In the **Elements** panel, hover over the HTML elements to highlight sections of the page, or click on the specific element you want to inspect.
3. In the **Styles** panel on the right, find the `color` property for the text or the `background-color` property for the background.
4. Click the color swatch next to the `color` or `background-color` value to open the color picker.
5. Look for the **Contrast Ratio** section below the color values in the color picker. The contrast ratio will be displayed, showing whether the colors meet the WCAG guidelines:
   The ratio will be displayed and indicate whether the color contrast meets the WCAG guidelines:
   **Passes** - shows a checkmark if the ratio meets AA or AAA standards for normal or large text.
   **Fails** - indicates if the ratio does not meet the standards and suggests adjustments.
6. Use the color picker to adjust the color values. This will update the contrast ratio in real-time, helping you find a compliant color combination. Alternatiely to dtermin a color click on the eyedropper icon (if available) to pick a color from anywhere on your screen and use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker) to check the color compatibility.

<figure>
  <img class="image-center" src="../../../_assets/webchat/v3/color-contrast.png" width="100%" />
</figure>