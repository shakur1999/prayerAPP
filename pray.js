const express = require("express");
const request = require("request");
const pray = express();
const mongoose = require("mongoose"); 
const restful = require("node-restful");
const nodemon = require("nodemon");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const prayRoutes = require("./routes/prayRoutes");

pray.set("view engine", "ejs");
pray.use(bodyParser.json());
pray.use(bodyParser.urlencoded({extended: true}));
pray.use(express.static(__dirname + "/local"));

pray.use("/api/v0/users", prayRoutes); 

// nodemon = [pray.js];

request('http://api.aladhan.com/v1/calendar?latitude=51.508515&longitude=-0.1254872&method=2&month=4&year=2017', (error, response, body) => {
  if(!error && response.statusCode == 200) {
      const parseIt = JSON.parse(body);
      console.log(parseIt["data"][0]);
  }
});

// ================================================================================
pray.get("/", (req, res) => {
    res.render("mainHTML.ejs");
})

// pray.get("/", (req, res) => {
//     res.send("HELLO FROM THE ROOT ROUTE");
// });


pray.post("/ptime", (req, res) => {
 {
     users = [
         {
            name: "shakur ahmed",
              pw: "store in db",
          email: "shakur@gmail.com",
          phone: "415-926-1183",
            
         }
         ]
 }  
})

// ================================================================================
pray.get("*", (req, res) => {
    res.send("Salaam-O-Alikum, please check your route as it may NOT exists!!");
})

// ================================================================================

pray.listen(process.env.PORT, process.env.IP, () => {
    console.log("PRAY App is Started by a developer AbdiShakur...");
})