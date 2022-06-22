import express from 'express';

const logger = ((request: express.Request, response: express.Response, next: express.NextFunction) => {
    console.log(request.method, request.url);
    next()
})

export default logger