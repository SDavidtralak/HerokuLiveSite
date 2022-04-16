import express from 'express';
const router = express.Router();

import {DisplayContactsPage, DisplayHomePage, DisplayAboutPage, DisplayServicePage, DisplayProductPage} from '../Controllers/index'

//top level routes
/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET services page. */
router.get('/services', DisplayServicePage);

/* GET products page. */
router.get('/products', DisplayProductPage);

/* GET products page. */
router.get('/contact', DisplayContactsPage);




export default router;
