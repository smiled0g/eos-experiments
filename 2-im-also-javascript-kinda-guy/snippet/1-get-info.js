/** snippet/1-get-info.js */

const EOS = require("eosjs");

const privateKey = "5KBHsnT9j6agoAnpMowTLhAYn6pDj8NYXP8kRENCwfi86Js217w";
const eos = EOS({ keyProvider: privateKey });

async function printInfo() {
  const info = await eos.getInfo({});
  console.log(info);
}

//printInfo();
