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

// app.get('<url you want to get>', function(req, res,next){});

app.get("/", function(req, res, next) {
    res.send("HELLO WORLD");
});

// app.post('<url you want to post>', function(req, res,next){});
app.post('/', function(req, res, next) {
    // we can now use req.body
    res.send(`Hello ${req.body.firstName} ${req.body.lastName},
   your spirit is a strong ${req.body.spiritAnimal}`)
});

app.get('/topic/:topicId', function(req, res, next) {

    let topicId = req.params.topicId;
    topicId = Number(topicId);

    let topics = ["sports", "health", "more sports"];

    res.send(topics[topicId]);

});


app.get('/r/:name', function(req, res, next) {
    let urlName = req.params.name;

    let topics = [{
        name: "sports",
        articles: 10,
        desc: "Fun"
    }, {
        name: "health",
        articles: 5,
        desc: "not fun"
    }];

    let selectedTopic = topics.filter(function(t) {
        return t.name === urlName;
    });
    
    res.json(selectedTopic);
});
