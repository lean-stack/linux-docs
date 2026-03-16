---
sidebar_position: 4
---

# Benutzerwechsel

Mit dem Befehl `su` (offizielle Beschreibung *substitute user*) kann in einem laufenden
Terminal nach dem Anmeldeprozess der Wechsel zu einem anderen Benutzer durchgeführt werden.

```bash
    su username

    # Oder

    su - username
```

Das Kommando verlangt dann nach dem Passwort des gewählten Benutzers.

Der Unterschied der Variante mit Minuszeichen zu der ohne ist:

- Mit Minuszeichen gilt als *Login* des neuen Users
- Gestartet wird seine Login-Shell (kommt später) ...
- ... mit seiner gewohnten *Umgebung* und ...
- ... dem Heimatverzeichnis des Users als Arbeitsverzeichnis

:::info

Die Begriffe *Umgebung* und *Heimatverzeichnis* klären sich eilweise in den nächsten Kapiteln
dieser Unterlage:

- Umgebung: [Einführung Shell - Kommandos](../shell-intro/commands)
- Heimatverzeichnis: [Verzeichnisse - Pfade](../directories/paths)

und weiteren späteren Vertiefungen der Shell und der Benutzverwaltung.

:::

:::tip

Falls der Wechsel zum Superadministrator vollzogen werden (`root`-User) kann der Benutzername
weggelassen werden.

Und falls vom Superuser-Account zu einem normalen Benutzer gewechselt wird, muss kein Passwort
angegeben werden.

:::