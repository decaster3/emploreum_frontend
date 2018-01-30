const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
  res.send({ er: 'ololo' });
});

router.get('/login', (req, res) => {
  res.render('users/login', { title: 'Chilimo - login' });
});

router.post('/login',
  passport.authenticate('local')
);

router.get('/olo', (req, res) => {
  res.send('erfref');
});

module.exports = router;
