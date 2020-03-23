//Node JS projects often rely on modules, which we can access via npm
//In order to utilise those modules, we need to require them in our file. Here we require the express module whcih 
//allows to easily create a web server
var express = require('express');
var app = express();

//Web Servers rely on requests (req) being made via URL, this route waits for a GET request to be made to the Index route of
//our application. When a request is received, the server needs to send a resposne/result (res) to requesting client (usually a web page).
app.get('/', (req, res) => {
    res.send('This is the Home page');//This is send some basic text back to our browser to be displayed.
});

//Different from above, this route is awaiting a req to be made to /about
app.get('/about', (req, res) => {
    res.send('This is the about Page');//This is send some basic text back to our browser to be displayed.
});

//Listening for requests on port 3000
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});