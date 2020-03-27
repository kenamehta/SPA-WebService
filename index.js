//import express module
var express = require("express");
//create  an express app
var app = express();
//require express middleware body-parser
var bodyParser = require("body-parser");
//require express session
var session = require("express-session");

//Database import
var { mongoose } = require("./db/mongoose");
var { Patient_Detail } = require("./models/patients");

//set the view engine to ejs
app.set("view engine", "ejs");
//set the directory of views
app.set("views", "./views");
//specify the path of static directory
app.use(express.static(__dirname + "/public"));

//use body parser to parse JSON and urlencoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//get patient's data
app.get("/", (req, res) => {
  Patient_Detail.find().then(
    result => {
      console.log(result);
      res.render("index", {
        patients: result
      });
    },
    err => {
      console.log(err);
      res.status(500).send("Unable to fetch records");
    }
  );
});

//post patient's data
app.post("/patients/add", async (req, res) => {
  console.log(req.body);

  var data = new Patient_Detail({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    image: req.body.photo,
    medics: req.body.medics,
    notes: req.body.notes
  });
  data.save((err, result) => {
    if (err) {
      return res.status(500).send({ msg: err });
    }
    res.redirect("/");
  });
  
});

app.listen(3000, () => {
  console.log(`Started the port at 3000`);
});
