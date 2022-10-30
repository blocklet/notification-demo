# Notification Demo Blocklet

Blocklet that demos various kinds of notifications blocklet can send to DID Wallet user.

## Launch on Blocklet Server

[![Launch on Blocklet Server](https://assets.arcblock.io/icons/launch_on_blocklet_server.svg)](https://install.arcblock.io/?action=blocklet-install&meta_url=https%3A%2F%2Fgithub.com%2Fblocklet%2Fnotification-demo%2Freleases%2Fdownload%2Fv0.6.15%2Fblocklet.json)

## Run and debug in local

```shell
yarn global add @blocklet/cli
git clone git@github.com:blocklet/notification-demo.git
cd notification-demo
yarn
blocklet server init -f --mode debug
blocklet server start
blocklet dev
```

## License

The code is licensed under the Apache 2.0 license found in the
[LICENSE](LICENSE) file.
