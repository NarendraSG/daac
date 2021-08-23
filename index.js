const App = require('express')();
const mongoos = require('mongoose');


App.get('/', (req, res) => {
    res.send("Welcome to GitPod");
})

App.listen(3000, ()=> {
    console.log('Listening on 3000');
})