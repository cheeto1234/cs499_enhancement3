// Import express
const express = require("express");
const { route } = require("express/lib/application");

// Create an express router
const router = express.Router();

// Import the planet schema
const Planet = require('../models/planet')

// Set up routes

/*
    CREATE
*/

// Add a new planet object
router.post('/create', async (req, res) => {
    // Create the object
    const planet = new Planet({
        name: req.body.name,
        orderFromSun: req.body.orderFromSun,
        hasRings: req.body.hasRings,
        mainAtmosphere: req.body.mainAtmosphere,
        surfaceTemperatureC: req.body.surfaceTemperatureC
    });
    try{
        // Add it to the database
        const savedPlanet = await planet.save();
        // Repond with the added data
        res.json(savedPlanet);
    } catch(e){
        // If there is an error, respond with the error message
        res.json({errorMessage: e});
    }
});

/*
    READ
*/

// Get all planets
router.get('/', async (req, res) => {
    try{
        const planets = await Planet.find();
        res.json(planets);
    } catch(e){
        // If there is an error, respond with the error message
        res.json({errorMessage: e});
    }
});

// Get back a planet by it's ID
router.get('/id/:planetID', async (req,res) => {
    try{
        // Retrieve the planet using findById
        const planet = await Planet.findById(req.params.planetID);
        // Respond with it
        res.json(planet);
    } catch(e){
        // If there is an error, respond with the error message
        res.json({errorMessage: e});
    }
});

// Get back a planet by it's name
router.get('/name/:planetName', async (req,res) => {
    try{
        // Retrieve the planet using findById
        const planet = await Planet.find({name: req.params.planetName});
        // Respond with it
        res.json(planet);
    } catch(e){
        // If there is an error, respond with the error message
        res.json({errorMessage: e});
    }
});

// Get planets based on whether they have rings
router.get('/hasRings/:planetRings', async (req,res) => {
    try{
        // Retrieve the planet using findById
        const planets = await Planet.find({hasRings: req.params.planetRings});
        // Respond with it
        res.json(planets);
    } catch(e){
        // If there is an error, respond with the error message
        res.json({errorMessage: e});
    }
});

// Get planet based on its order from the sun
router.get('/orderFromSun/:planetOrder', async (req,res) => {
    try{
        // Retrieve the planet using findById
        const planet = await Planet.find({orderFromSun: req.params.planetOrder});
        // Respond with it
        res.json(planet);
    } catch(e){
        // If there is an error, respond with the error message
        res.json({errorMessage: e});
    }
});

// Get planets based on their surface temperature range
router.get('/surfaceTemperatureC/:lowTemp&:highTemp', async (req,res) => {
    try{
        // Retrieve the planets by using greater than and less than queries
        const planets = await Planet.find({ $or:[
            {"surfaceTemperatureC.mean": {$gt: req.params.lowTemp, $lt: req.params.highTemp}, "surfaceTemperatureC.min": null,"surfaceTemperatureC.max": null},
            {"surfaceTemperatureC.min": {$gt: req.params.lowTemp},"surfaceTemperatureC.max": {$lt: req.params.highTemp}}
        ]});
        // Respond with them
        res.json(planets);
    } catch(e){
        // If there is an error, respond with the error message
        res.json({errorMessage: e});
    }
});

// Get planets bason on an element they have
router.get('/mainAtmosphere/:planetElement', async (req,res) => {
    try{
        // Retrieve the planets
        const planets = await Planet.find({mainAtmosphere: req.params.planetElement});
        // Respond with them
        res.json(planets);
    } catch(e){
        // If there is an error, respond with the error message
        res.json({errorMessage: e});
    }
});

/*
    UPDATE
*/

// Update a planet
router.patch('/update/:planetID', async (req, res) => {
    try{
        // Update the planet based on it's ID using $set
        const updatedPlanets = await Planet.findByIdAndUpdate(req.params.planetID, {$set: req.body});
        // Respond with the removed planet
        res.json(updatedPlanets);
    } catch(e){
        // If there is an error, respond with the error message
        res.json({errorMessage: e});
    }
});

/*
    DELETE
*/

// Delete a planet
router.delete('/delete/:planetID', async (req, res) => {
    try{
        // Delete the planet based on it's ID
        const removedPlanet = await Planet.findByIdAndDelete(req.params.planetID);
        // Respond with the removed planet
        res.json(removedPlanet);
    } catch(e){
        // If there is an error, respond with the error message
        res.json({errorMessage: e});
    }
});

module.exports = router;