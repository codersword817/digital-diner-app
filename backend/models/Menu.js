const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    rating: {
        type: Number,
    }
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;