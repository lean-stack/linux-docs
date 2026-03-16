---
sidebar_position: 2
---

# Arbeitsverzeichnis

Wie schon oben angesprochen kennt jeder Linux-Prozess das Konzept des aktuellen
Arbeitsverzeichnisses. Dazu gehört natürlich auch eine jeweilige Shell.

:::tip

In der Regel ist der Shell-Prompt für den interaktiven Nutzer ein hilfreiches Mittel, 
um direkt das aktuelle Arbeitsverzeichnis zu erkennen. Dabei steht dann die Tilde (`~`)
für das Heimatverzeichnis des Benutzers. Alle anderen Verzeichnisse werden ausgeschrieben.

:::

Es gibt zwei einfache Möglichkeiten, sich das aktuelle Arbeitsverzeichnis ausgeben
zu lassen (meißt eher hilfreich in Shell-Scripts):

- `pwd`: Print Working Directory
- `echo $PWD`: Ausgabe der `$PWD`-Variablen, die immer aktualisiert ist in einer Shell
