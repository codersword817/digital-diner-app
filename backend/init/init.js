require('dotenv').config();
const mongoose = require('mongoose');
const data = require("./data");
const Menu = require("../models/Menu");



const insertData = async () => {
    try {
        await Menu.deleteMany({}).then(() => console.log("Successfully Deleted the Data"))
        const initData = data.map((e) => ({
            "name": e.dsc, "price": e.price, "rating": e.rate, "imageUrl": e.img, "category": e.category
        }));

        await Menu.insertMany(initData).then((res) => {
            console.log("Inserted the Data in DB Successfully")
        })
    }
    catch (err) {
        console.log(err);
    }
}

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
            .then(() => {
                console.log("Connected to MONGO DB");

                insertData();

            })
    }
    catch (err) {
        console.log("Unable to connect to DB ", err)
    }
}

connect();



// console.log(data);
