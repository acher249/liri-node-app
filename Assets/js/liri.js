//dotenv file needs to be in smae directory as the js files
require("dotenv").config();

var keyFile = require("./key.js");

var Spotify = require('node-spotify-api');
// var omdb = require('omdb');
var omdbApi = require('omdb-client');

var spotID = keyFile.spotify.id;
var spotSecret = keyFile.spotify.secret;

var omdbApiKey = "trilogy"

// console.log("spotify ID: " + spotID);
// console.log("spotify secret: " + spotSecret);

// user enter commans line arguments to search the API
var firstArg = process.argv[2];
var querySearch = process.argv[3];
// var limitSearch = process.argv[4];

 
var spotify = new Spotify({
  id: spotID,
  secret: spotSecret
});

var response;

function spotifyThisSong(querySearch){
    spotify
    .search({ type: 'track', query: querySearch, limit: 1 }/*, callback*/)
    .then(function(response) {
      console.log("Artist: " + response.tracks.items[0].artists[0].name);
      console.log("Spotify Link: " + response.tracks.items[0].artists[0].external_urls.spotify);
    })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });
}

function spotifyThisArtist(querySearch){
  spotify
  .search({ type: 'artist', query: querySearch, limit: 1 }/*, callback*/)
  .then(function(response) {
    console.log("Followers: " + response.artists.items[0].followers.total);
    console.log("Popularity: " + response.artists.items[0].popularity);
    console.log("Spotify Link: " + response.artists.items[0].external_urls.spotify);
  })
.catch(function(err) {
  console.error('Error occurred: ' + err); 
});
}

//omdb parameters
var params = {
  apiKey: omdbApiKey,
  query: querySearch,
}

function movieThis(querySearch){

  omdbApi.search(params, function(err, data) {
    console.log("Title: " + data.Search[0].Title);
    console.log("Movie release year: " + data.Search[0].Year);
    console.log("Poster: " + data.Search[0].Poster);
  });
}
   
if(firstArg === "spotifyThisSong"){
  // console.log("First Arg is Spotify - Pick Song");
  spotifyThisSong(querySearch);
}else if (firstArg === "spotifyThisArtist"){
  // console.log("First Arg is Spotify - Pick Artist");
  spotifyThisArtist(querySearch);
}else{
  console.log("First Arg is Movie");
  movieThis(querySearch);
};


