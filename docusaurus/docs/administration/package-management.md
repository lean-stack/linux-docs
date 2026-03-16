---
sidebar_position: 4
title: Paketverwaltung
---

# Paketverwaltung

Die Paketverwaltung in Linux-Distributionen ist das Herzstück der Softwareverwaltung.
Im Gegensatz zu anderen Betriebssystemen erhält hier nicht nur das System selbst
Updates und natürlich auch neue Features - sondern auch die meißten Anwendungsprogramme
des täglichen Gebrauchs.

:::info

Zur Installation von neuer Software werden also zunächst die Paketquellen der jeweiligen
Distribution geprüft, ob diese die gewünschte Software bereitstellen. Es ist also oft
nicht der Besuch der Homepage der Software notwendig und dort die Suche nach dem
Download-Button.

:::

An der Stelle nochmal der Hinweis, dass der Original-Autor einer Software (Upstream) in der
Regel nicht dem Paketierer in Person entspricht. Das bedeutet das für ein beliebiges
Software-Produkt in jeder Distribution ein Paketierer (Package Maintainer) dafür
verantwortlich ist, dass Original-Produkt anzupassen, zu kompilieren und in die
jeweilige eigene Distribution einzupassen.

## Pakete

Ein Paket (oder besser Package) ist bei den meißten Distributionen ein gepacktes Archiv
aus allen Dateien, die zur Software gehören, sowie Metdadaten (Abhängigkeiten und
Installationsanweisungen). Dabei sind die ausführbaren Teile - sofern
notwendig - schon kompiliert und liegen in Binär-Form vor. Außerdem enthält das Archiv
alle Dateien in einem Teilbaum, der genau den Ort widerspiegelt, an dem es im finalen
System des Nutzers landet.

:::warning

Ein Package ist also in der Regel im höchsten Maße abhängig von der Distribution des
Nutzers. Ein Debian-Package ist selten ohne weiteres in einer RedHat-Distribution
verwendbar. Die Pfade passen schon alleine meißt nicht, außerdem werden vielleicht
Abhängigkeiten (das Paket ist vielleicht von anderer Software abhängig) nicht erfüllt.
Konfigurations-Dateien unterscheiden sich auch durchaus in Distributionen.

Und zuletzt muss die Rechnerarchitektur der kompilierten Teile des Archivs natürlich
auch passen (AMD x86/64 oder ARM oder ...)

:::

Die beiden gängigsten Paketformate sind das `.deb`-Package in der Debian-Welt und
das `.rpm`-Package. Letzteres stammt dem früheren Namen nach (RedHat Package Manager)
aus der RedHat-Welt. Da aber auch zum Beispiel die SUSE-Distributionen auf dieses
Format gesetzt haben und es einen gewissen Grad der Standardisierung erfahren hat,
ist der Name jetzt offiziell ein rekursives Akronym: *RPM Package Manager*.

## Repositories

Damit der Nutzer nicht selbständig auf die Suche nach den offiziellen Paketen gehen
muss, werden diese in Paketquellen bereitgestellt. Prinzipiell sind das HTTP-Server
auf denen die Liste aller Pakete gepflegt wird und diese zum Download bereitgestellt
werden.

Wichtig ist das Distributionen nicht nur verschiedene Rechner-Architekturen unterstützen,
sondern durchaus auch verschiedene Versionen/Releases. Ein Package kann zum Beispiel
für Debian 11 anders aussehen als für Debian 12.

Falls Updates im Upstream erfolgen, werden dann auch neue Versionen dieser Pakete
in den Repositories veröffentlicht.

## Tooling

In jeder Distribution werden Tools bereitgestellt, mit der die Administratoren
auf dedizierte Weise diese Repositories und die darin bereitgestellten Packages
bzw. Updates pflegen und orchestrieren. Der Grad der Abstraktion und natürlich die
Tools selbst variieren dabei sehr stark zwischen den Distributionen.

### SUSE-Welt

Für den Administrator bietet sich hier der Einsatz von YaST an, das allerdings auch
nur eine Steuerung des zugrunde liegenden Pakettools ist (aktuell: `zypper`).

Relevante Dateien und Ordner: `/etc/zypp/zypp[er].conf` bzw. `/etc/zypp/repos.d`

### RedHat/Fedora-Welt

Aktuell heißt das Pakettool `dnf`. Die Generation davor hieß `yum`. Der Übergang
wurde aber sehr fließend gestaltet, so dass die `yum`-Befehle immer noch funktionieren.

Relevante Dateien und Ordner: `/etc/yum.conf` bzw. `/etc/yum.repos.d`

### Debian-Welt

In Debian waren die Pakettools ursprünglich eine ganze Sammlung von Tools (`apt-get`,
`apt-search`, `apt-upgrade`, ...). Diese existieren weiterhin. Für die meißten
Anwendungsfälle reicht aber das vereinfachte modernere *Frontend* `apt`.

Relevante Datein und Ordner: `/etc/apt/sources.list` bzw. `/etc/apt/sources.list.d`

### Rest der Welt

Neben den drei oberen *Standard*-Distributionszweigen gibt es in weitere
Paketmanager: zum Beispiel `pacman` aus der ArchLinux-Welt. Oder in der Slackware
Distribution die `pkgtools`-Suite oder das *etwas* modernere `slackpgk`. Beide Toolsets
aus der Slackware-Welt bieten aber zum Beispiel keine automatische Auflösung von
Abhängigkeiten.

## Standard-Arbeitsschritte

Folgend ein kleiner Einblick in die üblichen Arbeitsschritte eines Administrators
der eine Distribution aktuell halten will, aber auch neue Software einspielen will.

### Aktualisierung der Paketquellen

In den Repositories liegen Listen mit allen installierbaren Packages. Die Listen
werden online nach jedem Update eines Paketes erneuert und müssen deshalb mit den
lokal gespeicherten Listen abgeglichen werden.

`apt update` bzw. `dnf makecache` bzw. `zypper refresh`

Dies bedeutet **nicht** das die eigentliche Software schon aktualisiert ist, sondern
nur aktuellste Informationen über die verfügbare Software ist jetzt auf dem lokalen
System.

### Aktualisierung von Packages

Die eigentlichen Software-Updates werden explizit eingespielt. Entweder Paket für
Paket - oder in einem Rutsch. Abhängigkeiten werden natürlich in beiden Fällen auch
mit aktualisiert.

`apt upgrade` bzw. `dnf update` bzw. `zypper update`

### Suche nach einem Paket

Die Paket-Quellen lassen sich nach Software durchsuchen (dem Namen nach bzw. Stichworte
in der Paketbeschreibung). Die Ausgabe kann durchauch etwas unübersichtlich sein.
Grafische Tools helfen hier ein wenig.

`apt search <term>` bzw. `dnf search <term>` bzw. `zypper search <term>`

### Installation von Software

Die eigentliche Installation der Software bringt natürlich auch bei all diesen
Paketmanagern automatisch Abhängigkeiten mit und macht auch Vorschläge,
was zusätzlich relevant sein könnte.

`apt install <package-name>` bzw. `dnf install <package-name>` 
bzw. `zypper install <package-name>`
