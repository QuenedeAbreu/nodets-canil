import { Router, Response, Request } from 'express';

// import de controllers
import * as pageController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';
const router = Router();



//Routrs for the index page
router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/cats', pageController.cats);
router.get('/fishes', pageController.fishes);


//Routrs for the search page
router.get('/search', searchController.search);


// Router page not found
router.use((req: Request, res: Response) => {
  req
  res.status(404).render('pages/404');
})


export default router;