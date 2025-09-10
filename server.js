require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { getAll, getOne, deleteUser, createUser } = require('./controllers/userControllers');
const PORT = process.env.PORT || 1234;
const DB = process.env.DB_URI
const app = express();
app.use(express.json());
app.post('/create', createUser)
app.get('users', getAll);
// app.get('/user/:id', getOne);
mongoose.connect(DB).then(()=>{
  console.log('Connected to Database'),
  app.listen(PORT, ()=>{
    console.log(`Server is listening to Port : ${PORT}`)
  })
}).catch((error)=>{
  console.log('Error connecting to Database', error.message)
});
