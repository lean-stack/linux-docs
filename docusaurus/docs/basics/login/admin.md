---
sidebar_position: 5
---

# Administration

Die Administration eines Linux-Systems kann normalerweise nur über den sogenannten
Superuser (im System benannt als User `root`) durchgeführt werden.

Also muss der normale Benutzer über den Befehl `su` für administrative Kommandos
zum Superuser wechseln.

Um aber nicht jedem normalen Benutzer das Passwort für `root` mitzuteilen, wird
in den meißten Linux-Distributionen ein Tool eingesetzt, um es bestimmten Usern zu
erlauben zeitweise Superuser-Rechte zu haben.

Dieses Tool wird gestartet mit dem Befehl `sudo` gefolgt in der selben Zeile vom
auszuführenden Kommando:

```sh
sudo reboot
```

Meißtens reicht jetzt die Kenntnis des eigenen Passworts aus, um - falls berechtigt - das
folgende Kommando (in diesem Fall `reboot`) mit den Rechten des Superusers auszuführen.

Auf einem Linux-Server sollte es nämlich normalen Benutzern auf keinen Fall gestattet
sein, das System neu zu starten.

In Konfigurations-Dateien wird dieses Kommando konfiguriert, um festzulegen

- Wer darf `sudo` benutzen?
- Was darf er damit machen?
- Welches Passwort muss er kennen? Seins oder das des `root`-Users?

Konfiguriert wird dieses Tool (wie fast alles in Linux) über eine einfache Textdatei,
die in diesem Fall aber mit Hilfe des Kommandos `visudo` editiert wird. Das Kommando
speichert die Änderungen zunächst in einer Kopie der Original-Datei und führt vor dem
Überschreiben der eigentlichen Datei eine Syntax-Kontrolle durch. Da kann ansonsten sehr
schnell etwas schief gehen.

Im einfachsten Fall ändert man die Datei wie folgt, um einem Benutzer `klaus` alle
Rechte mit `sudo` zu geben:

```sh

# Die mit dieser Raute/Lattenzaun/Doppelkreuz/Hashtag-Symbol beginnenden Zeilen
# sind Kommentare und müssen nicht eingegeben werden. Bzw. falls die Raute
# später in der Zeile auftaucht, ist alles ab dieser Position Kommentar

# EDITOR=nano vorneweg, um einen ganz einfachen Editor zu starten

su                            # Wechsel zum Root-User
EDITOR=nano visudo            # Bearbeitung starten, einfachsten Editor nano wählen

# Zeile suchen, die ungefähr so aussieht (natürlich ohne die Raute vorne):
# root ALL=(ALL) ALL

# Und eine neue Zeile tippen (username ist der eigene Benutzername, der die Rechte bekommen
#  soll)

username ALL=(ALL) ALL

```

Datei speichern mit `Strg-o` und `Enter`, Programm verlassen mit `Strg-x`.

:::warning

Das Programm `sudo` ist ziemlich umstritten in der Linux-Welt. Der Mechanismus, der benutzt
wird, um zeitweilig (für die Ausführung des folgenden Kommandos) Superuser-Rechte zu bekommen
ist sehr einfach gestrickt und *vertraut* darauf dass in diesen Programmen (zum Beispiel
`sudo`) keine Software-Fehler versteckt sind. Diese könnten nämlich zu einem 
Sicherheitsproblem führen, dass als [Privilege-Escalation](https://en.wikipedia.org/wiki/Privilege_escalation) bezeichnet wird.

Leider tauchen immer wieder Bugs im `sudo`-Programm auf, sodass sowohl Entwickler als auch
Administratoren auf der Suche nach besseren Lösungen sind.

- [doas](https://github.com/Duncaen/OpenDoas) aus der BSD-Welt
- [run0](https://www.freedesktop.org/software/systemd/man/devel/run0.html) als mögliche zukünftige Lösung in vielen Linux-Systemen

:::