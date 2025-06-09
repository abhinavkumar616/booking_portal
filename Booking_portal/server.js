const express=require("express")
const cors = require('cors');
require("./config/dbConnect")
const bookingRoutes = require('./routes/bookingRoutes');
const adminRoutes = require('./routes/adminRoutes');
require('dotenv').config();
const app=express()


const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    optionsSuccessStatus: 204
  })
);


app.use(express.json({ limit: "500kb" }));

app.use('/', bookingRoutes);
app.use('/admin', adminRoutes);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})