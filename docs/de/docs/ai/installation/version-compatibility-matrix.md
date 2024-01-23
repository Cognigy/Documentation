---
Titel: "Versionskompatibilitätsmatrix"
Slug: "Cognigy-AI-Version-Kompatibilitätsmatrix"
Beschreibung: "Die Versionskompatibilitätsmatrix für Cognigy.AI- und Infrastrukturkomponenten liefert wertvolle Erkenntnisse und gewährleistet eine nahtlose Integration und Upgrades für eine optimale Leistung."
ausgeblendet: false
---

# Cognigy.AI und Einblicke: Versionskompatibilitätsmatrix

Diese Matrix beschreibt die Kompatibilität von Cognigy.AI- und Insights-Produktversionen mit Cognigy-Infrastrukturkomponenten.
wie Kubernetes, MongoDB und Redis. 

{! _includes/installation/on-prem-compatibility-matrix-note.md !}

| Cognigy.AI + Einblicke /<br> Infra-Komponente | Kubernetes | MongoDB | Redis / Redis Persistent | Traefik | RabbitMQ | Helm |
|---------------------------------------------|------------|---------|--------------------------|---------|----------|---------------|
| 4,46 | 1,19-1,24 | 4,2-4,4 | 7.0[^*] | 2,6 | 3,9 | 3.8 oder höher |
| 4,47 | 1,19-1,24 | 4,2-4,4 | 7.0[^*] | 2,6 | 3,9 | 3.8 oder höher |
| 4,48 | 1,19-1,24 | 4,4-5,0 | 7.0[^*] | 2,6 | 3,9 | 3.8 oder höher |
| 4,49 | 1,19-1,24 | 4,4-5,0 | 7.0[^*] | 2,6 | 3,9 | 3.8 oder höher |
| Nr. 4,50 | 1,19-1,24 | 4,4-5,0 | 7.0[^*] | 2,6 | 3,9 | 3.8 oder höher |
| 4,51 | 1,19-1,25 | 4,4-5,0 | 7.0[^*] | 2,6 | 3,9 | 3.8 oder höher |
| 4,52 | 1,19-1,25 | 4,4-5,0 | 7.0[^*] | 2,6 | 3,9 | 3.8 oder höher |
| 4,53 | 1,19-1,25 | 4,4-5,0 | 7.0[^*] | 2,6 | 3,9 | 3.8 oder höher |
| 4,54 | 1,19-1,25 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| Nr. 4,55 | 1,19-1,26 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| 4,56 | 1,19-1,26 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| 4,57 | 1,19-1,26 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| 4,58 | 1,19-1,26 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| 4,59 | 1,19-1,26 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| Nr. 4,60 | 1,19-1,26 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| 4,61 | 1,19-1,26 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| 4,62 | 1,19-1,26 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| 4,63 | 1,19-1,26 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| Nr. 4,64 | 1,19-1,26 | 5,0 | 7.0[^**] | 2.10 | 3,9 | 3.9 oder höher |
| 4,65 | 1,19-1,26 | 5,0 | 7.0[^***] | 2.10 | 3,9 | 3.9 oder höher |

[^*]: Eigenständiger Einsatz.

[^**]: Sowohl eigenständige als auch Hochverfügbarkeit (HA) mit Sentinel-Bereitstellungen.

[^**]: Hochverfügbarkeit (HA) mit Sentinel-Bereitstellung.

## Mehr Informationen

Versions-Kompatibilitäts-Matrix:

- [Live Agent](.. /.. /live-agent/installation/deployment/version-compatibility-matrix.md)
- [Arbeitsbereich "Agent Assist"](.. /.. /ai-copilot/installation/version-compatibility-matrix.md)
- [Sprach-Gateway](.. /.. /voicegateway/installation/version-compatibility-matrix.md)