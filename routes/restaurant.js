var express = require('express');
var router = express.Router();
var mongoClient = require('./../mongo/config')
var mongoQueries = require('./../mongo/queries')

/* GET restaurant listing. */
// localhost:3000/restaurant
router.get('/', async (req, res) => {

    console.log("RESTAURANTS", mongoQueries)    
    let result = await mongoQueries.findListings(parseInt(numListings))
    console.log(result)
    res.send (result)
});

/*
router.get('/', async (req, res) => {

    console.log("RESTAURANTS", mongoQueries)    
    let result = await mongoQueries.findListings({})
    console.log(result)
    res.send (result)
});
*/
module.exports = router;
