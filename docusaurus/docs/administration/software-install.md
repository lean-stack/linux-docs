---
sidebar_position: 5
title: Software-Installation
---

# Software Installation

Wenn die Aufgabe ansteht ein neues Stück Software auf den Rechner zu bringen,
empfiehlt sich folgende Vorgehensweise:

## 1. Offizielle Repositories

Wenn das Paket in den offiziellen Paketquellen enthalten ist, sollte es unbedingt
über diese installiert werden.

Ausnahmen:
- Die Software ist nicht wie gewünscht konfiguriert: Dann das Quell-Paket der Distribution
benutzen und die Konfiguration manuell anpassen und selbst das Paket erstellen. Der Schritt
muss nach jeder Aktualisierung der Original-Paketquellen neu durchgeführt werden.
- Die Software liegt nicht in der gewünschten Version vor. Dann zu Schritt 2

## 2. Repositories des Upstreams

Manche Software stellt eigene Repositories zur Verfügung - oder es gibt einen **vertrauenswürdigen**
Maintainer, der ein solches pflegt. Es muss natürlich zur Distribution (Version und Architektur)
passen. Dieses Repository muss dann den eigenen Listen hinzugefügt werden und der Paketmanager
muss die lokalen Listen aktualisieren.
Danach geschieht die Installation ganz normal über einen zum Beispiel `apt install <software>`
der Distribution und auch Updates kommen ganz normal in das System.

## 3. Passended Paket im Netz

Möglicherweise findet sich ein passendes (Distributions-Version und Architektur) irgendwo
im Netz und dieses sieht *ganz* gut aus. Dann wird es manuell heruntergeladen, natürlicherweise
auch inspiziert und kann manuell installiert werden. Dieser Weg ist allerdings der mit der
geringsten Vertrauensstellung und der Administrator muss ihn bei jedem Update komplett 
wiederholen.

## 4. Original-Sourcecode der Software

Hier wird einfach der Quellcode im Original heruntergeladen (git, ...). Dann selbständig für die
Distribution und Verwendung konfiguriert, kompiliert und installiert. Natürlich muss unter 
Umständen jeder der obigen Schritte nach jedem relevanten Update wiederholt werden.
