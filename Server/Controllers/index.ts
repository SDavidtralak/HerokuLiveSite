import express, {Request, Response, NextFunction} from "express";
import { UserDisplayName} from '../Util/index';

export function DisplayHomePage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName });
}
export function DisplayAboutPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'About Us', page: 'about', displayName:UserDisplayName });
}
export function DisplayServicePage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Our Services', page: 'services', displayName:UserDisplayName });
}
export function DisplayProductPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Our Products', page: 'products', displayName:UserDisplayName });
}
export function DisplayContactsPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', { title: 'Contact Us', page: 'contact', displayName:UserDisplayName });
}