const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => res.send('main page')
  // res.render('index', { title: 'Chilimo' });
);

module.exports = router;
