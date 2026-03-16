---
sidebar_position: 1
title: Überblick
---

Das Hochfahren eines Linux-Systems (aka *boot*) läuft auf verschiedenen Ebenen ab.
Die grobe Unterteilung ist wie folgt nach dem Einschalten:

1. Motherboard-Firmware (**UEFI** oder **BIOS**)
2. Bootloader (Zum Beispiel **NTLDR** (Windows Boot Loader) oder **GRUB** bzw. ein anderer Linux Bootloader)
3. Kernel
4. System-Initialisierungsprozess (**systemd** oder **SysV Init**)

:::info

Zu **2. Bootloader**:

Das könnte wegfallen, bei entsprechender Konfiguration kann UEFI auch direkt den Kernel laden.

Zu **4. System-Initialisierungsprozess**:

Neben den beiden genannten gibt/gab es weitere Alternativen. Zum Beispiel:

- OpenRC
- runit
- ...

Mehr dazu zum Beispiel bei [ArchLinux](https://wiki.archlinux.org/title/Init) oder
[Gentoo](https://wiki.gentoo.org/wiki/Comparison_of_init_systems). Die meißten Distributionen bieten nicht den Luxus an, das frei wählen zu können. (ArchLinux unterstützt
offiziell auch nur **systemd**, Gentoo mehr)

:::
