---
sidebar_position: 1
title: Einführung Administration
slug: /administration
---

# Was bedeutet System-Administration unter Linux?

Sammlung administrativer Aufgaben:

- Benutzerverwaltung
- Softwareverwaltung
- Partitionierung / Dateisysteme
- LVM et. al.
- Geräte-Einrichtung und -Konfiguration
- Netzwerk-Konfiguration
- System-Start
- Dienste
- Logging (System-Protokollierung)

Zu all diesen und noch viel mehr Aufgaben werden die Werkzeuge aus den Grundlagen benötigt
und jeweils zu den Spezialgebieten passende eigene Tools, die die Arbeit erleichtern.

Oftmals reicht zu den rudimentären Grundlagen-Werkzeugen auch einfach ein Editor.

## Distributionen

Manche Aspekte der Administration divergieren sehr stark zwischen den Distributionen
(insbesondere die Software-Verwaltung). Andere unterscheiden sich fast gar nicht - zum
Beispiel die Benutzerverwaltung.

## systemd

Dazwischen versucht `systemd` einen einheitlichen Zugang in den verschiedenen Distributionen
zu bieten, die dieses Paket mittlerweile nutzen. Wir werden es insbesondere beim Systemstart
bzw. Dienst-Start uns anschauen - der Kern-Aufgabe dieser Toolsammlung.

Zitat der Homepage [systemd.io](https://systemd.io/)
> systemd is a suite of basic building blocks for a Linux system. It provides a system and service manager that runs as PID 1 and starts the rest of the system.

Aber im dritten Abschnitt der Startseite positioniert sich systemd auch ganz klar als
komplettes Administrationstool:

> Other parts include a logging daemon, utilities to control basic system configuration like the hostname, date, locale, maintain a list of logged-in users and running containers and virtual machines, system accounts, runtime directories and settings, and daemons to manage simple network configuration, network time synchronization, log forwarding, and name resolution.

Also nennt folgende Themen:
- Rechnername
- Datums-/Zeiteinstellungen
- Lokalisierung/Globalisierung
- User Session Management
- Virtualisierung (VMs und Container)
- Eigene Dienste für
  - Systemstart (Bootloader - Gummiboot)
  - System-Protokollierung
  - Netzwerkkonfiguration
  - Zeit-Synchronisation
  - Namens-Auflösung (DNS)

Und diese Liste wächst von Release zu Release.

