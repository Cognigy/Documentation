---
title: "New Chunk Strategy"
slug: "New Chunk Strategy"
description: "The New Chunk Strategy is powered by Azure AI Document Intelligence and creates semantic chunks, resulting in more accurate answers, as compared to fixed-length chunking that is used by default."
hidden: false
---

# Knowledge AI: New Chunk Strategy

!!! note
    This feature is currently in Preview. We encourage you to try it out and provide us with feedback.

The New Chunk Strategy is powered by [Azure AI Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/) and creates semantic chunks,
resulting in more accurate answers, as compared to fixed-length chunking that is used by default.
 
The new chunk strategy has the following advantages:

- **Improved quality of responses**. Breaking down the text into blocks of meaning allows the virtual agent to more accurately understand the context and find the necessary information to formulate a higher-quality response.
- **Effective use of Markdown**. Markdown allows the virtual agent to recognize headers, tables, images, links, and differentiate them from a regular text. This approach adds an additional level of context, helping the virtual agent better understand the structure and organization of information in the text.
- **Improved ability to reference the source**. Adding the page number of the source file to the metadata for each chunk can help track an information source in lengthy documents.

## Supported Formats

Only files in `PDF` and `DOCX` are supported. 

## Availability

This feature is available in the following environments:

- Trial.
- Dedicated and shared SaaS.
  Only for a limited number of customers.
  If you want to use this feature, contact [Cognigy technical support](https://docs.cognigy.com/help/get-help/).
- [On-premises](#on-premises). To use this feature, set up Azure AI Document Intelligence connection and provide an API key.

### On-Premises

#### Prerequisites

- Cognigy.AI 4.71 is deployed.

#### Environment Variables

The following environment variables must be specified in the `values.yaml` file to enable the feature:

- `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST`:
    - This variable should be set to a comma-separated list of organization IDs for which the feature should be enabled. For example: `FEATURE_ENABLE_AZURE_DOCUMENT_INTELLIGENCE_ORG_WHITELIST: "org1,org2,org3"`.
    - If the feature should be enabled for all organizations, the value can be set to `"*"`.
- `AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT`. The endpoint URL for the Azure AI Document Intelligence service. To copy the key, go to the Azure portal, on the left-side menu, select **Resource Management > Key and Endpoint**. Copy the key from the **Key** field. For more information, read the [Azure](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/sdk-overview-v4-0?view=doc-intel-4.0.0&tabs=csharp#use-an-azure-active-directory-azure-ad-token-credential) documentation.
- `AZURE_DOCUMENT_INTELLIGENCE_APIKEY`. Your API key for the Azure AI Document Intelligence service. To copy the key, go to the Azure portal, on the left-side menu, select **Resource Management > Key and Endpoint**. Copy the endpoint URL from the **Endpoint** field. For more information, read the [Azure](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/sdk-overview-v4-0?view=doc-intel-4.0.0&tabs=csharp#use-an-azure-active-directory-azure-ad-token-credential) documentation.

## How it Works

This strategy is applied when `.preset_ca` is appended to the file name of an uploaded file. For example, `cognigy.preset_ca.pdf`, where `cognigy` is the initial file name,
`.preset_ca` is the preset to apply the New Chunk Strategy, and `.pdf` is the file extension.

The extracted text is presented in Markdown format in the Chunk editor.

### Syntax Elements

Examples of syntax elements into which text can be transformed during content conversion from source files in DOCX or PDF formats. Most of these elements are borrowed from the Markdown language.

#### Headers

H1:

```text
Call Tracing: Unlock New Dimensions in VUX Optimization
===
```

H2:

```text
# Visualizing the Unseen: How Call Tracing Changes the Game
```

H3:

```
## Key job role changes include:
```

#### Images

If there are images in your source file, they are not converted; they can be replaced with the following HTML tag:

```txt
<figure>
![](figures/0)
</figure>
```

#### Lists

Bullet list:

```txt
- Bread
- Cheese
- Lettuce
```

Number list:

```txt
1. Gather Ingredients
2. Prepare Ingredients
3. Assemble Sandwich
```

#### Metadata

The metadata indicates that the chunk's text starts on source file page 1 and ends on page 2.

```txt
{
  "firstPage": "1",
  "lastPage": "2"
}
```

#### Tables

```txt
| Task | Traditional Method | Cognigy.AI with Generative AI |
| - | - | - |
| Flow/Process Building | Manual node by node creation | Write a 3-sentence description. 1 Click <5 seconds |
| Generating intent examples for NLU training | Brainstorm and manually type out 10 sentences | Describe intent in several words 1 Click <5 seconds |
| NLU Training | Train NLU based on example content | Zero-shot learning |
```

### DOCX

The table compares two strategies, the default and the new one, by listing the elements that can be converted.
The comparison is provided for source files in DOCX format.

!!! warning
    Use Microsoft Word to save files in DOCX format to avoid unexpected results. Other programs, such as Google Docs, may not offer the same level of compatibility.

| **Element**               | **Default Strategy**                                                                                        | **New Strategy**                                                                                  |
|---------------------------|-------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| Titles                    | Titles are omitted.                                                                                         | Titles are converted into headers of various levels. Some titles can be converted as simple text. |
| Text Blocks               | Due to conversion challenges, certain text blocks may be excluded. The text is divided into equal segments. | The majority of the text is logically segmented and converted.                                    |
| Lists                     | Bullet and numeral lists are not converted or are partially converted.                                      | Bullet and numeral lists are not converted or are partially converted.                            |
| Tables                    | Not converted.                                                                                              | Tables are converted.                                                                             |
| Images and Graphics       | Not converted.                                                                                              | Not converted.                                                                                    |
| Metadata                  | Metadata isn't included by default.                                                                         | The number of the source page is included by default.                                             |
| Hyperlinks (URLs)         | Not converted.                                                                                              | Not converted.                                                                                    |
| Styling and Formatting    | Not converted.                                                                                              | Not converted.                                                                                    |
| Formulae and Calculations | Not converted.                                                                                              | Only simple formulas are converted, including signs such as `*`, `-`, `=`, `+`.                   |

Let's consider an example in [DOCX](https://docs.cognigy.com/ai/images/knowledge-ai/new-call-tracing-sample.docx).

#### Default Strategy

In the case of the Default Chunk Strategy, the system splits this text into 5 equal chunks.

??? note "Default Chunk Splitting"

    1.
    ```txt
    In the burgeoning field of voice technology, optimizing Voice User Experience (VUX) is 
    a sophisticated endeavor fraught with unique challenges. 
    VUX designers confront intricate variables from timing nuances and intonation accuracy to the unpredictability 
    of human speech and environmental interference.
    ```
    
    2.
    ```txt
    These factors often present hurdles that can transform an otherwise fluid dialogue into a disjointed exchange. 
    For enterprises aiming to scale and perfect their voice-enabled services, 
    these are not mere technicalities but critical pivots on the customer experience journey.
    ```
    
    3.
    ```txt
    Recognizing this complex landscape, at Cognigy, we’re excited to introduce the ultimate tool 
    for developers and VUX designers in their quest for voice excellence: Call Tracing.
    ```
    
    4.
    ```txt
    Traditionally, understanding and monitoring voice interaction requires painstaking analysis of transcriptions,
    user feedback, and basic audio playback. 
    Now, Cognigy’s Call Tracing feature offers an actionable visualization of all activities taking place during the call, 
    such as speech recognition and connections, 
    together with the call recording waveforms. 
    This powerful tool grants VUX designers an unparalleled view of the dynamics of voice interactions.
    ```
    
    5.
    ```txt
    Event and soundwave visualization provides an analytical perspective that goes beyond the audio, 
    giving professionals the ability to dissect and understand voice experiences at a granular level. 
    It brings critical elements to the forefront that might not be immediately evident in transcriptions or basic audio playback.
    ```

#### New Strategy

In the case of the New Chunk Strategy, the system splits this text into 4 logical chunks.

???+ note "New Chunk Splitting"

    1.
    ```txt
     Call Tracing: Unlock New Dimensions in VUX Optimization
    In the burgeoning field of voice technology, optimizing Voice User Experience (VUX) is a sophisticated endeavor fraught with unique challenges. 
    VUX designers confront intricate variables from timing nuances and intonation accuracy to the unpredictability of human speech and environmental interference.
    These factors often present hurdles that can transform an otherwise fluid dialogue into a disjointed exchange. 
    For enterprises aiming to scale and perfect their voice-enabled services, these are not mere technicalities but critical pivots on the customer experience journey.
    Recognizing this complex landscape, at Cognigy, 
    we’re excited to introduce the ultimate tool for developers and VUX designers in their quest for voice excellence: Call Tracing.
    
    {
      "firstPage": "1",
      "lastPage": "1"
    }
    ```
    2.
    ```txt
    # Visualizing the Unseen: How Call Tracing Changes the Game
    Traditionally, understanding and monitoring voice interaction requires painstaking analysis of transcriptions, user feedback, and basic audio playback.
    Now, Cognigy’s Call Tracing feature offers an actionable visualization of all activities taking place during the call, 
    such as speech recognition and connections, together with the call recording waveforms. 
    This powerful tool grants VUX designers an unparalleled view of the dynamics of voice interactions.
    Event and soundwave visualization provides an analytical perspective that goes beyond the audio, 
    giving professionals the ability to dissect and understand voice experiences at a granular level. 
    It brings critical elements to the forefront that might not be immediately evident in transcriptions or basic audio playback.
    
    {
      "firstPage": "1",
      "lastPage": "1"
    }
    ```
    3.
    ```txt
    # Key Topics
    | Topic | Description |
    | Optimizing Response Timings | Identify silence and pauses; analyze call duration; uncover speech recognition latency. |
    | Detecting and Resolving Overlapping Speech | Resolve speech overlaps; fine-tune settings for seamless interaction. |
    | Monitoring Speech Quality | Highlight inconsistencies; troubleshoot for service quality. |
    | Fine-tuning the ASR Model | Optimize speech recognition models; enhance recognition accuracy. |
    
    {
      "firstPage": "1",
      "lastPage": "1"
    }
    ```
    4.
    ```txt
    ## Conclusion
    Cognigy’s Call Tracing uncovers nuanced expressions, crucial for enhancing user experiences.
    Explore our documentation for insights on the Voice Gateway Self-Service Portal and Call Tracing.
    
    {
      "firstPage": "1",
      "lastPage": "1"
    }
    ```

### PDF

The table compares two strategies, the default and the new one, by listing the elements that can be converted.
The comparison is provided for source files in PDF format.

| **Element**               | **Default Strategy**                                                   | **New Strategy**                                                                                                            |
|---------------------------|------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| Titles                    | Titles are omitted.                                                    | Titles are converted into headers of various levels.                                                                        |
| Footers                   | Footers are converted as simple text.                                  | Not converted.                                                                                                              |
| Text Blocks               | The text is divided into equal segments.                               | The text is converted and divided into logic segments.                                                                      |
| Lists                     | Bullet and numeral lists are not converted or are partially converted. | Bullet and numeral lists are converted.                                                                                     |
| Tables                    | Not converted.                                                         | Tables are converted.                                                                                                       |
| Images and Graphics       | Not converted.                                                         | Images and graphics are not converted, but their placeholders are marked as `<figure>![](figures/0)</figure>` in the chunk. |
| Metadata                  | Metadata isn't included by default.                                    | The number of the source page is included by default.                                                                       |
| Hyperlinks (URLs)         | Not converted.                                                         | Not converted.                                                                                                              |
| Styling and Formatting    | Not converted.                                                         | Not converted.                                                                                                              |
| Formulae and Calculations | Not converted.                                                         | Only simple formulas are converted, including signs such as `*`, `-`, `=`, `+`.                                             |

Let's consider an example in [PDF](https://docs.cognigy.com/ai/images/knowledge-ai/new-call-tracing-sample.pdf). 

#### Default Strategy

In the case of the Default Chunk Strategy, the system splits this text into 4 equal chunks.

??? note "Default Chunk Splitting"
    1.
    ```txt
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
    ```txt
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
    ```txt
        .
    Event and soundwave visualization provides an analytical perspective that goes beyond
    the audio, giving professionals the ability to dissect and understand voice experiences
    at a granular level. It brings critical elements to the forefront that might not be
    immediately evident in transcriptions or basic audio playback.
    Key Topics
    Topic Description
    Optimizing Response Timings
    Identify silence and pauses; analyze call duration; uncover speech
    recognition latency.
    Detecting and Resolving Overlapping
    Speech
    Resolve speech overlaps; ﬁne-tune settings for seamless
    interaction.
    Monitoring Speech Quality Highlight inconsistencies; troubleshoot for service quality.
    Fine-tuning the
    ```
    
    4.
    ```txt
    ASR Model
    Optimize speech recognition models; enhance recognition
    accuracy.
    Conclusion
    ● Cognigy’s Call Tracing uncovers nuanced expressions, crucial for enhancing user
    experiences.
    ● Explore our documentation for insights on the Voice Gateway Self-Service Portal
    and Call Tracing.
    ```

#### New Strategy

In the case of the New Chunk Strategy, the system splits this text into 4 logical chunks.
Elements, such as various types of headers and tables, are converted into Markdown format. Each chunk has a metadata object that shows the number of the source page where this information was located.

???+ note "New Chunk Splitting"

    1.
    ```txt
    Call Tracing: Unlock New Dimensions in VUX Optimization
    ===
    In the burgeoning field of voice technology, optimizing Voice User Experience (VUX) is 
    a sophisticated endeavor fraught with unique challenges. 
    VUX designers confront intricate variables from timing nuances and intonation accuracy to the unpredictability 
    of human speech and environmental interference.
    These factors often present hurdles that can transform an otherwise fluid dialogue into a disjointed exchange. 
    For enterprises aiming to scale and perfect their voice-enabled services, these are not mere technicalities but critical pivots on the customer experience journey.
    Recognizing this complex landscape, at Cognigy, we're excited to introduce 
    the ultimate tool for developers and VUX designers in their quest for voice excellence: Call Tracing.
    
    
    {
      "firstPage": "1",
      "lastPage": "1"
    }
    ```
        
    2.
    ```txt
    # Visualizing the Unseen: How Call Tracing Changes the Game
    Traditionally, understanding and monitoring voice interaction requires painstaking analysis of transcriptions, user feedback, and basic audio playback. 
    Now, Cognigy's Call Tracing feature offers an actionable visualization of all activities taking place during the call, 
    such as speech recognition and connections, together with the call recording waveforms. 
    This powerful tool grants VUX designers an unparalleled view of the dynamics of voice interactions.
    Event and soundwave visualization provides an analytical perspective that goes beyond the audio, giving professionals the ability to dissect and understand voice experiences at a granular level. 
    It brings critical elements to the forefront that might not be immediately evident in transcriptions or basic audio playback.
    <figure>
    ![](figures/0)
    </figure>
    
    {
      "firstPage": "1",
      "lastPage": "2"
    }
    ```
        
    3.
    ```txt
    # Key Topics
    | Topic | Description |
    | - | - |
    | Optimizing Response Timings | Identify silence and pauses; analyze call duration; uncover speech recognition latency. |
    | Detecting and Resolving Overlapping Speech | Resolve speech overlaps; fine-tune settings for seamless interaction. |
    | Monitoring Speech Quality | Highlight inconsistencies; troubleshoot for service quality. |
    | Fine-tuning the ASR Model | Optimize speech recognition models; enhance recognition accuracy. |
    
    {
      "firstPage": "2",
      "lastPage": "2"
    }
    ```
    
    4.
    ```txt
    # Conclusion
    · Cognigy's Call Tracing uncovers nuanced expressions, crucial for enhancing user experiences.
    . Explore our documentation for insights on the Voice Gateway Self-Service Portal and Call Tracing.
    
    {
      "firstPage": "2",
      "lastPage": "2"
    }
    ```

## More Information

- [PDF](pdf.md)