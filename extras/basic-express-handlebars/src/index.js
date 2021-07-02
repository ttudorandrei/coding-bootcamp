const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const router = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "../public")));
app.use(router);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
