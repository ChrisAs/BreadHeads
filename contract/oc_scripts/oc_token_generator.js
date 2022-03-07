const { keccak256, toBuffer, ecsign, bufferToHex } = require("ethereumjs-utils");
const { ethers } = require('ethers');
const { toChecksumAddress } = require('ethereum-checksum-address')


const salt = 2 // change this
let presaleAddresses = [
    "0x9335488Ea67fD852911F5703513dC0b5338D905f",
    "0xb503C8A636f268E10657dCfF0E21Fb6cdDF804f7",
    "0xC176A81c8C5BF291eD0df80C5bCf7Cb0a9625F22",
    "0x470825BDA5a257F433d202385B5Fb01276CC1c46",
    "0x0916C8A550930D8eBf2A16645CCFd020D0A388F4",
    "0xA43870C6CDEe0EA881A96b6c5086221Ed84CaD80",
    "0x6884c80CEE2401C661589Cb06bE999Eea4fDE866",
    "0x9c07dcAfA88146caf790c75E8d6a47defC16370f"
]

let presaleAddressesC = []
for (let i = 0; i < presaleAddresses.length; i++) {
    presaleAddressesC.push(toChecksumAddress(presaleAddresses[i]))
  }

let tokens = {};
signerPvtKey = new Buffer.from("", "hex");
console.log(presaleAddresses.length);
console.log(presaleAddressesC.length);
for (let i = 0; i < presaleAddressesC.length; i++) {
    const userAddress = ethers.utils.getAddress(presaleAddressesC[i]);
    console.log("userAddress is", userAddress)
    const hashBuffer = genBufferFromHash(
        ["uint256", "address"],
        [salt, userAddress]
    );
    const token = createToken(hashBuffer, signerPvtKey);
    console.log("token is:", token)
    tokens[userAddress] = {token: serializeToken(token)};
    
}
console.log("Printing tokens: ", tokens)

function createToken(hash, signerPvtKey) {
    console.log("Creating token", ecsign(hash, signerPvtKey))
    return ecsign(hash, signerPvtKey);
}
function genBufferFromHash(typesArray, valueArray) {
    console.log("Generating Buffer from Hash")
    return keccak256(
        toBuffer(ethers.utils.defaultAbiCoder.encode(typesArray,valueArray))
        );
}
function serializeToken(token) {
    console.log("Serializing token")
    return {
    r: bufferToHex(token.r),
    s: bufferToHex(token.s),
    v: token.v,
    };
}
