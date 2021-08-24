const App = require('express')();
const mongoose = require('mongoose');
const bluebird = require('bluebird');
require("dotenv").config();

mongoose.Promise = bluebird;

App.get('/', (req, res) => {
    res.send("Welcome to GitPod");
})

App.listen(3000, ()=> {
    console.log('Listening on 3000');
})
try{

    mongoose.connect(process.env.MONGO_URI_1,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(db => {console.log("SUCCESSFULLY CONNECTED TO MONGO-1")})
    .catch(error => {
        console.log("UNSUCCESSFUL CONNECTING MONGO", error);
        throw error;
    });

}catch(error){
    mongoose.connect(process.env.MONGO_URI_2,{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(db => {console.log("SUCCESSFULLY CONNECTED TO MONGO-2")})
    .catch(error => {
        console.log("UNSUCCESSFUL CONNECTING MONGO", error);
        throw error;
    });
}
