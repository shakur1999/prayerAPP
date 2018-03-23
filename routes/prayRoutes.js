const express = require("express");
const router = express.Router();
const prayersdb = require("../models");

router.get("/", (req, res) => {
     db.prayersdb.find()
    .then(function(pray) {
        res.json(pray);
    })
    .catch(function(err) {
        res.send(err);
    })
});
    
    
    router.post("/", (req, res) => {
        console.log(res.body)
    });

// router.post("/", (req, res) => {
//          db.prayersdb.create()
//         .then(newFoo) => {
//             res.status(201).json(newFoo);
//         } 
//         .catch(function(err) {
//             res.send(err)
//         })
// })

// route.get("/", (req, res) => {
//     res.render("mainHTML.ejs");
// })

module.exports = router;
