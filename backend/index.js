require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const {HoldingsModel} = require("./models/HoldingsModel");
const {PositionsModel} = require("./models/PositionsModel");
const {OrdersModel}= require ("./models/OrdersModel");
const User= require ("./models/UsersModel");

const PORT = process.env.PORT || 3001;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", authRoute);

app.get("/allUsers", async (req, res) => {
  let allUsers = await User.find({});
  res.json(allUsers);
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});


app.post("/newOrder", async (req, res) => {
  let nameValue = req.body.name;

  if (typeof nameValue === 'object' && nameValue !== null) {
    nameValue = nameValue.uid;
  }

  if (typeof nameValue !== 'string' || !nameValue.trim()) {
    return res.status(400).send("Invalid order name");
  }

  try {
    let newOrder = new OrdersModel({
      name: nameValue,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    res.status(500).send("Order not saved: " + err.message);
  }
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));


app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
