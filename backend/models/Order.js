const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    items: [
        {
            menuItem: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Menu"
            },
            itemName: {
                type: String
            },
            quantity: {
                type: Number,
                default: 1
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true
    },
    orderedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", orderSchema);


