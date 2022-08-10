---
title: "Installation Process"
slug: "installation-process"
hidden: false
---

# Install VoiceGateway

## Install Helm Charts

To install VoiceGateway please perform following steps:

<!---
TODO: Update the VoiceGateway Helm Chart links (main page and readme) with the public GitHub Helm Chart repository once we have it.
TODO: VoiceGateway Helm Chart contains the installation guide and it is still on progress, remove this when the final version is commited.
-->

1. Install VoiceGateway with [VoiceGateway Helm Chart](https://cognigy.visualstudio.com/VoiceGateway/_git/voicegateway-app). For up-to-date installation instructions refer to [README.md](https://cognigy.visualstudio.com/VoiceGateway/_git/voicegateway-app?path=/README.md)

Once Helm releases is successfully installed, you can open a web-browser and visit the URL which you have set in `webapp.host` parameter VoiceGateway Helm release. You should be able to see the login screen of VoiceGateway WebApp:

<figure>
  <img class="image-center" src="{{config.site_url}}voicegateway/images/VG-login.png" width="90%" />
  <figcaption>Login screen of VoiceGateway WebApp</figcaption>
</figure>

## Initial Login Credentials

Once you are able to see the VoiceGateway login screen you can be use to log in, the default `admin` user with initial password `admin` as well. You will be asked to change the password after the first login, please do that and choose a strong new password.
