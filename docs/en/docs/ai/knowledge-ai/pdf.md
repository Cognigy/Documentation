---
title: "PDF"
slug: "pdf"
description: "PDF source knowledge uses two chunk strategies: Default and Alternative."
hidden: false
---

# PDF

When you use a PDF file as a knowledge source, the following chunk strategies will be applied after uploading the file:

- [Default](#default-chunk-strategy)
- [Alternative](#alternative-chunk-strategy)

## Default Chunk Strategy

Splits the extracted content into chunks based on fixed token lengths. This means that chunks are typically of equal size, regardless of the content's natural structure.

The strategy is recommended for use in combination with a **Top K** value of `5` in the [Search Extract Output](../../ai/flow-nodes/other-nodes/search-extract-output.md) Node.
It can be effective when you are searching for and extracting specific pieces of information.

Use Case: This strategy works well when you want consistency in the size of the processed chunks. It can be helpful in situations where you need a fixed, uniform chunk size for further processing or analysis.

## Alternative Chunk Strategy

Splits the extracted content into chunks based on the newline character.
For more complicated formats, such as PDF, an attempt is made to discern the structure, for example, sections,
and then split each into one or more chunks.

To use this strategy, you need to add a postfix to the name of your file, such as `.preset_uiolc_ls`. For example, `cognigy.preset_uiolc_ls.pdf`, where `cognigy` is the initial name for the file, `.preset_uiolc_ls` is the postfix to apply the Alternative Chunk Strategy, and `.pdf` is the file extension.

Use Case: The Alternative Chunk Strategy is suitable for processing content with variable structures, especially when line breaks and document sections can be used as cues to create meaningful chunks. It allows for a more contextually relevant chunking approach.

## More Information

- [Knowledge AI](overview.md)
- [Cognigy Text Format](ctxt.md)