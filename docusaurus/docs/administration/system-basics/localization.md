---
sidebar_position: 1
title: Lokalisierung
---

Localization (`l10n`) und Internationalization (`i18n`) sind die beiden Begriffe, die
natürlich hauptsächlich im Desktop-Bereich ihre Relevanz haben.

:::warning
In Saalfeld/Saale gibt es kein Internet. Ich habe alle folgenden Informationen quasi
offline erstellt bzw. angepasst.
:::

Die Sprach-Unterstützung in Linux-Distributionen ist in Teilen recht unterschiedlich geregelt.
Zumindest was das Tooling (bereitgestellte Hilfsprogramme der Distribution) betrifft.

In `systemd`-Distributionen ist natürlich einiges vereinheitlicht worden.

## Lokalisierungen einrichten

Bevor überhaupt mit Sprachen jongliert werden kann, müssen diese im System eingerichtet
werden.

### Relevante Datei

```sh
/etc/locale.gen
```

In dieser Datei werden alle gewünschten Sprachen festgelegt. Dazu einfach den `#`-Kommentar
vor der jeweiligen Sprache/Lokalisierung entfernen. Theoretisch muss heute nur noch
die UTF-8 - Variante freigeschaltet werden, praktisch mache ich zumindest auch noch
die anderen älteren (falls vorhanden).

### Relevantes Kommand

```sh
locale-gen
```

Damit werden die Lokalisierungen erzeugt.

Mit dem Kommando `locale -a` kann dieses überprüft werden.

:::warning

Unter RHEL müssen die Sprachpakete extra installiert werden:

```sh
dnf install glibc-all-langpacks
```

:::

## Die Variablen

Allen Linux-Systemen gemein ist, dass es eine Reihe von Umgebungsvariablen gibt zur
Anpassung:

```sh
LANG=
LANGUAGE=
LC_ADDRESS=
LC_COLLATE=
LC_CTYPE=
LC_IDENTIFICATION=
LC_MEASUREMENT=
LC_MESSAGES=
LC_MONETARY=
LC_NAME=
LC_NUMERIC=
LC_PAPER=
LC_TELEPHONE=
LC_TIME=

# Und dazu kommt noch
LC_ALL=
```

Diese können auf eine der installierten Lokalisierungen (siehe Abschnitt oben) gesetzt
werden. Zum Beispiel: `LANG=de_DE.UTF-8`.

Die `LANG`-Variable setzt alle anderen Variablen mit - es sei denn eine der `LC_`-Variablen
passt einen Bereich an.

Die `LC_ALL`-Variable sollte nur zu Debug-Zwecken eingesetzt werden - sie überschreibt
alle obigen Werte. Bis auf die `LANGUAGE`-Variable. Diese wurde vom GNU-Projekt hinzugefügt
und definiert Fallback-Sprachen für einige Programme.

Auf meinem Laptop zum Beispiel sehen die Settings so aus:

```sh
LANG=en_US.UTF-8
LC_NUMERIC=de_DE.UTF-8
LC_TIME=de_DE.UTF-8
LC_MONETARY=de_DE.UTF-8
LC_PAPER=de_DE.UTF-8
LC_MEASUREMENT=de_DE.UTF-8
```

Das Kommando `locale` ohne weitere Optionen zeigt alle aktuell gültigen Einstellungen an.
Interessant ist auch manchmal der Abruf der Formatierungen über zum Beispiel

```sh
locale -k LC_TIME

# und zum Ausprobieren
LC_TIME=en_US.UTF-8 locale -k LC_TIME
# oder halt
LC_ALL=en_US.UTF-8 locale -k LC_TIME
```

### Relevante Datei

```sh
/etc/locale.conf
```

:::warning

Unter Debian heißt die Datei immer noch `/etc/default/locale`.

:::

In dieser Datei werden die systemweiten Defaults festgelegt. Im Zusammenhang mit
dem SSH-Zugang könnte es übrigens Sinn machen, die LANG-Variable dort leer zu setzen.
Und alle anderen weglassen. Dann gilt der POSIX-Standard. In der SSH-Konfiguration
dann einstellen, dass vorhandene Variablen des SSH-Clients durchgereicht werden.

Benutzer können die Anpassungen zum Beispiel in ihrer `.profile`-Datei ablegen und
Zeilen anhängen wie

```sh
export LANG=de_DE.UTF-8
# usw
```

Je nach Distribution greift auch `$XDG_CONFIG_HOME/locale.conf` 
bzw. `~/.config/locale.conf`.

## Systemd: localectl

Bis auf die Erstellung/Bereitstellung neuer Lokalisierungen können die
systemweiten Einstellungen mit dem Kommando `localectl` gemacht werden.

