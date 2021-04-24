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

router.get('/create', (req, res) => {
  res.render('cats/create');
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  Cat.findById(id)
    .then(cat => {
      res.render('cats/detail', { cat });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/', (req, res, next) => {
  const cat = req.body;
  Cat.create({
    name: cat.name,
  })
    .then(cat => {
      console.log(cat);
      // 💥 la url del redirect es completa no como los paths del middleware
      res.redirect('/cats');
    })
    .catch(error => {
      next(error);
    });
});

router.post('/:id/delete', (req, res, next) => {
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

router.get('/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Cat.findById(id)
    .then(cat => {
      res.render('cats/edit', { cat });
    })
    .catch(error => {
      next(error);
    });
});

router.post('/:id', (req, res, next) => {
  const { id } = req.params;
  const { name } = req.body;
  Cat.findByIdAndUpdate(id, { name })
    .then(() => {
      res.redirect('/cats');
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
