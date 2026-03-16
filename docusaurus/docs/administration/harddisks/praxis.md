---
sidebar_position: 3
title: Praxis
---

Ein kurzer Abriss über die typische Vorgehensweise beim Erzeugen der
Partitionstabelle und dem Formatieren mit Dateisystemen

## 1. Plattenwahl

Der Befehl `lsblk` liefert einen Überblick über die dem Kernel bekannten Block-Devices:

```sh
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
sda      8:0    0 465,8G  0 disk 
├─sda1   8:1    0   512M  0 part /efi
├─sda2   8:2    0    16G  0 part [SWAP]
├─sda3   8:3    0 112,1G  0 part /
├─sda5   8:5    0   256G  0 part 
└─sda6   8:6    0  81,2G  0 part 
sdb      9:0    0 465,8G  0 disk 
sr0     11:0    1  1024M  0 rom
```

Zu erkennen ist die noch nicht partitionierte Festplatte `sdb`

## 2. Partitionierung

Quasi immer zur Verfügung stehen `fdisk` oder `cfdisk`:

```sh
fdisk /dev/sdb
# oder(!)
cfdisk /dev/sdb
```

## 3. Dateisysteme erzeugen

- EFI System Partition: `mkfs.fat -F 32 /dev/sdxY`
- Swap-Device: `mkswap /dev/sdxY`
- Ext4: `mkfs.ext4 /dev/sdxY`
- Xfs: `mkfs.xfs /dev/sdxY`
- ...

## 4. Temporärer Mount

Um auf das neue Dateisystem schon Daten aus dem bestehenden Dateibaum zu kopieren,
wird es temporär unter `/mnt` eingehangen:

`mount /dev/sdxY /mnt`
