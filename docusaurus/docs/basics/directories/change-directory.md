---
sidebar_position: 3
---

# Verzeichniswechsel

Der Wechsel vom aktuellen Arbeitsverzeichnis in ein anderes Verzeichnis geschieht
über den Befehl `cd` - Change Directory.

Die einfache Syntax lautet:

    `cd pfad`

Pfad ist hier natürlich zu ersetzen durch einen absoluten oder relativen Pfad.

Beispiele:

- `cd /etc`: Wechselt ins etc-Verzeichnis unter dem Root-Ordner
- `cd ..`: Wechselt ins übergeordnete Verzeichnis
- `cd Documents`: Wechselt in den Unterordner Documents

Sonderformen der Syntax sind:

- `cd`: Ohne weiteres Argument wechselt der Nutzer in sein Heimatverzeichnis
- `cd -`: Mit einem Minuszeichen als Argument, wechselt der Nutzer zurück in das letzte
Verzeichnis

:::info

Auch `cd $HOME` wechselt in das Heimatverzeichnis. Die Variable $HOME enthält als Wert
eben dieses. Und `cd ~` wechselt ebenso in das Heimatverzeichnis. 

In beiden Fällen führt die Shell eine sogenannte Substitution durch. Sie ersetzt also in
der Befehlszeile gewisse Dinge (dazu gehören sowohl Variablen als auch diese Tilde).

Im Kern sind beide Varianten also `cd pfad`-Kommandos.

:::
