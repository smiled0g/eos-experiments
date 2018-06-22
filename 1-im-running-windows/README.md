# Chapter #1: I'm Running Windows 🙀

Despite being so popular among average users and games, Windows is perhaps the worst OS for developers. Every single time a new open source software is built, it'd be for unix-like systems. But hey, I'm running Windows 10 and I'm not gonna change it. So what do I do?

Luckily for us, the EOS developer team is sympathetic enough to ship the entire package with docker. Great job guys! All we need are [Docker](https://store.docker.com/search?type=edition&offering=community) and a couple of commands:

```sh
$> docker pull eosio/eos-dev

$> mkdir container container\work container\data container\config

$> docker run --rm --name eosio -d -p 8888:8888 -p 9876:9876 -v %cd%/container/work:/work -v %cd%/container/data:/mnt/dev/data -v %cd%/container/config:/mnt/dev/config eosio/eos-dev  /bin/bash -c "nodeos -e -p eosio --plugin eosio::wallet_api_plugin --plugin eosio::wallet_plugin --plugin eosio::producer_plugin --plugin eosio::history_plugin --plugin eosio::chain_api_plugin --plugin eosio::history_api_plugin --plugin eosio::http_plugin -d /mnt/dev/data --config-dir /mnt/dev/config --http-server-address=0.0.0.0:8888 --access-control-allow-origin=* --contracts-console"
```

> I took the command from [EOS Docker Quickstart](https://developers.eos.io/eosio-nodeos/docs/docker-quickstart) and modify it for windows. If you encounter an error, please check [this github issue](https://github.com/docker/for-win/issues/1038).

With the commands above, here're what we have accomplished:

1.  Create folder `container`, which we will map to directories in EOS docker in step 2.
2.  Run the `eosio/eos-dev` container with these options
    - Tunnel port 8888 and 9876 from docker to host machine
    - Map host's `container\work` to docker's `/work`
    - Map host's `container\data` to docker's `/mnt/dev/data`
    - Map host's `container\config` to docker's `/mnt/dev/config`
    - Runs `nodeos -e -p ...` in docker with `/bin/bash`

Now let's verify that we have the node running by visiting `http://localhost:8888/v1/chain/get_info`. It'd probably says something like this:

```json
{
  "server_version": "c9b7a247",
  "chain_id":
    "cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f",
  "head_block_num": 45,
  "last_irreversible_block_num": 44,
  "last_irreversible_block_id":
    "0000002c790d940081461747558269b1e5d73c2dfcae529497cf78b6c73faa89",
  "head_block_id":
    "0000002d091f426b27c64df8a5893248a3d6fc4a17e8643215fddbfb3720589c",
  "head_block_time": "2018-06-22T18:16:55.000",
  "head_block_producer": "eosio",
  "virtual_block_cpu_limit": 208980,
  "virtual_block_net_limit": 1095744,
  "block_cpu_limit": 199900,
  "block_net_limit": 1048576
}
```

**Congratualtions!** You are now having a perfect play ground for your (and my) next few days 🤪
