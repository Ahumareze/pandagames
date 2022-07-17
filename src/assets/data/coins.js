const bitcoin = require('../images/currencies/bitcoin.png');
const etherum = require('../images/currencies/Etherum.png');
const ltc = require('../images/currencies/ltc.png');
const luna = require('../images/currencies/luna.png');
const usdt = require('../images/currencies/usdt.png');
const solana = require('../images/currencies/solana.png');
const busd = require('../images/currencies/busd.png');

const coins = [
    {
        name: 'Bitcoin',
        image: bitcoin.default,
        network: [
            'BTC'
        ],
        address: '1LsTEcBefxUQRaStf1xmch2GsN8WLTyLeG'
    },
    // {
    //     name: 'Ethereum',
    //     image: etherum.default,
    //     network: [
    //         'ERC (20)'
    //     ],
    //     address: '0xA3340C3391c3dAB7a54072361FB9291e4459B9Ec'
    // },
    {
        name: 'BUSD',
        image: busd.default,
        network: [
            'BEP (20)'
        ],
        address: '0xdccf5266a574125939df7de68230f1fb28dab873'
    },
    // {
    //     name: 'Luna',
    //     image: luna.default,
    //     network: [
    //         'LUN'
    //     ],
    //     address: '0xA3340C3391c3dAB7a54072361FB9291e4459B9Ec'
    // },
    {
        name: 'USDT',
        image: usdt.default,
        network: [
            'ERC (20)',
        ],
        address: 'TGovvGNEpuWcSrvr8kTPGnqdkq213nuKws'
    },
    // {
    //     name: 'Solana',
    //     image: solana.default,
    //     network: [
    //         'SOL'
    //     ],
    //     address: '0xA3340C3391c3dAB7a54072361FB9291e4459B9Ec'
    // },
];

export default coins