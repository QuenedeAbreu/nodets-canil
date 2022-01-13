import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

export const search = (req: Request, res: Response) => {
  let namePet: string = req.query.q as string;
  let list = Pet.getFromName(namePet);

  if (!namePet) {
    res.redirect('/');
    return;
  }
  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    namePet
  });
}