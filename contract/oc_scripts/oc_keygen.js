/* Script to generate private and public keys */
const { privateToAddress } = require("ethereumjs-utils");
const { ethers } = require("ethers");
const crypto = require("crypto");
const pvtKey = crypto.randomBytes(32);
console.log("Pvtkey is", pvtKey);
const pvtKeyString = pvtKey.toString("hex");
console.log("PvtkeyString is", pvtKeyString);
const signerAddress = ethers.utils.getAddress(privateToAddress(pvtKey).toString("hex"));
console.log({ signerAddress, pvtKeyString });