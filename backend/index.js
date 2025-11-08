require("dotenv").config();

const express=require("express");
const mongoose=require("mongoose");
const { HoldingsModel}=require("./models/HoldingsModel");
const { PositionModel}=require("./models/PositionsModel");
const { OrderModel }=require("./models/OrdersModel");
const { Signup } = require("./controllers/AuthController");
const { Login } = require("./controllers/AuthController");
const { userVerification } = require("./Middlewares/AuthMiddleware");
const cors=require("cors");
const cookieParser = require("cookie-parser");

// const bodyParser = require("body-parser");
const PORT=process.env.PORT || 3002;
const url=process.env.MONGO_URL;

const app=express();

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
}));

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get("/allHoldings",async(req,res)=>{
  const holdingsData=await HoldingsModel.find({});
  res.json(holdingsData);
});

app.get("/allPositions",async(req,res)=>{
  const positionsData=await PositionModel.find({});
  res.json(positionsData);
});

app.post("/newOrder",async(req,res)=>{
  let newOrder=new OrderModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode
  })

  newOrder.save();
})

app.post('/',userVerification);
app.post("/signUp",Signup);
app.post("/login",Login);
app.get("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return res.json({ success: true, message: "Logged out successfully" });
});




mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log(" MongoDB Connected Successfully");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => {
  console.error(" MongoDB Connection Error:", err.message);
});


// app.listen(PORT,()=>{
//     console.log("Server Started");
//     mongoose.connect(url);
//     console.log("DBconnected");
// })