import { Router, Request, Response, NextFunction } from 'express';
import path from 'path';
import sharp from 'sharp';
import { promises as fsPromises } from 'fs';

import validateData from './utilities/validateData';

const pictures: Router = Router()
const FULL_PATH = path.resolve(__dirname, '../../../assets/full');
const THUMB_PATH = path.resolve(__dirname, '../../../assets/thumb');


pictures.get('', async (request: Request, response: Response, next: NextFunction) => {

    let dataSendToUser: null | string;

    const pictureName: string = request.query.name as string;
    const pictureWidth: string = request.query.width as string;
    const pictureHeight: string = request.query.height as string;

    // Make sure the data is correct
    dataSendToUser = await validateData(pictureName, pictureWidth, pictureHeight);
    if (dataSendToUser) response.send(`<h1>${dataSendToUser}</h1>`);

    // check picture Thumb
    if (await isPictureInThumb(pictureName, pictureWidth, pictureHeight) === false) {
        dataSendToUser = await createPictureThumb(pictureName, pictureWidth, pictureHeight);
    }
    if (dataSendToUser) response.send(`<h1>${dataSendToUser}</h1>`);

})

async function isPictureInThumb(_name: string, _width: string, _height: string): Promise<boolean> {
    try {
        await fsPromises.access(path.resolve(THUMB_PATH, `${_name}_${_width}X${_height}.jpg`));
        return true;
    } catch {
        return false;
    }
}

async function createPictureThumb(_name: string, _width: string, _height: string): Promise<null | string> {
    try {
        await sharp(path.resolve(FULL_PATH, `${_name}.jpg`))
            .resize(+_width, + _height)
            .toFormat('jpg')
            .toFile(path.resolve(THUMB_PATH, `${_name}_${_width}X${_height}.jpg`));
        return null;
    } catch {
        return 'Error';
    }
}

export default pictures;