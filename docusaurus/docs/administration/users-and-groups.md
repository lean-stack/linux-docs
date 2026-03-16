---
sidebar_position: 3
title: Benutzerverwaltung
---

# Benutzerverwaltung

Lokale Linux-User werden über einfache Dateien und Kommandos verwaltet.

## Relevante Dateien

- `/etc/passwd`: Liste der lokalen Benutzer im System
- `/etc/shadow`: Passwörter der lokalen Benutzer
- `/etc/group`: Liste der lokalen Gruppen
- `/etc/gshadow`: Gruppenpasswörter (heutzutage ungenutzt)
- `/etc/default/useradd`: Default-Einstellungen für neue Nutzer
- `/etc/skel`: Verzeichnis mit Default-Dateien für neue Benutzer
- `/etc/login.defs`: Zusätzliche Einstellungen für `useradd`

Daten eines lokalen Benutzers:
- Account-Name (Login-Name)
- UID (Nummer)
- GID (Hauptgruppen-Nummer)
- Meta-Informationen (Voller Name, Kommentar, ...)
- Heimat-Verzeichnis des Benutzers
- Standard- oder Default-Shell des Benutzers
- Passwort und Passwort-Ablaufzeiten
- Zusätzliche Gruppen des Benutzers

Bis auf die beiden letzteren werden alle Daten in der `passwd`-Datei erfasst. Die
Passwörter werden in der nur für `root` lesbaren `shadow`-Datei abgelegt. Und der
Name der Hauptgruppe sowie die Zuordnung zu anderen Gruppen wird in der `groups`-Datei
geflegt.

## Relevante Kommandos

- `useradd`: Anlegen eines Benutzers
- `usermod`: Modifizieren
- `userdel`: Löschen
- `groupadd`: Anlegen einer Gruppe
- ...
- `passwd`: Benutzer-Passwort Änderung

Im Normalfall reicht `useradd`, um den Benutzer mit allen nötigen Informationen zu erzeugen.
Und ein anschließendes `passwd` um sein (initiales) Passwort zu setzen.

:::tip

Den besten Einblick über alles was relevant ist findet man auf der Man-Page zu `useradd`.

:::

## Beispiel

```sh
# -m: Heimatverzeichnis anlegen
# -s: Default-Shell festlegen
# -G: zusätzliche Gruppen außer der Standard-Gruppe
# -c: Kommentar/Voller Name
# some: Login-Name des Users

useradd -m -s /bin/bash -G wheel,lpadmin -c "Some User" some
passwd some
```

Das erstere Kommando legt den User mit folgenden Informationen in der `/etc/passwd` an:
- Name: some
- Kein Passwort (Passwort: `x`)
- UID: Nächste Id über der letzten vergebenen Nummer über 1000
- GID: Nächste GroupId über der letzten vergebenen Nummer über 1000 (siehe `/etc/group`)
- Meta-Daten/Voller Name
- Heimatverzeichnis: /home/some
- Standard-Shell: /bin/bash

Und außerdem eine neue Gruppe namens des Users - also `some` - in der `/etc/group` Datei.
Außerdem wird das Heimat-Verzeichnis angelegt, mit den Dateien aus `/etc/skel` gefüllt und
anschließend Rechte und Ownership für dieses angepasst.

:::info

Auch das Passwort könnte mit der Option `-p` gesetzt werden. Muss allerdings schon als
Hash-Wert übergeben werden - also *etwas* kompliziert.

:::

Das initiale Passwort wird anschließend über `passwd` gesetzt. 

Von den Optionen könnte die `-s`-Option und (eventuell auch `-g`) weggelassen werden,
wenn entsprechende Defaults definiert sind.

### Sudo-User

Oft ist in der `sudo`-Konfiguration (Hinweis: `visudo`) schon eine bestimmte Gruppe
als Sudoer-Gruppe freigeschaltet. Bei Debian-Systemen ist das in der Regel die Gruppe
`sudo`, in anderen Distributrionen oft `wheel`.

Um einem Benutzer eine zusätzliche Gruppe zu geben, genügt folgendes Kommando:

```sh
# -a: add - ohne das -a ist die folgende Gruppenliste die effektive Liste aller Gruppen
# -G: komma-getrennte Liste der zusätzlichen Gruppen
usermod -aG sudo micha
```

## Defaults

In der Datei `/etc/default/useradd` stehen die Default-Werte des Kommandos kommentiert. 
Über `useradd -D` können diese in Kurzform betrachtet werden oder auch verändert werden.

Sieht auf meinem aktuellen System so aus

```sh
GROUP=1000
GROUPS=
HOME=/home
INACTIVE=-1
EXPIRE=
SHELL=/bin/bash
SKEL=/etc/skel
USRSKEL=/usr/etc/skel
CREATE_MAIL_SPOOL=yes
LOG_INIT=yes
```

## Sonstiges

User in Linux sind nicht *nur* lokale Benutzer. Es gibt vielfältige Möglichkeiten incl.
LDAP (und damit tatsächlich auch Active Directory).

Das Kommando `getent` ist deshalb auch viel flexibler (der Name ist eine Abkürzung für
**get entries**) und kann alle registrierten Quellen abfragen. Und das nicht nur für die
User:

Beispiele:

```sh
getent passwd
getent group
getent hosts
```
