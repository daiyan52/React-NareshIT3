// var express = require("express");
// var cors = require("cors");
// var mongoClient = require("mongodb").MongoClient;
// var ConnectionString = "mongodb://127.0.0.1:27017";
// // var ConnectionString = "mongodb://localhost:27017";
// var app = express();
// // app.use(cors());
// // app.use(express.urlencoded({ 
// //     extended: true
// // }));
// // app.use(express.json());
// app.get("/",(req,res)=>{
//     mongoClient.connect(ConnectionString,(err,clientObj)=>{
//         if(!err){
//             var database =  clientObj.db("reactdb");
//             database.collection("tblusers").find({}).toArray((err,documents)=>{
//                 if(!err){
//                     res.send("hello");
//                     res.send(documents);
//                 }
//             })
//         }
//     })
// });
// // app.post("/registeruser",(req,res)=>{
// //     var userDetails = {
// //         UserId:req.body.UserId,
// //         UserName:req.body.UserName,
// //         Password:req.body.Password,
// //         Age:parseInt(req.body.Age),
// //         Mobile:req.body.Mobile,
// //         Subscribed:(req.body.Subscribed=="true")?true:false
// //     }
// //     mongoClient.connect(ConnectionString,(err,clientObj)=>{
// //         if(!err){
// //             var database = clientObj.db("reactdb");
// //             database.collection("tblusers").insertOne(userDetails,(err,result)=>{
// //                 if(!err){
// //                     console.log("Record Inserted");
// //                     res.redirect("/getusers");
// //                 }
// //             })
// //         }
// //     })
// // })

// app.listen(4000);
// // console.log("server started:http://localhost:4000");
// console.log("server started:http://127.0.0.1:4000")

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 4000;

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// Define a schema for a sample "user" object
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Define a route to create a new user
app.post('/users', async (req, res) => {
  const { name, email, age } = req.body;

  const user = new User({
    name,
    email,
    age
  });

  try {
    await user.save();
    res.send('User created successfully');
  } catch (err) {
    res.status(500).send(err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

