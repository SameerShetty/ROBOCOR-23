require("dotenv").config();
require("colors");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 5000;

const connectDb = require("./db/db");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/register", require("./routes/RegisterRoute"));
app.use("/api/results", require("./routes/ResultsRoute"));

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

connectDb()
  .then(() => {
    app.listen(port, () =>
      console.log(
        `Server is up and running on the port ${port}`.underline.magenta.bold
      )
    );
  })
  .catch((err) => console.log(err));
