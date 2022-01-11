import { Router, Response, Request } from 'express';
const router = Router();

// import routers
import homeRouter from './home.routes';

//Routrs for the index page
router.use('/', homeRouter);


// Router page not found
router.use((req: Request, res: Response) => {
  req
  res.status(404).send('404');
})


export default router;