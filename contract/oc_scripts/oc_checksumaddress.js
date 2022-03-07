/* Script to convert wallet address to Checksumed Addresses
*/
const { toChecksumAddress } = require('ethereum-checksum-address');

addresses = []; // Add addresses here
updated_addresses = [];
var arrayLength = addresses.length;
for (var i = 0; i < arrayLength; i++) {
    updated_addresses.push(toChecksumAddress(addresses[i]));
}
console.log(...updated_addresses);
