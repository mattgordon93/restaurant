const mongoClient = require("./config");

async function findListing(criteria)
{
  let result = {}
  await mongoClient.connect()
    .then(connection=>connection.db('sample_restaurants'))
    .then(db=>db.collection('restaurants'))
    .then(restaurantListings=>{
        console.log("LISTINGS"); return restaurantListings.findOne()})
    .then(restaurant=>{ console.log ("RESULT", restaurant); result = restaurant})
    .catch(error => console.log(error))
  return result
}

async function findListings(nListings, pageNumber)
{
  let result = {}
  let toSkip = nListings * pageNumber;
  await mongoClient.connect()
    .then(connection=>connection.db('sample_restaurants'))
    .then(db=>db.collection('restaurants'))
    .then(restaurantListings=>{
      console.log("LISTINGS"); return restaurantListings.find().skip(toSkip).limit(nListings)})
    .then(restaurant=>{ console.log ("RESULT", restaurant); result = restaurant})
    .catch(error=>console.log(error))
  return result
}

module.exports = {/*findListing,*/ findListings}
  

