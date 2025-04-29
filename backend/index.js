const express = require("express");
const cors = require('cors')
const app = express();
require("./connections/conn");
const PORT = process.env.PORT || 4000;

const authRouter = require("./routes/auth");
const menuRouter = require("./routes/menu");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello");
});

app.use("/api/v1/", authRouter);
app.use("/api/v2/", menuRouter);

app.listen(PORT, () => console.log(`Server Listening to Port ${PORT}`));