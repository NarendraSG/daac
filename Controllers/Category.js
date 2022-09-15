const {CategoryModel} = require("../Models");

async function create({name, type, user}){

    await CategoryModel.create(new CategoryModel({
        name,
        type,
        user,
        isUserDefined: true
    }));

    return;
}

async function get(user){
    const [adminCategories, userCategories] = await Promise.all([
        CategoryModel.find({isUserDefined: false}),
        CategoryModel.find({user,  isUserDefined: true}),
    ])

    return [...userCategories, ...adminCategories];
}

module.exports = {
    create,
    get
}