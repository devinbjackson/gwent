const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const controller = require("./controller/controller")

require("dotenv").config();

const { connectionString } = require("./config").massive;

const app = express();
const port= process.env.PORT || "3030";

app.use(express.static(`${__dirname}/../build`));

massive(connectionString)
    .then(db => app.set("db", db))
    .catch(console.log);

app.use(json());
app.use(cors());




app.get("/api/cards", controller.getAllCards)

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '/../build/index.html'));
})
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
