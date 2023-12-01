---
 Titel: "Installation mit Helm" 
 Slug: "Installation-using-Helm" 
 ausgeblendet: false 
---
# Installation mit Helm

Helm ist ein Tool zum einfachen Bereitstellen von Ressourcen in einem Kubernetes-Cluster. Installieren Sie es zunächst gemäß der [offiziellen Dokumentation](https://helm.sh/docs/intro/install/).

Für die Installation des Helm-Diagramms muss das Helm-Paket aus der OCI-Registry von Cognigy abgerufen werden. Es gibt zwei Möglichkeiten, das Helm-Diagramm abzurufen. Zuerst müssen Sie Zugriff auf die OCI-Registry "cognigy.azurecr.io" in beiden haben (sind die gleichen Anmeldeinformationen wie für die Docker-Registry). Gehen Sie dann wie folgt vor:

1. Legen Sie die folgende Umgebungsvariable für die Ausführung aller folgenden Befehle fest:

'''sch
   HELM_EXPERIMENTAL_OCI=1
   '''

2. Melden Sie sich mit dem folgenden Befehl bei der OCI prod-Registry an:

'''sch
   Helm Registry Login cognigy.azurecr.io
   '''

## Ziehen und Montieren gleichzeitig (bevorzugt)

Der folgende Befehl kann verwendet werden, um das Live Agent Helm-Diagramm gleichzeitig zu installieren und abzurufen:

'''sch
helm install cognigy-live-agent oci://cognigy.azurecr.io/helm/live-agent --version X.X.X --namespace live-agent -f custom-values.yaml
'''

Beachten Sie, dass die Datei "custom-values.yaml" nur die Werte enthalten kann, die überschrieben werden müssen, z. B. Eingangskonfigurationen, Replikate und Ressourcen. Auf diese Weise wird die neue Version das bestehende Setup nicht beschädigen. Sie können in der Dokumentation nachschlagen und die [Versionshinweise]({{config.site_url}}live-agent/release-notes/releases/) zu Helm lesen, falls dies der Fall ist.

## Ziehen und Ändern der Datei 'values.yaml'

Führen Sie den folgenden Befehl aus:

'''sch
Steuerzug oci://cognigy.azurecr.io/helm/live-agent --Version X.X.X
'''

Dadurch wird das Helm-Diagramm komprimiert heruntergeladen.

'live-agent-X.X.X.tgz'

Jetzt kann es dekomprimiert werden, die Datei 'values.yaml' im Ordner muss nach Ihren Bedürfnissen geändert werden und dann kann das Diagramm mit dem folgenden Befehl installiert werden:

'''sch
helm install cognigy-live-agent ./live-agent-X.X.X --namespace live-agent
'''

## Nach dem Ausführen des Befehls 'helm install'

>**Hinweis:** Unser Helm-Diagramm wurde getestet und ist mit der API-Version v2 kompatibel. Ältere Versionen sind nicht kompatibel.

Mit diesem Befehl werden die Geheimnisse erstellt, die Pods bereitgestellt und ein Auftrag ausgeführt, der die Tabellen in der Datenbank erstellt. Denken Sie auch daran, dass, wenn Sie über ein Geheimnis zum Abrufen von Docker-Images verfügen, dieses auch auf den Namespace angewendet werden muss, in dem Live Agent installiert wird. Nach einiger Zeit sollte die folgende Meldung erscheinen.

'''
NOTIZEN:
Vielen Dank, dass Sie live-agent installiert haben.

Ihr Release heißt cognigy-live-agent mit der Version .

Die folgenden Geheimnisse wurden erstellt:
- cognigy-live-agent-postgresql
- cognigy-live-agent-redis

Um mehr über die Version zu erfahren, versuchen Sie:

$ helm status cognigy-live-agent
  $ helm Holen Sie sich alle Cognigy-Live-Agent

HINWEIS: Es kann einige Minuten dauern, bis die LoadBalancer-IP verfügbar ist.
Sie können den Status überwachen, indem Sie
'kubectl get svc -w cognigy-live-agent'
'''

Weitere Informationen zum Anpassen Ihrer Installation finden Sie in der Helm-Dokumentation [Anpassen des Diagramms vor der Installation](https://helm.sh/docs/intro/using_helm/#customizing-the-chart-before-installing).

Sobald Sie ein gutes Verständnis dafür haben, wie das Customizing funktioniert, können Sie sich den Abschnitt [Helm-Werte]({{config.site_url}}live-agent/installation/helm-values/helm-values/) ansehen, der eine kurze Erklärung zu jedem Wert und seinem Zweck enthält.