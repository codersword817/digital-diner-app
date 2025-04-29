const express = require("express");
const Menu = require("./models/Menu");
const cors = require('cors')
const app = express();
require("./connections/conn");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello");
});


app.get("/items", async (req, res) => {
    console.log("Outside");

    try {
        const items = await Menu.find({});
        console.log(items);

        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({ message: "Not connected" })
    }

})



app.listen(4000, () => console.log("Server Listening to Port 4000"));