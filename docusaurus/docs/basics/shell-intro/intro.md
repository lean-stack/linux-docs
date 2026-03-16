---
sidebar_position: 1
---

# Einführung

Nach der Anmeldung begrüßt uns ein spezielles Programm etwas formlos mit einem blinkenden
Cursor auf dem Terminal: die Shell.

:::tip

Dies gilt natürlich insbesondere für eine lokale nicht-grafische Anmeldung und die 
Remote-Anmeldung über zum Beispiel einen `ssh`-Client. Falls die Anmeldung auf einem
Desktop grafisch geschieht, muss zunächst ein Terminal-Emulator gestartet werden.

:::

Jeder Nutzer kann in Grenzen selbst entscheiden, welche konkrete Implementierung einer
solchen Shell er als Default-Shell nutzen möchte.

:::info

Die Standard-Shell unter Linux ist die sogenannte **Bash**. Der Name ist ein Akronym und steht
für *Bourne-Again-SHell* und ist angelehnt an den Namen des Entwicklers der früheren
Unix-Standarshell `sh`: Stephen Bourne.

:::

Wichtigste Aufgabe dieser Shell ist es, vom Benutzer Befehle entgegenzunehmen.
Diese werden nach gewissen Regeln ausgewertet (interpretiert) und dann entsprechend
ausgeführt oder weitergeleitet an *Programme*.

## Prompt

Die Zeichen vor dem blinkenden Cursor bezeichnet man als (Eingabe-) Prompt. Je nach
gewählter Shell und Konfiguration kann dieser sehr aussagekräftig sein.

Standardmäßig zeigt er in einer Bash Informationen an über den angemeldeten Benutzer (sein
Name), den Namen des Rechners und das aktuelle Arbeitsverzeichnis gefolgt vom $-Zeichen.

Also zum Beispiel

    [user@host /etc]$

Falls der aktuelle User der Superuser **root** ist, wechselt das $-Zeichen zu einem
#-Symbol, um eben dies stärker zu betonen.
    

## Modi/Varianten der Shell-Ausführung

Es werden drei Varianten unterschieden:

- Login-Shell: dies ist die Shell, die uns nach einem Login begrüßt (Lokal, SSH)
- Interaktive Shell: dies ist die Shell, die meißtens grafisch durch den Terminal-Emultator
gestartet wurde. Aber natürlich ist die Login-Shell auch interaktiv.
- Script-Shell (oder non-interactive): dies ist die Shell, die gestartet wird, um ein
Shell-Programm (auch Shell-Script genannt) auszuführen.

## Beenden

Die Shell kann beendet werden mit dem

- `exit`-Befehl (eingebautes Kommando der Shell)
- `logout`-Befehl (ebenfalls eingebaut). Klappt aber nur auf einer Login-Shell
- `Strg+D`-Tastenkombination: bedeutet eigentlich Ende-Der-Datei (EOF - End-Of-File)
