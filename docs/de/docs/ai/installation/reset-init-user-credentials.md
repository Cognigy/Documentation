---
title: "Anfängliche Anmeldeinformationen zurücksetzen"
slug: "reset-init-credentials"
ausgeblendet: false
---
# Zurücksetzen der anfänglichen Benutzeranmeldeinformationen

Falls Sie keine Anmeldeinformationen aus den Protokollen von 'service-security' erhalten können, wie es in [Cognigy.AI Installationsprozess](installation-process.md) beschrieben ist, z.B. weil der 'service-security'-Dienst mehrmals neu gestartet wurde oder Sie Cognigy.AI Installation gelöscht und neu erstellt haben, müssen Sie die 'service-security'-Datenbank löschen, um neue anfängliche Anmeldeinformationen zu generieren. 

!!! Warnung "Achtung: Datenverlust"
    Alle Organisationen und Benutzer gehen durch diesen Vorgang verloren. Führen Sie diesen Vorgang nur während der Ersteinrichtung Cognigy.AI durch. 

Führen Sie die folgenden Befehle aus, um neue anfängliche Benutzeranmeldeinformationen zu generieren:

1. Löschen Sie die Sammlungen in der Datenbank "service-security", indem Sie eine Verbindung mit dem _primary_-Knoten von MongoDB herstellen. Um herauszufinden, welcher Knoten primär ist, führen Sie 'rs.status()' aus:

'''bash
    kubectl exec -it -n mongodb mongodb-0 bash
    mongo -u root -p $MONGODB_ROOT_PASSWORD --authenticationDatenbankadministrator
    rs.status()
    '''

2. Stellen Sie eine Verbindung zum primären Knoten her (z. B. wenn "mongodb-0" der primäre Knoten ist) und legen Sie die Sammlungen in der Datenbank "service-security" ab:

'''bash
    kubectl exec -it -n mongodb mongodb-0 bash
    mongo -u root -p $MONGODB_ROOT_PASSWORD --authenticationDatenbankadministrator
    Verwenden von Service-Security
    db.users.drop()
    db.organisations.drop()
    Ausgang
    Ausgang
    '''

3. Starten Sie die Bereitstellung "Service-Security" neu: 

'''bash
    kubectl rollout restart -n=cognigy-ai deployment service-security
    '''

4. Rufen Sie die neu generierten anfänglichen Anmeldeinformationen wie gewohnt aus den Protokollen der Bereitstellung von "Dienstsicherheit" ab:

'''bash
    kubectl logs -f -n=cognigy-ai --tail 100 Bereitstellung/Dienstsicherheit
    '''