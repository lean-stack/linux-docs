---
sidebar_position: 1
---

# Pfade / Verzeichnissystem

Das Linux-Dateisystem kennt im Gegensatz zu dem Betriebssystemen aus der Microsoft-Welt
nur einen Wurzel-Ordner `/` - auch Root-Ordner genannt. Auch wenn die Dateien über mehrere
Partitionen/Laufwerke verteilt sind (oder weitere Laufwerke über zum Beispiel USB-Sticks
hinzugefügt werden), werden diese jeweils an bestimmten Positionen im Dateibaum eingebunden.

Dieses Einbinden heißt im Linux-Jargon: **mount**.

Es gibt also nicht die Microsoft typischen Laufwerksbuchstaben (`C:`, `D:`, ...) sondern
nur eine logische Sicht (der Dateibaum). Je nach Ordner im Baum kann dieser auf einer anderen
Festplatte, Partition, CD, DVD, USB-Stick, etc. liegen. Es ist dem Namen direkt nicht 
`anzusehen`.

## Absolute Pfade

Mit einem Pfad-Namen kann ich den Ordner- bzw. Dateinamen genau im System angeben. Dabei
gibt es zum einen die absoluten Pfade. Diese beginnen immer mit einem führenden `/`.

Beispiele:
- `/etc/passwd`: Datei mit den lokalen Benutzern im Verzeichnis `/etc`
- `/usr/share/zoneinfo` - Verzeichnis mit den Zeitzonen-Dateien

## Relative Pfade

Da ich mich während der Benutzung eines Systems jederzeit in einem aktuellen
Arbeitsverzeichnis befinde (jedes laufende Programm kennt dieses Konzept, hat also ein
aktuelles Arbeitsverzeichnis), können Ordner- bzw. Dateinamen auch relativ von diesem
angegeben werden.

Beispiele:
- `unterordner/datei.txt`: Datei im `unterordner` meines aktuellen Verzeichnisses
- `./unterordner/datei.txt`: Der führende `./` kann zur Lesbarkeit hinzugefügt werden
- `../andere-datei.txt`: Die Datei befindet sich im übergeordneten (Eltern-) Verzeichnis

Die *Abkürzungen* stehen also für:

- `.`: aktuelles Verzeichnis
- `..`: übergeordnetes Verzeichnis

Falls ich im obersten Ordner bin (im Root-Ordner `/`) zeigt auch `..` wieder auf diesen
Ordner. Höher geht es nicht.
