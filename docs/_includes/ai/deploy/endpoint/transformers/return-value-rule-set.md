- The return value is validated against a set of rules. If these rules aren't met, the transformer throws an error. The following rules apply:

    - `userId` is a string with up to 256 characters.
    - `sessionId` is a string with up to 256 characters.
    - `text` is a string with up to 10,000 characters.
    - `data` is an object.