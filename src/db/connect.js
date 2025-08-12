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

module.exports = { con };