---
sidebar_position: 1
---

# Dateien kopieren

- `cp datei1.txt datei2.txt` - Also Quell-Datei und Ziel-Datei
- `cp datei1.txt ordner/datei2.txt` - Ebenfalls Quell-Datei und Ziel-Datei

Wenn mehrere Dateien kopiert werden sollen, muss das Ziel ein Ordner sein. Dabei werden
im Ziel-Ordner Kopien mit dem gleichen Dateinamen angelegt.

- `cp datei1.txt datei2.txt ordner` - Also Quell-Dateien und Ziel-Ordner
- `cp datei1.txt ordner` - Eine Quell-Datei, Kopie gleichen namens wird im Ziel angelegt

Wenn bei den Quell-Argumenten ganze Ordner mit dabei sind, muss rekursiv kopiert werden:

- `cp -r quellordner zielordner`

Falls der Ziel-Ordner noch nicht existiert, wird er angelegt und mit den Dateien gefüllt.
Ansonsten im existierenden Ziel-Ordner ein neuer Unterordner quellordner angelegt und mit den
Dateien gefüllt.
