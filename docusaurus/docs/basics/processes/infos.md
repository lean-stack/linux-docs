---
sidebar_position: 1
---

# Informationen über Prozesse

Prozesse sind die ausgeführten Programme in einem Betriebssystem. Informationen zu
diesen kann ich über verschiedene Mittel erhalten.

## Das virtuelle `proc`-Dateisystem

Der Linux-Kernel stellt im `/proc`-Verzeichnis virtuell Dateien bereit, die zu großen Teilen
Text-Dateien sind und die wir als User uns anschauen können. Dabei wird für jeden laufenden
Prozess ein Ordner angelegt und darin jeweils spezifische Informationen über den Prozess
(`ls /proc/1234/` - `1234` ist dabei zu ersetzen durch eine reell existierende
Prozessnummer):

- Ausgeführtes Programm: `exe`
- Aktuelles Verzeichnis: `pwd`
- I/O-Kanäle: `fd`-Verzeichnis
- Status des Prozesses: `status`

> Der Befehl `ls /proc/self` geht immer, zeigt aber dann nur die Informationen über den
`ls`-Befehl, der gerade gestartet wurde.

Desweiteren kann ich verschiedene weitere Informationen direkt aus dem `/proc`-Ordner entnehmen. Beispielsweise:

- `/proc/cpuinfo`: Informationen über die CPU (Generation, Taktung, Kerne)
- `/proc/meminfo`: Speicherbelegung des Systems
- `/proc/partitions`: Bekannte Festplatten-Partitionen (und erkannte Laufwerke)

All diese auslesbaren Informationen könnten zum Beispiel in kleinen eigenen Shell-Skripten
genutzt werden. Oft bieten sich doch eigene Kommandos an, die diese Informationen - vielleicht
sogar besser aufbereitet - anzeigen.

## Der Linux-Taskmanager: `top`

Der Befehl `top`