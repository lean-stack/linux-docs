---
sidebar_position: 2
title: Tastatur
---

Die Tastatur bzw. hauptsächlich das Tastatur-Layout wird unterschiedlich
in Distributionen eingestellt. 

Und außerdem muss betont werden, dass bis heute diese Einstellungen quasi zweimal
zu setzen sind:

1. Virtuelle Konsole (tty)
2. Grafischer Desktop

## Virtuelle Konsole

Die notwendigen Einstellungen setzen die sogenannte Keymap und den gewünschten Font
für die Konsole.

### Relevante Kommandos

- `loadkeys`
- `setfont`

Die nutzbaren Keymaps und Fonts liegen in Unterverzeichnissen in `/usr/share/kbd/`.

### Relevante Datei

```sh
/etc/vconsole.conf
```

Allerdings gehen spätestens hier die Distributionen weit auseinander.

