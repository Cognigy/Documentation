---
title: "PDF"
slug: "pdf"
description: "You can split PDF Knowledge Sources into Knowledge Chunks with two strategies: Default and Alternative."
hidden: false
tags: ['PDF Processing', 'Document Parsing', 'Chunk Strategies', 'Text Extraction', 'Knowledge Chunks']
---

# PDF

When you use a PDF file as a Knowledge Source, you can split the PDF file into Knowledge Chunks with the following chunk strategies after uploading the file:

- [Default Chunk Strategy](#default-chunk-strategy)
- [Alternative Chunk Strategy](#alternative-chunk-strategy)

## Default Chunk Strategy

The Default Chunk Strategy extracts content from PDF and splits it into [Knowledge Chunks](../../knowledge-chunk/knowledge-chunk.md) based on a fixed token length and recognizes tables. Based on our research, the Default Chunk Strategy returns better structured results and works best with the **Top K** value set to 5 in the [Search Extract Output](../../../../build/node-reference/other-nodes/search-extract-output.md) Node.

## Alternative Chunk Strategy

The Alternative Chunk Strategy is effective when your original PDF is divided into paragraphs in a logical order separated by double line breaks. This strategy attempts to distinguish the structure, such as sections, and then splits each of them into one or more Knowledge Chunks.

To apply the Alternative Chunk Strategy, append `.preset_uiolc_ls.pdf` to the file name when you upload a file. For example, if you have a PDF file named `cognigy.pdf`, rename it to `cognigy.preset_uiolc_ls.pdf` before the upload. The `.preset_uiolc_ls` appendix triggers the Alternative Chunk Strategy after you upload the PDF file.

While processing the PDF file, Knowledge AI may omit complex elements such as visually intricate headers or lists and not include these elements in the Knowledge Chunks.

## Examples

Assume you have the following text from the [Cognigy blog](https://www.cognigy.com/blog) in a PDF file:

???+ info "PDF sample"

    ```markdown
    # Call Tracing: Unlock New Dimensions in VUX Optimization
    
    In the burgeoning field of voice technology, optimizing Voice User Experience (VUX) is a sophisticated endeavor fraught with unique challenges. 
    VUX designers confront intricate variables from timing nuances and intonation accuracy to the unpredictability of human speech and environmental interference.
    These factors often present hurdles that can transform an otherwise fluid dialogue into a disjointed exchange. 
    For enterprises aiming to scale and perfect their voice-enabled services, these are not mere technicalities but critical pivots on the customer experience journey.
    Recognizing this complex landscape, at Cognigy, we're excited to introduce the ultimate tool for developers and VUX designers in their quest for voice excellence: Call Tracing.
    
    ## Visualizing the Unseen: How Call Tracing Changes the Game 
    
    Traditionally, understanding and monitoring voice interaction requires painstaking analysis of transcriptions, user feedback, and basic audio playback. 
    Now, Cognigy's Call Tracing feature offers an actionable visualization of all activities taking place during the call, such as speech recognition and connections, together with the call recording waveforms. 
    This powerful tool grants VUX designers an unparalleled view of the dynamics of voice interactions.
    Event and soundwave visualization provides an analytical perspective that goes beyond the audio, giving professionals the ability to dissect and understand voice experiences at a granular level. 
    It brings critical elements to the forefront that might not be immediately evident in transcriptions or basic audio playback.
    ```

You can download the [PDF sample](https://docs.cognigy.com/_assets/ai/empower/knowledge-ai/call-tracing-sample.pdf).

### Example 1: Default Chunk Strategy

If you use the Default Chunk Strategy, Knowledge AI splits the PDF file into 3 equal Knowledge Chunks.

???+ info "Default Chunk Splitting"
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
         Cognigy, we're excited to introduce the ultimate
        tool for developers and VUX designers in their quest for voice excellence: Call Tracing.
        Visualizing the Unseen: How Call Tracing Changes the
        Game
        Traditionally, understanding and monitoring voice interaction requires painstaking
        analysis of transcriptions, user feedback, and basic audio playback. Now, Cognigy's
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

### Example 2: Alternative Chunk Strategy

If you use the Alternative Chunk Strategy, Knowledge AI splits this text into 5 Knowledge Chunks.

Note that in the first Knowledge Chunk, a title is missing because it is formatted as a complex element. In comparison, the [Default Chunk Strategy](#example-1-default-chunk-strategy) recognizes and includes the title in the Knowledge Chunks.

???+ info "Alternative Chunk Splitting"
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
        we're excited to introduce the ultimate tool for developers
        and VUX designers in their quest for voice excellence: Call Tracing.
        ```
      4.
        ```markdown
        Traditionally, understanding and monitoring voice interaction requires painstaking analysis of 
        transcriptions, user feedback, and basic audio playback. 
        Now, Cognigy's Call Tracing feature offers an actionable visualization of all activities taking place during the call,
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

- [Knowledge AI Overview](../../overview.md)
- [Cognigy Text Format](ctxt.md)
- [Web Page](web-page.md)