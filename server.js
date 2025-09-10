require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { getAll, getOne, deleteUser } = require('./controllers/userControllers');
const PORT = process.env.PORT || 1234;
const DB = process.env.DB_URI
const createdUser = require("./controllers/userControllers")
const app = express();

app.use(express.json());
app.get('users', getAll);
app.get('/user/:id', getOne);
app.delete('/user/:id', deleteUser);

mongoose.connect(DB).then(()=>{
  console.log('Connected to Database'),
  app.listen(PORT, ()=>{
    console.log(`Server is listening to Port : ${PORT}`)
  })
}).catch((error)=>{
  console.log('Error connecting to Database', error.message)
});