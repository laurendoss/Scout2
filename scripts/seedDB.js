const mongoose = require("mongoose"); 
const dbUser = require("../models/userModel");
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/scout"
); 


const userSeed = [
    {
        email: "lauren@scout.com",
        name: "lauren",
        password: "Scout123",
    
    }
];

dbUser.deleteMany({})
    .then(() => dbUser.create(userSeed)
    .then(data => {
        console.log(data.length + " user records inserted!"); 
        process.exit(0); 
    }))    
    .catch(err => {
        console.error(err); 
        process.exit(1)
    });