const express = require('express');
const Cat = require('../models/cat');
const User = require('../models/user');

const router = express.Router();

/* GET cats listing. */
router.get('/', (req, res, next) => {
  Cat.find()
    .populate('owner')
    .then(cats => {
      res.render('cats/list', { cats });
    })
    .catch(error => {
      next(error);
    });
});

/* GET create cat */
router.get('/create', (req, res) => {
  User.find() 
    .then(usersFromDB => res.render('cats/create', {usersFromDB}))
});

/* GET cats details. */
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Cat.findById(id)
    .populate('owner')
    .then(cat => {
      res.render('cats/detail', { cat });
    })
    .catch(error => {
      next(error);
    });
});

/* POST create cat. */
router.post('/', (req, res, next) => {
  const {image, name, age, isSingle} = req.body;
  Cat.create({ image, name, age, isSingle })
    .then(cat => {
      console.log(cat);
      // 💥 la url del redirect es completa no como los paths del middleware
      res.redirect('/cats');
    })
    .catch(error => {
      next(error);
    });
});

/* GET update cat. */
router.get('/update/:id', (req, res, next) => {
  const { id } = req.params;
  User.find()
    .then((usersFromDB)=> {
      Cat.findOne({'_id': id})
      .then(cat => {
        res.render('cats/update', {cat, usersFromDB});
      })
      .catch(err => next(err))
    })
  
})

/* POST update cat. */
router.post('/update/:id', (req, res, next) => {
  const { id } = req.params;
  const { name, age, isSingle, image, user } = req.body;
  console.log("Cat id: ", id, "name: ", name, "age: ", age, "owner: ", user);
  Cat.findByIdAndUpdate(id, {name, age, isSingle, image, 'owner': user})
    .then(() => res.redirect('/cats'))
    .catch(error => {
      next(error);
    });
  });


/* POST delete cat. */
router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  Cat.findByIdAndDelete(id)
    .then(cat => {
      console.log('delete', cat);
      res.status(301);
      res.redirect('/cats');
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
