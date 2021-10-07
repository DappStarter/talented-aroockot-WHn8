require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain comic hunt kitchen suspect team'; 
let testAccounts = [
"0xd0517e7558fb8c9ce6ecfbf923619099c6d5c2305ef2e83364246f8d81c196a2",
"0x89f6a499784ef41fd38fd517ec98bcabcdf8181a7b954b1b9f7341cf78556556",
"0x226472103088509185af57839aba6bf46b9b601e239b64b7f43d544557869475",
"0xa259f9b9a92c0729d527e33603ecd07af1f045ea22434bd271ec50c8814441a2",
"0x014a5277788133326f2ab7d131755cd0b97158bec836af18d84cd289feef2e5d",
"0x1ff122d3fa593075a46e56418008bff64c3a454082cbe69c8f16a433ec411f4e",
"0x28835d62450395cdf03adfd9f9cc4ab56eec36c38034548e22d6c74e8b536f4d",
"0xb4a6401ae726172a0122deb50ce05d8b161d9e6b3b37a4650e8f5b1fbd831321",
"0x888c4a76d3709462e32884c88739deb00f7d0c7d4b5d49bdcff3c62d87b36744",
"0x3133b998a5850e7d7203f61c1bf59ce664874c8df25b2c3eac99689e638315d2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

