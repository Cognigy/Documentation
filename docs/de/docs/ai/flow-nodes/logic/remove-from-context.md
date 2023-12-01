---
title: "Aus dem Kontext entfernen" 
slug: "Aus dem Kontext entfernen" 
ausgeblendet: false 
---
# Aus dem Kontext entfernen

<figure>
  <img class="image-center" src="{{config.site_url}}ai/flow-nodes/images/logic/remove-from-context.png" width="80%"/>
</figure>

## Beschreibung<div class="divider"></div>Dieser Node wird verwendet, um Informationen aus dem Cognigy [Context](.. /.. /tools/interaction-panel/context.md). 

| Parameter | Typ | Beschreibung |
|-----------|--------------|----------------------------------------------------------------------------------------------------------|
| Schlüssel | Cognigy Text | Der Schlüssel, den Sie entfernen möchten. Dabei kann es sich um einen Schlüssel handeln, der mit einem Punkt verschachtelt ist, z. B. "my.first.key".              |
| Wert | Cognigy Text | Der Wert, der aus dem Array entfernt werden soll, wenn 'Mode = Array' ausgewählt wird.                                          |
| Modus | Wählen Sie | - Einfach entfernt den Schlüssel vollständig<br>- Array entfernt den Wert aus dem Array, das in 'context.key' gespeichert ist. |