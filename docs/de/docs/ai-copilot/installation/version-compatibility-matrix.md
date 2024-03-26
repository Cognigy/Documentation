---
title: "Versionskompatibilitätsmatrix"
Slug: "Agenten-Assist-Version-Kompatibilitätsmatrix"
Beschreibung: "Die Versionskompatibilitätsmatrix für Cognigy AI Copilot Workspace and Infrastructure Components liefert wertvolle Erkenntnisse und gewährleistet eine nahtlose Integration und Upgrades für eine optimale Leistung."
ausgeblendet: false
---

# KI-Copilot: Versionskompatibilitätsmatrix

!!! Anmerkung
    Wenn Sie ein neuer Benutzer von AI Copilot sind und es ab [Cognigy Version 4.65](.. /.. /release-notes/4.65.md), benötigen Sie diese Installationsanleitung nicht. Ab Version 4.65 ist AI Copilot in der [Cognigy.AI-Installation] (.. /.. /ai/installation/overview.md).

Diese Matrix beschreibt die Kompatibilität der Cognigy AI Copilot Workspace-Versionen mit Cognigy-Infrastrukturkomponenten.
wie Kubernetes, MongoDB und Redis.

{! _includes/installation/on-prem-compatibility-matrix-note.md !}

| KI-Copilot /<br> Infra-Komponente | Kubernetes | Redis | MongoDB | Helm |
|----------------------------------|------------|----------|---------|---------------|
| 4,51 | 1,22-1,25 | 7.0[^*] | 4,4-5,0 | 3.8 oder höher |
| 4,52 | 1,22-1,25 | 7.0[^*] | 4,4-5,0 | 3.8 oder höher |
| 4,53 | 1,22-1,25 | 7.0[^**] | 4,4-5,0 | 3.8 oder höher |
| 4,54 | 1,22-1,25 | 7.0[^**] | 5,0 | 3.9 oder höher |
| 4,55 | 1,22-1,26 | 7.0[^**] | 5,0 | 3.9 oder höher |
| 4,56 | 1,22-1,26 | 7.0[^**] | 5,0 | 3.9 oder höher |
| 4,57 | 1,22-1,26 | 7.0[^**] | 5,0 | 3.9 oder höher |
| 4,58 | 1,22-1,26 | 7.0[^**] | 5,0 | 3.9 oder höher |
| 4,59 | 1,22-1,26 | 7.0[^**] | 5,0 | 3.9 oder höher |
| 4,60 | 1,22-1,26 | 7.0[^**] | 5,0 | 3.9 oder höher |
| 4,61 | 1,22-1,26 | 7.0[^**] | 5,0 | 3.9 oder höher |
| 4,62 | 1,22-1,26 | 7.0[^**] | 5,0 | 3.9 oder höher |
| 4,63 | 1,22-1,26 | 7.0[^**] | 5,0 | 3.9 oder höher |
| 4,64 | 1,22-1,26 | 7.0[^**] | 5,0 | 3.9 oder höher |

[^*]: Eigenständiger Einsatz.

[^**]: Sowohl eigenständige als auch Hochverfügbarkeit (HA) mit Sentinel-Bereitstellungen.

## Mehr Informationen

Versions-Kompatibilitäts-Matrix:

- [Cognigy.AI und Einsichten](.. /.. /ai/installation/version-compatibility-matrix.md)
- [Live Agent](.. /.. /live-agent/installation/deployment/version-compatibility-matrix.md)
- [Sprach-Gateway](.. /.. /voicegateway/installation/version-compatibility-matrix.md)