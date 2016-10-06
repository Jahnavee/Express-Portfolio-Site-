var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

 router.get('/home', function(req, res, next) {
   res.render('home', { title: 'Home' });
 });
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact me' });
});
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'service' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about me' });
});

module.exports = router;
