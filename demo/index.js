// content of index.js
const http = require('http')  
const jsSHA = require('jssha');
const btoa = require('btoa');
const express = require('express');
const config = require('config');

const port = 6789;

const app = express()

function generateToken(key, appID, userName, expiresInSeconds, vCard) {
    var EPOCH_SECONDS = 62167219200;
    var expires = Math.floor(Date.now() / 1000) + expiresInSeconds + EPOCH_SECONDS;
    var shaObj = new jsSHA("SHA-384", "TEXT");
    shaObj.setHMACKey(key, "TEXT");
    jid = userName + '@' + appID;
    var body = 'provision' + '\x00' + jid + '\x00' + expires + '\x00' + vCard;
    shaObj.update(body);
    var mac = shaObj.getHMAC("HEX");
    var serialized = body + '\0' + mac;
    return btoa(serialized);
}

if (!config.has("key") || !config.has("appID"))
{
    console.log("config is missing key or appID");
    process.exit(1);
}




app.use(express.static('.'));

app.get('/', function(request, response){
    response.redirect('/bower_components/vidyo-io-elements/demo/index.html');
});

app.get('/getToken', (request, response) => {  
    response.json(
      { 
        token: generateToken(config.get('key'), config.get('appID'), "userName", 10000, "")
      })
})

console.log("Running server on port " + port);
app.listen(port)  