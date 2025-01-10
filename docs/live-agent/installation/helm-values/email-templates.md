---
title: "Email Templates" 
slug: "email-templates" 
hidden: false 
ignore_macros: true
tags:
  - Live Agent
  - Email Template
  - Email Templates
---

# Email Templates

Live Agent allows customization of email notifications.

To customize the email notifications, follow the instructions below. To update the content, you have to add a new template in the Database, here is how you can do it.

### 1. Login to The Rails Console.

Attach a shell to the main Live Agent pod and run the following command:

```rb
RAILS_ENV=production bundle exec rails console
```

### 2. Create A New Template For The Emails. Execute The Following Commands.

```rb
email_template = EmailTemplate.new
email_template.name = 'conversation_assignment' # Accepts conversation_assignment, conversation_creation
email_template.body = '// Enter your content'
email_template.save!
```

#### Variables

The template can receive 3 variables:

1. `user` - Use `{{ user.name }}` to get the username.
2. `conversation` - Use `{{ conversation.display_id }}` to get the conversation ID
3. `action_url` - This is the URL for the conversation.

### Default content

The default content of the above template is shown below.

#### 1. Conversation Assignment

```html
<p>Hi {{user.available_name}},</p>
<p>A new conversation has been assigned to you</p>
<p> Click <a href="{{action_url}}">here</a> to get cracking.</p>
```

#### 2. Conversation Creation

```html
<p>Hi {{user.available_name}}</p>

<p>A new conversation has been created in {{ inbox.name }}</p>
<p>
Click <a href="{{ action_url }}">here</a> to get cracking.
</p>
```

[Liquid templating engine](https://shopify.github.io/liquid/) is used internally, which means that all valid operators can also be used.