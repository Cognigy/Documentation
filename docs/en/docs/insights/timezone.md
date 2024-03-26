---
title: "Time Zone" 
slug: "timezone"
hidden: false 
---

# Time Zone

Insights applications support presenting time-based data with an account to the user's time zone. 

!!! note 
    In OData feed time is always in UTC format. You should take this into account if you compare it with Insights.

## Changing the preferred Time Zone

[![Version badge](https://img.shields.io/badge/Added in-v4.14-blue.svg)]({{config.site_url}})

By default, Insights uses time zone preferences of your device. You can override this in **My Profile**. 

This comes handy if you travel a lot and your device time zone gets updated by your location, or you may have a multinational Agent with the users all over the globe.

To change time zone preferences:

1. Click on the user icon in the top-right corner.
2. Select **My Profile**.
3. Choose preferred time zone in the **Select Time zone** input.

<figure>
  <img class="image-center" src="{{config.site_url}}insights/images/my-profile-timezone-selection.png" width="100%" alt="Excerpt of the settings on 'My Profile page'" />
  <figcaption>Here selected the "Europe/Berlin" time zone</figcaption>
</figure>


!!! note
    Custom time zone preferences are stored inside the browser storage, means you need to select custom time zone preference again if you change the device and/or the browser.