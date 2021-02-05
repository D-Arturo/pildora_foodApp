'use strict';

const port = 3000;

const app = require('./server');
require('./database');


app.listen(port, console.log(`Escuchando por el puerto: ${port}`));