let express = require("express");
let path = require("path");
let app = express();


let PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static('./public/'));
app.set('view engine', 'html');

require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});