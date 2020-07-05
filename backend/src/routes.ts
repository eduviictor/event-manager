import { Router } from 'express';
import EventController from './app/controllers/EventController';

const routes = Router();

routes.get('/', EventController.index);

export default routes;
