---
title: "Canned Responses"
slug: "canned-responses"
description: "Canned responses are preconfigured reply templates that help human agents respond quickly during conversations. These templates support HTML formatting, allowing for customized and efficient responses."
hidden: false
---

# Canned Responses

Canned responses are pre-saved reply templates allowing human agents to respond to a conversation quickly.

Canned Response templates provide support for HTML formatting.

## Create a Canned Response

[![Version badge](https://img.shields.io/badge/Updated in-v4.53-blue.svg)](../release-notes/4.53.md)

To create a new canned response, follow these steps:

1. Open the Live Agent interface.
2. Go to **Settings > Canned Responses**.
3. In the upper-right corner, click **Add Canned Response**.
4. In the **Add Canned Response** window, fill in the following fields:
    - **Short Code** — add a word that associates with the response.
    - **Content** — add a message that will be sent to the user.
    - **Level** — select one of the following options from the list:
        - **Global** — all human agents can use a canned response.
        - **Personal** — only you can use a canned response.
        - **Team** — only human agens from the selected [team](teams.md) can use a canned response. You can select only one team.
5. Click **Submit**.

The canned response will appear in the list on the Canned Responses page.

Alternatively, you can add a canned response or a list of canned responses by importing a CSV file.

## Import Canned Responses

[![Version badge](https://img.shields.io/badge/Added in-v4.52-blue.svg)](../release-notes/4.52.md)

To import canned responses, follow these steps:

1. Prepare a CSV file with `short_code` and `content` as headers. For example:
   ```txt
    | short_code | content                             |
    |------------|-------------------------------------|
    | delivery   | When do you want to place an order? |
   ```
2. Open the Live Agent interface. 
3. Go to **Settings > Canned Responses**. 
4. In the upper-right corner, click **Import Canned Response**.
5. In the **Import Canned Response** window, click **Select File**.
6. Upload the CSV file that you previously created.
7. Click **Import**.

The canned responses will appear in the list on the Canned Responses page. 

## Use a Canned Response

To start using canned responses in the conversations, go to the [Send a Canned Response](conversation/conversation-workflow.md#send-a-canned-response).