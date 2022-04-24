// Import express
const express = require("express");
// Import config library
const config = require("config");
// Import MongoDB driver
const mongo = require("mongoose");
// Import body parser to format JSONs
const bp = require("body-parser");

// Get external configs from file
const defaults = config.get('defaults');

// Create an instance of express
const app = express();

app.use(bp.json())

// Set up routes
app.get('/', (req, res) => {
    res.send('Home Route');
});

// Import the routes from planets module
const planetsRoute = require('./routes/planets');
app.use('/planets', planetsRoute);

// Connect to the database
mongo.connect(defaults.dbURI.replace('<password>',defaults.dbPassword), {useNewUrlParser:true}, () => {
    console.log("Successfully connected to database "+mongo.connection.db.databaseName);
});

// Notify of any errors
mongo.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
});

// Set server to listen of specified port
app.listen(defaults.listenPort);