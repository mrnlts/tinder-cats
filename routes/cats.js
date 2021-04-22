const express = require('express');
const Cat = require('../models/cat');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  // Cat.find({})
  //   .then(cats => cats.map(cat => ({ name: cat.name.toUpperCase() }))
  //   .then((cats) => {
  //     res.render('cats/list', { cats });
  //   })
  //   .catch(error => {
  //     next(error);
  //   });
  Cat.find({})
    .then(cats => {
      res.render('cats/list', { cats });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
