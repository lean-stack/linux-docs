---
sidebar_position: 3
title: Boot Loader
---

Falls der Linux-Kernel nicht direkt EFI-stubbed gebootet wurde (und im BIOS-System sowieso nicht),
startet dann der sogenannte Boot-Loader.

Während das praktisch auch der `ntldr` von Windows sein kann, finden wir in Linux-Systemen meißt
den **GRUB** (GRand Unified Bootloader).

Einen guten Überblick über die möglichen Alternativen findet man bei 
[ArchLinux](https://wiki.archlinux.org/title/Arch_boot_process#Boot_loader).

## GRUB

Zumeißt wird der GRUB direkt bei der Installation installiert und konfiguriert.
Im laufenden System ist er nur selten anzufassen, weil notwendige Änderungen auch durch
die Distribution abgearbeitet werden.

### Installation

Dies ist ein einmaliger Vorgang (meißt bei der Installation der Distribution erledigt).

#### UEFI

```sh
grub-install --target=x86_64-efi --efi-directory=<esp> --bootloader-id=GRUB
```

Mit Kenntnis des vorherigen Kapitels [Firmware Boot](boot) sind die Optionen fast
selbst erklärend:

- `--efi-directory`: Wo ist die ESP gemountet?
- `--bootloader-id`: Wie ist die Vendor-ID des Booteintrags (heißt Unterordner in der ESP)?
- `--target`: Welche Architektur?

#### BIOS

```sh
grub-install --target=i386-pc /dev/sdX
```

Hier ist es etwas kürzer. Lediglich Architektur und Zielplatte (oder Partition) muss angegeben
werden.

### Konfiguration

Die Konfiguration ist einheitlich geregelt. Normalerweise existiert eine Datei `/etc/default/grub`
in der Einstellungen vorgenommen werden. Die eigentliche Konfigurationsdatei `grub.cfg`
muss danach immer wieder neu erzeugt werden:

```sh
grub-mkconfig -o /boot/grub/grub.cfg
```

Für weitere Details zu der Konfiguration: siehe entsprechende Manuals.
