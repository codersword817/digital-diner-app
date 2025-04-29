const express = require("express");
const Menu = require("./models/Menu");
const User = require("./models/User");
const cors = require('cors')
const app = express();
require("./connections/conn");
const PORT = process.env.PORT || 4000;
app.use(cors());


app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello");
});

const bcrypt = require("bcryptjs");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

app.post("/register", async (req, res) => {
    try {

        const { username, password, email } = req.body;
        const hashPassword = await bcrypt.hash(password, salt);
        const user = new User({ username, password: hashPassword, email })
        await user.save().then(() =>
            res.status(200).json({
                message: { user: user }
            })
        )
    }
    catch (err) {
        res.status(200).json({
            message: "User is already Created"
        })
    }

});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user == null) {
        res.status(200).json({
            message: "Incorrect Password / Email Please Check"
        })
    } else {
        const hashedPassword = user.password;
        const passwordMatched = await bcrypt.compare(password, hashedPassword);
        if (passwordMatched) {
            res.status(200).json({
                message: `${user._id}`
            })
        } else {
            res.status(200).json({
                message: "Incorrect Password / Email Please Check"
            })
        }
    }

});


app.get("/items", async (req, res) => {
    try {
        const items = await Menu.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({ message: "Not connected" })
    }

})



app.listen(PORT, () => console.log("Server Listening to Port 4000"));