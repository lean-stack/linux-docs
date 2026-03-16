---
sidebar_position: 3
title: Manuelle Einrichtung
---

Die Einrichtung von Hand geschieht durch einfache Kommandos aus dem `iproute2`-Paket.
Zum Beispiel:

```sh
# Prüfen der Netzwerkkarte (1)
ip link show dev <device-name>
# Einschalten der Karte (2)
ip link set <device-name> up
# Prüfen der Adressen (3)
ip address show # oder kurz: ip a
# Das Plus-Zeichen hinter broadcast lässt diese Adresse automatisch errechnen (4)
ip address add <address/prefix_len> broadcast + dev <device-name>
# Routing prüfen
ip route show (5)
# Routing/Gateway setzen (6)
ip route add default via <gateway> dev <device-name>
```

Danach muss nur noch der/die DNS-Server in `/etc/resolv.conf` eingetragen werden und
fertig! Wir sind drin ...
 