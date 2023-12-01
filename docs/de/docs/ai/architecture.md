---
Titel: "Architektur"
Slug: "Architektur"
ausgeblendet: false
---

# Architektur

## Übersicht

<div class="divider"></div>
Cognigy.AI handelt es sich um eine moderne, cloudnative Softwarelösung, die auf einer skalierbaren Microservice-Architektur basiert. Diese moderne Architektur ermöglicht es,
um die Rechenleistung mehrerer Server für ein einziges Softwareprodukt zu nutzen. Anstatt eine einzelne ausführbare Datei auf einem einzelnen Server auszuführen,
Wir haben Cognigy.AI in mehr als 30 separate ausführbare Dateien zerlegt. Diese kleineren ausführbaren Dateien (daher der Name Microservice), obwohl sie getrennt sind,
agieren als ein einzelnes Produkt - Cognigy.AI - indem sie über Netzwerkanrufe miteinander interagieren.

<figure>
  <img class="image-center" src="{{config.site_url}}ai/images/architecture.drawio.png" width="100%" />
  <figcaption>Cognigy.AI v4.55.0-Architektur</figcaption>
</figure>

Jeder einzelne Microservice wird als containerisierte Anwendung auf Kubernetes ausgeführt. Container sind eine Möglichkeit, wie Prozesse isoliert ausgeführt werden können
und bieten die Möglichkeit, moderne Softwareprodukte zusammen mit ihren Abhängigkeiten auszuliefern - zum Beispiel eine Laufzeitumgebung.
Ein Programm, das in JavaScript geschrieben wurde, benötigt möglicherweise eine bestimmte Version der NodeJS-Laufzeitumgebung, um ordnungsgemäß zu funktionieren - Container erlauben es, solche
Abhängigkeiten zusammen mit der eigentlichen Anwendung zu einer lieferbaren Einheit. Eine der beliebtesten Container-Runtimes und eine Reihe anderer Container
spezifische Tools ist [Docker](https://www.docker.com/).

Die Verwaltung einer hohen Anzahl von beweglichen Teilen - den oben erwähnten Microservices - ist eine ziemliche Herausforderung und erfordert ein zusätzliches Softwareprodukt
, der als Containerorchestrator bezeichnet wird. [Kubernetes] (https://kubernetes.io/) ist ein solcher Container-Orchestrator, der sich mit Aufgaben befasst wie:

- Zuweisung von Containern zu einem der verfügbaren Server im Kubernetes-Cluster unter Berücksichtigung ihrer individuellen Hardwareanforderungen und deren Abgleich mit der verfügbaren Hardware auf einem Server
- Beobachten, ob Container im Falle eines Absturzes neu gestartet werden müssen
- Aktualisieren von Containern auf eine neuere Version, wenn ein Softwareupdate (z. B. eine neue Version von Cognigy.AI) ausgeliefert wurde
- Testen, ob containerisierte Prozesse noch reagieren, indem sie Readiness- und Livess-Probes senden
- Skalierung von Microservices nach Auslastungsindikatoren wie CPU-Auslastung, Speicherprofil oder benutzerdefinierten Metriken durch das Starten zusätzlicher Kopien von Diensten

## Laufzeit & IDE

<div class="divider"></div>
Cognigy.AI selbst ist ein Produkt, das verschiedene Arten von Funktionen bietet:

-ALAND
-Laufzeit

Cognigy Insights ist zwar auch Teil Cognigy.AI, spielt aber eine geringere Rolle, wenn es um die Cognigy.AI Kernproduktinfrastruktur geht. Weitere Informationen finden Sie in der Dokumentation [Insights (Analytics)]({{config.site_url}}insights/cognigy-insights/).

### IDE - Erstellen Ihrer virtuellen Agenten

Ein Ort, an dem Sie virtuelle Agenten erstellen und alle Funktionen wie Flows, Playbooks, Lexika und Absichten nutzen können. Wir nennen diesen Teil des Produktes die IDE (=Integrated Development Environment) – ein Begriff, der in der Softwareentwicklung häufig verwendet wird. Sobald Sie mit der ersten Iteration Ihres virtuellen Agenten fertig sind, wird ein sogenannter [Snapshot](.. /ai/resources/deploy/snapshots.md) muss erstellt werden, um Ihren virtuellen Agenten in der Produktion bereitzustellen. Ein Snapshot ist eine unveränderliche Kopie Ihres virtuellen Agenten, die alle Ressourcen enthält, aus denen er besteht - zum Beispiel Ihre Flows, Lexika, Absichten und Erweiterungen. Snapshots fungieren als Schnittstelle zur zweiten Gruppe von Funktionen: der Cognigy.AI Runtime.

In der folgenden Tabelle sind die wichtigsten Microservices aufgeführt, aus denen die IDE besteht:

| Name des Microservice | Zuständigkeiten |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Service-API | RESTful API zur vollständigen Kontrolle Cognigy.AI durch HTTP-Aufrufe. Die vollständige Dokumentation in Form einer [OpenAPI-Spezifikation]({{config.site_url}}ai/developer-guides/using-api/) ist verfügbar. Implementiert auch Authentifizierung und Autorisierung. Integrationen mit Identitätsanbietern über unsere Single-Sign-On-Integration. |
| Service-UI | Dient der WebGUI für Cognigy.AI |
| Service-Webchat | Server ist eine Demo-Website, auf der immer die aktuellste Version des Cognigy WebchatWidgets eingebettet ist. Fungiert als Ort für Rapid Prototyping. |
| Service-Ressourcen | Verwaltet alle Ressourcen innerhalb Cognigy.AI - also Flows, Endpunkte, Playbooks usw. - durch das Angebot interner APIs, die von anderen Microservices aufgerufen werden können.                                                                                                                                               |
| Service-Custom-Module | Verarbeitet hochgeladene Cognigy Extensions und bereitet sie für die Nutzung vor.                                                                                                                                                               |
| Service-Sicherheit | Verwaltet Benutzer, Organisationen und Rollen einschließlich Berechtigungen.                                                                                                                                                                    |
| Service-Task-Manager | Verwaltet lang andauernde Vorgänge innerhalb Cognigy.AI. Zu diesen Vorgängen gehören die Erstellung von Cognigy-Snapshots, das Verpacken von Assets für Downloads und die Verarbeitung Ihrer hochgeladenen Dokumente als Teil unserer Knowledge AI-Lösung. Unsere Benutzeroberfläche stellt einen Task-Manager zur Verfügung, der alle lang andauernden Vorgänge anzeigt. |

### Runtime - Ausführen Ihrer virtuellen Agenten

Unsere Runtime ist auf Leistung und Durchsatz optimiert. Alle Microservices, die zur Runtime gehören, werden regelmäßig einem Stresstest unterzogen und können horizontal skaliert werden. Die Laufzeit von Cognigy.AI ist ein hochgradig verteiltes System und kann große Mengen an Hardware nutzen, wenn sie gegeben ist. Wir führen für jedes Release von Cognigy.AI Performance-Tests durch, um sicherzustellen, dass eine neue Version mindestens so schnell und skalierbar ist wie die letzte Version.

In der folgenden Tabelle werden die Zuständigkeiten der wichtigsten Laufzeitmicroservices beschrieben:

| Name des Microservice | Zuständigkeiten |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| service-endpoint | Übersetzt kanalspezifische eingehende Anfragen an unsere interne Vertretung, führt Transformers aus, zählt abrechnungsrelevante Informationen und sendet Antworten an externe Kanäle zurück.                                                                                |
| service-app-session-manager | Fungiert als API für Cognigy xApp-Sitzungen, um eine Verbindung herzustellen. Verteilt xApp-relevante Ereignisse an Endgeräte und reagiert auf xApp-Dateneingaben. |
| Service-KI | Verarbeitet aktuelle Benutzernachrichten, koordiniert mit unseren NLU-Microservices, wartet auf Erweiterungen und HTTP-Anfragen an externe Systeme und verarbeitet Cognigy Script. Das ist der Kern von Cognigy.AI.                                                                                                                   |
| service-nlp-ner | Erkennt [System Slots]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) in Benutzeräußerungen - dies sind Dinge wie Datumsangaben, E-Mails, Währungen und Zahlen.                                                                                                         |
| service-nlp-matcher | Erkennt [Lexicon Slots]({{config.site_url}}ai/nlu/slot-mapping/slot-mapping/) in Benutzeräußerungen mithilfe von [Lexicons]({{config.site_url}}ai/resources/build/lexicons/).                                                                                                    |
| service-nlp-classifier-score | Implementieren Sie die Absichtserkennung auf der Grundlage von [Intent-Modellen]({{config.site_url}}ai/nlu/nlu-overview/overview/), die unsere Kunden innerhalb unserer Plattform trainieren können. Es gibt Varianten für verschiedene Sprachen (Deutsch, Englisch, Koreanisch, Japanisch, Generisch, XX).                      |
| service-nlp-einbetten | Führt unsere vortrainierten Worteinbettungsmodelle aus, die Teil unseres NLU-Systems sind und [Intent-Modelle]({{config.site_url}}ai/nlu/nlu-overview/overview/) steuern, die unsere Kunden als Teil unserer Plattform erstellen können. Sprachabhängige Einbettungsdienste sind verfügbar. |
| Service-HTTP & Ausführung | Sendet HTTP-Requests an externe 3rd-Party-Systeme, wenn [HTTP Request Flow Node]({{config.site_url}}ai/flow-nodes/services/http-request/) verwendet wird und führt Flow Nodes unserer Kunden im Rahmen von [Extensions]({{config.site_url}}ai/resources/manage/extensions/) aus. |
| Leistungsprofile | Verwaltet [Kontaktprofile]({{config.site_url}}ai/resources/manage/contact-profiles/) und bietet die Möglichkeit, über Cognigy Script darauf zuzugreifen.     |
| Service-Funktion-Scheduler & Funktionsausführung | Plant und führt den Quellcode unserer Kunden in [Cognigy Functions]({{config.site_url}}ai/resources/build/functions/) aus.                                                                                                                                      |
| Service-Übergabe | Implementiert eine Schnittstelle für 3rd-Party-[Handover-Anbieter]({{config.site_url}}ai/handover-providers/overview/) wie Ring Central Engage. Leitet die Nachricht der Endbenutzer an diese externen Anbieter weiter, während sich die Konversationen in der "Übergabe" befinden.                                                                                         |