"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessEditPage = exports.ProcessAddPage = exports.ProcessDelete = exports.DisplayEditPage = exports.DisplayAddPage = exports.DisplayContactList = void 0;
const contact_1 = __importDefault(require("../Models/contact"));
const index_1 = require("../Util/index");
function DisplayContactList(req, res, next) {
    contact_1.default.find(function (err, contactList) {
        if (err) {
            console.error("Error Encountered: " + err.message);
            res.end();
        }
        res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contactList, displayName: index_1.UserDisplayName });
    });
}
exports.DisplayContactList = DisplayContactList;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', contact: '', displayName: index_1.UserDisplayName });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    contact_1.default.findById(id, {}, {}, function (err, contactToEdit) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName: index_1.UserDisplayName });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessDelete(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessDelete = ProcessDelete;
function ProcessAddPage(req, res, next) {
    let newContact = new contact_1.default({
        "FullName": req.body.fullName,
        "ContactNumber": req.body.contactNumber,
        "EmailAddress": req.body.emailAddress
    });
    contact_1.default.create(newContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updatedContact = new contact_1.default({
        "_id": id,
        "FullName": req.body.fullName,
        "ContactNumber": req.body.contactNumber,
        "EmailAddress": req.body.emailAddress
    });
    contact_1.default.updateOne({ _id: id }, updatedContact, function (err) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
//# sourceMappingURL=contact-list.js.map