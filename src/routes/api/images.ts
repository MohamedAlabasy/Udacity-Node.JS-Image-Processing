import { Router, Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';

const images: Router = Router()
const fullImagePath = path.relative(__dirname, '../../../assets/full');
const thumbImagePath = path.relative(__dirname, '../../../assets/full');

images.get('', (request: Request, response: Response, next: NextFunction) => {
    const imageName: string = request.query.name as string;
    const imageWidth: number = (request.query.width as unknown) as number;
    const imageHight: number = (request.query.hight as unknown) as number;
    



    response.send('images')
})


export default images;