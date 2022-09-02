import express from "express";

const app = express();

//import routes
import authRoutes from "./routes/auth.js";

//middleware
app.use("/api", authRoutes);

const port = process.env.port || 8000;

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});
