import { Router, Request, Response, NextFunction } from 'express';
import sharp from 'sharp';


const images: Router = Router()

images.get('', (request: Request, response: Response, next: NextFunction) => {
    response.send('images')
})


export default images;