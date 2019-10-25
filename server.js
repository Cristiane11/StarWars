// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

var app = express()
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

// Data
// ===========================================================
var characters = [
    {
        routeName:"yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000

    },
    {
        routeName:"darthmaul",
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 1200  
    },
    {
        routeName:"ObiWanKenob",
        name: "Obi Wan Kenob",
        role: "SEO Specialist",
        age: 36,
        forcePoints: 5200
    }
];



// Create one more data entry for the character Obi Wan Kenobi.


// Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
//

// YOUR CODE GOES HERE

//

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/api/:characters?", function(req, res) {
  var chosen = req.params.characters;
if (chosen){
    console.log(chosen);
    for(var i =0; i<characters.length; i ++){
        if(chosen===characters[i].routeName){
            res.json(characters[i]);
            return;
        }
    }
        res.send("No character Found!");
    }else{
        res.json(characters);
    }

});


// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE

//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});