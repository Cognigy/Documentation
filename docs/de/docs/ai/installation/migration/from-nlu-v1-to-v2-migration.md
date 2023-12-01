---
Titel: "Cognigy NLU: V1 bis V2"
Schnecke: "von-nlu-v1-zu-v2"
ausgeblendet: false
---

# Cognigy NLU: von V1 auf V2

[! [Versions-Abzeichen] (https://img.shields.io/badge/Added in-v4.60-blue.svg)] (.. /.. /.. /release-notes/4.60.md)

Dieser Leitfaden richtet sich an On-Premise-Kunden von Cognigy, die von der älteren Version von Cognigy NLP auf die neuere Version migrieren.

!!! Hinweis "Verwerfung von Cognigy NLU V1"
    Ab Version **4.60.0** werden wir nur noch Fehlerbehebungen für die alten NLP-Dienste bereitstellen, wenn diese kritisch sind. Die alten NLP-Dienste werden mit der Version **4.64.0** vollständig veraltet sein, zu diesem Zeitpunkt sollten alle On-Premise-Kunden migriert sein. Nach der Veröffentlichung von **4.64.0** werden die alten NLP-Dienste nicht mehr verfügbar sein.

## Einleitung

Wir haben die Skalierbarkeit, Zuverlässigkeit und Sicherheit unserer NLP-Dienste verbessert, um große Workloads zu bewältigen und den Hardware-Platzbedarf zu reduzieren. Dabei haben wir unsere bestehende NLP-Architektur in mehrere kleinere Dienste aufgeteilt, die unabhängig voneinander besser skalieren können. Darüber hinaus haben wir die Art und Weise angepasst, wie wir die trainierten NLU-Modelle speichern, was dazu führt, dass die Dienste beim Trainieren der Modelle weniger Arbeitsspeicher benötigen. Aufgrund dieser Änderung ist es daher erforderlich, die Modelle auf dem System neu zu erstellen. Da die manuelle Neuerstellung der Modelle einen erheblichen Aufwand erfordern würde, haben wir einen Migrationsauftrag geschrieben, der sich darum kümmert. In dieser Anleitung wird beschrieben, wie Sie den Migrationsauftrag verwenden.

Wir haben die alten NLP-Dienste erfolgreich auf allen von Cognigy gehosteten Produktionsumgebungen unserer Kunden migriert und entfernt.

## Terminologie

In diesem Leitfaden werden bestimmte Begriffe verwendet.

_**Alte NLP-Dienste**_

Bezieht sich auf die veralteten NLP-Dienste.

_**NLP V2-Stapel**_

Bezieht sich auf die neuen NLP-Dienste, die wir eingeführt haben.

## Was gibt's Neues?

### Änderungen an der Funktionalität

Diese Änderungen haben **keine Auswirkungen** auf die Funktionalität vorhandener KI-Agenten. Alle Intent-Modelle funktionieren weiterhin wie bisher, da wir keine funktionalen Änderungen vorgenommen haben.

Um dies sicherzustellen, haben wir Tausende von Anfragen überwacht und die Intent-Ergebnisse zwischen den alten und den neuen NLP-Diensten verglichen. Unsere Ergebnisse zeigten, dass es bei weniger als 1 % der Anfragen zu einer Veränderung der Intent-Scores kam. In diesen wenigen Fällen waren die Veränderungen in den Absichtswerten minimal.

### Änderungen an der Service-Architektur

Die folgenden Dienste werden als veraltet markiert:

- 'Service-NLP-Score-<language>'
- 'Service-NLP-Zug-<language>'

Stattdessen werden folgende Dienstleistungen eingeführt:

- 'Service-NLP-Orchestrator'
- 'service-nlp-classifier-score<language>-'
- 'service-nlp-classifier-train-<language>'
- 'Service-NLP-Einbetten<language>-'

Die neuen Dienste sind kleiner als die alten Dienste und können Komponenten zwischen Bewertung und Training sowie zwischen verschiedenen Sprachen besser wiederverwenden. Die neue Architektur ermöglicht auch eine viel flexiblere Skalierung, wenn die Last in einer Umgebung zunimmt.

## Qualitätssicherung bei der Migration

Das Cognigy-Team begann mit der Bereitstellung der neuen NLP-Dienste mit der Veröffentlichung **4.54.0** von Cognigy.AI. Daher verfügen wir bereits über umfangreiche Erfahrung mit der Ausführung dieser Dienste in der Produktion und der Migration vorhandener KI-Agenten, um die neuen Dienste zu nutzen.

Darüber hinaus haben wir alle von Cognigy gehosteten Kundenumgebungen erfolgreich migriert, ohne Ausfallzeiten oder Auswirkungen auf die Benutzer.

## Migrieren von Entwicklungs- und Produktionsumgebungen

Wenn Sie über mehrere Umgebungen verfügen, in denen Cognigy.AI ausgeführt wird, z. B. in der Entwicklungs- und Produktionsumgebung,
dann ist es wichtig, NLP V2 in allen Umgebungen gleichzeitig bereitzustellen**.
Dadurch wird sichergestellt, dass Snapshots reibungslos funktionieren, wenn sie zwischen diesen Umgebungen übertragen werden.

## Voraussetzungen

Bevor Sie mit der Migration beginnen, stellen Sie sicher, dass die folgenden Voraussetzungen erfüllt sind:

- Stellen Sie Cognigy.AI Version 4.54.0 oder höher bereit.
- Stellen Sie den NLP V2-Stack in allen Umgebungen bereit (siehe unten).

### Installieren Sie den NLP V2 Stack

#### NLP V2 aktivieren

Um den NLP V2-Stack zu aktivieren, müssen Sie Umgebungsvariablen in der Konfigurationszuordnung "cognigyEnv" festlegen und einige neue Dienste bereitstellen.

Die Umgebungsvariablen, die in der Konfigurationszuordnung "cognigyEnv" festgelegt werden müssen, sind:

'''Yaml
cognigyEnv:
  FEATURE_USE_SERVICE_NLP_V2: "wahr"
  FEATURE_MIGRATE_SNAPSHOTS_TO_NLP_V2: "wahr"
'''

Das Festlegen dieser Umgebungsvariablen wirkt sich nicht auf vorhandene Modelle aus. Sobald Sie Ihr NLU-Modell jedoch erneut trainieren, wird es mit dem NLP v2-Stack trainiert.

#### NLP V2-Dienste hinzufügen

Der neue NLP V2 Stack enthält folgende Services:

- 'Service-NLP-Orchestrator'
- 'Service-NLP-Einbetten<language>-'
- 'service-nlp-classifier-score<language>-'
- 'service-nlp-classifier-train-<language>'

Sie müssen diese Dienste gemäß diesem Beispiel zu Ihrer Datei "values-local.yaml" hinzufügen:

'''Yaml
serviceNlpOrchestrator:
  Aktiviert: true
  replicaCount: 3

serviceNlpEmbeddingEn:
  Aktiviert: true
  replicaCount: 3

serviceNlpEmbeddingXx:
  Aktiviert: true
  replicaCount: 3

serviceNlpEmbeddingGe:
  Aktiviert: true
  replicaCount: 2

serviceNlpClassifierScoreEn:
  Aktiviert: true
  replicaCount: 3

serviceNlpClassifierTrainEn:
  Aktiviert: true
  replicaCount: 3
  
serviceNlpClassifierScoreDe:
  Aktiviert: true
  replicaCount: 3

serviceNlpClassifierTrainDe:
  Aktiviert: true
  replicaCount: 3

serviceNlpClassifierScoreXx:
  Aktiviert: true
  replicaCount: 3

serviceNlpClassifierTrainXx:
  Aktiviert: true
  replicaCount: 3

serviceNlpClassifierScoreGe:
  Aktiviert: true
  replicaCount: 3

serviceNlpClassifierTrainGe:
  Aktiviert: true
  replicaCount: 3

serviceNlpClassifierScoreJa:
  Aktiviert: true
  replicaCount: 3

serviceNlpClassifierTrainJa:
  Aktiviert: true
  replicaCount: 3

serviceNlpClassifierScoreKo:
  Aktiviert: true
  replicaCount: 3

serviceNlpClassifierTrainKo:
  Aktiviert: true
  replicaCount: 3
'''

**Stellen Sie sicher, dass Sie diese Änderungen auf alle Ihre Cognigy.AI Umgebungen anwenden.**

#### Wählen Sie aus, welche Sprachen bereitgestellt werden sollen

Stellen Sie ähnlich wie beim NLP V1-Stack die Dienste für die Sprachen bereit, die Sie benötigen. Die folgende Tabelle zeigt Ihnen, welche Dienste Sie für welche Sprachen benötigen. Beachten Sie, dass 'service-nlp-orchestrator' immer benötigt wird.

| Sprache | Kodierung |  service-nlp-embedding-Instanz | service-nlp-classifier-Instanz |
| ------------------------- | ----------- |  ------------------------------ | -- |
| Universell | ge-GE | service-nlp-embedding-ge | service-nlp-classifier-score-ge & service-nlp-classifier-train-ge |
| Finnisch - Finnland | fi-FI | service-nlp-embedding-ge | service-nlp-classifier-score-ge & service-nlp-classifier-train-ge |
| Schwedisch - Schweden | sv-SE | service-nlp-embedding-ge | service-nlp-classifier-score-ge & service-nlp-classifier-train-ge |
| Dänisch - Dänemark | da-DK | service-nlp-embedding-ge | service-nlp-classifier-score-ge & service-nlp-classifier-train-ge |
| Norwegisch - Norwegen | nn-NEIN | service-nlp-embedding-ge | service-nlp-classifier-score-ge & service-nlp-classifier-train-ge |
| Vietnamesisch - Vietnam | vi-VN | service-nlp-embedding-ge | service-nlp-classifier-score-ge & service-nlp-classifier-train-ge |
| Hindi - Indien | hi-IN | service-nlp-embedding-ge | service-nlp-classifier-score-ge & service-nlp-classifier-train-ge |
| Bangla - Bangladesch | bn-IN | service-nlp-embedding-ge | service-nlp-classifier-score-ge & service-nlp-classifier-train-ge |
| Tamilisch - Indien | ta-IN | service-nlp-embedding-ge | service-nlp-classifier-score-ge & service-nlp-classifier-train-ge |
| Deutsch - Deutschland | de-DE | service-nlp-embedding-xx | service-nlp-classifier-score-de & service-nlp-classifier-train-de
| Japanisch - Japan | ja-JP | service-nlp-embedding-xx | service-nlp-classifier-score-ja & service-nlp-classifier-train-ja |
| Koreanisch - Korea | ko-KR | service-nlp-embedding-xx | service-nlp-classifier-score-ko & service-nlp-classifier-train-ko |
| Arabisch - Vereinigte Arabische Emirate | ar-AE | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx |
| Spanisch - Spanien | es-ES | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Französisch - Frankreich | fr-FR | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Niederländisch - Niederlande | nl-NL | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Italienisch - Italien | it-IT | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Polnisch - Polen | pl-PL | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Portugiesisch - Portugal | pt-PT | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Portugiesisch - Brasilien | pt-BR | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Thailändisch - Thailand | th-TH | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Russisch - Russland | ru-RU | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Türkisch - Türkei | tr-TR | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Chinesisch - China | zh-CN | service-nlp-embedding-xx | service-nlp-classifier-score-xx & service-nlp-classifier-train-xx
| Deutsch - Vereinigte Staaten | en-DE | service-nlp-embedding-de | service-nlp-classifier-score-de & service-nlp-classifier-train-de |
| Deutsch - Indien | en-IN | service-nlp-embedding-de | service-nlp-classifier-score-de & service-nlp-classifier-train-de |
| English - Vereinigtes Königreich | de-DE | service-nlp-embedding-de | service-nlp-classifier-score-de & service-nlp-classifier-train-de |
| Deutsch - Kanada | de-CA | service-nlp-embedding-de | service-nlp-classifier-score-de & service-nlp-classifier-train-de |
| Deutsch - Australien | en-AU | service-nlp-embedding-de | service-nlp-classifier-score-de & service-nlp-classifier-train-de |

#### Alte Zugverbindungen verkleinern

Wenn der NLP V2-Stack ausgeführt wird, verwenden alle neuen Intent-Trainingsaufträge den NLP V2-Stack. Sie können daher bereits jetzt die **service-nlp-train-<language>**-Dienste herunterskalieren. Sie können dies tun, indem Sie in der Datei values-local.yaml "enabled: false" setzen.

Beispiel:

'''Yaml
serviceNlpTrainEn:
  Aktiviert: false
'''

#### Speicherlimit erhöhen

Ähnlich wie beim NLP V1-Stack kann es beim Trainieren großer Modelle zu Problemen mit dem Standardspeicherlimit des nlp-classifier-train-Dienstes kommen, obwohl wir die erforderliche Speichermenge erheblich verbessert haben. Es wird empfohlen, mit den standardmäßigen Ressourceneinschränkungen zu beginnen und dann den Speichergrenzwert des classifier-train-Diensts nach Bedarf zu erhöhen.

Der Orchestrator und die Einbettungsdienste benötigen keinen zusätzlichen Arbeitsspeicher zum Trainieren großer Flows.

#### Skalieren Sie den NLP V2-Stack

Wenn immer mehr Projekte beginnen, den NLP V2-Stack zu nutzen, kann die Notwendigkeit einer Skalierung entstehen. Der einfachste Ansatz besteht darin, das **NLP Orchestrator**-Dashboard in Grafana zu überwachen, in dem Sie die Gesamtsystemlatenz bewerten und bestimmen können, ob eine Skalierung für Komponenten wie Einbettungen oder den Klassifikator erforderlich ist.

! [grafana-metrics.png] (.. /images/grafana-metrics.png)

Es kann auch notwendig sein, den NLP-Orchestrator selbst hochzuskalieren, obwohl dies recht ungewöhnlich ist. Auf demselben Dashboard können Sie die CPU-Auslastung des Diensts überwachen. Wenn er sich 1 CPU nähert, ist es ratsam, diesen Dienst entsprechend zu skalieren.

#### Überprüfen, ob die Dienste ordnungsgemäß bereitgestellt werden

Um zu überprüfen, ob die Dienste ordnungsgemäß bereitgestellt wurden, können Sie das NLU-Modell eines Flows erstellen. Öffnen Sie dann die Protokolle des Diensts "service-nlp-classifier-train-<language>", und stellen Sie sicher, dass der Dienst protokolliert, dass er das Modell trainiert.

## Führen Sie die Migration aus

Die Migration wird ausgeführt, indem ein "Kubernetes-Auftrag" auf den Cluster angewendet wird. Dieser Auftrag wird einige Zeit lang ausgeführt und migriert alle vorhandenen NLU-Modelle in den NLP V2-Stack. Stellen Sie vor dem Ausführen des Migrationsskripts sicher, dass der NLP V2-Stack gemäß dem letzten Kapitel ordnungsgemäß ausgeführt wird.

Der Standardmigrationsauftrag migriert alle Modelle in allen Organisationen und Sprachen, einschließlich der Modelle in Snapshots. Es werden drei Projekte gleichzeitig migriert, mit einem Flow pro Projekt.

'''Yaml
apiVersion: batch/v1
Kunst: Hiob
Metadaten:
  Name: migrate-nlp-v2-all-organizations
Spekulation:
  ttlSecondsAfterFinished: 100
  Schablone:
    Spekulation:
      restartPolicy: Nie
      Inhalte:
        - Name: rabbitmq-connection-string
          geheim:
            secretName: cognigy-rabbitmq
            Artikel:
              - Schlüssel: Verbindungszeichenfolge
                Pfad: rabbitmqConnectionString
        - Name: mongoDB-connection-string
          geheim:
            secretName: cognigy-service-resources
            Artikel:
              - Schlüssel: Verbindungszeichenfolge
                Pfad: mongodbConnectionString
        - Name: redis-password
          geheim:
            secretName: cognigy-redis-password
      imagePullSecrets:
        - Name: cognigy-registry-token
      Container:
        - Name: NLP-v2-migrator-all
          Bild: cognigy.azurecr.io/nlp_v2_migrator:6f28f4760e24678a27b5649555b7e0fdcdea0ebb
          volumeMounts:
            - Name: rabbitmq-connection-string
              mountPath: /var/run/secrets/rabbitmqConnectionString
              subPath: rabbitmqConnectionString
            - Name: mongoDB-connection-string
              mountPath: /var/run/secrets/mongodbConnectionString
              subPath: mongodbConnectionString
            - Name: redis-password
              mountPath: /var/run/secrets/redis-password.conf
              subPath: redis-password.conf
          envFrom:
            - configMapRef:
                Bezeichnung: cognigy-env
          Env:
            - Bezeichnung: SERVICE_RESOURCES_CONNECTION_STRING
              valueFrom:
                secretKeyRef:
                  Name: cognigy-service-resources
                  Schlüssel: Verbindungszeichenfolge

Argumente:
            - -o
            - "Alle"
            - -c
            - "2"
            --vgl
            - "2"
            - -s
            - "wahr"
'''

### Welche Umgebung soll zuerst migriert werden?

Falls Sie über mehrere Umgebungen verfügen, z. B. Entwicklung und Produktion, sollte die Entwicklungsumgebung zuerst migriert werden.

### Passen Sie die Migrationsparameter an

Wenn die Standardkonfiguration nicht mit Ihrer bevorzugten Art der Migration der Modelle übereinstimmt, bieten wir verschiedene Konfigurationsoptionen an, um den Prozess an Ihre Bedürfnisse anzupassen. So können Sie z.B. bestimmte Projekte auswählen oder die Migration beschleunigen.

Verwenden Sie dazu die folgenden Parameter:

| Wert | Beschreibung | Beispiele |
|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------|
| -o | Die Organisationen, für die kandidiert werden soll. Eine durch Kommas getrennte Liste von Organisations-IDs | "63c6af010aa7a0eadd88edbd,63c6af010aa7a0eadd88edbe" |
| -p | Die zu migrierenden Projekte. Eine durch Kommas getrennte Liste von Projekt-IDs | "63c6af010aa7a0eadd88edbd,63c6af010aa7a0eadd88edbe" |
| -l | Die Gebietsschemas, für die ausgeführt werden soll. Eine durch Kommas getrennte Liste von Sprachcodes | "en-US,de-DE,ar-AE" |
| -c | Die Anzahl der parallel zu migrierenden Projekte | "10" |
| -cf | Die Anzahl der Flows pro Projekt, die parallel migriert werden sollen | "10" |
| -s | Migrieren von Modellen in Snapshots | "wahr" |
| -ct | Zählen Sie die Anzahl der Modelle pro Gebietsschema. Dieser Prozess beinhaltet keine Migration, sondern bietet Ihnen eine Liste der Anzahl der Modelle, die pro Gebietsschema vorhanden sind, und bietet einen Überblick | "wahr" |

### Erhöhen Sie die Geschwindigkeit der Migration

Der Migrationsprozess kann viel Zeit in Anspruch nehmen, abhängig von der Anzahl der in der Umgebung vorhandenen Flows. Wenn Sie die Möglichkeit haben, zusätzliche Hardware für die Migration hinzuzufügen, oder wenn Sie zusätzliche Kapazität zur Verfügung haben, ist es möglich, den NLP V2-Stack hochzuskalieren und mehrere Projekte gleichzeitig zu migrieren. Um dies zu erreichen, empfehlen wir, Sprache für Sprache zu migrieren. Beginnen Sie beispielsweise mit der Migration aller englischen Modelle, gefolgt von allen Modellen, die die Containergruppe "XX" verwenden, usw.

Verwenden Sie zum zentralen Hochskalieren der Dienste die folgenden Richtlinien:

- Wenn Sie 20 Modelle gleichzeitig migrieren möchten, erhöhen Sie die Kapazität des Dienstes 'nlp-classifier-train-<language>', um 20 Trainingsaufträge gleichzeitig zu verarbeiten.
- Wenn Sie 20 Klassifikatoren haben, erhöhen Sie die Anzahl der Replikate für den Dienst 'service-nlp-embedding-<language>' auf 8, was 40 % der Gesamtzahl der Klassifikatoren entspricht, die Sie besitzen.
- Wenn Sie 20 Klassifikatoren haben, erhöhen Sie die Anzahl der Replikate für den Dienst "service-nlp-ner" auf 16, was 80 % der Gesamtzahl der Klassifikatoren entspricht, die Sie besitzen.
- Wenn Sie über 20 Klassifikatoren verfügen, erhöhen Sie die Anzahl der Replikate für den Dienst "service-nlp-orchestrator" auf 4, was 20 % der Gesamtzahl der Replikate von "service-nlp-classifier" entspricht.

Nach dem Hochskalieren können Sie die Parameter "-c" und "-cf" ändern, um die Anzahl der parallel zu trainierenden Modelle zu erreichen. Wenn Sie viele Projekte haben, empfehlen wir, einen höheren Wert für '-c' zu verwenden. Umgekehrt, wenn Sie ein paar Projekte mit vielen Flows haben, ist es ratsam, einen höheren Wert für '-cf' zu setzen.

Hier ist ein Beispiel für das parallele Training von 20 Flows für die Zuggruppe 'XX':

'''Yaml
apiVersion: batch/v1
Kunst: Hiob
Metadaten:
  Name: migrate-nlp-v2-all-organizations
Spekulation:
  ttlSecondsAfterFinished: 100
  Schablone:
    Spekulation:
      restartPolicy: Nie
      Inhalte:
        - Name: rabbitmq-connection-string
          geheim:
            secretName: cognigy-rabbitmq
            Artikel:
              - Schlüssel: Verbindungszeichenfolge
                Pfad: rabbitmqConnectionString
        - Name: mongoDB-connection-string
          geheim:
            secretName: cognigy-service-resources
            Artikel:
              - Schlüssel: Verbindungszeichenfolge
                Pfad: mongodbConnectionString
        - Name: redis-password
          geheim:
            secretName: cognigy-redis-password
      imagePullSecrets:
        - Name: cognigy-registry-token
      Container:
        - Name: NLP-v2-migrator-all
          Bild: cognigy.azurecr.io/nlp_v2_migrator:6f28f4760e24678a27b5649555b7e0fdcdea0ebb
          volumeMounts:
            - Name: rabbitmq-connection-string
              mountPath: /var/run/secrets/rabbitmqConnectionString
              subPath: rabbitmqConnectionString
            - Name: mongoDB-connection-string
              mountPath: /var/run/secrets/mongodbConnectionString
              subPath: mongodbConnectionString
            - Name: redis-password
              mountPath: /var/run/secrets/redis-password.conf
              subPath: redis-password.conf
          envFrom:
            - configMapRef:
                Bezeichnung: cognigy-env
          Env:
            - Bezeichnung: SERVICE_RESOURCES_CONNECTION_STRING
              valueFrom:
                secretKeyRef:
                  Name: cognigy-service-resources
                  Schlüssel: Verbindungszeichenfolge

Argumente:
            - -o
            - "Alle"
            - -l
            - "ar-AE,es-ES,fr-FR,nl-NL,it-IT,pl-PL,pt-PT,pt-BR,th-TH,ru-RU,tr-TR,zh-CN"
            - -c
            - "5"
            --vgl
            - "4"
            - -s
            - "wahr"
'''

### Ausführen des Auftrags

Verwenden Sie zum Ausführen des Auftrags den Befehl 'kubectl apply', um ihn im Namespace anzuwenden:

'''bash
kubectl apply -n <namespace-of-cognigy-ai> <path-to-job>
'''

Beim Ausführen des Jobs sollte zunächst ein Ausdruck angezeigt werden, der die Anzahl der V1-Zuggruppen und die Anzahl der im System vorhandenen Projekte angibt:

! [run-job] (.. /images/run-job.png)

Wenn die Ausführung des Migrationsauftrags abgeschlossen ist, sollten Sie überprüfen, wie viele Modelle erfolgreich migriert wurden und ob einige fehlgeschlagen sind. Wenn Modelle fehlgeschlagen sind, sollten Sie das Skript erneut ausführen. Wenn Sie feststellen, dass einer der Klassifikatorzug-Pods neu gestartet wurde, müssen Sie möglicherweise den Arbeitsspeicher erhöhen, bevor Sie fortfahren können:

! [Auftrag fehlgeschlagen] (.. /images/job-failed.png)

#### Erneutes Ausführen des Auftrags

Wenn der Auftrag fehlschlägt oder Sie ihn erneut ausführen müssen, ist dies immer sicher. Der Auftrag weiß, welche Modelle noch migriert werden müssen, und macht dort weiter, wo er aufgehört hat.

### Alte Daten bereinigen

Nach Abschluss der Migration aller Modelle kann es zu einer Situation kommen, in der das Migrationsskript immer noch angibt, dass V1-Modelle trainiert werden müssen. Diese Situation kann auftreten, wenn alte Daten nicht gründlich bereinigt wurden, z. B. beim Löschen von Snapshots.

Um dieses Problem zu beheben, führen Sie den Auftrag erneut mit dem Flag "-r" aus, wodurch die Daten repariert werden. **Führen Sie diesen Befehl erst aus, nachdem Sie alle anderen Migrationsaufgaben abgeschlossen haben.**

'''Yaml
apiVersion: batch/v1
Kunst: Hiob
Metadaten:
  Name: migrate-nlp-v2-all-organizations
Spekulation:
  ttlSecondsAfterFinished: 100
  Schablone:
    Spekulation:
      restartPolicy: Nie
      Inhalte:
        - Name: rabbitmq-connection-string
          geheim:
            secretName: cognigy-rabbitmq
            Artikel:
              - Schlüssel: Verbindungszeichenfolge
                Pfad: rabbitmqConnectionString
        - Name: mongoDB-connection-string
          geheim:
            secretName: cognigy-service-resources
            Artikel:
              - Schlüssel: Verbindungszeichenfolge
                Pfad: mongodbConnectionString
        - Name: redis-password
          geheim:
            secretName: cognigy-redis-password
      imagePullSecrets:
        - Name: cognigy-registry-token
      Container:
        - Name: NLP-v2-migrator-all
          Bild: cognigy.azurecr.io/nlp_v2_migrator:6f28f4760e24678a27b5649555b7e0fdcdea0ebb
          volumeMounts:
            - Name: rabbitmq-connection-string
              mountPath: /var/run/secrets/rabbitmqConnectionString
              subPath: rabbitmqConnectionString
            - Name: mongoDB-connection-string
              mountPath: /var/run/secrets/mongodbConnectionString
              subPath: mongodbConnectionString
            - Name: redis-password
              mountPath: /var/run/secrets/redis-password.conf
              subPath: redis-password.conf
          envFrom:
            - configMapRef:
                Bezeichnung: cognigy-env
          Env:
            - Bezeichnung: SERVICE_RESOURCES_CONNECTION_STRING
              valueFrom:
                secretKeyRef:
                  Name: cognigy-service-resources
                  Schlüssel: Verbindungszeichenfolge

Argumente:
            - -o
            - "Alle"
            - -s
            - "wahr"
            - -r
            - "wahr"
'''

Nach dem Ausführen sehen Sie, wie viele alte Modelle sicher entfernt werden konnten und wie viele repariert wurden.
Wenn Modelle repariert wurden, müssen Sie die Migration erneut ausführen:

! [alte-Daten bereinigen] (.. /images/clean-up-old-data.png)

## Prüfen, ob die Migration abgeschlossen ist

Um sicherzustellen, dass die Migration erfolgreich abgeschlossen wurde und NLP V1 nicht mehr verwendet wird, überprüfen Sie das Dashboard **Service NLP** in Grafana. Hier können Sie den Datenverkehr überwachen, der vom alten NLP V1-Stack empfangen wurde. Wir empfehlen, dies einige Tage lang zu beobachten, und wenn konstant 0 Auslastung angezeigt wird, können Sie den V1-Stapel sicher entfernen.

! [Abgeschlossene-Migration] (.. /images/check-completed-migration.png)

### NLP V1 Stack entfernen

Um den NLP V1-Stack zu entfernen, entfernen Sie die Dienste "service-nlp-score-" und " <lang>service-nlp-train-" <lang>aus Ihrer Datei "values-local.yaml".

## Häufig gestellte Fragen

**F1:** Müssen nach der Migration Änderungen an bestehenden Projekten vorgenommen werden?

**A1:** Nein, die Migration hat keine Auswirkungen auf bestehende Projekte.

**F2:** Funktioniert ein Projekt ordnungsgemäß, wenn nur einige der Flows auf NLP V2 migriert wurden?

**A2:** Ja, ein Projekt funktioniert einwandfrei, wenn einige Flows NLP V2 verwenden, während andere NLP V1 verwenden.  Dies gilt so lange, wie die **Score**-Container von NLP V1 in der Umgebung noch betriebsbereit sind.

**F3:** Funktioniert ein Projekt ordnungsgemäß, wenn einige Gebietsschemata auf NLP V2 migriert wurden und andere nicht?

**A3:** Ja, ein Projekt funktioniert einwandfrei, wenn einige Gebietsschemata auf NLP V2 migriert wurden, andere jedoch nicht.

**F4:** Was passiert, wenn ich einen alten Snapshot hochlade, der vor NLP V2 erstellt wurde?

**A4:** Wenn Sie einen Snapshot hochladen, werden bei Bedarf alle NLU-Modelle des Snapshots im Rahmen des Uploads auf NLP V2 migriert. Eine Übersicht über die Modelle, die migriert wurden, finden Sie im Task-Menü.
 </lang></lang></path-to-job></namespace-of-cognigy-ai></language></language></language></language></language></language></language></language></language></language></language></language>