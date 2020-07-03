require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth maze column gesture open flower gauge'; 
let testAccounts = [
"0xb2317cd28ea20cdf87e43219c3c3bc9340e4b99fd34e4f0b72d7541b92ad8ca6",
"0x92db6da0d0a878bb4857bdbbf8532c233466b825f56de75c2c555cf7d297af46",
"0x9c7123c8a74c0a5028793225dd37f9b02e6c3ea4f79096fec21096c9d7f925ef",
"0xa55f49b002b5ff785927c20d9a041c16ff441d7e5e437f8e568f22905f5dd51f",
"0x39d8dbee850ba0aa291a68ee96927c410e0790d418f0610cf19c54899d2f1eac",
"0x9aafc457a769db53f8b3ad23681e8b7d21bb04c7158f794e41fbe361ce8b839d",
"0xb38ed2b2b5a7916b41127b5baf77e6ae65bb672e435eba23ab245197359e3065",
"0xf83831c22c1df7f08cecc69e6111cb395eacf98da572c5ac680ab609eb558246",
"0x79caa4001c60f3d4cfaa19db1979d1e8c094deef693e17b6f1cd272c56e6c5de",
"0x8a35cd4fa736d0253815d2df5c536a96715e1b201c7dd28a95ea12516281fafe"
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
            version: '^0.5.11'
        }
    }
};
