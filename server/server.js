import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const app = express();

//import routes
import authRoutes from "./routes/auth.js";

//middleware
app.use("/api", authRoutes);

// app middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use(cors());//alows req from all origins or specific domain
if ((process.env.NODE_ENV = "development")) {
  app.use(cors({ orgin: `http://localhost3000` }));
}

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB ERROR => ", err));
