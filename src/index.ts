import express from 'express';

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
app.use((request: express.Request, response: express.Response, next: express.NextFunction) => {
    response.send('Not Found')
});
// #=======================================================================================#
// #			                      error middleware                                     #
// #=======================================================================================#
app.use((error: any, request: express.Request, response: express.Response, next: express.NextFunction) => {
    response.send(error.message + '',)
});
