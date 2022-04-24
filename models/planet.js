// Import MongoDB driver
const mongo = require('mongoose');

// Define the planet schema
const planetSchema = mongo.Schema({
    name: String,
    orderFromSun: Number,
    hasRings: Boolean,
    mainAtmosphere: [{type: String}],
    surfaceTemperatureC: {
        min: Number,
        max: Number,
        mean: Number
    }
}, {versionKey: false});

// Export the schema for use in the program
module.exports = mongo.model('Planets', planetSchema);