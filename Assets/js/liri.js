//dotenv file needs to be in smae directory as the js files
require("dotenv").config();

var keyFile = require("./key.js");

var Spotify = require('node-spotify-api');

var spotID = keyFile.spotify.id;
var spotSecret = keyFile.spotify.secret;

console.log("spotify ID: " + spotID);
console.log("spotify secret: " + spotSecret);

// user enter commans line arguments to search the API
// var typeSearch = process.argv[2];
var querySearch = process.argv[3];
// var limitSearch = process.argv[4];

 
var spotify = new Spotify({
  id: spotID,
  secret: spotSecret
});

var response;

function spotifyThisSong(querySearch){
    spotify
    .search({ type: 'artist', query: querySearch, limit: 1 }/*, callback*/)
    .then(function(response) {
      console.log(response.artists.items[0].external_urls);
    })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}
 
spotifyThisSong(querySearch);
   
