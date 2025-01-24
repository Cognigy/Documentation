# Linter

_[Vale](https://vale.sh/)_ is a linter for writers, open-source and customizable tool. Unlike traditional code linters, it checks the style, grammar, and consistency of written content such as documentation, blogs, and technical writing.

The Cognigy Documentation team develops, maintains, and manages the Cognigy Documentation linter.
It is built on the Vale Linter
and includes style rules and documentation best practices tailored for the [Cognigy Documentation](https://docs.cognigy.com/).

## Anatomy of the Linter

The Cognigy Documentation linter contains the following components:

- [configuration file](#configuration-file)
- [styles](#styles)

### Configuration File

- `.vale.ini` is the configuration file that defines settings, such as the paths to styles and specific rules to apply. This file is located at the root of the documentation repo.

### Styles

- `styles` - the folder with rules and checks for customized linting based on the [Cognigy Documentation Style Guide](https://login.microsoftonline.com/4a7853bd-0ffb-40ff-904c-b20996f4be78/oauth2/authorize?client%5Fid=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&response%5Fmode=form%5Fpost&response%5Ftype=code%20id%5Ftoken&resource=00000003%2D0000%2D0ff1%2Dce00%2D000000000000&scope=openid&nonce=D5DEC8FD8384F197062A3C293F6875D6F23A84E9E37ACCCC%2D8DAA84DCBE23DC31D6147A2371797C31A503539F0ADF7AA9F34DA43EF75B7718&redirect%5Furi=https%3A%2F%2Fcognigy%2Dmy%2Esharepoint%2Ecom%2F%5Fforms%2Fdefault%2Easpx&state=OD0w&claims=%7B%22id%5Ftoken%22%3A%7B%22xms%5Fcc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&wsucxt=1&cobrandid=11bd8083%2D87e0%2D41b5%2Dbb78%2D0bc43c8a8e8a&client%2Drequest%2Did=28ca58a1%2D80de%2D9000%2Df7be%2D6a9b1ecf34cc&sso_reload=true). This folder is located at the root of the documentation repo.
   The `styles` folder contains the following sub-folders:
    - `Cognigy` - contains a list of `.yml` files; each file is a separate grammar or style rule.
    - `config/vocabularies/Docs` - contains terminology that is accepted or rejected by the linter.

## How to Run the Linter

### Run the Linter Locally

1. [Install Vale](https://vale.sh/docs/vale-cli/installation/) by following the instructions for your operating system. 
2. To verify that Vale is installed, run the following command in your terminal:
   ```bash
   vale -v
   ``` 
3. Open a terminal and navigate to the root directory of your documentation repository where the `vale.ini` configuration file is located:

   ```bash
   cd path/to/your/repository
   ```
4. Run the Vale linter by using one of the following commands:

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
    This feedback has the following format:

    ```txt
    docs\ai\test\logs.md 
    6:3     error       Use 'logs' instead of 'Logs'.   Vale.Terms
    
    39:5    suggestion  Try to keep your sentence       Cognigy.SentenceLenghth
                        length to 25 words or fewer.
    
    40:117  warning     Avoid temporal words like       Cognigy.Tense
                        'currently'.
    ```
    where `docs\ai\test\logs.md` is the file where linter found issues.
6. Open the files where the linter found issues and make the necessary changes based on the feedback.
7. After fixing the issues, rerun the linter to ensure that they have been resolved.

### Run the Linter on Azure Devops

1. In Azure Devops, go to the **Documentation** project.
2. Select the PR that you want to check. Make sure that your PR is updated, contains the latest changes from the main branch, and points to the main branch.
3. To trigger the Vale linter, follow these steps:
    3.1 Click View 3 checks. 
    3.2 In the **Checks** window, under the Optional click **Re-queue next** or **Queue** next to the **vale-linter** check. 
    3.3 If the build is successful, you will see a comment from Mr. Vale.

## More Information

- [Vale: Quick Start](https://vale.sh/docs/vale-cli/structure/#quick-start)