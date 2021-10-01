# Live Agent Production deployment guide

This guide will help you to deploy Live Agent to production!

### Architecture
Running Live Agent in production requires the following set of services.

- Live Agent web servers
- Live Agent workers
- PostgreSQL Database
- Redis Database
- Email service (SMTP servers / sendgrid / mailgun etc)
- Object Storage ( S3, Azure Storage, GCS, etc)

<img src="{{config.site_url}}live-agent/resources/images/live-agent-architecture.png" width="100%" style="margin-bottom: 5px">