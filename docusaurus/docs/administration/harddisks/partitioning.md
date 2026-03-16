---
sidebar_position: 1
title: Partitionierung
---

# Partitionierung

Bei einer Installation einer Distribution ist meißt der komplizierteste und
weitreichendste Schritt die Aufteilung der Festplatte(n). Während bei Desktop-Systemen und
insbesondere bei Laptops in der Regel zunächst nur eine Festplatte zur Verfügung steht und
diese dann auch recht einfach ähnlich wie in Windows partitioniert werden kann, sind
im Server-Bereich doch mehr Überlegungen notwendig.

- Wieviele Platten stehen zur Verfügung?
- Gibt es ein Hardware RAID oder ist ein Software RAID nötig?
- Wie kann ich zukunftssicher den Plattenplatz aufteilen?
- Welche Dateisysteme sollen eingesetzt werden?

Eine Aufteilung des Dateibaums nach dem FHS ist in der Server-Welt fast immer ratsam. Je
nach Verwendungszweck eines Servers sind unterschiedliche Anforderungen an verschiedene
Ordner im FHS gegeben:

- Wenn möglich immer RAID einsetzen
- Fileserver (eventuell SAMBA): extra Platte/Partition nur für diesen Zweck
- Mail- oder Druckerserver: viel Platz für die Spool-Ordner in /var
- Optionale Software (`/opt`): definitiv eigene Platte/Partition
- Generell im Serverbereich: `/var`-Ordner mit Logs auf eigene Platte/Partition
- Mehrbenutzersystem: `/home` auf eigene Platte/Partion

Die früher oft gewählten Partitionen für `/boot` und `/usr` sind nicht mehr nötig,
maximal der `/usr/local/`-Bereich falls extensiv genutzt. Die anderen beiden lassen
sich durch Neu-Installation wieder herstellen. Auch ein Webserver braucht keine
eigene Platte/Partition, die Seiten werden in der Regel vom Entwicklungs-/Staging-Server
deployed.

Kritischer sind Database-Systeme (siehe oben `/opt`): da darauf achten, dass die Daten-Files
sicher sind (abgerenzt vom Root-Filesystem).

## RAID (Redundant Array of Independent Disks)

### Hardware RAID

Mit einem Hardware RAID hat ein Betriebssystem zunächst wenig zu tun. Lediglich der Treiber
für den RAID-Controller muss vorhanden sein. Aus der Sicht des Systems existiert nur
eine Festplatte.

### Software RAID

Ein Software-RAID wird vom Betriebssystem selbst verwaltet. In Linux kommen drei verschiedene
Techniken zum Einsatz:

- Abstraktionsschicht - arbeitet direkt mit puren Platten (Software: **mdadm**)
- Logical Volume Manager (Software in der Regel **LVM**)
- Datei-System Schicht (zum Beispiel **btrfs** oder **zfs**)

In der Schulung kann ich je nach Wünschen flexibel jede dieser Varianten demonstrieren.

## Partitionierung

### Partitions-Tabelle

Grundvorausetzung für die Partionierung einer Platte ist die Wahl des Formats der
Partitionstabelle. Diese ist ein kleiner Abschnitt an Daten am Beginn einer Festplatte,
der die Partitionen bzw. deren Positionen beschreibt. Zwei Formate sind oft anzutreffen:

#### MBR (manchmal auch als `dos` bezeichnet)

Diese Tabelle wird noch im Masterboot-Record (also dem ersten Sektor einer Platte) abgelegt
und kann genau vier Partitionen definieren. Eine der Partionen darf eine sogenannte
Extended Partion sein, die wiederum eine eigene Partitionstabelle hat in ihrem ersten 
Sektor (EBR). In dieser Extended Partition können beliebig viele Unterpartitionen definiert
werden.

#### GPT (GUID Partition Table)

Hier nimmt sich die Partitionstabelle etwas mehr Platz als der im MBR. Damit können laut
Spezifikation selbst auf kleinsten Platten mindestens 128 Partitionen erstellt werden. Das
dürfte reichen. Die Anzahl wächst mit Plattengröße. Zudem sind einige Absicherungsmaßnahmen
in die GPT eingebaut - zum Beispiel ein Backup der Tabelle am Ende der Platte. Außerdem
präsentiert sich die Platte einem älteren System, dass nur MBR-Partitionierung kennt als
eine schon partitionierte Festplatte mit einer Partition über die gesammte Platte.

#### Und was soll nun genutzt werden?

Grundsätzlich: **GPT**

Es ist moderner und unterstützt größere Platten.

Ausnahmen:

- Dualboot mit Windows und BIOS-Board
- Altes BIOS (vor 2010) müsste überlistet werden

### Tools zur Partitionierung

Bei einer nackten Festplatte muss zunächst das Format der Partitionstabelle festgelegt
werden. Einige der folgenden Tools bezeichnen dieses auch als *Label*. Einige legen 
ganz einfach direkt eine GPT an, dies muss dann gegebenenfalls korrigiert werden.

- `fdisk`: Immer vorhanden. Kommando-gesteuerte *Oberfläche*
- `cfdisk`: (Fast) immer vorhanden. Menu-gesteuerte *Oberfläche*. Nicht ganz so flexibel.
- `parted`: GNU Partition Editor - recht komplex (mit existierenden grafischen Frontends)

Nach der Erstellung einer Partition sollte der Typ immmer angepasst oder überprüft werden.
Einige Betriebssysteme reagieren da eher sensibel, wenn das nicht passt. Aber auch in der
Linux-Welt sollte eine Swap-Partition als solche markiert sein. Die EFI System Partition (ESP)
muss korrekt gesetzt sein.

## Empfehlungen

Hier folgend ein paar kleine Empfehlungen zur Aufteilung der Platten:

### Laptop - eine Festplatte

Im modernen UEFI-Laptop: GPT Partitionierung

- Die EFI System Partition (ESP), Größe 100MB
- Eine Swap-Partition für den Hibernate bzw. Suspense-To-Disk (Größe ~ RAM)
- Eine Root-Partition

Im alten BIOS Laptop: MBR Partitionierung

- Eine Swap-Partition für den Hibernate bzw. Suspense-To-Disk (Größe ~ RAM)
- Eine Root-Partition

### Server mit einer Platte(?) oder mit Hardware RAID

- ESP falls UEFI
- andernfalls nur eine Partition mit LVM
- eher kein Swap

### Reeller Server

- ESP falls UEFI
- Aufteilung nach Server-Zweck (mindestens aber Hardware-RAID oder LVM)
