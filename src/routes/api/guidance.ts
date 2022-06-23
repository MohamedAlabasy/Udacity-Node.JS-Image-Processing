
import { Router, Request, Response, NextFunction } from 'express'
const guidance: Router = Router()

guidance.get('', (request: Request, response: Response, next: NextFunction) => {
    response.send('<a href="pictures?name=background&width=200&height=200">http://localhost:3000/pictures?name=background&width=200&height=200</a>');
})



export default guidance;