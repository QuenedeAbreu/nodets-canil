import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/Pet';

export const home = (req: Request, res: Response) => {
  let list = Pet.getAll();
  req
  // res.send('Home');
  res.render('pages/page', {
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais ',
      background: 'allanimals.jpg',
    },
    list,
  });
}
export const dogs = (req: Request, res: Response) => {
  let list = Pet.getFromType('dog');
  req
  // res.send('dogs');
  res.render('pages/page', {
    menu: createMenuObject('dogs'),
    banner: {
      title: 'Cachorros ',
      background: 'banner_dog.jpg',
    },
    list
  });
}
export const cats = (req: Request, res: Response) => {
  let list = Pet.getFromType('cat');
  req
  // res.send('cats');
  res.render('pages/page', {
    menu: createMenuObject('cats'),
    banner: {
      title: 'Gatos ',
      background: 'banner_cat.jpg',
    },
    list
  });
}
export const fishes = (req: Request, res: Response) => {
  let list = Pet.getFromType('fish');
  req
  // res.send('fishes');
  res.render('pages/page', {
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes ',
      background: 'banner_fish.jpg',
    },
    list
  });
}