---
sidebar_position: 4
title: Systemd
---

## Relevante Links

- [systemd.io - Homepage](https://systemd.io/)
- [Some cheatsheet](https://gist.github.com/mbodo/8f87c96ce11e91f80fbf6175412a2206)

```sh
systemctl status
systemctl list-dependencies 
systemd-analyzer critical-chain --fuzz 1h
systemd-analyze plot > something.svg
systemd-analyze dot | dot -Tpng -o stuff.png
```

