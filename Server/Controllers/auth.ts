import express, {Request, Response, NextFunction} from "express";

import passport from 'passport';


import User from '../Models/user';
import { GenerateToken, UserDisplayName} from '../Util/index';

//display 

export function DisplayLoginPage(req: Request, res: Response, next: NextFunction)
{
    if(!req.user)
    {
     return res.render('index', { title: 'Login', page: 'login', messages:req.flash('loginMessage'), displayName:UserDisplayName });
    }
    return res.redirect('/contact-list');
}

export function DisplayRegisterPage(req: Request, res: Response, next: NextFunction)
{
    if(!req.user)
    {
    return res.render('index', { title: 'Register', page: 'register', messages:req.flash('registerMessage'), 
    displayName:UserDisplayName });
    }
    return res.redirect('/contact-list');
}


//process

export function ProcessLoginPage(req: Request, res: Response, next: NextFunction)
{
    passport.authenticate('local', function(err, user, info)
  {
    //are there server errors
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    //are there login errors
    if(!user)
    {
      req.flash('loginMessage', 'Authentication Error');
      return res.redirect('/login');
    }

    req.logIn(user, function(err)
    {
      //are there db errs
      if(err)
      {
        console.error(err);
        res.end(err);
      }

      const authToken = GenerateToken(user);
      //return res.json({sucess: true, msg: 'User logged in sucessfully', user: user, token: authToken})
      //console.log(authToken);

      return res.redirect('/contact-list');

    });
  })(req, res, next);
}

export function ProcessRegisterPage(req: Request, res: Response, next: NextFunction)
{
    //instance new user
  let newUser = new User
  ({
    username: req.body.username,
    EmailAddress: req.body.emailAddress,
    DisplayName: req.body.firstName + " " + req.body.lastName
  });
  
  User.register(newUser, req.body.password, function(err)
  {
    if(err)
    {
      if(err.name == "UserExistsError")
      {
        console.error('ERROR: Inserting user');
        req.flash('registerMessage', 'Registration Error');
        console.error('ERROR: USER Already Exist');
      }
      req.flash('registerMessage', 'Registration Error');
      console.error(err.name);
      return res.redirect(err.name);
    }

    return passport.authenticate('local')(req,res, ()=>
    {
      return res.redirect('/contact-list');
    });
  });
}

export function ProcessLogoutPage(req: Request, res: Response, next: NextFunction)
{
    req.logOut();

  res.redirect('login');
}
