# Chapter #2: I'm Also Javascript-kinda-guy

Javascript. Ah, what at beautiful language. The language itself isn't that powerful comparing to others. However, it's super versatile and works pretty much everywhere. So with the EOS, I've love to be able to work on it with javascript. Let's get right into it.

Here's how we're gonna start. EOS team has provided [EOSjs library](https://github.com/EOSIO/eosjs) which exposes nice and easy-to-use interface to EOS node's HTTP protocol. It does not runs local EOS docker for you. For the sake of everyone's conveniences, I have created an [EOS]()

> You may notice a `package.json` in this folder. You can run the code we discuss here with the command `npm install` and then `npm start`.

## Running EOS on docker

First, get a private key for the node of our private testnet. This [EOS Key Generation](https://nadejde.github.io/eos-token-sale/) is handy for the task. Then with node.js we can run EOS docker container and connect to it with:

```js
const EOS = require("eosjs");

const privateKey = "5KBHsnT9j6agoAnpMowTLhAYn6pDj8NYXP8kRENCwfi86Js217w";
const eos = EOS({ keyProvider: privateKey });

async function printInfo() {
  const info = await eos.getInfo();
  console.log("Info:", info);
}

printInfo();
```
