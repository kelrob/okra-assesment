const express = require('express');
const cors = require('cors');
const routes = require("./routes");



const app = express();
const port = process.env.PORT || 5000;
const router = express.Router();

app.use(cors());
app.use("/api", routes(router));
 
app.listen(5000, () =>
  console.log('App running on port ' + port)
);
