---
sidebar_position: 3
---

# Entfernte Anmeldung

Die Anmeldung an entfernten (*Remote*-) Systemen wird heutzutage in der Regel über einen
`ssh`-Client durchgeführt. Dieser ist mittlerweile :grin: auch in der Windows-Welt 
standardmäßig als Programm installiert und wird über den Befehl

```sh
ssh username@host
```

gestartet. Username und Host-Name sind zu ersetzen durch reelle Benutzernamen und natürlich
IP-Adressen oder im DNS registrierte Domain-Namen (bzw. Host-Namen).

:::info

Normalerweise ist der `root`-Login über eine SSH-Verbindung ebenso wie der grafische 
`root`-Login gesperrt.

:::

Natürlich muss auf dem Ziel-System, in das man einloggen will, ein entsprechender
SSH-Dienst laufen.
