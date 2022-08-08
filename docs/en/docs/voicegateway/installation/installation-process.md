---
title: "Installation Process"
slug: "installation-process"
hidden: false
---

# Install VoiceGateway

## Install Helm Charts

To install VoiceGateway please perform following steps:

1. Install VoiceGateway with [VoiceGateway Helm Chart](https://github.com/Cognigy/cognigy-ai-helm-chart). For up-to-date installation instructions refer to [README.md](https://github.com/Cognigy/cognigy-mongodb-helm-chart#readme)

Once Helm releases is successfully installed, you can open a web-browser and visit the URL which you have set in `serviceUi.host` parameter VoiceGateway Helm release. You should be able to see the login screen of VoiceGateway Web Portal:

<figure>
  <img class="image-center" src="{{config.site_url}}voicegateway/images/VG-login.png" width="90%" />
  <figcaption>Login screen of VoiceGateway WebApp</figcaption>
</figure>

## Initial Login Credentials

Once you are able to see the VoiceGateway login screen you can be use to log in, the default `admin` user with initial password `admin` as well. You will be asked to change the password after the first login, please to do that and to choose a strong new password.
