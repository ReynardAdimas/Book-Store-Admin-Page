import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, DB_URL} from './config.js' 
import booksRoute from './routes/bookRoute.js'
const app = express();
// middleware for parsing req.body
app.use(express.json());

// middleware for handling cors policy
app.use(cors());
app.use('/books',booksRoute)
app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Welcome to MERN Stack Book Store");
});

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("app connected to database");
    app.listen(PORT, () => {
      console.log(`app is listening to port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
