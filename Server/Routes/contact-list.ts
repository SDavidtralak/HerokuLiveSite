import express from 'express';
const router = express.Router();




import {AuthGuard, } from '../Util/index';

import {DisplayAddPage, DisplayContactList, DisplayEditPage, ProcessAddPage, ProcessDelete, ProcessEditPage} from '../Controllers/contact-list';

/*contact list routes
/* GET contact-list page. */
router.get('/contact-list',AuthGuard, DisplayContactList);

/* Display the Add page. */
router.get('/add',AuthGuard, DisplayAddPage);

/* Prrocess the Add request */
router.post('/add',AuthGuard, ProcessAddPage);

/* Display the Edit page with data from DB */
router.get('/edit/:id',AuthGuard, DisplayEditPage);

/* Process the Edit request */
router.post('/edit/:id', AuthGuard,ProcessEditPage);

/* Process the delete request */
router.get('/delete/:id',AuthGuard, ProcessDelete);


export default router;
