require('dotenv').config();
const mongoose = require('mongoose');

const data = require('./data');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
            .then(() => console.log("Connected to MONGO DB"))
    }
    catch (err) {
        console.log("Unable to connect to DB ", err)
    }
}

connect();

console.log(data);
