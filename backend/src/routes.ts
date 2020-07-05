import { Router } from 'express';
import EventController from './app/controllers/EventController';

const routes = Router();

routes.get('/events', EventController.index);
routes.get('/events/:id', EventController.show);

export default routes;
