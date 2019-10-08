const {MongoMemorySever} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');

let database = null;

async function startDatabase() {
    const mongo = new MongoMemorySever();
    const mongoDBURL = await mongo.getConnectionString();
    const connection = await MongoClient.connect(mongoDBURL, {useNewUrldatabase = connection.db();
}}

async function getDatabase() {
    if (!database) await startDatabase(); 
    return database;
           
}