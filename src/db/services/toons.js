require('@dotenvx/dotenvx').config();

const { MongoClient } = require('mongodb');
const { UUID } = require('bson');

const Toons = require('../models/toons.js');

const uri = process.env.CONNECTION_STRING;

const con = new MongoClient(uri);

// CREATE

async function create(data) {
    try {
        const db = con.db("dand-e");
        const col = db.collection("toons");

        const result = await col.insertOne(data);

        return `Toon created. ID: ${data.name}`;
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await con.close();
    }
}

// READ

async function find(data) {
    try {
        const db = con.db("dand-e");
        const col = db.collection("toons");

        if (await col.findOne(data)) return true;

        return false;
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await con.close();
    }
}

async function view(data) {
    try {
        const db = con.db("dand-e");
        const col = db.collection("toons");

        const doc = await col.findOne(data);
        const values = JSON.stringify(doc, null, 4);

        return `\`\`\`${values}\`\`\``;
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await con.close();
    }
}

module.exports = async function id(data) {
    try {
        const db = con.db("dand-e");
        const col = db.collection("toons");

        const doc = await col.findOne(data);
        
        return doc.id;
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await con.close();
    }
}

// UPDATE

module.exports = async function update(data, newData) {
    try {
        const db = con.db("dand-e");
        const col = db.collection("toons");

        // { $set: { ...keys: ...values } } will need to be in the command
        await col.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await con.close();
    }
}

// DELETE

module.exports = async function remove(data) {
    try {
        const db = con.db("dand-e");
        const col = db.collection("toons");

        await col.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await con.close();
    }
}

module.exports = { create, view, find };