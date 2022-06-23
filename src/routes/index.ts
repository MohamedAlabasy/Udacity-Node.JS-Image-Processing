import express from 'express';

import images from './api/images';
import guidance from './api/guidance';

const routes = express.Router()

routes.use('', guidance);
routes.use('/images', images);


export default routes