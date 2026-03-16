---
sidebar_position: 4
---

# Verzeichnis-Inhalt

Der Inhalt eines Verzeichnisses lässt sich mit dem Kommando `ls` ansehen.

- `ls`: Inhalt des aktuellen Arbeitsverzeichnisses
- `ls pfad`: Inhalt eines über den Pfad spezifizierten Verzeichnisses

:::info

Hier gelten natürlich die gleichen Substitutionen wie zum Beispiel beim `cd`-Kommando.
Also `ls ~` zeigt zum Beispiel auch den Inhalt des Heimatverzeichnisses an.

:::

## Optionen

Hilfreiche Kommando-Optionen sind:

- `-l`: Lang-Form der Ausgabe mit Infos über Typ des Eintrags, Rechte, Eigentümerschaft,
Größe und Zeitstempel der letzen Dateimodifikation.
- `-a`: Auch versteckte Dateien anzeigen (haben in Linux einen führenden Punkt) 
- `-h`: Datei-Größe in menschlich (human) besser lesbaren Einheiten anzeigen.

:::tip

Diese Optionen lassen sich wie (fast) überall einfach kombinieren: 
statt `ls -l -a -h` schreibt man einfacher `ls -lah`.

:::

Viele weitere Optionen (auch zur Sortierung und Veränderung der Ausgabe) können über
`cd --help` ermittelt werden.
