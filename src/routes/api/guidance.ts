
import { Router, Request, Response, NextFunction } from 'express'
const guidance: Router = Router()

guidance.get('', (request: Request, response: Response, next: NextFunction) => {
    response.send('<h1>hello</h1>\n<h1>hello</h1>');
})



export default guidance;