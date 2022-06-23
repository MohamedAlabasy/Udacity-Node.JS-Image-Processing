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

    // Make sure the data is correct else return (h1 = error massage)
    dataSendToUser = await validateData(pictureName, pictureWidth, pictureHeight);
    if (dataSendToUser) response.send(`<h1>${dataSendToUser}</h1>`);

    // check if picture in Thumb and create picture if isn't in Thumb
    if (await isPictureInThumb(pictureName, pictureWidth, pictureHeight) === false) {
        dataSendToUser = await createPictureThumb(pictureName, pictureWidth, pictureHeight);
    }
    if (dataSendToUser) response.send(`<h1>${dataSendToUser}</h1>`);

    // get Image Path and send it to user
    dataSendToUser = await getPicturePath(pictureName, pictureWidth, pictureHeight);
    dataSendToUser ? response.sendFile(dataSendToUser) : response.send('<h1>Error</h1>');
})

/**
 * get picture path
 * @param _name name of picture
 * @param _width width of picture
 * @param _height height of picture
 * @returns path of Picture or null if Picture isn't exists
 */
async function getPicturePath(_name: string, _width: string, _height: string): Promise<null | string> {
    let picturePath: string;

    if (_width && _height) {
        picturePath = path.resolve(THUMB_PATH, `${_name}_${_width}X${_height}.jpg`)
    } else {
        picturePath = path.resolve(FULL_PATH, `${_name}.jpg`);
    }

    try {
        await fsPromises.access(picturePath);
        return picturePath;
    } catch {
        return null;
    }
}

/**
 * check if Picture is in Thumb or not
 * @param _name name of picture
 * @param _width width of picture
 * @param _height height of picture
 * @returns true if Picture is in Thumb or false if not
 */
async function isPictureInThumb(_name: string, _width: string, _height: string): Promise<boolean> {
    try {
        await fsPromises.access(path.resolve(THUMB_PATH, `${_name}_${_width}X${_height}.jpg`));
        return true;
    } catch {
        return false;
    }
}

/**
 * add Picture to Thumb
 * @param _name name of picture
 * @param _width width of picture
 * @param _height height of picture
 * @returns null if Picture created or error if some thing happened
 */
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