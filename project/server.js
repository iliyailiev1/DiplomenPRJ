const express = require("express");
const pathEnv = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 3000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const { path } = require("express/lib/application");
const { protect } = require("./middleware/authMiddleware");

connectDB();

const app = express();

app.use(express.static('./views'));
app.use('/assets', express.static('./assets'));

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use("/api/users", require("./routes/userRoutes"));
app.post('/api/cart', (req, res) => {
    protect()
    let data = req.body
   
})

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
