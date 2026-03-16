---
sidebar_position: 2
---

# Lokale Anmeldung

Die lokale Anmeldung wird direkt am entsprechenden System durchgeführt - ohne das eine
Netz-Verbindung zu dem System bestehen muss. Einfach erklärt setze ich mich an den Rechner
oder an die virtuelle Maschine. Im Gegensatz dazu ist die entfernte Anmeldung (*Remote*) eine
Anmeldung an einem System, dass ich nur über das Internet erreichen kann. Ich kann mich
also nicht vor den Rechner und an seine Tastatur setzen.

## Terminal (Console)

Ein Linux-System stellt in der Regel sechs virtuelle Konsolen/Terminals zur Verfügung -
bezeichnet als `tty1` bis `tty6`. Zwischen diesen Konsolen kann man wechseln über
die Tasten-Kombination `Alt-F1` bis `Alt-F6`.

Jeder dieser Terminals läuft unabhängig und erlaubt jeweils eine Anmeldung mit Benutzernamen und Passwort. Insgesamt also maximal sechs mal - solange dies nicht anders
im System konfiguriert ist.

:::info

Falls das System, an dem die Anmeldung erfolgen soll, mit einem grafischen Desktop
hochgefahren wurde, ist der `tty1` belegt mit dem grafischen Login. Eventuelle schon
geschehene grafische Anmeldungen belegen je nach verwendetem Linux dann weitere
`tty`-Terminals. Das wird von den jeweiligen Linux-Distributionen sehr unterschiedlich
gehandhabt (eventuell der `tty2`, es ist aber auch ein hinzugefügter `tty7`, `tty8`, ... 
möglich).

**Generell gilt**: Der Wechsel vom grafischen Bildschirm auf einen virtuellen
Konsolen-Terminal muss mit der Tasten-Kombination `Strg-Alt-F2` usw. durchgeführt
werden. Also der zusätzlich gedrückten `Strg`- oder `Ctrl`-Taste. Eventuell müssen einfach
verschiedene Nummern (also Funktionstasten) ausprobiert werden bis ein nicht-grafischer
virtueller Terminal gefunden wurde.

:::

## Display- oder Login-Manager (Grafisch)

Falls das Linux-System konfiguriert mit einem grafischen Login-Bildschirm startet, präsentiert
sich uns der Login-Manager (oder korrekter Display-Manager). Meißtens läuft dieser dann auf
dem `tty1`. Jetzt kann die Anmeldung über eine visuellen Dialog erfolgen und zudem meißt auch
die gewünschte Desktop-Oberfläche in den Einstellungen gewählt werden.

In der Regel können nur normale Benutzer sich grafisch anmelden. Insbesonder wird dem
*Superuser* (Benutzername: `root`) in der Regel keine grafische Anmeldung gestattet.

:::tip

In Systemen die nicht grafisch starten kann - falls installiert - der grafische Desktop auch
nach einer lokalen Anmeldung auf einem Konsole-Terminal gestartet werden. Die Befehle dazu
werden im Thema [System-Start und Dienste](#) behandelt.

:::