// here is where we do all of our logical schema


// define our schema below:
const mongoose = require("mongoose");

const praySchema = new mongoose.Schema({
    // users: {
        name:
            {
                type: String,
                required: "Name MUST be filled"
            },
            
        email: 
            {
                type: String,
                required: "Email MUST be verified"
            }
            
       
                // required: "Please provide phone number"
            
   
    // }
});


// this below is compile our Schelma into a MODEL
const PrayModel = mongoose.model("PrayModel", praySchema);

module.exports = PrayModel;