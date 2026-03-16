---
sidebar_position: 1
---

# Allgemeines zur Anmeldung

## Möglichkeiten zur Anmeldung

Wie in quasi jedem Betriebssystem muss ein Benutzer sich in einem Linux-System anmelden.
Dieser als *Login* bezeichnete Vorgang kann über verschiedene Wege geschehen. Und kann
natürlich auch mehrfach geschehen (ein Linux-System ist ein Multi-User System, das bedeutet:
es gibt die Möglichkeit mit mehreren Benutzern auf dem System gleichzeitig zu arbeiten).

Mögliche Wege der Anmeldung sind:

 - [Lokale Anmeldung - Terminal/Konsole](local)
 - [Entfernte Anmeldung - SSH](remote)
 - [Grafische lokale Anmeldung auf einer Desktop-Oberfläche](local#display--oder-login-manager-grafisch)

Bei ersteren beiden landet der Benutzer nach der Anmeldung in der *Shell*. Das heißt
das ein bestimmtes Kommando gestartet wurde (die Login-Shell des Benutzers) und dieses
auf Anweisungen von ihm wartet.

:::info

Zu 100% wird ein Linux-System über Kommandos in einer Shell administriert. Auf Systemen
mit einem Desktop (einer grafischen Oberfläche) können einige administrative Vorgänge
auch grafisch *Klickibunti* gelöst werden. Linux-Varianten die sich gezielt an 
Heimanwender wenden versuchen für alle System-Einrichtungen grafische Tools bereit
zu stellen. Das hat aber nichts mit der Administration eines Linux-Servers zu tun.

Deshalb startet ein Linux-Server auch keine grafische Oberfläche (Keine Regel ohne
Ausnahme, das gilt für den Rest dieser Dokumentation).

:::

## Die Shell

Ohne weitere Konfigurations-Änderungen ist das Shell-Programm nach der Anmeldung die `bash`
und diese begrüßt den Benutzer mit einem blinkenden Cursor hinter dem sogenannten
*Shell-Prompt* - der Eingabeaufforderung.

:::info

Der name *bash* ist ein Acronym (Bourne-Again-Shell) und bezieht sich auf die ursprüngliche
Default-Shell von Unix-Systemen aus den 70er Jahren. Dieses Programm hieß `sh` und wurde
maßgeblich von Stephen Bourne an den Bell-Labs (damals die *Forschungsabteilung* des
staatlichen Telefonunternehmens der USA **AT&T**) programmiert. Siehe zum Beispiel im
[Wikipedia - Bourne Shell](https://en.wikipedia.org/wiki/Bourne_shell).

:::

An diesem Prompt erwartet die Shell jetzt Anweisungen, was als nächstes getan werden soll.
Siehe dazu auch [Shell Kommandos](../shell-intro/commands)

## Die Terminal-Emulatoren

Um im grafischen Desktop - falls das System einen solchen bietet - Shell-Kommandos absetzen
zu können, muss man einen Terminal-Emulator grafisch starten.

Je nach installiertem System sind das sehr unterschiedliche Programme. Am besten versucht man
über ein Startmenu ein Programm namens *Terminal* oder *Konsole* zu finden.

Dieser Emulator startet dann für uns einen Pseudo-Terminal und in diesem die Standard-Shell
des Benutzers.
