const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const cats = [{ name: 'Garfield' }];
  res.render('cats/list', { cats });
});

module.exports = router;
