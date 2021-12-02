import { createWatcher } from '@makerdao/multicall';
const { tags, config, tags_polygon, config_polygon, labels } = require('./config');

let watcher;
let watcher_polygon;

function run() {
    console.log("> initializing");
    watcher = createWatcher(tags, config);
    watcher.start();
    watcher_polygon = createWatcher(tags_polygon, config_polygon);
    watcher_polygon.start();
    console.log("> initialized");
}

run()

export default function handler(req, res) {
    let { type } = req.query;
    if (isValidValue(type)) {
        console.log("> requesting", type);
        let result = {};
        watcher.subscribe(update => {
            watcher_polygon.subscribe(update_polygon => {
                console.log(`Update: ${update.type} = ${update.value}`);
                console.log(`Update_polygon: ${update_polygon.type} = ${update_polygon.value}`);
                if (type === 'ALL' || type == 'CIRCULATING_SUPPLY') {
                    result[update.type] = update.value;
                    if (Object.keys(result).length == labels.length) {
                        if (type == 'CIRCULATING_SUPPLY') {
                            result['CIRCULATING_SUPPLY'] = calculateCirculatingSupply(result);
                            return res.status(200).json(result['CIRCULATING_SUPPLY']);
                        }
                    }
                    return res.status(200).json(result);
                } else if (update.type === type) {
                    return res.status(200).json(update.value);
                } else if (update_polygon.type === type) 
                    return res.status(200).json(update_polygon.value);
            })
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
    let lockedSupply = data['VESTING'] + data['TREASURY'] + data['MULTISIG'] + data['LP'] + data['OLD_SALE'] + data['NEW_SALE'] + data['POLYGON_STAKING_BALANCE'] +
                       data['POLYGON_TREASURY'] + data['POLYGON_LP'] - data['POLYGON_STAKING_SUPPLY'];
    return data['TOTAL_SUPPLY'] - lockedSupply;
}
