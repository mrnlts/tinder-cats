const express = require('express');
const User = require('../models/user');

const router = express.Router();

router.get('/', (req, res, next) => {
    User.find()
      .then(users => {
        res.render('users/list', { users });
      })
      .catch(error => {
        next(error);
      });
  });

router.get('/create', (req, res) => res.render('users/create'));

router.post('/', (req, res, next) => {
    const { name, lastName, age } = req.body;
    User.create({ name, lastName, age })
      .then(user => {
        console.log(user);
        res.redirect('/users');
      })
      .catch(error => {
        next(error);
      });
  });



/* GET update user. */
router.get('/update/:id', (req, res, next) => {
    const { id } = req.params;
    console.log(id)
    User.findOne({'_id': id})
      .then(user => {
          console.log(user);
        res.render('users/update', {user});
      })
      .catch(err => next(err))
  })
  
  /* POST update user. */
  router.post('/update/:id', (req, res, next) => {
    const {id} = req.params;
    const { name, lastName, age } = req.body;
    console.log(id);
    User.findByIdAndUpdate({'_id': id} ,{name, lastName, age})
      .then(user => {
        res.redirect('/users');
      })
      .catch(error => {
        next(error);
      });
    });


// Delete user

router.post('/:id', (req, res, next) => {
    const { id } = req.params;
    User.findByIdAndDelete(id)
      .then(user => {
        console.log('delete', user);
        res.status(301);
        res.redirect('/users');
      })
      .catch(error => {
        next(error);
      });
  });

module.exports = router;