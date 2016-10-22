var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Friends of Sullivan | Homepage',
  	description: 'We are a community of past alumni, friends, family, local parents and more, working together to sustain a future for Sullivan equivalent to the 140 years that have come before us.', 
  });
});

/* GET ABOUT page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
  	title: 'Friends of Sullivan | About Us',
  	description: 'Find out more about Friends of Sullivan, our ethos and how we are building a sustained future for Sullivan.', 
  });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { 
  	title: 'Friends of Sullivan | Projects',
  	description: 'Find out more about our latest enhancement projects, and similar projects that have preceded our programme.', 
  });
});

/* GET events page. */
router.get('/events_news', function(req, res, next) {
  res.render('events', { 
  	title: 'Friends of Sullivan | Events and News',
  	description: 'See events being held through out the UK and news updates on Sullivan developments.'
  });
});

/* GET events page. */
router.get('/events_fundraising', function(req, res, next) {
  res.render('events_fund', { 
    title: 'Friends of Sullivan | Local Fundraising',
    description: 'Next year the school will celebrate 140 continuous years providing education to the children of Holywood and the surrounding area.'
  });
});

module.exports = router;
