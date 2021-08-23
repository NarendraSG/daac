const App = require('express')();
const mongoose = require('mongoose');


App.get('/', (req, res) => {
    res.send("Welcome to GitPod");
})

App.listen(3000, ()=> {
    console.log('Listening on 3000');
    mongoose.connect("mongodb://localhost:27017/db", {useNewUrlParser: true})
    .then(db => {console.log("SUCCESSFULLY CONNECTED TO MONGO")})
    .catch(error => {console.log("UNSUCCESSFUL CONNECTING MONGO")});
})