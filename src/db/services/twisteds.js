const { con } = require('../connect.js');
const Twisteds = require('../models/twisteds.js');

const db = con.db("dand-e");
const twisted = db.collection("twisteds");

// CREATE

async function createTwisted(data) {
    try {
        await twisted.insertOne(data);
        return true;
    } catch (e) {
        console.error(e);
    }
}

// READ

async function doesTwistedExist(data) {
    try {
        if (await twisted.findOne(data)) return true;

        return false;
    }
    catch (e) {
        console.error(e);
    }
}

async function viewTwisted(data) {
    try {
        const doc = await twisted.findOne(data);

        return new Twisteds(doc);
    }
    catch (e) {
        console.error(e);
    }
}

async function getTwistedId(data) {
    try {
        const doc = await twisted.findOne(data);

        return doc.id;
    }
    catch (e) {
        console.error(e);
    }
}

// UPDATE

async function updateTwisted(data, newData) {
    try {
        // { $set: { ...keys: ...values } } will need to be in the command
        await twisted.updateOne(data, newData);
        return true;
    }
    catch (e) {
        console.error(e);
    
    }
}

// DELETE

async function deleteTwisted(data) {
    try {
        await twisted.deleteOne(data);
        return true;
    }
    catch (e) {
        console.error(e);
    }
}

module.exports = { createTwisted, doesTwistedExist, viewTwisted, getTwistedId, updateTwisted, deleteTwisted };