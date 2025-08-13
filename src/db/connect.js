require('@dotenvx/dotenvx').config()
const { MongoClient } = require('mongodb');
const { UUID } = require('bson');

// connection string
const uri = process.env.CONNECTION_STRING;

// db instance
const con = new MongoClient(uri, {
    pkFactory: {
        createPk() {
            return new UUID().toBinary();
        }
    },
    connectTimeoutMS: 10000,
});

function getCollection(name) {
    const db = con.db("dand-e");
    return db.collection(`${name}`);
}

async function manageToon(method, collection, data, newData) {
    try {
        const col = getCollection(collection);

        if (method === "add") {
            const result = await col.insertOne(data);

            return `${data.name} has been added to the database.`;
        }

        if (method === "find") {
            if (await col.findOne(data)) return true;

            return false;
        }

        if (method === "view") {
            const doc = await col.findOne(data);
            const values = JSON.stringify(doc, null, 4);

            return `\`\`\`${values}\`\`\``;
        }

        if (method === "id") {
            const doc = await col.findOne(data);
            
            return doc._id;
        }

        if (method === "update") {
            await col.updateOne(data, newData);

            return true;
        }

        if (method === "delete") {
            await col.deleteOne(data);

            return true;
        }

        return "This didn't match any of the available commands."
    }
    catch (e) {
        console.log(e);
    }
    finally {
        await con.close();
    }
}



module.exports = { con, manageToon };