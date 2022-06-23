import express, { Request, Response, NextFunction } from 'express';

import routes from './routes';
import logger from './utilities/logger';

const app = express();
const PORT = 3000;

// #=======================================================================================#
// #			                          run server                                       #
// #=======================================================================================#
app.listen(PORT || 8000, () => {
    console.log(`App Run at http://localhost:${PORT || 8000}`);
});


// #=======================================================================================#
// #			                            router                                         #
// #=======================================================================================#
app.use('', logger, routes);



// #=======================================================================================#
// #			                        not Found middleware                               #
// #=======================================================================================#
app.use((request: Request, response: Response, next: NextFunction) => {
    response.send('<h1 style="text-align: center; color:red;">Not Found</h1>');
});



// #=======================================================================================#
// #			                      error middleware                                     #
// #=======================================================================================#
app.use((error: any, request: Request, response: Response, next: NextFunction) => {
    response.send(`<h1 style="text-align: center;color:red;">${error.message}</h1>`);
});


export default app;