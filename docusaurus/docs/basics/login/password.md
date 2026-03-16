---
sidebar_position: 6
---

# Passwort

Die Anmeldung eines Linux-Users sollte nur mit Passwort (oder anderen sicheren Mechanismen)
möglich sein. Das Passwort selbst kann jeder Benutzer mit Kenntnis des bisherigen ändern:

```sh
passwd
```

Je nach Konfiguration des System werden verschieden Passwort-Regeln für das neue Passwort
geprüft:

- Länge
- Komplexität (Ziffern, Klein-/Großbuchstaben, Sonderzeichen)
- Abgleich mit Wörterbüchern
- Letzte Verwendung

:::info

Also Superuser `root` können die Passworte anderer User ohne Wissen über das alte Passwort
geändert werden (und auch die Regeln übergangen werden)

```sh
passwd username
```

:::
