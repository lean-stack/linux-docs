---
sidebar_position: 1
slug: /basics
---

# Was ist Linux?

Wenn man salopp von einem Linux-Betriebssystem spricht, ist das eigentlich relativ ungenau
und schwammig. Hinter dem Begriff **Linux** steckt nämlich eigentlich nur der innere Kern
dieser Betriebssysteme.

## Der Betriebssystem-Kern: der Linux Kernel

Die Hauptaufgaben des Kernels sind

- Geräte-Ansteuerung (Festplatte, Bus-Systeme, Prozessor, Grafikkarte, ...)
- Speicher-Verwaltung (RAM)
- Prozess-Verwaltung (welches Programm bekommt Rechenzeit)
- Multitasking (Verteilung der Rechenzeit an alle Programme)
- Security (Wer / welches Programm darf was?)
- Last-Management (Wieviel Resourcen darf ein Programm nutzen?)

Diese werden abstrahiert und über Programmierschnittstellen dem Rest der Welt (sogenanntes
Userland) zur Verfügung gestellt werden.

Die Homepage des Kernels ist [kernel.org](https://kernel.org) und zur Geschichte von Linux
verweise ich an dieser Stelle ganz einfach auf Treffer in einer beliebigen
Internet-Suchmaschine.

## Das *Drum-Herum*: GNU

Der Linux-User kommt mit dem Kernel nicht direkt in Kontakt, sondern nutzt Programme
aller Art um seine Aufgaben zu erfüllen. Salopp gesagt:

- Um Informationen aus dem Internet zu lesen, brauche ich einen Browser
- Um einen Text zu erstellen brauche ich einen Editor
- Um eine Datei zu kopieren auf meinen USB-Stick brauche ich ein Kopier-Programm

Auch wenn letzterer Kopier-Vorgang vom gemeinen Windows-Nutzer einfach über den Explorer
gemacht wird (dazu gibt es in Pendants in der Linux Welt, falls das System grafisch ist),
würde dafür auch einfach ein Befehl reichen:

`kopiere datei.txt nach stick "USB"`

Diese Befehle werden per Tastatur in einer sogenannten Shell eingeben. Die
*Benutzeroberfläche* dieser Shell ist ein blinkender Cursor, der Eingaben erwartet.

Die Standard-Shell unter Linux und diese rudimentären Befehle/Kommandos/Tools wurden in einem seperaten Projekt mit einer offenen Software-Lizenz programmiert, die die kostenlose Weitergabe dieser Software unter Einhaltung gewisser Regeln erlaubt.

Das Projekt heißt [GNU](https://www.gnu.org) und bezeichnet sich selbst als Betriebssystem.
Der Kernel **hurd** dieses Projektes hat aber keine Praxis-Relevanz. Der Name GNU selbst ist
ein rekursives Acronym und bezieht sich auf das ältere Betriebssystem Unix, dass die Vorlage
gab für die eigenen Befehle/Kommandos (GNU - GNU is Not Unix).

Ein aktuelles Zitat auf der Webseite dieses Projektes:

> The name “GNU” is a recursive acronym for “GNU's Not Unix.” “GNU” is pronounced g'noo, as one syllable, like saying “grew” but replacing the r with n.
>
> The program in a Unix-like system that allocates machine resources and talks to the hardware is called the “kernel.” GNU is typically used with a kernel called Linux. This combination is the GNU/Linux operating system. GNU/Linux is used by millions, though many call it “Linux” by mistake.
>
> GNU's own kernel, the GNU Hurd, was started in 1990 (before Linux was started). Volunteers continue developing the Hurd because it is an interesting technical project.

## Firefox, Microsoft Office, ...

Auf Linux-Systemen, die einen grafischen Desktop bieten (ein Linux-Server macht das in der
Regel nicht), erwartet der User natürlich gewisse Standard-Programme.

Für alle in einem üblichen Windows-System benutzen Programme gibt es entweder die gleiche
Software auch für GNU/Linux-Systeme oder mindestens adäquate oder bessere freie Software,
die jeder User-Erwartung standhalten können.

Gewisse Software (zum Beispiel einige Programme des Platzhirschs Microsoft) allerdings
laufen unter Linux entweder gar nicht (MS Office) oder nur in abgeschwächter Form (MS Teams).
Dann greift der gemeine Linux-User aber problemlos auf alternative kostenlose freie Software
zurück.
