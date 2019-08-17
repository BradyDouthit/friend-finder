let path = require("path");
let data = require("../app/data/friends.js")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(data)
    });

    app.post("/api/friends", function (req, res) {
        var match = 0;
        let differencesArray = []
        for (var j = 0; j < data.length; j++) {
            var total = 0;
            for (var i = 0; i < req.body.scores.length; i++) {
                var num1 = data[j].scores[i];
                var num2 = req.body.scores[i];
                var difference = Math.abs(num1 - num2);

                total += difference;
            }
            data[j].difference = parseInt(total);
            
            differencesArray.push(parseInt(total));

            console.log(`Person: ${data[j].name} \nDifference: ${data[j].difference}\n`)
        }
        
        differencesArray.sort();
        console.log(`Sorted: ${differencesArray[0]}`)
        var minimum = Math.min(...differencesArray)

        for (var l = 0; l < data.length; l++) {
            if (parseInt(minimum) === data[l].difference) {
                match = data[l]
            }
        }

        data.push(req.body);
        res.json(match);
    });
};