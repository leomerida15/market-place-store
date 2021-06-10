// Modules
import express, { Application, Request, Response } from 'express';
import { posRoutes, preRoutes } from '../Middlewares';
import Routes from '../routes';
import path from 'path';

const app: Application = express();

//database
import '../db/';

// middleware preRoutes
preRoutes(app);
app.use(express.json());

// Routes
Routes(app);
app.use('/static', express.static(path.resolve('static')));
app.use('/static/products', express.static(path.resolve('static/products')));

// meddleware posRutes
posRoutes(app);

// Settings
app.set('port', process.env.PORT || 5050);

export default app;
