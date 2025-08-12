const { con } = require('../connect.js');
const Toons = require('../models/toons.js');

const db = con.db("dand-e");
const toon = db.collection("toons");

// CREATE

async function createToon(data) {
    try {
        await toon.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }
}

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
        const doc = await toon.findOne(data);

        return new Toons(doc);
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