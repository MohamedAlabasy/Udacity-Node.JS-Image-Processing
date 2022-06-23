import { Router, Request, Response, NextFunction } from 'express';
import sharp from 'sharp';
import path from 'path';
import { promises as fsPromises } from 'fs';



const images: Router = Router()

images.get('', (request: Request, response: Response, next: NextFunction) => {
    response.send('images')
})


export default images;