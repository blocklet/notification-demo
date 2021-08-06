# Notification Demo Blocklet

Blocklet that demos various kinds of notifications blocklet can send to DID Wallet user.

## Install on my ABT Node

[![Install on my ABT Node](https://raw.githubusercontent.com/blocklet/development-guide/main/assets/install_on_abtnode.svg)](https://install.arcblock.io/?action=blocklet-install&meta_url=https%3A%2F%2Fgithub.com%2Fblocklet%2Fnotification-demo%2Freleases%2Fdownload%2F0.5.1%2Fblocklet.json)

## Run and debug in local

```shell
yarn global add @abtnode/cli
git clone git@github.com:blocklet/notification-demo.git
cd notification-demo
yarn
abtnode init -f --mode debug
abtnode start
blocklet dev
```

## License

The code is licensed under the Apache 2.0 license found in the
[LICENSE](LICENSE) file.
