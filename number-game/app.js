'use strict';
const PORT_NUMBER = 8080;

let express = require("express");
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(PORT_NUMBER, function() {
    console.log(`We are listing on port ${PORT_NUMBER}`);
});

let faker = require('faker');

let randomNumber = faker.random.number(10);

let guessCounter = 0;

app.post('/guess', function(req, res, next) {
    guessCounter = guessCounter + 1;
    let guessNumber = req.body.guess;

    if (guessNumber === randomNumber) {
        res.send(`Hurray! You are right. Guess number: ${guessCounter}. Please play some more!`);
        randomNumber = faker.random.number(10);
        guessCounter = 0;
    }
    else if (guessNumber > randomNumber) {
        res.send(`You fool! That is too high. Guess number: ${guessCounter}`);
    }
    else if (guessNumber < randomNumber) {
        res.send(`You fool! You guessed too low. Guess number: ${guessCounter}`);
    }
});


// app.post('/reset', function(req, res, next) {
//     randomNumber = faker.random.number(10);
//     guessCounter = 0;
//     res.send("Game reset");
// });
