let path = require("path");
let data = require("../app/data/friends.js")
module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        res.json(data)
    });
    
    app.post("/api/friends", function (req, res) {
        // console.log(data)
        // var scoresParsed = [];
        // for (var i = 0; i < data.length; i++) {
        //     for (var j = 0; j < data[i].scores.length; j++) {
        //         var parsed = parseInt(data[i].scores[j])
        //         scoresParsed.push(parsed)
        //     }
        // }
        // if (scoresParsed.length >= 10) {

        // }
        // console.log(`Parsed: ${scoresParsed}`)
        data.push(req.body);
        res.json(true);
    });
};