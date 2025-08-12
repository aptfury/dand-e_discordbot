require('@dotenvx/dotenvx').config();

const { MongoClient } = require('mongodb');
const { UUID } = require('bson');

const Toons = require('../models/toons.js');

const uri = process.env.CONNECTION_STRING;

const con = new MongoClient(uri, {
    pkFactory: {
        createPk() {
            return new UUID().toBinary();
        }
    },
    connectTimeoutMS: 10000
});

// CREATE

/**
 * 
 * @param {Toons} data 
 */
module.exports = async function addToon(data) {
    try {
        const db = con.db("dand-e");
        const col = db.collection("toons");

        const doc = {
            name: data.name,
            gender: data.gender || null,
            pronouns: data.pronouns || null,
            stats: data.stats || null
        }

        const result = await col.insertOne(doc);

        return true;
    } finally {
        await con.close();
    }
}

/* async function createToon(data) {
    try {
        const created = await toon.insertOne(data);
        return JSON.stringify(created, null, 4);
    } catch (e) {
        console.error(e);
    }
} */

// READ

async function doesToonExist(data) {
    try {
        if (await toon.findOne(data)) return true;

        return false;
    }
    catch (e) {
        console.error(e);
    }
}

async function viewToon(data) {
    try {
        const doc = await toon.findOne(data)

        return new Toons(JSON.stringify(doc, null, 4));
    }
    catch (e) {
        console.error(e);
    }
}

async function getToonId(data) {
    try {
        const doc = await toon.findOne(data);

        return doc.id;
    }
    catch (e) {
        console.error(e);
    }
}

// UPDATE

async function updateToon(data, newData) {
    try {
        // { $set: { ...keys: ...values } } will need to be in the command
        await toon.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    
    }
}

// DELETE

async function deleteToon(data) {
    try {
        await toon.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

module.exports = { createToon, doesToonExist, viewToon, getToonId, updateToon, deleteToon };