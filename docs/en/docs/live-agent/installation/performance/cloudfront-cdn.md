---
sidebar_label: "Cloudfront CDN"
title: "Configuring Cloudfront with Live Agent"
---

This document helps you to configure Cloudfront as the asset host for Live Agent. If you have a high traffic website, we would recommend setting up a CDN for Live Agent.

### Configure a Cloudfront distribution

**Step 1**: Create a Cloudfront distribution.

<img src="{{config.site_url}}live-agent/resources/images/create-distribution-cloudfront.png" width="100%" style="margin-bottom: 5px">

**Step 2**: Select "Web" as delivery method for your content.

<img src="{{config.site_url}}live-agent/resources/images/step-2-cloudfront.png" width="100%" style="margin-bottom: 5px">

**Step 3**: Configure the Origin Settings as the following.

<img src="{{config.site_url}}live-agent/resources/images/step-3-cloudfront.png" width="100%" style="margin-bottom: 5px">

- Provide your Live Agent Installation URL under Origin Domain Name.
- Select "Origin Protocol Policy" as Match Viewer.

**Step 4**: Configure Cache behaviour.

<img src="{{config.site_url}}live-agent/resources/images/step-4-cloudfront.png" width="100%" style="margin-bottom: 5px">

- Configure **Allowed HTTP methods** to use *GET, HEAD, OPTIONS*.
- Configure **Cache and origin request settings** to use *Use legacy cache settings*.
- Select **Whitelist** for *Cache Based on Selected Request Headers*.
- Add the following headers to the **Whitelist Headers**.
<img src="{{config.site_url}}live-agent/resources/images/step-4-2-cloudfront.png" width="100%" style="margin-bottom: 5px">
  - **Access-Control-Request-Headers**
  - **Access-Control-Request-Method**
  - **Origin**

**Step 5**: Click on **Create Distribution**. You will be able to see the distribution as shown below. Use the **Domain name** listed in the details as the **ASSET_CDN_HOST** in Live Agent.

<img src="{{config.site_url}}live-agent/resources/images/step-5-cloudfront.png" width="100%" style="margin-bottom: 5px">

### Add ASSET_CDN_HOST in Live Agent

Your Cloudfront URL will be of the format `<distribution>.cloudfront.net`.

Set

```bash
ASSET_CDN_HOST=<distribution>.cloudfront.net
```

in the environment variables.
