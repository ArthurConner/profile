var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Arthur Conner' });
});

router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Arthur Conner' });
});

router.get('/projects.html', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});


router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'About' });
});


router.get('/history.html', function(req, res, next) {
  res.render('history', { title: 'About' });
});


//"http://meeting.support:3001/podcast?name=Klute&url=http://www.stevenbenedict.ie/wp-content/uploads/Klute.mp3&subtitle=Steven%20Benedict&imageList="
//http://localhost:3000/podcast?name=Klute&url=http://www.stevenbenedict.ie/wp-content/uploads/Klute.mp3&subtitle=Steven%20Benedict&imageList=
router.get('/podcast', function(req, res, next) {
  //res.render('history', { title: 'About' });

var route =  req.param("url")
 
 console.log('url:', route)
  if (route) {
 console.log('url param was detected: ', route)
  res.redirect(route);
  } else {
  res.render('index', { title: route });
   console.log('url param was missing: ', route)
  }
});

module.exports = router;
