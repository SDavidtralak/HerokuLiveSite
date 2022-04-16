"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactsPage = exports.DisplayProductPage = exports.DisplayServicePage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const index_1 = require("../Util/index");
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', displayName: index_1.UserDisplayName });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: 'About Us', page: 'about', displayName: index_1.UserDisplayName });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayServicePage(req, res, next) {
    res.render('index', { title: 'Our Services', page: 'services', displayName: index_1.UserDisplayName });
}
exports.DisplayServicePage = DisplayServicePage;
function DisplayProductPage(req, res, next) {
    res.render('index', { title: 'Our Products', page: 'products', displayName: index_1.UserDisplayName });
}
exports.DisplayProductPage = DisplayProductPage;
function DisplayContactsPage(req, res, next) {
    res.render('index', { title: 'Contact Us', page: 'contact', displayName: index_1.UserDisplayName });
}
exports.DisplayContactsPage = DisplayContactsPage;
//# sourceMappingURL=index.js.map