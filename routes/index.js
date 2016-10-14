/* Jahnavee Parmar*/
var express = require('express');
var router = express.Router();

/* GET pages. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Welcome!' });
});

 router.get('/home', function(req, res, next) {
   res.render('home', { title: 'Home' });
 });
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Service' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

module.exports = router;
