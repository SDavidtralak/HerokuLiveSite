import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page:'home', displayName: '' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page:'home', displayName: '' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'about us', page:'about ', displayName: '' });
});
/* GET services page. */
router.get('/Services', function(req, res, next) {
  res.render('index', { title: 'Services', page:'Services ', displayName: '' });
});
/* GET services page. */
router.get('/Projects', function(req, res, next) {
  res.render('index', { title: 'Products', page:'products ', displayName: '' });
});
/* GET services page. */
router.get('/Contact', function(req, res, next) {
  res.render('index', { title: 'Contact us', page:'Contact  ', displayName: '' });
});
/* GET services page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'login', page:'login  ', displayName: '' });
});
/* GET services page. */
router.get('/register', function(req, res, next) {
  res.render('index', { title: 'Register us', page:'register  ', displayName: '' });
});


//temp routes
/* GET services page. */
router.get('/contact-list', function(req, res, next) {
  res.render('index', { title: 'Contact list', page:'Contact list ', displayName: '' });
});

/* GET services page. */
router.get('/edit', function(req, res, next) {
  res.render('index', { title: 'Edit ', page:'edit contacts  ', displayName: '' });
});


export default router;
