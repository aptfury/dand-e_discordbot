require('@dotenvx/dotenvx').config();

const { MongClient } = require('mongodb');
const { UUID } = require('bson');

const Twisteds = require('../models/twisteds.js');

const uri = process.env.CONNECTION_STRING;

const con = new MongoClient(uri);

// CREATE

module.exports = async function create(data) {
    try {
        const db = con.db("dand-e");
        const col = db.collection("twisteds");

        const result = await col.insertOne(data);

        return `Twisted created. ID: ${result.insertedId}`;
    }
    catch (e) {
        console.error(e);
    }
    finally {
        await con.close();
    }
}

// READ

module.exports = async function find(data) {
    try {
        const db = con.db("dand-e");
        const col = db.collection("twisteds");

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

module.exports = async function view(data) {
    try {
        const db = con.db("dand-e");
        const col = db.collection("twisteds");

        const doc = await col.findOne(data);
        const values = JSON.stringify(doc, null, 4);

        return new Toons(...values);
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
        const col = db.collection("twisteds");

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
        const col = db.collection("twisteds");

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
        const col = db.collection("twisteds");

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