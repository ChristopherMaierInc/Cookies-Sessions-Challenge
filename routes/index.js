var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/auth', (req, res) => {
  if (!req.session.loggedIn) {
    req.session.loggedIn = true;
    date = new Date();
    console.log('date: ', date);
  }
  res.render('login', { title: 'Successfully logged in!' });
});

router.get('/secure', (req, res) => {
  if (!req.session.visits) {
    req.session.visits = 0;
  }
  req.session.visits++;

  if (req.session.loggedIn) {
    res.render('secure', { title: 'You are logged in!', date: `You're logged in. You logged in at ${ date }`, logged: `You have logged in ${ req.session.visits } times.` });
  } else {
    res.render('secure', { title: 'You are not logged in!', date: ''});
  }
});

module.exports = router;
