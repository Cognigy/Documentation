---
title: "PDF"
slug: "pdf"
description: "PDF source knowledge uses two chunk strategies: Default and Alternative."
hidden: false
---

# PDF

When you use a PDF file as a knowledge source, the following chunk splitting strategies will be applied after uploading the file:

- [Default](#default-chunk-strategy)
- [Alternative](#alternative-chunk-strategy)

## Default Chunk Strategy

This strategy extracts content from PDF in an improved way, for example, regarding tables found in the PDF.
It splits the extracted content into chunks based on a fixed token length, which returns the best results based on our research.

We recommended using this strategy in combination with **Top K** set to `5` in the [Search Extract Output](../../ai/flow-nodes/other-nodes/search-extract-output.md) Node.

## Alternative Chunk Strategy

This strategy can be used as an alternative extraction and chunking method. This approach works effectively if your original PDF is divided into logical paragraphs using double-line breaks. Within this strategy, the system attempts to discern the structure, such as sections, and then splits each of them into one or more chunks.

This strategy is applied when `cognigy.preset_uiolc_ls.pdf` is appended to the file name of an uploaded file. For example, `cognigy.preset_uiolc_ls.pdf`, where `cognigy` is the initial file name,
`.preset_uiolc_ls` is the preset to apply the Alternative Chunk Strategy, and `.pdf` is the file extension.

Note that during text processing, the system may omit complex elements from PDFs,
such as visually complex headers or lists,
and not include such text in a chunk.
Therefore, your text should be simple and preferably not contain complex elements.

## Example

Let's assume that we have the following text in PDF from the Cognigy blog:

???+ "PDF sample"

    ```markdown
    # Call Tracing: Unlock New Dimensions in VUX Optimization
    
    In the burgeoning field of voice technology, optimizing Voice User Experience (VUX) is a sophisticated endeavor fraught with unique challenges. 
    VUX designers confront intricate variables from timing nuances and intonation accuracy to the unpredictability of human speech and environmental interference.
    These factors often present hurdles that can transform an otherwise fluid dialogue into a disjointed exchange. 
    For enterprises aiming to scale and perfect their voice-enabled services, these are not mere technicalities but critical pivots on the customer experience journey.
    Recognizing this complex landscape, at Cognigy, we’re excited to introduce the ultimate tool for developers and VUX designers in their quest for voice excellence: Call Tracing.
    
    ## Visualizing the Unseen: How Call Tracing Changes the Game 
    
    Traditionally, understanding and monitoring voice interaction requires painstaking analysis of transcriptions, user feedback, and basic audio playback. 
    Now, Cognigy’s Call Tracing feature offers an actionable visualization of all activities taking place during the call, such as speech recognition and connections, together with the call recording waveforms. 
    This powerful tool grants VUX designers an unparalleled view of the dynamics of voice interactions.
    Event and soundwave visualization provides an analytical perspective that goes beyond the audio, giving professionals the ability to dissect and understand voice experiences at a granular level. 
    It brings critical elements to the forefront that might not be immediately evident in transcriptions or basic audio playback.
    ```

You can also download this [call-tracing-sample.pdf](https://docs.cognigy.com/ai/images/knowledge-ai/call-tracing-sample.pdf) file in the `.pdf` format.

### Default Case

In the case of the Default Chunk Strategy, the system splits this text into 3 equal chunks.

???+ "Default Chunk Splitting"
      1.
        ```markdown
        Call Tracing: Unlock New
        Dimensions in VUX
        Optimization
        In the burgeoning field of voice technology, optimizing Voice User Experience (VUX) is a
        sophisticated endeavor fraught with unique challenges. VUX designers confront intricate
        variables from timing nuances and intonation accuracy to the unpredictability of human
        speech and environmental interference.
        These factors often present hurdles that can transform an otherwise fluid dialogue into a
        disjointed exchange. For enterprises aiming to scale and perfect their voice-enabled
        services, these are not mere technicalities but critical pivots on the customer experience
        journey.
        Recognizing this complex landscape, at
        ```
      2.
        ```markdown
         Cognigy, we’re excited to introduce the ultimate
        tool for developers and VUX designers in their quest for voice excellence: Call Tracing.
        Visualizing the Unseen: How Call Tracing Changes the
        Game
        Traditionally, understanding and monitoring voice interaction requires painstaking
        analysis of transcriptions, user feedback, and basic audio playback. Now, Cognigy’s
        Call Tracing feature offers an actionable visualization of all activities taking place during
        the call, such as speech recognition and connections, together with the call recording
        waveforms. This powerful tool grants VUX designers an unparalleled view of the
        dynamics of voice interactions
        ```
      3.
        ```markdown
        .
        Event and soundwave visualization provides an analytical perspective that goes beyond
        the audio, giving professionals the ability to dissect and understand voice experiences
        at a granular level. It brings critical elements to the forefront that might not be
        immediately evident in transcriptions or basic audio playback.
        ```

### Alternative Case

In the case of the Alternative Chunk Strategy, the system splits this text into 5 logical chunks.

Note that in the first chunk, a title was omitted by the system because the title was formatted as a complex element, while the same title in the [default strategy](#default-chunk-strategy) was included.

???+ "Alternative Chunk Splitting"
      1.
        ```markdown
        In the burgeoning field of voice technology, optimizing Voice User Experience (VUX)
        is a sophisticated endeavor fraught with unique challenges. 
        VUX designers confront intricate variables from timing nuances and intonation accuracy 
        to the unpredictability of human speech and environmental interference.
        ```
      2.
        ```markdown
        These factors often present hurdles that can transform an otherwise fluid dialogue
        into a disjointed exchange. 
        For enterprises aiming to scale and perfect their voice-enabled services, 
        these are not mere technicalities but critical pivots on the customer experience journey.
        ```
      3.
        ```markdown
        Recognizing this complex landscape, at Cognigy, 
        we’re excited to introduce the ultimate tool for developers
        and VUX designers in their quest for voice excellence: Call Tracing.
        ```
      4.
        ```markdown
        Traditionally, understanding and monitoring voice interaction requires painstaking analysis of 
        transcriptions, user feedback, and basic audio playback. 
        Now, Cognigy’s Call Tracing feature offers an actionable visualization of all activities taking place during the call,
        such as speech recognition and connections, together with the call recording waveforms. 
        This powerful tool grants VUX designers an unparalleled view of the dynamics of voice interactions.
        ```
      5.
        ```markdown
        Event and soundwave visualization provides an analytical perspective that goes beyond the audio, 
        giving professionals the ability to dissect and understand voice experiences at a granular level. 
        It brings critical elements to the forefront that might not be 
        immediately evident in transcriptions or basic audio playback.
        ```

## More Information

- [Knowledge AI Overview](overview.md)
- [Cognigy Text Format](ctxt.md)
- [Web Page](../knowledge-ai/web-page.md)