---
sidebar_position: 2
title: Filesystem Hierachy - Standard
---

# FHS

Der Filesystem Hierachy Standard (kurz FHS) ist eine Richtlinie, wie Distributionen in der
Linux-Welt das Dateisystem organisieren sollen. Soll heißen: welche Datei des Systems sollte
in welchem Ordner liegen. Theoretisch ist das alles nämlich völlig frei wählbar!

Vorgestellt werden nun die einzelnen Posten dieses *Standards* - fast alle Distributionen
weichen an der einen oder anderen Stelle davon ab. Und manche aktuelle Entwicklung hat
den Standard auch schon überholt (letzte Fassung aus dem Jahr 2015)

Links:

- [FHS Specifications](https://refspecs.linuxfoundation.org/fhs)
- [Wikipedia](https://de.wikipedia.org/wiki/Filesystem_Hierarchy_Standard)

Grundlegende Idee war, dass Dateien im Linux-Dateisystem kategoriesierbar sind in Hinblick
auf:

- Statisch und Nicht-Statisch (Statisch bedeutet: im laufenden System unveränderlich)
- Shareable und Unshareable (Spezifisch für einen Rechner oder teilbar zwischen Rechnern)

## Root-Filesystem - die oberste Ebene

### Allgemein anerkannt ohne große Abweichungen

- `/boot`: Dateien die zum Systemstart benötigt werden
- `/dev`: Gerätedateien
- `/etc`: Konfiguration des Systems
- `/home`: Heimatverzeichnisse der Benutzer
- `/mnt`: Manueller Einhängepunkt des Administrators
- `/opt`: Optionale Software (oft von Drittanbietern)
- `/root`: Heimatverzeichnis des Superusers
- `/run`: Dateien laufender Prozesse
- `/srv`: Daten von Diensten (Webserver, FTP-Server)
- `/tmp`: Temporäre, flüchtige Dateien

Verzeichnisse die ich hier weggelassen habe: `/bin`, `/sbin` und `/lib`. Sie waren
gedacht für rudimentäre Programme und Bibliotheken, die in jedem Linux-System vorhanden sein
müssen. (Der Standard listet dieses auch explizit auf: [Essentielle User-Kommandos](https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html#binEssentialUserCommandBinaries))

Der sogenannte `usr`-Merge hob diese spezielle Bedeutung auf - mehr dazu weiter unten.

### Linux spezifische Abweichungen

- `/proc`: Linux spezifisch: Spezielles virtuelles Dateisystem mit Prozessinformationen
- `/sys`: Linux spezifisch: Spezielles virtuelles Dateisystem zum Kernel-Zugang

### Ohne heutige Bedeutung

- `/media`: Früher wurden CDROM-Laufwerke und ähnliches hier eingebunden. Das klappte in
der Regel nur mit Root-Rechten. Das ist heutzutage mit dem Verschwinden der CDROM-Laufwerke
und dem Aufkommen vieler anderer Wechselmedien (USB-Sticks, MemoryCards, ...) unrealistisch.

## Unter-Hierarchien

Einige der obigen Verzeichnisse wurden auch noch genauer aufgeschlüsselt. Größere
Unter-Hierachien definiert der Standard für die Verzeichnisse `/usr` und `/var`.

### `/usr`: Unix System Resources

Das Verzeichnis lag zu Unix-Zeiten oft auf einem Netzwerk-Laufwerk und wurde von vielen
Clients benutzt um Speicherplatz zu sparen. Es enthielt auch `bin`, `sbin` und `lib` 
Verzeichnisse für alle Programme, die nicht ganz *Daily-Business* waren bzw. zu groß für
den *kleinen* Client. Oder ganz einfach nicht vom Standard im jeweiligen Root-Verzeichnis
gefordert wurden.

Dazu kamen Unterverzeichnisse für Source-Code der installierten Anwendungen (`src` und 
`include`) sowie das `share`-Verzeichnis für Architektur-unabhängige Daten (Handbücher, ...)

Eine Sonderrolle spielt das Verzeichnis `/usr/local`: es bildete nochmal die gleiche
Struktur wie `/usr` ab und ist bis heute gedacht für lokal und manuell installierte 
Software (also nicht über die Paketverwaltung der Distribution)

### `/var`: Variable Daten

Das können sein: Spool-Directories (Drucker, Mails), Log-Dateien, Laufzeit-Dateien, ...
Zwei Aspekte dominieren: sie werden im laufenden Betrieb des Systems erzeugt und sind
teilweise sehr variabel in Anzahl und Größe.

Das `var`-Verzeichnis wurde spezifiert mit folgender Idee:

Ein Programm, das installiert wird, ist mit seinen statischen Dateien ins `/usr`-Verzeichnis
zu kopieren und alles, was dann später vom Programm angelegt wird, soll nach `/var`

## Der `usr`-Merge

Im Laufe des letzten Jahrzehnts (also seit ca. 2010) haben sich fast alle Linux-Distributionen
entschlossen die Trennung von zum Beispiel `/bin` und `/usr/bin` aufzuheben. Sie ist
angesichts heutigen Plattenplatzes nicht mehr notwendig und macht einiges auch zu aufwändig.

Deshalb verlinken heutige Distributionen oft `/bin` nach `/usr/bin` usw. und kopieren alle
ausführbaren Programme in letzteres. Sie verletzen damit natürlich nicht den FHS, denn
`cp` liegt zwar dem Namen nach im `/usr/bin` - Ordner, ist aber immer noch sichtbar mit
`ls bin`.




