const MGH = process.env.MGH || "NONE";
const MGH_POLYGON = process.env.MGH_POLYGON || "NONE";

const VESTING = process.env.VESTING || "NONE";
const TREASURY = process.env.TREASURY || "NONE";
const MULTISIG = process.env.MULTISIG || "NONE";
const LP = process.env.LP || "NONE";
const OLD_SALE = process.env.OLD_SALE || "NONE";
const NEW_SALE = process.env.NEW_SALE || "NONE";
const POLYGON_SUPPLY = process.env.POLYGON_SUPPLY || "NONE";
const POLYGON_LP = process.env.POLYGON_LP || "NONE";
const POLYGON_LP_DATA = process.env.POLYGON_DATA || "NONE";
const POLYGON_TREASURY = process.env.POLYGON_TREASURY || "NONE";
const POLYGON_STAKING = process.env.POLYGON_STAKING || "NONE";

console.log("> MGH:", MGH);
console.log("> VESTING:", VESTING);
console.log("> TREASURY:", TREASURY);
console.log("> MULTISIG:", MULTISIG);
console.log("> LP:", LP);
console.log("> OLD_SALE:", OLD_SALE);
console.log("> NEW_SALE:", NEW_SALE);
console.log("> POLYGON_SUPPLY:", POLYGON_SUPPLY);
console.log("> POLYGON_LP:", POLYGON_LP);
console.log("> POLYGON_TREASURY:", POLYGON_TREASURY);


module.exports = {
    config: {
        rpcUrl: 'https://mainnet.infura.io/v3/235efa9d59c34db8b7f383496c242855',
        multicallAddress: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
        interval: 1
    }, tags: [
        {
            target: MGH,
            call: ['totalSupply()(uint256)'],
            returns: [['TOTAL_SUPPLY', val => val / 10 ** 18]]
        }, {
            target: MGH,
            call: ['balanceOf(address)(uint256)', VESTING],
            returns: [['VESTING', val => val / 10 ** 18]]
        }, {
            target: MGH,
            call: ['balanceOf(address)(uint256)', TREASURY],
            returns: [['TREASURY', val => val / 10 ** 18]]
        }, {
            target: MGH,
            call: ['balanceOf(address)(uint256)', MULTISIG],
            returns: [['MULTISIG', val => val / 10 ** 18]]
        }, {
            target: MGH,
            call: ['balanceOf(address)(uint256)', LP],
            returns: [['LP', val => val / 10 ** 18]]
        }, {
            target: MGH,
            call: ['balanceOf(address)(uint256)', OLD_SALE],
            returns: [['OLD_SALE', val => val / 10 ** 18]]
        }, {
            target: MGH,
            call: ['balanceOf(address)(uint256)', NEW_SALE],
            returns: [['NEW_SALE', val => val / 10 ** 18]]
        }, {
            target: MGH,
            call: ['balanceOf(address)(uint256)', POLYGON_SUPPLY],
            returns: [['POLYGON_SUPPLY', val => val / 10 ** 18]]
        }
    ], labels: [
        'TOTAL_SUPPLY', 'VESTING', 'TREASURY', 'MULTISIG', 'LP', 'OLD_SALE', 'NEW_SALE', 'POLYGON_SUPPLY',
        'POLYGON_LP', 'POLYGON_TREASURY', 'POLYGON_STAKING_BALANCE', 'POLYGON_STAKING_SUPPLY'
    ],
    
    config_polygon: {
        rpcUrl: 'https://polygon-mainnet.infura.io/v3/02228c7e18c84384bdcc48a528c20119',
        multicallAddress: '0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507',
        interval: 1
    },
    tags_polygon: [
        {
            target: MGH_POLYGON,
            call: ['totalSupply()(uint256)'],
            returns: [['TOTAL_SUPPLY', val => val / 10 ** 18]]
        }, {
            target: MGH_POLYGON,
            call: ['balanceOf(address)(uint256)', POLYGON_LP],
            returns: [['POLYGON_LP', val => val / 10 ** 18]]
        }, {
            target: MGH_POLYGON,
            call: ['balanceOf(address)(uint256)', POLYGON_TREASURY],
            returns: [['POLYGON_TREASURY', val => val / 10 ** 18]]
        },/*  {
            target: MGH_POLYGON,
            call: ['balanceOf(address)(uint256)', POLYGON_LP_DATA],
            returns: [['POLYGON_LP_DATA', val => val / 10 ** 18]]
        },  */{
            target: MGH_POLYGON,
            call: ['balanceOf(address)(uint256)', POLYGON_STAKING],
            returns: [['POLYGON_STAKING_BALANCE', val => val / 10 ** 18]]
        }, {
            target: POLYGON_STAKING,
            call: ['totalSupply()(uint256)'],
            returns: [['POLYGON_STAKING_SUPPLY', val => val / 10 ** 18]]
        }
    ]
}
