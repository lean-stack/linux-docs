---
sidebar_position: 4
title: Mount
---

Als **Mount** bezeichnet man das Einbinden eines Laufwerks (genauer Partition) in den
Verzeichnisbaum. Dabei bestimmt der **Mountpoint** den Ordner im Baum, dessen Inhalt nach
dem Einbinden die Ordner und Dateien des eingebundenen Laufwerks zeigt.

:::tip

Eventuell vorher in dem Ordner liegende Dateien/Verzeichnisse werden qausi überdeckt
und sind zunächst nicht mehr sichtbar.

:::

## Temporärer Mount

Mit dem Kommando `mount` wird im laufenden System dieser Vorgang durchgeführt. In der
einfachsten Form sieht die Syntax wie folgt aus:

```sh
# /dev/sdxY: Pfad zur Gerätedatei
# /path/to/mount/point: Der Ordner-Pfad des Mountpoints
mount /dev/sdxY /path/to/mount/point
```

Das `mount`-Kommando kennt natürlich auch Optionen. Die beiden wichtigsten sind

- `-t <fstype>`: Schränkt den Dateisystemtyp ein. In der Regel unnötig.
- `-o <options>`: Komma-getrennte Liste von Mount-Optionen

Ohne weitere Argumente liefert das Kommando eine Liste der aktuellen Mounts im System.
Diese kann aber auch ausgelesen werden aus der Datei `/proc/mounts`.

## Unmounting

Die eingebundenen Laufwerke können auch wieder ausgehangen werden. Das Kommando
lautet `umount` (also nicht **unmount**) und bekommt als Argument entweder die
Gerätedatei oder den aktuellen Mountpoint übergeben. Letzteres ist zu bevorzugen,
denn ein Gerät kann an verschiedenen Stellen eingebunden sein. Und dann schlägt
der Unmount fehl.

## Laufwerksname

Beim temporären Mount ist der Pfad zur Gerätedatei fast immer die einfachste
Variante, ein Gerät einzubinden. Der Administrator *kennt* diesen zur aktuellen
Laufzeit. Da die Gerätenamen aber über die Anordnung und Reihenfolge auf dem
Bus-System (Hardware) bestimmt werden, ist dies eben nicht sehr präzise.

Deshalb kann die Einbindung auch über einen UUID (Universal Unique Identifier) erfolgen.
Der Befehl `blkid` gibt mit Root-Rechten eine aktuelle Liste aller erkannten Partitionen.
Ohne Root-Rechte ist das auch möglich mit `lsblk -f`.
Zudem wird ein eventuelles Label der Partitionen angezeigt, das auch zum Mount
dieser benutzt werden könnte.

Beispiel:

`mount UUID=eb6a833c-fbce-497f-9cbd-3fc2535f9475 /home`

## Festgelegte Mountpoints

In der Datei `/etc/fstab` können Mounts definiert werden. Diese Datei wird zum Systemstart
ausgelesen und die Mounts ausgeführt. Alle Mountpoints die dauerhaft zum System gehören
(`/`, `swap`, `/var`, ...) müssen dort aufgeführt werden. In der Manpage (`man fstab`)
kann das Format nachgelesen werden, oft ist die Datei aber ausreichend selbst dokumentiert.

## Systemd Mount

In **systemd** gesteuerten Systemen übernimmt dieses die Steuerung des Mounting.
Dazu kennt Systemd eine spezielle Mount-Unit (mehr zu Systemd-Units später). Beim
Systemstart liest Systemd die `/etc/fstab` ein und erzeugt dynamisch diese Mount-Units.

Es können aber auch eigene Mount-Units angelegt werden und diese wie andere
Dienste *gestartet* und/oder *enabled* werden.

Beispiel:

```ini
[Unit]
Description=Mount Shared Data Volume
After=home.mount

[Mount]
What=/dev/disk/by-uuid/af3bd7fe-5796-4248-9917-3e71a5a56ec6
Where=/home/share
Type=btrfs
Options=defaults,subvol=shared-data

[Install]
WantedBy=multi-user.target
```

Zudem verfügt das Kommando `systemd-mount` über einigen Luxus.

Einstiegspunkte zum Lesen sind die Manpages, zum Beispiel:

- [Mount Unit](https://man.archlinux.org/man/systemd.mount.5.de)
- [`systemd-mount`](https://man.archlinux.org/man/systemd-mount.1.de)
