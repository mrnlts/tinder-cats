const mongoose = require('mongoose');
const Cat = require('../models/cat');
const User = require('../models/user');

const kitties = [
{"image" : "https://www.dhresource.com/0x0/f2/albu/g7/M00/B9/81/rBVaSVtMD92AZlDKAAIXd1JSBfU778.jpg/fashion-cool-cat-glasses-pet-dog-eye-protection.jpg", "name" : "Curri", "age" : 3, "isSingle" : true},
{"image" : "https://i.pinimg.com/originals/4e/d5/0e/4ed50e7aa64e175a14176dd415905dac.jpg", "name" : "Garfield", "age" : 8,  "isSingle" : true},
{"image" : "https://i.pinimg.com/originals/74/e1/92/74e192433c1b5f5a84f0438b9a454d92.jpg", "name" : "Paris", "age" : 8,  "isSingle" : true},
{"image" : "https://i.pinimg.com/originals/9a/87/b4/9a87b49bd7ad9b91fed05bf36f056e76.jpg", "name" : "Kitty", "age" : 3, "isSingle" : true},
{"image" : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg", "name" : "Asulito", "age" : 99, "isSingle" : true},
{"image" : "https://timesofindia.indiatimes.com/photo/67586673.cms", "name" : "Ojitos", "age" : 2, "isSingle" : false},
{"image" : "https://ichef.bbci.co.uk/news/640/cpsprodpb/150EA/production/_107005268_gettyimages-611696954.jpg", "name" : "Zapa", "age" : 5, "isSingle" : true}
];

const users = [
  {"name" : "Perico", "lastName" : "de los palotes", "age" : 40},
  {"name" : "Paco", "lastName" : "Porras", "age" : 15},
  {"name" : "Maria", "lastName" : "la del Barrio", "age" : 63},
  {"name" : "Manoli", "lastName" : "Gomez", "age" : 46},
  {"name" : "Marti", "lastName" : "El guapo", "age": 32}
]

  mongoose
  .connect('mongodb://localhost:27017/tinder-cats', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB 🚀');
  })
  .then(() =>
    Cat.create(kitties),
  )
  .then(() => {
    console.log('cat created');
  })
  .catch(error => {
    console.log('error ', error);
  })
  .finally(() => {
    mongoose.connection.close();
  });


  mongoose
  .connect('mongodb://localhost:27017/tinder-cats', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to DB 🚀');
  })
  .then(() =>
    User.create(users),
  )
  .then(() => {
    console.log('people created');
  })
  .catch(error => {
    console.log('error ', error);
  })
  .finally(() => {
    mongoose.connection.close();
  });

  