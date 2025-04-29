const express = require("express");
const Menu = require("./models/Menu");
const User = require("./models/User");
const Order = require("./models/Order");
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

});

app.get("/users", async (req, res) => {
    try {
        const dt = await User.find({});
        res.status(200).json(dt)
    } catch (err) {
        res.status(400).json({ message: `Error is ${err}` })
    }
})

app.get("/history/:id", async (req, res) => {
    const userid = req.params.id;
    try {
        const dt = await Order.find({ user: userid }).sort({ createdAt: -1 });
        res.status(200).json(dt);
    } catch (err) {
        res.status(400).json({ message: `Error is ${err}` })
    }
})

app.post("/order", async (req, res) => {
    try {
        const order = new Order({ ...req.body });
        await order.save().then((resp) => res.status(200).json(resp))
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }

})



app.listen(PORT, () => console.log("Server Listening to Port 4000"));