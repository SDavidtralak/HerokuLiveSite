import express, {Request, Response, NextFunction} from "express";

import Contact from '../Models/contact';

import { UserDisplayName} from '../Util/index';



//display pages
export function DisplayContactList(req: Request, res: Response, next: NextFunction)
{
      // R - Read
  Contact.find(function(err, contactList)
  {
    if(err)
    {
      console.error("Error Encountered: " + err.message);
      res.end();
    }

    res.render('index', { title: 'Contact List', page: 'contact-list', contacts: contactList, displayName:UserDisplayName });
  });
}
export function DisplayAddPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Add', page: 'edit', contact: '', displayName:UserDisplayName });
}
export function DisplayEditPage(req: Request, res: Response, next: NextFunction)
{
  let id = req.params.id;

  // pass the id to the db and read the contact in
  Contact.findById(id, {}, {}, function(err, contactToEdit)
  {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    // show the edit view with the data
    res.render('index', { title: 'Edit', page: 'edit', contact: contactToEdit, displayName:UserDisplayName });
  });  
}



//process page

export function ProcessDelete(req: Request, res: Response, next: NextFunction)
{
    let id = req.params.id;

    // db.contacts.remove({"_id":id})
    Contact.remove({_id: id}, function(err)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      // delete was successful -> go back to the contact-list
      res.redirect('/contact-list');
    });  
}
export function ProcessAddPage(req: Request, res: Response, next: NextFunction)
{
   // instantiate a new contact to add
   let newContact = new Contact
   ({
     "FullName": req.body.fullName,
     "ContactNumber": req.body.contactNumber,
     "EmailAddress": req.body.emailAddress
   });
 
   // db.contacts.insert
   Contact.create(newContact, function(err)
   {
     if(err)
     {
       console.error(err);
       res.end(err);
     }
     // newContact has been added to the db -> now go back to the contact-list
     res.redirect('/contact-list');
   });
}
export function ProcessEditPage(req: Request, res: Response, next: NextFunction)
{
    let id = req.params.id;

    // instantiate a new contact to edit
    let updatedContact = new Contact
    ({
      "_id": id,
      "FullName": req.body.fullName,
      "ContactNumber": req.body.contactNumber,
      "EmailAddress": req.body.emailAddress
    });
  
    // db.contacts.update({"_id":id}, update info...)
    Contact.updateOne({_id:id}, updatedContact, function(err: ErrorCallback)
    {
      if(err)
      {
        console.error(err);
        res.end(err);
      }
  
      // the edit was successful -> go back to the contact-list
      res.redirect('/contact-list');
    });  
}