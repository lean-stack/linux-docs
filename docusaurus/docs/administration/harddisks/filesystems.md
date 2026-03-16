---
sidebar_position: 2
title: Dateisysteme
---

# Dateisysteme

Nach der Partionierung der Festplatte müssen die einzelnen Partitionen noch formatiert
werden. Dafür stehen eine Vielzahl von Dateisystemen zur Verfügung.

Die wichtigsten aktuellen Linux-Dateisysteme:

- ext2: Ehemals Linux *Standard* (nicht journalierend)
- ext3: Führte Journaling ein
- ext4: Aktuell Linux *Standard*
- xfs:  Entwickelt von SGI
- jfs: Entwickelt von IBM
- btrfs: Entwickelt von Oracle, Copy-On-Write, Subvolumes, Snapshots, Kompression

Weggelassen habe ich hier: zfs und reiser4 (beide out-of-tree, heißt nicht im Kernel)

## Treiber

Für alle diese Dateisysteme ist ein Kernel-Treiber nötig. Um zu sehen für welche
der aktuell genutzte Kernel Treiber hat, hilft ein Blick in ein Module-Verzeichnis:

`ls /lib/modules/$(uname -r)/kernel/fs`

Die aktuell schon geladenen Module/Treiber können abgerufen werden über:

`cat /proc/partitions`

Und ein Überblick über die konkrete Verwendung liefert:

`lsblk -f`

## Tools

Jedes Dateisystem benötigt im Userspace Tools zur Formatierung, Prüfung, Bearbeitung.
Diese sind in den Repositories vorhanden und heißen offiziell jeweils:

- `e2fsprogs`
- `xfsprogs`
- `jfsutils`
- `btrfs-progs`

Der Einfachheit halber stellen alle Tools mittlerweile unter dem gleichen Präfix die
Kommandos bereit:

- Formatierung: `mkfs.ext4`, `mkfs.xfs`, `mkfs.btrfs`, ...
- File System Check: `fsck.ext4`, `fsck.xfs`, `fsck.btrfs`, ...
