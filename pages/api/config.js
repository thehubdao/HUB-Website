require('dotenv').config();

const MGH = process.env.MGH || "NONE";
const VESTING = process.env.VESTING || "NONE";
const TREASURY = process.env.TREASURY || "NONE";
const MULTISIG = process.env.MULTISIG || "NONE";
const LP = process.env.LP || "NONE";
const OLD_SALE = process.env.OLD_SALE || "NONE";
const NEW_SALE = process.env.NEW_SALE || "NONE";

console.log("> MGH:", MGH);
console.log("> VESTING:", VESTING);
console.log("> TREASURY:", TREASURY);
console.log("> MULTISIG:", MULTISIG);
console.log("> LP:", LP);
console.log("> OLD_SALE:", OLD_SALE);
console.log("> NEW_SALE:", NEW_SALE);

module.exports = {
    config: {
        rpcUrl: 'https://mainnet.infura.io/v3/235efa9d59c34db8b7f383496c242855',
        multicallAddress: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441',
        interval: 1000
    }, tags: [
        {
            target: MGH,
            call: ['totalSupply()(uint256)'],
            returns: [['TOTAL_SUPPLY', val => val / 10 ** 18]]
        }, {
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
        }
    ], labels: [
        'TOTAL_SUPPLY', 'VESTING', 'TREASURY', 'MULTISIG', 'LP', 'OLD_SALE', 'NEW_SALE'
    ]
}