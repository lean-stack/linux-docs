---
sidebar_position: 2
title: Ethernet-Hardware
---

*Normalerweise* sollten der Kernel und `udev` euere Netzwerkkarte problemlos erkennen. Den
Erfolg kann man sich über folgende Kommandos anzeigen lassen:

```sh
lspci -v
# bzw. 
lspci -v | grep -A 10 Ethernet
# Die Option -A 10 zeigt zustätzlich die nächsten 10 Zeilen nach dem Treffer an
```

Wichtig ist hier das/die geladenen Kernel-Module in der Zeile, die mit `Kernel-Modules:` startet.

Um zu überprüfen, dass der Kernel das Module auch zur Boot-Zeit geladen hat, kann man dieses
sicherstellen mit

```sh
sudo dmesg| grep <module-name>
```

:::info

Falls dies hier nicht klappte, sollte man zunächst herausfinden, ob und wenn ja welches
Kernel-Module zu dieser Netzwerkkarte gehört. (Aufgabe: Treiber für Lenovo T530?).

Und dann überprüfen:
  - Manuelles laden: `modprobe &lt;module-name>
  - Falls das klappt: Analyse, warum nicht zur Boot-Zeit. Sonst:
  - Existiert der Treiber überhaupt im Kernel-Sourcecode? Wenn ja: Kernel neu konfigurieren
  - Alternativen Anbieter für den Treiber das Module suchen

:::

Für eine intensive Analyse mit der Ausgabe von allen notwendigen Informationen kann
man das `udev`-Management komplett abfragen. Das ist auch oft notwendig zum Anlegen eigener
Regeln für `udev`:

```sh
# Kernel Geräte-Pfad suchen
sudo find /sys -name <device-name>
# udev-Pfad ermitteln
udevadm info --query=path /sys/class/net/xyz
# udev-Infos abrufen
udevadm info --attribute-walk --path=<pfad-von-drüber>
# oder in einem Rutsch:
udevadm info --attribute-walk --path=$(udevadm info --query=path /sys/class/net/xyz)
```
