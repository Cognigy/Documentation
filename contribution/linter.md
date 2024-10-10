# Linter

_[Vale](https://vale.sh/)_ is a linter for writers, open-source and customizable. Unlike traditional code linters, it checks the style, grammar, and consistency of written content such as documentation, blogs, and technical writing.

The Cognigy Documentation team develops, maintains, and manages the Cognigy style guide linter. It is built on the Vale Linter and includes style rules and documentation best practices tailored for Cognigy.

## Anatomy of the Linter



## How to Run the Linter

1. [Install Vale](https://vale.sh/docs/vale-cli/installation/) by following the instructions for your operating system. 
2. To verify that Vale is installed, run the following command in your terminal:
   ```bash
   vale -v
   ``` 
3. Open a terminal and navigate to the root directory of your documentation repository where the `vale.ini` configuration file is located:

   ```bash
   cd path/to/your/repository
   ```
4. Run Vale Linter by using one of the following commands:

     - To lint a specific file, run:
     
       ```bash
       vale path/to/your/file.md
       ```
       Example
   
       ```bash
       vale docs/ai/glossary.md
       ```
    
     - To lint all files in the current directory, run:
    
       ```bash
       vale .
       ```
     
     - To lint all files in a specific folder, run:
   
       ```bash
       vale path/to/your/folder/
       ```

       Example
   
       ```bash
       vale docs/ai/
       ```

5. Vale will display any issues found in your files. The issues can have the following types:
    - `error` - critical issues must be fixed. Note that exceptions are always possible. Consider the context of the sentence.
    - `warning` - potential issues that may affect the readability or clarity of your writing.
    - `suggestion` - optional recommendations that can help improve your writing style or consistency.
  Review the feedback carefully to understand where and how to improve the text.
6. Make the necessary changes to your files based on the feedback from Vale.
7. After fixing the issues, rerun Vale to ensure that they have been resolved.

