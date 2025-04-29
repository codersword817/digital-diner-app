const router = require("express").Router();
const Menu = require("../models/Menu");
const Order = require("../models/Order");
router.get("/items", async (req, res) => {
    try {
        const items = await Menu.find({});
        res.status(200).json(items);
    } catch (err) {
        res.status(400).json({ message: "Not connected" })
    }

});



router.get("/history/:id", async (req, res) => {
    const userid = req.params.id;
    try {
        const dt = await Order.find({ user: userid }).sort({ createdAt: -1 });
        res.status(200).json(dt);
    } catch (err) {
        res.status(400).json({ message: `Error is ${err}` })
    }
})

router.post("/order/:id", async (req, res) => {
    try {
        const order = new Order({ ...req.body, user: req.params.id });
        await order.save().then((resp) => res.status(200).json(resp))
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }

})

module.exports = router