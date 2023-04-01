import express from "express";
import cors from "cors";

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());


var MAINDB = {
    cats: 0,
    dogs: 0,
};
  

var users  = [] ; 

// main routes

app.get("/getAll", (req, res) => {
  res.send(JSON.stringify(MAINDB));
});

app.post("/voteCat", (req, res) => {
  MAINDB.cats += 1;
  res.send("vot for cat !!");
});

app.post("/voteDog", (req, res) => {
  MAINDB.dogs += 1;
  res.send("vot for dog !!");
});

app.listen(port, () => {
  console.log("  Server is running on port " + port + "");
});
