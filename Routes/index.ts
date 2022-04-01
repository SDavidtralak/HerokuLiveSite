import express from 'express';
const router = express.Router();

import Contact from '../Models/contact';

/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home', displayName: '' });
});

/* GET home page. */
router.get('/home', function(req, res, next) 
{
  res.render('index', { title: 'Home', page: 'home', displayName: '' });
});

/* GET about page. */
router.get('/about', function(req, res, next) 
{
  res.render('index', { title: 'About Us', page: 'about', displayName: '' });
});

/* GET services page. */
router.get('/services', function(req, res, next) 
{
  res.render('index', { title: 'Our Services', page: 'services', displayName: '' });
});

/* GET products page. */
router.get('/products', function(req, res, next) 
{
  res.render('index', { title: 'Our Products', page: 'products', displayName: '' });
});

/* GET products page. */
router.get('/contact', function(req, res, next) 
{
  res.render('index', { title: 'Contact Us', page: 'contact', displayName: '' });
});

/* GET login page. */
router.get('/login', function(req, res, next) 
{
  res.render('index', { title: 'Login', page: 'login', displayName: '' });
});

/* GET register page. */
router.get('/register', function(req, res, next) 
{
  res.render('index', { title: 'Register', page: 'register', displayName: '' });
});

/* Temporary Routes - Contact-List related pages */

/* GET contact-list page. */
router.get('/contact-list', function(req, res, next) 
{
  // R - Read
  Contact.find(function(err, contactList)
  {
    if(err)
    {
      console.error("Error Encountered: " + err.message);
      res.end();
    }

    res.render('index', { title: 'Contact List', page: 'contact-list',contacts: contactList, displayName: '' });
  });

  
});

/* display add page page. */
router.get('/add', function(req, res, next) 
{
  res.render('index', { title: 'add', page: 'edit',contact: '', displayName: '' });
});

/* process add page page. */
router.post('/add', function(req, res, next) 
{
  //instance new contact
  let newContact = new Contact
  ({
    "FullName": req.body.fullName,
    "EmailAddress": req.body.emailAddress,
    "ContactNumber": req.body.contactNumber
  });
  //db insert
  Contact.create(newContact, function(err:ErrorCallback)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }
    //new is created
    res.redirect("/contact-list");
  });
});
//displaye edit page with data
router.get('/edit/:id', function(req, res, next) 
{
  let id = req.params.id;

  //pass the id to db to find

  Contact.findById(id, {},{}, function(err, editContact)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }
    res.render('index', { title: 'edit', page: 'edit',contact: editContact, displayName: '' });

  });

});
//process edit page
router.post('/edit/:id', function(req, res, next) 
{
  let id = req.params.id;

  //pass the id to db to find
  let Contactupdate = new Contact
  ({
    "_id": id,
    "FullName": req.body.fullName,
    "EmailAddress": req.body.emailAddress,
    "ContactNumber": req.body.contactNumber
  });

  Contact.updateOne({_id:id},Contactupdate, function(err:ErrorCallback)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }
    res.redirect("/contact-list");
    //edit was sucess got to this page

  });

});

//process delete
router.get('/delete/:id', function(req, res, next) 
{
  let id = req.params.id;

  //pass the id to db to find

  Contact.remove({_id: id}, function(err)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }
    //delete was sucessful got to this page
    res.redirect("/contact-list");

  });

});

export default router;
