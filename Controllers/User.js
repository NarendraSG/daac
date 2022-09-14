const {UserModel} = require("../Models");

async function create(email){
    const existingUser = await UserModel.findOne({email});

    if(existingUser) return existingUser;

    const user = await UserModel.create(new UserModel({email}));

    return user;
}

module.exports = {
    create
}