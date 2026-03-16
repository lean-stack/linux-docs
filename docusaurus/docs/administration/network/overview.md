---
sidebar_position: 1
title: Überblick
---

In einem modernen Linux läuft die Einrichtung des Netzwerks ziemlich automatisch und
unkompliziert - gesteuert durch das Zusammenspiel diverser Dienste.

1. Hardware-Erkennung

   Grundsätzlich läuft das wie bei jeder Hardware-Komponente wie folgt ab: der Kernel registriert 
   bzw. *entdeckt* ein Hardware-Gerät. Damit löst er ein Event aus, das vom `udev`-Dienst 
   bearbeitet wird. (`udev` ist Bestandteil von `systemd`).

2. `udev` verarbeitet die Kernel-Hardwarenachrichten und tätigt diverse Schritte. U.a.

   - Laden der Module (Treiber): `modprobe`
   - Laden von Firmware
   - Erstellen der `/dev`-Device-Nodes (Dateien) mit angepassten Rechten

Danach ist die Hardware prinzipiell funktionsfähig im System.

:::info

Der ganze Vorgang läuft natürlich prinzipiell immer nach jedem Boot ab (bzw. genauer
nach der Erkennung der neuen Hardware - könnte ja auch etwas sein, was im Betrieb dazu kommt).
Nur bei Problemen mit der Erkennung bestimmter Hardware, greift der Benutzer/Administrator
ein und *hilft* dem Kernel bzw. dem `udev`-System auf die Sprünge. Zum Beispiel mit
zusätzlichen Treibern oder zusätzlichen Konfigurationsregeln für `udev`

:::

Die weitere Einrichtung erfolgt jetzt beim Beispiel der Netzwerkkarte entweder 

3. Manuell

   Dazu kommen aktuell die Tools des Paketes `iproute2` zum Einsatz.

4. Automatisch - gesteuert durch einen Dienst

   Da gibt es eine Vielzahl von Alternativen. Die meißten Distributionen (insbesondere beim
   Desktop setzen auf den `NetworkManager`). Falls nur Ethernet relevant ist, wird schon
   oft auf `systemd-networkd` gesetzt. Ansonsten ganz einfach nur auf den Dienst `dhcpd`.

   Insgesamt ist das natürliche eine Sammlung von Diensten, die alle Aspekte umfassen von
   IP-Adressen (auch über DHCP), Routing und natürlich DNS-Namensauflösung.

