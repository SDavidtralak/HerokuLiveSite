"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
router.get('/home', function (req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
router.get('/about', function (req, res, next) {
    res.render('index', { title: 'about us', page: 'about ', displayName: '' });
});
router.get('/Services', function (req, res, next) {
    res.render('index', { title: 'Services', page: 'Services ', displayName: '' });
});
router.get('/Projects', function (req, res, next) {
    res.render('index', { title: 'Products', page: 'products ', displayName: '' });
});
router.get('/Contact', function (req, res, next) {
    res.render('index', { title: 'Contact us', page: 'Contact  ', displayName: '' });
});
router.get('/login', function (req, res, next) {
    res.render('index', { title: 'login', page: 'login  ', displayName: '' });
});
router.get('/register', function (req, res, next) {
    res.render('index', { title: 'Register us', page: 'register  ', displayName: '' });
});
router.get('/contact-list', function (req, res, next) {
    res.render('index', { title: 'Contact list', page: 'Contact list ', displayName: '' });
});
router.get('/edit', function (req, res, next) {
    res.render('index', { title: 'Edit ', page: 'edit contacts  ', displayName: '' });
});
exports.default = router;
//# sourceMappingURL=index.js.map