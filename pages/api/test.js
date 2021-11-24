// export default async function handler(req, res) {
//     return res.json({ message: "Hello World" });
// }

const { createWatcher } = require('@makerdao/multicall');
const { tags, config, labels } = require('./config');
// const express = require("express");
// const router = express.Router();
// const app = express();

require('dotenv').config();

// const PORT = process.env.PORT || "NONE";

let watcher;

async function run() {
    console.log("> initializing");
    watcher = createWatcher(tags, config);
    await watcher.start();
    console.log("> initialized");
}

run()

export default async function handler(req, res) {
    let { type } = req.query;
    if (isValidValue(type)) {
        console.log("> requesting", type);
        let result = {};
        watcher.subscribe(update => {
            //console.log(`Update: ${update.type} = ${update.value}`);
            if (type === 'ALL' || type == 'CIRCULATING_SUPPLY') {
                result[update.type] = update.value;
                if (Object.keys(result).length == labels.length) {
                    result['CIRCULATING_SUPPLY'] = calculateCirculatingSupply(result);
                    if (type == 'CIRCULATING_SUPPLY')
                        return res.status(200).json(result['CIRCULATING_SUPPLY']);
                    return res.status(200).json(result);
                }
            } else if (update.type === type)
                return res.status(200).json(update.value);
        });
    } else
        return res.status(400).send({ err: "'" + type + "' is not a valid value type" });
}

function isValidValue(type) {
    for (let label of labels)
        if (label === type)
            return true;
    return type === 'ALL' || type === 'CIRCULATING_SUPPLY';
}

function calculateCirculatingSupply(data) {
    let lockedSupply = data['VESTING'] + data['TREASURY'] + data['MULTISIG'] + data['LP'] + data['OLD_SALE'] + data['NEW_SALE'];
    return data['TOTAL_SUPPLY'] - lockedSupply;
}
