require('@dotenvx/dotenvx').config()
const { MongoClient } = require('mongodb');

// connection string
const uri = process.env.CONNECTION_STRING;

// db instance
const con = new MongoClient(uri, {
    connectTimeoutMS: 10000,
});

module.exports = { con };