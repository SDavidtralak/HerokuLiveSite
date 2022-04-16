import express from 'express';
const router = express.Router();
import {DisplayLoginPage, DisplayRegisterPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegisterPage} from '../Controllers/auth';


/*AUTH ROUTES*/

/* GET login page. */
router.get('/login', DisplayLoginPage);
router.post('/login', ProcessLoginPage);

/* GET register page. */
router.get('/register', DisplayRegisterPage);

router.post('/register', ProcessRegisterPage);

router.get('/logout', ProcessLogoutPage);




export default router;
