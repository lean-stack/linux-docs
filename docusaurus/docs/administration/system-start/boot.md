---
sidebar_position: 2
title: Firmware Boot
---

Nach dem Anschalten eines Computers wird zunächst die Firmware des Motherboards gestartet.
Diese führt dann zunächst den POST (*Power-On Self Test*) durch, der einige grundlegende
Hardware-Tests durchführt (Gibt es RAM, gibt es ein Keyboard, ...)

Bei der Firmware des Motherboards ist grundsätzlich zwischen zwei Varianten zu unterscheiden:

1. Moderne Boards: *UEFI* (Unified Extensible Firmware Interface)
2. Ältere Boards: *BIOS* (Basic Input/Output System)

:::info

Es gab/gibt auch Motherboards, die beides unterstützen. Man kann dann im Setup der
Firmaware entscheiden, wie der Rechner booten soll.

:::

## UEFI

Der Boot aus der UEFI-Firmware heraus sucht nach einer sogenannten *ESP* (EFI System Partition)
auf den Festplatten - von vorne nach hinten (auf dem Bus). Dabei ist es unerheblich, ob die
Partitionstabelle *GPT* oder *DOS/MBR* eingerichtet ist (mit letzterem kann also auch UEFI
umgehen - es ist aber definitiv nicht ratsam). Innerhalb der ESP können diverse EFI-Applikationen
liegen (Bootloader, Bootmanager, EFI Shell, EFI-Stubbed Kernels). Alle liegen als 
`*.efi`-Dateien in Unterordnern in der ESP und könnten im **NVRAM** gespeichert
werden (das kann auch später/nachträglich über die UEFI-Firmware geschehen).

Oft wird bei Linux-Installationen die **GRUB**-EFI-Applikation (*GRUB* ist ein Bootloader)
als einzige hinterlegt. Und außerdem: beim ersten Start eines neuen(!) Mediums wird der
Fallback-Boot ausgeführt (im Pfad `\EFI\BOOT\BOOTx64.EFI`). 

## BIOS

Beim Booten über BIOS lädt die Firmware im Anschluss den Masterboot-Record und startet
den Boot-Loader. Natürlicherweise ist die Festplatte hier mit einem MBR-Schema partitioniert.

:::warning

Im Falle einer [GPT-Partitiontable](../harddisks/partitioning)
muss dieser Boot-Loader also noch im *Protective Boot Record* startbar sein und außerdem eine
Extra-Partition vorhanden sein (*BIOS Boot Partition*). Siehe formal unter 
[GPT only boot-protocol](https://repo.or.cz/syslinux.git/blob/HEAD:/doc/gpt.txt) oder lockerer
bei [Wikipedia](https://en.wikipedia.org/wiki/BIOS_boot_partition). Das können aber nicht alle
Bootloader.

Unter Windows gilt zwingend: BIOS impliziert notwendig eine MBR-Partitionierung, UEFI impliziert
eine GPT-Partitionierung.

:::

:::info

Gewisse Installer von Linux fragen am Ende der Installation, ob der Bootloader in den MBR
der Platte oder in einen MBR einer Partition gespeichert werden soll. Letzteres braucht man
nur, falls der bisherige MBR auf der Platte (andere Installation) bestehen bleiben soll. Dann muss
dieser natürlich umkonfiguriert werden, dass der auch den anderen starten kann. Einfacher ist
es oft einfach einen neuen Bootloader im MBR der Platte zu erzeugen - die meißten Installer bzw.
Bootloader erkennen auch weitere bootfähige Betriebssysteme auf den anderen Platten und
bauen diese dann in das Bootloader-Menu ein.

:::

