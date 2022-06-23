import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';


import validateData from './utilities/validateData';

const pictures: Router = Router()
const FULL_PATH = path.resolve(__dirname, '../../../assets/full');
const THUMB_PATH = path.resolve(__dirname, '../../../assets/thumb');


pictures.get('', async (request: Request, response: Response, next: NextFunction) => {

    const pictureName: string = request.query.name as string;
    const pictureWidth: string = request.query.width as string;
    const pictureHeight: string = request.query.height as string;

    const validate: null | string = await validateData(pictureName, pictureWidth, pictureHeight);

    if (validate) {
        response.send(`<h1>${validate}</h1>`);
    }


})







export default pictures;