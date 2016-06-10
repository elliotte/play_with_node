var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET ABOUT page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

/* GET ABOUT page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Express' });
});

module.exports = router;
