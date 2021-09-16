const express = require("express");
const cors = require("cors");
var session = require("express-session");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use(session({ secret: "0KRA!$", saveUninitialized: true, resave: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", routes(router));

// set the view engine to ejs
app.set("view engine", "ejs");

app.listen(port, () => console.log("App running on port " + port));
