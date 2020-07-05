import { Router } from 'express';
import EventController from './app/controllers/EventController';

const routes = Router();

routes.get('/events', EventController.index);
routes.get('/events/:id', EventController.show);
routes.post('/events', EventController.store);
routes.put('/events/:id', EventController.update);
routes.delete('/events/:id', EventController.delete);

export default routes;
