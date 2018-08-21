require("dotenv").config();

var keyFile = require("./key.js");

// var spotify = new Spotify(keys.spotify);
// var client = new Twitter(keys.twitter);

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "6ac1e4f925024138ba16b21d587c6947", //"6ac1e4f925024138ba16b21d587c6947" // keys.spotify.id
  secret: "2a252a82f1a340bdb8efd980bcea7c6b" //"2a252a82f1a340bdb8efd980bcea7c6b" // keys.spotify.secret
});
 
spotify
.request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
.then(function(data) {
  console.log(data); 
})
.catch(function(err) {
  console.error('Error occurred: ' + err); 
});
   
