import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet';

export const search = (req: Request, res: Response) => {
  let namePet: string = req.query.q as string;
  let list = Pet.getFromName(namePet);
  // res.send('fishes');
  res.render('pages/page', {
    menu: createMenuObject(''),
    list,
    namePet
  });
}