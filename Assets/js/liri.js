// require("dotenv").config();

// var keyFile = require("./key.js");

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var Spotify = require('node-spotify-api');

var spotID = process.env.SPOTIFY_ID;
var spotSecret = process.env.SPOTIFY_SECRET;
 
var spotify = new Spotify({
  id: spotID, //"6ac1e4f925024138ba16b21d587c6947" // keys.spotify.id
  secret: spotSecret//"2a252a82f1a340bdb8efd980bcea7c6b" // keys.spotify.secret
});

var response;
 
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
    console.log(response);
  })
.catch(function(err) {
  console.error('Error occurred: ' + err); 
});
   