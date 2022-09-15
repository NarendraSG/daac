const { TransactionModel } = require("../Models");
const moment = require("moment");

async function create({ name, amount, date, category, user }) {

    await TransactionModel.create(new TransactionModel({
        name, 
        amount, 
        date: moment(date, "YYYY-MM-DD"), 
        category, 
        user
    }));

    return;
}

async function get(user, category, transactionId) {
    
    let filter = {user};

    if(category){
        filter = {...filter, category}
    }

    if(transactionId){
        filter = {...filter, _id: transactionId}
    }

    const transactions = await TransactionModel.find(filter);

    return transactions;    
}

module.exports = {
    create,
    get
}