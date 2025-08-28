require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./Routers/user.router");
const reviewRouter = require("./Routers/review.router");
const orderRouter = require("./Routers/order.router");
const messageRouter = require("./Routers/message.router");
const gigRouter = require("./Routers/gig.router");
const conversationRouter = require("./Routers/conversation.router");
const userAuthRouter = require("./Routers/auth.router");
const cookieParser = require("cookie-parser")


const app = express();

// secret dotenv
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;


// database connected
mongoose.connect(DB_URL)
  .then(() => console.log("Database is connected"))
  .catch((error) => console.log(`Database Connection Fail! ${error}`))
  .finally(()=> console.log("Database connection attempt finished"));

// middleware
app.use(cors())
app.use(cookieParser());
app.use(express.json())

app.use("/api/v1/users",userRouter);
app.use("/api/v1/userauth",userAuthRouter);
app.use("api/v1/review",reviewRouter);
app.use("/api/v1/order",orderRouter);
app.use("/api/v1/message",messageRouter);
app.use("/api/v1/gig",gigRouter);
app.use("/api/v1/conversation",conversationRouter);
app.listen(PORT,()=>{
    console.log(`app is running on: ${PORT}`)
})