---
title: "Agenten und Administratoren hinzufügen" 
Slug: "Hinzufügen-Agenten-und-Admins" 
ausgeblendet: false 
---

# Agenten und Administratoren zum Live-Agenten hinzufügen

Nachdem Sie [Ihren Endpunkt und Flow für die Übergabe an den Live-Agenten eingerichtet](live-agent-setup-handover.md) und eine Konversation getestet haben, können Sie neue Agenten und Administratoren hinzufügen und sie den Posteingängen in Live Agent zuweisen.

## Einen Benutzer anlegen

Gehen Sie folgendermaßen vor, um einen Benutzer zu erstellen:

1. Öffnen Sie die Cognigy.AI-Schnittstelle. Wenn der Agent oder Administrator, den Sie hinzufügen möchten, bereits als Benutzer in Cognigy.AI vorhanden ist, fahren Sie mit [Hinzufügen von Live-Agent-Rollen zu Benutzern] (#Adding-Live-Agent-Roles-to-Users) fort.
2. Klicken Sie in der oberen rechten Ecke auf **Benutzermenü > Zugriffssteuerung**.
3. Klicken Sie in der oberen linken Ecke der Seite **Benutzer** auf **+ Neuen Benutzer erstellen**. 
4. Füllen Sie im Fenster **Neuer Benutzer** die folgenden Felder aus:
    - **Anzeigename** — Geben Sie den Namen ein, der für diesen Benutzer angezeigt werden soll. Beispiel: "John Doe".
    - **E-Mail-Adresse** — Geben Sie die E-Mail-Adresse des Benutzers ein. Beispiel: "johndoe@example.com".
    - **Kennwort** — Legen Sie ein Kennwort für das Benutzerkonto fest. Ein Benutzer kann ein Kennwort später ändern.
5. Klicken Sie auf **Speichern**.

Sobald ein Benutzer erstellt wurde, können Sie diesem Benutzer Live-Agent-Rollen zuweisen.

## Hinzufügen von Live-Agent-Rollen zu Benutzern

Cognigy Live Agent verfügt über drei verschiedene Benutzerrollen:

- 'Administrator'
- 'Agent'
- 'Vorgesetzter'

Weitere Informationen finden Sie unter [Live-Agent-Rollen](.. /.. /roles.md).

Gehen Sie folgendermaßen vor, um Benutzern eine dieser Rollen hinzuzufügen:

1. Öffnen Sie die Cognigy.AI-Schnittstelle.
2. Klicken Sie in der oberen rechten Ecke auf **Benutzermenü > Zugriffssteuerung**. 
3. Wählen Sie einen Benutzer aus, dem Sie Rollen zuweisen möchten.
4. Wechseln Sie auf der Seite Benutzer zum Abschnitt **Globale Rollen**. 
5. Klicken Sie auf **+** und wählen Sie die gewünschte Rolle aus. 
6. Weisen Sie eine der folgenden Rollen zu:
    - 'liveAgentAdmin' — für Benutzer, die Admin-Rechte in Live Agent haben sollen.
    - 'liveAgentAgent' — für Benutzer, die Agentenrechte in Live Agent haben sollen.

Nachdem Sie dem Benutzer die Rolle "Live-Agent" zugewiesen haben, können Sie ihn zu einem Posteingang hinzufügen.

## Agenten zu einem Posteingang hinzufügen

Gehen Sie folgendermaßen vor, um einen Agenten zu einem Posteingang hinzuzufügen:

1. Öffnen Sie die Live Agent-Oberfläche.
2. Klicken Sie im Menü auf der linken Seite auf **Einstellungen**.
3. Gehen Sie zu **Posteingänge**, wählen Sie einen Posteingang aus und klicken Sie auf das Zahnradsymbol neben Ihrem Posteingang.
4. Öffnen Sie die Registerkarte **Mitarbeiter**. 
5. Gehen Sie zum Abschnitt **Agenten**, klicken Sie auf die Agentenliste und wählen Sie Agenten aus dieser Liste aus. 
6. Klicken Sie auf **Aktualisieren**.

Wenn die Agenten in den Posteingang aufgenommen wurden, können Sie [einen weiteren Posteingang für Ihr Projekt hinzufügen](https://docs.cognigy.com/ai/handover-providers/live-agent-setup/live-agent-setup-additional-inbox/).