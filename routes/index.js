var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arthur Conner Adventures' });
});

router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Arthur Conner Adventures' });
});

router.get('/projects.html', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});


router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'About' });
});



module.exports = router;
