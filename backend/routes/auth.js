const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

router.post("/register", async (req, res) => {
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

router.post("/login", async (req, res) => {
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

module.exports = router;