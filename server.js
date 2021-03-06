const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use('/node_modules', express.static(path.join(__dirname, "node_modules")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, () => console.log(`Server Listening on: http://localhost:${PORT}`))

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);